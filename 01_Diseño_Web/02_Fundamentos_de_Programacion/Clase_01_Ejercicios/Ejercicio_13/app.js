// Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.

const nombre = prompt ("¿Dime tu nombre?");
const temperatura = prompt ("¿Dime una temperatura?");

const celsius = parseFloat (temperatura -32) * 0.55556;


alert (nombre + " su temperatura es " + celsius.toFixed(2) + " grados celsius");
