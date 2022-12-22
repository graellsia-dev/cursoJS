# Bucles (loops)

Los bucles son la repetición de un mismo bloque de código durante un número finito de vueltas.

Hay varias maneras de crear bucles en programación. Vamos a ver dos que son comunes a todos los lenguajes. El bucle `for` y el bucle `while`.

## For

### sintaxis

```js
for(_inicializacion_; _condicion_; _actualizacion_) {
    /* CODIGO QUE QUIERO REPETIR */
}
// Ejemplo real. loop 7 vueltas
for(let i=0; i<7; i++ ){
    document.write(`<p>Hola ${i}</p>`);
}
/*
    El bucle de arriba dará 7 vueltas imprimendo un <p>Hola _nºVuelta_</p>
1. Nada más entrar en el bucle se ejecutará la fase de inicialización (let i=0). En esta fase, en este caso, estamos declarando una variable i e inicializandola a 0.
2. Empezamos con la primera vuelta del bucle:
    a. Valida la condición. i actualmente vale 0 y la condicion dice i<7?. Esa pregunta actualmente devuelve true y por tanto como devuelve true podemos ejecutar el código del cuerpo del bucle
    b. Ejecutamos el document.write. Esto va a crear un p con el texto: Hola 0.
    c. Ejecutamos la fase de actualización. i pasa a valer 1.
3. Empezamos al segunda vuelta del bucle:
    a. Valida la condición, i actualmente vale 1 y la condicion devuelve true
    b. Ejecutamos el cuerpo del bucle, y por pantalla se mostrará Hola 1
    c. actualizamos. i vale ahora 2.
.... Tres doritos despues
4. Empezamos la vuelta octava del bucle. i actualmente vale 7
    a. Validamos la condicion. i<7??, es decir,  7<7. Esto devuelve false, y por tanto salimos del bucle
*/
```

![Ref](https://www.bookofnetwork.com/images/javascript-images/JS_For-loop-syntax_20Sep16_1239.png)

![Flujo For](https://media.geeksforgeeks.org/wp-content/uploads/20191108131134/For-Loop.jpg)

## While

### Sintaxis While

```js
while(_condicion_){
 /* BLOQUE DE CODIGO A EJECUTAR. Se ejecutará mientras la condicion sea true*/
}
/*
1. Valido la condicion.
2. Si la condicion da true, ejecuto el bucle y repito el paso 1. 
   Si la condicion da false, salgo del bucle.
*/
let i=0; // Sería como la fase de inicialización del for
while(i<7){ // Sería la fase de condicion. Se ejecuta al principio de cada vuelta
    document.write(`<p>Hola ${i}</p>`);
    i++; // fase de actualización del for, que se ejecuta al final de cada vuelta
}
```

![Ref](https://www.bookofnetwork.com/images/javascript-images/JS_while-syntx_24Feb17_1743.png)