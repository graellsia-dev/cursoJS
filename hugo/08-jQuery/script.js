const header = document.createElement("header");
document.body.appendChild(header);
header.classList.add("header");




const titulo = document.createElement("h1");
titulo.textContent = "hola mundo";
header.appendChild(titulo);
titulo.classList.add("titulo");

const nombre = document.createElement("h4");
nombre.textContent = "Hugo";
header.appendChild(nombre);
nombre.classList.add("nombre");


const buttonSuma = document.createElement('button');
buttonSuma.type = 'button';
buttonSuma.innerText = 'sumar';
document.body.appendChild(buttonSuma);

const buttonResta = document.createElement('button');
buttonResta.type = 'button';
buttonResta.innerText = 'resta';
document.body.appendChild(buttonResta);

const buttonReset = document.createElement('button');
buttonReset.type = 'button';
buttonReset.innerText = 'rest';
document.body.appendChild(buttonReset);

let contador = 0



const parrafo = document.createElement("p");
parrafo.textContent = contador;
header.appendChild(parrafo);
parrafo.classList.add("nombre");
// let parrafo = document.createElement("p");
// let parrafoTexto = document.createTextNode('contado', contador);
// parrafo.appendChild(parrafoTexto);

document.body.appendChild(parrafo);


buttonSuma.addEventListener("click", myFunctionSuma);

function myFunctionSuma() {
    parrafo.textContent = ++contador;
    console.log(contador)

}
buttonResta.addEventListener("click", myFunctionResta);

function myFunctionResta() {
    parrafo.textContent = --contador;
    console.log(contador)
}
buttonReset.addEventListener("click", myFunctionReset);

function myFunctionReset() {
    contador=0
    parrafo.textContent = contador;
    console.log(contador)
}


// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js

// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js

// Ejercicio 3:
// crear un parrafo que diga "contador: 0"

// Ejercicio 4:
// Crear la funcionalidad de que cuando se presuione sumar se sume 1 al contador y al restar se reste 1

// Ejercicio 5: AVANZADO
// Hacer un boton de resret que ponga el contador a 0

// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones
