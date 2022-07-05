namespace EmprestimoProgramas 
{
    /*  TODO Criação do LoanPrograms namespace. */

    /*  TODO Atualização de calculateInterestOnlyLoanPayment function. */
    export function calcularPagamentoDoEmprestimoApenasComJuros(termosDeEmprestimo: Emprestimos.Emprestimo): string {
        let FormaDePagamento: number;
        FormaDePagamento = termosDeEmprestimo.a_base * calcularTaxaDeJuros(termosDeEmprestimo.taxaDeJuros);
        return 'O pagamento do empréstimo apenas com juros é' + FormaDePagamento.toFixed(2);
    }

    export function calcularPagamentoDeEmprestimoConvencional(termosDeEmprestimo: Emprestimos.EmprestimoConvencional): string {
        let o_juro: number = calcularTaxaDeJuros(termosDeEmprestimo.taxaDeJuros);
        let FormaDePagamento: number;
        FormaDePagamento = termosDeEmprestimo.a_base * o_juro / (1 - (Math.pow(1 / (1 + o_juro), termosDeEmprestimo.numeroDeMeses)));
        return 'O pagamento do empréstimo convencional é' + FormaDePagamento.toFixed(2);
    }

    function calcularTaxaDeJuros(taxaDeJuros: number): number {
        let taxaJuros: number = taxaDeJuros / 1200;
        return taxaJuros
    }

}