/////////////
// CLASE 4 //
/////////////

// ARRAYS
let arr = [1 , 2 , "Hola", "Adios"];
console.log("Ejemplo de array: ", arr[2]);

// ACCEDER A UN ELEMENTO DEL ARRAY
arr[2] = "dato cambiado";
console.log("Elemento de la posicion 2 del array: ", arr[2]);

// AÑADIR ELEMENTO AL FINAL DEL ARRAY
arr.push(true);
console.log("Añadiendo true a la última posicion del array: ", arr);

// ACCEDER A CIERTOS ELEMENTOS DEL ARRAY 
arr = arr.slice(2,5);
console.log("Los elementos del 2 al 5 son: ", arr);

// EJERCICIOS:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

console.log("Ejercicio 1")
// Ejercicio 1:
// Ej1 A) El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.

const arr1 = [ 1 , 2 , 68 , 33 , 1000000000 ];
let arr2 = ["1" , , true , 33 , false , 230 , 25];

console.log("El valor de arr1 es: ", arr1)
console.log("El tamaño de arr1 es: ", arr1.length)
console.log("El valor de arr2 es: ", arr2)
console.log("El tamaño de arr2 es: ", arr2.length)

// Ej1 B) El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo anteriro

// arr1.push(true) // da error porque arr1 es const
arr2.push(undefined)

//console.log("El nevo valor de arr1 es: ", arr1)
//console.log("El nevo tamaño de arr1 es: ", arr1.length)
console.log("El nevo valor de arr2 es: ", arr2)
console.log("El tamaño de arr2 es: ", arr2.length)

// Ej1 C) Mostrar el último elemento del array

console.log("El último elemento de arr1 es: ", arr1[arr1.length -1])
console.log("El último elemento de arr2 es: ", arr2[arr2.length -1])

console.log("Ejercicio 2")
// Ejercicio 2:
// Ej2 A) El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.

let variableString = "La clase mola mucho"
console.log("El valor de variableString es: ", variableString)
console.log("El tamaño de variableString es: ", variableString.length)

// Ej2 B) El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo

variableString = "La clase mola"
console.log("El valor de variableString es: ", variableString)
console.log("El tamaño de variableString es: ", variableString.length)

console.log("Ejercicio 3")
// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.

variableString = "La clase mola mucho"
console.log("El valor de variableString es: ", variableString)
console.log("El tamaño de variableString en mayúsculas es: ", variableString.toUpperCase())

console.log("Ejercicio 4")
// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.

variableString = "LA CLASE MOLA MUCHO"
console.log("El valor de variableString es: ", variableString)
console.log("El tamaño de variableString en mayúsculas es: ", variableString.toLowerCase())

console.log("Ejercicio 5")
// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición 2 y 4 del siguiente array: const array = ['hola', 12, , true, [ 1, 3], 'mundo']

const arrayEj5 = ['hola', 12, , true, [ 1, 3], 'mundo']
console.log("El elemento del array de la posicion 2 es: ", arrayEj5[2])
console.log("El elemento del array de la posicion 4 es: ", arrayEj5[4])

console.log("Ejercicio 6")
// Ejercicio 6:
// El alumno añadirá nuevos elementos al array en la ultima posición.

arrayEj5.push(35)
console.log("El arrayEj5 con un elemento añadido es: ", arrayEj5)


console.log("Ejercicio 7")
// Ejercicio 7: AVANZADO
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "3"

const arrayNumbers = [1,2,3,4,5]
const arrayNumbers2 = [2,4,6,8,10]
console.log("arrayNumbers tiene el elemento 3?", arrayNumbers.includes(3))
console.log("arrayNumbers2 tiene el elemento 3?", arrayNumbers2.includes(3))

console.log("Ejercicio 8")
// Ejercicio 8: AVANZADO
// El alumno mostrará por consola un hola mundo utilizando los elementos del array del ejercicio 5.

console.log(arrayEj5[0], arrayEj5[5])

// Ejercicio 9: AVANZADO
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.

const arrayNumbers3 = [1,2,3,4,5]
const arrayx2 = arrayNumbers3.map(element => element*2)
console.log("El array arrayNumbers3 x 2 = ", arrayx2)

// Ejercicio 10: AVANZADO
// El alumno obtendrá la ultima posición de cualquier arrray.

console.log("La última posicion de arrayEj5 es: ", arrayEj5[arrayEj5.length - 1])