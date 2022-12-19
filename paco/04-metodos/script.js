// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.
// El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo
// let datos = [3,4,5,6];
// console.log("Longitud: " + datos.length);
// datos.push(32,32,2344,5454);
// console.log("Longitud: " + datos.length);

// Ejercicio 2:
// El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.
// El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo
// let palabra = "hola";
// console.log("Longitud palabra: " + palabra.length);
// palabra = "hola mundo";
// console.log("Longitud palabra: " + palabra.length);

// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.
// let palabraMinusculas = "hola";
// console.log("Palabra en minúsculas: " + palabraMinusculas);
// let palabraMayusculas = palabraMinusculas.toUpperCase();
// console.log("Palabra en mayúsculas: " + palabraMayusculas);

// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.
// let palabraMayuscula = "HOLA";
// console.log("Palabra en mayúsculas: " + palabraMayuscula);
// let palabraMinuscula = palabraMayuscula.toLowerCase();
// console.log("Palabra en minúsculas: " + palabraMinuscula);

// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición 2 y 4 del siguiente array: const array = ['hola', 12, , true, [ 1, 3], 'mundo']
// const datos = ['hola', 12, , true, [ 1, 3], 'mundo'];
// console.log("Posición 2: " + datos[2]);
// console.log("Posición 4: " + datos[4]);

// Ejercicio 6:
// El alumno añadirá nuevos elementos al array en la ultima posición.
// const datos = ['hola', 12, , true, [ 1, 3], 'mundo'];
// datos.push("sdsasd");
// console.log(datos);

// Ejercicio 7: AVANZADO
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "3"
// const arryNumbers = [1,2,3,4,5]
// const arryNumbers2 = [2,4,6,8,10]
// console.log(arryNumbers.includes(3));
// console.log(arryNumbers2.includes(3));

// Ejercicio 8: AVANZADO
// El alumno mostrará por consola un hola mundo utilizando los elementos del array del ejercicio 5.
// const datos = ['hola', 12, , true, [ 1, 3], 'mundo'];
// console.log(datos[0] + " " + datos[5]);

// Ejercicio 9: AVANZADO
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.
// const numeros = [1,2,3];
// const numerosX2 = [numeros[0]*2, numeros[1]*2, numeros[2]*2];
// console.log(numeros);
// console.log(numerosX2);

// Ejercicio 10: AVANZADO
// El alumno obtendrá la ultima posición de cualquier arrray.
// const numeros = [1,2,3];
// const arryNumbers2 = [2,4,6,8,10]
// console.log(numeros[numeros.length - 1]);
// console.log(arryNumbers2[arryNumbers2.length - 1]);


// Ejercicio 11: crear un array preguntando al usuario mediante un prompt. Pedir también que caracter quiere encontrar
// y por cuál lo quiere sustituir.
// const primerNumero = parseInt(prompt("Primer numero del array"));
// const segundoNumero = parseInt(prompt("Segundo numero del array"));
// const tercerNumero = parseInt(prompt("Tercer numero del array"));
// const arrayCreado = [primerNumero,segundoNumero,tercerNumero];
// console.log(arrayCreado);

// const numeroBuscar = parseInt(prompt("¿Qué número quieres buscar?"));

// let contieneNumero = arrayCreado.includes(numeroBuscar);
// if(contieneNumero == true) {
//     const posicionNumeroEncontrado = arrayCreado.indexOf(numeroBuscar);
//     console.log("Posición del número encontrado: " + posicionNumeroEncontrado);
//     const nuevoNumero = prompt("¿Por qué número lo quieres sustituir?");
//     console.log("Nuevo número: " + nuevoNumero);
//     arrayCreado[posicionNumeroEncontrado] = nuevoNumero;
// } else if(contieneNumero == false) {
//     alert("El array no contiene este número");
// }
// console.log("Resultado final array: " + arrayCreado);

// Ejercicio 12: crear una función de arrFunction que le pases un array, te sume todos los valores
// y guarde el resultado en una variable.
// function arrFunction(arr) {
//     const longitudArr = arr.length;
//     let resultado = 0;
//     for(let i = 0; i < longitudArr; i++) {
//         resultado = resultado + arr[i];
//     }
//     return resultado;
// }
// const resultadoFunction = arrFunction([1,2,3,45,6,5,4]);
// console.log("Resultado función: " + resultadoFunction);

// Ejercicio 
// const arr = [[1,2,5,3],[2,2,2,4,5,7]]

// const suma = (arr) => {
//     const numArrays = arr.length;
//     let resultado = 0;

//     for(let i = 0; i < numArrays; i++) {
//         for(let j = 0; j < arr[i].length; j ++) {
//             console.log("Fila: " + i + ", posición: " + j);
//             resultado = resultado + arr[i][j];
//         }
//     }
//     return resultado;
// }
// console.log(suma(arr));

// FOREACH
// const arr = [[1,2,3],[2,3,5,17]];
// let resultado = 0;
// arr.forEach(element => {
//     element.forEach( a => {
//         console.log(a);
//         resultado += a;
//     });
// });
// console.log("Resultado de la suma: " + resultado);


// MAP
// const arr = [1,4,7,8];
// let arrMultiplicado = arr.map( element => element * 2 );
// console.log(arrMultiplicado);

const arr2 = [[1,2,3],[4,5,6,6]];
const arr2Multiplicada = arr2.map(element => element.map(a => a * 2));
console.log(arr2Multiplicada);
