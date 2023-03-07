const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

// esta línea es para que se ejecute el código startGame en el momento que se cargue la ventana. Esto es muy importante para evitar errores.
window.addEventListener('load', setCanvasSize);
// Una vez que hemos definido las medidas del canvas y de los elementos internos, esta línea es la que lo hace responsive en cuanto se mueve la pantalla.
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementsSize = canvasSize / 10;

  startGame();  
}

function startGame() {
  console.log({ canvasSize, elementsSize});

  game.font = elementsSize + 'px Arial';
  game.textAlign = 'center';
  game.textBaseline = 'middle';

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      game.fillText(emojis['X'], elementsSize * (i - 1/2), elementsSize * (j - 1/2));
    }  
  }
}  
  


