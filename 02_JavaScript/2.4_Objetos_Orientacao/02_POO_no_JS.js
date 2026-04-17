// 02 - POO no Javascript
// POO permite criar classes e objetos, encapsular dados e comportamentos.
// Exemplo de classe e instância:

class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}

const cachorro = new Animal('Rex');
cachorro.falar(); // Rex faz um som.
