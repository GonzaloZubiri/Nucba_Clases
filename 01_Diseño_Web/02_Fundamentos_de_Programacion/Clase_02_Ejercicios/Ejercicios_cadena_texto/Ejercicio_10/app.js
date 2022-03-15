// Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.

const nombre = prompt ("Ingresa tu nombre");

console.log(nombre[0].toUpperCase() + nombre.slice(1));