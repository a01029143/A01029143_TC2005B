// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 9

// Escribe una función que reciba como parámetro una lista de 
// cadenas de texto, y regrese la longitud de la cadena más corta.

function longitudStringMasCorto(lista) {

    let longitudMinima = lista[0].length;

    for (let i = 1; i < lista.length; i++) {
        const longitudActual = lista[i].length;

        if (longitudActual < longitudMinima) {
            longitudMinima = longitudActual;
        }
    }
    return longitudMinima;
}

const lista = ['Hola', 'Mundo', 'Pedro', 'Mauri', 'Martinez'];
console.log("Lista original: ", lista);

longitud_mas_corta = longitudStringMasCorto(lista)
console.log("Longitud del string mas corto de la lista: ", longitud_mas_corta);
