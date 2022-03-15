// Solicitar al usuario la medida de la base y de la altura de un triángulo equilátero y devolver el área.

const altura = prompt ("Ingrese la altura");
const base = prompt ("Ingrese la base");
const area = (parseFloat(altura) * parseFloat(base)) / 2;
alert ("El area es " + area);