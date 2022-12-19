# Variables y tipos de datos

Una variable es un espacio en la memoria RAM del ordenador donde voy a guardar datos/informacion que utilizaré en diferentes puntos de mi algoritmo/programa.

Las variables tienen dos elementos:

- `nombre`: alias para poder referenciar esa variable.
- `valor`: el dato que quiero almacenar.

## Como se escribe una variable en JavaScript

Tenemos dos formas: utilizando la palabra reservada (`let`) o utilizando la palabra reservada (`const`).

```js
let nombreVar = _valor_; // utilizamos notación camel case
const NOMBRE_VAR = _valor_; // utilizamos notación snake case
```

La diferencia entre let y const es que `let` puede ser modificado en otros puntos del programa y  `const` nunca podrá modificar su valor.

## Fases de una variable / ciclo de vida

Las variables tienen 4 fases:

- **Declaración**: Es la primera vez que creamos la variable. `let demo;`
- **Inicialización**: Es la primera vez que le damos valor a una variable. `demo = 'hola';`. Las `const` hay que declararlas e iniciarlas en la misma instrucción. En los `let` podemos separar esas fases.
- **Accesso**:  Podemos acceder una vez que se ha declarado la variable en cualquier parte del programa. Accedo a su valor simplemente poniendo su nombre `demo`
- **Modificación**: Solo los  `let` podrán ser modificados. No hay límite de modificaciones. Para modificarlo simplemente haremos `demo = _nuevo-valor_;`

## Tipos de datos

En JavaScript los variables tienen un tipo de dato asociado. Existen tipos de datos `primitivos` o `genericos`.

En JS existen 7 tipos de datos primitivos:

- **string**: Representa una cadena de caracteres, es decir, un texto. Para decirle a JavaScript que quiero un string tengo que envolver el texto entre comillas *'Esto es una string'*

- **number** o **bigint**: Representa un número tanto decimal como entero. Para declarar una variable numérica simplemente le pongo el número como valor. `let n = 23.1`.

- **boolean**: Representa dos estados: verdadero o false, `true` o `false` (posibles valores de un boolean). `let b = true;`

- **undefined**: Representa una variable que no tiene definido valor ni tipo de datos. Se le puede asignar undefined a una variable de dos formas, _declarando sin inicializar_  y la otra es igualandola a undefined. `let a;` o `let a = undefined;`

- **null**: Representa la dirección 0 de memoria RAM. Es una dirección en la que no hay valores. `let a = null;`

[REF](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

### ¿Como puedo saber el tipo de datos de una variable?

Para ello podemos utilizar el operador `typeof` seguido del nombre de la variable. Esa instrucción devolverá un string con el tipo de datos.

```js
let a = 36;
typeof a; // esta instrucción devuelve `number`
```



