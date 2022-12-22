# Asincronía

Cuando tengo un código que requiere una espera, tengo que tener la posibilad de dejar la ejecución de ese código para más adelante sin tener que esperar bloqueando la página.

Este proceso de registrar en JS los códigos que requieren una espera se le conoce como asincronía.

Ejemplos de este proceso son: Timers (temporizadores o intervalos), eventos (addEventListener), solicitud de geolocalización, bluetooth y otras web API's y solicitudes a servidor.

¿Como se gestiona la asincronía?

## Callbacks

Son funciones que se ejecutan cuando haya terminado la espera de la asincronía. Esta función tiene el código que se tiene que ejecutar uan vez termine la asincronía.

Casos de uso:

- Eventos del DOM

```js

window.addEventListener('resize',() => { /* ESTO ES UNA CALLBACK FN  */});

```

- Timers

```js

setTimeout(() => {/* ESTO ES UNA CALLBACK FN  */}, 500); // código que se ejecuta a los 500 ms

setInterval(() => {/* ESTO ES UNA CALLBACK FN  */}, 500); // código que se ejecuta cada los 500 ms

```

- Algunas Web API's (Geolocalización)

```js

navigator.geolocation.getCurrentPosition(
    () => {/* ESTO ES UNA CALLBACK FN para cuando esté OK  */},
    () => {/* ESTO ES OTRA CALLBACK FN para cuando esté KO  */}
);

```

## Promesas

Son una clase de JS que te permite crear y gestionar código asíncrono. 
Esta clase una vez que se crea puede mantener la asincronía en varios estados:

- El primero el que pasa es el estado PENDING, Es su estado inicial (es decir el que obtiene cuando se crea).

- Si todo ha ido bien y el código asíncrono se resuelve (resolve), la promesa pasa al estado FULFILLED, esto quiere decir que la promesa ha terminado correctamente y podemos recoger sus datos.

- Si no ha ido bien y el código asíncrono se rechaza (reject), la promesa pasa a un estado REJECTED, esto quiere decir que la promesa ha terminado con error y podemos recoger los datos del error.

### ¿Como creo una promesa?

```js
// Construir una promesa que cuando pasen 5 segundos se resuelva
// diciendo que han pasado 5 segundos
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // aqui habrán pasado 5 segundos
        resolve('Han pasado 5 segundos');
    }, 5000);
});
// cuando lleguemos aquí, ¿En que estado se encuentra la promesa? === pending
// ¿Que tipo de datos es myPromise? === object
myPromise.then(
    () => { /* CALLBACK PARA RESOLVE */},
    () => { /* CALLBACK PARA REJECT */}
);


```

### Ejemplo de orden de ejecución

```js

console.log('Antes de crear la promesa'); // 1º
const myPromise = new Promise((resolve, reject) => {
    console.log('Durante el constructor. Antes del timeout'); // 2º
    setTimeout(() => {
        // aqui habrán pasado 5 segundos
        console.log('Antes de resolver la promesa'); // 6º
        resolve('Han pasado 5 segundos');
    }, 5000);
    console.log('Durante el constructor. Despues del timeout'); // 3º
});

console.log('Antes de suscribirme a los resultados de la promesa'); // 4º
myPromise.then(
    () => { /* CALLBACK PARA RESOLVE */
        console.log('Cuando la promesa está FULFILLED'); // 7º
    },
    () => { /* CALLBACK PARA REJECT */
        console.log('Cuando la promesa está REJECTED');
    }
);
console.log('Despues de suscribirme a los resultados de la promesa'); // 5º
```

# Fetch

Hasta ahora los datos estaban en local en nuestra página web. En la vida real los datos vienen de un servidor Back-end. Para poder obtener los datos se utiliza la función global `fetch`.

De momento todos los backends que usemos serán construidos por otras personas y gratuitos. En un futuro crearemos nuestros propios backends.

## Protocolo HTTP(s)

Es la forma que tienen de comunicarse dos servidores web. El principal elemento de conexión es la URL.

