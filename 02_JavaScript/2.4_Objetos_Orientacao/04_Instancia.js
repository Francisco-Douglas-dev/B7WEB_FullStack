// 04 - Classes: Instância
// Instância é um objeto criado a partir de uma classe.

class Produto {
  constructor(nome) {
    this.nome = nome;
  }
}

const produto1 = new Produto('Celular');
const produto2 = new Produto('Notebook');
console.log(produto1.nome); // Celular
console.log(produto2.nome); // Notebook
