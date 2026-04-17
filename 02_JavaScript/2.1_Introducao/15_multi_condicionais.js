// Aula: Multi-condicionais (&& e ||)
// && (E) exige que todas as condições sejam verdadeiras
// || (OU) exige que pelo menos uma condição seja verdadeira

let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log('Pode dirigir');
}
if (idade < 18 || !temCarteira) {
    console.log('Não pode dirigir');
}