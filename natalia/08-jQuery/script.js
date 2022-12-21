// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js
// const titulo1 = document.createElement('h1');
// titulo1.textContent = 'Hola mundo';
// document.body.appendChild(titulo1);
// titulo1.classList.add('titulo')



// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js
const button = document.createElement('button');
button.textContent = 'sumar';
document.body.appendChild(button);
button.classList.add('titulo')

const button1 = document.createElement('button');
button1.textContent = 'restar';
document.body.appendChild(button1);
button1.classList.add('titulo')

// Ejercicio 3:
// crear un parrafo que diga "contador: 0" 
const parrafo = document.createElement('p');
parrafo.textContent = "contador: 0"
document.body.appendChild(parrafo);
parrafo.classList.add('header')
let contador = 0;

// Ejercicio 4:
// Crear la funcionalidad de que cuando se presuione sumar se sume 1 al contador y al restar se reste 1

button.addEventListener("click", suma);
button1.addEventListener("click", resta);

function suma() {
    contador= contador +1 ;
    parrafo.textContent = "contador: " + contador

    console.log(contador)

}

function resta () {
   contador= contador -1 ;
   parrafo.textContent = "contador: " + contador

   console.log(contador)
}


// Ejercicio 5: AVANZADO
// Hacer un boton de resret que ponga el contador a 0

// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones


// const header =  document.createElement('header');
// document.body.appendChild(header);
// header.classList.add('header')





// const titulo =  document.createElement('h1');
// titulo.textContent = 'Hola mundo';
// document.body.appendChild(titulo);
// titulo.classList.add('titulo')


// const titulo1 = document.createElement('button');
// titulo1.textContent = 'Hola mundo';
// document.body.appendChild(titulo1);
// titulo.classList.add('titulo')









// const titulo2= document.createElement('h1');
// titulo2.textContent = 'Hola mundo';
// header.appendChild = 'titulo'
// nombre.classList.add('titulo')

// titulo2.classList.add('titulo2')
