// Exercício de funções #4
// Crie uma função que receba dois números e retorne o maior deles

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log('Maior:', maiorNumero(10, 5));