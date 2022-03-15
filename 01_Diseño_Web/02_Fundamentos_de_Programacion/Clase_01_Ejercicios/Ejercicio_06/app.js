// Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

const primerNumero = prompt ("¿Dime un número?");
const segundoNumero = prompt ("¿Dime un segundo número?");
const resultadoSuma = parseFloat(primerNumero) + parseFloat(segundoNumero);

alert ("El resultado dela suma es " + resultadoSuma);

const tercerNumero = prompt ("¿Dime un tercer número?");

const resultadoMultiplicacion = parseFloat(resultadoSuma) * parseFloat (tercerNumero);

alert("El resultado final es " + resultadoMultiplicacion);
