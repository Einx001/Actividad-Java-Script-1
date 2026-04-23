const texto = document.getElementById("texto");

let colorActual = true;

setInterval(function() {
    if (colorActual) {
        texto.style.color = "red";
    } else {
        texto.style.color = "blue";
    }
    colorActual = !colorActual;
}, 1000);