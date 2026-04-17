// Aula: Código síncrono vs assíncrono
// Síncrono: código executa linha por linha, esperando cada etapa terminar.
// Assíncrono: código pode executar tarefas em paralelo, sem esperar cada etapa.

// Exemplo Síncrono:
console.log('Início');
console.log('Meio');
console.log('Fim');
// Saída: Início, Meio, Fim (nessa ordem)

// Exemplo Assíncrono:
console.log('Início');
setTimeout(function() {
    console.log('Meio');
}, 1000); // Executa após 1 segundo
console.log('Fim');
// Saída: Início, Fim, Meio (Meio aparece depois de 1 segundo)

// Documentação:
// - Síncrono: cada linha espera a anterior terminar.
// - Assíncrono: funções como setTimeout, requisições, Promises permitem paralelismo.
