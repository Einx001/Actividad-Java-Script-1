const cuadro = document.getElementById("cuadro");
const contenedor = document.getElementById("contenedor");

let posicion = 0;

document.getElementById("mover").addEventListener("click", function() {

    const max = contenedor.clientWidth - cuadro.clientWidth;

    if (posicion < max) {
        posicion += 20; // velocidad de movimiento
        cuadro.style.left = posicion + "px";
    }
});