

//console.log("Hola mundo");

const saludo  = "hola clase soy hugo";

//console.log(saludo);

const saludo2 = "hola clase";

//console.log(saludo2 + " hola soy hugo");

let saludo3 = "hola clase";

//console.log(saludo3);

//saludo3 = " Hola clase soy hugo";

//console.log(saludo3);

// ejercicios: crear 3 variables una modificable haces una suma, una resta, una ultiplicacion de las 3, luego actualizar la tercera y hacer la actualizacion


const a = 5;
const b = 4;
let c = 7;

//console.log("suma", a + b + c);
//console.log( "resta", a - b - c );
//console.log( "multiplicacion", a * b * c);

c = 8 ;

//console.log( " suma c cambiado el valor", a + b + c);





//console.warn("esto es un error")
//console.error("esto es eun error grave")

// const resAlert = alert ("esta pagina es para mayores")

// console.log(resAlert)

const resPrompt = prompt ("que temperatura hace?")

console.log(" temperatura que hace ºC", resPrompt)
console.log(" temperatura ºk",parseInt(resPrompt )+ 273)
console.log("temperatura º f",32 + parseInt(resPrompt)*(9/5) )

console.log(typeof resPrompt)
console.log(typeof parseInt(resPrompt))