// 11 - Projeto: Luta - Criar classes de personagens 1
// Cria a classe base para personagens, com propriedades e métodos básicos.

class Personagem {
  constructor(nome, vida, ataque) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(alvo) {
    alvo.vida -= this.ataque;
    console.log(`${this.nome} atacou ${alvo.nome} causando ${this.ataque} de dano.`);
  }
}
