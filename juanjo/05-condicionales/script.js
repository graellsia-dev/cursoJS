///////////////
// CLASE///////
///////////////

// let diaDelMes = prompt ("Que día es hoy?");
// let diaSemana = prompt ("Que día de la semana es hoy?");

// if (!(diaDelMes >= 15 )) {
//     alert("Se puede aparcar en la calle");
// } else if (diaSemana === "domingo") {
//    alert("Se puede aparcar en la calle");
// } else {
//     alert("No se puede aparcar en la calle");
// };

// Exclamación =====> cambia la sentencia

///////////////
// CLASE///////
///////////////

// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.

// let edadUsuario = prompt ("Que edad tienes?");

// if (edadUsuario < 18 ) {
//     alert("Sólo para mayores de edad");
// } else {
//     alert(" ");
// };


// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.

let arr1 = [1, 2, 3, 4];
let suma = 0; // Mejor poner suma=0 en lugar de suma=undefined porque con la 2ª opción puede dar error


if (arr1.length > 4) {
    arr1.forEach(element => suma = suma + element);
    // console.log("La suma de los números es: ", suma);
} else {
    // console.log("El array debe ser mayor que 4")
}


// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.

let arr2 = [15, 10, 25];
let suma2 = 0; 
let descuento = 0.1
arr2.forEach(element => suma2 = suma2 + element);    

if (suma2 > 100) {
    // console.log("El precio final es: ", suma2 - suma2 * descuento);
} else {
    // console.log("No hay descuento")
}


// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.

// let temperatura = prompt ("Temperatura exterior");
// let respuesta = prompt("¿En que unidades lo quiere").toLowerCase();


// if (respuesta === "k") {
//     console.log("Temperatura Kelvin es: ", parseInt ( temperatura) + 273 );
// } else {
//     console.log("Temperatura Farenheit es:", parseInt ( temperatura) * (9/5) + 32 )
// }

// .toLowerCase() para cambiar de minúsculas a mayúsculas
// .toUpperCase() para cambiar de mayúsculas a minúsculas


// Ejercicio 5: AVANZADO
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.





// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",

let numero = parseInt (prompt("introduzca el número"))
