/* Modulo 8/. Organize codigo usando Typescript namespace 
 * Lab start 
 * TODO criar o Loans namespace
*/
namespace Emprestimos 
{
    export interface Emprestimo {
        a_base: number,
        taxaDeJuros: number   // Taxa de Juros de 14%
    }

    export interface EmprestimoConvencional extends Emprestimo {
        numeroDeMeses: number // Total de numero de meses
    }
}







