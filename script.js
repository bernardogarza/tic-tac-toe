let startGame = document.getElementById('start-game');
const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function createPlayer(name, mark){
    return({name, mark});
}

let Game = (()=>{
    let boardGame = Array.from(document.querySelectorAll('.s'));
    let turn, player, number, gameOver, p1, p2, player1, player2;
    let messages = document.getElementById('messages');
    let players = document.getElementById('players');

    let start = () => {
        turn = 1;
        gameOver = false;
        generatePlayers();
        startGame.style.display = 'none';
        boardGame.forEach((square) => {
            square.classList.add('hover');
            square.innerHTML = '';
            square.style.display = 'inline';
            square.addEventListener('click', markSquare);
        });
        playerTurn();
        player = player1;
        messages.style.display = 'inline';
        playerTurnMessage(player);
    }

    let generatePlayers = () => {
        p1 = document.getElementById('player1');
        p2 = document.getElementById('player2');
        player1 = createPlayer(p1.value, 'X');
        player2 = createPlayer(p2.value, 'O');    
        player1.squares = [];
        player2.squares = [];
        players.style.display = 'none';
    }

    let markSquare = square => {
        square.target.innerHTML = player.mark;
        addSqueare(player, square.target.id);
        disableSquare(square);
        winner(player);
        if (gameOver === false) {
            turn++;
            playerTurn();
            playerTurnMessage(player);
            tieGame(turn);
        }
    }

    let playerTurn = () => {
        if (turn%2 === 1) {
            player = player1
        } else {
            player = player2
        }
    }

    let playerTurnMessage = player => {
        messages.innerHTML = `${player.name}'s turn`;
    }

    let addSqueare = (player, value) => {
        if (player === player1) {
            player1.squares.push(parseInt(value));
        } else {
            player2.squares.push(parseInt(value));
        }
    }

    let disableSquare = square => {
        square.target.classList.remove('hover');
        square.target.removeEventListener('click', markSquare);
    }

    let tieGame = turn => {
        if (turn === 10) {
            messages.innerHTML = 'Game Over';
            resetStartButton();
        }
    }

    let winner = player => {
        number = 0;
        if (player.squares.length >= 3) {
            for(let i = 0; i < 8 ; i++){
                for (let j = 0; j < player.squares.length; j++) {
                    if (winningArray[i].includes(player.squares[j])) {
                        number++;
                    }
                    if (number === 3){
                        messages.innerHTML = `${player.name} is the winner!`;
                        gameOver = true;
                        boardGame.forEach((square) => {
                            square.removeEventListener('click', markSquare);
                            square.classList.remove('hover');
                        });
                        resetStartButton();
                    }
                }
                number = 0;
            }
        }
    }

    let resetStartButton = () => {
        startGame.innerHTML = 'Restart';
        startGame.style.display = 'inline';
        startGame.removeEventListener('click', start);
        startGame.addEventListener('click', restart);
    }

    let restart = () => {
        players.style.display = 'inline';
        boardGame.forEach((square) => {
            square.style.display = 'none';
        });
        messages.style.display = 'none';
        startGame.innerHTML = 'Start Game'
        startGame.style.display = 'inline';
        startGame.addEventListener('click', start);
    }

    return {start};
})();

startGame.addEventListener('click', Game.start);