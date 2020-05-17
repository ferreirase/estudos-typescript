// Inferência de tipos:
// quando se declara e inicializa uma variável, o TS infere o tipo e dá erro se
// o tipo passado depois for diferente do primeiro.
// Mas ele compila pra JS mesmo com erros.

// string
let nome: string = 'Anderson'
// erro => nome = 12
console.log(nome)

// boolean
const isBoss: boolean = true
console.log(isBoss)

// number
const idade: number = 27
console.log(idade)

// Tipos explícitos: se comportam como tipagem JS sem tipagem;
let minhaIdade: any // tipo any(qualquer); typagem fica dinâmica/flexível
minhaIdade = 23
console.log(typeof minhaIdade)
minhaIdade = '27'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 100, false] //array de qualquer coisa
console.log(typeof hobbies)
console.log(hobbies)

// tuplas: definição de tipos dentro do array.
let endereco: [string, number] // o primeiro elemento tem que ser ser string e o segundo number
endereco = ['Av. Principal', 123]
console.log(endereco)
endereco = ['Av. Nova', 321]
console.log(endereco)

// enums: lista de valores pré definidos
enum Colors {
	Cinza, //0
	Verde, //1
	Azul = 11, // podemos setar manualmente os valores tmbm
}

let minhaCor: Colors = Colors.Verde
console.log(minhaCor) // vai imprimir 1, que é a posição do verde

//any: recebe tipo de qualquer coisa
let carro: any = 'BMW'
console.log(carro)
carro = {
	ano: 2020,
	marca: 'Chevrolet',
}
console.log(carro)

// funções e retornos
function retornaMeuNome(): string {
	// função que retorna uma string
	return nome
}
console.log(retornaMeuNome())

// função que não retorna nada
function digaOi(): void {
	console.log('oi')
}
digaOi()
