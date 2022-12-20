# Sentencias Condicionales

Nos permiten ejecutar un bloque de código u otro en función de una condicion (expresion booleana)

## If-Else

Me permite dividir entre dos caminos el flujo.

### Sintaxis

```js
// sentencia solo if, sin else
if (_expresion-booleana_){
}
// sentencia if-else
if (_expresion-booleana_) {
    // Código que queramos que se ejecute cuando la expresion booleana sea true
}else {
    // código que queramos que se ejecute cuando la expresion booleana sea false
}
// El else puede ser opcional, es decir, puedo querer ejecutar un bloque de código solo cuando algo se cumpla y no hacer nada cuando algo no se cumpla
// Existe la posibilidad de concatenar bloques de if-else
if (_expresion-booleana_) {
    // Código que queramos que se ejecute cuando la expresion booleana sea true
}else if(_expresion-booleana-2_) {
    // código que queramos que se ejecute cuando la expresion booleana sea false, pero la _expresion-booleana-2_ sea true
}else{
    // código que se ejecutaria cuando la _expresion-booleana_ y _expresion-booleana-2_ sean false
}
```

```js
// queremos escribir por pantalla Par si un numero es par e Impar si un numero es impar
let a = 4;
let isOdd = a % 2 === 1;
if (isOdd) {
  document.write("IMPAR");
} else {
  document.write("PAR"); 
}
```

```js
/*
 tenemos una variable que nos indica el porcentaje de contaminacion del aire. Quiero pintar por pantalla lo siguiente:
    - Si la contaminacion del aire es superior al 75%, debo pintar un mensaje de color rojo que diga: Contaminacion Elevada
    - Si la contaminacion está entre 25% y 75%, pondré un mensaje de color amarillo que diga: Contaminacion moderada
    - Si la contaminacion es menor que el 25%, pòndré un mensaje en verde que diga: Estas Respirando Aire purisimo.
*/
let pollution = 56; // guarde la contaminacion
if(pollution > 75){ // solo es true cuando la pulicion es mayor estricto de 75
    document.write('<p style="color:red;">Contaminacion Elevada</p>')
}else if(pollution >=25 && pollution <=75){ // solo es true cuando la polución está entre 25 y 75
    document.write('<p style="color:yellow;">Contaminacion Moderada</p>')
}else{ // si no se cumple ninguno de los otros casos es que la polucion es menor que 25
   document.write('<p style="color:green;">Estas Respirando Aire purisimo</p>') 
}
```

## Switch

Los switch son unas instrucciones que me permiten ejecutar bloques de código en funcion de valores que tenga una variable.

### Sintaxis Switch

```js
switch (_nombre_var_){
    case _valor_1_ : { /* Bloque de código cuando _nombre_var_ valga _valor_1_*/ break;}
    case _valor_2_ : { /* Bloque de código cuando _nombre_var_ valga _valor_2_*/ break;}
    case _valor_3_ : { /* Bloque de código cuando _nombre_var_ valga _valor_3_*/ break;}
    case _valor_N_ : { /* Bloque de código cuando _nombre_var_ valga _valor_N_*/ break;}
    default: { /* Código si noo se cumple ninguno de los casos anteriores */}
}
```

```js
/* 
Solitamos al usuario su preferencia de hacer el bootcamp online o presencial.
    En caso de que el usuario elija online, le mostraremos el enlace de zoom.
    En caso de que el usuario elija presencial, le mostraremos la dirección del espacio.
    Si el usuario no introduce ninguno de estos valores, le indicamos que está expulsado.
*/
let preference = prompt('Que quieres online o presencial');
switch(preference){
    case 'online': {
        document.write('<a href="https://zoom.us/j/96545416150">Enlace a Zoom</a>'); break;
    }
    case 'presencial': {
        document.write('<p>Tienes que ir aquí, mas fácil imposible cenutrio</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.4705965088206!2d-3.688382984604624!3d40.398424479367186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263c21b81f9d%3A0xfbecf36f5701bff1!2sC.%20de%20Juan%20de%20Mariana%2C%2015%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1642672784723!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
        break;
    }
    default: {
        document.write('<p>Recoge tus teclados y vete</p>'); 
    }
}
// version de if-else
let preference = prompt('Que quieres online o presencial');
if (preference === 'online'){
    document.write('<a href="https://zoom.us/j/96545416150">Enlace a Zoom</a>'); 
}else if(preference === 'presencial'){
    document.write('<p>Tienes que ir aquí, mas fácil imposible cenutrio</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.4705965088206!2d-3.688382984604624!3d40.398424479367186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263c21b81f9d%3A0xfbecf36f5701bff1!2sC.%20de%20Juan%20de%20Mariana%2C%2015%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1642672784723!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
}else{
    document.write('<p>Recoge tus teclados y vete</p>'); 
}
```

## Operador Ternario

Sirve para asignarle el valor a una variable en función de una condición.

## Sintaxis ternario

```js
// imaginemos que tenemos la siguiente situacion
let a;
if(_condicion_){
    a= _valor_true_;
}else{
    a = _valor_false_;
}
// pasamos a ternario
let a = _condicion_ ? _valor_true_ : _valor_false_;
```