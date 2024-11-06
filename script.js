class Jogo {
    constructor(nome, link, preco, tipo, imagem) {
        this.nome = nome;
        this.link = link;
        this.preco = preco;
        this.tipo = tipo;
        this.imagem = imagem;
    }
}

const jogos = [];

function adicionarJogo() {
    const nome = document.getElementById("nome").value;
    const link = document.getElementById("link").value;
    const preco = document.getElementById("preco").value;
    const tipo = document.getElementById("tipo").value;
    const imagem = document.getElementById("imagem").value;

    const novoJogo = new Jogo(nome, link, preco, tipo, imagem);
    jogos.push(novoJogo);

    exibirJogos();
    limparFormulario();
}

function exibirJogos() {
    const listaJogos = document.getElementById("listaJogos");
    listaJogos.innerHTML = "";

    jogos.forEach((jogo, indice) => {
        const itemJogo = document.createElement("div");
        itemJogo.classList.add("item-jogo");

        itemJogo.innerHTML = `
            <h3>${jogo.nome}</h3>
            <p>Tipo: ${jogo.tipo}</p>
            <p>Valor: R$${jogo.preco}</p>
            <a href="${jogo.link}" target="_blank">Comprar</a>
            <img src="${jogo.imagem}" alt="Imagem do jogo" width="100">
            <button onclick="editarJogo(${indice})">Editar</button>
            <button onclick="deletarJogo(${indice})">Deletar</button>
        `;

        listaJogos.appendChild(itemJogo);
    });
}

function limparFormulario() {
    document.getElementById("formularioJogo").reset();
}

function deletarJogo(indice) {
    jogos.splice(indice, 1);
    exibirJogos();
}

function editarJogo(indice) {
    const jogo = jogos[indice];
    document.getElementById("nome").value = jogo.nome;
    document.getElementById("link").value = jogo.link;
    document.getElementById("preco").value = jogo.preco;
    document.getElementById("tipo").value = jogo.tipo;
    document.getElementById("imagem").value = jogo.imagem;

    jogos.splice(indice, 1); // Remove o jogo original para atualização
    exibirJogos();
}

let emVisualizacaoGestao = true;

function alternarVisualizacao() {
    emVisualizacaoGestao = !emVisualizacaoGestao;

    if (emVisualizacaoGestao) {
        document.body.style.backgroundColor = "#f4f4f9";
    } else {
        document.body.style.backgroundColor = "#e2e8f0";
        alert("Visualizando fora da gestão!");
    }
}