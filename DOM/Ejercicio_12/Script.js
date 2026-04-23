function calcular(operacion) {

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultado = "No se puede dividir por 0";
            } else {
                resultado = num1 / num2;
            }
            break;
    }

    document.getElementById("resultado").textContent =
        "Resultado: " + resultado;
}