// Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

const letra = prompt("Ingresa una letra");

const texto = prompt("Ingresa un texto");

if (texto .includes(letra)) {
    alert("Su texto contiene la letra indicada");
}else {
    alert("Su texto NO contiene la letra indicada");
}