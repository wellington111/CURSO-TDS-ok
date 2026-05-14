// ATIVIDADE 1
function novoUsuario(nome, idade, cidade, hobbies){
    let usuario = [] 
    usuario.push(nome)
    usuario.push(idade)
    usuario.push(cidade)
    usuario.push(hobbies)
    
    return usuario 
} 

// ATIVIDADE 2

function formatarHobbies(hobbies){
    return hobbies.join(", ");
}

// ATIVIDADE 3
function gerarDescricao(usuario){
    return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${usuario[3]}`
}

//ATIVIDADE 4
const usuarios = []
function adicionarUsuario(usuarios, usuario){
    usuarios.push(usuario)
    return usuarios
}

function gerarRelatorio(usuarios){
    return `Total de usuários: ${usuarios.length}`
}

let user1 = novoUsuario("Wellington", 17, "Sao Leopoldo", ['musica', 'bike', 'video game']) 
console.log(user1)

let descricao = gerarDescricao(user1)
console.log(descricao)

let hobbiesFormatados = formatarHobbies(user1[3])
console.log(hobbiesFormatados)

let user2 = novoUsuario("Nicoly", 15, "Sao leo", ['Igreja', 'viagem', 'louvor'])
console.log(user2)

let chamar = adicionarUsuario(usuarios, user1)
console.log(user1)

let chamar2 = adicionarUsuario(usuarios, user2)
console.log(user2)

let relatorio = gerarRelatorio(usuarios)
console.log(relatorio)