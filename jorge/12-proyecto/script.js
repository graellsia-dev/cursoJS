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
// let tareas = []

// Obtener el task-container de html
let taskcontainer= document.getElementById('task-container-js')

// Añadir evento al boton del formulario para que haga esto al pulsar
formulario.addEventListener('submit', event => {
    event.preventDefault()
    console.log ("event:", event)

    const newElement = document.createElement('h5')
    taskList.appendChild(newElement)
    newElement.textContent = event.target.tarea.value
    newElement.classList.add("task.element")

    const button = documen.createElement('button')
    button.textContent = 'delate'
    taskList.appendChild(button)
    button.setAttribute('type', 'submit')

    arrayTareas.push(newElement)
    console.log (arrayTareas)

    console.log(event.target.tarea.value)
    event.target.tarea.value = ''
})
