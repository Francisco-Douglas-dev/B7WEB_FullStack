// 13. Projeto: Blog do JSONPlaceholder 1
// Buscar e exibir posts do JSONPlaceholder.
async function mostrarPosts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await resp.json();
  posts.forEach(post => console.log(post.title));
}
mostrarPosts();