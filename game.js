const canvas = document.querySelector ('#game');
// Método para empezar a dibujar en canva (getContext('');)
const game = canvas.getContext ('2d');

// Window = html de nuestro proyecto, 'load'= apenas cargue el proyecto
// Apenas termine que cargar (load) la página ejecuta x fragmento de código (en este caso, la función startGame)
window.addEventListener ('load', startGame);

function startGame () {
    let canvasSize; 

    // innerHeight() and innerWidth son métodos de la palabra reservada windows que contienen la información del alto y ancho de la sección respecivamente. Estos los podemos manipular
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.9; 
    } else {
        canvasSize = window.innerHeight * 0.9; 
    }

    // .setAttribute() Es un método para darle los atributos a x etiqueta o varibale como los que se dan en html
    // canvas: nombre de la varible, setAttribute: método, 'height': atributo que se va a manipular, canvasSize: varible sin declarar que cambia de valor dependiendo de las necesidades del if else de arriba
    canvas.setAttribute('height', canvasSize);
    canvas.setAttribute('width', canvasSize); 

    // repartición equitativa de las celdas dentro del canvas del juego 10x10
    const elementsCanvas = canvasSize / 10; 

    // .font, .fillStyle y .textAlign No funciona como método, sino más bien como atributo, es por eso que va el igual y no el parentesis
    game.font = `${elementsCanvas}px Verdana`;
    game.textAlign = 'end'; 
    // insertar elementos dentro del canvas
    // .fillText('texto aquí', x, y) Nos ayuda a insertar texto
    for (let i = 0; i <= 10; i++) {
        game.fillText ('😰', elementsCanvas * i, elementsCanvas); 
    }
}