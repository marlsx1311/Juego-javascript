const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load' , startGame);

function startGame(){

    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerHeight * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    // window.innerHeight
    window.innerWidth



    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,50,50);
    // game.fillText('hola', 100, 100);
};