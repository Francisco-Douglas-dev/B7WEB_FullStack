// 07 - Classes: Herança
// Herança permite que uma classe herde propriedades e métodos de outra.

class Veiculo {
  andar() {
    console.log('Veículo andando');
  }
}

class Moto extends Veiculo {}

const moto = new Moto();
moto.andar(); // Veículo andando
