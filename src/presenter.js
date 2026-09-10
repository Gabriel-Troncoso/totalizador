import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const pesoInput = document.querySelector("#peso");
const tipoClienteSelect = document.querySelector("#tipo-cliente");

const form = document.querySelector("#totalizador-form");
const resultadoDiv = document.querySelector("#resultado-div");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const precio = Number(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const peso = Number(pesoInput.value);
  const tipoCliente = tipoClienteSelect.value;

  const detalle = totalizador.obtenerDetalleCompra(
    cantidad,
    precio,
    estado,
    categoria,
    peso,
    tipoCliente
  );

  resultadoDiv.innerHTML = `
    <p>Precio bruto: ${detalle.precioBruto}</p>
    <p>Descuento base: ${detalle.descuentoBase}</p>
    <p>Descuento por categoria: ${detalle.descuentoCategoria}</p>
    <p>Precio neto: ${detalle.precioNeto}</p>
    <p>Impuesto por estado: ${detalle.impuestoEstado}</p>
    <p>Impuesto por categoria: ${detalle.impuestoCategoria}</p>
    <p>Envio total: ${detalle.envioTotal}</p>
    <p>Descuento de envio: ${detalle.descuentoEnvio}</p>
    <p>Envio final: ${detalle.envioFinal}</p>
    <p>Descuento especial: ${detalle.descuentoEspecial}</p>
    <h3>Total final: ${detalle.totalFinal}</h3>
  `;
});