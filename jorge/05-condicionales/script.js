///////////////
// CLASE //////
///////////////

// let diaDelMes = prompt("Que día es hoy?")
// let diaSemana = prompt("Que día de la semana es hoy?")

// if (diaDelMes >= 15) {
//     console.log("Si se puede aparcar en la calle");
// } else {
//     console.log("No se puede aparcar en la calle");
// };

// if (!(diaDelMes >= 15)) {
//     alert("Si se puede aparcar en la calle");
//     console.log("Si se puede aparcar en la calle");
// } else if (diaSemana === 'domingo') {
//     console.log("Si se puede aparcar en la calle");
//     alert("Si se puede aparcar en la calle");
// } else {
//     console.log("No se puede aparcar en la calle");
//     alert("No se puede aparcar en la calle");
// };
// Exclamación ! cambia la sentencia 

////////////////
// EJERCICIOS //
////////////////

// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.

// let edadUsuario = prompt("Que edad tienes?")
// if( edadUsuario >=18 ) {
//     alert("Tiene acceso");
// } else {
//     alert("No tiene acceso");
// }

// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.
// let array = [1, 5 , 9, 12, 5]
// let suma = 0;

// if(  array.length > 4 ){
//     array.forEach(element => suma = suma + element)
//     console.log("La suma de los números del array es: ",suma);
// } else {
//     console.log("El array debe ser mayor que 4")
// }


// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.
// let arrayProductos = [1, 5 , 9, 12, 50, 30]
// let precioTotal = 0;

// arrayProductos.forEach(producto => precioTotal = precioTotal + producto)

// if ( precioTotal > 100 ) {
//     let precioTotalConDescuento = precioTotal - 0.1 * precioTotal
//     console.log("El precio final es", precioTotalConDescuento)
// } else {
//     console.log('No hay descuento, el precio es: ')
// }


// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.

// let temperatura = parseInt(prompt("Que temperatura hace?"));
// let unidades = prompt("Qué unidades quire?").toUpperCase();

// if (unidades === 'K'){
//     console.log("temperatura en kelvin", temperatura + 273)
// } else {
//     console.log("temperatura en Farenheit", temperatura * (9/5) + 32)
// }



// Ejercicio 5: AVANZADO
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.
// let arrDatos = [true, 'hola', 123 , '123', false , 55 , 60 , false ];

// let arrNumbers = [];
// let arrStrings = [];
// let arrBooleans = [];

// arrDatos.forEach( element => {
//     if (typeof element === 'string' ){
//         arrStrings.push(element)
//     } else if ( typeof element === 'number' ){
//         arrNumbers.push(element)
//     } else {
//         arrBooleans.push(element)
//     }
// })

// console.log('strings', arrStrings)
// console.log('Numbers', arrNumbers)
// console.log('Booleans', arrBooleans)



// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",

let numero = parseInt(prompt("introduzca un numero"));

// if ((numero % 3) === 0 || (numero % 5) === 0 ){
//     if((numero % 3) === 0){
//         if((numero % 5 ) === 0) {
//             console.log('FIZZ-BUZZ')
//         } else {
//             console.log('FIZZ')
//         }
//     } else {
//         console.log('BUZZ')
//     }
// } else {
//     console.log('No es divisible entre 3 ni 5')
// }

// if ((numero % 3) === 0){
//     if((numero % 5 ) === 0) {
//         console.log('FIZZ-BUZZ')
//     } else {
//         console.log('FIZZ')
//     }
// }else if ((numero % 5) === 0){
//     if((numero % 3 ) === 0) {
//         console.log('FIZZ-BUZZ')
//     } else {
//         console.log('BUZZ')
//     }
// } else {
//     console.log("No es divisible entre 3 ni entre 5")
// }

if ((numero % 3) === 0 && (numero % 5) === 0) {
    console.log('FIIZ-BUZZ');
} else if ((numero % 3) === 0) {
    console.log('FIZZ');
} else if ((numero % 5) === 0) {
    console.log('BUZZ');
} else {
    console.log('No es divisible en ninguno');
}

