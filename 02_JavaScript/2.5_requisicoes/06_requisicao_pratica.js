// 6. Fazendo uma requisição na prática
// Usando fetch para buscar dados de uma API.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => resp.json())
  .then(posts => console.log(posts));