class Totalizador {

    calcularPrecioBruto(cantidad, precio) {
        if (precio <= 0) {
        return "Precio invalido";
    }
        if (cantidad <= 0) {
        return "Cantidad invalida";
    }
        return cantidad * precio;
    }

}

export default Totalizador;