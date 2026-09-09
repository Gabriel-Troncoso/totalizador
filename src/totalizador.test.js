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
});