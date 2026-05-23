const ask = require("readline-sync")

// =========================================
// ATTACK FUNCTIONS
// =========================================

function warriorAttack() {

    console.log("\n⚔️ The Warrior attacks fiercely!")

    let damage = Math.floor(Math.random() * 7) + 10

    return damage
}

function berserkerAttack() {

    console.log("\n🔥 The Berserker attacks with rage!")

    let damage = Math.floor(Math.random() * 9) + 15

    return damage
}

function guardianAttack() {

    console.log("\n🛡️ The Guardian strikes with his hammer!")

    let damage = Math.floor(Math.random() * 8) + 11

    return damage
}

// =========================================
// CREATE CHARACTER
// =========================================

function createCharacter() {

    let option
    let character = null

    while (character === null) {

        console.clear()

        console.log
            (`             +-----------------------------+
             |     SEJA BEM VINDO(A)       |
             +-----------------------------+`)
        let name = ask.question(" Insert your name: ")
        console.log(`
╔════════════════════════════════════════════════════════════════════════════════════╗
║                            ⚒️ CHOOSE YOUR CLASS ⚒️                                   ║
╚════════════════════════════════════════════════════════════════════════════════════╝

┌──────────────────────────┐  ┌──────────────────────────┐  ┌──────────────────────────┐
│ ⚔️ [1] WARRIOR            │  │ 🔥 [2] BERSERKER         │  │ 🛡️ [3] GUARDIAN           │
├──────────────────────────┤  ├──────────────────────────┤  ├──────────────────────────┤
│ Strong balanced fighter  │  │ Brutal offensive fighter │  │ Powerful defensive tank  │
│                          │  │                          │  │                          │
│ ❤️ Health : 120           │  │ ❤️ Health : 100           │  │ ❤️ Health : 140           │
│ 🛡️ Defense: 8             │  │ 🛡️ Defense: 5             │  │ 🛡️ Defense: 12            │
│ 🧪 Potions: 3            │  │ 🧪 Potions: 2            │  │ 🧪 Potions: 4            │
│ ⚒️ Weapon : Battle Axe    │  │ 🪓 Weapon : Dual Axes    │  │ 🔨 Weapon : War Hammr    │
└──────────────────────────┘  └──────────────────────────┘  └──────────────────────────┘
`)
        option = ask.question(" Choose your class: ")

        switch (option) {

            case 1:

                character = {
                    name: name,
                    className: "Warrior",
                    health: 120,
                    defense: 8,
                    potions: 3,
                    attack: warriorAttack,

                }

                break

            case 2:

                character = {
                    name: name,
                    className: "Berserker",
                    health: 100,
                    defense: 5,
                    potions: 2,
                    attack: berserkerAttack,

                }

                break

            case 3:

                character = {
                    name: name,
                    className: "Guardian",
                    health: 140,
                    defense: 12,
                    potions: 4,
                    attack: guardianAttack,

                }

                break

            default:

                console.log("\n Invalid option!")
        }
    }

    return character
}

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
    }

]

// =========================================
// GENERATE RANDOM ENEMY
// =========================================

function generateEnemy(enemies) {

    let randomIndex = Math.floor(Math.random() * enemies.length)

    return { ...enemies[randomIndex] }
}

// =========================================
// ATTACK
// =========================================

function attack(character, enemy) {

    let damage = character.attack()

    enemy.health -= damage

    if (enemy.health < 0) {

        enemy.health = 0
    }

    console.log(`
╔════════════════════════════════════╗
║            ⚔️ ATTACK ⚔️              ║
╚════════════════════════════════════╝

💥 ${character.name} dealt ${damage} damage!
❤️ ${enemy.name} health: ${enemy.health}
`)
}

// =========================================
// DEFEND
// =========================================

function defend(character) {

    character.defending = true

    console.log(`
╔════════════════════════════════════╗
║            🛡️ DEFEND 🛡️             ║
╚════════════════════════════════════╝

🛡️ ${character.name} is defending!
`)
}

// =========================================
// USE POTION
// =========================================

