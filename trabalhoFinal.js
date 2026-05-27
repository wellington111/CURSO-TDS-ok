const ask = require("readline-sync")
const chalk = require("chalk")

// vd atual, vd max
function healthBar(current, max) {

    let totalBars = 20

    let filledBars = Math.floor((current / max) * totalBars)

    let emptyBars = totalBars - filledBars

    return chalk.green("█".repeat(filledBars)) +
        chalk.gray("█".repeat(emptyBars))
}

// =========================================
// CREATE CHARACTER
// =========================================

function createCharacter() {

    let character = null

    while (character === null) {

        console.clear()

        console.log(chalk.red(`
╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║   ██╗  ██╗██╗  ██╗ █████╗ ███████╗ █████╗ ██████╗       ██████╗ ██╗   ██╗███╗   ███║
║   ██║ ██╔╝██║  ██║██╔══██╗╚══███╔╝██╔══██╗██╔══██╗      ██╔══██╗██║   ██║████╗ ████║
║   █████╔╝ ███████║███████║  ███╔╝ ███████║██║  ██║█████╗██║  ██║██║   ██║██╔████╔██║
║   ██╔═██╗ ██╔══██║██╔══██║ ███╔╝  ██╔══██║██║  ██║╚════╝██║  ██║██║   ██║██║╚██╔╝██║
║   ██║  ██╗██║  ██║██║  ██║███████╗██║  ██║██████╔╝      ██████╔╝╚██████╔╝██║ ╚═╝ ██║
║   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝       ╚═════╝  ╚═════╝ ╚═╝     ╚═╝
║                                                                                    ║
║              ⚔️ A ESCURIDÃO SURGE SOB A MONTANHA ⚔️                                  ║
║                                                                                    ║
╚════════════════════════════════════════════════════════════════════════════════════╝
`))

        let name = ask.question(" Insert your hero name: ")

        console.log(chalk.magenta(`

╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                               ⚔️ CHOOSE YOUR CLASS ⚔️                                                ║
╠════════════════════════════════════╦════════════════════════════════════╦══════════════════════════════════════════╣
║         ⚔️ WARRIOR [1]              ║        🔥 BERSERKER [2]            ║         🛡️ GUARDIAN [3]                   ║
╠════════════════════════════════════╬════════════════════════════════════╬══════════════════════════════════════════╣
║ Strong balanced fighter            ║ Brutal offensive fighter           ║ Powerful defensive tank                  ║
║                                    ║                                    ║                                          ║
║ ❤️ Health : 120                     ║ ❤️ Health : 100                     ║ ❤️ Health : 140                           ║
║ 🛡️ Defense: 8                       ║ 🛡️ Defense: 5                       ║ 🛡️ Defense: 12                            ║
║ 🧪 Potions: 3                      ║ 🧪 Potions: 2                      ║ 🧪 Potions: 4                            ║
║ ⚒️ Weapon : Battle Axe              ║ 🪓 Weapon : Dual Axes              ║ 🔨 Weapon : War Hammer                   ║
╚════════════════════════════════════╩════════════════════════════════════╩══════════════════════════════════════════╝

`))

        let option = Number(ask.question(" Choose your class: "))

        switch (option) {

            case 1:

                character = {
                    name: name,
                    className: "Warrior",
                    maxHealth: 120,
                    health: 120,
                    defense: 8,
                    potions: 3,

                    attack: function warriorAttack() {

                        console.log(chalk.red(`
╔════════════════════════════════════╗
║        ⚔️ WARRIOR ATTACK ⚔️          ║
╚════════════════════════════════════╝

⚔️ The Warrior attacks angry!
`))

                        let damage = Math.floor(Math.random() * 7) + 10

                        return damage
                    },
                }

                break

            case 2:

                character = {
                    name: name,
                    className: "Berserker",
                    maxHealth: 100,
                    health: 100,
                    defense: 5,
                    potions: 2,

                    attack: function berserkerAttack() {

                        console.log(chalk.red(`
╔════════════════════════════════════╗
║       🔥 BERSERKER ATTACK 🔥        ║
╚════════════════════════════════════╝

🔥 The Berserker attacks with rage!
`))

                        let damage = Math.floor(Math.random() * 9) + 15

                        return damage
                    },

                }

                break

            case 3:

                character = {
                    name: name,
                    className: "Guardian",
                    maxHealth: 140,
                    health: 140,
                    defense: 12,
                    potions: 4,

                    attack: function guardianAttack() {

                        console.log(chalk.blue(`
╔════════════════════════════════════╗
║        🛡️ GUARDIAN ATTACK 🛡️        ║
╚════════════════════════════════════╝

🛡️ The Guardian strikes with his hammer!
`))

                        let damage = Math.floor(Math.random() * 8) + 11

                        return damage
                    },
                }

                break

            default:

                console.log(chalk.red(`
╔════════════════════════════════════╗
║          ❌ INVALID OPTION ❌       ║
╚════════════════════════════════════╝

⚠️ Choose a valid class!
`))
        }
    }

    console.log(chalk.green(`
╔════════════════════════════════════╗
║          👑 HERO CREATED 👑        ║
╚════════════════════════════════════╝

👤 Name  : ${character.name}
⚔️ Class : ${character.className}

🔥 Your adventure begins now...
`))

    ask.question("\nPress ENTER to continue...")

    return character
}

// =========================================
// ENEMIES
// =========================================

