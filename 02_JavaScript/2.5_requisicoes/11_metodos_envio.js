// 11. Métodos de envio de requisição
// Os principais métodos são GET, POST, PUT, DELETE.
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ title: 'Novo post', body: 'Conteúdo', userId: 1 }),
  headers: { 'Content-type': 'application/json; charset=UTF-8' }
})
  .then(resp => resp.json())
  .then(post => console.log(post));