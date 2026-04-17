// 08 - Classes: Variável/Método estático
// Métodos e variáveis estáticas pertencem à classe, não à instância.

class Matematica {
  static PI = 3.14;
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.PI); // 3.14
console.log(Matematica.somar(2, 3)); // 5
