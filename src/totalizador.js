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
        if (total >= 30000) {
            return Number((total * 0.15).toFixed(2));
        }
        if(total>=10000){
            return total * 0.1;
        }
        if (total >= 7000) {
            return Number((total * 0.07).toFixed(2));
        }
        if (total >= 3000) {
            return total * 0.05;
        }
        if (total >= 1000) {
            return total * 0.03;
        }
     
        return 0;
    }
    
    calcularImpuesto(total, estado) {

    if (estado === "CA") {
        return Number((total * 0.0825).toFixed(2));
    }

    return 0;
    }

}

export default Totalizador;