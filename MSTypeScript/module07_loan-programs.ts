import * as Loans from './module07_loans';
/* TODO Adicionar importação statement. */

/* TODO  calcula o pagamento de um empréstimo somente de juros. */
export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {
    let formaDePagamento: number;
    formaDePagamento = loanTerms.a_base * calculateInterestRate(loanTerms.taxaDeJuros);
    return 'O pagamento do empréstimo apenas com juros é ' + formaDePagamento.toFixed(2);
}
/*  TODO calcula o pagamento de um empréstimo convencional. */
export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
    let o_juro: number = calculateInterestRate(loanTerms.taxaDeJuros);
    let formaDePagamento: number;
    formaDePagamento = loanTerms.a_base * o_juro / (1 - (Math.pow(1/(1 + o_juro), loanTerms.meses)));
    return 'O pagamento do empréstimo convencional é ' + formaDePagamento.toFixed(2);
}
/*  TODO uma função de trabalho que calcula a taxa de juros mensal do empréstimo. */
function calculateInterestRate (taxaDeJuros: number): number {
    let jurosMensal: number = taxaDeJuros / 1200;
    return jurosMensal
}