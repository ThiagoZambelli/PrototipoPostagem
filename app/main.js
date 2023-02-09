const postRequisicao = 'https://jsonplaceholder.typicode.com/posts';
const userRequisicao = 'https://jsonplaceholder.typicode.com/users';
let usuarios = [];
let postagens = [];

postagemRequest();


async function postagemRequest(){
    autorRequest();
    const res = await fetch(postRequisicao);
    postagens = await res.json();       
    postar(postagens);         
}
async function autorRequest(){
    const res = await fetch(userRequisicao);
    usuarios = await res.json();
}

