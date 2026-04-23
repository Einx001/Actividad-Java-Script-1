const filas = 10;
const columnas = 4;

const avion = document.getElementById("avion");
const mensaje = document.getElementById("mensaje");

// Crear matriz de asientos
for (let i = 0; i < filas; i++) {
    const fila = document.createElement("div");
    fila.className = "fila";

    for (let j = 0; j < columnas; j++) {
        const asiento = document.createElement("div");
        asiento.className = "asiento";

        asiento.textContent = `${i + 1}-${j + 1}`;

        asiento.dataset.ocupado = "false";

        asiento.addEventListener("click", function() {

            if (asiento.dataset.ocupado === "true") {
                mensaje.textContent = "❌ Este asiento ya está reservado.";
                return;
            }

            asiento.dataset.ocupado = "true";
            asiento.classList.add("ocupado");
            mensaje.textContent = "✔ Asiento reservado correctamente.";
        });

        fila.appendChild(asiento);
    }

    avion.appendChild(fila);
}