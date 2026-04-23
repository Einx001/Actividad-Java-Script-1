const globo = document.getElementById("globo");

let escala = 1;
const incremento = 0.1;

// Límite para explotar
const limite = 3;

// Función de control de teclado
function controlarGlobo(event) {

    if (event.key === "ArrowUp") {
        escala += incremento;
    }

    if (event.key === "ArrowDown") {
        escala -= incremento;

        // evitar que se haga demasiado pequeño
        if (escala < 0.2) {
            escala = 0.2;
        }
    }

    // Aplicar escala
    globo.style.transform = `scale(${escala})`;

    // Condición de explosión
    if (escala >= limite) {
        explotar();
    }
}

// Función de explosión
function explotar() {
    globo.textContent = "💥";
    document.removeEventListener("keydown", controlarGlobo);
}

// Activar evento de teclado
document.addEventListener("keydown", controlarGlobo);