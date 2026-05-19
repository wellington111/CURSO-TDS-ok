const ask = require('readline-sync')

// =============== 1 ============
let name = "Wellington"
let age1 = 17
const pi = 3.14

console.log(`My name is ${name} and I am ${age} years old, and pi is ${pi}.`)

// =============== 2 =============
let oneNumber = Number(ask.question('Insert a number: '))
let twoNumber = Number(ask.question('Insert another number: '))

console.log(`Sum: ${oneNumber + twoNumber}`)
console.log(`Subtraction: ${oneNumber - twoNumber}`)
console.log(`Multiplication: ${oneNumber * twoNumber}`)
console.log(`Division: ${oneNumber / twoNumber}`)
console.log(`Remainder: ${oneNumber % twoNumber}`)

// =============== 3 =============
let numbers1 = 1
let numbers2 = 2
console.log(numbers1 === numbers2);
console.log(numbers1 !== numbers2);
console.log(numbers1 > numbers2)
console.log(numbers1 < numbers2)
console.log(numbers1 >= numbers2)
console.log(numbers1 <= numbers2)

// ============== 4 =============
let age2 = Number(ask.question('Insert your age: '))
let cart = ask.question('Do you have a drivers license?(yes/no) ')

console.log(age2 >= 18 && cart === 'yes')

// ============== 5 =============
let number = Number(ask.question('Insert a number: '))

if (number > 0) {
    console.log('The number is positive.')
    if (number < 0) {
        console.log('The number is negative.')
        if (number === 0){
            console.log('The number is zero.')
        }
    }
}

// ============= 6 =============
