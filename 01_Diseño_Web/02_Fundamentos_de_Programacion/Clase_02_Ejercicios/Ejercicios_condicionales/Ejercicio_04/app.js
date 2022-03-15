// Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.


// Ejercicio 1 --> Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

const primerNumero = prompt ("¿Introduci un número?");
const segundoNumero = prompt ("¿Introduci otro número?");
const resultadoSuma = parseInt(primerNumero) + parseInt(segundoNumero);

console.log("La suma es: " + resultadoSuma);

if (resultadoSuma %2 == 0) {
    alert("Su numero es par");
} else {
    alert("Su numero es impar");
}