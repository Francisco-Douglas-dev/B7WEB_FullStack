// Aula: Thumbnails com JS
// JavaScript pode criar miniaturas (thumbnails) de imagens usando o elemento <img> e manipulação de arquivos.

// HTML:
// <input type="file" id="arquivo" accept="image/*">
// <div id="preview"></div>

function mostrarThumbnail() {
    var input = document.getElementById('arquivo');
    var arquivo = input.files[0];
    if (arquivo && arquivo.type.startsWith('image/')) {
        var url = URL.createObjectURL(arquivo);
        var img = document.createElement('img');
        img.src = url;
        img.width = 100; // tamanho da thumbnail
        document.getElementById('preview').innerHTML = '';
        document.getElementById('preview').appendChild(img);
    }
}

// Para usar, coloque o input e div no HTML e chame mostrarThumbnail() ao selecionar o arquivo.
// Exemplo:
// <input type="file" id="arquivo" accept="image/*" onchange="mostrarThumbnail()">
// <div id="preview"></div>

// Documentação:
// - URL.createObjectURL cria uma URL temporária para o arquivo.
// - Manipule o DOM para mostrar a imagem.
// - Limite o tamanho da thumbnail com width/height.
