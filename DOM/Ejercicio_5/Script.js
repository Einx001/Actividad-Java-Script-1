document.getElementById("crear").addEventListener("click", function() {

    // Crear el nuevo div
    const nuevoDiv = document.createElement("div");

    // Asignar texto
    nuevoDiv.textContent = "Hola mundo";

    // Estilos
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.textAlign = "center";
    nuevoDiv.style.padding = "20px";
    nuevoDiv.style.marginTop = "10px";

    // Agregar al contenedor
    document.getElementById("contenedor").appendChild(nuevoDiv);
});