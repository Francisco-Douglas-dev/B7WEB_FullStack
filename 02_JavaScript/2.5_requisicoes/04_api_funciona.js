// 4. Como uma API funciona?
// API é um conjunto de regras para comunicação entre sistemas. Exemplo de requisição a uma API:
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(users => console.log(users));