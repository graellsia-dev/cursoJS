///////////
// CLASE //
///////////

// Crear elemento html
// const main2 = document.createElement('div')
// document.body.appendChild(main2)

// Crear boton

// const button = document.createElement('button')
// button.textContent = 'boton'
// main.appendChild(button)

// Dar funcionalidad cuando hacemos clock al boton

// button.onclick = () => {
//     contador = 0
//     parrafo.textContent = `Contador: ${contador}`
// }

// Array para guradar las las tareas

// let tareas = []

// Obtener el formulario de html

// let formulario = document.getElementById('formulario')

// Añadir evento al boton del formulario para que haga esto al pulsar

// let taskContainer =  document.getElementById('task-container-js');
let arrayFormulario = []
let taskElement = document.getElementById('task-element-js');

formulario.addEventListener('submit', e => {
    e.preventDefault()
    console.log("event", e)

    const prueba = document.createElement('div')
    taskElement.appendChild(prueba)
    prueba.textContent = e.target.tareas.value
    prueba.setAttribute('class', 'delete');

    console.log(e.target.tareas.value)
    e.target.tareas.value = ''
    arrayFormulario.push(prueba)
   

})

// let reset = document.getElementById("button-reset-js");



// reset.addEventListener("click", e => {
    // e.preventDefault()
//     console.log("event", e);
    // document.getElementsByClassName('delete').remove();
    // taskElement.remove();
    // document.removeChild(delete_button)

    // const prueba = document.createElement('div')
    // taskElement.appendChild(prueba)
    // prueba.textContent = e.target.tareas.value

    // console.log(e.target.tareas.value)
    // e.target.tareas.value = ''
    // console.log("nombre",delete_button)







