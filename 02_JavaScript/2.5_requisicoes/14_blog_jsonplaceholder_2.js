// 14. Projeto: Blog do JSONPlaceholder 2
// Buscar posts e exibir detalhes de um post específico.
async function mostrarDetalhesPost(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await resp.json();
  console.log(`Título: ${post.title}\nConteúdo: ${post.body}`);
}
mostrarDetalhesPost(1);