# Strings y Numbers

## Strings

Los strings son tipos de datos que representan cadenas de caracteres.

Por el mero hecho de ser strings, tienen disponibles una serie de operaciones a las que podemos acceder utilizando el caracter `.`.

[REF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Template literal

Cuando tenemos concatenaciones muy grandes o textos con saltos de línea, utilizar las comillas se vuelve muy tedioso y poco legible.

```js
let a = `<p class="` + varClass+ '">' + textoP + '</p>';
let a = `
         <p class="${varClass}">${textoP}</p>
         <ul>
            <li>${textoLi}</li>
        </ul>
         `;
```

## Number

PAra hacer operaciones con numbers un poco más complejas, tenemos la utilidad Math

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

# Arrays

Los arrays son la forma de crear una lista de elementos en el mundo de la programación. Con ellas puedo realizar muchas operaciones como en la vida real:

    - Crear una lista de cero
    - Añadir un elemento a la lista
    - Eliminar un elemento de la lista
    - Modificar un elemento de la lista
    - Leer/buscar un elemento de la lista
    - Filtrar la lista generando otra lista con menos elementos
    - Pintar la lista
    - ...

Los arrays son un tipo de datos y por tanto se almacenan en variables y luego podemos operar con esa variable. Lo importante es identificar QUE quiero hacer con esa lista.

Otra caracteristica que tienen es que los elmentos de la lista TAMBIEN son tipos de datos.

## Sintaxis

### Creación

Para poder crear y ejecutar acciones con la lista tenemos la siguiente sintaxis:

    ```js
        // CREACION DE UNA LISTA
        const arr = []; // la lista se crea abriendo y cerrando el caracter corchete. En este caso hemos creado una lista vacia
        let arr = [1, 4, 2, 5]; // Creamos una lista con 4 elementos number. Tambien se pueden crear con let
        const arr = ["hola", "adios"]; // Creamos una lista con 2 elementos string
        const arr = [true, false]; // Creamos una lista con 2 elementos boolean
        const arr = [
            [4, 5],
            [4, 29]
        ]; // Creamos una lista con 2 elementos de tipo lista de numbers
        const n =5;
        const arr = [n,n,n]; // esto crea un array de numeros con 3 elementos cuyo valor es 5 para todos los elementos
        const arr = Array(3).fill(n); // esto crea un array igual al anterios
        const arr = Array(5); // crea una lista de 5 elementos vacios
        const arr = Array(5).fill(true); // crea una lista de 5 elementos booleanos con valor true
        const arr = [a => a+a, a => a*a]; // esto crea un array de dos elementos de tipo funcion
    ```

### Acceso

Una vez que hemos visto como crear arrays, ¿Como puedo acceder a un elemento?

    ```js
        /*
         Antes de recuperar un elemento necesito saber en qué posición se encuentra.
         Las posiciones en un array, en JS, empiezan desde el 0 y la última posición es la longitud del array-1. La longitud del array se obtiene accediendo al `.length` de la variable, es decir, igual que hacíamos con los strings
        */
       const arr = [4,45,22,66,77,12,34]; // array de 7 elementos de number
       arr.length; // 7. length es de tipo number
       arr[0]; // esto devuelve el elemento de la posicion 0 del array ==> 4
       arr[arr.length-1]; // esto devuelve el último elmento del array ==> 34
       arr[6]; // esto devuevle el elemento en la posición 6 del array ==> 34
       const s = arr[3] + arr[2]; // ¿cuanto vale s? 66+22 = 88;
       const arr = ['hola', 'adios'];
       arr[0].toUpperCase(); // 'HOLA'
       arr[23]; // ?? que devuelve esto ==> undefined
    ```

### Modificacion de un elemento existente

Una vez que ya se como crear una lista y como acceder a un elemento de una lista (dada una posición). ¿Como puedo modificar un elemento existente en la lista?

    ```js
        /*
            La idea es que el acceso a ese elemento se trate como una variable y por tanto podremos reasignarle un valor como si fuese una variable.
            Por tanto para modificar un elemento de la lista, primero necesito saber su posición
        */
       const arr = [4,45,22,66,77,12,34];
       arr[0] = 8; // esto cambia el primer elemento y ahora pasa a valer 8
       arr[0]; // esto ya no devuelve 4 nunca mas ahora devuelve 8
       arr[4] *= 2; // arr[4] = arr[4] * 2; la posicion 4 del array ahora vale 154
       const arr = ['hola', 'adios'];
       arr[0] += arr[1]; // ['holaadios', 'adios']. Solo se modifica la posicion de 0
    ```

### Añadir un elemento

¿Como creo un elemento nuevo en la lista?. Para resolver esta pregunta primero tengo que distinguir dos casos.

- Añadir un elemnto al final de la lista.

  ```js
  /*
      ¿En que posición debería añadir el nuevo elemento?
    */
  const arr = [true, false]; // arr de dos elementos y dos posiciones 0 y 1
  arr.length; // 2 === que casualidad justo donde quiero mi nuevo elemento
  arr[arr.length] = true; // añade un elemento al final de al lista, dejando el array [true, false, true]
  arr.length; // 3
  arr[5] = false; // ¿Que pasaria? [true, false, true,_vacio_, _vacio_, false]
  arr.length; // 6
  arr[3]; // undefined
  ```

- Añadir un elemento en una posicion en la que ya existe otro elemento => Para ello necesitamos conocer como `recorremos arrays`. Mañana veremos una funcion que nos lo hace.

### Recorrer una lista

Es moverse por la lista de diferentes maneras. Ascendente (del principio al final), descendente (Del final al principio) o con cualquier forma que se nos ocurra.

La forma que tenemos para recorrer array es utilizando bucles. La variable de control es la variable number que me indica la posicion actual del array en la que estoy.

```js
const arr = [3, 123, 1, 23, 2]; // array de 5 elementos de tipo number
for (let i = 0; i < arr.length; i++) {
  //  pinto todos los elementos del array en un p
  document.write(`<p>${arr[i]}</p>`);
}
// ahora quiero pintar la suma de los elementos de un array
let sumArr = 0; // en esta variable voy almacenando la suma acumulada
for (let i = 0; i < arr.length; i++) {
  sumArr += arr[i]; // añado a mi acumulador el valor de la posicion de la vuelta actual
}
document.write(`<p>${sumArr}</p>`);
// ¿Que pasa si tengo una lista de listas?
const arr = [
  [true, false],
  [false, true, true]
]; // listas de listas de booleanos
for(let i=0; i<arr.length; i++){
    arr[i]; // ¿Que tipo de datos tengo? -> lista de booleanos. i=0 -> [true, false], i=1 -> [false, true, true]
    arr[i][0]; // ¿Que tipo de datos? --> booleano. Si i = 0 --> true, si i=1 -> false
    arr[i].length; // ¿que tipo de datos? --> number, Si i=0--> 2, Si i=1 --> 3
    for(let j=0; j< arr[i].length; j++){
        arr[i][j]; // Recorre toda la sublista. Esto devuelve un bool 
        /*
          i=0, j=0 --> true
          i=0, j=1 --> false
          i=0, j=2 --> undefined, pero nunca el bucle llegaría a esta situacion
          i=1, j=0 --> false
          i=1, j=1 --> true
          i=1, j=2 --> true
          i=1, j=3 --> undefined, pero nunca el bucle llegaría a esta situacion
          i=2, j=0 --> ERROR de JS. Can not read xxx of undefined, pero nunca el bucle llegaría a esta situacion
        */
    }
}
```

## Metodos y utilidades de Arrays

Existen una serie de operaciones utiles para trabajar con arrays en JS.

### Añadir o eliminar elementos al princicio o al final del array

```js
const arr = [];
arr.push(3, ...); // añade al final del array los parámetros de entrada
arr.push(3); // el array quedaría [3]. es equivalente a arr[arr.length-1] = 3;
arr.push(3,4,5); // el array quedaría así [3,4,5] (suponiendo la array vacio)
const a = arr.pop(); // elimina el último elemento del array, devolviendo su valor. a tendría el valor de la última posicion del array. Este método modifica la longitud del array
arr.unshift(3); // añade los elementos que pasemos como parámetros al principio del array, desplazando los que ya hay [3,4,2] --> unshift(2) --> [2,3,4,2]
arr.shift(); // elimina el primer elemento de un array, devolviendo su valor y actualizando los indices y la longitud del resto elementos
 
```

### Buscar elementos dentro del array

Todas las funciones que se tienen que pasar como parámetro de entrada a estos métodos de arrays tienen la misma estructura. Se les conocen en este caso como predicados.

Los métodos de los arrays tienen internamente un bucle y en cada vuelta del bucle llaman a la funcion predicado

La estructura de las funciones predicado es la siguiente:

- Aceptan 3 parámetros de entrada
    1. Es el valor que se está recorriendo cada vez que pase una vuelta del bucle --> arr[i]
    2. Es el valor del índice del bucle, es decir, nuestra i antigua
    3. Es el array completo

- Devuelve un booleano, que indica true si se cumple tu predicado

FIND

```js
const arr = [3,4,1,9];
// find devuelve el primer valor que encuenta que cumpla la condicion. si no existe ninguno devuelve undefined
const foundedValue = arr.find((v, i, array) => v === 4); // Esto devuelve el valor 4
// arr.find(v => v === 4)
const foundedValue = arr.find((v, i, array) => v === 10); // Esto devuelve el valor undefined porque ningun elemento del array cumple la condicion de ser igual a 10 
const foundedValue = arr.find(v => v>5); // El valor sería 9
const foundedValue = arr.find((v,i) => v>3 && i%2 === 0);// undefined. Ni en la posicion 0 ni en la posicion 2 hay un número mayor que 3
const foundedValue = arr.find((v,i) => v>3 && i%2 === 1);// 4, es el valor de la primera posicion impar cuyo valor es superior a 3
const arr = [3,4,1,9];
const foundedValue = arr.find((v,i,array) => v>3 && i%2 === array.length%2); // undefined, no hay un número > 3 en las posiciones pares
const arr = [3,2,1,5,9];
const foundedValue = arr.find((v,i,array) => v>3 && i%2 === array.length%2); // 5, es el primer número en posiciones impares cuyo valor es superior a 3
```

Otras funciones de búsqueda

```js
// findIndex --> Igual que el find pero en vez de devoler el valor, devuelve la posicion
const arr = [3,2,1,5,9];
const foundedIndex = arr.findIndex((v,i,array) => v>3 && i%2 === array.length%2); // 3, la posicion del 5, que es el número que cumple la condicion
// some --> Devuelve un booleano que indica si hay algun elemento que cumple la condicion
const arr = [3,2,1,5,9];
const hasValue = arr.some((v,i,array) => v>3 && i%2 === array.length%2); // true, el elemento de la pos 3 cumple la condicion
const arr = [3,4,1,9];
const hasValue = arr.some((v,i,array) => v>3 && i%2 === array.length%2); // false, no hay ningun elemento en el array que cumpla la condicion
// every --> DEvuelve un boolean que indica si todos los elementos cumplen la condicion o no
const arr = [2,4,6,12,48];
const allValues = arr.every(v => v%2===0); // true. todos los elementos son pares
/* codigo con bucles
  let every = true;
  let i =0;
  while(every && i<arr.length){
    every = arr[i]%2 === 0;
    i++
  }
  ---- aqui everi será true si todos cumplen la condicion. En cuando haya uno que no para el bucle y se queda en false
  function myEvery(arr, predicate){
    let every = true;
    let i =0;
    while(every && i<arr.length){
      every = predicate(arr[i], i, arr);
      i++;
    }
    return every;
  }
*/
// filter => devulve un subarray con los elementos que cumplan el predicado
const arr=[3,1,4,2,2,5];
const newArr = arr.filter(v => v%2===0); // newArr = [4,2,2]
```

### Metodos para Recorrer un array

forEach

```js
// El método permite recorrer un array como si fuese un for. NO devuelve nada y puede modificar el array que está recorriendo
const arr = [3,1,2,4];
arr.forEach((v,i,array) => {
  // codigo que queramos hacer como cuerpo del for. No debe tener return
  array[i] = _otro_valor_; // ESTO SI MODIFICA EL VALOR DEL ARRAY
  // v= _otro_valor_; --> ESTO NO MODIFICA EL VALOR DEL ARRAY
});
```

MAP

al igual que el forEach, el map recorre el array, pero devuelve un nuevo array con los valores que devuelvas en la funcion.

```js
const arr=[3,1,4,2,2,5];
const newArr = arr.map(v => v*2); // newArr = [6,2,8,4,4,10];
const otherNewArr = arr.map(v => v%2===0); // otherNewArr = [false, false, true, true, true, false]
const otherOtherNewArr = arr.map(v => v%2===0 ? 'par':'impar'); // otherOtherNewArr = ['impar', 'impar', 'par', 'par', 'par', 'impar']
```

Reduce

recorre el array acumulando y devolviendo en una variable un valor que nosotros queramos
```js
const arr=[3,1,4,2,2,5];
const sum = arr.reduce((acc,v,i,arr) => acc+v, 0); // sum = 17
// i=0; acc=0, v = 3 --> el reducer devolvera 0+3 = 3;
// i=1; acc=3, v = 1 --> el reducer devolvera 3+1 = 4;
// i=2; acc=4, v = 4 --> el reducer devolvera 4+4 = 8;
// ...
// i=5; acc=12, v = 5 --> el reducer devolvera 12+5 = 17;
```