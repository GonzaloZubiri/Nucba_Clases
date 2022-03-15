// Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

const sabores = prompt("Ingresar sabores de helado");

const cobertura = prompt("¿Queres agregarle cobertura de chocolate?");

if (cobertura .includes("si")) {
    alert("Su helado sabor " + sabores + " con cobertura de chocolate cuesta $180");
} else {
    alert("Su helado sabor " + sabores + " cuesta $150");
}