"use strict";

// 13. Intervalos (1/2)
// setInterval e setTimeout
var contador = 0;
var intervalo = setInterval(function () {
  contador++;
  console.log("Contador:", contador);
  if (contador === 3) clearInterval(intervalo);
}, 1000);