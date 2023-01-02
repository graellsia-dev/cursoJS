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

// Dar funcionalidad cuando hacemos click al boton
// button.onclick = () => {
//     contador = 0
//     parrafo.textContent = `Contador: ${contador}`
// }

// Array para guradar las las tareas
// let tareas = []

// Obtener el formulario de html
let formulario = document.getElementById('formulario')

// Obtener el task-container de html
let taskList = document.getElementById('tasks-list-js')

const button = document.createElement('button')
button.textContent = 'delete'
taskList.appendChild(button)


// Añadir evento al boton del formulario para que haga esto al pulsar
formulario.addEventListener('submit', event => {
    event.preventDefault()
    // console.log(event)
    const newElement = document.createElement('h5')
    taskList.appendChild(newElement)
    newElement.textContent = event.target.tarea.value
    newElement.classList.add("task-element")



    event.target.tarea.value = ''
})

button.addEventListener('click', event => {
    taskList.delete()
})
