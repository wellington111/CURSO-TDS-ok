
const filme = {
    nomeDirector: 'Louis Leterrier',
    nomeFilme: 'Velozes e furiosos 10',
    anoDeLancamento: 2023,
    elenco: ['Vin Diesel', 'Alan Ritchson', 'Jason Momoa', 'Rita Moreno', 'Brie Larson', 'Jason Statham'],
    propriedade: true
}
console.log(filme.nomeDirector)
console.log(filme.nomeFilme)
console.log(filme['anoDeLancamento'])
console.log(filme['elenco'])
console.log(filme.propriedade)

filme.personagens = [
    "Um carinha qualquer",
    'Outro carinha qualquer',
    'Outro carinha qualquer',
    'outro carinha qualquer chamado Rosevaldo',
    'Outro crainha chamado Renato portallupi',
    'O carinha mais esperado Leo da UC2'
]

for (let i = 0; i < filme.elenco.length; i++) {
    console.log(`${filme.elenco[i]} - ${filme.personagens[i]}`)
}
filme.elenco = 'Xuxa'

console.log(filme.personagens)