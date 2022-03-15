// Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.

const numero = prompt ("¿Dime un número?");
const descuento = prompt ("¿Dime un descuento?");

const precio = parseFloat(numero) * parseFloat(descuento) / 100;

const precioFinal = parseFloat(numero) - parseFloat(precio);

alert ("El precio final es " + precioFinal);