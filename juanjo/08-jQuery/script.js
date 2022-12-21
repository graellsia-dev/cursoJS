const header = document.createElement('header');
document.body.appendChild(header);
header.classList.add("header");


const titulo = document.createElement('h1');
titulo.textContent = "Hola Mundo";
header.appendChild(titulo);
titulo.classList.add("titulo");

const nombre = document.createElement('h4');
nombre.textContent = "Juanjo";
header.appendChild(nombre);
nombre.classList.add("nombre");


// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js

// const header = document.createElement('header');
// document.body.appendChild(header);
// header.classList.add("header");

// const titulo = document.createElement('h1');
// titulo.textContent = "Hola Mundo";
// header.appendChild(titulo);
// titulo.classList.add("titulo");

// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js

// const button = document.createElement('button');
// button.textContent = "Sumar";
// header.appendChild(button);
// button.classList.add("button");

// const button1 = document.createElement('button');
// button1.textContent = "Restar";
// header.appendChild(button1);
// button1.classList.add("button1");


// Ejercicio 3:
// crear un parrafo que diga "contador: 0" 

// const parrafo = document.createElement('p');
// parrafo.textContent = "contador: 0";
// header.appendChild(parrafo);
// parrafo.classList.add("parrafo");



// Ejercicio 4:
// Crear la funcionalidad de que cuando se presione sumar se sume 1 al contador y al restar se reste 1

const suma = document.createElement('button');
suma.textContent = "Sumar";
header.appendChild(suma);
suma.classList.add("suma");

const resta = document.createElement('button');
resta.textContent = "Restar";
header.appendChild(resta);
resta.classList.add("resta");

const parrafo = document.createElement('p');
parrafo.textContent = "contador: 0";
header.appendChild(parrafo);
parrafo.classList.add("parrafo");

let contador = 0;

suma.addEventListener('click', () => {
    contador++                                        //1ª forma de hacerlo
    parrafo.textContent = `contador: ${contador}`
    
} )
resta.addEventListener('click', () => parrafo.textContent = `contador: ${--contador}` ) //2ª forma de hacerlo

// Ejercicio 5: AVANZADO
// Hacer un boton de reset que ponga el contador a 0

const reset = document.createElement('button');
reset.textContent = "Resetea";
header.appendChild(reset);
reset.classList.add("reset");
reset.addEventListener('click', () => parrafo.textContent = `contador: ${contador=0}` )


// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones

