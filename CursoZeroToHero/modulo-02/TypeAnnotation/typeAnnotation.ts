// ===> Variaveis [Type Annotation]
let nome: string = 'Pedro Arns Junior';
console.log(nome);

// ===> Arrays [Type Annotation]
let animais: string[] = ['Eleante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);



// ===> Objetos [Type Annotation]
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000}
console.log(carro);


// ===> Functions [Type Annotation]
function multiplicarNumeros(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumeros(2, 5));

function adicionarNumeros(num1: number, num2: number){
    return num1 + num2;
}

console.log(multiplicarNumeros(2, 8));
