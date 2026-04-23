const imagenes = [
    "https://via.placeholder.com/300/ff0000",
    "https://via.placeholder.com/300/00ff00",
    "https://via.placeholder.com/300/0000ff"
];

document.getElementById("mostrar").addEventListener("click", function() {

    const indice = Math.floor(Math.random() * imagenes.length);

    document.getElementById("imagen").src = imagenes[indice];
});