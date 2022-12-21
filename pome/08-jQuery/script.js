


// Ejercicios:
// El alumno deberá linkar el archivo script.js con el archivo index.html para utilizarlo desde el navegador.
// Las herramientas de desarrollador deberán estar siempre abiertas.
// El codigo deberá organizarse de manera limpia y lógica utilizando siempre las buenas practicas indicadas en clase.

// Ejercicio 1:
// Crear un h1 que diga "hola mundo" desde js

const titulo = document.createElement("h1");
titulo.textContent = 'Hola Mundo';
document.body.appendChild(titulo);
titulo.classList.add("titulo");

// Ejercicio 2:
// Crear un boton que ponga sumar en el body desde js
// Crear otro boton que ponga restar en el body desde js

const sumar = document.createElement("button");
sumar.textContent = 'Sumar';
document.body.appendChild(sumar);
sumar.classList.add("sumar");
sumar.id = "sumar-button";

const restar = document.createElement("button");
restar.textContent = 'restar';
document.body.appendChild(restar);
restar.classList.add("restar");
restar.id = "restar-button";

// Ejercicio 3:
// crear un parrafo que diga "contador: 0" 
let contador = 0
const parrafo = document.createElement("p");
parrafo.textContent = `contador: ${contador}`;
document.body.appendChild(parrafo);
parrafo.classList.add("parrafo");
parrafo.id = "parrado-id"

// Ejercicio 4:
// Crear la funcionalidad de que cuando se presuione sumar se sume 1 al contador y al restar se reste 1

const summarButton = document.getElementById("sumar-button");
summarButton.addEventListener("click", () => {
    // parrafo.remove()
    // contador++
    parrafo.textContent = `contador:  ${++contador}`
    console.log(contador)
    // document.body.appendChild(parrafo);

})

// const restarButton = document.getElementById("restar-button");
// restarButton.addEventListener("click",() => {
// parrafo.textContent = `contador ${--contador}`
// })

restar.addEventListener("click",() => {
    parrafo.textContent = `contador:  ${--contador}`
    })

// Ejercicio 5: AVANZADO
// Hacer un boton de reset que ponga el contador a 0

const reset = document.createElement("button");
reset.textContent = 'reset';
document.body.appendChild(reset);
reset.classList.add("reset");
reset.id = "reset";

reset.addEventListener("click", () =>{
    contador = 0
    parrafo.textContent = `contador:  ${contador}`
    } )


// Ejercicio 6: AVANZADO
// Dar clases a los elementos creados y cambiar la fuente y el color de cada uno de los botones

