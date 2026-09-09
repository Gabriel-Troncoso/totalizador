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
    
    calcularImpuesto(total, estado="CA") {

    if (estado === "CA") {
        return Number((total * 0.0825).toFixed(2));
    }
    if (estado === "UT") {
        return Number((total * 0.0665).toFixed(2));
    }
    if (estado === "NV") {
        return Number((total * 0.08).toFixed(2));
    }
    if (estado === "TX") {
        return Number((total * 0.0625).toFixed(2));
    }
    if (estado === "AL") {
        return Number((total * 0.04).toFixed(2));
    }
    return 0;
    
    }
    calcularDescuentoCategoria(total, categoria = "Varios") {

        if (categoria === "Alimentos") {
            return Number((total * 0.02).toFixed(2));
        }

        if (categoria === "Material de escritorio") {
            return Number((total * 0.015).toFixed(2));
        }
        if (categoria === "Electronicos") {
            return Number((total * 0.01).toFixed(2));
        }

        if (categoria === "Varios") {
            return 0;
        }

        return 0;
    }
    calcularImpuestoCategoria(total, categoria = "Varios") {

    if (categoria === "Bebidas alcoholicas") {
        return Number((total * 0.07).toFixed(2));
    }
    if (categoria === "Muebles") {
        return Number((total * 0.03).toFixed(2));
    }
    if (categoria === "Electronicos") {
        return Number((total * 0.04).toFixed(2));
    }
    if (categoria === "Vestimenta") {
        return Number((total * 0.02).toFixed(2));
    }
    return 0;
    }

    calcularCostoEnvio(peso) {

    if (typeof peso !== "number") {
        return "Peso invalido";
    }
    if (peso < 0) {
        return "Peso invalido";
    }
    if (peso >= 0 && peso <= 10) {
        return 0;
    }
    if (peso >= 11 && peso <= 20) {
        return 3.5;
    }
    if (peso >= 21 && peso <= 40) {
        return 5;
    }
    if (peso >= 41 && peso <= 80) {
        return 6;
    }
    if (peso >= 81 && peso <= 100) {
        return 6.5;
    }
    if (peso >= 101 && peso <= 200) {
        return 8;
    }
    if (peso > 200) {
        return 9;
    }
    }
    
    calcularEnvioTotal(cantidad, peso) {

    let costoPorUnidad = this.calcularCostoEnvio(peso);

    return cantidad * costoPorUnidad;
    }

    calcularDescuentoEnvio(costoEnvio, tipoCliente = "Normal") {

    if (tipoCliente === "Antiguo Recurrente") {
        return Number((costoEnvio * 0.01).toFixed(2));
    }


    if (tipoCliente === "Especial") {
        return Number((costoEnvio * 0.015).toFixed(2));
    }

    if (tipoCliente === "Recurrente") {
        return Number((costoEnvio * 0.005).toFixed(2));
    }

    if (tipoCliente === "Normal") {
        return 0;
    }

    return 0;
    }

    calcularDescuentoEspecial(precioNeto, tipoCliente, categoria) {

    if (
        tipoCliente === "Recurrente" &&
        precioNeto > 3000 &&
        categoria === "Alimentos"
    ) {
        return 100;
    }
    if (
        tipoCliente === "Especial" &&
        precioNeto > 7000 &&
        categoria === "Electronicos"
    ) {
        return 200;
    }

    return 0;
    }

    calcularPrecioNeto(total, categoria = "Varios") {

    let descuentoBase = this.calcularDescuento(total);

    let descuentoCategoria =
        this.calcularDescuentoCategoria(total, categoria);

    return Number(
        (total - descuentoBase - descuentoCategoria).toFixed(2)
    );
    }

    calcularImpuestoTotal(precioNeto, estado, categoria = "Varios") {

    let impuestoEstado =
        this.calcularImpuesto(precioNeto, estado);

    let impuestoCategoria =
        this.calcularImpuestoCategoria(precioNeto, categoria);

    return Number(
        (impuestoEstado + impuestoCategoria).toFixed(2)
    );
}
    calcularTotalFinal(precioNeto, impuestoTotal, envioTotal, descuentoEspecial = 0) {

    return Number(
        (precioNeto + impuestoTotal + envioTotal - descuentoEspecial).toFixed(2)
    );
    }
}

export default Totalizador;