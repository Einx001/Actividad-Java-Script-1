//Ejercicio 1

let numero1 = 1;
let numero2 = 2;

if(numero1 > numero2){
    console.log("el numero 1 es mayor");
} else {
    console.log("el numero 2 es mayor");
}

//Ejercicio 2

let num1 = 1;
let num2 = 2;
let num3 = 3;

if(num1 >= num2 && num1 >= num3){
    console.log("el numero 1 es mayor");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("el numero 2 es mayor");
} else {
    console.log("el numero 3 es mayor");
}

//Ejercicio 3

let nota = 100;

if (nota > 100){
    console.log("Alta");
} else if (nota < 100) {
    console.log("Baja");
} else {
    console.log("La nota es 100")
}

//Ejercicio 4

let parImpar = 2;

if(parImpar % 2 == 0){
    console.log("La Variable es par");
} else {
    console.log("La variable es impar");
}

//Ejercicio 5

const prompt = require("prompt-sync")();
let dia = prompt("Ingrese el dia ");
let mes = prompt("Ingrese el mes ");
let anio = prompt("Ingrese el año ");

if ((anio %4 === 0 && anio % 100 != 0) || (anio %400 === 0)){
    if(mes === 2 && dia === 28){
        mes = mes + 1;
        dia = 1;
    }
} else {
    if(mes === 2 && dia === 27){
        mes = mes  + 1;
        dia = 1;
    } else if (mes === 12 && dia === 31){
        mes = 1;
        dia = 1;
        anio = anio + 1;
    } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10){
        if(dia === 31){
            dia = 1;
            mes = mes + 1;
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        if(dia === 30){
            dia = 1;
            mes = mes  + 1;
        }
    } else {
        dia = dia + 1; 
    }
}

console.log(dia + ", " + mes + ", " + anio);

// Ejercicio 6

let pesoAlumno = 40;

if(pesoAlumno < 40) {
    console.log("El alumno pesa 40 kilos");
}
if (pesoAlumno >= 40 && pesoAlumno <= 50){
    console.log("El alumno pesa entre 40 y 50 kilos");
}
if (pesoAlumno > 50 && pesoAlumno < 60){
    console.log("El alumno pesa entre 50 y 60 kilos");
}
if (pesoAlumno >= 60){
    console.log("El alumno pesa mas de 60 kilos");
}

// Ejercicio 7

let estancia = 8;
let distancia = 1000;
let precioBillete = 0;

precioBillete = distancia * 2.5;

if (estancia > 7 && distancia > 800){
    precioBillete = precioBillete - ((precioBillete * 30)/100);
}

console.log("El precio del billete es: " + precioBillete);

// Ejercicio 8

//const prompt = require("prompt-sync")();
let diaSemana = prompt("Ingrese el dia ");
switch(diaSemana){
    case "Lunes":
        console.log("Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo");
    break;
    case "Martes":
        console.log("Martes, Miercoles, Jueves, Viernes, Sabado, Domingo");
    break;
    case "Miercoles":
        console.log("Miercoles, Jueves, Viernes, Sabado, Domingo");
    break;
    case "Jueves":
        console.log("Jueves, Viernes, Sabado, Domingo");
    break;
    case "Viernes":
        console.log("Viernes, Sabado, Domingo");
    break;
    case "Sabado":
        console.log("Sabado, Domingo");
    break;
    case "Domingo":
        console.log("Domingo");
    break;
    default:
        console.log("Ingrese un dia valido");
}

// Ejercicio 9

//const prompt = require("prompt-sync")();
let numIng1 = prompt("Ingrese el numero 1 ");
let numIng2 = prompt("Ingrese el numero 2 ");

if(numIng1 > numIng2){
    console.log("el numero 1 es mayor");
} else if (numIng1 < numIng2) {
    console.log("el numero 2 es mayor");
} else {
    console.log("los numeros son iguales");
}

//Ejercicio 10

//const prompt = require("prompt-sync")();
let div1 = prompt("Ingrese el numero 1 ");
let div2 = prompt("Ingrese el numero 2 ");
if(div1 % div2 === 0){
    console.log("El numero 1 es divisor del numero 2");
} else if (div2 % div1 === 0){
    console.log("El numero 2 es divisor del numero 1");
} else {
    console.log("Ningun numero es divisor del otro");
}

//Ejercicio 11

//const prompt = require("prompt-sync")();
let angulo = prompt("Ingrese el angulo ");

if(angulo < 90){
    console.log("el angulo es agudo");
} else if (angulo > 90){
    console.log("El angulo es obtuso");
} else {
    console.log("El angulo es recto");
}

//Ejercicio 12

