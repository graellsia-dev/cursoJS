///////////
// CLASE //
///////////

// Crear elemento html
const main = document.createElement('div')
document.body.appendChild(main)

// Crear boton
const button = document.createElement('button')
button.textContent = 'boton'
main.appendChild(button)

// Dar funcionalidad cuando hacemos clock al boton
button.onclick = () => {
    contador = 0
    parrafo.textContent = `Contador: ${contador}`
}

// Array para guradar las las tareas
let tareas = []

// Obtener el formulario de html
let formulario = document.getElementById('formulario')

// Añadir evento al boton del formulario para que haga esto al pulsar
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const prueba = document.createElement('div')
    main.appendChild(prueba)
    prueba.textContent = e.target.tarea.value

    console.log(e.target.tarea.value)
    e.target.tarea.value = ''
})
