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
