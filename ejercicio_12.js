// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 12

// Escribe una función que tome una lista de 
// números y devuelva la mediana y la moda.

function calcularMediana(lista) {

    const lista_ordenada = lista.slice().sort((x,y) => x - y);
    const largo = lista_ordenada.length;

    let mediana;

    if (largo % 2 === 0) {
        mediana = (lista_ordenada[largo / 2 - 1] + lista_ordenada[largo / 2]) / 2;
    }
    else {
        mediana = lista_ordenada[Math.floor(largo / 2)];
    }
    return mediana;
}

function calcularModa() {

    const conteo = {};

    lista.forEach(x => {
        if (conteo[x]) {
            conteo[x]++;
        }
        else {
            conteo[x] = 1;
        }
    });

    let moda;
    let frecuanciaMax = 0;

    for (const x in conteo) {
        if (conteo[x] > frecuanciaMax) {
            moda = Number(x);
            frecuanciaMax = conteo[x];
        }
    }
    return moda;
}

const lista = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];
console.log("Lista original: ", lista);

const mediana = calcularMediana(lista);
console.log("Mediana: ", mediana);

const moda = calcularModa(lista);
console.log("Moda: ", moda);
