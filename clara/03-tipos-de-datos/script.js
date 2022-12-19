// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

console.log ( "Comenzamos los ejercicios");

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato

/*
let variableString = "Hola";
let variableNumber = 8.3;
let varibleUndefinded = undefined;
let variablelBooleana = false
let variableNada = null

console.log("variableString:",variableString, );
console.log("variableNumber:" ,variableNumber + 5);
console.log("varibleUndefinded:",varibleUndefinded);
console.log("variablelBooleana:", variablelBooleana);
console.log("variableNada:", variableNada);


console.log("EL tipo de dato de variableString:",typeof  variableString);
console.log("EL tipo de dato de variableNumber:" , typeof variableNumber);
console.log("EL tipo de dato de varibleUndefinded:",typeof  varibleUndefinded);
console.log("EL tipo de dato de variablelBooleana:",typeof  variablelBooleana);
console.log("EL tipo de dato de variableNada:", typeof variableNada);
*/

// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.

/*
let numeroString = "7";
let numeroStringToNumber = parseInt(numeroString)
console.log(numeroString);
console.log(typeof numeroString);
console.log(numeroStringToNumber);
console.log(typeof numeroStringToNumber);
*/

// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado

/*
let numeroDecimal = 5.95;
let parteEntera = Math.floor(numeroDecimal);
let parteDecimal = numeroDecimal - parteEntera;
let parteDecimalRedondeada = parteDecimal.toFixed(2);

console.log("numeroDecimal:", numeroDecimal);
console.log("parteEntera:", parteEntera);
console.log("parteDecimal:", parteEntera);
console.log("parteDecimalRedondeada:", parteDecimalRedondeada);

*/

// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.

//console.log(3*"hola");



// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.


const resPrompt = prompt("¿qué temperatura hace?")
const temperartura =parseInt(prompt("qué temperatura hace?"))

console.log("temperatura", parseInt(resPrompt) + 273);

console.log(typeof resPrompt);
console.log(typeof parseInt(resPrompt));



// Ejercicio 7: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.

const a =ñr


// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"
/*
const nombreUsuario = prompt("Cuál es tu nombre");
console.log("nombre introducido:", nombreUsuario);
*/





