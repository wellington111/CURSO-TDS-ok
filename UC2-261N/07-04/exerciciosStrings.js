// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.
let ask = require('readline-sync')
// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome
/* 

let nome = ask.question("Qual seu nome?")
let frase = `Meu nome é ${nome}`
console.log(frase)
console.log(nome.length)

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas


let frase = ask.question("Escreva uma frase")
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços

let frase = " Socorram-me! Subi no onibus em Marrocos!"


let fraseFriltrada = frase.trim()
console.log(frase)
console.log (frase.length)
console.log(fraseFriltrada.length)


// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

let fruits = "Morango, Uva, Laranja, Banana, Bergamota"
let nameFruit = ask.question('Digite o nome de uma fruta: ')

console.log(fruits.includes(nameFruit))

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.

let phrase = ask.question("Escreva uma frase: ")
let phrase1 = ask.question("Escreva uma palavra que deseja substituir: ")
let phrase2 = ask.question("Escreva a nova palavra: ")

let newPhrase = phrase.replaceAll(phrase1, phrase2)

console.log(newPhrase)


// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string

let number = 10
let number1 = 5 
let result = number + number1

console.log(`a soma de ${number} + ${number1} é  ${result}`)


// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof
let digite = ask.question("Digite um valor: ")
console.log(typeof digite) 
console.log(Number(digite))

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase
let ask = require('readline-sync')
let palavra = ask.question("Digite uma palavra:")
let palavra1 = ask.question("Digite outra plavra:")

let result = palavra + " " + palavra1  
console.log(result)
console.log(result.length)
*/
// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.

let frase = ask.question("Digite uma frase:")
let letra = ask.question("Digite uma letra:")
let novaFrase = frase.replaceAll(letra, "*")
console.log(frase.toUpperCase())
console.log(novaFrase)