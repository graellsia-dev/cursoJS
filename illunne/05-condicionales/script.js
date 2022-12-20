// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

//let diaDelMes2 = prompt("¿qué día es hoy?");
//let díaDeSemana =("Que día de la semana es hoy?");


//if (!(diaDelMes2 >= 15)) {  //! cambia la sentencia

   // console.log("Se puede aparcar en la calle");
 //} else if (diaSemana !== "domingo") {
   // console.log("Si se puede aparcar en la calle");
   // alert("Si se puede aparcar en la calle");
 //} else {
    //console.log("No se puede aparcar en la calle");
    //alert("No se puede aparcar en la calle");


 //}

// Ejercicio 1:
// Mediante un prompt preguntar la edad al usuario, si es menor deberá indicarle mediante un alert que solo es para mayores de edad.

//let edadUsuario = prompt("qué edad tiene?");

//if (edadUsuario > 18){
   // alert("Tiene acceso");



//}
    
   



// Ejercicio 2:
// Dado un array de numeros si este tiene un tamaño mayor de 4, sumar todos los numeros del array.

// let array =[1, 5, 9, 12, 5]
// let suma = 0;

// if (array.lenght>4)

// {
//      array.forEach(element => suma = suma + element);
//      console.log("La suma de los numeros del array es:", suma );

// } else {
//     console.log("El array debe ser mayor que cuatro")

// Ejercicio 3:
// Dado un array de numeros, si la suma de este es mayor de 100, aplicar un descuento del 10%.
 let productos =[1, 5, 9, 12, 5, 100]
 let precioTotalProductos = 0;
 console.log("precioTotalProductos: ", precioTotalProductos)

  productos.forEach(producto => precioTotalProductos = precioTotalProductos + producto)
  console.log("precioTotalProductos: ", precioTotalProductos)
 

  if ( precioTotalProductos > 100) {
    let precioTotalDescuento = ( precioTotalProductos - precioTotalProductos/10 )
    console.log("El descuento es", precioTotalProductos/10)
    console.log("El precio final es", precioTotalDescuento)
 
} else {
    console.log("precioTotalProductos: No ha habido descuentos ")
}

// Ejercicio 4:
// mediante un prompt solictar una temperatura, luego mediante otro prompt solicitar en que unidades la quiere, en ºK o ºF.


let temperatura = prompt("que temperatura hace?")

// Ejercicio 5: AVANZADO
// Dado un array de datos, separarlo en arrays de diferentes datos distintos.


// Ejercicio 6: AVANZADO
// Mediante un prompt solicitar un numero, si este numero es divisible entre 3 deberá mostrar la palabra "FIZZ",
// si es divisible entre 5 deberá mostrar la palabra "BUZZ", y es divisible entre 3 y 5 deberá mostrar la palabra "FIZZ-BUZZ",
