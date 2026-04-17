// 16 - Projeto: Luta - Fazer o log
// Cria um sistema de log para registrar os eventos da luta.

class Log {
  constructor() {
    this.eventos = [];
  }

  registrar(evento) {
    this.eventos.push(evento);
    document.getElementById('log').innerHTML += `<p>${evento}</p>`;
  }
}

const log = new Log();
log.registrar('A luta começou!');
