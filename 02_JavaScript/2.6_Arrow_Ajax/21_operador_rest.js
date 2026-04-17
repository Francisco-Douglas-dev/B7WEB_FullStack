// 21. Operador Rest
// Agrupa argumentos em um array
function somaTudo(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(somaTudo(1, 2, 3, 4));
