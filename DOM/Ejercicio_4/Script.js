document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const area = (base * altura) / 2;

    document.getElementById("resultado").textContent =
        "El área del triángulo es: " + area.toFixed(2);
});