///////////
// CLASE //
///////////

// Crear elemento html
const main2 = document.createElement('div')
document.body.appendChild(main2)

// Crear boton
const button = document.createElement('button')
button.textContent = 'Borrar todo'
main2.appendChild(button)


// Dar funcionalidad cuando hacemos clock al boton
button.onclick = () => {
    contador = 0
    parrafo.textContent = `Contador: ${contador}`
}

// Array para guradar las las tareas
let tareas = []

// Obtener el formulario de html
let formulario = document.getElementById('formulario')

// Obtener el task container de html
// let taskContainer = document.getElementById('task-container-js')


// Obtener el task list de html
let taskList = document.getElementById('task-list-js')


// Añadir evento al boton del formulario para que haga esto al pulsar
formulario.addEventListener('submit', event => {
    event.preventDefault()   // Para que no refresque la página

    const newElement = document.createElement('h5')
    taskList.appendChild(newElement)
    newElement.textContent = event.target.tarea.value
    newElement.classList.add("task-element")
    
    console.log(event.target.tarea.value)
    event.target.tarea.value = ''  // Se pone vacío para que al pulsar deje en blanco añadir tarea ''=> nada  / ' '=> string vacío 
})
