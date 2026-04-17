// Aula: Funções dentro de funções
// Podemos declarar funções dentro de outras funções

function externa() {
    function interna() {
        console.log('Função interna chamada!');
    }
    interna();
}

externa();