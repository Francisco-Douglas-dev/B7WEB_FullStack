// Aula: Fetch com POST
// fetch pode ser usado para enviar dados para um servidor usando o método POST.

// Exemplo: enviando dados de um novo post
var novoPost = {
    title: 'Meu novo post',
    body: 'Conteúdo do post',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoPost)
})
    .then(function(response) {
        return response.json();
    })
    .then(function(postCriado) {
        console.log('Post criado:', postCriado);
    })
    .catch(function(erro) {
        console.log('Erro ao criar post:', erro);
    });

// Documentação:
// - method: 'POST' define o tipo de requisição.
// - headers define o tipo de conteúdo enviado.
// - body envia os dados em formato JSON.
