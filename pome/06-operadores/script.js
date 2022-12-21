// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Sumar, restar, multiplicar, elevar al cuadrado, hacer la raíz cuadrada y dividir numeroA y numeroB.
let numeroA = 36
let numeroB = 16

//suma
console.log(numeroA + numeroB);
//resta
console.log(numeroA - numeroB);
//cuadrado
console.log(numeroA**2);
console.log(numeroB**2);
//raiz
Math.sqrt(numeroA);
console.log(numeroA);
Math.sqrt(numeroB);
console.log(numeroB);
//division
console.log(numeroA/numeroB);


// Ejercicio 2:
// Hacer que numeroA aumente en dos unidades dos veces.




// Ejercicio 3:
// Obtener el resto de la división entre numeroA y numeroB y multiplicarlo por 5

console.log((numeroA % numeroB) * 5)

// Ejercicio 6: 
// Debemos sumar todos los numeros de el siguiente array.
let array = [2, 5, 8, 15]
let sumaArray = 0
array.forEach (Element => sumaArray = sumaArray + Element);
console.log(sumaArray)


// Ejercicio 6: 
// Mediante un prompt se solicita un nombre al usuario. Mediate otro prompt se solicita la edad usuario. Si se llama Jorge o Cristian y además tiene mas de 18 años se mostrará un alert que poga "El usuario tiene acceso". 

let nameUser = prompt("Indica tu nombre").toLowerCase();
let ageUser = prompt("Indica tu edad");

if((nameUser === "jorge" || nameUser === "cristian") && ageUser > 18){
    alert("Aceeso permitido")
} else {
    alert("Acceso denegado")
}


// Ejercicio 6: AVANZADO
// Mediante un prompt se solicita un numero al usuario y este deberá decir si es par o impar.


// Ejercicio 7: AVANZADO
// En el ejercicio anterior si el usuario no introduce un numero, deberá aparecer un alert que diga "Debe introducir un numero" 



