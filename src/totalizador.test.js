import Totalizador from "./totalizador.js";

describe("Totalizador", () => {

    it("Deberia calcular el precio bruto de 2 items de 100", () => {

        let totalizador = new Totalizador();

        expect(totalizador.calcularPrecioBruto(2, 100)).toEqual(200);

    });
    
    it("Deberia mostrar error cuando la cantidad es cero", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularPrecioBruto(0, 100))
        .toEqual("Cantidad invalida");

    });
    it("Deberia mostrar error cuando el precio es cero", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularPrecioBruto(2, 0))
        .toEqual("Precio invalido");

    });
    it("Deberia aplicar 3% de descuento cuando el precio bruto es 1000", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuento(1000))
        .toEqual(30);

    });
    it("Deberia aplicar 5% de descuento cuando el precio bruto es 3000", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuento(3000))
        .toEqual(150);

    });
    it("Deberia aplicar 7% de descuento cuando el precio bruto es 7000", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuento(7000))
        .toEqual(490);

    });
    it("Deberia aplicar 10% de descuento cuando el precio bruto es 10000", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuento(10000))
        .toEqual(1000);

    });
    it("Deberia aplicar 15% de descuento cuando el precio bruto es 30000", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuento(30000))
        .toEqual(4500);

    });
    it("Deberia aplicar 8.25% de impuesto para California", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(1000, "CA"))
        .toEqual(82.5);

    });
    it("Deberia aplicar 6.65% de impuesto para Utah", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(1000, "UT"))
        .toEqual(66.5);

    });
    it("Deberia aplicar 8% de impuesto para Nevada", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(1000, "NV"))
        .toEqual(80);

    });
    it("Deberia aplicar 6.25% de impuesto para Texas", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(1000, "TX"))
        .toEqual(62.5);

    });
    it("Deberia aplicar 4% de impuesto para Alabama", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(1000, "AL"))
        .toEqual(40);

    });

    it("Deberia usar California como estado por defecto", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuesto(1000))
        .toEqual(82.5);

    });

    it("Deberia aplicar 0% de descuento adicional para Varios por defecto", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuentoCategoria(1000))
        .toEqual(0);

    });

    it("Deberia aplicar 2% de descuento adicional para Alimentos", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuentoCategoria(1000, "Alimentos"))
        .toEqual(20);

    });

    it("Deberia aplicar 7% de impuesto adicional para Bebidas alcoholicas", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuestoCategoria(1000, "Bebidas alcoholicas"))
        .toEqual(70);

    });
    it("Deberia aplicar 1.5% de descuento adicional para Material de escritorio", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuentoCategoria(1000, "Material de escritorio"))
        .toEqual(15);

    });

    it("Deberia aplicar 3% de impuesto adicional para Muebles", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuestoCategoria(1000, "Muebles"))
        .toEqual(30);

    });
    it("Deberia aplicar 4% de impuesto adicional para Electronicos", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuestoCategoria(1000, "Electronicos"))
        .toEqual(40);

    });
    it("Deberia aplicar 1% de descuento adicional para Electronicos", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularDescuentoCategoria(1000, "Electronicos"))
        .toEqual(10);

    });
    
    it("Deberia aplicar 2% de impuesto adicional para Vestimenta", () => {

    let totalizador = new Totalizador();

    expect(totalizador.calcularImpuestoCategoria(1000, "Vestimenta"))
        .toEqual(20);

    });
});