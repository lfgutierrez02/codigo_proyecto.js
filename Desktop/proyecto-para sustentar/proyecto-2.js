function convertirPrecio(precio, descuento) {
    const ahorro = precio * descuento / 100;
    const precioFinal = precio - ahorro;

    return precioFinal;
}

let precio = 80000;
let descuento = 15;

let resultado = convertirPrecio(precio, descuento);

console.log("Precio original: $" + precio);
console.log("Descuento: " + descuento + "%");
console.log("Precio final: $" + resultado);