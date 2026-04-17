// 9. Gerenciando erros na Promise
// Use .catch para tratar erros em Promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(resp => resp.json())
  .catch(err => console.error("Erro:", err));