///////////////
///CLASE /////
///////////////
/*if
let  diaDelMes = prompt ("¿Qué dia es hoy?");
let  diaSemana = prompt ("¿Qué dia de la semana es hoy?");

 (diaDelMes >=15) {
    alert("Se puede aparcar en la calle");
    console.log("Se puede aparcar en la calle");
} else {
    alert("No se peude aparcar en la calle");
    console.log("No se peude aparcar en la calle");
};

if (diaDelMes >=15) {
    alert("Se puede aparcar en la calle");
    console.log("Se puede aparcar en la calle");
} else if(diaSemana === `Domingo`){
    alert("Se puede aparcar en la calle");
    console.log("Se puede aparcar en la calle");
} else {
    alert("No se puede aparcar en la calle");
    console.log("No se peude aparcar en la calle");
};
*/
// Expresion (!( cambia la sentencia a lo contrario))
//!== Hace lo mismo

///////////////
///Ejercicios: /////
///////////////
// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.
/*
let  edadUsuario = prompt ("¿Qué edad tienes?");
if (edadUsuario <18) {
    alert("Solo es para mayores de edad");
    console.log("Solo es para mayores de edad");
};
*/
// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.

let array = [1 ,5 , 9 , 12 ,16, 24, 20];
let suma = 0;

// le ponemos cero como valor inicial para que parta de cero la suma
/*
if (array.length >= 4){
    array.forEach(element =>  suma = suma + element )
    // La palabra element puede ser cualquiera 
    console.log("la suma de los números del array es: " , suma)
} else {   
    console.log(" EL array debe ser mayor que cuatro")
};
*/
// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.
let productos = [1 ,55 , 9 , 62 ,16, 24, 20];
let precioTotalProductos = 0;


productos.forEach(producto =>  precioTotalProductos = precioTotalProductos + producto )
if ( precioTotalProductos > 100 ){
   let precioDescuento = precioTotalProductos - precioTotalProductos * 0.1;
    console.log("El precio final es; ", precioTotalProductos );
    console.log("El precio final con descuento es; ", precioDescuento );
}else {
    console.log("No hay descuento")
}

// Ejercicio 5:
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.

let alumnos =["Carlos","Clara","Cristina","Fernando","Ivan","Lara","Mercedes","Rafael","Roberto","Sandra","Tania","Raulito","Milagros"];

let mitad = Math.floor(alumnos.length / 2);

let inicio = alumnos.slice(0, mitad);
let final = alumnos.slice(mitad); // si no se indica el índice final, se usa la longitud del array como referencia


console.log('Todos los alumnos', alumnos.toString());
console.log('Primera parte:', inicio.toString())
console.log('Segunda parte', final.toString())


// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.


let temperatura =parseInt(prompt("¿qué temperatura hace?"))
let unidades =parseInt(prompt("¿qué tipo de temperatura quiere?"))

if{

}

console.log("temperatura", parseInt(resPrompt) + 273);

console.log(typeof resPrompt);
console.log(typeof parseInt(resPrompt));

// Ejercicio 6:
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",

let numero = parseInt(prompt("introduzca un numero"));

if ((numero % 3))




// Ejercicio 7: