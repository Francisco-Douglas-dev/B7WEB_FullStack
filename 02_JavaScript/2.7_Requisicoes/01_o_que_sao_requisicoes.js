// Aula: O que são requisições?
// Requisições são pedidos que o navegador faz para buscar ou enviar dados para um servidor.
// Exemplo: buscar dados de um site usando XMLHttpRequest.

// Criando uma requisição simples para obter dados de um site
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1'); // URL de exemplo
xhr.onload = function() {
    if (xhr.status === 200) {
        // Sucesso: dados recebidos
        console.log('Dados recebidos:', xhr.responseText);
    } else {
        // Erro na requisição
        console.log('Erro na requisição:', xhr.status);
    }
};
xhr.send();

// Documentação:
// - XMLHttpRequest é uma forma tradicional de fazer requisições HTTP em JavaScript.
// - O método open() define o tipo de requisição e a URL.
// - onload é chamado quando a resposta chega.
// - send() envia a requisição ao servidor.
