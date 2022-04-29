Curso gratuito de Typescript da Miscrosft Learn 
https://docs.microsoft.com/pt-br/learn/paths/build-javascript-applications-typescript/?WT.mc_id=javascript-23355-gllemos

npm install -g typescript
tsc --init executar dentro da pasta do projeto no qual vai criar o arquivo tsconfig.json
e dentro do arquico descomente outDir quwe vai ser a pasta onde vai ser armazenada o .js 

<h2>Pré-requisitos:</h2> 

<p>Familiaridade com HTML básico e JavaScript ES6/2015, incluindo:</p>
<li>Condicionais</li>
<li>Funções</li>
</li>Escopo</li>
<li>Matrizes</li>
</li>Loops</li>
</li>Iterators</li>
<li>Objetos</li>
<li>Classes</li>
<li>Módulos</li>
<p>Software instalado:</p>
<li>Git</li>
<li>Visual Studio Code</li>
<li>Node.js<li>
<li>TypeScript</li>


let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK


Tipo unknown

let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown


Asserção de tipo

let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

Tipos de união

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid


function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error

Extensao VSCode Typescript Compiler

O que é uma interface?
Você pode usar interfaces para descrever um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos.

Observe que a interface não inicializa nem implementa as propriedades declaradas dentro dela. Isso ocorre porque o único trabalho de uma interface é descrever um tipo. Ela define o que o contrato de código exige, enquanto uma variável, função ou classe que implementa a interface atende ao contrato fornecendo os detalhes de implementação necessários.

Depois de definir uma interface, você pode usá-la como um tipo e obter todos os benefícios da verificação de tipo e do IntelliSense.



Motivos para usar uma interface em TypeScript
As interfaces geralmente são o ponto-chave de contato entre duas partes do código do TypeScript, especialmente ao trabalhar com código JavaScript existente ou objetos JavaScript internos.

Você pode usar uma interface para:

Criar nomes abreviados para tipos comumente usados. Até mesmo com uma interface simples como a declarada no exemplo anterior, você ainda obtém o benefício do IntelliSense e da verificação de tipo.
Impulsionar a consistência em um conjunto de objetos, porque cada objeto que implementa a interface opera sob as mesmas definições de tipo. Isso pode ser útil quando você está trabalhando com uma equipe de desenvolvedores e deseja garantir que os valores apropriados estejam sendo passados para propriedades, construtores ou funções. Por exemplo, os objetos que implementam uma interface precisam implementar todos os membros necessários da interface. Portanto, se você não passar todos os parâmetros necessários do tipo correto, o compilador do TypeScript vai gerar um erro.
Descreva as APIs do JavaScript existentes e esclareça os tipos de retorno e os parâmetros de função. Isso é especialmente útil quando você está trabalhando com bibliotecas JavaScript, como o jQuery. Uma interface pode fornecer uma compreensão clara do que uma função está esperando e do que ela retornará sem necessidade de várias consultas à documentação.



