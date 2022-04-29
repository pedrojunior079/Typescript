/**EXERCÍCIO 1
     TODO: Modifique o código para adicionar tipos às declarações de variáveis.
     O JavaScript resultante deve ter a mesma aparência do exemplo original quando você terminar.
*/

let primeiroNome: string;
let ultimoNome: string;
let nomeCompleto: string;
let idade: number;
let estadoCivil: boolean;

primeiroNome = 'Ana';
ultimoNome = 'Paula';
idade = 42;
estadoCivil = false;
nomeCompleto = primeiroNome + " " + ultimoNome;

if(estadoCivil){
   console.log("Meu nome é " + nomeCompleto + ", e sou cidadã do Brasil."); 
}else{
   console.log("Meu nome é " + nomeCompleto + ", e não sou cidadã do Brasil."); 
}

/* EXERCÍCIO 2
    TODO: Execute o código como está e modifique-o para ter variáveis fortemente tipadas.
    Em seguida, resolva quaisquer erros encontrados para que o resultado retornado para a seja 12. */

let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);

/* EXERCÍCIO 3
    TODO: No código a seguir, implemente um tipo enum chamado Season que representa
    as constantes "Outono", "Inverno", "Primavera" e "Verão". Em seguida, atualize a função para que
    você pode passar na temporada referenciando um item na enumeração, por exemplo
    Season.Fall, em vez da string literal "Fall". */

enum Season{
   Inverno,
   Primavera,
   Verao,
   Outono
};

function whichMonths(season: Season){
   let monthsIntSeason: string;
   switch(season){
      case Season.Outono:
         monthsIntSeason = "Setembro a Novembro";
         break;
      case Season.Inverno:
         monthsIntSeason = "Dezembro a Fevereiro";
         break;
      case Season.Primavera:
         monthsIntSeason = "Março a Maio";
         break;
      case Season.Verao:
         monthsIntSeason = "Junho a Agosto";          
   }
   return monthsIntSeason;
}

console.log(whichMonths(Season.Primavera));


/* EXERCÍCIO 4
    TODO: Declare a matriz como o tipo para corresponder ao tipo dos itens na matriz. */

let randomNumbers: number[] = [];
let nextNumber: number;
    
for(let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
    
console.log(randomNumbers);














