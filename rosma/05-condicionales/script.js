




// let diaDelMes = prompt("que dia es hoy")
// let diaSemana = prompt("que dia de la semaa es hoy")


// if (diaDelMes > 15) {
//    alert("Se puede aparcar ");
//} else {console.log("no se puede aparcar en la calle");
// };


// if (!(diaDelMes >= 15)) {
//    alert("si se puede aparcar en la calle")
//    console.log("si se puede aparcar en la calle")
//} else if (diaSemana === 'domingo') {
//    console.log("si se puede aparcar en la calle");
//    alert("si se puede aparcar en la calle")
// } else {
//    console.log("no se puede aparcar en la calle");
//    alert("no se puede aparcar en la calle")
//  }

// exclamación cambia la sentencia de verdadero a falso o viceversa

// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.

// let edad = prompt("cuantos años tienes")

// if (edad > 18) {
//    alert("usted tiene acceso")
//    console.log("esta pagina es para mayores de edad")
//} else {
//    alert("para mayores")
//    console.log("para mayores")
//}


// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.
// ctrl+ç marcando texto lo hace en todas las lineas

// let array = [2, 4, 6, 8, 10]
// let suma = 0;

// if (array.length > 4){
//     array.forEach(element => suma = suma + element)
//     console.log("array: ", suma);
// }else {
//     console.log("array tiene que ser mayor de cuatro")
// }




// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.

// let array = [2, 4, 6, 8, 10, 100]
// let suma = 0

// array.forEach(element => suma = suma + element)

// if (suma > 100) {
//     let precioFinal = suma - suma*0.1
//     console.log("total ", precioFinal)
// } else {
//     console.log("no tiene descuento")
// }

// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.

let temperatura = parseInt(prompt("¿temperatura?"))

let K = prompt("kelvin")
console.log("kelvin, ", k)
let f = pronmpt("Fahr")
console.log("fahr, ", f)

// Ejercicio 5: AVANZADO
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.



 

// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",

let numero = parseInt(prompt("introduzca un numero"))