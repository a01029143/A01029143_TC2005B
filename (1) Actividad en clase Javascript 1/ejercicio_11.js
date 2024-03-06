// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 11

// Escribe una función que tome una lista de cadena de textos 
// y devuelva una nueva lista con todas las cadenas en orden alfabético.

function ordenar(lista){

    const lista_ordenada = lista.slice()

    lista_ordenada.sort();

    return lista_ordenada;

}

const lista = ['Hola', 'Mundo', 'Pedro', 'Mauri', 'Martinez'];
console.log("Lista original: ", lista);

const lista_ordenada = ordenar(lista);
console.log("Lista ordenada alfabeticamente: ", lista_ordenada);
