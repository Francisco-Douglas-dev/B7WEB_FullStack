// Aula: Upload de arquivos com JS
// JavaScript permite enviar arquivos para o servidor usando formulários e fetch.

// Exemplo: upload de arquivo usando fetch
// HTML:
// <input type="file" id="arquivo">
// <button onclick="enviarArquivo()">Enviar</button>

function enviarArquivo() {
    var input = document.getElementById('arquivo');
    var arquivo = input.files[0];
    var formData = new FormData();
    formData.append('file', arquivo);

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(dados) {
        console.log('Arquivo enviado:', dados);
    })
    .catch(function(erro) {
        console.log('Erro no upload:', erro);
    });
}

// Documentação:
// - FormData permite enviar arquivos e outros dados.
// - fetch com method POST envia o arquivo.
// - O input deve ser do tipo file.
