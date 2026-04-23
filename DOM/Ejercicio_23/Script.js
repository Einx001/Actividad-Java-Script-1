const numeroSecreto = Math.floor(Math.random() * 6); // 0 a 5
let intentos = 3;

const input = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    if (intentos <= 0) return;

    const numeroUsuario = parseInt(input.value);

    if (numeroUsuario === numeroSecreto) {
        mensaje.value = "¡Ganaste! Adivinaste el número secreto 🎉";
        finalizarJuego();
    } else {
        intentos--;

        if (intentos > 0) {
            mensaje.value = "Fallaste el número ❌. Intenta de nuevo.";
            intentosTexto.textContent = intentos;
        } else {
            mensaje.value = "Perdiste 😢. El número era: " + numeroSecreto;
            intentosTexto.textContent = 0;
            finalizarJuego();
        }
    }

    input.value = "";
});

function finalizarJuego() {
    document.getElementById("numero").disabled = true;
    document.querySelector("button").disabled = true;
}