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

let identifyId = event => {
    player1.push(parseInt(event.target.id));
}

let startGame = document.getElementById('start-game');
startGame.addEventListener('click', ()=> {
    startGame.style.display = 'none';
});

let player1 = [];
let player2 = [];
let counter = 0;

boardGame.forEach((square) => {
    square.addEventListener('click', () => {
        if (counter%2 === 0 && square.innerHTML === '') {
            square.innerHTML = 'X';
            counter++;
            player1.push(parseInt(event.target.id))
        } else if (counter%2 !== 0 && square.innerHTML === '') {
            square.innerHTML = 'O';
            counter++;
            player2.push(parseInt(event.target.id))
        }
    });
});