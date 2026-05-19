const ask = require('readline-sync')

function insertProducts() {
  console.clear();
  let id = products.length + 1;
  let name = ask.question('Insert product name: ');
  let sellPrice = Number(ask.question('Insert selling price: '));
  let manufacturingPrice = Number(ask.question('Insert manufacturing: '));
  let stock = Number('Insert quantity in stock: ');
  console.clear();
  products.push([id, name, sellPrice, manufacturingPrice, stock]);

  console.log(`Product ${name} inserted successfully!`);
  ask.question('Press ENTER to continue...');
}

function searchById(id) {
  for (let product of products) {
    if (product[0] === id) {
      return product

    }
  }
  return null
}

function searchByName(name) {
  for (let product of products) {
    if (product[1] === name) {
      return product

    }
  }
  return null
}

function showProducts() {
  console.clear();
  for (let product of products) {
    console.log(`
    ----------------------------
    ID: ${product[0]}
    Name: ${product[1]}
    Selling Price: ${product[2]}'
    Manufacturing Price: R$${product[3]}
    Stock: ${product[4]}
    ----------------------------
    `)
  }
  ask.question('Press ENTER to continue...');
}
const products = []
cadastrarProduto()