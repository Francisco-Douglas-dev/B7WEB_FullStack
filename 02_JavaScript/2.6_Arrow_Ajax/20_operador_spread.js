// 20. Operador Spread
// Espalha elementos de arrays ou objetos
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
