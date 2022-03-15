// Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por alert.

const primerNota = prompt ("¿Dime tu primer nota?");
const segundaNota = prompt ("¿Dime tu segunda nota?");
const tercerNota = prompt ("¿Dime tu tercer nota?");

const resultadoSuma = parseFloat(primerNota) + parseFloat (segundaNota) + parseFloat (tercerNota)

const notaFinal = parseFloat(resultadoSuma) / 3;
alert ("Tu promedio es " + notaFinal);