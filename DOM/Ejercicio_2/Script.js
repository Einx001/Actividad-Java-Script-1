document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const dolares = parseFloat(document.getElementById("dolares").value);

    const tasa = 4000;

    const pesos = dolares * tasa;

    document.getElementById("resultado").textContent =
        dolares + " USD son " + pesos + " COP";
});