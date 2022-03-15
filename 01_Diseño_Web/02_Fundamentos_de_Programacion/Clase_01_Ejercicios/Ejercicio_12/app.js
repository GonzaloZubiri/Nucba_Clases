// Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por alert su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

const nombre = prompt ("¿Dime tu nombre?");
const temperatura = prompt ("¿Dime una temperatura?");

const farenheit = parseFloat (temperatura) * 33.8;

alert (nombre + " su temperatura es " + farenheit + " grados Farenheit");
