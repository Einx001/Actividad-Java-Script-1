document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const valor = parseFloat(document.getElementById("valor").value);
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;

    let resultado;

    // Convertir primero a Celsius
    let celsius;
    if (origen === "C") {
        celsius = valor;
    } else if (origen === "F") {
        celsius = (valor - 32) * 5 / 9;
    } else if (origen === "K") {
        celsius = valor - 273.15;
    }

    // Convertir de Celsius a destino
    if (destino === "C") {
        resultado = celsius;
    } else if (destino === "F") {
        resultado = (celsius * 9 / 5) + 32;
    } else if (destino === "K") {
        resultado = celsius + 273.15;
    }

    document.getElementById("resultado").textContent =
        "Resultado: " + resultado.toFixed(2) + " °" + destino;
});