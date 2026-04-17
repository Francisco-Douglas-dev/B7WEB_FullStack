// Aula: Função com retorno condicional
// Podemos retornar valores diferentes dependendo de condições

function verificaMaioridade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

console.log(verificaMaioridade(20));
console.log(verificaMaioridade(15));