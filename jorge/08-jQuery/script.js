const header = document.createElement('header');
document.body.appendChild(header);
header.classList.add("header")


const titulo = document.createElement('h1');
titulo.textContent = 'Hola Mundo';
header.appendChild(titulo);
titulo.classList.add("titulo")

const nombre = document.createElement('h4');
nombre.textContent = 'Jorge';
header.appendChild(nombre);
nombre.classList.add("nombre")

const main = document.createElement('div')
document.body.appendChild(main)

const sumar = document.createElement('button')
sumar.textContent = 'Sumar'
main.appendChild(sumar)

const restar = document.createElement('button')
restar.textContent = 'Restar'
main.appendChild(restar)

const reset = document.createElement('button')
reset.textContent = 'reset'
main.appendChild(reset)

const parrafo = document.createElement('p')
parrafo.textContent = 'Contador: 0'
main.appendChild(parrafo)

let contador = 0;

// sumar.addEventListener('click',() => parrafo.textContent = `Contador: ${++contador}`)
// sumar.onclick = suma 
sumar.onclick = () => parrafo.textContent = `Contador: ${++contador}`
reset.onclick = () => {
    contador = 0
    parrafo.textContent = `Contador: ${contador}`
}


restar.addEventListener('click', resta)

function resta(){
    contador--
    parrafo.textContent = `Contador: ${contador}`
}

function suma(){
    contador++
    parrafo.textContent = `Contador: ${contador}`
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
