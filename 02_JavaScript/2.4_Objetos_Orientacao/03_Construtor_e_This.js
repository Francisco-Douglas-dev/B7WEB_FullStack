// 03 - Classes: Construtor e This
// O construtor inicializa o objeto. O 'this' refere-se à instância criada.

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}s

const joao = new Pessoa('João', 30);
console.log(joao.nome); // João
