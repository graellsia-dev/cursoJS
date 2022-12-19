// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato


console.log("Primeros ejercicios")



let variableString = 'esto es una cadena caracteres'
let variableNumber = 25
let variableUndefined
let variableBooleana = true 

console.log("variableString ", variableString)
console.log(variableNumber)
console.log(variableUndefined)
console.log(variableBooleana)


console.log("El tipo de dato de variableString es: ", typeof variableString)
console.log("El tipo de dato de variableNumber es: ", typeof variableNumber)
console.log(variableUndefined)
console.log(variableBooleana)



// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.
// parseInt me cambia de caracteres a númerico

let variableString2 = '25'
let variableNumber2 = parseInt(variableString2)

console.log(variableString2)
console.log("El tipo de dato de variableString2 es: ",typeof variableString2)
console.log(variableNumber2)
console.log("El tipo de dato de variableNumber2 es: ",typeof variableNumber2)


// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado

const decimal = 13.15;

console.log(parseInt (decimal))
console .log(Math.floor(decimal))

console.log((decimal - Math.floor(decimal)).toFixed(2))






// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.

console.log(3 * "hola");





// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.
// para ocultar todo ctrl+ç

// const resPrompt = prompt('¿que temperatura hace?');

// console.log( parseInt( resPrompt ) + 273);




// Ejercicio 7: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.




// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"







