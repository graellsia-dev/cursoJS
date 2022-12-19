let arr = [1 , 2 , "Hola", "Adios"];
console.log(arr[2]);

arr[2] = "Dato cambiado";
console.log(arr[2]);

arr.push(true);
console.log(arr);

arr = arr.slice (2,4);
console.log(arr);


// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.
// El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo

const arr1 = ["Roble" , "Haya" , "Encina" , "Castaño" , "Avellano" , "Tejo"];
let arr2 = ["Lluvia" , "Nieve" , "Granizo" , "Niebla"];

console.log("Array 1 tamaño", arr1.length);
console.log("Array 2 tamaño", arr2.length);

arr2.push("Tormenta");
console.log("Array 2 tamaño modificado", arr2.length);

console.log("El ultimo elemento de arr1 es: ",  arr1[5]);


// Ejercicio 2:
// El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.
// El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo

let stringUno = "Str"
console.log("String", stringUno.length);

stringUno = "String"
console.log("String modificado", stringUno.length);


// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.

let stringDos = "mayusculas";
console.log("A mayusculas", stringDos.toUpperCase());


// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.

let stringTres = "MINUSCULAS";
console.log("A minisculas", stringTres.toLowerCase());


// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición x del siguiente array: (dar array)

let arr3 = ["dar", "array"];
console.log("La posicion x de este array", arr3[1]);



// Ejercicio 6:
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "X"

let arr4 = [1 , 2 , 23 , 65 , 435]
console.log("El numero dado es", arr4[4]);




// Ejercicio 7:
// El alumno añadirá nuevos elementos al array en la ultima posición.

arr2.push("Ventisca")
console.log("La nueva lista es", arr2);
console.log("El ultimo elemento añadido es", arr2[5]);


// Ejercicio 9:
// El alumno dividirá el array.

arr2 = arr2.slice(2,4);
console.log("Esto es una division en el Array", arr2);



// Ejercicio 10:
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.

const arrMult = arr4.map( element => element*2 );
console.log("Terminos del Array multiplicado por 2", arrMult);

//Ejercicio EXTRA: Añadimos nuevos elementos a un Array con .push, luego pasamos todos los elementos 
//de la lista a mayusculas con .map(element => element)

arr3.push("algo","random");
console.log("Añadimos elementos a este Array", arr3);

const arrMayus = arr3.map( element => element.toUpperCase() );
console.log("Pasamos a Mayusculas todos los elementos del Array", arrMayus);