// Aula: Variáveis dentro de funções
// Variáveis declaradas dentro de funções só existem dentro delas (escopo local)

function mostrarMensagem() {
    let mensagem = 'Olá do escopo local!';
    console.log(mensagem);
}

mostrarMensagem();
// console.log(mensagem); // Isso daria erro, pois mensagem não existe aqui