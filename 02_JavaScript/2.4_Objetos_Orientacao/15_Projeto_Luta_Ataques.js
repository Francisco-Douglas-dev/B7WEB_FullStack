// 15 - Projeto: Luta - Criar ataques
// Cria métodos de ataque especiais para personagens.

class GuerreiroEspecial extends Guerreiro {
  ataqueEspecial(alvo) {
    const dano = this.ataque * 2;
    alvo.vida -= dano;
    console.log(`${this.nome} usou ataque especial em ${alvo.nome} causando ${dano} de dano!`);
  }
}

const lancelot = new GuerreiroEspecial('Lancelot');
lancelot.ataqueEspecial(merlin);
