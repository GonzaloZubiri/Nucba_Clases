// Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 


const nota = prompt("Ingresa una nota");

if (nota > 0 && nota <= 3) {
    alert("Aplazado");
} else if (nota >= 4 && nota <= 5) {
    alert("Reprobado");
} else {
    alert("Aprobado");
}