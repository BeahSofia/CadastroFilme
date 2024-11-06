document.addEventListener("DOMContentLoaded", function () {
    const jogos = JSON.parse(localStorage.getItem('jogos')) || [];

    mostrarCatalogo(jogos);
});

function mostrarCatalogo(jogos) {
    const listaJogos = document.getElementById('listaJogos');
    listaJogos.innerHTML = '';

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
