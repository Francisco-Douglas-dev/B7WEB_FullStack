"use strict";

// 16. Descontruindo Objetos (1/2)
// Desestruturação básica de objetos
var pessoa = {
  nome: "Ana",
  idade: 25
};
var nome = pessoa.nome,
    idade = pessoa.idade;
console.log(nome, idade);