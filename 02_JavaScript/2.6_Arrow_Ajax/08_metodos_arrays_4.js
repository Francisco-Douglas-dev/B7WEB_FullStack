// 8. Métodos de Arrays (4/4)
// Exemplos: map, filter, reduce
const valores = [1, 2, 3, 4];
const dobrados = valores.map(v => v * 2);
console.log("map:", dobrados);
const pares = valores.filter(v => v % 2 === 0);
console.log("filter:", pares);
const soma = valores.reduce((acc, v) => acc + v, 0);
console.log("reduce:", soma);
