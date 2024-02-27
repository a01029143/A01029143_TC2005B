// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 1

// Escribe una función que encuentre el primer carácter de un cadena 
// de texto que no se repite. Prueba tu función con: 'abacddbec'

const texto = 'abacddec';

function primer_caracter(texto) {

    const frecuencia = {};

    let encontrado = 0;

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (frecuencia[caracter] === 1) {
            console.log("El primer carácter no repetido es: ", caracter);
            encontrado =+ 1;
            break;
        }
    }

    if (encontrado != 1){
        console.log("No se encontró algún caracter no repetido...")
    }
}

primer_caracter(texto);