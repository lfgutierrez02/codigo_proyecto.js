function convertirPrecio(precio, descuento) {
    const ahorro = precio * descuento / 100;
    const precioFinal = precio - ahorro;

    return precioFinal;
}

let opcion = Number(prompt(
    "YE ESTUDIO DE UÑAS\n" +
    "1. Calcular descuento\n" +
    "2. Consultar precios\n" +
    "3. Salir\n\n" +
    "Selecciona una opción:"
));

switch (opcion) {
    case 1: {
        let precio = Number(prompt("Ingresa el precio del servicio:"));
        let descuento = Number(prompt("Ingresa el descuento (%):"));

        if (precio > 0 && descuento >= 0 && descuento <= 100) {
            let resultado = convertirPrecio(precio, descuento);

            console.log("Precio original: $" + precio);
            console.log("Descuento: " + descuento + "%");
            console.log("Precio final: $" + resultado);
            alert("El precio final es: $" + resultado);
        } else {
            alert("Ingresa un precio válido y un descuento entre 0 y 100.");
        }

        break;
    }

    case 2:
        console.log("PRECIOS YE ESTUDIO DE UÑAS");
        console.log("Manicure: $30.000");
        console.log("Uñas acrílicas: $80.000");
        console.log("Diseño de cejas: $25.000");
        console.log("Extensiones de pestañas: $60.000");

        alert("Consulta los precios en la consola.");
        break;

    case 3:
        alert("Saliendo del programa. ¡Hasta pronto!");
        break;

    default:
        alert("Opción no válida. Intenta nuevamente.");
}