let numOp1 = 1;
let numOp2 = 2;
let resultado = 0;

//const prompt = require("prompt-sync")();
let seleccionOp= prompt("Ingrese la operacion que desea realizar: ");

switch(seleccionOp){
    case "1":
        resultado = numOp1 + numOp2;
        console.log("La suma de los dos numeros es: " + resultado);
    break;
    case "2":
        resultado = numOp1 - numOp2;
        console.log("La resta de los dos numeros es: " + resultado);
    break;
    case "3":
        resultado = numOp1 * numOp2;
        console.log("La multiplicacion de los dos numeros es: " + resultado);
    break;
    case "4":
        resultado = numOp1 / numOp2;
        console.log("La division de los dos numeros es: " + resultado);
    break;
    default:
        console.log("Ingrese una opcion valida");
}

//Ejercicio 13

//const prompt = require("prompt-sync")();
let resultadoReal = 0;
let numReal1= prompt("Ingrese el numero real 1 ");
let numReal2= prompt("Ingrese el numero real 2: ");
let selectOperacion= prompt("Ingrese la operacion que desea realizar: ");

switch(selectOperacion){
    case "1":
        resultadoReal = numReal1 + numReal2;
        console.log("La suma de los dos numeros es: " + resultadoReal);
    break;
    case "2":
        resultadoReal = numReal1 * numReal2;
        console.log("La multiplicacion de los dos numeros es: " + resultadoReal);
    break;
    case "3":
        resultadoReal = numReal1 / numReal2;
        console.log("La division de los dos numeros es: " + resultadoReal);
    break;
    default:
        console.log("Ingrese una opcion valida");
}

//Ejercicio 14

//const prompt = require("prompt-sync")();
let numEval= prompt("Ingrese un numero ");

if(numEval >= 30){
    console.log("El numero es 30 o mayor");
}
if(numEval < 0){
    console.log("El numero es negativo");
}
if (numEval >= 30) {
    console.log("No es primo ni compuesto");
} else {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    if (divisores > 2) {
        console.log("Es un número compuesto");
    } else {
        console.log("Es un número primo");
    }
}
if(numEval === 0){
    console.log("Cero");
}
if(numEval === 1){
    console.log("Unidad");
}

//Ejercicio 15

//Ejercicio 16
//const prompt = require("prompt-sync")();
let mesEval = prompt("Ingrese un mes ");

if(mesEval === 2){
    console.log("El mes tiene 27 y hasta 28 dias si es año biciesto");
} 
if (mesEval === 1 || mesEval === 3 || mesEval === 5 || mesEval === 7 || mesEval === 8 || mesEval === 10 || mesEval === 12){
    console.log("El mes tiene 31 dias");
}
if (mesEval === 4 || mesEval === 6 || mesEval === 9 || mesEval === 11){
    console.log("El mes tiene 30 dias");
} 

// Ejercicio 17

let numMayor1 = prompt("Ingrese el numero 1 ");
let numMayor2 = prompt("Ingrese el numero 2 ");

if(numMayor1 < numMayor2){
    console.log("el menor es " + numMayor1);
} else {
    console.log("el menor es " + numMayor2);
}

// Ejercicio 18

let numOrden1 = prompt("Ingrese el numero 1 ");
let numOrden2 = prompt("Ingrese el numero 2 ");
let numOrden3 = prompt("Ingrese el numero 3 ");

if (numOrden1 < numOrden2 && numOrden2 < numOrden3){
    console.log("Los numeros estan en orden numerico");
} else {
    console.log("Los numeros no estan en orden numerico");
}

// Ejercicio 19

let resultadoOperador = 0;
let numOperador1 = prompt("Ingrese el numero 1 ");
let numOperador2 = prompt("Ingrese el numero 2 ");
let operador = prompt("Ingrese el operador");

switch(operador){
    case "+":
        resultadoOperador = numOperador1 + numOperador2;
        console.log("La suma de los dos numeros es: " + resultadoOperador);
    break;
    case "-":
        resultadoOperador = numOperador1 - numOperador2;
        console.log("La resta de los dos numeros es: " + resultadoOperador);
    break;
    case "*":
        resultadoOperador = numOperador1 * numOperador2;
        console.log("La multiplicacion de los dos numeros es: " + resultadoOperador);
    break;
    case "/":
        resultadoOperador = numOperador1 / numOperador2;
        console.log("La division de los dos numeros es: " + resultadoOperador);
    break;
    case "%":
        resultadoOperador = numOperador1 % numOperador2;
        console.log("El modulo de los dos numeros es: " + resultadoOperador);
    break;
    default:
        console.log("Ingrese una operacion valida");
}
