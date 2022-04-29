/**
 * arquivo: arrayType.ts
 * data: 28/04/2022
 * Transpilação do arquivo: <windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ===> Exemplo 01 - Uso de Colchetes:
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// ===> Exemplo 02 - Array Object (Objeto Array):
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);

// ===> Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Portugues', 'Ingles', 'Espanhol', 'Frances'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);

// ===> Exemplo 04 - Identificar tamanho do array - método 'lenght'
let idiomas1: Array<string> = ['Portugues', 'Ingles', 'Espanhol', 'Frances'];
console.log(idiomas1.length);

// ===> Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]
console.log(listaNumeros);

// ===> Exemplo 06 - Exemplo de Array comn laço de iteração
let linguagensArray: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens:string[]){
   for(let i = 0; i < linguagens.length; i++){
       console.log(linguagensArray[i]);
   } 
}

funcaoLinguagens(linguagensArray);
