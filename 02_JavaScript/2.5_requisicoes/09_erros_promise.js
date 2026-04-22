// 9. Gerenciando erros na Promise
// Use .catch para tratar erros em Promises.

function clicou(){
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((reponse) => {
    return Response.json();
  })
  .then((json) =>{
    alert(`Titulo do Primeiro Post: ${json.title}`);
  })
  .catch((err) => {
    console.error("Erro:", err);
  });
}