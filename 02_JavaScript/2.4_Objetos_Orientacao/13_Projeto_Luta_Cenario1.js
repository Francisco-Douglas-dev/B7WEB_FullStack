// 13 - Projeto: Luta - Criar classes de cenário 1
// Cria uma classe para o cenário da luta.

class Cenario {
  constructor(nome) {
    this.nome = nome;
  }

  exibir() {
    console.log(`O cenário é: ${this.nome}`);
  }
}

const floresta = new Cenario('Floresta Sombria');
floresta.exibir();
