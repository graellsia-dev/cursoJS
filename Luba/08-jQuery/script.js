// const header = document.createElement('header')
// document.body.appendChild(header);
// header.classList.add("header");

// const titulo = document.createElement('h1')
// titulo.textContent = 'Hola Mundo';
// header.appendChild(titulo);
// titulo.classList.add("titulo");

// const nombre = document.createElement('h4')
// nombre.textContent = 'Luba';
// header.appendChild(nombre);
// nombre.classList.add("nombre");


// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js
// const header = document.createElement('header')
// document.body.appendChild(header);
// header.classList.add("header");

// const titulo = document.createElement('h1')
// titulo.textContent = 'hola mundo';
// header.appendChild(titulo);
// titulo.classList.add("titulo");

// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js
const buttonSumar = document.createElement('button')
buttonSumar.innerText = 'sumar'; 
document.body.appendChild(buttonSumar); 

const buttonRestar = document.createElement('button')
buttonRestar.innerText = 'restar'; 
document.body.appendChild(buttonRestar); 

// Ejercicio 3:
// crear un parrafo que diga "contador: 0" 
let contador = 0
const parrafo = document.createElement('parrafo')
parrafo.innerText = 'contador: 0'; 
document.body.appendChild(parrafo);
parrafo.classList.add("parrafo")
parrafo.id = "parrafo-id"

// Ejercicio 4:
// Crear la funcionalidad de que cuando se presione sumar se sume 1 al contador y al restar se reste 1

buttonSumar.addEventListener('click', () => {
    contador++
    parrafo.innerText = `contador: ${contador}`
})
buttonRestar.addEventListener('click',() => {
    contador--
    parrafo.innerText = `contador: ${contador}`
})

// Ejercicio 5: AVANZADO
// Hacer un boton de resret que ponga el contador a 0

// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones
