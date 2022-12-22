// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Sumar, restar, multiplicar, elevar al cuadrado, hacer la raíz cuadrada y dividir numeroA y numeroB.
let numeroA = 36
let numeroB = 16
let sumar = numeroA + numeroB;
let resta = numeroA - numeroB;
let multiplicacion =  numeroA * numeroB;
let division = numeroA / numeroB;
let elevar = numeroA ** 2;
let raiz = Math.sqrt (numeroA);


console.log("la suma es" , sumar);
console.log("la resta es" , resta);
console.log("la multiplicacion es" , multiplicacion);
console.log("la division es" , division);
console.log("la potencia es "  , elevar);
console.log("la raiz cuadrada es"  , raiz);

// Ejercicio 2:
// Hacer que numeroA aumente en dos unidades dos veces.
/*
let suma = numeroA
suma = suma + 2
suma +=2

console.log( "la suma de 36 mas 4 es" , suma);
*/

// Ejercicio 3:
// Obtener el resto de la división entre numeroA y numeroB y multiplicarlo por 5
/*
let resto = numeroA % numeroB;
console.log("El resto es : ",resto);

let resultado = resto * 5;
console.log("Resultado: ", resultado);

*/
// Ejercicio 6: 
// Debemos sumar todos los numeros de el siguiente array.
/*
let array = [2, 5, 8, 15]

let reducer = (accumulator, curr) => accumulator + curr;
console.log("La suma de 2, 5, 8, 15 es : ",array.reduce(reducer));

// sin terminar

let array = [2, 5, 8, 15]
let sumaArr = 0;
array.forEach(elemment )
console.log(sumaArr)

*/
// Ejercicio 6: 
// Mediante un prompt se solicita un nombre al usuario. Mediate otro prompt se solicita la edad usuario. Si se llama Jorge o Cristian y además tiene mas de 18 años se mostrará un alert que poga "El usuario tiene acceso". 
/*
tuNombre = prompt ("¿Cuál es tu nombre?").toLocaleUpperCase();
tuEdad = prompt ("¿Cuál es tu edad?");
if  ((tuNombre === "Cristian" || tuNombre === "Jorge") && tuEdad >18 ){
    alert ("Tiene acceso")
}
else {
    alert ("Usuario no válido")
}
*/
// Ejercicio 4: AVANZADO
// Mediante un prompt se solicita un numero al usuario y este deberá decir si es par o impar.
 let number = parseInt ( prompt)

if  ( !isNaN )

// Ejercicio 5: AVANZADO
// En el ejercicio anterior si el usuario no introduce un numero, deberá aparecer un alert que diga "Debe introducir un numero" 



