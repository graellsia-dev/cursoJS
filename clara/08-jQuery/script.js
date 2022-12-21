const header = document.createElement("h1");
document.body.appendChild(header);
header.classList.add("header");


const nombre = document.createElement("h4");
nombre.textContent = "Clara";
header.appendChild(nombre);
nombre.classList.add("nombre");


// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js

const titulo = document.createElement("h1");
titulo.textContent = "Hola Mundo";
header.appendChild(titulo);
titulo.classList.add("titulo");


// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js

const button = document.createElement('button'); 
button.type = 'button'; 
button.innerText = 'Haz Click'; 
document.body.appendChild(button); 

// Ejercicio 3:
// crear un parrafo que diga "contador: 0" 

const parrafo = document.createElement("p");
parrafo.textContent = "contador";
document.body.appendChild(parrafo);
parrafo.classList.add("contador");

// Ejercicio 4:
// Crear la funcionalidad de que cuando se presuione sumar se sume 1 al contador y al restar se reste 1
let contador = 7;

const sumar = document.createElement('button'); 
sumar.type = 'button'; 
sumar.onclick = function(){ 
     contador = contador + 1;
     console.log(contador);
     sumar.innerText = "La suma es " + contador.toString();
} 
sumar.innerText = "La suma es " + contador.toString();
document.body.appendChild(sumar); 
sumar.classList.add("button");

const restar = document.createElement('button'); 
restar.type = 'button'; 
restar.onclick =function(){ 
     contador = contador - 1;
     console.log(contador);
     restar.innerText = "La resta es " + contador.toString();

} 
restar.innerText = "Laa resta es " + contador.toString();
document.body.appendChild(restar);
restar.classList.add("button2"); 

// Ejercicio 5: AVANZADO
// Hacer un boton de resret que ponga el contador a 0




// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones
