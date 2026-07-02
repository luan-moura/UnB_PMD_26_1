// Menu
const menuData = [
    { id: 1, title: "01. Apresentação", url: "01_apresentacao.html" },
    { id: 2, title: "02. Conteúdo", url: "02_ementa.html" },
    { id: 3, title: "03. Planilhas no nosso cotidiano", url: "03_cotidiano.html" },
    { id: 4, title: "04. Principais editores", url: "04_editores.html" },
    { id: 5, title: "05. Aparência dos editores", options: [
        { label: "Excel", url: "05_tela_excel.html" },
        { label: "Google", url: "05_tela_google.html" },
        { label: "Onlyoffice", url: "05_tela_onlyoffice.html" }
    ]},
    { id: 6, title: "06. Navegação pelo teclado", options: [
        { label: "Excel", url: "06_navegacao_excel.html" },
        { label: "Google", url: "06_navegacao_google.html" },
        { label: "Onlyoffice", url: "06_navegacao_onlyoffice.html" }
    ]},
    { id: 7, title: "07. Estrutura da planilha", url: "07_intervalos.html" },
    { id: 8, title: "08. Seleção pelo teclado", url: "08_selecao.html" },
    { id: 9, title: "09. Ponteiros do mouse", url: "09_ponteiros.html" },
    { id: 10, title: "10. Tema das atividades", url: "10_temas.html" },
    { id: 11, title: "11. Tipos de dados", options: [
        { label: "Água", url: "11_dados_agua.html" },
        { label: "Clima", url: "11_dados_clima.html" },
        { label: "Saúde", url: "11_dados_saude.html" }
    ]},
    { id: 12, title: "12. Formatação de tabelas", options: [
        { label: "Água", url: "12_formatacao_agua.html" },
        { label: "Clima", url: "12_formatacao_clima.html" },
        { label: "Saúde", url: "12_formatacao_saude.html" }
    ]},
    { id: 13, title: "13. Operadores matemáticos", options: [
        { label: "Água", url: "13_operadores_agua.html" },
        { label: "Clima", url: "13_operadores_clima.html" },
        { label: "Saúde", url: "13_operadores_saude.html" }
    ]},
    { id: 14, title: "14. Funções iniciais", options: [
        { label: "Água", url: "14_funcoes_agua.html" },
        { label: "Clima", url: "14_funcoes_clima.html" },
        { label: "Saúde", url: "14_funcoes_saude.html" }
    ]},
    { id: 15, title: "15. Funções Condicionais", options: [
        { label: "Água", url: "15_condicionais_agua.html" },
        { label: "Clima", url: "15_condicionais_clima.html" },
        { label: "Saúde", url: "15_condicionais_saude.html" }
    ]},
    { id: 16, title: "16. Gráficos", options: [
        { label: "Água", url: "16_graficos_agua.html" },
        { label: "Clima", url: "16_graficos_clima.html" },
        { label: "Saúde", url: "16_graficos_saude.html" }
    ]},
    { id: 17, title: "17. Impressão e exportação", options: [
        { label: "Água", url: "17_impressao_agua.html" },
        { label: "Clima", url: "17_impressao_clima.html" },
        { label: "Saúde", url: "17_impressao_saude.html" }
    ]},
    { id: 18, title: "18. Encerramento", url: "18_encerramento.html" },
    { id: 19, title: "19. Referências", url: "19_referencias.html" },
    { id: 20, title: "20. Créditos", url: "20_creditos.html" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    setupAccessibility();
    setupMenuToggle();
});

function renderMenu() {
    const sidebarNav = document.getElementById("sidebar-nav");
    if (!sidebarNav) return;
    
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    let navHTML = '<ul class="menu-list">';

    menuData.forEach(item => {
        if (item.options) {
            
            const isChildActive = item.options.some(opt => opt.url === currentPage);
            
            navHTML += `
                <li class="menu-item has-submenu">
                    <button class="submenu-toggle ${isChildActive ? 'active' : ''}">
                        ${item.title}
                    </button>
                    <ul class="submenu-list" style="${isChildActive ? `max-height: ${item.options.length * 60}px;` : ''}">
            `;
            
            item.options.forEach(opt => {
                const isOptActive = (opt.url === currentPage) ? 'active' : '';
                navHTML += `
                    <li>
                        <a href="${opt.url}" class="${isOptActive}">
                            ${opt.label}
                        </a>
                    </li>
                `;
            });
            
            navHTML += '</ul></li>';

        } else {
            const isActive = (item.url === currentPage) ? 'active' : '';
            navHTML += `
                <li class="menu-item">
                    <a href="${item.url}" class="${isActive}">
                        ${item.title}
                    </a>
                </li>
            `;
        }
    });

    navHTML += '</ul>';
    sidebarNav.innerHTML = navHTML;
    
    attachAccordionEvents();
}

function attachAccordionEvents() {
    const toggles = document.querySelectorAll(".submenu-toggle");
    
    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            
            this.classList.toggle("active");
            
            const submenu = this.nextElementSibling;
            
            
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            } else {
                
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            }
        });
    });
}

function setupMenuToggle() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    const toggleMenu = () => {
        const isOpen = sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", isOpen);
    };

    if (menuBtn && overlay) {
        menuBtn.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);
    }
}

function setupAccessibility() {
    let currentFontSize = 100;
    const root = document.documentElement;

    const increaseBtn = document.getElementById("btn-font-increase");
    const decreaseBtn = document.getElementById("btn-font-decrease");
    const contrastBtn = document.getElementById("btn-contrast");

    if (increaseBtn) {
        increaseBtn.addEventListener("click", () => {
            if (currentFontSize < 150) currentFontSize += 10;
            root.style.fontSize = currentFontSize + "%";
        });
    }

    if (decreaseBtn) {
        decreaseBtn.addEventListener("click", () => {
            if (currentFontSize > 80) currentFontSize -= 10;
            root.style.fontSize = currentFontSize + "%";
        });
    }

    if (contrastBtn) {
        contrastBtn.addEventListener("click", () => {
            document.body.classList.toggle("high-contrast");
        });
    }
}