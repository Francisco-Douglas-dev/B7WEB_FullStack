// 8. Entendendo Promise
// Promise representa uma operação assíncrona que pode ser resolvida ou rejeitada.
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = Math.random() > 0.5; // Simula sucesso ou falha aleatoriamente
    if (sucesso) {
      resolve("Resolvida com sucesso!");
    } else {
      reject("Rejeitada devido a um erro.");
    }
  }, 1000);
});

promessa
  .then(msg => { console.log("Sucesso:", msg);
  })
  .catch(erro => {console.error("Erro:", erro);
  })
  .finally(() => {console.log("Operação concluída.");
  });