### URL

Es la dirección de comunicación para acceder a la información que queremos. Es necesaria para poder recuperar el recurso

`'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'`

![URL schema](./img/url.png)

### Request

Es la solititud a un recurso externo (una petición) que el cliente (navegador) realiza al servidor.

La request contiene lo siguiente:

- **URL de conexión**: Es la dirección donde se encuentra la entidad o el dato o la información con el que quiero operar.
- **Metodo HTTP**: Es el tipo de operación que quiero realizar con la información. Puedo hacer principalmente 4 operaciones (CRUD)

  - _GET_: Indica que se quiere hacer una operación de lectura de la información (R)
  - _POST_: Indica que queremos hacer una operación de creación de la información (C)
  - _PUT_ o _PATCH_: Indica al servidor que vamos a hacer una operación de modificación/actualización (U)
  - _DELETE_: Indica al servidor que vamos a borrar la información (D)

- **body** o **payload**: Esto se conoce como el cuerpo de la petición y contiene la información necesaria para realizar una operación, es decir, si yo quiero crear un nuevo elemento en mi sistema necesitaré que me pases los datos del nuevo elemento. El bode se usa principalmente para peticiones POST, PUT o PATCH y el formato de los datos varia en función del backend, pero cada vez es más habitual utilizar formato JSON.

### Response

- **codigo de respuesta**: Es un número que le indica al cliente que realizó la petición cual ha sido el estado de la misma.
  - 100-199: Mensajes informativos.
  - 200-299: Su solicitud se ha realizado correctamente.
  - 300-399: Su solicitud debe ser redirigida a otro lado.
  - 400-499: Error del cliente (navegador) en la solicitud.
  - 500-599: Error interno en el servidor en la solicitud.
- **body**: Es la información (habitualmente en JSON) que nos devuelve el servidor tras realizar la operación que estamos solicitando.

## fetch

El `fetch` es un elemento de tipo function con el que vamos a generar una request http. Para poder escuchar la respuesta, el fetch devuelve una promesa, ya que una solicitud HTTP es asíncrona.

```js

fetch(_url_, _options_) // la url es de tipo string y options es un objeto para especificar otros métodos HTTP y dar valor al body de la solicitud. El método HTTP por defecto si no hay options es GET

fetch(_url_, _options_)
.then(r => r.json()) //el fetch devuelve una promesa con la respuesta, pero todavía sin los datos ya que necesitamos indicarle en qué formato queremos esos datos (texto, blobs, JSON, etc). En la r tambien tendremos el status http y más información de la respuesta HTTP. En este ejemplo estamos pasando los datos a JSON

fetch(_url_, _options_)
.then(r => r.json())
.then(data => /*Cosas que quiera hacer con los datos del body de la respuesta*/ )
// si el formato de la respuesta hubiese sido (r.text()) entonces data sería de tipo string. Al ser r.json() data es un objeto JS.

```

## Tratando asincronía con async/await

Esta técnica nos ayuda a gestionar promesas sin utilizar el then

```js

// GESTION CON PROMESAS
function getPokemon(id){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
           .then(r => r.json())
           .then(p => p);
}

getPokemon(25).then(pikachu => /*cosas con pikachu*/);
//esto es lo siguiente que se ejecuta

// GESTION CON ASYNC/AWAIT

async function getPokemon(id){
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); // lo que devolvía la promesa en el resolve es lo que ahora devuelve el await y lo podemos guardar
    console.log('Esta instrucción se ejecuta cuando termine la peticion(asincronía)');
    const p = await r.json();
    /** puedo hacer lo que me la gana con el pokemon **/
    return p;
}

getPokemon(25).then(pikachu => /*cosas con pikachu*/);

```

Ejemplo async/await con el getBattery

```js
// version promesas
navigator.getBattery().then(battery => {
    /** COSAS DE BATERIAS **/
});

// versión async await
async function startApp(){
    const battery = await navigator.getBattery();
     /** COSAS DE BATERIAS **/
}

startApp();

```
