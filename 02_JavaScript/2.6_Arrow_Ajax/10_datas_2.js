// 10. Datas (2/3)
// Métodos para manipular datas
const data = new Date("2026-02-13T10:00:00");
data.setDate(data.getDate() + 5); // Soma 5 dias
console.log("Nova data:", data);
data.setMonth(data.getMonth() - 1); // Subtrai 1 mês
console.log("Mês anterior:", data);
