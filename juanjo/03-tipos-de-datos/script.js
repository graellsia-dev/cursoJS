// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// console.log("Comenzamos")

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato
let variableString = "Esto es un string";
let variableNumber = 1;
let variableUndefined = undefined;
let variableBooleano = true;

// console.log ("variableString:", variableString);
// console.log ("variableNumber:", variableNumber);
// console.log ("variableUndefined:", variableUndefined);
// console.log ("variableBooleano:", variableBooleano);

// console.log ("El tipo de dato de variableString:", typeof variableString);
// console.log ("El tipo de dato de variableNumber:", typeof variableNumber);
// console.log ("El tipo de dato de variableUndefined:", typeof variableUndefined);
// console.log ("El tipo de dato de variableBooleano:", typeof variableBooleano);


// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.

let String2 = "123";
// console.log ("String2;", String2);
// console.log ("El tipo de dato de String2:", typeof String2);
String2 = parseInt(String2);  
// console.log ("El tipo de dato de String2:", typeof String2);


// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado

let numberdecimal = 523.84;
// console.log ("numberdecimal;", numberdecimal);
// console.log ("El tipo de dato de Numberdecimal:", typeof numberdecimal);

// console.log (Math.floor(numberdecimal)); 

console.log ((numberdecimal - Math.floor(numberdecimal)).toFixed(2)); 


// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.

console.log (3*"hola");



// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.

const temperatura = parseInt (prompt("introduce temperatura"));  
const tempFarenheit = temperatura *9/5 + 32;
const tempKelvin = temperatura + 273;
console.log("Temp Farenheit", tempFarenheit);
console.log("Temp Kelvin", tempKelvin);


// Ejercicio 7: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.




// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"







