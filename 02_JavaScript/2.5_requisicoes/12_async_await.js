// 12. Promises com async/await
// async/await simplifica o uso de Promises.
async function buscarPost() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await resp.json();
    console.log(post);
  } catch (err) {
    console.error("Erro:", err);
  }
}
buscarPost();