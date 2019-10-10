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

    return {start};
})();

startGame.addEventListener('click', Game.start);

// let identifyId = event => {
//     player1.push(parseInt(event.target.id));
// }

// startGame.addEventListener('click', ()=> {
//     startGame.style.display = 'none';
//     boardGame.forEach((square) => {
//         square.classList.add('hover');
//         square.innerHTML = '';
//         board.forEach(function(e) {e.style.display='inline'});
//         square.addEventListener('click', () => {
//             if (counter%2 === 0 && square.innerHTML === '') {
//                 square.innerHTML = 'X';
//                 counter++;
//                 player1.push(parseInt(event.target.id));
//                 square.classList.remove('hover');
//                 let number1 = 0;
//                 if (player1.length >= 3) {
//                     for(let i = 0; i < 8 ; i++){
//                         for (let j = 0; j < player1.length; j++) {
//                             if (winningArray[i].includes(player1[j])) {
//                                 number1++;
//                             }
//                             if (number1 === 3){
//                                 board.forEach(function(e) {e.style.display='none'});
//                                 alert('Player 1 wins');
//                                 resetPlayer();
//                                 square.innerHTML = '';
//                                 startGame.style.display = 'inline';
//                             }
//                         }
//                         number1 = 0;
//                     }
//                 }
//             } else if (counter%2 !== 0 && square.innerHTML === '') {
//                 square.innerHTML = 'O';
//                 counter++;
//                 player2.push(parseInt(event.target.id));
//                 square.classList.remove('hover');
//                 let number2 = 0;
//                 if (player2.length >= 3) {
//                     for(let i = 0; i < 8; i++){
//                         for (let j = 0; j < player2.length; j++) {
//                             if (winningArray[i].includes(player2[j])) {
//                                 number2++;
//                             }
//                             if(number2 === 3){
//                                 board.forEach(function(e) {e.style.display='none'});
//                                 alert('Player 2 wins');
//                                 resetPlayer();
//                                 startGame.style.display = 'inline';
//                             }
//                         }
//                         number2 = 0;
//                     }
//                 }
//             }
//         });
//     });
// });