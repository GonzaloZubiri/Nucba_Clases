// Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

var primerNumero,segundoNumero,tercerNumero,t,mayor;

 primerNumero = prompt("Ingrese un numero");
 segundoNumero = prompt("Ingrese un segundo numero");
 tercerNumero = prompt("Ingrese un tercer numero");

if (primerNumero > segundoNumero) {
    t = primerNumero;
}else {
    t = segundoNumero;
}

if (t > tercerNumero) {
    mayor = t;
} else {
    mayor = tercerNumero;
}

alert ("El mayor numero es " + mayor);

//NO FUNCIONA CON CONST, SOLO VON VAR O LET

// var n1,n2,n3,t,mayor;
// 	n1 = parseInt(prompt("Número 1"));
// 	n2 = parseInt(prompt("Número 2"));
// 	n3 = parseInt(prompt("Número 3"));

// 	if (n1 > n2) {
// 		t = n1;
// 	}else{
// 		t = n2;
// 	}

// 	if (t > n3) {
// 		mayor = t;
// 	}else{
// 		mayor = n3;
// 	}

// 	document.write("El mayor es "+mayor);