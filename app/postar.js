let sectionPosts = document.getElementById("postagens");


function postar(listaDePostagens){
    sectionPosts.innerHTML = "";
    listaDePostagens.forEach(post => {
        let corpo = post.body;
        let titulo = post.title;
        let idAutor = post.userId;
        let autor = buscaAutor(idAutor);            
        sectionPosts.innerHTML += `
            <section class="postagem flex__container" id="postagem">
                <section class="postagem-cabecalho flex__container">
                    <img src="img/avatar.png" alt="Avatar do usuario" class="postagem-avatar" id="postagem-avatar">
                    <h3 class="postagem-autor" id="postagem-autor">${autor}</h3>
                </section>
                <section class="postagem-corpo flex__container">
                    <h2 class="postagem-titulo" id="postagem-titulo">${titulo}</h2>
                    <p class="postagem-corpo" id="postagem-corpo">${corpo}</p>
                </section>
            </section>
        `;            
    });
    btnFiltarAutor();         
}
