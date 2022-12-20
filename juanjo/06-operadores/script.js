// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Sumar, restar, multiplicar, elevar al cuadrado, hacer la raíz cuadrada y dividir numeroA y numeroB.
let numeroA = 36
let numeroB = 16

console.log("Suma:" , numeroA + numeroB);
console.log("Resta:" , numeroA - numeroB);
console.log("Multiplicar:" , numeroA * numeroB);
console.log("Elevar al cuadrado numeroA:" , numeroA ** 2);
console.log("Elevar al cuadrado numeroB:" , numeroB ** 2);
console.log("Raiz cuadrada numeroA:" , Math.sqrt (numeroA));
console.log("Raiz cuadrada numeroB:" , Math.sqrt (numeroB));
console.log("Dividir:" , numeroA / numeroB);


// Ejercicio 2:
// Hacer que numeroA aumente en dos unidades dos veces.

console.log("Ejercicio2:" , numeroA + ( 2 * 2 ) );
numeroA+=2
numeroA+=2
console.log("Ejercicio2:" , (numeroA));

// Ejercicio 4:
// Obtener el resto de la división entre numeroA y numeroB y multiplicarlo por 5

console.log("Ejercicio3:" , ( numeroA % numeroB ) * 5 );

// Ejercicio 6: 
// Debemos sumar todos los numeros de el siguiente array.
let array = [2, 5, 8, 15];
let suma = 0;

array.forEach(element => suma = suma + element);
    console.log("La suma de los números es: ", suma);


// Ejercicio 5: 
// Mediante un prompt se solicita un nombre al usuario. Mediate otro prompt se solicita la edad usuario. Si se llama Jorge o Cristian y además tiene mas de 18 años se mostrará un alert que poga "El usuario tiene acceso". 

// let nombre = prompt ("Nombre usuario");
// let edad = prompt("¿Que edad tienes?");

// if ((nombre === "jorge" || nombre === "cristian") && edad > 18) {
//             alert("EL USUARIO TIENE ACCESO");
//     } else { 
        
//     alert("Usuario desconocido:");
// }




// Ejercicio 6: AVANZADO
// Mediante un prompt se solicita un numero al usuario y este deberá decir si es par o impar.

let number = parseInt (prompt ("Número"));
    console.log(number)

if (!isNaN (number)){

    if(number % 2 === 0){
        alert("Número par")
    } else {
        alert ("Número impar")
    }

} else {
    alert ("Debe introducir un número")
}


// Ejercicio 7: AVANZADO
// En el ejercicio anterior si el usuario no introduce un numero, deberá aparecer un alert que diga "Debe introducir un numero" 



