// Aula: JSON.parse
// JSON.parse é usado para converter um texto JSON em um objeto JavaScript.

var pessoaJSON = '{"nome": "João", "idade": 30, "profissao": "Desenvolvedor"}';

// Convertendo o texto JSON para objeto
var pessoaObj = JSON.parse(pessoaJSON);

console.log('Objeto JavaScript:', pessoaObj);
console.log('Nome:', pessoaObj.nome);

// Documentação:
// - JSON.parse(string) transforma um texto JSON em objeto.
// - Útil para trabalhar com dados recebidos de APIs.
// - Se o texto não estiver no formato correto, ocorre erro.
