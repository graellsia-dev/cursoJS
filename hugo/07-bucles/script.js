///////////////
// CLASE //////
///////////////

// console.log("Tarea 1")
// console.log("Tarea 2")
// console.log("Tarea 3")
// console.log("Tarea 4")
// console.log("Tarea 5")
// console.log("Tarea 6")
// console.log("Tarea 7")
// console.log("Tarea 8")
// console.log("Tarea 9")
// console.log("Tarea 10")

// for(let i=1; i<=10; i = i + 2 ){
//     console.log("Tarea ", i)
// }


////////////////
// EJERCICIOS //
////////////////
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Mostrar por consola los numeros del 1 al 10

// for(let i=1; i<=10; i++){
//     console.log("numero", i)
// }

// Ejercicio 2: 
// Mostrar por consola los numeros del 1 al 100 mostrandolos de 5 en 5

// for(let i=1; i<=100; i= i + 5){
//     console.log("numero", i)}


// Ejercicio 3: 
// Mostrar por consola todos los numeros de el siguiente array.


let array = [2, 5, 8, 15]
// for( let i=0; i<=6; i++){
//     console.log("numeros de un array",array[i])
// }


// // Ejercicio 3: 
// Sumar todos los numeros del array del ejercicio anterior.
let sumaArr = 0;

// for (let i = 0; i < 4; i++) {
//     sumaArr = sumaArr + array[i]
//     console.log(sumaArr)
// }
// console.log("suma de los datos del array", sumaArr)

// Ejercicio 4: AVANZADO
// Mostrar por consola el mayor numero del array del ejercicion 3.

let numeroMayor = 0;
// let arrayvacio = [];



// for (let i = 0; i < 4; i++) {

//     if (numeroMayor < array[i]) {
//         numeroMayor = array[i]

//     }

// }
// console.log("numero de array mayor", arrayvacio)


// Ejercicio 5: AVANZADO
// Calcular el término X de la sucesión de fibonacci, el cual sera proporcionado por un propmt
// serieDeFibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ....
// let arrayvacio= [];
// arrayvacio.push(numeroMayor)
//)
let arrayvacio = [];

let contenidoArray = 0;
let contenidoAnterior = 0;

for (let i = 0; i < 10; i++) {

    if (i < 2) {
        contenidoArray[i] = 1;

    }
    else {


        contenidoAnterior = contenidoArray
        contenidoArray = contenidoArray[i] + contenidoAnterior
    }

    arrayvacio.push(contenidoArray)
}

let terminoX = prompt("Termino X")
console.log(arrayvacio)

// console.log("posicion X ", arrayvacio[parseInt(terminoX)])
console.log("posicion X ", arrayvacio[terminoX])