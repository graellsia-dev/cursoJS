//console.log("Hola Mundo!");

const saludo = "Hola clase, soy Paco";
//console.log(saludo);

const saludo2 = "Hola clase";
// console.log(saludo2 + ", soy Paco");

let saludo3 = "Hola clase";
// console.log(saludo3);

saludo3 = "Hola clase, soy Paco";
// console.log(saludo3);

// Ejercicios: crear tres variables, una modificable.
// hacer una suma, una resta, una multiplicación de las tres variables, 
// luego actualizar la tercera y volver a hacer la multiplicación

const a = 1;
const b = 2;
let c = 3;

// console.log("Suma ", a + b + c);
// console.log("Resta ", a - b - c);
// console.log("Multiplicación ", a * b * c);

let suma = a + b + c;
let resta = a - b - c;
let multiplicacion = a * b * c;

// console.log("Suma: " + suma);
// console.log("Resta: " + resta);
// console.log("Multiplicación: " + multiplicacion);

c = 5;
multiplicacion = a * b * c;
// console.log("Multiplicación con c actualizada: " + multiplicacion);

// console.warn("Esto es un error");
// console.error("Esto es un error grave");

// const resAlert = alert("Esta página es para mayores");
// console.log(resAlert);


/** EJERCICIO TEMPERATURA CON PROMPT */
let resPrompt = prompt("¿Qué temperatura hace?");

let temp = parseInt(resPrompt)
// console.log("Temperatura en Celsius:", temp + "ºC");
// console.log("Temperatura en Kelvin:", temp + 273 + "K");


// typeof sirve para obtener el tipo de dato
console.log(typeof resPrompt);
console.log(typeof parseInt(resPrompt));