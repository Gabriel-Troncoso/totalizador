class Totalizador {

    calcularPrecioBruto(cantidad, precio) {

        if (cantidad <= 0) {
            return "Cantidad invalida";
        }

        if (precio <= 0) {
            return "Precio invalido";
        }

        return cantidad * precio;
    }

    calcularDescuento(total) {

        if (total >= 1000) {
            return total * 0.03;
        }

        return 0;
    }

}

export default Totalizador;