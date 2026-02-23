let x = 1;
let y = 2;
let z = x%y;
console.log(z);

x = true;
y = false;

console.log(x);
console.log(!x);
console.log(!y);
console.log(!!x);

console.log(x === x);
console.log(x === y);
console.log(x !== y);
console.log(x !== x);

x = 5;
y = 3;

console.log(x > y);
console.log(x < y);
console.log(x >= y);

x = true;
y = false;

console.log(x && x);
console.log(x && y);
console.log(y && x);
console.log(y && y);

x = true;
y = false;

console.log(x || x);
console.log(x || y);
console.log(y || x);
console.log(y || y);

z = 35;

if(z > 20) {
    console.log("Se cumple la condicion");
}

if (1 + 1 === 2){
    console.log("La suma es correcta");
} else {
    console.log("No se cumple la condicion");
}

const prompt = require("prompt-sync")();
let nombre = prompt("Como te llamas?");
console.log(nombre);

let texto = "58";
let numero = parseInt(texto);

console.log(typeof texto);
console.log(typeof numero);