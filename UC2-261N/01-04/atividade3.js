const ask = require("readline-sync");

let cachorros = ["Labrador", "Pug", "Pitbull", "Golden Retriever", "Bulldog"];

let numero = Number(ask.question("Digite um numero de 0 a 4: "));

console.log("Raça escolhida:", cachorros[numero]);