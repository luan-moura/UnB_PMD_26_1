let gameState = {
    currentKey: "capa",
    maxEtapaAlcancada: 1,
    ultimasTelasPorEtapa: { 1: "capa" }
};

const LOCAL_STORAGE_KEY = "sec_didatica_planilhas_v2";

function init() {
    loadProgress();
    setupMenuEvents();
    renderScreen();
}

// Configura os cliques do Ícone Hambúrguer
function setupMenuEvents() {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar-menu");

    menuBtn.onclick = (e) => {
        e.stopPropagation();
        const isOpen = sidebar.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", isOpen);
    };

    // Fecha o menu se clicar fora dele (comportamento Mobile profissional)
    document.onclick = (e) => {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    };
}

function renderScreen() {
    const appContainer = document.getElementById("app");
    const currentData = storyData[gameState.currentKey];

    if (!currentData) return;

    // Atualização de segurança do teto pedagógico alcançado
    if (currentData.etapa > gameState.maxEtapaAlcancada) {
        gameState.maxEtapaAlcancada = currentData.etapa;
    }

    gameState.ultimasTelasPorEtapa[currentData.etapa] = gameState.currentKey;
    saveProgress();

    // Acessibilidade / Estética: Se o texto for menor que 160 caracteres, centraliza verticalmente
    if (currentData.texto.length < 160) {
        appContainer.classList.add("texto-curto");
    } else {
        appContainer.classList.remove("texto-curto");
    }

    // Identificação de classes css dinâmicas conforme a quantidade de botões
    const qtdBotoes = currentData.botoes.length;
    const btnGroupClass = `btn-group botoes-${qtdBotoes}`;

    let htmlContent = `
        <h1>${currentData.titulo}</h1>
        <div class="story-text"><p>${currentData.texto}</p></div>
        <div class="${btnGroupClass}">
    `;

    currentData.botoes.forEach((botao, index) => {
        let btnClass = "story-btn btn-secondary";
        if (qtdBotoes === 1 || index === qtdBotoes - 1) {
            btnClass = "story-btn btn-primary";
        }
        htmlContent += `
            <button class="${btnClass}" onclick="goToNode('${botao.destino}')">
                ${botao.texto}
            </button>
        `;
    });

    htmlContent += `</div>`;
    appContainer.innerHTML = htmlContent;

    // Fecha a barra lateral automaticamente ao mudar de tela em telas menores
    if (window.innerWidth <= 768) {
        document.getElementById("sidebar-menu").classList.remove("open");
        document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
    }

    renderMenu();
}

function renderMenu() {
    const menuContainer = document.getElementById("navigation-menu");
    menuContainer.innerHTML = "";

    etapasConfig.forEach(etapa => {
        const li = document.createElement("li");
        li.textContent = etapa.nome;

        if (etapa.id <= gameState.maxEtapaAlcancada) {
            li.className = "menu-item-accessible";
            li.setAttribute("role", "button");
            li.setAttribute("tabindex", "0");
            li.onclick = () => {
                let destinoTela = gameState.ultimasTelasPorEtapa[etapa.id];
                
                // Se o aluno nunca clicou na etapa ramificada por aquele menu, acha uma tela padrão condizente
                if (!destinoTela) {
                    destinoTela = Object.keys(storyData).find(key => storyData[key].etapa === etapa.id);
                }
                
                if (destinoTela) goToNode(destinoTela);
            };
            li.onkeypress = (e) => { if (e.key === 'Enter') li.onclick(); };
        } else {
            li.className = "menu-item-disabled";
            li.setAttribute("aria-disabled", "true");
        }
        menuContainer.appendChild(li);
    });
}

function goToNode(nodeKey) {
    // Tratamento especial para o botão de reset na tela final
    if(nodeKey === "capa" && gameState.currentKey === "e11_conclusao") {
        gameState = { currentKey: "capa", maxEtapaAlcancada: 0, ultimasTelasPorEtapa: { 0: "capa" } };
    } else {
        gameState.currentKey = nodeKey;
    }
    renderScreen();
}

function saveProgress() { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState)); }
function loadProgress() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        try { gameState = JSON.parse(savedData); } catch (e) { console.error(e); }
    }
}

window.onload = init;