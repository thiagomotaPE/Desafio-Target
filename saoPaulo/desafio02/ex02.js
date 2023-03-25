const readline = require('readline-sync');

let numero = Number(readline.question("Digite um numero: "))

let n1 = 0;
let n2 = 1;
let n3 = 0;

while(numero > n3) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}

if (numero == 0 || numero == 1) {
    console.log(`O número ${numero} faz parte da sequência de Fibonacci.`);
} else if (numero == n3) {
    console.log(`O número ${numero} faz parte da sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} digitado não faz parte da sequência de Fibonacci.`);
}