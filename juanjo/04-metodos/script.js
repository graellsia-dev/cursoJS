
// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.
// El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo

const arr1 = [1 , 2 , 3];
let arr2 = [1 , , 2 , "Hola", true];

// console.log (arr1);
// console.log (arr2);

arr2 [3] = false;
// console.log (arr2);

// console.log(arr2.length);

arr2.push(8);

// console.log(arr2.length);
// console.log(arr2);

// Acceder a la última posición 2 de la array

// console.log (arr1);
// console.log (arr1[1]);


// Mostrar la última posición de la array

// console.log(arr1[arr1.length-1]);


// Ejercicio 2:
// El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.
// El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo

let arr3 = ["hola" , "clase"];

// console.log(arr3);

// console.log (arr1[1]);

// console.log(arr3);
// console.log(arr3.length);


// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.

let variableString = "hola"
let arr4 = ["hola" , "clase" , "javascript"];
// console.log(variableString.toUpperCase())
// console.log(arr4[1].toUpperCase())
// console.log(arr4[2].toUpperCase())


// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.

let cambiarMinusculas = "HOLA"
// console.log(cambiarMinusculas.toLowerCase())


// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición 2 y 4 del siguiente array: const array = ['hola', 12, , true, [ 1, 3], 'mundo']

let arr5 = ['hola', 12, , true, [ 1, 3], 'mundo']
console.log (arr5[2,4]);


// Ejercicio 6:
// El alumno añadirá nuevos elementos al array en la ultima posición.

arr5.push(8);
console.log (arr5);

// Ejercicio 7: AVANZADO
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "3"
// const arryNumbers = [1,2,3,4,5]
// const arryNumbers2 = [2,4,6,8,10]

const arryNumbers = [1,2,3,4,5]
const found = arryNumbers.find(element => element > 3);
console.log(found);

// Ejercicio 8: AVANZADO
// El alumno mostrará por consola un hola mundo utilizando los elementos del array del ejercicio 5.





// Ejercicio 9: AVANZADO
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.



// Ejercicio 10: AVANZADO
// El alumno obtendrá la ultima posición de cualquier arrray.

