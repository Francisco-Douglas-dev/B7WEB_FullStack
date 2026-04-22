// 10. Tipos de status de uma requisição
// Status HTTP indicam o resultado da requisição: 200 (OK), 404 (Não encontrado), 500 (Erro interno).
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(resp => {
    console.log("Status:", resp.status);
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(`Erro na requisição: ${resp.status} - ${resp.statusText}`);
    }
  })
  .then(dados => {
    console.log("Dados recebidos:", dados);
  })
  .catch(erro => {
    console.error("Erro ao processar a requisição:", erro);
  });