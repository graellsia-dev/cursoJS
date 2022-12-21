

const main = document.createElement('div')
document.body.appendChild(main)

const button = document.createElement('button')
button.textContent = 'boton'
main.appendChild(button)

button.onclick = () => {
    contador = 0
    parrafo.textContent = `Contador: ${contador}`
}

let tareas = []
let formulario = document.getElementById('formulario')



formulario.addEventListener('submit', e => {
    e.preventDefault()

    const prueba = document.createElement('div')
    main.appendChild(prueba)
    prueba.textContent = e.target.tarea.value

    console.log(e.target.tarea.value)
    e.target.tarea.value = ''
})
