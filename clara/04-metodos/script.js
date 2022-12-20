// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.
console.log("Comenzamos los ejercicios");

/*let arr = [1, 2, "hola", "Adios"];
console.log(arr[2]);
arr[2] = "dato cambiado";
 
*/



// Ejercicio 1:
// El alumno deberá crear un array con mas de dos posiciones y mediante el metodo adecuado mostrará el tamaño del array.
// El alumno modificará el tamaño del array y volverá a comprobar que devuelve el metodo y mostrar el ultimo elemento del array

const  arr1 =[1, 2, 68, 33, 100000000, 3];
let arr2 =["1", , true , 33 , false , 230 , 25];
arr1.push("element1","element2");

console.log("El tamaño del arra1 es", arr1.length);
console.log("El tamaño del arra2 es", arr2.length);

console.log(arr1[arr1.length-2]); 
console.log(arr1[1]);





// Ejercicio 2:
// El alumno deberá crear un string con mas de dos caracteres y mediante el metodo adecuado mostrará el tamaño del string.
// El alumno modificará el tamaño del string y volverá a comprobar que devuelve el metodo

const color = "azul" ;
console.log("la palabra", color,  "tiene", color.length , "letras");



// Ejercicio 3: 
// El alumno creará un string en minúsculas y mediante el metodo adecuado lo pasará a mayúsculas.

const verdura = "tomate" ;
console.log("las mayusculas de", verdura , "son", verdura.toUpperCase());

// Ejercicio 4: 
// El alumno creará un string en mayúsculas y mediante el metodo adecuado lo pasará a minúsculas.

const nombre = "CLARA"
console.log("Mi nombre en minusculas es" , nombre.toLowerCase() )

// Ejercicio 5: 
// El alumno deberá obtener el elemento de la posición 2 y 4 del siguiente array: const array = ['hola', 12, , true, [ 1, 3], 'mundo']

const lista = ['hola', 12, , true , [ 1, 3] , 'mundo'];

console.log(lista[2] , " y " , lista [4]);
console.log(lista);

// Ejercicio 6:
// El alumno añadirá nuevos elementos al array en la ultima posición.

const newLista = ['hola', 12, , true , [ 1, 3] , 'mundo'];
newLista.push("element1","element2");
console.log(newLista);

// Ejercicio 7: AVANZADO
// El alumno mediante el método adecuado pregunta si un array de numeros dado incluye un número "3"
 const arryNumbers = [1,2,3,4,5]
 const arryNumbers2 = [2,4,6,8,10]


console.log(arryNumbers.includes(3));
console.log(arryNumbers2.includes(3));

// Ejercicio 8: AVANZADO
// El alumno mostrará por consola un hola mundo utilizando los elementos del array del ejercicio 5.

console.log(lista[0] , lista [5]);



// Ejercicio 9: AVANZADO
// El alumno dado un array de numeros devolverá un array con todos los términos multiplicados por dos.



// Ejercicio 10: AVANZADO
// El alumno obtendrá la ultima posición de cualquier arrray.

const paises = ["España" , "Italia" , "Francia" , "Inglaterra" , "Irlanda" ]

console.log(paises[paises.length-1]); 