// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Sumar, restar, multiplicar, elevar al cuadrado, hacer la raíz cuadrada y dividir numeroA y numeroB.
let numeroA = 36
let numeroB = 16
// console.log("tipos de operacion")
// console.log(" suma, resta,multiplicar, elevar al cuadrado, hacer raiz cuadrada, dividir")
// let operacion = prompt ("que operaccion quiere")

// if (operacion === "suma"){
//     console.log ("suma", numeroA + numeroB)
// }
// if( operacion === "resta"){
// console.log ("resta", numeroA - numeroB)
// }
// if (operacion === "multiplicar"){
//     console.log ("multiplicar" , numeroA * numeroB)
// }
// if (operacion === "elevar al cuadrado"){
//     console.log ("numero A", numeroA **2 )
//     console.log("numeroB", numeroB **2)
// }
// if (operacion === "raiz cuadrada"){
//     console.log ("numero A", Math.sqrt(numeroA ))
//     console.log("numeroB", Math.sqrt(numeroB)) 
// }
// if ( operacion === "dividir") {
//     console.log("division", numeroA/numeroB)
// }
// // Ejercicio 2:
// // Hacer que numeroA aumente en dos unidades dos veces.
// numeroA = numeroA + 2;
// numeroA += 2;

// console.log ("numero A ", numeroA)



// Ejercicio 3:
// Obtener el resto de la división entre numeroA y numeroB y multiplicarlo por 5

console.log("multiplicar el resto de la division de a y b por 5", (numeroA%numeroB)*5)
// Ejercicio 6: 
// Debemos sumar todos los numeros de el siguiente array.
let array = [2, 5, 8, 15]
let suma = 0
array.forEach(Element => suma = suma + Element);
console.log("suma", suma)

// Ejercicio 6: 
// Mediante un prompt se solicita un nombre al usuario. Mediate otro prompt se solicita la edad usuario. Si se llama Jorge o Cristian y además tiene mas de 18 años se mostrará un alert que poga "El usuario tiene acceso". 
let nombreUsuario = prompt ("Nombre de usuario")
let edad = prompt("cuantos años tienes")

if ((nombreUsuario === "jorge" || nombreUsuario ==="cristian") && edad >18 ){7
alert("unuario correcto")}
else {
    alert("usuario incorrecto")
}


// Ejercicio 4: AVANZADO
// Mediante un prompt se solicita un numero al usuario y este deberá decir si es par o impar.


// Ejercicio 5: AVANZADO
// En el ejercicio anterior si el usuario no introduce un numero, deberá aparecer un alert que diga "Debe introducir un numero" 



