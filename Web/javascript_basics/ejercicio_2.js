// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 2

// Escribe una función que implemente el algoritmo 
// 'bubble-sort' para ordenar una lista de números.

const lista = [9, 7, 3, 5, 6, 1];

function bubbleSort(lista) {
    
    const largo = lista.length;

    for (let i = 0; i < largo - 1; i++) {
        for (let j = 0; j < largo - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                const temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

console.log("Lista original: ", lista);
console.log("Lista ordenada: ", bubbleSort(lista));