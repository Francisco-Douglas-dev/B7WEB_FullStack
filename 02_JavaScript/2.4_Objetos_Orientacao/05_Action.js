// 05 - Classes: Action
// Métodos de ação são funções dentro da classe que realizam tarefas.

class Lampada {
  constructor() {
    this.ligada = false;
  }
  ligar() {
    this.ligada = true;
    console.log('Lâmpada ligada!');
  }
}

const lamp = new Lampada();
lamp.ligar(); // Lâmpada ligada!
