///////////////////
// TRABAJO FINAL //
///////////////////

// Obtener el formulario de html
let formulario = document.getElementById('formulario-js')
// Obtener la seccion donde se mustran las tareas del html
let seccionTareas = document.getElementById('seccion-de-tareas-js')


// Array para guradar las las tareas
let tareasArray = []

// Añadir evento al boton del formulario para que haga esto al pulsar
formulario.addEventListener('submit', e => {
    e.preventDefault()

    // Definimos un elemento div nuevo para guardar cada tarea (texto + botón)
    const tarea = document.createElement('div')
    // Asociamos el elemento tarea al elemento seccionTareas
    seccionTareas.appendChild(tarea)
    // Añadimos una clase al elemento (para poder añadirla al CSS)
    tarea.classList.add("tarea")
    // Añadimos un id a la tarea para poder seleccionarlo cuando queramos borrarla
    tarea.setAttribute("id", `button-id-${tareasArray.length}`)

    // Definimos un elemento div nuevo para guardar el texto de cada tarea
    const tareaTexto = document.createElement('div')
    // Asociamos el elemento tareaTexto al elemento tarea
    tarea.appendChild(tareaTexto)
    // Añadimos el contenido del formulario
    tareaTexto.textContent = `Tarea: ` + e.target.tarea.value
    // Añadimos una clase al elemento (para poder añadirla al CSS)
    tareaTexto.classList.add("tarea-texto")

    // Definimos un elemento div nuevo para guardar el boton para borrar cada tarea
    const tareaBorrarButton = document.createElement('button')
    // Añadimos texto dentro del boton
    tareaBorrarButton.textContent = 'Borrar'
    // Asociamos el elemento tareaBorrarButton al elemento tarea
    tarea.appendChild(tareaBorrarButton)
    // Añadimos una clase al elemento (para poder añadirla al CSS)
    tareaBorrarButton.classList.add("tarea-boton-borrar")
    // Añadimos una clase al elemento para darle un ID y así distinguirlo de los otros botones
    tareaBorrarButton.classList.add(`button-id-${tareasArray.length}`)

    // Añadimos el elemento creado al array donde iremos guardando todas las tareas
    tareasArray.push(tarea)
    // Eliminamos el contenido del formulario
    e.target.tarea.value = ''

})


// Borrar cada tarea de la lista
// Hacemos que cuadno haya un click sobre cualquier parte de seccionTareas se haga lo siguiente
seccionTareas.addEventListener("click", (event) => {
    console.log("event.target: ", event.target.classList)
    // detectamos cuando el click se ha hecho sobre el boton gracias a su clase
    if (event.target.classList[0] === 'tarea-boton-borrar') {
        // obtenemos el id del boton gracias a su otra clase
        const buttonId = event.target.classList[1]
        // Seleccionamos la tarea que queremos borrar
        const tarea = document.getElementById(buttonId)
        // Eliminamos la tarea
        tarea.remove()
    }
})


// Crear boton para borrar todas las tareas
const borrarTareasButton = document.createElement('button')
// Añadimos texto dentro del boton
borrarTareasButton.textContent = 'Borrar todas las tareas'
// Asociamos el elemento borrarTareasButton al elemento body
document.body.appendChild(borrarTareasButton)
// Añadimos una clase al elemento (para poder añadirla al CSS)
borrarTareasButton.classList.add("borrar-tareas-button")

// Al pulsar el boton de borrar todas las tareas procedemos a eliminar los div donde se guardan las tareas
borrarTareasButton.onclick = () => {
    // Para ello, primero nos aseguramos de que haya tareas
    if (tareasArray.length !== 0) {
        // A continuacion borramos cada una de las tareas
        for (let i = 0; i < tareasArray.length; i++) {
            tareasArray[i].remove()
        }
    }
}

