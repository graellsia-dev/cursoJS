// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.




// Ejercicio 1:
// El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.
// El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo

let arr =[1 , 2 , false , "hola"];
console.log(arr.length);
console.log(arr.push("mundo"));
console.log(arr);
console.log(arr[arr.length - 1])

// Ejercicio 2:
// El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.
// El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo

let str = "hola a todos";
console.log(str.length);
console.log(str);
str = "¿qué tal?";
console.log(str);
console.log(str.length);


// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.

let str2 = "ay qué biruji";
console.log(str2);
console.log(str2.toUpperCase());


// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.

let str3 = "TENGO HAMBRE"
console.log(str3);
console.log(str3.toLowerCase());



// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición 2 y 4 del siguiente array: const array = ['hola', 12, , true, [ 1, 3], 'mundo']

const array = ['hola', 12, , true, [ 1, 3], 'mundo']
console.log(array[2]);
console.log(array[4]);


// Ejercicio 6:
// El alumno añadirá nuevos elementos al array en la ultima posición.

array.push("redondo");
console.log(array);




// Ejercicio 7: AVANZADO
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "3"
// const arryNumbers = [1,2,3,4,5]
// const arryNumbers2 = [2,4,6,8,10]

const arryNumbers = [1,2,3,4,5]
const arryNumbers2 = [2,4,6,8,10]
console.log(arryNumbers.includes(3));
console.log(arryNumbers2.includes(3));


// Ejercicio 8: AVANZADO
// El alumno mostrará por consola un hola mundo utilizando los elementos del array del ejercicio 5.





// Ejercicio 9: AVANZADO
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.



// Ejercicio 10: AVANZADO
// El alumno obtendrá la ultima posición de cualquier arrray.

