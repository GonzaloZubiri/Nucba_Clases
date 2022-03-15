// Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)

const cantidadKilometros = prompt ("Ingrese cantidad de kilometros que desea recorrer");
const velocidad = prompt ("Ingrese la velocidad promedio");

const tiempo = parseFloat(velocidad) / parseFloat(cantidadKilometros);

const resultadoMinutos = parseFloat(tiempo) * 60;

alert (resultadoMinutos);
