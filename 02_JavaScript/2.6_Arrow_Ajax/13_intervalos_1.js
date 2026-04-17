// 13. Intervalos (1/2)
// setInterval e setTimeout
let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log("Contador:", contador);
  if (contador === 3) clearInterval(intervalo);
}, 1000);
