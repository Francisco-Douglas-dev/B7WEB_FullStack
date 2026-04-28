// 11. Métodos de envio de requisição
// Os principais métodos são GET, POST, PUT, DELETE.
// - GET: Usado para buscar dados do servidor. Não altera o estado do servidor.
// - POST: Usado para enviar dados ao servidor, geralmente para criar novos recursos.
// - PUT: Usado para atualizar recursos existentes no servidor.
// - DELETE: Usado para remover recursos do servidor.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ 
    title: 'Novo post', 
    body: 'Conteúdo', 
    userId: 1 }),
  headers: { 'Content-type': 'application/json; charset=UTF-8' }
})
  .then(resp => {
    if (!resp.ok) {
      throw new Error(`Erro na requisição: ${resp.status} - ${resp.statusText}`);
    }
    return resp.json();
  })
  .then(post => {
    console.log("Post criado com sucesso:", post);
  })
  .catch(erro => {
    console.error("Erro ao criar o post:", erro);
  });