// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 7

// Escribe una función que reciba un número, y regrese una
// lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

function factores(x) {
    
    const factores = [];

    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            factores.push(i);
        }
    }
    return factores;
}

const x = 12;
console.log("Los factores de:", x, "son:", factores(x));
