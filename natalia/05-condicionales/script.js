// let diaDelMes = prompt('¿Qué día es hoy?')
// if (diaDelMes > 15) {
//     console.log ('Se puede aparcar')
// } else {
//     console.log ('No se puede aparcar')
// };



// let (diaDelMes) = prompt('¿Qué día es hoy?')
// let (diaSemana) = prompt('¿Que día semana es?')
// if (diaDelMes >15) {
// console.log ('Si se puede');
// } else if (diaSemana === 'domingo') {
//     console.log ('No se puede');
// }
// else{
//     console.log ('No se puede');
// };


// if (!(diaDelMes >=15)) { 
//     console.log ('Si se puede');
//     } else if (diaSemana === 'domingo') {
//         console.log ('No se puede');
//     }
//     else{
//         console.log ('No se puede');
//     };
// Exclamación cambia la sentencia










// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.
// let edad = prompt('¿Cual es su edad?')
// if (edad > 18) {
//     alert ('Tiene ascceso');

// } else {
//     alert('No tiene acceso');
// };

// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.
// let array = [1 , 5, 9, 2, 2]
// let suma = 0;

// if (array.length > 4) {
//     array.forEach(element => suma = suma + element)
//     console.log ('muestrame suma: ', suma)
    
// } else { 
//     console.log ('array < que 3')   
// }



// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.

let array = [1 , 5, 99, 2, 2]
let suma = 0;
let descuento = 0.1
array.forEach(element => suma = suma + element)

if (suma > 100) {
    console.log ('El precio final es', suma - suma * descuento)
} else {
    console.log ('No hay descuento')
    
}

// Ejercicio 4:
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.
let array2 = [1 , 5, 9, 2, 2]


// Ejercicio 5:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.
let temperatura = prompt('¿Qué temperatura hace?')
let temperatura1 = prompt ('¿En qué unidad la quiere, en ºK o ºF?')


if ( temperatura1 === 'k' ) {
    console.log (k)

} else {
    console. log('f')

}


// Ejercicio 6:
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",


// Ejercicio 7: