/**
 * arquivo: anyType.ts
 * data: 05/05/20222
 */

// ===> Exemplo 01: Tipo Any
const a: any = 42;
const b: any = ['Pedro'];

const result = a + b;
console.log(result);

// ===> Exemplo 02: Quando o tipo 'any' é inferido implicidamente
let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);



// ===> Exemplo 03: Quando devemos usar o tipo any?
const formulario: {[campoFormulario: string]: any} = {
  nome: 'Pedro',
  sobrenome: 'Arns Jr',
  idade: 42,  
};

console.log(formulario);












