const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load' , setCanvasSize);
window.addEventListener('resize' , setCanvasSize);

function setCanvasSize(){
    
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;
    startGame()
}


function startGame(){
    

    game.font = elementsSize + 'px Verdana'
    game.textAlign = 'end';

    const map = maps[0];
    const mapRows = maps[0].trim().split('\n');

    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis['X'], elementsSize * col, elementsSize * row);  
        }
        
      }
    
};