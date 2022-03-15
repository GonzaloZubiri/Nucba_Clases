// Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

const texto = prompt("Ingresa un texto");

const posicion = prompt("Indica una posicion");

if (posicion == "a","A" || posicion == "e", "E" || posicion == "i", "I" || posicion == "o", "O" || posicion == "u", "U") {
    alert("La letra SI es una vocal");
} else {
    alert("La letra NO es una vocal");
}

