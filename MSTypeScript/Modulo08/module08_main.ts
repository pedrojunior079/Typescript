/* Modulo 8/. Organize codigo usando Typescript namespace 
 * Lab start 
 * TODO criar o Loans namespace
*/

/// <reference path="module08_emprestimos.ts" />
/// <reference path="module08_emprestimos-programas.ts" />

let PagamentoApenasDeJuros = EmprestimoProgramas.calcularPagamentoDoEmprestimoApenasComJuros({a_base: 30000, taxaDeJuros: 5});
let PagamentoDeEmprestimoConvencional = EmprestimoProgramas.calcularPagamentoDeEmprestimoConvencional({a_base: 30000, taxaDeJuros: 5, numeroDeMeses: 180});
console.log(PagamentoApenasDeJuros);         //* Returns "The interest only loan payment is 125.00" 
console.log(PagamentoDeEmprestimoConvencional);     //* Returns "The conventional loan payment is 237.24"

