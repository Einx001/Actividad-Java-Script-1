const cuadro = document.getElementById("cuadro");

// Color inicial
const colorInicial = "gray";

// Aplicar estilos iniciales
cuadro.style.width = "100px";
cuadro.style.height = "100px";
cuadro.style.backgroundColor = colorInicial;

// Función para color aleatorio
function colorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Cambiar color al pasar el mouse
cuadro.addEventListener("mouseover", function() {
    cuadro.style.backgroundColor = colorAleatorio();
});

// Volver al color inicial con doble clic
cuadro.addEventListener("dblclick", function() {
    cuadro.style.backgroundColor = colorInicial;
});