const ask = require('readline-sync')

function createAccount() {
    console.clear()
    let object = {
        username: ask.question('Insert username: '),
        passoword: Number(ask.question('Insert passorword: ', { hideEchoBreak: true, mask: '*' }))
    }
    
}

function login() {
    console.clear()
    let username = ask.question('Inserte username: ')
    let passorword = Number(ask.question('Insert passoword: ', { hideEchoBreak: true, mask: '*' }))
    for (let user of accounts) {
        if (user.username === username && user.passorword === passorword)
            token = { username: username, passorword: passorword }
        return true
    }
}
const accounts = []
const token = null

while (true) {
    console.clear()

    console.log(`
    ----------- MENU -----------
    1 - creat account
    2 - Login
    0 - Sair
    `)

    let option1 = Number(ask.question('Insert a option...'))

    switch (option1) {
        case 1:
            console.clear()
            createAccount
            ask.question('Press ENTER to continue...')
            break
        case 2:
            console.clear()
            login()
            break
        case 0:
            press.exist()
            break
        default:
            console.log('You option no exist hahahahohoho')
            break
    }
    if (token) {
        console.log(`
    ---------- MENU ----------
1 - Show welcoming message 
2 - Lougout
0 - exist`)

        let option = Number(ask.question('Insert a option: '))

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
            case 0:
                press.exist()
                break
            default:
                console.log('You option no exist hahahahohoho')
                break
        }
    }
}