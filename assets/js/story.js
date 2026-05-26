const storyData = {
    
    // === ETAPA 1: Apresentação ===
    capa: {
        etapa: 1, 
        titulo: "Introdução a Planilhas Eletrônicas",
        texto: "Olá, seja bem-vindo à nossa sequência didática de Introdução a planilhas eletrônicas! Nosso objetivo será te apresentar ao universo das planilhas eletrônicas através de situações ou problemas cotidianos que qualquer pessoa pode enfrentar.<br><br>Ao final desta jornada, esperamos que você aprenda a manipular as planilhas para organizar dados, produzir informação, fazer análises e compartilhar conhecimento.<br><br>Você está preparado?",
        botoes: [
            { 
                texto: "Iniciar", 
                destino: "jornada" 
            }
        ]
    },
    jornada: {
        etapa: 1, 
        titulo: "Nossa sequência didática",
        texto: "Nossa jornada passará por: Interfaces, Tipos de dados, Formatação, Operadores, Funções Iniciais, Funções Condicionais, Gráficos e Configurações de Impressão.",
        botoes: [
            { 
                texto: "Retornar", 
                destino: "capa" 
            }, 
            { 
                texto: "Continuar", 
                destino: "cotidiano" 
            }
        ]
    },

    // === ETAPA 2: As Planilhas no Nosso Cotidiano ===
    cotidiano: {
        etapa: 2, 
        titulo: "As planilhas no cotidiano",
        texto: "Olhando ao seu redor, você já parou para pensar em como as informações chegam até nós todos os dias? Muitas vezes, sem perceber, nossos olhos observam o mundo e a nossa mente busca identificar comportamentos e padrões nos acontecimentos ao redor. A depender da situação, nosso olhar acha uma estrutura muito conhecida e poderosa: as tabelas.<br><br>Elas estão presentes na nossa vida em muito mais coisas do que a gente imagina. Quase tudo que exige organização, planejamento ou clareza é distribuído em linhas e colunas. Esse padrão de layout não existe por acaso; ele foi desenhado para facilitar a nossa mente na busca e na localização rápida de informações. Quer ver só?<br><br>Pense no calendário pendurado na parede ou na tela do seu celular. O que ele é, senão uma tabela clássica? Dias da semana nas colunas, semanas do mês nas linhas. E a grade horária das disciplinas escolares? Segunda, terça, quarta... cada matéria encaixada no seu quadrado, cruzando o dia com o horário exato. O mesmo acontece quando você pesquisa o horário de funcionamento de um posto de saúde ou de um supermercado nas redes sociais. A estrutura de grade está lá, simplificando sua vida.<br><br>Até nos momentos burocráticos da vida, as tabelas guiam nossas decisões. Quando você recebe um cupom fiscal no mercado, cada item comprado ocupa uma linha, dividida em colunas invisíveis de quantidade, valor unitário e preço total. E quando a conta de água ou de energia elétrica chega na sua casa, além do valor e do vencimento, o que mais chama a sua atenção? Provavelmente será aquele gráfico ou aquela tabela com o histórico de consumo dos últimos doze meses. Ali, olhando linha por linha, você descobre se gastou mais no verão ou no inverno e consegue planejar o orçamento do próximo mês.<br><br>Se quisermos, podemos estender essa organização de informações para uma infinidade de coisas. Por exemplo, quando você está nas redes sociais e vai rolando a tela, cada postagem é como se fosse uma linha de uma tabela infinita em uma única coluna, onde cada linha está organizada de um jeito que você sabe exatamente a localização da informação de quem postou, o que postou, quando postou e quantas curtidas, compartilhamentos ou comentários foram feitos.<br><br>E se você reparar bem, essa mesma lógica está por trás das grandes manchetes que vemos nos jornais da TV ou nas postagens da internet. Os repórteres traduzem tabelas o tempo todo para nos contar o que está acontecendo no mundo.<br><br>Quando a televisão faz um alerta preocupante sobre o aumento de casos de dengue no nosso estado ou mostra o resultado de um mutirão de vacinação, o que sustenta aquela notícia são informações que foram organizadas em uma imensa tabela. Alguém ou algum sistema, em um computador da Secretaria de Saúde, precisou analisar e somar as linhas com os registros de notificações de cada bairro para saber onde a situação é mais crítica.<br><br>O mesmo acontece quando vemos notícias sobre a crise climática e o meio ambiente. Seja ao falar do aumento do desmatamento na Amazônia ou ao anunciar que batemos o recorde do ano mais quente da história, os especialistas dependem das planilhas. Eles passam meses coletando milhares de dados científicos em tabelas com a ajuda de sistemas de monitoramento computadorizado para que, no final, o cruzamento de informações nos mostre com clareza o tamanho do impacto das ações humanas no planeta.<br><br>Até aquela notícia sobre os reservatórios de água da nossa região estarem operando no nível vermelho segue essa regra. A reportagem geralmente exibe na tela um histórico com as últimas medições, organizadas por datas e volumes em metros cúbicos. Olhando essa tabela disfarçada de notícia, a sociedade entende a necessidade de economizar água e os cientistas conseguem estimar o tempo que teremos até o abastecimento colapsar.<br><br>Percebe como as tabelas moldam nossa visão da realidade? Dominar as planilhas eletrônicas não serve só para aprender a digitar números em um computador para trabalhar em um escritório. É desenvolver autonomia. É aprender a ler o mundo através dos dados para poder agir no mundo com informação, tendo a capacidade de entender os problemas, refletir sobre soluções e propor transformações.<br><br>Você está prestes a dar os primeiros passos para dominar essa ferramenta e aprender a construir essas estruturas. Vamos continuar?",
        botoes: [
            { 
                texto: "Retornar", 
                destino: "jornada" 
            }, 
            { 
                texto: "Continuar", 
                destino: "ferramentas" 
            }
        ]
    },

// === ETAPA 3: Diferentes Ferramentas ===
    ferramentas: {
        etapa: 3, 
        titulo: "3. Diferentes Ferramentas para Criar Planilhas",
        texto: `
            Para começar a criar nossas tabelas, precisamos escolher nossa ferramenta de trabalho. Hoje, o mundo da tecnologia se divide em dois caminhos principais:<br><br>
            <b>1º. Editores em Nuvem (Online):</b> Como o Google Planilhas e o Microsoft Excel Web. Eles funcionam no próprio navegador e salvam as alterações automaticamente. São excelentes para trabalhos em grupo, mas exigem conexão constante com a internet.<br><br>
            <b>2º. Editores Locais (Instalados):</b> Como o Microsoft Excel clássico, o LibreOffice Calc e o OnlyOffice. Eles funcionam em aplicação instalada no computador, sem a necessidade de conexão com a internet, mas precisam da nossa atenção para salvar todas as alterações feitas no arquivo.<br><br>
            Algumas dessas aplicações também estão disponíveis para celulares e tablets. Porém, saiba que elas são versões diferentes daquelas do computador, possuindo telas modificadas e funcionalidades mais limitadas.<br><br>
            A seguir, conhecemos um pouco mais sobre cada uma das ferramentas citadas:<br><br>
            
            <div class="tabela-ferramentas">
                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/google_sheets_icon.png" alt="Ícone do Google Planilhas" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>Google Planilhas:</b> É um editor online e gratuito disponível para as contas criadas na Google. A ferramenta está integrada ao Google Drive. Sua grande vantagem é o salvamento automático instantâneo, a facilidade para compartilhar o arquivo e permitir que outras pessoas editem a planilha ao mesmo tempo. Como ponto negativo, ele depende necessariamente de internet e seus recursos para avançados para automações são mais limitados que as versões instaladas.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/microsoft_office_Excel_icon.png" alt="Ícone do Microsoft Excel Web" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>Microsoft Excel 365:</b> É uma versão online do Microsoft Excel Desktop que funciona em qualquer navegador, desde que tenha conexão de internet. É uma ferramenta paga, cuja assinatura também inclui outras ferramentas de escritório. De forma gratuita, a Microsoft permite a visualização de arquivos e edições básicas. Como trata-se de uma versão web, algumas ferramentas avançadas não conseguem ser aplicadas.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/microsoft_office_Excel_icon.png" alt="Ícone do Microsoft Excel Desktop" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>Microsoft Excel Desktop:</b> É o editor instalado mais famoso e utilizado no mercado profissional mundial. É uma ferramenta extremamente completa para a manipulação de planilhas do básico ao avançado, capaz de processar milhões de dados e gráficos complexos sem travamentos. O principal ponto negativo é que se trata de um software comercial pago, exigindo a compra de uma licença ou assinatura ativa.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/libreoffice_icon.png" alt="Ícone do LibreOffice Calc" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>LibreOffice Calc:</b> É um editor de planilhas instalado no computador, totalmente gratuito e de código aberto (Software Livre). Funciona perfeitamente sem internet e consome pouca memória do computador, sendo ideal para máquinas antigas. Como desvantagem, sua interface visual tem uma aparência mais antiga, e ele pode desconfigurar pequenos detalhes visuais ao abrir arquivos criados originalmente no Excel. Em atualizações recentes é possível configurar algumas formas de visualização, mas ainda assim o visual é o menos intuitivo.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/onlyoffice_icon.png" alt="Ícone do OnlyOffice" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>OnlyOffice:</b> É um aplicativo gratuito disponível tanto para computadores quanto para celulares e tablets. No computador, ele se destaca por sua interface moderna em abas (muito parecida com as versões recentes do Excel) e por sua altíssima compatibilidade com arquivos do tipo .xlsx. Já nos celulares, sua tela é totalmente simplificada e adaptada para comandos de toque, possuindo recursos mais limitados que a versão de PC e possibilitando acessar arquivos de planilhas em nuvens como Google Drive, OneDrive ou Dropbox.</p>
                    </div>
                </div>
            </div>

            <div class="caixa-voce-sabia verde-excel">
                <h4>Você Sabia?</h4>
                <p>No Brasil, a falta de conectividade estável à internet ainda afeta milhões de estudantes, principalmente nas periferias e zonas rurais. Pesquisas de órgãos como o https://cgi.br/ apontam que muitas famílias de baixa renda acessam a internet exclusivamente pelo celular, com planos de dados limitados que bloqueiam o acesso após o consumo da franquia. Para evitar a dependência da internet, é recomendado o uso de softwares instalados, como o LibreOffice ou OnlyOffice.</p>
            </div>

            Considerando as explicações sobre as principais ferramentas de edição de planilhas eletrônicas, qual delas você gostaria de aprender?</p>
        `,
        botoes: [
            { texto: "Voltar", destino: "cotidiano" },
            { texto: "Excel", destino: "ambiente_excel" },
            { texto: "Google Planilhas", destino: "ambiente_google" },
            { texto: "OnlyOffice", destino: "ambiente_onlyoffice" }
        ]
    },

    // ================= RAMIFICAÇÕES DA ETAPA 3 (AMBIENTES VISUAIS) =================

    ambiente_excel: {
        etapa: 3,
        titulo: "Conhecendo a Tela do Microsoft Excel",
        texto: `
            Você escolheu o <b>Microsoft Excel</b>. Antes de começarmos a digitar, observe atentamente a imagem do programa abaixo e localize cada um dos seus elementos principais:<br><br>
            
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen.png" alt="Imagem da área de trabalho do Excel" style="width: 100%; height: auto;"></div>
            </div><br>

            <ul class="lista-componentes">
                <li><b>Barra de Ferramentas de Acesso Rápido:</b> Fica no topo esquerdo. Serve para salvar, desfazer e refazer ações com um único clique.</li>
                <li><b>Guias de Menus (Faixa de Opções):</b> Localizada logo abaixo do topo (Página Inicial, Inserir, Fórmulas...). Cada guia abre um conjunto diferente de blocos de botões.</li>
                <li><b>Barra de Fórmulas:</b> A linha horizontal comprida logo acima da grade. Ela exibe o conteúdo real ou o cálculo que está escondido dentro da célula selecionada.</li>
                <li><b>Área de Trabalho (Grade de Células):</b> O espaço principal composto pelo cruzamento de Linhas (números) e Colunas (letras).</li>
                <li><b>Barra de Status:</b> Fica no rodapé da janela. Exibe mensagens do sistema e atalhos rápidos de Zoom para aumentar ou diminuir o tamanho da tela.</li>
            </ul>
        `,
        botoes: [
            { texto: "Voltar", destino: "ferramentas" },
            { texto: "Continuar", destino: "interface_excel" }
        ]
    },

    ambiente_google: {
        etapa: 3,
        titulo: "Conhecendo a Tela do Google Planilhas",
        texto: `
            Você escolheu o <b>Google Planilhas</b>. Como ele roda direto no seu navegador de internet, a disposição visual de algumas ferramentas muda um pouco. Observe os componentes básicos na imagem abaixo:<br><br>
            
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_sheets_screen.png" alt="Imagem da área de trabalho do Google Planilhas" style="width: 100%; height: auto;"></div>
            </div>

            <ul class="lista-componentes">
                <li><b>Menu de Linha de Texto:</b> Diferente do Excel, ele usa menus tradicionais em formato de lista (Arquivo, Editar, Ver, Inserir...) que abrem para baixo ao clicar.</li>
                <li><b>Barra de Atalhos Ícones:</b> Fica logo abaixo do menu. Traz os botões mais usados, como formatação de texto, moedas e inserção de links.</li>
                <li><b>Indicador de Salvamento (Nuvem):</b> Um pequeno ícone de nuvem perto do nome do arquivo que mostra se as alterações já foram salvas na internet de forma segura.</li>
                <li><b>Área de Trabalho:</b> A grade onde você criará as tabelas, identificando as células pelo encontro das letras das colunas com os números das linhas.</li>
                <li><b>Barra Inferior de Planilhas:</b> Local onde você pode criar novas páginas (abas) dentro do mesmo arquivo de forma rápida.</li>
            </ul>
        `,
        botoes: [
            { texto: "Voltar", destino: "ferramentas" },
            { texto: "Continuar", destino: "interface_google" }
        ]
    },

    ambiente_onlyoffice: {
        etapa: 3,
        titulo: "Conhecendo a Tela do OnlyOffice Desktop",
        texto: `
            Você escolheu o <b>OnlyOffice Desktop</b>. Ele utiliza uma interface moderna muito parecida com o Excel clássico, o que facilita bastante a transição entre sistemas. Identifique seus elementos na imagem abaixo:<br><br>
            
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen.png" alt="Imagem da área de trabalho do OnlyOffice Planilha" style="width: 100%; height: auto;"></div>
            </div>

            <ul class="lista-componentes">
                <li><b>Menus em Abas:</b> Segue o estilo moderno de Faixa de Opções, agrupando as ferramentas por funções lógicas (Arquivo, Inserir, Layout, Fórmulas).</li>
                <li><b>Barra Lateral de Configurações (Painel Direito):</b> Uma exclusividade muito útil do OnlyOffice. Permite mudar fontes, bordas e alinhamentos rapidamente sem precisar abrir janelas extras.</li>
                <li><b>Barra de Fórmulas:</b> Posicionada acima da grade, indispensável para visualizar as funções matemáticas inseridas.</li>
                <li><b>Área de Trabalho Principal:</b> A matriz quadriculada de linhas e colunas pronta para receber seus dados textuais e numéricos.</li>
                <li><b>Barra de Status Inferior:</b> Informa o status de edição do arquivo e oferece o controle deslizante de Zoom para melhor acessibilidade visual.</li>
            </ul>
        `,
        botoes: [
            { texto: "Voltar", destino: "ferramentas" },
            { texto: "Continuar", destino: "interface_onlyoffice" }
        ]
    },

    // ================= ETAPA 4: INTERFACES (RAMIFICADAS POR APLICATIVO) =================

    interface_excel: {
        etapa: 4,
        titulo: "4. Estruturas e Conceitos no Excel",
        texto: "",
        botoes: [
            { texto: "Voltar", destino: "ambiente_excel" },
            { texto: "Avançar", destino: "escolha_ods" }
        ]
    },

    interface_google: {
        etapa: 4,
        titulo: "4. Estruturas e Conceitos no Google Planilhas",
        texto: "",
        botoes: [
            { texto: "Voltar", destino: "ambiente_google" },
            { texto: "Avançar", destino: "escolha_ods" }
        ]
    },

    interface_onlyoffice: {
        etapa: 4,
        titulo: "4. Estrutura e Conceitos no OnlyOffice",
        texto: "",
        botoes: [
            { texto: "Voltar", destino: "ambiente_onlyoffice" },
            { texto: "Avançar", destino: "escolha_ods" }
        ]
    },

    // ================= TRILHA A: ODS 3 (SAÚDE E BEM-ESTAR) =================
    
    // === ETAPA 5: Tipos de Dados ===
    saude_dados: {
        etapa: 5, 
        titulo: "E5. Dados de Saúde",
        texto: "Vamos inserir dados de cobertura vacinal. Aqui trabalhamos com os tipos de dados de Números Inteiros e Percentuais.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "escolha_ods" 
            }, 
            { 
                texto: "Avançar", 
                destino: "saude_formatacao" 
            }
        ]
    },
    // === ETAPA 6: Elementos de Formatação ===
    saude_formatacao: {
        etapa: 6, 
        titulo: "E6. Formatação em Saúde",
        texto: "Destaque as colunas de hospitais aplicando elementos de formatação como fontes, fundos e bordas nos cabeçalhos de atendimento.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "saude_dados" 
            }, 
            { 
                texto: "Avançar", 
                destino: "saude_operadores" 
            }
        ]
    },
    // === ETAPA 7: Operadores Matemáticos ===
    saude_operadores: {
        etapa: 7, 
        titulo: "E7. Cálculos de Epidemias",
        texto: "Utilize fórmulas manuais com operadores matemáticos básicos para subtrair casos antigos de novos casos detectados.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "saude_formatacao" 
            }, 
            { 
                texto: "Avançar", 
                destino: "saude_funcoes" 
            }
        ]
    },
    // === ETAPA 8: Funções Iniciais ===
    saude_funcoes: {
        etapa: 8, 
        titulo: "E8. Médias de Atendimento",
        texto: "Aplique as funções pré-definidas MÉDIA e MÁXIMO para avaliar o tempo de espera em prontos-socorros da região.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "saude_operadores" 
            }, 
            { 
                texto: "Avançar", 
                destino: "saude_condicionais" 
            }
        ]
    },
    // === ETAPA 9: Funções Condicionais ===
    saude_condicionais: {
        etapa: 9, 
        titulo: "E9. Lógica e Alertas de Saúde",
        texto: "Use a função lógica SE e a formatação condicional para pintar automaticamente em vermelho os distritos com surtos críticos.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "saude_funcoes" 
            }, 
            { 
                texto: "Avançar", 
                destino: "saude_graficos" 
            }
        ]
    },
    // === ETAPA 10: Gráficos ===
    saude_graficos: {
        etapa: 10, 
        titulo: "E10. Gráficos de Linha Hospitalar",
        texto: "Converta dados tabulares em um gráfico de linhas para demonstrar visualmente a tendência de queda de uma doença.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "saude_condicionais" 
            }, 
            { 
                texto: "Avançar", 
                destino: "saude_impressao" 
            }
        ]
    },
    // === ETAPA 11: Área de Impressão e Exportação ===
    saude_impressao: {
        etapa: 11, 
        titulo: "E11. Exportar Relatório de Saúde",
        texto: "Configure a orientação da folha em modo Paisagem para exportar os dados epidemiológicos finais em formato PDF.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "saude_graficos" 
            }, 
            { 
                texto: "Finalizar Jornada", 
                destino: "conclusao" 
            }
        ]
    },

    // ================= TRILHA B: ODS 6 (ÁGUA E SANEAMENTO) =================
    
    // === ETAPA 5: Tipos de Dados ===
    agua_dados: {
        etapa: 5, 
        titulo: "E5. Consumo de Água",
        texto: "Registraremos volumes em Litros (decimais) e usaremos o tipo de dados de Data para o monitoramento de reservatórios locais.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "escolha_ods" 
            }, 
            { 
                texto: "Avançar", 
                destino: "agua_formatacao" 
            }
        ]
    },
    // === ETAPA 6: Elementos de Formatação ===
    agua_formatacao: {
        etapa: 6, 
        titulo: "E6. Layout de Recursos Hídricos",
        texto: "Formate a estética da planilha alterando cores de fontes e estilos de célula para diferenciar rios poluídos de recuperados.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "agua_dados" 
            }, 
            { 
                texto: "Avançar", 
                destino: "agua_operadores" 
            }
        ]
    },
    // === ETAPA 7: Operadores Matemáticos ===
    agua_operadores: {
        etapa: 7, 
        titulo: "E7. Desperdício Calculado",
        texto: "Divida o volume total captado pelo número de habitantes usando operadores matemáticos para descobrir o gasto per capita.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "agua_formatacao" 
            }, 
            { 
                texto: "Avançar", 
                destino: "agua_funcoes" 
            }
        ]
    },
    // === ETAPA 8: Funções Iniciais ===
    agua_funcoes: {
        etapa: 8, 
        titulo: "E8. Somas de Saneamento",
        texto: "Descubra o total de água consumida pela comunidade utilizando a função pré-definida SOMA de forma eficiente.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "agua_operadores" 
            }, 
            { 
                texto: "Avançar", 
                destino: "agua_condicionais" 
            }
        ]
    },
    // === ETAPA 9: Funções Condicionais ===
    agua_condicionais: {
        etapa: 9, 
        titulo: "E9. Alertas de Escassez",
        texto: "Insira a função de tomada de decisão SE para exibir um texto de alerta se o volume de água cair abaixo do aceitável.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "agua_funcoes" 
            }, 
            { 
                texto: "Avançar", 
                destino: "agua_graficos" 
            }
        ]
    },
    // === ETAPA 10: Gráficos ===
    agua_graficos: {
        etapa: 10, 
        titulo: "E10. Gráfico de Pizza do Consumo",
        texto: "Gere representações visuais convertendo dados em um gráfico de pizza para apontar as maiores perdas na rede.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "agua_condicionais" 
            }, 
            { 
                texto: "Avançar", 
                destino: "agua_impressao" 
            }
        ]
    },
    // === ETAPA 11: Área de Impressão e Exportação ===
    agua_impressao: {
        etapa: 11, 
        titulo: "E11. Relatório de Sustentabilidade",
        texto: "Defina propriedades de página e a área específica de impressão para ocultar notas de rascunho na distribuição do material.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "agua_graficos" 
            }, 
            { 
                texto: "Finalizar Jornada", 
                destino: "conclusao" 
            }
        ]
    },

    // ================= TRILHA C: ODS 13 (AÇÃO CLIMÁTICA) =================
    
    // === ETAPA 5: Tipos de Dados ===
    clima_dados: {
        etapa: 5, 
        titulo: "E5. Emissões de Carbono",
        texto: "Montaremos uma planilha com dados científicos usando variações numéricas decimais para representar gases estufa.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "escolha_ods" 
            }, 
            { 
                texto: "Avançar", 
                destino: "clima_formatacao" 
            }
        ]
    },
    // === ETAPA 6: Elementos de Formatação ===
    clima_formatacao: {
        etapa: 6, 
        titulo: "E6. Destacando Anomalias",
        texto: "Aplique preenchimento de fundos escuros e bordas reforçadas em células para demarcar visualmente os anos de maior aquecimento.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "clima_dados" 
            }, 
            { 
                texto: "Avançar", 
                destino: "clima_operadores" 
            }
        ]
    },
    // === ETAPA 7: Operadores Matemáticos ===
    clima_operadores: {
        etapa: 7, 
        titulo: "E7. Projeção Matemática",
        texto: "Multiplique as taxas de desmatamento pelo fator de emissão anual aplicando os conceitos de precedência matemática.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "clima_formatacao" 
            }, 
            { 
                texto: "Avançar", 
                destino: "clima_funcoes" 
            }
        ]
    },
    // === ETAPA 8: Funções Iniciais ===
    clima_funcoes: {
        etapa: 8, 
        titulo: "E8. Extremos de Temperatura",
        texto: "Localize de maneira automatizada a temperatura global mais alta em um grande volume de registros usando a função MÁXIMO.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "clima_operadores" 
            }, 
            { 
                texto: "Avançar", 
                destino: "clima_condicionais" 
            }
        ]
    },
    // === ETAPA 9: Funções Condicionais ===
    clima_condicionais: {
        etapa: 9, 
        titulo: "E9. Metas do Acordo de Paris",
        texto: "Utilize a função de contagem sob critérios específicos CONT.SE para computar quantos países violaram as metas climáticas.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "clima_funcoes" 
            }, 
            { 
                texto: "Avançar", 
                destino: "clima_graficos" 
            }
        ]
    },
    // === ETAPA 10: Gráficos === [cite: 54]
    clima_graficos: {
        etapa: 10, 
        titulo: "E10. Gráfico de Colunas de CO2",
        texto: "Selecione e monte um gráfico de colunas comparando a redução de poluentes entre diferentes blocos econômicos.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "clima_condicionais" 
            }, 
            { 
                texto: "Avançar", 
                destino: "clima_impressao" 
            }
        ]
    },
    // === ETAPA 11: Área de Impressão e Exportação ===
    clima_impressao: {
        etapa: 11, 
        titulo: "E11. Divulgação Científica",
        texto: "Aplique cabeçalho e rodapé profissionais com numeração de páginas e exporte seu relatório climático unificado.",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "clima_graficos" 
            }, 
            { 
                texto: "Finalizar Jornada", 
                destino: "conclusao" 
            }
        ]
    },

    // ================= ENCERRAMENTO (RECONTRO DOS CAMINHOS) =================
    conclusao: {
        etapa: 12, // Etapa final de fechamento no menu lateral
        titulo: "Certificação e Próximos Passos",
        texto: "Parabéns! Você concluiu a sequência didática de planilhas de forma brilhante e com plena consciência cidadã. Suas tomadas de decisões demonstraram como dados brutos transformam realidades.",
        botoes: [
            { 
                texto: "Reiniciar Toda a Sequência", 
                destino: "capa" 
            }
        ]
    }
};

// Configuração atualizada dos nomes exibidos no menu lateral (Alinhado de 1 a 12)
const etapasConfig = [
    { id: 1, nome: "1. Apresentação" },
    { id: 2, nome: "2. Cotidiano" },
    { id: 3, nome: "3. Editores" },
    { id: 4, nome: "4. Interfaces" },
    { id: 5, nome: "5. Tipos de Dados" },
    { id: 6, nome: "6. Formatações" },
    { id: 7, nome: "7. Operadores" },
    { id: 8, nome: "8. Funções Iniciais" },
    { id: 9, nome: "9. Condicionais" },
    { id: 10, nome: "10. Gráficos" },
    { id: 11, nome: "11. Impressão" },
    { id: 12, nome: "12. Encerramento" }
];