// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 10

// Escribe una función que revise si una cadena de texto es un palíndromo o no.

function palindromo(texto){
    
    texto = texto.toLowerCase().replace(/ /g, '');

    const textoInvertido = texto.split('').reverse().join('');

    if (texto === textoInvertido){
        console.log("La frase es palindroma!")
    }
    else {
        console.log("La frase NO es palindroma")
    }
}

const texto = "A luna ese anula";
console.log("Frase en cuestion: ", texto);
palindromo(texto);
