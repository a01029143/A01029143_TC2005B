// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 15

// Escribe una función que tome una lista de números y devuelva 
// una nueva lista con todos los números en orden descendente.

function ordenarDescendente(lista) {

    const lista_ordenada_descendente = lista.slice().sort((x, y) => y - x);

    return lista_ordenada_descendente;
}


const lista = [5, 2, 9, 1, 7];
console.log("Lista en cuestion: ", lista);

const lista_ordenada_descendente = ordenarDescendente(lista);
console.log("Lista ordenada descendentemente: ", lista_ordenada_descendente);