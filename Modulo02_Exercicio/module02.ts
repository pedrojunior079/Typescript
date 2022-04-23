/*EXERCÍCIO 1
     TODO: Modifique o código para adicionar tipos às declarações de variáveis.
     O JavaScript resultante deve ter a mesma aparência do exemplo original quando você terminar.
*/

let primeiroNome;
let ultimoNome;
let nomeCompleto;
let idade;
let estadoCivil;

primeiroNome = 'Ana';
ultimoNome = 'Paula';
idade = 42;
estadoCivil = false;
nomeCompleto = primeiroNome + " " + ultimoNome;

if(estadoCivil){
   console.log("Meu nome é " + nomeCompleto + ", e sou cidadão do Brasil."); 
}else{
   console.log("Meu nome é " + nomeCompleto + ", e não sou cidadão do Brasil."); 
}

