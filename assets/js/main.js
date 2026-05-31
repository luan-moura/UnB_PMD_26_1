// Estado global da aplicação, rastreando o progresso, telas visitadas e histórico de navegação
let gameState = {
    currentKey: "capa",
    maxEtapaAlcancada: 1,
    ultimasTelasPorEtapa: { 1: "capa" },
    historico: [] // Pilha dinâmica para armazenar o rastro das telas visitadas (Permite a volta genérica)
};

const LOCAL_STORAGE_KEY = "sec_didatica_planilhas_v2";

/**
 * Função de inicialização do sistema. 
 * Carrega o progresso salvo do usuário, ativa os ouvintes de eventos do menu e renderiza a tela inicial.
 */
function init() {
    loadProgress();
    setupMenuEvents();
    renderScreen();
}

/**
 * Configura os eventos de clique e interações de acessibilidade do menu lateral (sidebar).
 * Controla a abertura/fechamento do menu hambúrguer e o fechamento automático ao clicar fora dele.
 */
function setupMenuEvents() {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar-menu");

    menuBtn.onclick = (e) => {
        e.stopPropagation();
        const isOpen = sidebar.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", isOpen);
    };

    document.onclick = (e) => {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    };
}

/**
 * Renderiza o conteúdo HTML da tela atual (título, texto e botões de decisão).
 * Também gerencia o teto pedagógico das etapas, classes de estilização dinâmica e comportamento mobile do menu.
 */
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

/**
 * Monta e atualiza visualmente a lista de etapas no menu lateral.
 * Libera o acesso com foco e teclado apenas para as etapas que o estudante já alcançou (teto pedagógico).
 */
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

/**
 * Controla o fluxo de transição entre os nós da história.
 * Processa o botão genérico de voltar através do histórico e gerencia o reset completo ao reiniciar a aplicação.
 */
function goToNode(nodeKey) {
    // Caso o botão acionado seja o de voltar genérico
    if (nodeKey === "voltar_tela") {
        if (gameState.historico && gameState.historico.length > 0) {
            gameState.currentKey = gameState.historico.pop(); // Remove e retorna o último elemento do histórico
        } else {
            gameState.currentKey = "capa"; // Fallback de segurança
        }
    } 
    // Tratamento especial para o botão de reset na tela final (Conclusão -> Capa)
    else if (nodeKey === "capa" && gameState.currentKey === "conclusao") {
        gameState = { currentKey: "capa", maxEtapaAlcancada: 1, ultimasTelasPorEtapa: { 1: "capa" }, historico: [] };
    } 
    // Avanço normal de tela
    else {
        // Salva a tela atual no histórico de navegação antes de mudar (evita duplicar se clicar no mesmo link)
        if (gameState.currentKey !== nodeKey) {
            if (!gameState.historico) gameState.historico = [];
            gameState.historico.push(gameState.currentKey);
        }
        gameState.currentKey = nodeKey;
    }
    renderScreen();
}

/**
 * Converte o estado atual do jogo (gameState) em texto JSON e o salva no LocalStorage do navegador.
 */
function saveProgress() { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState)); 
}

/**
 * Recupera o progresso do usuário armazenado no LocalStorage.
 * Caso os dados existam, reconstrói o estado do jogo e garante a inicialização correta da pilha de histórico.
 */
function loadProgress() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        try { 
            gameState = JSON.parse(savedData); 
            // Garante que a propriedade de histórico exista mesmo se o usuário tiver um save antigo gravado
            if (!gameState.historico) gameState.historico = []; 
        } catch (e) { 
            console.error("Erro ao carregar o progresso salvo:", e); 
        }
    }
}

// Dispara a inicialização assim que toda a página e recursos forem totalmente carregados
window.onload = init;