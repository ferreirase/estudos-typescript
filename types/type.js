"use strict";
// Inferência de tipos:
// quando se declara e inicializa uma variável, o TS infere o tipo e dá erro se
// o tipo passado depois for diferente do primeiro.
// Mas ele compila pra JS mesmo com erros.
// string
var nome = 'Anderson';
// erro => nome = 12
console.log(nome);
// boolean
var isBoss = true;
console.log(isBoss);
// number
var idade = 27;
console.log(idade);
// Tipos explícitos: se comportam como tipagem JS sem tipagem;
var minhaIdade; // tipo any(qualquer); typagem fica dinâmica/flexível
minhaIdade = 23;
console.log(typeof minhaIdade);
minhaIdade = '27';
console.log(typeof minhaIdade);
// array
var hobbies = ['Cozinhar', 100, false]; //array de qualquer coisa
console.log(typeof hobbies);
console.log(hobbies);
// tuplas: definição de tipos dentro do array.
var endereco; // o primeiro elemento tem que ser ser string e o segundo number
endereco = ['Av. Principal', 123];
console.log(endereco);
endereco = ['Av. Nova', 321];
console.log(endereco);
// enums: lista de valores pré definidos
var Colors;
(function (Colors) {
    Colors[Colors["Cinza"] = 0] = "Cinza";
    Colors[Colors["Verde"] = 1] = "Verde";
    Colors[Colors["Azul"] = 11] = "Azul";
})(Colors || (Colors = {}));
var minhaCor = Colors.Verde;
console.log(minhaCor); // vai imprimir 1, que é a posição do verde
//any: recebe tipo de qualquer coisa
var carro = 'BMW';
console.log(carro);
carro = {
    ano: 2020,
    marca: 'Chevrolet',
};
console.log(carro);
// funções e retornos
function retornaMeuNome() {
    // função que retorna uma string
    return nome;
}
console.log(retornaMeuNome());
// função que não retorna nada
function digaOi() {
    console.log('oi');
}
digaOi();