let enemies = [

    {
        name: "Mine Goblin",
        maxHealth: 40,
        health: 40,
        minDamage: 5,
        maxDamage: 10
    },

    {
        name: "Moria Orc",
        maxHealth: 60,
        health: 60,
        minDamage: 8,
        maxDamage: 15
    },

    {
        name: "Cave Troll",
        maxHealth: 90,
        health: 90,
        minDamage: 10,
        maxDamage: 18
    },

    {
        name: "Dark Bat Swarm",
        maxHealth: 35,
        health: 35,
        minDamage: 4,
        maxDamage: 12
    },

    {
        name: "Shadow Beast",
        maxHealth: 75,
        health: 75,
        minDamage: 9,
        maxDamage: 16
    }

]

// =========================================
// GENERATE RANDOM ENEMY
// =========================================

function generateEnemy(enemies) {

    let enemyIndex = Math.floor(Math.random() * enemies.length)

    let enemy = { ...enemies[enemyIndex] }

    console.clear()

    console.log(chalk.red(`
╔════════════════════════════════════╗
║          👹 ENEMY APPEARED 👹      ║
╚════════════════════════════════════╝

⚠️ A wild ${enemy.name} appeared!
❤️ Health: ${enemy.health}

Prepare for battle...
`))

    ask.question("\nPress ENTER to continue...")

    return enemy
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

    console.log(chalk.yellow(`
╔════════════════════════════════════╗
║            ⚔️ ATTACK ⚔️              ║
╚════════════════════════════════════╝

💥 ${character.name} dealt ${damage} damage!
👹 ${enemy.name} remaining health: ${enemy.health}
`))
}

// =========================================
// DEFEND
// =========================================

function defend(character) {

    character.defending = true

    console.log(chalk.blue(`
╔════════════════════════════════════╗
║            🛡️ DEFEND 🛡️             ║
╚════════════════════════════════════╝

🛡️ ${character.name} raised defenses!
⚡ Incoming damage will be reduced!
`))
}

// =========================================
// USE POTION
// =========================================

function usePotion(character) {

    if (character.potions <= 0) {

        console.log(chalk.red(`
╔════════════════════════════════════╗
║            ❌ NO POTIONS ❌          ║
╚════════════════════════════════════╝

⚠️ You don't have any potions left!
`))

        return
    }

    character.health += 30

    if (character.health > character.maxHealth) {
        character.health = character.maxHealth
    }

    character.potions--

    console.log(chalk.green(`
╔════════════════════════════════════╗
║            🧪 POTION 🧪             ║
╚════════════════════════════════════╝

❤️ +30 Health recovered!
🧪 Remaining potions: ${character.potions}
❤️ Current health: ${character.health}
`))
}

// =========================================
// COMBAT MENU
// =========================================

function combatMenu() {

    console.log(chalk.cyan(`
┌────────────────────────────────────┐
│            ⚔️ ACTIONS ⚔️             │
├────────────────────────────────────┤
│ [1] Attack                         │
│ [2] Defend                         │
│ [3] Use Potion                     │
└────────────────────────────────────┘
`))

    return Number(ask.question("Choose an action: "))
}

// =========================================
// START COMBAT
// =========================================

function startCombat(character, enemy) {

    while (character.health > 0 && enemy.health > 0) {

        console.clear()
        console.log(`
        ╔══════════════════════════════════════════════╦══════════════════════════════════════════════╗
        ║                 👤 PLAYER                    ║                  👹 ENEMY                    ║
        ╠══════════════════════════════════════════════╬══════════════════════════════════════════════╣
        ║ Name: ${character.name.padEnd(36)}   ║ Name: ${enemy.name.padEnd(36)}   ║
        ║ Class: ${character.className.padEnd(35)}   ║ HP: ${`${enemy.health}/${enemy.maxHealth}`.padEnd(38)}   ║
        ║ HP: ${`${character.health}/${character.maxHealth}`.padEnd(38)}   ║ Damage: ${`${enemy.minDamage}-${enemy.maxDamage}`.padEnd(34)}   ║
        ║ ${healthBar(character.health, character.maxHealth).padEnd(44)}           ║ ${healthBar(enemy.health, enemy.maxHealth).padEnd(44)}           ║
        ║ Defense: ${String(character.defense).padEnd(33)}   ║                                              ║
        ║ Potions: ${String(character.potions).padEnd(33)}   ║                                              ║
        ╚══════════════════════════════════════════════╩══════════════════════════════════════════════╝
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
                console.log(chalk.red("❌ Invalid option"))
        }



        let enemyDamage =
            Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage

        if (character.defending) {

            enemyDamage = Math.floor(enemyDamage / 2)

            character.defending = false

            console.log(chalk.blue("🛡️ Damage reduced!"))
        }

        character.health -= enemyDamage

        if (character.health < 0) {
            character.health = 0
        }

        console.log(chalk.red(`
👹 ENEMY TURN

${enemy.name} caused ${enemyDamage} damage!
❤️ Your health: ${character.health}
`))

        ask.question("Press ENTER...")
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

        console.log(chalk.green(`
╔════════════════════════════════════╗
║          ⚔️ BATTLE RESULT ⚔️         ║
╚════════════════════════════════════╝

🏆 Enemies defeated: ${defeatedEnemies}/5
🔥 Continue your legendary journey...
`))

        ask.question("\nPress ENTER to continue...")
    }
}

// =========================================
// END GAME
// =========================================

console.clear()

if (player.health <= 0) {

    console.log(chalk.red(`
╔════════════════════════════════════════╗
║             💀 GAME OVER 💀            ║
╚════════════════════════════════════════╝

⚰️ ${player.name} has fallen in battle...

Khazad-dûm was lost once again...
Darkness consumed the mountain...
`))

} else {

    console.log(chalk.green(`
╔════════════════════════════════════════╗
║              👑 VICTORY 👑             ║
╚════════════════════════════════════════╝

⚔️ ${player.name} defeated all enemies!
🏔️ The dwarves reclaimed Khazad-dûm!
🔥 Songs will be sung about this victory forever!
`))
}
