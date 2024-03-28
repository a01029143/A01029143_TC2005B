// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 3

// Escribe dos funciones: la primera que invierta un arreglo 
// de números y regrese un nuevo arreglo con el resultado;
// la segunda que modifique el mismo arreglo que se pasa como argumento.
// No se permite usar la función integrada 'reverse'.

function invertir1(arreglo) {
    
    const resultado = [];

    for (let i = arreglo.length - 1; i >= 0; i--) {
        resultado.push(arreglo[i]);
    }
    return resultado;

}

function invertir2(arreglo) {

    let inicio = 0;
    let fin = arreglo.length - 1;

    while (inicio < fin) {
    
        const temp = arreglo[inicio];
        arreglo[inicio] = arreglo[fin];
        arreglo[fin] = temp;
        inicio++;
        fin--;

    }
}

const arreglo = [1, 2, 3, 4, 5];
console.log("Arreglo original: ", arreglo);

const arregloInvertido1 = invertir1(arreglo.slice());
console.log("Arreglo invertido (nuevo): ", arregloInvertido1);

invertir2(arreglo);
console.log("Arreglo invertido (modificado): ", arreglo);