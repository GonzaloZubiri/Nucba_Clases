// Estas son las dos funciones básicas de JsvaScript
// alert("Hola 1717!");
// prompt("¿Que día es hoy?");

// Vamos a ver variables (hay 3 formas de declarar una variable)
// La version Odl School
var estoEsUnSaludo = "Hola!";
// El scope es global, esto significa que declaro la variable y la puedo llamar desde cualquier parte del codigo. VAR te permite modificar su valor y actualmente no se recomienda su uso.

// Desde ES6+
let estoEsOtroSaludo = "Bajale la espuma al chocolate";
// Let tiene scope local, es decir solo existe esa variable dentro del espacio que fue declarada y su valor puede ser modificado

const estoEsElSaludoFinal = "Chau!";
// Tiene la capacidad de trabajar con scope global y local, sin embargo no pueden ser modificadas.

//NO TODOS LO DATOS SON IGUALES, HAY DIFERENTES TIPOS DE DATOS
//EXISTEN:
// -> Cadenas de Texto o String: ej "Esto es la intro a JS" y van entre comillas
// -> Tipos de datos numericos enteros, o Integers, que son todos los reales positivos y negativos NO fraccionables, por ejemplo, 1, 2, 3 ,4 etc.
// -> Tipos de datos numericos NO enteros, es decir con coma o que representan una fracción, tambien conocidos como flotantes, o en el caso de datos como "floats" o "double"
// -> Tipos de dato booleano, el cual representa y solo puede expresarse en 0 y 1, o verdadero y falso (true or false)
// -> en JavaScript por defecto todas las variables declaradas, son cadenas de texto o string.


// Vamos a saludar
// Declaro una constante para guardar el nombre del usuario.
const nombre = prompt ("¿Cual es tu nombre?");
// Uso un alert para saludar concatenando con la variable nombre.
alert("Hola " + nombre);

//Vamos a crear una calculadora
const primerNumero = prompt("Introduci un numero");
const segundoNumero = prompt("Introduci otro numero");
const resultadoSuma = parseInt(primerNumero)+parseInt(segundoNumero);
alert("La suma es: " + resultadoSuma);
//se puede usar parseFloat() para sumar dos numero con coma, ej: 2.5 + 2.6

//NaN = Not a Namber
//parseInt() sirve para convertir un string para convertir en un numero entero un numero entero.
// parseFloat() toma un numero sea entero o decimal, en string y lo convierte a float o double.