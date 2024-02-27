// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 4

// Escribe una función que reciba una cadena de texto y regrese 
// una nueva con la primer letra de cada palabra en mayúscula.

function mayusculas(texto) {

    const palabras = texto.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    texto2 = palabras.join(" ");
    return texto2;
}

const texto = "hola mundo";

console.log("Frase original: ", texto);
texto2 = mayusculas(texto);
console.log("Frase con mayusculas: ", texto2);