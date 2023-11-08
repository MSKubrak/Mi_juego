

function jugar() {
    var miJuego = ["piedra", "papel", "tijera"];
    var eleccionUsuario = prompt("Seleccionar piedra, papel o tijera:").toLowerCase();
    var eleccionMaquina = miJuego[Math.floor(Math.random() * 3)];
    
    alert("La computadora eligió: " + eleccionMaquina);
    
    if (eleccionUsuario === eleccionMaquina) {
        alert("Empate");
    } else if ((eleccionUsuario === "piedra" && eleccionMaquina === "tijera") ||
               (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
               (eleccionUsuario === "tijera" && eleccionMaquina === "papel")) {
        alert("¡Ganaste!");
    } else {
        alert("¡Fallaste!");
    }
}
