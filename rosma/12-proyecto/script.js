///////////
// CLASE //
///////////

// Crear elemento html
// const main = document.createElement('div')
// document.body.appendChild(main)

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
let tareas = []

// Obtener el formulario de html
let formulario = document.getElementById('formulario')
let taskList =document.getElementById('tasks-list-js')

// Añadir evento al boton del formulario para que haga esto al pulsar
formulario.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    const newElement = document.createElement('h5')
    taskList.appendChild (newElement)
    newElement.textContent = event.target.tarea.value
    newElement.classList.add ("task-element")

    event.target.tarea.value = ''
})
