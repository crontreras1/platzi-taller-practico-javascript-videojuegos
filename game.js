const canvas = document.querySelector ('#game');

// Método para empezar a dibujar en canva (getContext('');)
const game = canvas.getContext ('2d');

// Window = html de nuestro proyecto, 'load'= apenas cargue el proyecto
// Apenas termine que cargar (load) la página ejecuta x fragmento de código (en este caso, la función startGame)
window.addEventListener ('load', startGame);

function startGame () {
    // fillrect() definimos el espacio que va a ocupar dentro del canvas
    // Se envian 4 argumentos que lo posiciones en x y en y
    game.fillRect (10, 30, 100, 100);

    // clearRect() opuesto de fillRect, este borra utilizando los mismos 4 argumentos
    game.clearRect (20, 40, 50, 50);
}