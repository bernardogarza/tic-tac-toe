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

let startGame = document.getElementById('start-game');
startGame.addEventListener('click', ()=> {
    startGame.style.display = 'none';
});

let player = 1;
let counter = 0;


boardGame.forEach((square) => {
    square.addEventListener('click', () => {
        if (counter%2 === 0) {
            square.innerHTML = 'X';
            counter++;
        } else {
            square.innerHTML = 'O';
            counter++;
        }
    });
});