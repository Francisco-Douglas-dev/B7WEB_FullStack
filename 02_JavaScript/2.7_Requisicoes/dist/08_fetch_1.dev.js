"use strict";

// Aula: Fetch 1
// fetch é uma função moderna para fazer requisições HTTP de forma simples e assíncrona.
// Exemplo de requisição GET usando fetch
fetch('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
  return response.json(); // Converte a resposta em JSON
}).then(function (dados) {
  console.log('Dados recebidos:', dados);
})["catch"](function (erro) {
  console.log('Erro na requisição:', erro);
}); // Documentação:
// - fetch retorna uma Promise.
// - response.json() converte o corpo da resposta em objeto.
// - then() trata o sucesso, catch() trata erros.