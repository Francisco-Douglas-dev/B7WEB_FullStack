// Aula: Callbacks
// Callback é uma função passada como argumento para outra função, que será executada depois de algum evento ou ação.

function saudacao(nome, callback) {
    console.log('Olá, ' + nome);
    callback(); // Executa a função callback
}

function mostrarMensagem() {
    console.log('Bem-vindo ao curso!');
}

// Usando callback
saudacao('Maria', mostrarMensagem);

// Documentação:
// - Callback permite executar código após uma ação.
// - Muito usado em funções assíncronas, como requisições ou eventos.
// - Exemplo: setTimeout, event listeners, requisições AJAX.
