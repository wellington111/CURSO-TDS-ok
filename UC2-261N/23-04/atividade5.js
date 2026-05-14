function podeDirigir(idade, habilitacao) {
    return idade >= 18 && habilitacao === true;
}

let resultado = podeDirigir(20, true);

console.log(resultado);