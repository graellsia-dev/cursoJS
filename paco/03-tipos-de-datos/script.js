let dia = "lunes"
//console.log(`Hoy es ${dia}`)

// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear una variable de cada tipo de los que hemos visto en clase (string, number, undefined, booleano)
// Cada variable deberemos aplicarle el metodo correspondiente que devuelva cual es el tipo de dato
let variableTipoString = "Hola";
// console.log(typeof(variableTipoString));
let variableTipoNumber = 5;
// console.log(typeof(variableTipoNumber));
let variableTipoUndefined;
// console.log(typeof(variableTipoUndefined));
let variableTipoBooleano = true;
// console.log(typeof(variableTipoBooleano));

// Ejercicio 2: 
// Crear una variable tipo string que contenga un numero, convertir esta variable a numero.
let numero = "5";
let numeroInt = parseInt(numero);

// Ejercicio 3: AVANZADO
// Crear una variable que sea un numero decimal, obtener su parte entera y su parte decimal por separado, 
// y guardarlo en dos variables por separado
let numeroDecimal = 2.3;
let parteEntera = Math.trunc(numeroDecimal);
let parteDecimal = numeroDecimal - parteEntera;
// console.log("Número decimal: " + numeroDecimal);
// console.log("Parte entera: " + parteEntera);
// console.log("Parte decimal: " + parteDecimal.toFixed(1));

// Ejercicio 4: AVANZADO
// Hacer una operación matemática que devuelva NaN.
// console.log("Operación: " + (0/0));

// Ejercicio 6:
// Mediante un prompt solicitar al usuario que introduzca una temperatura y cambiarla a grados farenheit.
// let temperatura = prompt("Temperatura");
// let temperaturaFahrenheit = parseInt(temperatura) + 273;
// console.log("Temperatura en Fahrenheit: " + temperaturaFahrenheit);

// Ejercicio 7: AVANZADO
// Mediante un prompt solicitar al usuario 3 numeros que formen una ecuacion de segundo grado y resolverla.
// let primerNumeroEcuacion = parseInt(prompt("Primer número de la ecuación"));
// let segundoNumeroEcuacion = parseInt(prompt("Segundo número de la ecuación"));
// let tercerNumeroEcuacion = parseInt(prompt("Tercer número de la ecuación"));
// console.log("Ecuación: " + primerNumeroEcuacion + "x2 + " + segundoNumeroEcuacion + "x + " + tercerNumeroEcuacion + " = 0");
// let solucionEcuacion = (-primerNumeroEcuacion + Math.sqrt(segundoNumeroEcuacion*segundoNumeroEcuacion - 4*primerNumeroEcuacion*tercerNumeroEcuacion))/2*primerNumeroEcuacion;
// console.log("Solución ecuación: " + solucionEcuacion);



// Ejercico 8:
// Mediante un prompt preguntar al usuario su nombre y que la consola diga "(nombre introducido) ha terminado la lección 3"
// let nombre = prompt("Introduce tu nombre");
// console.log(nombre + " ha terminado la lección 3.");