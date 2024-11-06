document.addEventListener("DOMContentLoaded", function () {
    // Carregar jogos do localStorage
    const jogos = JSON.parse(localStorage.getItem('jogos')) || [];

    // Mostrar os jogos no catálogo
    mostrarCatalogo(jogos);
});

function mostrarCatalogo(jogos) {
    const listaJogos = document.getElementById('listaJogos');
    listaJogos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    jogos.forEach((jogo) => {
        const jogoDiv = document.createElement('div');
        jogoDiv.classList.add('jogo');
        jogoDiv.innerHTML = `
            <h3>${jogo.nome}</h3>
            <p>Tipo: ${jogo.tipo}</p>
            <p>Valor: R$ ${jogo.valor}</p>
            <p><a href="${jogo.link}" target="_blank">Comprar</a></p>
            <img src="${jogo.foto}" alt="Imagem do jogo" style="max-width: 100px;">
        `;
        listaJogos.appendChild(jogoDiv);
    });
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
