// Aula: Fetch 2
// fetch pode ser usado para buscar listas de dados e tratar respostas.

// Exemplo: buscar lista de posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        console.log('Lista de posts:', posts);
        // Mostra apenas os títulos dos primeiros 5 posts
        posts.slice(0, 5).forEach(function(post) {
            console.log('Título:', post.title);
        });
    })
    .catch(function(erro) {
        console.log('Erro na requisição:', erro);
    });

// Documentação:
// - fetch pode buscar listas ou objetos.
// - Manipule os dados recebidos conforme necessário.
// - Use slice para limitar a quantidade exibida.
