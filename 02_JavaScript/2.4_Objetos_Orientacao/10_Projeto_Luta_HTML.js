// 10 - Projeto: Luta - Montar o HTML
// Este código monta um HTML básico para o projeto de luta, criando elementos para os personagens e o cenário.
// O objetivo é estruturar visualmente o campo de batalha.

const html = `
  <div id="arena">
    <div id="personagem1" class="personagem"></div>
    <div id="personagem2" class="personagem"></div>
    <div id="cenario"></div>
    <div id="log"></div>
  </div>
`;

document.body.innerHTML = html;
