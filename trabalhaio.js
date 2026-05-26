const ask = require("readline-sync")

// =========================================
// CREATE CHARACTER
// =========================================

function createCharacter() {
    let character = null

    while (character === null) {

        console.clear()

        console.log(`
╔════════════════════════════════════════════════════════════════════════════════════╗
║                         ⚒️ KHAZAD-DÛM RPG ⚒️                                         ║
║                                                                                    ║
║                  "The darkness rises beneath the mountain..."                      ║
╚════════════════════════════════════════════════════════════════════════════════════╝
`)

        let name = ask.question(" Insert your hero name: ")

        console.log(`

╔════════════════════════════════════════════════════════════════════════════════════╗
║                              ⚒️ CHOOSE YOUR CLASS ⚒️                                ║
╚════════════════════════════════════════════════════════════════════════════════════╝

┌──────────────────────────┐  ┌──────────────────────────┐  ┌──────────────────────────┐
│ ⚔️ [1] WARRIOR            │  │ 🔥 [2] BERSERKER         │  │ 🛡️ [3] GUARDIAN           │
├──────────────────────────┤  ├──────────────────────────┤  ├──────────────────────────┤
│ Strong balanced fighter  │  │ Brutal offensive fighter │  │ Powerful defensive tank  │
│                          │  │                          │  │                          │
│ ❤️ Health : 120           │  │ ❤️ Health : 100           │  │ ❤️ Health : 140           │
│ 🛡️ Defense: 8             │  │ 🛡️ Defense: 5             │  │ 🛡️ Defense: 12            │
│ 🧪 Potions: 3            │  │ 🧪 Potions: 2            │  │ 🧪 Potions: 4            │
│ ⚒️ Weapon : Battle Axe    │  │ 🪓 Weapon : Dual Axes    │  │ 🔨 Weapon : War Hammer   │
└──────────────────────────┘  └──────────────────────────┘  └──────────────────────────┘
`)

        let option = Number(ask.question(" Choose your class: "))

        switch (option) {

            case 1:

                character = {
                    name: name,
                    className: "Warrior",
                    health: 120,
                    defense: 8,
                    potions: 3,
                    attack: function warriorAttack() {

                        console.log(`
╔════════════════════════════════════╗
║        ⚔️ WARRIOR ATTACK ⚔️         ║
╚════════════════════════════════════╝
                    
                    ⚔️ The Warrior attacks angry!
                    `)

                        let damage = Math.floor(Math.random() * 7) + 10

                        return damage
                    },
                }

                break

            case 2:

                character = {
                    name: name,
                    className: "Berserker",
                    health: 100,
                    defense: 5,
                    potions: 2,
                    attack: function berserkerAttack() {

                        console.log(`
 ╔════════════════════════════════════╗
 ║       🔥 BERSERKER ATTACK 🔥        ║
 ╚════════════════════════════════════╝
                    
                    🔥 The Berserker attacks with rage!
                    `)

                        let damage = Math.floor(Math.random() * 9) + 15

                        return damage
                    },

                }

                break

            case 3:

                character = {
                    name: name,
                    className: "Guardian",
                    health: 140,
                    defense: 12,
                    potions: 4,
                    attack:
                        function guardianAttack() {

                            console.log(`
                    ╔════════════════════════════════════╗
                    ║        🛡️ GUARDIAN ATTACK 🛡️        ║
                    ╚════════════════════════════════════╝
                    
                    🛡️ The Guardian strikes with his hammer!
                    `)

                            let damage = Math.floor(Math.random() * 8) + 11

                            return damage
                        },
                }

                break

            default:

                console.log(`
╔════════════════════════════════════╗
║          ❌ INVALID OPTION ❌       ║
╚════════════════════════════════════╝

⚠️ Choose a valid class!
`)
        }
    }

    // HEROI CRIADO

    console.log(`
╔════════════════════════════════════╗
║          👑 HERO CREATED 👑        ║   
╚════════════════════════════════════╝

👤  Name  : ${character.name}
⚔️  Class : ${character.className}

🔥 Your adventure begins now...
`)

    ask.question("\nPress ENTER to continue...")

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

    let enemyIndex = Math.floor(Math.random() * enemies.length)

    let enemy = { ...enemies[enemyIndex] }

    console.clear()

    console.log(`
╔════════════════════════════════════╗
║          👹 ENEMY APPEARED 👹      ║
╚════════════════════════════════════╝

⚠️ A wild ${enemy.name} appeared!
❤️ Health: ${enemy.health}

Prepare for battle...
`)

    ask.question("\nPress ENTER to continue...")

    return enemy
}

// =========================================
// ATTACK
// =========================================

function attack(character, enemy) {

    let damage = character.attack()

    enemy.health -= damage

    console.log(`
╔════════════════════════════════════╗
║            ⚔️ ATTACK ⚔️              ║
╚════════════════════════════════════╝

💥 ${character.name} dealt ${damage} damage!
👹 ${enemy.name} remaining health: ${enemy.health}
`)
}

// =========================================
// DEFEND
// =========================================

function defend(character) {

    character.defending = true

    console.log(`
╔════════════════════════════════════╗
║            🛡️ DEFEND 🛡️              ║
╚════════════════════════════════════╝

🛡️ ${character.name} raised defenses!
⚡ Incoming damage will be reduced!
`)
}

// =========================================
// USE POTION
// =========================================

function usePotion(character) {

    if (character.potions <= 0) {

        console.log(`
╔════════════════════════════════════╗
║            ❌ NO POTIONS ❌         ║
╚════════════════════════════════════╝

⚠️ You don't have any potions left!
`)

        return
    }

    character.health + 30

    character.potions--

    console.log(`
╔════════════════════════════════════╗
║            🧪 POTION 🧪            ║
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

    return Number(ask.question("Choose an action: "))
}

// =========================================
// START COMBAT
// =========================================

function startCombat(character, enemy) {

    while (character.health > 0 && enemy.health > 0) {

        console.clear()

        console.log(`
⚔️ BATTLE ⚔️

👤 PLAYER                                         👹 ENEMY
Name: ${character.name}                            Name: ${enemy.name}
Class: ${character.className}                      Health: ${enemy.health}
Health: ${character.health}                        Damage: ${enemy.minDamage} - ${enemy.maxDamage}
Defense: ${character.defense}
Potions: ${character.potions}

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
                console.log("❌ Invalid option")
        }

        if (enemy.health <= 0) {
            break
        }

        let enemyDamage =
            Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage

        if (character.defending) {

            enemyDamage = Math.floor(enemyDamage / 2)

            character.defending = false

            console.log("🛡️ Damage reduced!")
        }

        character.health -= enemyDamage

        if (character.health < 0) {
            character.health = 0
        }

        console.log(`
👹 ENEMY TURN

${enemy.name} caused ${enemyDamage} damage!
❤️ Your health: ${character.health}
`)

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

        console.log(`
╔════════════════════════════════════╗
║          ⚔️ BATTLE RESULT ⚔️         ║
╚════════════════════════════════════╝

🏆 Enemies defeated: ${defeatedEnemies}/5
🔥 Continue your legendary journey...
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
║             💀 GAME OVER 💀            ║
╚════════════════════════════════════════╝

⚰️ ${player.name} has fallen in battle...

Khazad-dûm was lost once again...
Darkness consumed the mountain...
`)

} else {

    console.log(`
╔════════════════════════════════════════╗
║              👑 VICTORY 👑            ║
╚════════════════════════════════════════╝

⚔️ ${player.name} defeated all enemies!
🏔️ The dwarves reclaimed Khazad-dûm!
🔥 Songs will be sung about this victory forever!
`)
}
