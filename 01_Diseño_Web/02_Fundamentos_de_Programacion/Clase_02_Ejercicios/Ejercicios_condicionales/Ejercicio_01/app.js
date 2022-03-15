// Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 

//Ejercicio 5 variables --> Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

const medida = prompt ("¿Dime una medida en metros?");

// const pies = parseFloat(medida)  * 3.28;
// const centimetros = parseFloat(medida)  * 100;
// const pulgadas = parseFloat(medida)  * 39.37;
// alert ("Equivale a " + pies + " pies");
// alert ("Equivale a " + centimetros + " centimetros");
// alert ("Equivale a " + pulgadas + " pulgadas");

const valoresAceptados = /^[0-9]+$/;

if (medida.match(valoresAceptados)) {
    const pies = parseFloat(medida)  * 3.28;
    const centimetros = parseFloat(medida)  * 100;
    const pulgadas = parseFloat(medida)  * 39.37;
    alert ("Equivale a " + pies + " pies");
    alert ("Equivale a " + centimetros + " centimetros");
    alert ("Equivale a " + pulgadas + " pulgadas");
} else {
    alert("No ingreso un numero");
}