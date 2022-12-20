// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1: 
// Sumar, restar, multiplicar, elevar al cuadrado, hacer la raíz cuadrada y dividir numeroA y numeroB.
let numeroA = 36
let numeroB = 16

let suma = numeroA + numeroB;
let resta = numeroA - numeroB;
let multiplicar = numeroA * numeroB;
let dividir = numeroA / numeroB;
let elevar = numeroA ** 2;
let raiz = Math.sqrt(numeroA);

// console.log({suma})
// console.log({resta})
// console.log({multiplicar})
// console.log({dividir})
// console.log({elevar})
// console.log({raiz})


// Ejercicio 2:
// Hacer que numeroA aumente en dos unidades dos veces.
let a = 2;
a+=2
a+=2
// console.log(a)

// Ejercicio 3:
// Obtener el resto de la división entre numeroA y numeroB y multiplicarlo por 5
// console.log("Resto po 5",( numeroA % numeroB )*5)


// Ejercicio 4: 
// Debemos sumar todos los numeros de el siguiente array.
let array = [2, 5, 8, 15]
let sumaArr = 0;
array.forEach(element => sumaArr += element);
// array.forEach(element => sumaArr = sumaArr + element) // es lo mismo que la linea anterior
// console.log(sumaArr);


// Ejercicio 5: 
// Mediante un prompt se solicita un nombre al usuario. Mediate otro prompt se solicita la edad usuario. Si se llama Jorge o Cristian y además tiene mas de 18 años se mostrará un alert que poga "El usuario tiene acceso". 
// const nombre = prompt("¿Quién es usted?").toLocaleUpperCase();
// const edad = prompt("¿Qué edad tiene?");

// if ((nombre === 'jorge' || nombre === 'cristian') && edad > 18 ){
//     alert("EL USARIO TIENE ACCESO")
// } else {
//     alert("Usuario no válido")

// }


// Ejercicio 6: AVANZADO
// Mediante un prompt se solicita un numero al usuario y este deberá decir si es par o impar.

// En el ejercicio anterior si el usuario no introduce un numero, deberá aparecer un alert que diga "Debe introducir un numero" 

let number = parseInt( prompt("Introduzca un numero") )

if (!isNaN(number)){
    if(number % 2 === 0){
        alert("Número par")
    } else {
        alert("Número impar")
    }
} else {
    alert("Debe introducir un número")
}