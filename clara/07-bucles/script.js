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
/*
for(let i=1; i<=10; i++ ){
    console.log("Tarea ", i)
}
*/



////////////////
// EJERCICIOS //
////////////////
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Mostrar por consola los numeros del 1 al 10
/*
for(let i=1; i<=10; i++ ){
    console.log("Tarea ", i)
}
*/
// Ejercicio 2: 
// Mostrar por consola los numeros del 1 al 100 mostrandolos de 5 en 5

/*
for(let i=1; i<=100; i = i + 5 ){
    console.log("Tarea ", i)
}
*/
// Ejercicio 3: 
// Mostrar por consola todos los numeros de el siguiente array.
let array = [2, 5, 8, 15]

for(let i=0; i<=3; i++ ){
    console.log("Tarea ", i)
}

// Ejercicio 3: 
// Sumar todos los numeros del array del ejercicio anterior.

let sumaArr = 0;
for(let i=0; i<=3; i++){
    sumaArr = sumaArr + array[i];
    console.log("la suma" , sumaArr);
}

// Ejercicio 4: AVANZADO
// Mostrar por consola el mayor numero del array del ejercicion 3.


let numeroMayor = 0;
for(let i=0; i<=3; i++){
    sumaArr = sumaArr + array[i];
    console.log("la suma" , sumaArr);
}

// Ejercicio 5: AVANZADO
// Calcular el término X de la sucesión de fibonacci, el cual sera proporcionado por un propmt
// serieDeFibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ....
