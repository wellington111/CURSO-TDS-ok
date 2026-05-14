// =========================
// EXERCÍCIO 1 - CASE SENSITIVE
// =========================

// O código abaixo deveria funcionar normalmente,
// mas há um erro relacionado a letras maiúsculas e minúsculas.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let name = "Maria";
let nameType = typeof name;
console.log(nameType)
/* Estava let NameType = typeof Name,(Com o "N" maiúsculo);
Porém a primeria varialvel estava com o "N" minúsculo;
*/

// =========================
// EXERCÍCIO 2 - CASE SENSITIVE EM VARIÁVEL
// =========================

// O objetivo é somar os dois valores,
// mas o código não funciona corretamente.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let firstNumber = 10;
let secondNumber = 5;

let result1 = firstNumber + secondNumber;
console.log(result1)
/* A variável "let secondNumber" estava com o "N"
 minúsculo; já a let result estava com o "N" maiúsculo
 e o result estava errado tendo que adicinoar um numero.
*/
// =========================
// EXERCÍCIO 3 - ERRO EM MÉTODO
// =========================

// O código deveria converter número para string,
// mas não está funcionando.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let value = 100;
let textValue = String(value)
console.log(textValue)

/*
 o correto é let textValue = String(value), e estava let textValue = value.tostring();.
*/

// =========================
// EXERCÍCIO 4 - USO INCORRETO DE FUNÇÃO
// =========================

// O código deveria converter string para número,
// mas está incorreto.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let numberString = "200";
let converted = Number(numberString);
console.log(converted)

// =========================
// EXERCÍCIO 5 - TYPEOF MAL UTILIZADO
// =========================

// O código deveria armazenar o tipo da variável,
// mas contém um erro sutil.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let age = 30;
let typeAge = typeof age;
console.log(typeAge)
/* O nome "TypeOf está incorreto"
 O correto seria typeof <- Tudo minusculo.
 E faltava o Age ao lado do type na segunda variavel.
 */

// =========================
// EXERCÍCIO 6 - PARÊNTESES EM MÉTODO
// =========================

// O código deveria transformar um número em string,
// mas não está funcionando corretamente.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let num = 50;
let text = num.toString();
console.log(text)
// Faltava () após o .toString;



// =========================
// EXERCÍCIO 7 - OPERADOR LÓGICO COM CASE
// =========================

// O código deveria verificar se pode dirigir,
// mas há um erro no operador lógico.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let isAdult = true;
let hasLicense = true;

let canDrive = isAdult && hasLicense;
console.log(canDrive)
/* na ultima variavel estava = isAdult AND e o crorreto seria utilizar && */


// =========================
// EXERCÍCIO 8 - CONFUSÃO COM IGUALDADE
// =========================

// O código deveria comparar corretamente,
// mas há um detalhe sutil.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let a = 10;
let b = "10";

let isEqual = a === b;
console.log(isEqual)
/* Não é nescessario o uso de .toString.
 */

// =========================
// EXERCÍCIO 9 - PARÊNTESES FALTANDO
// =========================

// O código deveria calcular corretamente,
// mas possui um erro de sintaxe difícil de perceber.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique qual foi o erro

let result = ((10 + 5) * 2);
console.log(result)
//Estava faltando fechar o parêntese além de adicionar mais 2 parênteses para fazer a conta corretamente. .


// =========================
// EXERCÍCIO 10 - EXPRESSÃO COMPLEXA
// =========================

// O código deveria montar uma expressão lógica válida,
// mas contém erros sutis.
//
// TAREFA:
// 1. Corrija o código
// 2. Explique TODOS os erros encontrados

let finalResult = ((10 + 5) * 2 > 20) && (30 / 3 === 10) || (5 * 2 < 9);
console.log(finalResult)
//  está usando "or" ao invés de ||.