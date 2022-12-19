# Funciones

Las funciones en programación son una forma de crear "plantillas" de una porcion de código que queramos reutilizar en varios puntos de nuestra aplicacion.

Lo fundamental de una función es que tiene parámetros de entrada (variables de las que depende nuestra función) y devuelve un valor de salida.

Ya hemos usado funciones que están creadas por JS (parseInt, Math.max, charAt, ...)

En JS las funciones son un tipo de datos. Si hacemos un typeof a una funcion nos devuelve el string `function`.

Las funciones tienen dos actores fundamentales:

- **El/la que crea la función**: Es la persona que define e implementa el código que debe ejcutar la función.

- **El/la que usa la función**: Es la persona que usa la funcion para que se ejecute su código interno. A esto se le conoce como `llamar a la función`.

## Tipos de funciones

### Con nombre implícito

Son funciones a las que les especificamos un nombre y este nombre nos sirve para poder llamarlas en otros puntos del código.

La sintaxis es:

```js
function _nombre-implicito_(_nombre_parametros_funcion){
    /* CODIGO A EJECUTAR POR LA FUNCION*/
    return _result_; // utilizamos return para poder devolver un valor 
}
/* ----------------------- */
// Es una funcion que dado dos números devuelve la suma de ellos
function suma(a,b){ // definicion
    return a+b;
}
// ¿Como uso la función?
const result = suma(2,3); // llamo a la funcion y almaceno el resultado
const op1=4;
suma(op1, 10); // puedo tambien utilizar variables o expresiones para los parámetros de entrada
```

Si la funcion no tiene return, **estará devolviendo `undefined` implícitamente**

### Funciones anónimas

Son funciones que no tienen nombre y se pueden asignar a variables o pasar como parámetros de entrada de otras funciones.

```js
const myFn = function (_params_){ // la almaceno en una variable
    /** CODIGO **/
}
myFn(_params_); // utilizo esa variable para ejecutar la función
```

### Callbacks

Son funciones que se pasan como parámetro de otra funcion al ser llamada y que permiten a esta ultima, ejecutar el código de la función que tiene como parámetro en su interior.

Pueden ser anónimas o con nombre implícito

```js
function a(callback){ // tengo una funcion que recibe como parámetro de entrada, otra función (la he llamado callback)
    callback(_params-requeridos_); // aqui estoy llamando al callback
}
// por otro lado necesitamos llamar a la función `a`
a(function(){
    document.write('hola callback anónimo');
}); // llamo a `a` con una funcion anónima
function b() {
    document.write('hola callback con nombre');
}
a(b); // llamo a `a` con una función con nombre
```

### Arrow functions

Son iguales que las funciones anónimas o las funciones con nombre, lo único que les diferencia es como gestionan lo que se conoce como contexto JS (this) que veremos en un futuro.

```js
/*
sintaxis funcion tradicional
function nombre(){
    
}
*/
const arrFn = (_params_) => {/*CODIGO DE LA FUNCION*/};
/*
Características de sintaxis:
- Si el número de parámetros de entrada es solo uno, me puedo quitar los paréntesis
    ej: const arrFn = a => { CODIGO FN };
- Si la función solo tiene una instruccion en su bloque de código, nos podemos quitar el return y las llaves
    ej: const arrFn = () => document.write('hola');
        const suma = (a,b) => a+b;
        const square = a => a*a; // funcion que eleva al cuadrado
*/
// Las arrow funtion se llaman como el resto de funciones, utilizando su nombre
square(2); // devuelve 4, esta es su definicion const square = a => a*a;
// Otra forma de usar arrow es como anónimo o callback
const a = fn => fn('hola');
a(msg => document.write('msg')); // aqui estamos pasando a `a` una funcion que pinta un mensaje como callback y anónimo.
```