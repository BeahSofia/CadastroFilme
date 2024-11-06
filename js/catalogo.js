document.addEventListener("DOMContentLoaded", function () {
    const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
    mostrarCatalogo(jogos);
});

function mostrarCatalogo(jogos) {
    const listaJogos = document.getElementById('listaJogos');
    listaJogos.innerHTML = '';  // Limpar o conteúdo existente

    jogos.forEach((jogo) => {
        const jogoDiv = document.createElement('div');
        jogoDiv.classList.add('catalog-item');

        jogoDiv.innerHTML = `
            <img src="${jogo.foto}" alt="Imagem do jogo" class="catalog-item-img">
            <div class="catalog-item-content">
                <h2>${jogo.nome}</h2>
                <p>Tipo: ${jogo.tipo}</p>
                <p>Valor: R$ ${jogo.valor}</p>
                <a href="${jogo.link}" target="_blank" class="btn-comprar">Comprar</a>
            </div>
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
