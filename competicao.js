const ask = require("readline-sync");

let alunos = [];

function cadastrarAluno() {
    let nome = ask.question("Digite o nome do aluno: ");

    let nota1 = Number(ask.question('Primeira nota do aluno: '));
    let nota2 = Number(ask.question('Segunda nota do aluno: '));
    let nota3 = Number(ask.question('Terceira nota do aluno: '));

    let media = calcularMedia(nota1, nota2, nota3);
    let situacao = verificarSituacao(media);

    alunos.push([nome, nota1, nota2, nota3, media, situacao]);
}

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function verificarSituacao(media) {

    if (media >= 7) {
        return "APROVADO ( ESTUDE MENOS! )";
    } else if (media >= 5) {
        return "RECUPERACAO ( NAO FEZ MAIS QUE SUA OBRIGACAO! )";
    } else {
        return "REPROVADO ( SEU BURRO! )";
    }
}

function mostrarAlunos() {

    for (let aluno of alunos) {

        console.log(`
========== ALUNO ==========
Nome: ${aluno[0]}
Nota 1: ${aluno[1]}
Nota 2: ${aluno[2]}
Nota 3: ${aluno[3]}
Média: ${aluno[4].toFixed(2)}
Situação: ${aluno[5]}
===========================
`);
    }
}

