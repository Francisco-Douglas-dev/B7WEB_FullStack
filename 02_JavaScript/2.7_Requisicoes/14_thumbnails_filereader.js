// Aula: Thumbnails com FileReader
// FileReader permite ler arquivos do usuário e mostrar miniaturas de imagens sem criar URLs temporárias.

// HTML:
// <input type="file" id="arquivo" accept="image/*">
// <div id="preview"></div>

function mostrarThumbnailFileReader() {
    var input = document.getElementById('arquivo');
    var arquivo = input.files[0];
    if (arquivo && arquivo.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = document.createElement('img');
            img.src = event.target.result;
            img.width = 100; // tamanho da thumbnail
            document.getElementById('preview').innerHTML = '';
            document.getElementById('preview').appendChild(img);
        };
        reader.readAsDataURL(arquivo);
    }
}

// Para usar, coloque o input e div no HTML e chame mostrarThumbnailFileReader() ao selecionar o arquivo.
// Exemplo:
// <input type="file" id="arquivo" accept="image/*" onchange="mostrarThumbnailFileReader()">
// <div id="preview"></div>

// Documentação:
// - FileReader lê arquivos do usuário.
// - readAsDataURL converte o arquivo em base64 para exibir como imagem.
// - Manipule o DOM para mostrar a thumbnail.
