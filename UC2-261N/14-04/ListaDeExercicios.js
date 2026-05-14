const ask = require("readline-sync");

// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================

let filmes = ["Avatar", "Vingadores", "Titanic", "Batman", "Interestelar", "Matrix"];

let numero = Number(ask.question("Digite um numero: "));

console.log("Filme:", filmes[numero]);


// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================

let bebidas = ["Agua", "Coca-Cola", "Suco", "Cafe", "Cha", "Energetico", "Leite", "Refrigerante"];

console.log("Quantidade de bebidas:", bebidas.length);


// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================

let pokemons = ["Pikachu", "Charmander", "Bulbassauro", "Squirtle", "Eevee"];

let pokemonUsuario = ask.question("Digite o nome de um Pokemon: ");

console.log(pokemons.includes(pokemonUsuario));


// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================

let jogos = [];

let jogo1 = ask.question("Digite um jogo: ");
let jogo2 = ask.question("Digite outro jogo: ");
let jogo3 = ask.question("Digite mais um jogo: ");

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);

console.log(jogos);


// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================

let series = ["Breaking Bad", "Dark", "The Boys", "Loki", "Round 6"];

series.pop();

console.log(series);


// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================

let comidas = ["Pizza", "Hamburguer", "Batata", "Lasanha", "Churrasco", "Sushi"];

comidas.splice(2, 2);

console.log(comidas);


// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================

let bandas = ["Linkin Park", "Imagine Dragons", "Coldplay", "Queen"];

console.log(bandas.join(" - "));


// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================

let precos = [10.99, 25.50, 8.75, 100.00, 55.40];

console.log("Primeiro preco:", precos[0]);
console.log("Ultimo preco:", precos[precos.length - 1]);


// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================

let personagens = ["Mario", "Kratos", "Sonic", "Zelda", "Luigi"];

personagens.sort();

console.log(personagens);


// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================

let filmesRepetidos = ["Avatar", "Batman", "Avatar", "Titanic", "Batman"];

console.log("Tamanho do array:", filmesRepetidos.length);


// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================

let filmes2 = ["Velozes e Furiosos", "Homem-Aranha"];
let series2 = ["Stranger Things", "Wandinha"];

let catalogo = filmes2.concat(series2);

console.log(catalogo);


// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================

let episodios = [1, 2, 3, 4, 5, 6];

episodios.reverse();

console.log(episodios);


// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes
// =========================================

let catalogoFilmes = [
    { nome: "Avatar", genero: "Ficcao", nota: 8 },
    { nome: "Titanic", genero: "Romance", nota: 9 },
    { nome: "Batman", genero: "Acao", nota: 10 }
];

// map
let nomesFilmes = catalogoFilmes.map(filme => filme.nome);
console.log(nomesFilmes);

// filter
let filmesAcao = catalogoFilmes.filter(filme => filme.genero === "Acao");
console.log(filmesAcao);

// reduce
let mediaNotas = catalogoFilmes.reduce((total, filme) => total + filme.nota, 0) / catalogoFilmes.length;

console.log("Media das notas:", mediaNotas);