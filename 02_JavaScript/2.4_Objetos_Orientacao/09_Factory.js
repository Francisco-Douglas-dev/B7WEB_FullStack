// 09 - Classes: Factory
// Factory é um padrão para criar objetos de forma flexível.

function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    apresentar() {
      console.log(`Olá, sou ${nome} e tenho ${idade} anos.`);
    }
  };
}

const pessoa = criarPessoa('Maria', 25);
pessoa.apresentar(); // Olá, sou Maria e tenho 25 anos.
