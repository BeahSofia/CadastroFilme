let jogos = JSON.parse(localStorage.getItem('jogos')) || [];

document.addEventListener("DOMContentLoaded", function () {
    mostrarJogos();

    document.getElementById('formularioJogo').addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const link = document.getElementById('link').value;
        const valor = document.getElementById('valor').value;
        const tipo = document.getElementById('tipo').value;
        const foto = document.getElementById('foto').value;

        const novoJogo = {
            nome,
            link,
            valor,
            tipo,
            foto,
        };

        if (this.dataset.indexEdit !== undefined) {
            jogos[this.dataset.indexEdit] = novoJogo;
            delete this.dataset.indexEdit;
        } else {
            jogos.push(novoJogo);
        }

        localStorage.setItem('jogos', JSON.stringify(jogos));

        document.getElementById('formularioJogo').reset();
        mostrarJogos();
        this.querySelector('button[type="submit"]').textContent = 'Cadastrar Jogo';
    });
});

function mostrarJogos() {
    const listaJogos = document.getElementById('listaJogos');
    listaJogos.innerHTML = '';

    jogos.forEach((jogo, index) => {
        const jogoDiv = document.createElement('div');
        jogoDiv.classList.add('jogo');
        jogoDiv.innerHTML = `
            <h3>${jogo.nome}</h3>
            <p>Tipo: ${jogo.tipo}</p>
            <p>Valor: R$ ${jogo.valor}</p>
            <p><a href="${jogo.link}" target="_blank">Comprar</a></p>
            <img src="${jogo.foto}" alt="Imagem do jogo" style="max-width: 100px;">
            <button onclick="editarJogo(${index})">Editar</button>
            <button onclick="excluirJogo(${index})">Excluir</button>
        `;
        listaJogos.appendChild(jogoDiv);
    });
}

function editarJogo(index) {
    const jogo = jogos[index];

    document.getElementById('nome').value = jogo.nome;
    document.getElementById('link').value = jogo.link;
    document.getElementById('valor').value = jogo.valor;
    document.getElementById('tipo').value = jogo.tipo;
    document.getElementById('foto').value = jogo.foto;

    const botaoSubmit = document.querySelector('button[type="submit"]');
    botaoSubmit.textContent = 'Atualizar Jogo';

    const formularioJogo = document.getElementById('formularioJogo');
    formularioJogo.dataset.indexEdit = index;
}

function excluirJogo(index) {
    if (confirm('Tem certeza que deseja excluir este jogo?')) {
        jogos.splice(index, 1);
        localStorage.setItem('jogos', JSON.stringify(jogos));
        mostrarJogos(); 
    }
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', toggleTheme);
