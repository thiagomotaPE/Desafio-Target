const readline = require('readline-sync');

let palavra = readline.question("Digite uma palavra: ")
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

console.log(palavra);
console.log(palavraInvertida);