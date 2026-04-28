// 12. Promises com async/await
// async/await simplifica o uso de Promises, tornando o código mais legível e fácil de entender.
async function buscarPost() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!resp.ok) {
      throw new Error(`Erro na requisição: ${resp.status} - ${resp.statusText}`);
    }
    const post = await resp.json();
    console.log("Post recebido:", post);
  } catch (err) {
    console.error("Erro ao buscar o post:", err);
  } finally {
    console.log("Operação concluída.");
  }
}

buscarPost();