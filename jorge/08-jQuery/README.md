# Gestión del DOM

Cualquier dato/elemento o informacion tiene 4 operaciones básicas, conocidas como CRUD:

- Crear (Create)
- Leer (Read)
- Actualizar (Update)
- Borrar (Delete)

Dentro de JS, cuando nos ejecutamos en un navegador, tenemos disponible un objeto que se llama `document`. Este objeto tiene funciones/métodos que nos permiten gestionar la DOM. Algunos de estos métodos son:

- createElement
- querySelector, querySelectorAll
- getElementById, getElementByClassname, ...

Estos métodos devuelven un objeto (o un array de objetos) que representan a un Nodo del DOM, es decir, a un elemento HTML.

Con estos objetos podemos trabajar con ese elemento del DOM (añadiendo texto, añadiendo hijos, añadiendo/quitando clases css, etc);

## ¿Como creo un elemento nuevo en el DOM?

```js

const block = document.createElement('div'); // esto crea un nuevo DIV en JS y lo guardamos en la variable block. De momento TODAVIA no lo podemos ver en el HTML, solo está creado en JS.

// Una vez que el nodo en JS, podemos utilizar cualquiera de sus metodos o propiedades
block.textContent = 'Hola'; // la propiedad textContent me permite meterle texto
block.id = 'MI_CONTENEDOR_UNICO'; // añado un atributo ID al div

// a partir aqui para poder ver el elemento en el HTML, necesitamos obtener el nodo que será su padre. Este nodo HTML podría existir ya en el HTML o podría ser otro createElement

// Existen dos nodos que ya están preconstruidos en JS. Estos son el head y el body
document.body.appendChild(block) //este sería el nodo del body. Con la función appendChild de un nodo HTML, insertamos en el HTML real nuestros nodos creados en JS como hijo directo.

// En este caso lo que he hecho es insertar el div que he creado en la 24, como hijo directo del body
```

## ¿Como recupero un elemento o una lista de elementos del DOM que ya existe?

En este caso aunque hay alguno más vamos a ver 3 métodos:

```js

const mySpan = document.getElementById('MI_ID_DEL_ELEMENTO'); // Obtenemos el elemento del DOM real que tenga 'MI_ID_DEL_ELEMENTO' como atributo id

const otherSpan = document.querySelector('SELECTOR_CSS'); // esto devuelve el primer nodo del DOM real que cumpla con el selector CSS que hayamos puesto. ---> Object de tipo HTMLElement

const spanList = document.querySelectorAll('SELECTOR_CSS'); // esto devuelve la lista de nodos del DOM real que cumplan con el selector CSS que hayamos puesto. ---> Array de objects de tipo HTMLElement

```

## ¿Como elimino un elemento del DOM?

1. Primero tengo que seleccionar el elemento HTML que quiero borrar
2. Utilizar su método remove() que elimina el elemento y todos su hijos del DOM real.

```js
const card = document.querySelector('.card'); // selecciono el primer elemento del DOM que tenga la clase css card.

card.remove(); // con el metodo remove, eliminaría el elemento .card y todos sus hijos

```

## ¿Como navego entre elementos del DOM?

Dado un elemento del DOM, obtener su padre, sus hijos, su siguiente hermano, su hermano anterior.

```js
/*
 <body>
    <main>
        <div class="container">
            <p>hola</p>
            <p>adios</p>
        <div>
    </main>
 </body>
*/

// ¿Como obtengo el div?
const container = document.querySelector('.container'); // obtengo el div

// Partiendo del div.container ¿Como puedo acceder desde a su padre?
container.parentElement; // esto me permite acceder al objeto del DOM del padre, en este caso el main.

// ¿Como puedo acceder a sus hijos?

container.children; // esto me devuelve un array con los elementos hijos directos del div.container. [Object<p>, Object<p>]

// ¿Como puedo acceder a un hermano?
const pChild = container.children[0]; // representa el primer hijo
const pSibling = pChild.nextElementSibling; // devuelve el segundo p, que es el siguiente hermano del primer p.

pChild.previousElementSibling; // devuelve null, el primer p, no tiene hermano anterior
container.nextElementSibling; // devuelve null, el div.container no tiene hermano siguiente


pSibling.textContent = 'Esto está cambiado';

```

## Referencias

- [¿Qué es el DOM?. Su uso con Javascript](https://lenguajejs.com/javascript/dom/que-es/)
- [¿Qué es el BOM?](https://www.arkaitzgarro.com/javascript/capitulo-14.html)
- [Javascript en el navegador. Como conectar con un documento HTML](https://www.arkaitzgarro.com/javascript/capitulo-14.html)
- [Selección de elementos del DOM](https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom)
- [Crear elementos en el DOM como objetos JS](https://lenguajejs.com/javascript/dom/crear-elementos-dom/)
- [Insertar elementos del DOM JS en el HTML](https://lenguajejs.com/javascript/dom/insertar-elementos-dom/)
- [Gestionar el CSS en un navegador](https://lenguajejs.com/javascript/dom/manipular-clases-css/)
- [Navegar entre elementos del DOM usando JS](https://lenguajejs.com/javascript/dom/navegar-elementos-dom/)
