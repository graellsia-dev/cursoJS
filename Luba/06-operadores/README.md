# Expresiones y Operadores

Son símbolos/instrucciones que nos permiter realizar operaciones con los datos o con variables.

Hay muchos tipos de operadores. Nosotros vamos a ver los siguientes:

- *Operadores aritméticos*: Se utilizan para hacer operaciones matemáticas, es decir, con numbers. Devuelven un number

- *Operadores lógicos*: Sirven para operar expresiones o valores booleanas, aplicando el álgebra de boole. Las principales operaciones son AND, OR y NOT. Estos operadores devuelve un boolean

- *Operadores de strings*: Sirve para concatenar cadenas de caracteres, es decir, juntar dos cadenas de caracteres. Devuelve un string

- *Operadores Comparacion*: Sirven para saber si un dato es mayor, menor o igual que otro dato. Estos operadores devuelven un boolean

- *Operadores de asignación*: Sirven para realizar una operacion y una asignación a la vez a una variable.

```js
// Operadores aritméticos
3+3; // suma -> devolerá 6
3-3; // resta -> devolverá 0
3*3; // multiplicación -> devolverá 9
3/3; // division -> devolverá 1
3%3; // módulo -> devuelve el resto de la division, en este caso 0
3**3; // potencia -> devuelve la potencia de dos numeros, en este caso devuelve 27
// Operadores lógicos
true && true; // and -> devolvera true
true || false; // or -> devolverá true
!true; // not -> devolverá false
// Operadores strings
'hola'+'adios'// concatenación. El resultado es 'holaadios'
// Operadores comparación
3 === 3; // Igualdad. devuelve true si ambos lados de la comparación son iguales. En este caso devuelve true
'3' === 3; // falses, porque hay validación de tipo
3 !== 3; // . Devuelve true si un lado es distinto de otro lado. En este caso es false
3 > 3; // Devuelve true si el lado izq es mayor estricto que el derecho. En este caso es false
3 >= 3; // Devuelve true si el lado izq es mayor o igual que el derecho. En este caso es true
3 < 3; // Devuelve true si el lado izq es menor estricto que el derecho. En este caso es false
3<=3; // Devuelve true si el lado izq es menor o igual que el derecho. En este caso es true
// Operadores de asignacion
// numbers
let a = 1;
a += 2; => a = a + 2// sumamos lo que vale a (1) y 2, guardando el resultado en a. a === 3;
a -= 1; // restamos lo que vale a(3) y 1, guardando el resultado en a. a === 2;
a *= 2; // multiplicamos lo que vale a(2) por 2, guardando el resultado en a. a === 4;
a /= 1; // divimos lo que vale a(4) entre 1, guardando el resultado en a. a === 4;
a %= 2; // divimos lo que vale a(4) entre 2 y nos quedamos con el resto, guardando el resultado en a. a === 0;
a **= 2; // exponenciamos lo que vale a(0) elevado a 2 , guardando el resultado en a.  a===0
a++; // Es equivalente a `a+=1`, es decir suma uno a `a` y actualiza la variable
a--; // Es equivalente a `a-=1`, es decir resta uno a `a` y actualiza la variable
//strings
let s = 'h';
s += 'o'; // se concatenan los strings. s === 'ho';
s += 45; // el number se cambia a string y se concatena. s === 'ho45'
```

## Ejemplo de operaciones lógicas

![Tabla AND](https://aristoteles2pc.files.wordpress.com/2011/03/tabla-de-verdad.png)

![Tabla OR](https://aristoteles2pc.files.wordpress.com/2011/03/or1.png?w=228&h=300)

![Tabla NOT](https://aristoteles2pc.files.wordpress.com/2011/03/not1.png?w=700)

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)