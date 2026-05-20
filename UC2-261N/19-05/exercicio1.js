
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
  
console.log(filme.elenco[0], filme.personagens[0], filme.elenco[1], filme.personagens[1], filme.elenco[2], filme.personagens[2], filme.elenco[3], filme.personagens[3], filme.elenco[4], filme.personagens[4], filme.elenco[5], filme.personagens[5])

filme.elenco = 'Xuxa'

console.log(filme.elenco)