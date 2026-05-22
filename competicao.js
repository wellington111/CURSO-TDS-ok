// const ask = require('readline-sync')

// function registerProduct(name) {
//     console.clear()
//     objeto = {
//         id: products.length + 1,
//         name: ask.question('Insert product name: '),
//         priceSale: Number(ask.question('Insert selling price: ')),
//         manufacturingPrice: Number(ask.question('Insert manufacturing price: ')),
//         quantityStock: Number(ask.question('Insert quantity in stock: '))
//     }
//     console.clear()

//     products.push(objeto)

//     console.log(`Product ${objeto.name} inserted successfully!`)

//     ask.question('Press ENTER to continue...')
// }

// function searchById(id) {
//     for (let product of products) {
//         if (objeto.id === id) {
//             return product
//         }
//     }
// }

// function searchByName(name) {
//     for (let product of products) {
//         if (objeto.name === name) {
//             return product
//         }
//     }
//     return null
// }

// function showProducts() {
//     console.clear()
//     for (let product of products) {
//         console.log(`
//         -------------
//         ID: ${objeto.id}
//         NAME: ${objeto.name}
//         selling price: ${objeto.priceSale}
//         manufacturing price: ${objeto.manufacturingPrice}
//         quatity stock: ${objeto.quantityStock}
//         --------------`)

//     }
//     ask.question('Press ENTER to continue...')
// }

// const products = []

// while (true) {
//     console.clear()
//     console.log(`
//  1 - Register new product
//  2 - Search product by ID 
//  3 - Search product by name
//  4 - Show all products
//  0 - Exit
//     `)

//
//     let option = Number(ask.question(`Choose option: `))

//     switch (option) {
//         case 1:
//             registerProduct()
//             break
//         case 2:
//             console.clear()
//             let id = Number(ask.question('Insert ID: '))
//             console.log(searchById(id))
//             ask.question('Press ENTER to continue...')
//             break
//         case 3:
//             console.clear()
//             let name = ask.question('Insert NAME: ')
//             console.log(searchByName(name))
//             ask.question('Press ENTER to continue...')
//         case 4:
//             showProducts()
//             break
//         case 0:
//             process.exit()
//             break
//         default:
//             console.clear()
//             console.log('Invalid option')
//             ask.question('Press ENTER to continue...')
//     }
// }
//
// ============================= PARTE 2 ==============================

// function createAccount() {
//     console.clear()
//     let username = ask.question('Insert username: ')
//     let password = ask.question('Insert password: ', { hideEchoBack: true, mask: '*' })

//     accounts.push({
//         username: username,
//         password: password
//     })
// }

function login() {
    console.clear()
    let username = ask.question('Insert username: ')
    let password = ask.question('Insert password: ', { hideEchoBack: true, mask: '*' })

    for (let user of accounts) {
        if (user.username === username && user.password === password) {
            return true
            token = { username: username, password: password }
        }
    }
    return false
}

const accounts = []

//while é enquanto

const token = null

while (true) {
    console.clear()
    console.log()

    if (token) {
        console.log(`
---------- MENU ----------
1 - Show welcoming message 
2 - Lougout
0 - exist`)
        let option = Number(ask.question(`Choose option: `))

        switch (option) {
            case 1:
                console.clear()
                createAccount()
                ask.question('Press ENTER to continue...')
                break
            case 2:
                console.clear()
                console.log(login())
                break
            case 3:
                process.exit()
                break
            default:
                console.clear()
                console.log('Invalid option')
                break
        }
    }
}