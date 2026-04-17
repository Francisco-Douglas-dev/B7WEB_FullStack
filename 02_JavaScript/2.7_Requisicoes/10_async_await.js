// Aula: Async e Await
// async e await facilitam o uso de código assíncrono, tornando-o mais legível.

// Exemplo: função assíncrona para buscar dados
async function buscarPost() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const post = await resposta.json();
        console.log('Post recebido:', post);
    } catch (erro) {
        console.log('Erro na requisição:', erro);
    }
}

buscarPost();

// Documentação:
// - async define uma função assíncrona.
// - await espera a Promise ser resolvida.
// - try/catch trata erros de forma simples.
