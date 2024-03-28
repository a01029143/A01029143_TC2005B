// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 14

// Escribe una función que tome un número y devuelva
// verdadero si es una potencia de dos, falso de lo contrario.

function potenciaDe2(x) {
    return x > 0 && (x & (x - 1)) === 0;
}

const x = 16;
console.log("Numero en cuestion: ", x);

console.log("¿Es una potencia de 2?", potenciaDe2(x));
