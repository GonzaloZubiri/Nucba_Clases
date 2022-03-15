// Mostrar al usuario su balance de cuenta (inventar un número de cuenta). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

alert("El balance de su cuenta es de 50000");

const retiro = prompt ("¿Cuantro dinero desea retirar?");

const resultadoRetiro = ("50000 " - parseInt(retiro));

alert ("Su balance de cuenta es " + resultadoRetiro);
