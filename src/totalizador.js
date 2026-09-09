class Totalizador {

    calcularPrecioBruto(cantidad, precio) {
        if (cantidad <= 0) {
        return "Cantidad invalida";
    }
        return cantidad * precio;
    }

}

export default Totalizador;