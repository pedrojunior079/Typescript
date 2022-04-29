"use strict";
/* Módulo 4: Desenvolva funções tipadas usando TypeScript
 Início do laboratório */
/* TODO: Converte as funções sortDescending e sortAscending em seta
 funções. */
/* sortDescending é uma função de comparação que informa ao método de classificação como classificar
 números em ordem decrescente */
let sortDescendente = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
let sortAscendente = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/* A função construirArray constrói um array de números aleatórios únicos contendo o número
  de itens com base no número passado para ele. O parâmetro sortOrder determina
  se deve classificar a matriz em ordem crescente ou decrescente. */
/* TODO: Atualiza a função contruirArray. */
function construirArray(items, sortOrder) {
    let ramdomNumbers = [];
    let nextNumber;
    for (let contador = 0; contador < items; contador++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            contador--;
        }
    }
    if (sortOrder === 'ascendente') {
        return randomNumbers.sort(sortAscendente);
    }
    else {
        return randomNumbers.sort(sortDescendente);
    }
}
let meuArray1 = construirArray(12, 'ascendente');
let meuArray2 = construirArray(8, 'descendente');
console.log(meuArray1);
console.log(meuArray2);
/* EXERCÍCIO 2
 TODO: Atualize a função LoanCalculator. */
function CalculadoraEmprestimo(principio, taxaDeJuro, meses = 12) {
    let taxa = taxaDeJuro / 1200; //calcula por mes a taxa de juros
    let pagamento;
    pagamento = principio * taxa / (1 - (Math.pow(1 / (1 + taxa), meses)));
    return pagamento.toFixed(2);
}
let meuEmprestimo = CalculadoraEmprestimo(1000, 5);
console.log(meuEmprestimo);
