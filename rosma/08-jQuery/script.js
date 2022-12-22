

// const header = document.createElement('header');
// document.body.appendChild(header);
// header.textContent ='esto es el header';
// header.classList.add("header")

// const titulo = document.createElement('h1');
// titulo.textContent ='esto es un h1 5555';
// header.appendChild(titulo);
// titulo.classList.add("titulo")






// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js

const titulo2 = document.createElement('h1');
titulo2.textContent ='hola mundo';
document.body.appendChild(titulo2)
titulo2.classList.add("titulo2")



// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js

const botonSuma = document.createElement('button');
botonSuma.textContent ='sumar';
document.body.appendChild(botonSuma)
botonSuma.classList.add("botonSuma")

const botonResta = document.createElement('button');
botonResta.textContent ='restar';
document.body.appendChild(botonResta)
botonResta.classList.add("botonResta")



// Ejercicio 3:
// crear un parrafo que diga "contador: 0" 

const contador = document.createElement('p');
contador.textContent ='contador: 0';
document.body.appendChild(contador)
contador.classList.add("contador")


// Ejercicio 4:
// Crear la funcionalidad de que cuando se presione sumar se sume 1 al contador y al restar se reste 1
let number = 0;
botonSuma.addEventListener('click', () => contador.textContent =`contador: ${++number}`)
botonResta.addEventListener('click', () => contador.textContent =`contador: ${--number}`)


// Ejercicio 5: AVANZADO
// Hacer un boton de resret que ponga el contador a 0




// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones
