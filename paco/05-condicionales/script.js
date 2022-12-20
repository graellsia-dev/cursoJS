// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.
// const edadUsuario = prompt("Introduce tu edad");
// if(edadUsuario < 18) {
//     alert("Esta página es sólo para mayores de edad");
// }

// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.
// const arrayGrande = [2,3,4,5,6,7,7];
// const arrayPequenno = [2,1,2];
// if(arrayGrande.length > 4) {
//     const tamanoArray = arrayGrande.length;
//     let resultado = 0;
//     for(let i = 0; i < tamanoArray; i++) {
//         resultado = resultado + arrayGrande[i];
//     }
//     console.log("Resultado: " + resultado);
// } else {
//     console.log("El array tiene una longitud inferior o igual a 4");
// }

// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.
// const arrayNumeros = [50,30,50,45];
// let resultado = 0;
// const longitudArray = arrayNumeros.length;
// for(let i = 0; i < longitudArray; i++) {
//     resultado = resultado + arrayNumeros[i];
// }
// if(resultado > 100) {
//     resultado = resultado * 0.9;
// }
// console.log("Resultado con 10% de descuento: " + resultado);

// Ejercicio 4:
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.
// const arrayDatos = [23, "hola", "adios", undefined, 42, true, true, false];
// console.log("Array datos: " + arrayDatos);
// let arrInt = [];
// let arrString = [];
// let arrBoolean = [];
// let arrUndefined = [];
// const arrLongitud = arrayDatos.length;
// let tipoDato;
// for(let i = 0; i < arrLongitud; i++) {
//     tipoDato = typeof(arrayDatos[i]);
//     if(tipoDato == "number") {
//         arrInt.push(arrayDatos[i]);
//     } else if(tipoDato == "string") {
//         arrString.push(arrayDatos[i]);
//     } else if(tipoDato == "boolean") {
//         arrBoolean.push(arrayDatos[i]);
//     } else if(tipoDato == "undefined") {
//         arrUndefined.push(arrayDatos[i]);
//     }
// }
// console.log(arrInt);
// console.log(arrString);
// console.log(arrBoolean);
// console.log(arrUndefined);

// Ejercicio 5:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.
// const tempIntroducida = parseInt(prompt("Temperatura"));
// const unidad = prompt("K o F");
// console.log("Temperatura: " + tempIntroducida);
// console.log("Unidad: " + unidad);
// let tempResultado;

// if(unidad == "k" || unidad == "K") {
//     tempResultado = tempIntroducida + 273;
// } else if(unidad == "f" || unidad == "F") {
//     tempResultado = (tempIntroducida * 1.8) + 32;
// }
// alert(tempIntroducida + "ºC son " + tempResultado + "K");

// Ejercicio 6:
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",
// const numIntroducido = prompt("Introduce un número: ");
// console.log("Número introducido: " + numIntroducido);
// if(numIntroducido % 3 == 0 && numIntroducido % 5 == 0) {
//     alert("FIZZ-BUZZ");
// } else if(numIntroducido % 3 == 0) {
//     alert("FIZZ");
// } else if(numIntroducido % 5 == 0) {
//     alert("BUZZ");
// }

// Ejercicio 7: