// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.
// El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo

const arr1 =[1,2,3,4];
let arr2 = [1 ,true, 2, false, 3];

console.log(arr1.length)
console.log(arr2.length)

arr2.push('hola')
console.log(arr2)
console.log(arr2.length)

const arr3 =[1,2,3,4,77];
console.log('posicion1',arr3[1])
console.log('posicionultima',arr3[arr3.length -1])







// Ejercicio 2:
// El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.
// El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo

let variableString= 'hola,adios';
console.log('hola,adios',variableString)
console.log (variableString.length)
variableString= 'hola';
console.log (variableString.length)




// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.
let variableString2= 'minusculas'
console.log('minusculas', variableString2)
console.log('minusculas'.toUpperCase());



// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.
let variableString3= 'MAYUSCULAS'
console.log('MAYUSCULAS',variableString3)
console.log(variableString3.toLowerCase());



// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición 2 y 4 del siguiente array: const array = ['hola', 12, , true, [ 1, 3], 'mundo']
const array = ['hola', 12, , true, [ 1, 3], 'mundo']
console.log('posicion2',array [2])
console.log('posicion3' ,array [4])



// Ejercicio 6:
// El alumno añadirá nuevos elementos al array en la ultima posición.
const array2 = ['hola', 12, , true, [ 1, 3], 'mundo']
array2.push('hola') 
array2.lenght;
array2[array2.length] ='hola'
console.log(array2)


// Ejercicio 7: AVANZADO
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "3"
// const arryNumbers = [1,2,3,4,5]
// const arryNumbers2 = [2,4,6,8,10]




// Ejercicio 8: AVANZADO
// El alumno mostrará por consola un hola mundo utilizando los elementos del array del ejercicio 5.





// Ejercicio 9: AVANZADO
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.



// Ejercicio 10: AVANZADO
// El alumno obtendrá la ultima posición de cualquier arrray.

