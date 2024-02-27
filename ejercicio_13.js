// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 13

// Escribe una función que tome una lista de cadenas de
// texto y devuelva la cadena más frecuente.

function moda(lista){

    const frecuencias = {};

    lista.forEach(texto => {
        frecuencias[texto] = (frecuencias[texto] || 0) + 1;
    });

    let frecuencia_max = 0;
    let texto_mas_frecuente = null;

    for (let texto in frecuencias) {
        if (frecuencias[texto] > frecuencia_max) {
            frecuencia_max = frecuencias[texto];
            texto_mas_frecuente = texto;
        }
    }
    return texto_mas_frecuente;
}

const lista = ['Hola', 'Mundo', 'Mundo', 'Pedro', 'Mauri', 'Mauri', 'Mauri', 'Martinez',];
console.log("Lista original: ", lista);

console.log("Texto de moda: ", moda(lista));