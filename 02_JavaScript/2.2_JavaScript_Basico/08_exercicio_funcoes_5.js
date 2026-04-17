// Exercício de funções #5
// Crie uma função que receba um número e diga se ele é par ou ímpar

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

console.log(parOuImpar(7));
console.log(parOuImpar(12));