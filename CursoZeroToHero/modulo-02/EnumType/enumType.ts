/**
 * arquivo: enumType.ts
 * data: 04/05/2022
 */

// ===> Exemplo 01: Numeric Enums (Emums Númerico)

enum Idioma{
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}
console.log(Idioma);

// ===> Exemplo 02: String Enums
enum Dia{
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',  
}

console.log(Dia)


// ===> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)
const enum Comida{
  Hamburger = 'Hamburger',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Torta =   'Torta',
  Churrasco = 'Churrasco',
}

function comida(c: Comida){
  return 'comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
//console.log(comida(5));


// ===> Exemplo 04: Quando usar enum?!
enum Tarefa{
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabens! Tarefa concluida com sucesso!',
};

if(concluidaTarefa.status === Tarefa.Done){
  console.log('Enviar email: Tarefa concluida!');
}





