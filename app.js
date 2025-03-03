//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let inputAmigo = document.getElementById ('amigo');
    let nomeAmigo = inputAmigo.value;

    if(!nomeAmigo){
        alert("Não digitado nenhum nome");
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista();
}

function atualizarlista(){
    let listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent =amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length < 3 || amigos.length == 0){
        alert("Poucos amigos para o sorteio, adicione ao menos 3 pessoas!");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo que foi escolhido foi o ${sorteado}, parabéns!`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];
}
