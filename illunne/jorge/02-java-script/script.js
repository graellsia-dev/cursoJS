

// console.log('Hola mundo');

const saludo = "Hola clase, soy Jorge";

// console.log(saludo);

const saludo2 = "Hola clase";

// console.log(saludo2 + " soy Jorge");

let saludo3 = "hola clase";

// console.log(saludo3);

saludo3 = "Hola clase soy Jorge";

// console.log(saludo3);

// Ejercicios: crear tres variables, una modificable.
// hacer una suma, una resta, una multiplicación de las 3 variables, 
// luego actualizar la tercera y volver a hacer la multiplicación

const a = 10;
const b = 15;
let c = 12;

// console.log( "Suma " , a + b + c );
// console.log( "Resta " , a - b - c);
// console.log( "Multiplicación " , a * b * c);

c = -5; // Esto es una actualización de la variable.

// console.log( "Suma " , a + b + c );
// console.log( "Resta " , a - b - c);
// console.log( "Multiplicación " , a * b * c);


// console.warn('Esto es un error');
// console.error('Esto es un error grave');

// const resAlert = alert('Esta pagina es para mayores');

// console.log(resAlert);

const resPrompt = prompt('¿Qué temperatura hace?');

// console.log( parseInt( resPrompt ) + 273 );

console.log(typeof resPrompt);
console.log(typeof parseInt( resPrompt ));
