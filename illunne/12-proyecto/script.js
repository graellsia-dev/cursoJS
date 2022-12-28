

const main2 = document.createElement('div')
document.body.appendChild(main2)

//const button = document.createElement('button')
//button.textContent = 'boton'
//main2.appendChild(button)

// button.onclick = () => {
//     contador = 0
//     parrafo.textContent = `Contador: ${contador}`
// }

let tareas = []
let formulario = document.getElementById('formulario')

let taskList = document.getElementById("task-list-js");
// let taskList = document.getElementById("task-container-js");

// const petunia = document.createElement('h5');
// taskList.appendChild(petunia)
// petunia.textContent('holaaaa soy petunia')


formulario.addEventListener('submit', event => {
    event.preventDefault()
    console.log("event: ", event)
    const newElement = document.createElement('h5')
    taskList.appendChild(newElement)
    newElement.textContent = event.target.tarea.value
    newElement.classList.add("task-element")

    const button = document.createElement("button")
    button.textContent = "delete"
    taskList.appendChild(button)
    button.setAttribute("type", "submit")

    arrayTareas.push(newElement)
    console.log(array.tareas)

   
    event.target.tarea.value = ''
})
