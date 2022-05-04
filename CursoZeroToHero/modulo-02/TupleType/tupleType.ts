/**
 * arquivo: tupleType.ts
 * data: 03/05/2022
 */

// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number];
pessoa = ['Andre Luiz', 'Full Stack', 28];
console.log(pessoa);


// ===> Exemplo 02 - Acessando o valor da Tupla
let pessoa1: [string, string, number];
pessoa1 = ['Andre Luiz', 'Full Stack', 28];
console.log(pessoa1[1]);


// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Andre Luiz', 'Full Stack', 28];
console.log(pessoa2);



// ===> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);


// ===> Exemplo 05 - Lista Heterogenea de Tupla:
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ===> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes: string[], idades: number[]){
   return [...nomes, ...idades] 
}

let resultado = listarPessoas(['Andre Luiz', 'Ana Paula Aparecida'],[28, 25]);
console.log(resultado);


// ===> Exemplo 07 - Labeled Tuplas com Spread Operatornuma função 
type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]
 
function criarPessoa(...nome: Nome){
   return [...nome];
}

console.log(criarPessoa('Andre', 'Luiz'));
console.log(criarPessoa('Ana', 'Paula', 'da Silva'));
