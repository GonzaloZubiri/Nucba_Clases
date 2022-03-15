// Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

const nombre = prompt("¿Dime tu nombre?");
const edad = prompt("¿Cuantos años cumpliste en 2021?");
const anio = parseInt("2021") - edad;

alert ("Hola " + nombre + " usted nacio en el año " + anio);