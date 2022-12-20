/////////////
// CLASE 3 //
/////////////

// LET y CONST
//let variableQueCambia = 1
//const variableQueNoCabia = "hola"

// STRING Y NUMBER
//let dia = "martes"
//let numero1 = 7
//let numero2 = 7.24

// BOOLENAOS
//let verdadero = true;
//let falso = false;

// UNDEFINED
//let noDeclarada;
//console.log(noDeclarada)

// ARRAYS
//let array1 = [1, 2, 3, 4]
//let array2 = ["hola", " ", "mundo"]
//let array3 = ["hola", 3,"mundo", array2]

// EJERCICIOS:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

console.log("Comenzamos los ejercicios del tema 3")

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato

let variableString = "esto es un string";
let variableNumber = 27;
let varibaleUndefined;
let variableBooleana = true;

console.log("El tipo de dato de variableBooleana es: ", typeof variableBooleana)
console.log("variableNumber: ", variableNumber)
console.log("varibaleUndefined: ", varibaleUndefined)
console.log("variableBooleana: ", variableBooleana)

console.log("El tipo de dato de variableString es: ", typeof variableString)
console.log("El tipo de dato de variableNumber es: ", typeof variableNumber)
console.log("El tipo de dato de varibaleUndefined es: ", typeof varibaleUndefined)
console.log("El tipo de dato de variableBooleana es: ", typeof variableBooleana)

// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.

variableString = "72"
let variableStringToNumber = parseInt(variableString)

console.log("variableString: ", variableString)
console.log("El tipo de dato de variableString es: ", typeof variableString)
console.log("variableStringToNumber: ", variableStringToNumber)
console.log("El tipo de dato de variableStringToNumber es: ", typeof variableStringToNumber)

// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado

let numeroDecimal = 5.95;
let parteEntera = Math.floor(numeroDecimal)
let parteDecimal = numeroDecimal - parteEntera
let parteDecimalrRedondeada = parteDecimal.toFixed(2)

console.log("numeroDecimal: ", numeroDecimal)
console.log("parteEntera: ", parteEntera)
console.log("parteDecimal: ", parteDecimal)
console.log("parteDecimalrRedondeada: ", parteDecimalrRedondeada)


// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.

console.log(3 * "hola");



// Ejercicio 5:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.

const temperatura = parseInt(prompt('introduce temperatura'))
const tempFarenheit = temperatura * 9/5 + 32;
const tempKelvin = temperatura + 273;
console.log('Temp farenheit', tempFarenheit )
console.log('Temp Kelvin', tempKelvin )


// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.

const a = parseInt(prompt("Introduzca numero A"));
const b = parseInt(prompt("Introduzca numero B"));
const c = parseInt(prompt("Introduzca numero C"));

const res1 = (-b + Math.sqrt(b**2 - 4 * a * c))/(2 * a);
const res2 = (-b - Math.sqrt(b**2 - 4 * a * c))/(2 * a);

console.log('respuesta 1 ', res1);
console.log('respuesta 2 ', res2);


// Ejercico 7:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"







