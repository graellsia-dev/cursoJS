// let diaDelMes = prompt ("Que dia es hoy?")
// let diaSemana = prompt("Que dia de la semana es hoy?")

// // if (diaDelMes >= 15) {
// //     console.log("Si se puede aparcar en la calle");
// // } else {
// //     console.log("No se puede aparcar en la calle")
// // };

// if (diaDelMes >= 15) {
//     console.log("Si se puede aparcar en la calle");
// } else if (diaSemana === 'domingo') {
//     console.log("Si se puede aparcar en la calle")
// } else {
//     console.log("no se puede aparacar en la calle");
//     alert("No se puede aparcar en la calle");
// };
// Exclamacion ! cambia la sentencia

// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.
// let edad = prompt ("mayor de edad")
// if (edad >= 18) {
//     console.log("tiene acceso a pagina web")
// } else {
//     console.log("no tiene acceso a pagina web")
// }

// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.
// let array = [1, 5, 9, 12, 20, 9999999]
// let suma = 0;

// if (array.length > 4) {
//     array.forEach(element => suma = suma + element)
//     console.log("suma: ",suma)
// } else {
//     console.log('el array debe ser > 4')
// }



// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.
// let array = [1, 5, 9, 12, 15]
// let suma = 0;

// array.forEach(element => suma = suma + element)
// if (suma > 100 ) {
//     let precioFinal = suma - 0.1*suma
//     console.log("El precio final es", precioFinal)
// } else {
//     console.log('No hay descuento')
// } 

// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.

let temperatura1 = parseInt(prompt ("Que temperatura hace?"))
let unidades = prompt ("Que unidades quiere?")

if (unidades === 'K') {
    console.log("temperatura en Kelvin", temperatura1 + 273)
} else {
    console.log("temperatura Farenheit", temperatura1 * (9/5) + 32)
}


// Ejercicio 5: AVANZADO
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.


// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",
