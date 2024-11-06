let jogos = [];

function adicionarJogo() {
    const nome = document.getElementById("nome").value;
    const link = document.getElementById("link").value;
    const valor = document.getElementById("valor").value;
    const tipo = document.getElementById("tipo").value;
    const foto = document.getElementById("foto").value;

    const novoJogo = {
        nome,
        link,
        valor,
        tipo,
        foto
    };

    jogos.push(novoJogo);
    atualizarLista();
    document.getElementById("formularioJogo").reset();
}

function atualizarLista() {
    const listaJogos = document.getElementById("listaJogos");
    listaJogos.innerHTML = "";

    jogos.forEach((jogo, index) => {
        const jogoDiv = document.createElement("div");
        jogoDiv.classList.add("jogo");

        jogoDiv.innerHTML = `
            <div>
                <h2>${jogo.nome}</h2>
                <p><strong>Link:</strong> <a href="${jogo.link}" target="_blank">${jogo.link}</a></p>
                <p><strong>Valor:</strong> R$${jogo.valor}</p>
                <p><strong>Tipo:</strong> ${jogo.tipo}</p>
            </div>
            <div>
                <img src="${jogo.foto}" alt="Foto do jogo">
                <button onclick="editarJogo(${index})">Editar</button>
                <button onclick="excluirJogo(${index})">Excluir</button>
            </div>
        `;

        listaJogos.appendChild(jogoDiv);
    });
}

function editarJogo(index) {
    const jogo = jogos[index];

    document.getElementById("nome").value = jogo.nome;
    document.getElementById("link").value = jogo.link;
    document.getElementById("valor").value = jogo.valor;
    document.getElementById("tipo").value = jogo.tipo;
    document.getElementById("foto").value = jogo.foto;

    excluirJogo(index);
}

function excluirJogo(index) {
    jogos.splice(index, 1);
    atualizarLista();
}

function alternarVisualizacao() {
    const novaPagina = window.open("", "_blank");
    novaPagina.document.write("<html><head><title>Lista de Jogos</title></head><body>");
    novaPagina.document.write("<h1>Lista de Jogos Cadastrados</h1>");

    jogos.forEach(jogo => {
        novaPagina.document.write(`
            <div>
                <h2>${jogo.nome}</h2>
                <p><strong>Link:</strong> <a href="${jogo.link}" target="_blank">${jogo.link}</a></p>
                <p><strong>Valor:</strong> R$${jogo.valor}</p>
                <p><strong>Tipo:</strong> ${jogo.tipo}</p>
                <img src="${jogo.foto}" alt="Foto do jogo" style="width: 150px; height: 150px;">
                <hr>
            </div>
        `);
    });

    novaPagina.document.write("</body></html>");
    novaPagina.document.close();
}

document.getElementById("formularioJogo").addEventListener("submit", function(event) {
    event.preventDefault();
    adicionarJogo();
});

document.getElementById("visualizarForaDaGestao").addEventListener("click", function() {
    alternarVisualizacao();
});