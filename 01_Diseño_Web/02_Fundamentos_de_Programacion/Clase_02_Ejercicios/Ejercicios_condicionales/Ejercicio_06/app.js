// Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

const monto = prompt("Ingrese un monto");

if (monto >= "2000") {
    alert(monto - (monto * .1));
} else {
    alert(monto);
}