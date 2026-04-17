// 14 - Projeto: Luta - Criar classes de cenário 2
// Adiciona propriedades e métodos ao cenário, como efeitos especiais.

class CenarioComEfeito extends Cenario {
  constructor(nome, efeito) {
    super(nome);
    this.efeito = efeito;
  }

  ativarEfeito() {
    console.log(`Efeito ativado: ${this.efeito}`);
  }
}

const castelo = new CenarioComEfeito('Castelo Antigo', 'Nevoeiro');
castelo.exibir();
castelo.ativarEfeito();
