// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

const primerNumero = prompt("Ingrese un numero");

const segundoNumero = prompt("Ingrese otro numero");

if (primerNumero > segundoNumero) {
    alert(primerNumero + " " + " Es mayor")
} else if (primerNumero < segundoNumero) {
    alert(segundoNumero + " " + " Es mayor")
} else {
    alert("Los numeros son iguales");
}