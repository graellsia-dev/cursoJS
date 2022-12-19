// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.


console.log('Hola mundo')

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato

// let variableString= 'esto es un string';
// console.log("string ",variableString)

// let variableNumber= 123;
// console.log("number ",variableNumber)

// let numero = 1;
// let variableUndefined;
// let variableUndefined2 = undefined;
// console.log("undefined variable",variableUndefined)

// let nodeclarado;
// console.log(nodeclarado)

// let variableBooleano = true
// console.log("booleano ",variableBooleano)

// console.log("string ", typeof variableString)
// console.log("number ", typeof variableNumber)
// console.log("undefined variable", typeof variableUndefined)
// console.log("booleano ", typeof variableBooleano)



// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.
let variableString2= '1';
console.log("1", typeof variableString2);

variableString2 = parseInt(variableString2);
console.log("1", typeof variableString2);


// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado
let variableNumeroDecimal = 1.02;

console.log("variableNumeroDecimal ", variableNumeroDecimal)
console.log("part entera ",  Math.trunc(variableNumeroDecimal))

console.log(Math.trunc(variableNumeroDecimal)); // 1 

console.log('partedecimal' , (variableNumeroDecimal - Math.trunc(variableNumeroDecimal)).toFixed(2)) 









// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.
Math.trunc(NaN);      // NaN





// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.





// Ejercicio 7: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.




// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"







