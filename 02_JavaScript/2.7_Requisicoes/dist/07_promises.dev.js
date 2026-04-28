"use strict";

// Aula: Promises
// Promise é um objeto que representa uma operação assíncrona, podendo ter três estados: pendente, resolvida ou rejeitada.
// Exemplo de Promise
function buscarDados() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var sucesso = true;

      if (sucesso) {
        resolve('Dados recebidos com sucesso!');
      } else {
        reject('Erro ao buscar dados.');
      }
    }, 1000);
  });
} // Usando a Promise


buscarDados().then(function (resultado) {
  console.log('Sucesso:', resultado);
})["catch"](function (erro) {
  console.log('Erro:', erro);
}); // Documentação:
// - Promise facilita o controle de operações assíncronas.
// - then() trata o sucesso, catch() trata erros.
// - Muito usado em requisições, leitura de arquivos, etc.