function dividirArray(array) {
    let primeiro = array[0] / 2;
    let ultimo = array[array.length - 1] / 2;

    return [ultimo, primeiro];
}

let numeros = [10, 20, 30, 40, 50];

let resultado = dividirArray(numeros);

console.log(resultado);