function usePotion(character) {

    if (character.potions <= 0) {

        console.log("\n no potions left!")

        return
    }

    character.health += 30

    character.potions--

    console.log(`
╔════════════════════════════════════╗
║            🧪 POTION 🧪             ║
╚════════════════════════════════════╝

❤️ +30 Health recovered!
🧪 Remaining potions: ${character.potions}
❤️ Current health: ${character.health}
`)
}

// =========================================
// COMBAT MENU
// =========================================

function combatMenu() {

    console.log(`
┌────────────────────────────────────┐
│            ⚔️ ACTIONS ⚔️             │
├────────────────────────────────────┤
│ [1] Attack                         │
│ [2] Defend                         │
│ [3] Use Potion                     │
└────────────────────────────────────┘
`)

    return ask.questionInt(" Choose an action: ")
}

// =========================================
// START COMBAT
// =========================================

function startCombat(character, enemy) {

    while (character.health > 0 && enemy.health > 0) {

        console.clear()

        console.log(`
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                  ⚔️ BATTLE ⚔️                                        ║
╚════════════════════════════════════════════════════════════════════════════════════╝

┌──────────────────────────────────┐      ┌──────────────────────────────────┐
│ 👤 PLAYER                        │      │ 👹 ENEMY                         │
├──────────────────────────────────┤      ├──────────────────────────────────┤
│ Name     : ${character.name.padEnd(18)}    │      │ Name     : ${enemy.name.padEnd(18)}    │
│ Class    : ${character.className.padEnd(18)}    │      │ Health  : ${String(enemy.health).padEnd(18)}     │
│ Health   : ${String(character.health).padEnd(18)}    │      │ Damage  : ${enemy.minDamage}-${enemy.maxDamage}                  │
│ Defense  : ${String(character.defense).padEnd(18)}    │      │ Status  : Aggressive             │
│ Potions  : ${String(character.potions).padEnd(18)}    │      │ Area    : Khazad-dûm             │
└──────────────────────────────────┘      └──────────────────────────────────┘
`)

        let option = combatMenu()

        switch (option) {

            case 1:

                attack(character, enemy)

                break

            case 2:

                defend(character)

                break

            case 3:

                usePotion(character)

                break

            default:

                console.log("\n Invalid option!")
        }

        if (enemy.health <= 0) {

            console.log(`
╔════════════════════════════════════╗
║            🏆 VICTORY 🏆           ║
╚════════════════════════════════════╝

👹 ${enemy.name} was defeated!
`)

            break
        }

        let enemyDamage = Math.floor(
            Math.random() * (enemy.maxDamage - enemy.minDamage + 1)
        ) + enemy.minDamage

        if (character.defending) {

            enemyDamage = Math.floor(enemyDamage / 2)

            character.defending = false

            console.log("\n🛡️ Defense reduced the damage!")
        }

        character.health -= enemyDamage

        if (character.health < 0) {

            character.health = 0
        }

        console.log(`
╔════════════════════════════════════╗
║           👹 ENEMY TURN 👹         ║
╚════════════════════════════════════╝

💥 ${enemy.name} dealt ${enemyDamage} damage!
❤️ Your health: ${character.health}
`)

        ask.question("\n Press ENTER to continue...")
    }
}

// =========================================
// GAME VARIABLES
// =========================================

let player = createCharacter()

let defeatedEnemies = 0

// =========================================
// MAIN GAME LOOP
// =========================================

while (player.health > 0 && defeatedEnemies < 5) {

    let enemy = generateEnemy(enemies)

    startCombat(player, enemy)

    if (player.health > 0) {

        defeatedEnemies++

        console.log(`
╔════════════════════════════════════╗
║          ⚔️ BATTLE RESULT ⚔️         ║
╚════════════════════════════════════╝

🏆 Enemies defeated: ${defeatedEnemies}/5
`)

        ask.question("\nPress ENTER to continue...")
    }
}

// =========================================
// END GAME
// =========================================

console.clear()

if (player.health <= 0) {

    console.log(`
╔════════════════════════════════════════╗
║             💀 GAME OVER 💀           ║
╚════════════════════════════════════════╝

Khazad-dûm was lost once again...
`)

} else {

    console.log(`
╔════════════════════════════════════════╗
║              👑 VICTORY 👑            ║
╚════════════════════════════════════════╝

The dwarves reclaimed Khazad-dûm!
`)
}