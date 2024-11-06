// Carregar jogos armazenados
let jogos = JSON.parse(localStorage.getItem('jogos')) || [];

document.addEventListener("DOMContentLoaded", function () {
    // Mostrar os jogos na tela
    mostrarJogos();

    // Função para adicionar um novo jogo
    document.getElementById('formularioJogo').addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

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
            // Se a edição estiver em andamento, substitui o jogo
            jogos[this.dataset.indexEdit] = novoJogo;
            delete this.dataset.indexEdit; // Limpa o índice de edição
        } else {
            // Se for novo jogo, adiciona ao array
            jogos.push(novoJogo);
        }

        // Salva os jogos no localStorage
        localStorage.setItem('jogos', JSON.stringify(jogos));

        // Limpa o formulário e atualiza a lista
        document.getElementById('formularioJogo').reset();
        mostrarJogos();
        this.querySelector('button[type="submit"]').textContent = 'Cadastrar Jogo'; // Restaura o botão para "Cadastrar Jogo"
    });
});

// Mostrar os jogos na tela
function mostrarJogos() {
    const listaJogos = document.getElementById('listaJogos');
    listaJogos.innerHTML = ''; // Limpa a lista de jogos antes de atualizá-la

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

// Editar um jogo
function editarJogo(index) {
    const jogo = jogos[index];

    // Preenche os campos do formulário com os dados do jogo
    document.getElementById('nome').value = jogo.nome;
    document.getElementById('link').value = jogo.link;
    document.getElementById('valor').value = jogo.valor;
    document.getElementById('tipo').value = jogo.tipo;
    document.getElementById('foto').value = jogo.foto;

    // Altera o título do botão para "Atualizar Jogo"
    const botaoSubmit = document.querySelector('button[type="submit"]');
    botaoSubmit.textContent = 'Atualizar Jogo';

    // Armazena o índice do jogo a ser editado no formulário
    const formularioJogo = document.getElementById('formularioJogo');
    formularioJogo.dataset.indexEdit = index; // Define um índice de edição
}

// Excluir um jogo
function excluirJogo(index) {
    if (confirm('Tem certeza que deseja excluir este jogo?')) {
        jogos.splice(index, 1); // Remove o jogo da lista
        localStorage.setItem('jogos', JSON.stringify(jogos)); // Atualiza o localStorage
        mostrarJogos(); // Atualiza a lista de jogos
    }
}

// Alternar entre Modo Claro e Modo Escuro
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}

// Adicionando o evento de clique ao botão de troca de tema
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', toggleTheme);
