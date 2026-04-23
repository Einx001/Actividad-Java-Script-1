const imagen = document.getElementById("imagen");

// Imagen original y secundaria
const imagenOriginal = "img1.jpg";
const imagenHover = "img2.jpg";

// Cambiar imagen al pasar el cursor
imagen.addEventListener("mouseover", function() {
    imagen.src = imagenHover;
});

// Restaurar imagen al quitar el cursor
imagen.addEventListener("mouseout", function() {
    imagen.src = imagenOriginal;
});