


//let diaDeSemana = prompt("que dia de la semana es hoy")
//let diaDelMes = prompt (" que dia es hoy ")

//if(diaDelMes >= 15) {
//console.log(" se puede aparcar en la calle")

//} else {
//  console.log(" no se puede aparcar en la calle")
//} 


//if(diaDelMes >=15){
//  alert(" si se puede aparcar en la calle")
//alert(" si se puede aparcar")
//} else if ( diaDeSemana === "domingo"){
//  console.log("si se puede apartar")
//alert("si se puede aparcar")

//}else{
//  alert ( " no se puede aparcar")
//console.log("no se puede aparcar")
//}











// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.

// ejercicio 1

let edad = prompt("cuantos años tienes")
if (edad < 18) {
    console.log(" solo es para mayores de edad");

} else {
    console.log("es mayor de edad");
}



// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.


let array = [50, 2, 100 ];
let suma = 0;

// if (array.length > 4) {
//     array.forEach(Element => suma = suma + Element);
//     console.log(" esta es la suma", suma);
// }else {
//     console.log(" el array debe ser mayor de 4")
// }


// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.
    array.forEach(Element => suma = suma + Element);

if (suma >= 100) {
    console.log(suma -[suma * 0.10] )
} else{
    console.log("no hay descuento")
}

// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.


let temperatura = prompt("Cuantos grados hace")
let tipoUnidad = prompt("Que unidad quiere K o F").toUpperCase()

if (tipoUnidad === 'K' ){
    console.log("esta es la temperatur en ºk",parseInt(temperatura) + 273)
}
if (tipoUnidad === 'F'){
    console.log("esta es la temperatura en ºf", 32 + parseInt(temperatura) *(9/5))
}
// Ejercicio 5: AVANZADO
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.

let arrDatos = [true , "hola" , 123 , "123" , false , 55 , false]

let arrNumbers = [];
let arrStrings = [];
let arrBooleans = [];

arrDatos.forEach( element => {
    if (typeof element === 'string' ){
        arrStrings.push(element)
    } else if ( typeof element === 'number' ){
        arrNumbers.push(element)
    } else {
        arrBooleans.push(element)
    }
})

console.log('strings', arrStrings)
console.log('Numbers', arrNumbers)
console.log('Booleans', arrBooleans)


// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",

let numero = prompt("dime un numero")

if ((numero % 3 === 0) && (numero % 5 === 0)){
    console.log (" FIzZ-BUZZ")
}

else if (numero % 3 === 0){
    console.log("FIzZ")
}
else if (numero % 5 === 0){
    console.log("BUZZ")
} else {
    console.log("no es divisible entre 3 o 5")
}
