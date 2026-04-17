// 5. O que é um Callback?
// Callback é uma função passada como argumento para ser executada depois de uma ação.
function saudacao(nome, callback) {
  callback(`Olá, ${nome}!`);
}
saudacao("Maria", msg => console.log(msg));