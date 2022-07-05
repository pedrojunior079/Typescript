/* 
 * arquivo: unknownType.ts
 * data: 04/07/2022
 */ 

// ===> Exemplo 01: Tipo Unknown
/*let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = 'Oi tudo bem?';

console.log(valorVariavel);


// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;
*/


// ===> Exemplo 03: defirença entre: 'any' vs 'unknown'
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;
console.log(algumaCoisaAny.toFixed(2));
 
if(typeof algumaCoisaUnknown === 'number')
{
  console.log(algumaCoisaUnknown.toFixed(2));
}