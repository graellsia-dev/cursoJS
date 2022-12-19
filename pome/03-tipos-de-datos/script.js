// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, array, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato

 let variableString = "Web en Construcción";
 let variableNumber = 69;
 let variableUndefined    ;
 let variableArray = [1 , 2 , 3 , 4 ];
 let variableBooleana = true;
 console.log("variableString", variableString);
 console.log("variableNumber", variableNumber);
 console.log("variableUndefined", variableUndefined);
 console.log("variableArray", variableArray);
 console.log("variableBooleana", variableBooleana);

 console.log("El tipo de dato de variableString es: ", typeof variableString)
 console.log("El tipo de dato de variableNumber es: ", typeof variableNumber)
 console.log("El tipo de dato de variableUndefined es: ", typeof variableUndefined)
 console.log("El tipo de dato de variableArray es: ", typeof variableArray)
 console.log("El tipo de dato de variableBooleana es: ", typeof variableBooleana)
 









// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.

let numero = '123452342352';
console.log("que tipo", typeof numero);
numero = parseInt (numero);
console.log("que tipo", typeof numero);





// Ejercicio 3: 
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado

let n1 = 21.12;
let entera = parseInt (n1);
console.log('Numero entero', entera);
let decimal = parseFloat(n1);
console.log('Numero con decimal', decimal);
console.log('Solo decimal', n1 - Math.floor(decimal).toFixed(1))

// Ejercicio 4:
// Hacer una operación matemática que devuelva NaN.

const nx = parseInt("x");
console.log(nx);

// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.

const temperatura =  parseInt(prompt('Introducir temperatura'));
const tempFarenheit = temperatura * 9/5 + 32;
const tempKelvin = temperatura + 273;
console.log('temp Farenheit', tempFarenheit);
console.log('temp Kelvin', tempKelvin);

// Ejercicio 7:
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.

const resAlert = alert('A continuacion introduce 3 valores');
let a = parseInt (prompt("Introduce a"))
let b = parseInt (prompt("Introduce b"))
let c = parseInt (prompt("Introduce c"))
let res1 = (-b + Math.sqrt(b** - 4 * a * c) )/(2 * a)
let res2 = (-b - Math.sqrt(b** - 4 * a * c) )/(2 * a)

console.log ('respuesta1', res1);
console.log ('respuesta2', res2);





// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"







