
function buscaAutor(idAutor){    
    let usuarioDaPostagem = usuarios.find(user => user.id === idAutor);
    return usuarioDaPostagem.name    
}