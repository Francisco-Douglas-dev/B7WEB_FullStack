// Aula: Função dentro de objeto
// Objetos podem ter funções como métodos

let usuario = {
    nome: 'Maria',
    saudacao: function() {
        console.log('Olá, ' + this.nome);
    }
};
usuario.saudacao();