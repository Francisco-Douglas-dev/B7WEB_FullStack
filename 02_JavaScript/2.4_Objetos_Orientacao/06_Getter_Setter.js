// 06 - Classes: Getter e Setter
// Getters e setters controlam o acesso a propriedades.

class Conta {
  constructor() {
    this._saldo = 0;
  }
  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    if (valor >= 0) this._saldo = valor;
  }
}

const conta = new Conta();
conta.saldo = 100;
console.log(conta.saldo); // 100
