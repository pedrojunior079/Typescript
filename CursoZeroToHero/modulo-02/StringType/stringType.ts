/**
 * arquivo: stringType.ts
 * data: 27/04/2022
 * Transpilação do arquivo: <windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ===> Exemplo 01 - Single Quotes
let nomeCompleto: string = 'Andre Luiz';
console.log(nomeCompleto);

// ===> Exemplo 02 - Double Quotes
let funcaoEmpresa: string = "Front-End React";
console.log(funcaoEmpresa);


// ===> Exemplo 03 - Back Ticks
let nomeEmpresa: string = 'Betha Sistemas';
let dadosFuncionario: string = `Seja bem vindo ${nomeCompleto} voce sera ${funcaoEmpresa}
    na empresa ${nomeEmpresa}`;

console.log(dadosFuncionario);    



