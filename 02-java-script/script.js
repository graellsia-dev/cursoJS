const resPrompt = prompt("¿Qué temperatura hace (en ºC)?");

let temperaturaIntroducida = parseInt(resPrompt);

console.log("Temperatura introducida:", temperaturaIntroducida + "ºC");
console.log("Temperatura en Kelvin:", temperaturaIntroducida + 273 + "K");
console.log("Temperatura en Fahrenheit:", 32 + ((temperaturaIntroducida * 9)/5) + "F");

const tempCelsius = temperaturaIntroducida
const tempKelvin = temperaturaIntroducida + 273
const tempFahr = 32 + ( ( temperaturaIntroducida * 9 )/5 )

document.getElementById("contenedor").innerHTML = "Temperatura introducida: " + tempCelsius + "ºC" +
                                                    "\nTemperatura en Kelvin: " + tempKelvin + "K" +
                                                    "\nTemperatura en Fahrenheit: " + tempFahr + "F"

document.getElementById("tempCelsius").innerHTML = "Temperatura introducida: " + tempCelsius + "ºC" 
