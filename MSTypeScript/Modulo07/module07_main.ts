/*  Module 7: Working with external libraries
    Lab Start */

import * as LoanPrograms from './module07_loan-programs';

/*  TODO Update the function calls. */
let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({a_base: 30000, taxaDeJuros: 5});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({a_base: 30000, taxaDeJuros: 5, meses: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"