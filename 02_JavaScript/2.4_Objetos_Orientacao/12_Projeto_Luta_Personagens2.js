// 12 - Projeto: Luta - Criar classes de personagens 2
// Cria subclasses para personagens específicos, usando herança.

class Guerreiro extends Personagem {
  constructor(nome) {
    super(nome, 100, 15);
  }
}

class Mago extends Personagem {
  constructor(nome) {
    super(nome, 80, 25);
  }
}

const arthur = new Guerreiro('Arthur');
const merlin = new Mago('Merlin');
