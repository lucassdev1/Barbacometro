// Carne - 400 gr por persona   + de 6 horas - 650
// Cerveza - 1200 ml por Persona + 6 horas - 2000 ml
// Refresco - 1000 ml por persona + 6 horas 1500ml

let inputAdultos = document.getElementById("adultos");
let inputPequenos = document.getElementById("pequenos");
let inputDuracion = document.getElementById("duracion");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Haciendo el calculo...");

    let adultos = inputAdultos.value;
    let pequenos = inputPequenos.value;
    let duracion = inputDuracion.value;


    let qdtTotalCarne = carnePP(duracion) * adultos + (carnePP(duracion) / 2 * pequenos);
    let qdtTotalCerveza = cervezaPP(duracion) * adultos;
    let qdtTotalBebidas = bebidasPP(duracion) * adultos + (bebidasPP(duracion) / 2 * pequenos);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveza / 355)} Botella de Cerveza</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} 2L CocaCola/7up</p>`


}

function carnePP(duracion) {
    if (duracion >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervezaPP(duracion) {
    if (duracion >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracion) {
    if (duracion >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
