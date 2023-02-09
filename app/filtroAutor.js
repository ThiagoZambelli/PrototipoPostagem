let autores = [];

function btnFiltarAutor(){
    autores = document.querySelectorAll("#postagem-autor")
    
    clicarAutor(autores);
}


function clicarAutor(lista){
    lista.forEach(item => {
        item.addEventListener('click', filtrarAutor)
    })
}
function filtrarAutor(){
    const autorClicado = this;
    const idClicado = usuarios.find(item => item.name === autorClicado.innerHTML);
    const postagensFiltradasPorAutor = postagens.filter(post =>{         
        return post.userId === idClicado.id;
    })
    postar(postagensFiltradasPorAutor);    
    
}