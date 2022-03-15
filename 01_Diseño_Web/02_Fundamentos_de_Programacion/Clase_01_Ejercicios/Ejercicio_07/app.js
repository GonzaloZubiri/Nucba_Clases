// Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.

const minutos = prompt ("¿Dime un número de minutos?");

const resultadoSegundos = parseFloat(minutos) * 60;

alert("Equivale a " + resultadoSegundos + " segundos");