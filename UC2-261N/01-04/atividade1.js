const ask = require('readline-sync');


let name = ask.question("Qual seu nome? ")
let corFavorita = ask.question("Qual sua cor preferida?")
let frase = `Meu nome é ${name} e a minha cor favorita é ${corFavorita}`

console.log(frase)
console.log("Meu nome é " + name + " e a minha cor favorita é " + corFavorita)
console.log('Meu nome é', name, "e a minha cor favorita é", corFavorita)
