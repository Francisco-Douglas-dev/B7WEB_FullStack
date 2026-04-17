// 2. O que é Síncrono e Assíncrono?
// Síncrono: cada operação espera a anterior terminar.
// Assíncrono: operações podem ocorrer em paralelo, sem esperar.
console.log("Início");
setTimeout(() => console.log("Assíncrono"), 1000);
console.log("Fim");