"use strict";
/* Módulo 3: Implementar interfaces em TypeScript
    Início do laboratório */
/* TODO: Atualiza a função de pagamento de empréstimo só de calcular juros. */
function calcularEmprestimoJuros(loanTerms) {
    //Calcula o pagamento mensal de um empréstimo apenas com juros
    let taxa = loanTerms.taxaJuros / 1200; //Calcula a taxa de juros mensal do empréstimo
    let formaPagamento;
    formaPagamento = loanTerms.principal * taxa;
    return 'O pagamento do empréstimo apenas com juros é ' + formaPagamento.toFixed(2);
}
let taxaFormaPagamento1 = calcularEmprestimoJuros({ principal: 30000, taxaJuros: 5 });
console.log(taxaFormaPagamento1); //Retorna "O pagamento do empréstimo apenas com juros é 125,00"
function calcularEmprestimoJuros1(loanTerms) {
    //Calcula o pagamento mensal de um empréstimo convencional
    let taxa = loanTerms.taxaJuros / 1200; //Calcula a taxa de juros mensal do empréstimo
    let formaPagamento;
    formaPagamento = loanTerms.principal * taxa / (1 - (Math.pow(1 / (1 + taxa), loanTerms.meses)));
    return 'O pagamento do empréstimo convencional é ' + formaPagamento.toFixed(2);
}
let convencionaPagamento = calcularEmprestimoJuros1({ principal: 30000, taxaJuros: 5, meses: 180 });
console.log(convencionaPagamento); //Retorna "O pagamento do empréstimo convencional é 237,24"
