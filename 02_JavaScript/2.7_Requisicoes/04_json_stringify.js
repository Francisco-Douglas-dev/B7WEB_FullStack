// Aula: JSON.stringify
// JSON.stringify é usado para converter um objeto JavaScript em texto JSON.

var pessoaObj = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};

// Convertendo o objeto para texto JSON
var pessoaJSON = JSON.stringify(pessoaObj);

console.log('Texto JSON:', pessoaJSON);

// Documentação:
// - JSON.stringify(objeto) transforma um objeto em texto JSON.
// - Útil para enviar dados para APIs ou salvar localmente.
// - O texto gerado pode ser lido por outros sistemas.
