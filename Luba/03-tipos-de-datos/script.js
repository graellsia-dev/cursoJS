// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato



// console.log("Comenzamos los ejercicios del tema 3")
// let variableString = "3 dia";
// let variableNumber = 50;
// let variableUndefined ;
// let variableBooleana = true;
// console.log("variableString:", variableString)
// console.log("variableNumber:", variableNumber)
// console.log("variableUndefined:", variableUndefined)
// console.log("variableBooleana:", variableBooleana)

// console.log("El tipo de dato de variableString es:",typeof variableString)
// console.log("El tipo de dato de variableNumber es:", typeof variableNumber)
// console.log("El tipo de dato de variableUndefined es:", typeof variableUndefined)
// console.log("El tipo de dato de variableBooleana es:", typeof variableBooleana)

// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.
// let variableString2 = '2134';
// console.log(typeof variableString2)
// variableString2 = parseInt(variableString2)
// console.log(typeof variableString2)




// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado
let variableNumber3 = 100.50;
console.log(variableNumber3);
console.log(Math.trunc(variableNumber3));
console.log(Math.floor(variableNumber3));
console.log(variableNumber3 - Math.floor(variableNumber3));



// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.
console.log(3*"hola");




// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.
const temperatura = parseInt(prompt('introduce temperatura'))
const tempFarenheit =temperatura * 9/5 +32;
const tempKelvin = temperatura + 273;
console.log('tem farenheit', tempFarenheit );
console.log('temp Kelvin,' tempKelvin );

const res1 = (-b + Math.sqrt(b**2 - 4 * a * c))/(2 * a);
const res2 = (-b - Math.sqrt(b**2 - 4 * a * c))/(2 * a )

console.log('respuesta 1', res1);
console.log('respuesta 2', res2);


// Ejercicio 7: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.




// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"







