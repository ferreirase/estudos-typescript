"use strict";
// Inferência de tipos:
// quando se declara e inicializa uma variável, o TS infere o tipo e dá erro se
// o tipo passado depois for diferente do primeiro.
// Mas ele compila pra JS mesmo com erros.
// string
var nome = 'João';
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
