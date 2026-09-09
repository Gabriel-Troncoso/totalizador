import Totalizador from "./totalizador.js";

describe("Totalizador", () => {

    it("Deberia calcular el precio bruto de 2 items de 100", () => {

        let totalizador = new Totalizador();

        expect(totalizador.calcularPrecioBruto(2, 100)).toEqual(200);

    });

});