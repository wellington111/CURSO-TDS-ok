const ask = require('readline-sync')

// =========================================
// ENEMIES
// =========================================
let enemies = [

    {
        name: "Mine Goblin",
        health: 40,
        minDamage: 5,
        maxDamage: 10
    },

    {
        name: "Moria Orc",
        health: 60,
        minDamage: 8,
        maxDamage: 15
    },

    {
        name: "Cave Troll",
        health: 90,
        minDamage: 10,
        maxDamage: 18
    },

    {
        name: "Dark Bat Swarm",
        health: 35,
        minDamage: 4,
        maxDamage: 12
    },

    {
        name: "Shadow Beast",
        health: 75,
        minDamage: 9,
        maxDamage: 16
    },

    {
        name: "Stone Guardian",
        health: 110,
        minDamage: 12,
        maxDamage: 20
    },

    {
        name: "Moria Archer",
        health: 50,
        minDamage: 7,
        maxDamage: 14
    },

    {
        name: "Ancient Warg",
        health: 80,
        minDamage: 9,
        maxDamage: 17
    }

]

// =========================================
// CREATE CHARACTER
// =========================================

function createCharacter() {

    console.clear()

    let option
    let character = null

    while (character === null) {

        console.clear()

        console.log(`

┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│ ⚔️ [1] WARRIOR      │  │ 🔥 [2] BERSERKER   │  │ 🛡️ [3] GUARDIAN    │
├────────────────────┤  ├────────────────────┤  ├────────────────────┤
│ Strong fighter     │  │ Brutal attacker    │  │ Heavy defender     │
│                    │  │                    │  │                    │
│ ❤️ Health : 120    │  │ ❤️ Health : 100    │  │ ❤️ Health : 140    │
│ 🛡️ Defense: 8      │  │ 🛡️ Defense: 5      │  │ 🛡️ Defense: 12     │
│ 🧪 Potions: 3      │  │ 🧪 Potions: 2      │  │ 🧪 Potions: 4      │
│ ⚒️ Battle Axe      │  │ 🪓 Dual Axes       │  │ 🔨 War Hammer      │
└────────────────────┘  └────────────────────┘  └────────────────────┘

`)

        let name = ask.question("\nEnter your player name: ")

        console.log("\nChoose your class:")
        console.log("[1] Warrior")
        console.log("[2] Berserker")
        console.log("[3] Guardian")

        option = ask.questionInt("\nOption: ")

        switch (option) {

            case 1:

                character = {
                    name: name,
                    className: "Warrior",
                    health: 120,
                    defense: 8,
                    potions: 3,
                    attack: warriorAttack
                }

                break

            case 2:

                character = {
                    name: name,
                    className: "Berserker",
                    health: 100,
                    defense: 5,
                    potions: 2,
                    attack: berserkerAttack
                }

                break

            case 3:

                character = {
                    name: name,
                    className: "Guardian",
                    health: 140,
                    defense: 12,
                    potions: 4,
                    attack: guardianAttack
                }

                break

            default:

                console.log("\n❌ Invalid option! Try again.")
        }
    }

    console.log(`

========================================
⚒️ CHARACTER CREATED ⚒️
========================================

👤 Name   : ${character.name}
🛡️ Class  : ${character.className}
❤️ Health : ${character.health}
🧪 Potions: ${character.potions}

`)

    return character
}

let test1 = createCharacter()
console.log(test1)

// =========================================
// ATTACK FUNCTION 1
// =========================================

function warriorAttack() {

    console.log("⚔️ The warrior attacks his enemy fiercely.")

    let damage = Math.floor(Math.random() * 7) + 10

    return damage
}
let test2 = guardianAttack()
console.log(test2)
function berserkerAttack() {

    console.log("⚔️ The warrior attacks his enemy fiercely.")

    let damage = Math.floor(Math.random() * 9) + 15

    return damage
}
let test3 = guardianAttack()
console.log(test3)
function guardianAttack() {

    console.log("⚔️ The warrior attacks his enemy fiercely.")

    let damage = Math.floor(Math.random() * 8) + 11

    return damage
}
let test4 = guardianAttack()
console.log(test4)
// =========================================
// ATTACK FUNCTION 2
// =========================================

function attack(character, enemy) {
    let damage = character.attack()
    enemy.health -= damage
    if (enemy.health < 0) {
        enemy.health = 0
    }

    console.log(`

⚔️ ${character.name} attacked ${enemy.name}!

💥 Damage dealt: ${damage}

❤️ ${enemy.name} Health: ${enemy.health}

`)
}
let test5 = attack()
console.log(test5)

function defend(character) {

}
function usePotion(character) {

}
function combatMenu() {

}
function startCombat(character, enemy) {

}