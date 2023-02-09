let autores = [];
const inputPesquisa = document.getElementById('filtro-pesquisa')
const btnFiltro = document.querySelectorAll("[data-filtro-btn]");
const alertaSemPostagensComTitulo = document.getElementById('sempostagens')
btnFiltro.forEach(btn => {
    btn.addEventListener('click', filtrarBtn)
})

function filtrarBtn(){
    if(this.value === "pesquisar"){ 
        let postagemFiltradaTitulo = []
        postagemFiltradaTitulo.push(postagens.find(post => post.title == inputPesquisa.value));
        inputPesquisa.value = '';
        console.log(postagemFiltradaTitulo)
        if(postagemFiltradaTitulo == ''){
            alertaSemPostagensComTitulo.classList ='inline__container sempostagens';
            sectionPosts.innerHTML = "";
           
        }else{
            postar(postagemFiltradaTitulo);
        }
        
    }else if(this.value === "crescente"){
        let postFiltradosCrescente = postagens.sort((a,b) => a.id - b.id)
        alertaSemPostagensComTitulo.classList = 'none__container';
        postar(postFiltradosCrescente);
    }else if(this.value === "decrecente"){
        let postFiltradosDecrecente = postagens.sort((a,b) => b.id - a.id)
        alertaSemPostagensComTitulo.classList = 'none__container';
        postar(postFiltradosDecrecente);
    }else if(this.value === "limpar-filtro"){
        alertaSemPostagensComTitulo.classList = 'none__container';
        postar(postagens);
    }
    
}

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