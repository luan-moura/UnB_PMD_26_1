// Menu
const menuData = [
    { id: 1, title: "1. Início", options: [
        { label: "Apresentação", url: "index.html" },
        { label: "Ementa", url: "ementa.html" }
    ]},
    { id: 2, title: "2. Cotidiano", url: "cotidiano.html" },
    { id: 3, title: "3. Editores", options: [
        { label: "Visão Geral", url: "editores.html" },
        { label: "Tela", 
            suboptions: [
                { label: "Excel", url: "tela_excel.html" },
                { label: "Google", url: "tela_google.html" },
                { label: "OnlyOffice", url: "tela_onlyoffice.html" }
            ]
        },
        { label: "Navegação", 
            suboptions: [
                { label: "Excel", url: "navegacao_excel.html" },
                { label: "Google", url: "navegacao_google.html" },
                { label: "OnlyOffice", url: "navegacao_onlyoffice.html" }
            ]
        }
    ]},
    { id: 4, title: "4. Interfaces", options: [
        { label: "Intervalos", url: "intervalos.html" }, // Ajustado para não repetir a label "Seleção"
        { label: "Seleção", url: "selecao.html" },
        { label: "Ponteiros", url: "ponteiros.html" },
        { label: "Temas", url: "temas.html" }
    ]},
    { id: 5, title: "5. Tipos de Dados", options: [
        { label: "Saúde", url: "dados_saude.html" },
        { label: "Água", url: "dados_agua.html" },
        { label: "Clima", url: "dados_clima.html" }
    ]},
    { id: 6, title: "6. Formatações", options: [
        { label: "Saúde", url: "formatacao_saude.html" },
        { label: "Água", url: "formatacao_agua.html" },
        { label: "Clima", url: "formatacao_clima.html" }
    ]},
    { id: 7, title: "7. Operadores", options: [
        { label: "Saúde", url: "operadores_saude.html" },
        { label: "Água", url: "operadores_agua.html" },
        { label: "Clima", url: "operadores_clima.html" }
    ]},
    { id: 8, title: "8. Funções Iniciais", options: [
        { label: "Saúde", url: "funcoes_saude.html" },
        { label: "Água", url: "funcoes_agua.html" },
        { label: "Clima", url: "funcoes_clima.html" }
    ]},
    { id: 9, title: "9. Condicionais", options: [
        { label: "Saúde", url: "condicionais_saude.html" },
        { label: "Água", url: "condicionais_agua.html" },
        { label: "Clima", url: "condicionais_clima.html" }
    ]},
    { id: 10, title: "10. Gráficos", options: [
        { label: "Saúde", url: "graficos_saude.html" },
        { label: "Água", url: "graficos_agua.html" },
        { label: "Clima", url: "graficos_clima.html" }
    ]},
    { id: 11, title: "11. Impressão", options: [
        { label: "Saúde", url: "impressao_saude.html" },
        { label: "Água", url: "impressao_agua.html" },
        { label: "Clima", url: "impressao_clima.html" }
    ]},
    { id: 12, title: "12. Conclusão", options: [
        { label: "Encerramento", url: "Campamento.html" },
        { label: "Referências", url: "referencias.html" },
        { label: "Créditos", url: "creditos.html" }
    ]}
];

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    setupAccessibility();
    setupMenuToggle();
});

function renderMenu() {
    const sidebarNav = document.getElementById("sidebar-nav");
    if (!sidebarNav) return;
    
    // Pega o nome do arquivo atual (ex: "index.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    let navHTML = '<ul class="menu-list">';

    menuData.forEach(item => {
        // Verifica se algum filho está ativo para manter o pai expandido (sem colorir o pai)
        const isChildActive = item.options && item.options.some(opt => 
            opt.url === currentPage || (opt.suboptions && opt.suboptions.some(sub => sub.url === currentPage))
        );

        const isActive = (item.url === currentPage) ? 'active' : '';

        if (item.options) {
            navHTML += `<li class="menu-item has-submenu">
                <button class="submenu-toggle ${isChildActive ? 'active-parent' : ''}">${item.title}</button>
                <ul class="submenu-list" style="${isChildActive ? 'max-height: 2000px;' : ''}">`;
            
            item.options.forEach(opt => {
                if (opt.suboptions) {
                    navHTML += `<li class="has-submenu">
                        <button class="submenu-toggle sub-toggle">${opt.label}</button>
                        <ul class="submenu-list">${opt.suboptions.map(sub => 
                            `<li><a href="${sub.url}" class="${sub.url === currentPage ? 'active' : ''}">${sub.label}</a></li>`
                        ).join('')}</ul>
                    </li>`;
                } else {
                    navHTML += `<li><a href="${opt.url}" class="${opt.url === currentPage ? 'active' : ''}">${opt.label}</a></li>`;
                }
            });
            navHTML += '</ul></li>';
        } else {
            navHTML += `<li class="menu-item"><a href="${item.url}" class="${isActive}">${item.title}</a></li>`;
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
            // Alterna a classe ativa do botão
            this.classList.toggle("active");
            
            const submenu = this.nextElementSibling;
            
            // Lógica de abertura/fechamento
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            } else {
                // Calcula a altura real de todo o conteúdo interno
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                
                // IMPORTANTE: Se este submenu estiver dentro de outro submenu,
                // precisamos avisar o pai para recalcular a altura dele também
                let parentSubmenu = this.closest('.submenu-list');
                if (parentSubmenu && parentSubmenu !== submenu) {
                    parentSubmenu.style.maxHeight = (parentSubmenu.scrollHeight + submenu.scrollHeight) + "px";
                }
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
        menuBtn.setAttribute("aria-expanded", isOpen);
    };

    if (menuBtn && overlay) {
        menuBtn.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);
    }
}

function setupAccessibility() {
    let currentFontSize = 100;
    const root = document.documentElement;

    document.getElementById("btn-font-increase").addEventListener("click", () => {
        if (currentFontSize < 150) currentFontSize += 10;
        root.style.fontSize = currentFontSize + "%";
    });

    document.getElementById("btn-font-decrease").addEventListener("click", () => {
        if (currentFontSize > 80) currentFontSize -= 10;
        root.style.fontSize = currentFontSize + "%";
    });

    document.getElementById("btn-contrast").addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
    });
}