// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 8

// Escribe una función que quite los elementos duplicados 
// de un arreglo y regrese una lista con los elementos que quedan.
// Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function quitaDuplicados(arreglo) {

    const elementosUnicos = {};
    const resultado = [];

    for (let i = 0; i < arreglo.length; i++) {
        
        const elemento = arreglo[i];

        if (!elementosUnicos[elemento]) {
            resultado.push(elemento);
            elementosUnicos[elemento] = true;
        }
    }
    return resultado;
}

const arreglo = [1, 0, 1, 1, 0, 0];
console.log("Arreglo original: ", arreglo);

const arreglo2 = quitaDuplicados(arreglo);
console.log("Arreglo nuevo: ", arreglo2);