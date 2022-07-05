

/* TODO Atualizar a declaração de interfaces. */
export interface Loan{
    a_base: number,
    taxaDeJuros: number   // taca de juros de 14%
}

export interface ConventionalLoan extends Loan{
    meses: number // Total de numeros por meses
}

