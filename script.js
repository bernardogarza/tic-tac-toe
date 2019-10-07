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

let boardGame = Array.from(document.querySelectorAll('.s'));
let board = document.querySelectorAll('.s');

let identifyId = event => {
    player1.push(parseInt(event.target.id));
}

let player1 = [];
let player2 = [];
let counter = 0;

let startGame = document.getElementById('start-game');
startGame.addEventListener('click', ()=> {
    startGame.style.display = 'none';
    boardGame.forEach((square) => {
        square.classList.add('hover');
        board.forEach(function(e) {e.style.display='inline'});
        square.addEventListener('click', () => {
            if (counter%2 === 0 && square.innerHTML === '') {
                square.innerHTML = 'X';
                counter++;
                player1.push(parseInt(event.target.id));
                square.classList.remove('hover');
                let number1 = 0;
                if (player1.length >= 3) {
                    for(let i = 0; i < 8 ; i++){
                        for (let j = 0; j < player1.length; j++) {
                            if (winningArray[i].includes(player1[j])) {
                                number1++;
                            }
                            if (number1 === 3){
                                board.forEach(function(e) {e.style.display='none'});
                                alert('Player 1');
                                startGame.style.display = 'inline';
                            }
                        }
                        number1 = 0;
                    }
                }
            } else if (counter%2 !== 0 && square.innerHTML === '') {
                square.innerHTML = 'O';
                counter++;
                player2.push(parseInt(event.target.id));
                square.classList.remove('hover');
                let number2 = 0;
                if (player2.length >= 3) {
                    for(let i = 0; i < 8; i++){
                        for (let j = 0; j < player2.length; j++) {
                            if (winningArray[i].includes(player2[j])) {
                                number2++;
                            }
                            if(number2 === 3){
                                board.forEach(function(e) {e.style.display='none'});
                            }
                        }
                        number2 = 0;
                    }
                }
            }
        });
    });
});