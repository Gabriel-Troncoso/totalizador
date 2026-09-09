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
});