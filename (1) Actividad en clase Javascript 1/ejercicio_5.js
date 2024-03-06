// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 5

// Escribe una función que calcule el máximo común divisor de dos números.

function maximoComunDivisor(x, y){
    
    while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

const x = 68;
const y = 86;

console.log("El máximo común divisor de: ", x, "y ", y, "es: ", maximoComunDivisor(x, y));