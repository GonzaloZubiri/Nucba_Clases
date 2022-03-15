// Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.


//el resultado de la division
// const numero = prompt ("¿Dime un numero?");
// const numeroUsuario = numero;
// const suma = parseFloat(numero) + 5;
// const multiplicacion = parseFloat(suma) * 10;
// const resto = parseFloat(multiplicacion) / 3;
// alert("El resultado es " + resto.toFixed(0));


//El resultado del resto
let dato = prompt("Ingrese un numero");
alert(dato);
let datoSuma = parseFloat(dato) + 5;
alert(datoSuma);
let datoMultiplicacion = parseFloat(datoSuma) * 10;
alert(datoMultiplicacion);
let datoDivision = parseFloat(datoMultiplicacion) / 3;
alert(datoDivision);
alert("El resto es "  + datoMultiplicacion %3);