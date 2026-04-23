let contador = 1;

document.getElementById("agregar").addEventListener("click", function() {

    const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];

    const nuevaFila = tabla.insertRow();

    const celdaId = nuevaFila.insertCell(0);
    const celdaNombre = nuevaFila.insertCell(1);

    celdaId.textContent = contador;
    celdaNombre.textContent = "Usuario " + contador;

    contador++;
});