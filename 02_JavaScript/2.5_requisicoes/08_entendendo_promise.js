// 8. Entendendo Promise
// Promise representa uma operação assíncrona que pode ser resolvida ou rejeitada.
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolvida!"), 1000);
});
promessa.then(msg => console.log(msg));