const storyData = {
    
// ================= ETAPA 1: Apresentação =================
    capa: {
        etapa: 1, 
        titulo: "Introdução a planilhas eletrônicas",
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

// ================= ETAPA 2: As Planilhas no Nosso Cotidiano =================

    cotidiano: {
        etapa: 2, 
        titulo: "As planilhas no cotidiano",
        texto: "Olhando ao seu redor, você já parou para pensar em como as informações chegam até nós todos os dias? Muitas vezes, sem perceber, nossos olhos observam o mundo e a nossa mente busca identificar comportamentos e padrões nos acontecimentos ao redor. A depender da situação, nosso olhar acha uma estrutura muito conhecida e poderosa: as tabelas.<br><br>Elas estão presentes na nossa vida em muito mais coisas do que a gente imagina. Quase tudo que exige organização, planejamento ou clareza é distribuído em linhas e colunas. Esse padrão de layout não existe por acaso; ele foi desenhado para facilitar a nossa mente na busca e na localização rápida de informações. Quer ver só?<br><br>Pense no calendário pendurado na parede ou na tela do seu celular. O que ele é, senão uma tabela clássica? Dias da semana nas colunas, semanas do mês nas linhas. E a grade horária das disciplinas escolares? Segunda, terça, quarta... cada matéria encaixada no seu quadrado, cruzando o dia com o horário exato. O mesmo acontece quando você pesquisa o horário de funcionamento de um posto de saúde ou de um supermercado nas redes sociais. A estrutura de grade está lá, simplificando sua vida.<br><br>Até nos momentos burocráticos da vida, as tabelas guiam nossas decisões. Quando você recebe um cupom fiscal no mercado, cada item comprado ocupa uma linha, dividida em colunas invisíveis de quantidade, valor unitário e preço total. E quando a conta de água ou de energia elétrica chega na sua casa, além do valor e do vencimento, o que mais chama a sua atenção? Provavelmente será aquele gráfico ou aquela tabela com o histórico de consumo dos últimos doze meses. Ali, olhando linha por linha, você descobre se gastou mais no verão ou no inverno e consegue planejar o orçamento do próximo mês.<br><br>Se quisermos, podemos estender essa organização de informações para uma infinidade de coisas. Por exemplo, quando você está nas redes sociais e vai rolando a tela, cada postagem é como se fosse uma linha de uma tabela infinita em uma única coluna, onde cada linha está organizada de um jeito que você sabe exatamente a localização da informação de quem postou, o que postou, quando postou e quantas curtidas, compartilhamentos ou comentários foram feitos.<br><br>E se você reparar bem, essa mesma lógica está por trás das grandes manchetes que vemos nos jornais da TV ou nas postagens da internet. Os repórteres traduzem tabelas o tempo todo para nos contar o que está acontecendo no mundo.<br><br>Quando a televisão faz um alerta preocupante sobre o aumento de casos de dengue no nosso estado ou mostra o resultado de um mutirão de vacinação, o que sustenta aquela notícia são informações que foram organizadas em uma imensa tabela. Alguém ou algum sistema, em um computador da Secretaria de Saúde, precisou analisar e somar as linhas com os registros de notificações de cada bairro para saber onde a situação é mais crítica.<br><br>O mesmo acontece quando vemos notícias sobre a crise climática e o meio ambiente. Seja ao falar do aumento do desmatamento na Amazônia ou ao anunciar que batemos o recorde do ano mais quente da história, os especialistas dependem das planilhas. Eles passam meses coletando milhares de dados científicos em tabelas com a ajuda de sistemas de monitoramento computadorizado para que, no final, o cruzamento de informações nos mostre com clareza o tamanho do impacto das ações humanas no planeta.<br><br>Até aquela notícia sobre os reservatórios de água da nossa região estarem operando no nível vermelho segue essa regra. A reportagem geralmente exibe na tela um histórico com as últimas medições, organizadas por datas e volumes em metros cúbicos. Olhando essa tabela disfarçada de notícia, a sociedade entende a necessidade de economizar água e os cientistas conseguem estimar o tempo que teremos até o abastecimento colapsar.<br><br>Percebe como as tabelas moldam nossa visão da realidade? Dominar as planilhas eletrônicas não serve só para aprender a digitar números em um computador para trabalhar em um escritório. É desenvolver autonomia. É aprender a ler o mundo através dos dados para poder agir no mundo com informação, tendo a capacidade de entender os problemas, refletir sobre soluções e propor transformações.<br><br>Você está prestes a dar os primeiros passos para dominar essa ferramenta e aprender a construir essas estruturas. Vamos continuar?",
        botoes: [
            { texto: "Retornar", destino: "jornada" }, 
            { texto: "Continuar", destino: "ferramentas" }
        ]
    },

// ================= ETAPA 3: Diferentes Ferramentas =================

    ferramentas: {
        etapa: 3, 
        titulo: "3. Diferentes ferramentas para criar planilhas",
        texto: `
            Para começar a criar nossas tabelas, precisamos escolher nossa ferramenta de trabalho. Hoje, o mundo da tecnologia se divide em dois caminhos principais:<br><br>
            <b>1º. Editores em Nuvem (Online):</b> Como o Google Planilhas e o Microsoft Excel 365. Eles funcionam no próprio navegador e salvam as alterações automaticamente. São excelentes para trabalhos em grupo, mas exigem conexão constante com a internet.<br><br>
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
                <p>No Brasil, a falta de conectividade estável à internet ainda afeta milhões de estudantes, principalmente nas periferias e zonas rurais. Pesquisas de órgãos como o <a href="https://cgi.br/">CGI.BR</a> apontam que muitas famílias de baixa renda acessam a internet exclusivamente pelo celular, com planos de dados limitados que bloqueiam o acesso após o consumo da franquia. Para evitar a dependência da internet, é recomendado o uso de softwares instalados, como o LibreOffice ou OnlyOffice.</p>
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

// ================= RAMIFICAÇÃO: MICROSOFT EXCEL =================

    ambiente_excel: {
        etapa: 3,
        titulo: "Conhecendo a Tela do Microsoft Excel",
        texto: `
            Você selecionou o <b>Microsoft Excel Desktop</b>. Antes de começarmos a digitar dados, precisamos entender como a tela do programa está organizada. Se você está olhando para ela pela primeira vez, a quantidade de botões pode assustar, mas todos eles seguem uma lógica de organização bem simples.<br><br>
            
            Veja abaixo a interface padrão do Excel assim que abrimos um arquivo novo:<br><br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen.png" alt="Imagem da tela do Excel" style="width: 100%; height: auto;"></div>
            </div>

            <p>A partir da imagem acima, vamos compreender a função de cada uma das suas partes principais:</p><br>

            <p><b>1. Barra de Ferramentas de Acesso Rápido:</b> Fica no topo esquerdo da janela. É um espaço reservado para botões que você usa a todo momento, como Salvar (Disquete), Desfazer e Refazer ações. Você pode personalizar essa barra para incluir seus comandos favoritos.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_ar.png" alt="Imagem da barra de ferramentas de acesso rápido" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>2. Guias de Menus:</b> São as palavras localizadas logo abaixo do topo (Página Inicial, Inserir, Layout da Página, Fórmulas...). Cada palavra funciona como uma "aba" diferente. Quando você clica em uma guia, toda a barra de botões abaixo dela muda.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_gm.png" alt="Imagem da Guias de Menus" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>3. Faixa de Opções:</b> É a grande faixa retangular horizontal que cruza o topo da tela. Ela abriga todas as ferramentas visuais do Excel e muda seu conteúdo dependendo da Guia de Menu que estiver selecionada.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_fo.png" alt="Imagem da Faixa de Opções" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>4. Grupos:</b> Dentro da Faixa de Opções, repare que os botões são separados por pequenas linhas verticais organizadas por assunto. Esses quadradinhos são chamados de Grupos (ex: dentro da guia Página Inicial, temos o grupo "Fonte" para organizar textos e o grupo "Alinhamento").</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_gr.png" alt="Imagem dos Grupos" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>5. Barra de Fórmulas:</b> É a linha branca horizontal comprida localizada logo acima da grade de células. Ela funciona como uma "janela de raio-X": quando você clica em uma célula, essa barra mostra o texto real ou a fórmula matemática que está escondida ali dentro.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_bf.png" alt="Imagem da Barra de Fórmulas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>6. Área de Trabalho:</b> É o corpo principal do programa. Uma imensa grade quadriculada formada pelo cruzamento de linhas e colunas onde nós de fato construímos nossas tabelas e inserimos nossos dados.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_at.png" alt="Imagem da Área de Trabalho" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>7. Guias de Planilhas:</b> Ficam localizadas no canto inferior esquerdo, logo abaixo da área de trabalho. Elas mostram as páginas (abas) do seu arquivo. Um único arquivo de Excel pode ter várias planilhas separadas por ali (Planilha1, Planilha2, etc.).</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_gp.png" alt="Imagem da Guias de Planilhas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>8. Barra de Status:</b> É a última faixa no rodapé do programa. Ela exibe informações úteis (como se o sistema está pronto ou calculando algo) e traz, no canto direito, o controle de <b>Zoom</b> para você aumentar ou diminuir o tamanho visual da grade.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/excel_screen_bs.png" alt="Imagem da Barra de Status" style="width: 100%; height: auto;"></div>
            </div><br>
        `,
        botoes: [
            { texto: "Voltar", destino: "ferramentas" },
            { texto: "Avançar", destino: "teclado_excel" }
        ]
    },

    teclado_excel: {
        etapa: 3,
        titulo: "Dominando o Excel pelo teclado",
        texto: `
            Aprender a utilizar o Excel pelo teclado poupa tempo e é fundamental para a acessibilidade. Aqui aprenderemos quais são os principais comandos de teclado para navegar pelas guias do Excel.<br><br>
            
            <b>Como abrir o Excel usando apenas o teclado:</b><br><br>
            Se você estiver na Área de Trabalho do Windows, siga estes passos:<br>

            1. Pressione a tecla <b>Windows</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/windows_icon.png" alt="Ícone do Windows" style="width: auto; height: 1em;"></span> para abrir o menu iniciar.<br>
            2. Digite imediatamente a palavra <code>excel</code>.<br>
            3. Pressione a tecla <b>Enter</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/enter_icon.png" alt="Ícone da tecla Enter" style="width: auto; height: 1em;"></span>. O programa irá abrir na tela imediatamente.<br><br>

            <div class="caixa-atalhos-teclado">
                <h4>Atalhos de acesso às barras de ferramentas</h4><br>
                <p>Uma vez com o Excel aberto, você pode ativar e navegar por todas as seções que estudamos na tela anterior sem usar o mouse. Experimente testar os comandos a seguir:</p><br>
                
                <ul class="lista-teclado">
                    <li><b>Tecla ALT:</b> Pressione e solte a tecla <code>alt</code>. Repare que pequenas letras pretas vão aparecer em cima de cada <b>Guia de Menu</b> e números em cima da <b>Barra de Acesso Rápido</b>. Se você apertar a letra correspondente no teclado, aquela guia se abrirá.</li>
                    <li><b>Teclas de Setas:</b> Permitem que você navegue botão por botão dentro dos <b>Grupos</b> da <b>Faixa de Opções</b> após ativar o menu pela tecla <code>alt</code>, ou mude de célula na <b>Área de Trabalho</b>.</li>
                    <li><b>Tecla F2:</b> Ao pressionar <code>F2</code>, o cursor vai direto para dentro da <b>Barra de Fórmulas</b> da célula selecionada, permitindo editar o texto sem precisar dar dois cliques com o mouse.</li>
                    <li><b>Tecla TAB:</b> Dentro da Faixa de Opções ou de janelas de configuração, o <code>tab</code> pula para o próximo botão ou campo de texto.</li>
                    <li><b>Tecla ESC:</b> Caso você entre em uma guia sem querer ou queira cancelar a ativação do teclado, aperte <code>esc</code> para voltar ao modo normal de edição.</li>
                    <li><b>Teclas CTRL + PAGE DOWN / PAGE UP:</b> Segure a tecla <code>ctrl</code> e aperte <code>PgDn</code> ou <code>PgUp</code> para alternar entre as <b>Guias de Planilhas</b> (mudar de aba) no rodapé do arquivo.</li>
                </ul>
            </div>
        `,
        botoes: [
            { texto: "Voltar", destino: "ambiente_excel" },
            { texto: "Avançar", destino: "interface_excel" }
        ]
    },

// ================= RAMIFICAÇÃO: GOOGLE PLANILHAS =================

    ambiente_google: {
        etapa: 3,
        titulo: "Conhecendo a tela do Google Planilhas",
        texto: `
            Você selecionou o <b>Google Planilhas (Online)</b>. Como ele funciona diretamente no seu navegador de internet, sua interface é um pouco mais limpa, mas ainda possui todas as ferramentas essenciais organizadas de forma inteligente.<br><br>
            
            Veja abaixo a interface padrão do Google Planilhas assim que abrimos um arquivo novo:<br><br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_sheets_screen.png" alt="Imagem da tela do Google Planilhas" style="width: 100%; height: auto;"></div>
            </div>

            <p>A partir da imagem acima, vamos compreender a função de cada uma das suas partes principais:</p><br>

            <p><b>1. Menu de Linha de Texto (Menus Tradicionais):</b> Fica logo abaixo do título do arquivo (Arquivo, Editar, Ver, Inserir, Formatar...). Ao clicar em qualquer uma dessas palavras, um menu em lista se abre para baixo, mostrando as opções disponíveis.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_mt.png" alt="Imagem do Menu de Linha de Texto" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>2. Barra de Atalhos (Barra de Ferramentas):</b> É a linha cheia de ícones logo abaixo dos menus. Ela traz botões rápidos para as funções que mais usamos no dia a dia, como desfazer, imprimir, formatar como moeda, mudar a cor do texto e aplicar bordas.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_ba.png" alt="Imagem da Barra de Atalhos" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>3. Caixa de Nome (Indicador de Célula):</b> Localizada no canto esquerdo, logo acima da grade. Ela mostra exatamente qual célula está selecionada no momento (por exemplo, A1) e serve para você se localizar rapidamente na planilha.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_cn.png" alt="Imagem da Caixa de Nome" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>4. Barra de Fórmulas:</b> É o espaço em branco comprido que fica ao lado da Caixa de Nome. Quando você clica em uma célula que possui um cálculo ou uma palavra, é aqui que o Google Planilhas te mostra o que foi digitado de verdade ali dentro.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_bf.png" alt="Imagem da Barra de Fórmulas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>5. Área de Trabalho:</b> O corpo central da tela. Uma grande malha quadriculada onde as colunas são organizadas por letras (A, B, C...) e as linhas por números (1, 2, 3...). É aqui que mágina acontece e onde montamos nossas tabelas.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_at.png" alt="Imagem da Área de Trabalho" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>6. Guias de Planilhas (Abas Inferiores):</b> Ficam no canto inferior esquerdo do navegador. Permitem que você crie várias páginas diferentes dentro de um mesmo arquivo de planilha, clicando no botão de mais (+).</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_gp.png" alt="Imagem das Guias de Planilhas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>7. Indicador de Salvamento Automático:</b> Um pequeno ícone de nuvem que fica perto do menu superior. Como o Google Planilhas funciona na internet, ele avisa se todas as alterações que você fez já foram guardadas na nuvem com segurança.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/google_screen_is.png" alt="Imagem do Indicador de Salvamento" style="width: 100%; height: auto;"></div>
            </div><br>
        `,
        botoes: [
            { texto: "Voltar", destino: "ferramentas" },
            { texto: "Avançar", destino: "teclado_google" }
        ]
    },

    teclado_google: {
        etapa: 3,
        titulo: "Dominando o Google Planilhas pelo teclado",
        texto: `
            Aprender a utilizar o Google Planilhas pelo teclado economiza tempo e melhora a usabilidade, especialmente por rodar direto no navegador de internet. Vamos aprender como comandá-lo sem o mouse.<br><br>
            
            <b>Como abrir o Google Planilhas usando apenas o teclado:</b><br><br>
            Se você estiver na Área de Trabalho do Windows, siga estes passos:<br>
            1. Pressione a tecla <b>Windows</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/windows_icon.png" alt="Ícone do Windows" style="width: auto; height: 1em;"></span> para abrir o menu iniciar.<br>
            2. Digite o nome do seu navegador de internet (ex: <code>chrome</code> ou <code>edge</code>) e aperte <b>Enter</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/enter_icon.png" alt="Ícone da tecla Enter" style="width: auto; height: 1em;"></span>.<br>
            3. Na barra de endereços que se abrir, digite: <code>sheets.new</code> e pressione <b>Enter</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/enter_icon.png" alt="Ícone da tecla Enter" style="width: auto; height: 1em;"></span>. Uma planilha novinha em folha surgirá na tela de forma instantânea!<br><br>

            <div class="caixa-atalhos-teclado">
                <h4>Atalhos de acesso às barras de ferramentas</h4><br>
                <p>No ambiente web, os navegadores às vezes disputam os atalhos com as páginas. Por isso, os comandos do Google Planilhas usam combinações específicas. Teste os comandos a seguir:</p><br>
                
                <ul class="lista-teclado">
                    <li><b>Atalhos de Menus (Alt + Letra):</b> Para abrir os menus superiores sem mouse no Windows, segure <code>alt</code> junto com a tecla Shift e aperte a letra inicial do menu (ex: <code>alt</code> + <code>shift</code> + <code>A</code> abre o menu Arquivo; <code>alt</code> + <code>shift</code> + <code>I</code> abre o menu Inserir).</li>
                    <li><b>Teclas de Setas:</b> Permitem movimentar a seleção quadradinho por quadradinho pelas linhas e colunas da <b>Área de Trabalho</b> de forma precisa.</li>
                    <li><b>Tecla ENTER:</b> Entra no modo de edição da célula selecionada, posicionando o cursor para você digitar ou alterar os dados.</li>
                    <li><b>Tecla ESC:</b> Cancela a edição atual na célula ou fecha qualquer menu suspenso que tenha sido aberto por engano, devolvendo o foco para a grade.</li>
                    <li><b>Teclas ALT + SETA PARA BAIXO / SETA PARA CIMA:</b> Quando estiver com uma das <b>Guias de Planilhas</b> (abas inferiores) selecionada, use essa combinação para abrir o menu de opções daquela aba ou alternar entre as páginas.</li>
                </ul>
            </div>
        `,
        botoes: [
            { texto: "Voltar", destino: "ambiente_google" },
            { texto: "Avançar", destino: "interface_google" }
        ]
    },

    // ================= RAMIFICAÇÃO: ONLYOFFICE =================

    ambiente_onlyoffice: {
        etapa: 3,
        titulo: "Conhecendo a Tela do OnlyOffice Desktop",
        texto: `
            Você selecionou o <b>OnlyOffice Desktop</b>. Ele traz o melhor dos dois mundos: funciona de forma local e offline no computador, mas utiliza o design moderno baseado em abas idêntico ao Excel profissional.<br><br>
            
            Veja abaixo a interface padrão do OnlyOffice assim que abrimos um arquivo novo:<br><br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen.png" alt="Imagem da tela do OnlyOffice" style="width: 100%; height: auto;"></div>
            </div>

            <p>A partir da imagem acima, vamos compreender a função de cada uma das suas partes principais:</p><br>

            <p><b>1. Guias de Menus em Abas:</b> Localizadas no topo da tela (Arquivo, Página Inicial, Inserir, Layout, Fórmulas...). Clicar nelas altera dinamicamente todo o conjunto de ferramentas exibido logo abaixo.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_gm.png" alt="Imagem das Guias de Menus" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>2. Faixa de Opções (Painel Superior):</b> É a grande régua de ferramentas que abriga todos os comandos visuais do programa. Ela se transforma conforme a Guia de Menu escolhida para agilizar o seu trabalho.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_fo.png" alt="Imagem da Faixa de Opções" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>3. Barra de Fórmulas:</b> A linha horizontal comprida posicionada logo acima da grade de células. Indispensável para visualizar e auditar as funções matemáticas e os textos inseridos nas células.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_bf.png" alt="Imagem da Barra de Fórmulas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>4. Área de Trabalho:</b> A grande matriz quadriculada de linhas e colunas. É neste espaço central que você insere os dados numéricos e textuais para construir seus relatórios.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_at.png" alt="Imagem da Área de Trabalho" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>5. Painel Lateral de Configurações (Barra Direita):</b> Uma exclusividade muito prática do OnlyOffice. Esse painel inteligente exibe opções rápidas de texto, bordas e gráficos de acordo com o que você clicou, evitando que janelas extras fiquem surgindo na frente da tabela.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_pl.png" alt="Imagem do Painel Lateral" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>6. Guias de Planilhas:</b> Abas localizadas na parte inferior esquerda. Permitem gerenciar diferentes planilhas e organizar o seu documento em páginas separadas (Ex: Gastos de Janeiro, Gastos de Fevereiro).</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_gp.png" alt="Imagem das Guias de Planilhas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>7. Barra de Status:</b> A faixa escura no rodapé do programa. Ela mostra o status do arquivo e oferece, no canto direito, os botões de controle de Zoom para ajustar o tamanho da tela para o seu conforto visual.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/onlyoffice_screen_bs.png" alt="Imagem da Barra de Status" style="width: 100%; height: auto;"></div>
            </div><br>
        `,
        botoes: [
            { texto: "Voltar", destino: "ferramentas" },
            { texto: "Avançar", destino: "teclado_onlyoffice" }
        ]
    },

    teclado_onlyoffice: {
        etapa: 3,
        titulo: "Dominando o OnlyOffice pelo teclado",
        texto: `
            Aprender a controlar o OnlyOffice pelo teclado é uma habilidade excelente para aumentar a produtividade e garantir acessibilidade no uso do aplicativo local. Veja como operá-lo.<br><br>
            
            <b>Como abrir o OnlyOffice usando apenas o teclado:</b><br><br>
            Se você estiver na Área de Trabalho do Windows, siga estes passos:<br>
            1. Pressione a tecla <b>Windows</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/windows_icon.png" alt="Ícone do Windows" style="width: auto; height: 1em;"></span> para abrir o menu iniciar.<br>
            2. Digite a palavra <code>onlyoffice</code>.<br>
            3. Pressione a tecla <b>Enter</b> <span style="display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"><img src="assets/img/enter_icon.png" alt="Ícone da tecla Enter" style="width: auto; height: 1em;"></span>. O painel central do programa será aberto imediatamente.<br><br>

            <div class="caixa-atalhos-teclado">
                <h4>Atalhos de acesso às barras de ferramentas</h4><br>
                <p>O OnlyOffice respeita a mesma engenharia de atalhos consagrada nos melhores pacotes de escritório do mercado. Pratique os comandos abaixo:</p><br>
                
                <ul class="lista-teclado">
                    <li><b>Tecla ALT:</b> Pressione e solte a tecla <code>alt</code>. O sistema exibirá pequenas letras-guia sobre cada aba do menu superior. Pressione a letra indicada no teclado para saltar direto para aquela seção de ferramentas.</li>
                    <li><b>Teclas de Setas:</b> Movem o cursor célula por célula na <b>Área de Trabalho</b> ou navegam entre as ferramentas superiores após o acionamento dos menus.</li>
                    <li><b>Tecla F2:</b> Abre instantaneamente a edição interna da célula ativa, jogando o foco do teclado para a <b>Barra de Fórmulas</b>.</li>
                    <li><b>Tecla TAB:</b> Pula para a próxima opção ou campo em menus de configuração e avança uma célula para o lado direito na grade principal.</li>
                    <li><b>Tecla ESC:</b> Cancela ações, limpa seleções indesejadas de menus e fecha painéis suspensos voltando para a segurança da grade de dados.</li>
                    <li><b>Teclas CTRL + PAGE DOWN / PAGE UP:</b> Permitem transitar rapidamente entre as diferentes <b>Guias de Planilhas</b> criadas na parte de baixo do arquivo.</li>
                </ul>
            </div>
        `,
        botoes: [
            { texto: "Voltar", destino: "ambiente_onlyoffice" },
            { texto: "Avançar", destino: "interface_onlyoffice" }
        ]
    },

// 

    interface_excel: {
        etapa: 4,
        titulo: "4. Estrutura e Conceitos no Excel",
        texto: `
            Agora que você já sabe como se mover pela tela, vamos compreender os conceitos essenciais que dão vida à grade de uma planilha eletrônica.<br><br>
            
            <div class="container-print-tela">
                <div class="placeholder-print">[PRINT DETALHADO: Linhas, Colunas, Células e Cursor do Mouse no Excel]</div>
            </div>

            <ul class="lista-conceitos">
                <li><b>Linhas e Colunas:</b> As <b>Colunas</b> são verticais e identificadas por letras (A, B, C...). As <b>Linhas</b> são horizontais e identificadas por números (1, 2, 3...).</li>
                <li><b>Célula:</b> É o quadradinho gerado pelo cruzamento de uma linha com uma coluna. O nome dela (endereço) combina a letra e o número. Se você clicar na primeira célula da planilha, você estará na célula <b>A1</b>.</li>
                <li><b>Pasta de Trabalho e Planilha:</b> O arquivo que você salva no computador é chamado de <b>Pasta de Trabalho</b>, porque ele pode conter várias folhas (<b>Planilhas</b>) separadas por abas no rodapé. O formato de arquivo padrão do Excel é o <b>.xlsx</b>.</li>
                <li><b>O Segredo do Cursor do Mouse:</b> Caso precise usar o mouse, fique atento! Dependendo de onde você o posiciona na célula, a seta muda de desenho e de função:
                    <ul>
                        <li><b>Cruz Branca Gorda:</b> Aparece no meio da célula. Serve para <i>selecionar</i> elementos.</li>
                        <li><b>Cruz Fina Preta (no canto inferior direito):</b> É a Alça de Preenchimento. Serve para <i>arrastar e copiar</i> fórmulas ou sequências de dados rapidamente.</li>
                        <li><b>Seta de Quatro Pontas (nas bordas):</b> Serve para <i>mover</i> o conteúdo da célula para outro lugar.</li>
                    </ul>
                </li>
            </ul>
        `,
        botoes: [
            { texto: "Voltar", destino: "teclado_excel" },
            { texto: "Avançar", destino: "escolha_ods" }
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