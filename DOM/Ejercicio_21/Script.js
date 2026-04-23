const cantidad = 20; // cantidad de puntos del rastro
const puntos = [];

// Crear los divs del rastro
for (let i = 0; i < cantidad; i++) {
    const div = document.createElement("div");
    div.className = "punto";
    document.body.appendChild(div);
    puntos.push(div);
}

let mouseX = 0;
let mouseY = 0;

// Capturar movimiento del mouse
document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animación del rastro
function moverRastro() {
    let x = mouseX;
    let y = mouseY;

    puntos.forEach((punto, index) => {
        punto.style.left = x + "px";
        punto.style.top = y + "px";

        // efecto de retraso entre puntos
        x += (puntos[index]?.offsetLeft - x) * 0.3;
        y += (puntos[index]?.offsetTop - y) * 0.3;
    });

    requestAnimationFrame(moverRastro);
}

moverRastro();