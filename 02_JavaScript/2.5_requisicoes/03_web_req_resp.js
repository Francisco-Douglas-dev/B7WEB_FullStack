// 3. Como a Web funciona (Req e Resp)?
// O navegador faz uma requisição (request) ao servidor, que responde (response) com dados.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(resp => resp.json())
  .then(data => console.log(data));