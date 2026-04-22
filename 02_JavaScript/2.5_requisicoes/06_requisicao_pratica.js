// 6. Fazendo uma requisição na prática
// Usando fetch para buscar dados de uma API e tratar erros.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => {
    if (!resp.ok) {
      throw new Error(`Erro na requisição: ${resp.status}`);
    }
    return resp.json();
  })
  .then(posts => {
    console.log('Posts recebidos:', posts);
    // Exemplo: Exibindo o título do primeiro post
    if (posts.length > 0) {
      console.log('Título do primeiro post:', posts[0].title);
    }
  })
  .catch(error => {
    console.error('Erro ao buscar os posts:', error);
  });