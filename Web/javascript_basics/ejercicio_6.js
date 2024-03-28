// Pedro Mauri Mtz - A01029143
// Actividad en clase: JavaScript- Ejercicio 6

// Crea una función que cambie una cadena de texto a 'Hacker Speak'.
// Por ejemplo, para la cadena 'Javascript es divertido',
// su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function hackerSpeak(texto) {
    
    const equivalencias = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    texto = texto.toLowerCase();

    for (let letra in equivalencias) {
        const textoNormal = new RegExp(letra, 'g');
        texto = texto.replace(textoNormal, equivalencias[letra]);
    }
    console.log("Hacker speak: ", texto)
}

const texto = 'Hola mundo, mi nombre es Pedro Mauri'
console.log("Texto original: ", texto);
hackerSpeak(texto);
