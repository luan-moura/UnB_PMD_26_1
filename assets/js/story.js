const storyData = {
    
// ================= ETAPA 1: Apresentação =================
    capa: {
        etapa: 1, 
        titulo: "Introdução a planilhas eletrônicas",
        texto: "Olá, seja bem-vindo à nossa sequência didática de Introdução a planilhas eletrônicas! Nosso objetivo será te apresentar ao universo das planilhas eletrônicas através de situações ou problemas cotidianos que qualquer pessoa pode enfrentar.<br><br>Ao final desta jornada, esperamos que você aprenda a manipular as planilhas para organizar dados, produzir informação, fazer análises e compartilhar conhecimento.<br><br>Você está preparado?",
        botoes: [
            { texto: "Iniciar", destino: "jornada" }
        ]
    },
    jornada: {
        etapa: 1, 
        titulo: "Nossa sequência didática",
        texto: "Nossa jornada passará por: Interfaces, Tipos de dados, Formatação, Operadores, Funções Iniciais, Funções Condicionais, Gráficos e Configurações de Impressão.",
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" }, 
            { texto: "Continuar", destino: "cotidiano" }
        ]
    },

// ================= ETAPA 2: As Planilhas no Nosso Cotidiano =================

    cotidiano: {
        etapa: 2, 
        titulo: "As planilhas no cotidiano",
        texto: "Olhando ao seu redor, você já parou para pensar em como as informações chegam até nós todos os dias? Muitas vezes, sem perceber, nossos olhos observam o mundo e a nossa mente busca identificar comportamentos e padrões nos acontecimentos ao redor. A depender da situação, nosso olhar acha uma estrutura muito conhecida e poderosa: as tabelas.<br><br>Elas estão presentes na nossa vida em muito mais coisas do que a gente imagina. Quase tudo que exige organização, planejamento ou clareza é distribuído em linhas e colunas. Esse padrão de layout não existe por acaso; ele foi desenhado para facilitar a nossa mente na busca e na localização rápida de informações. Quer ver só?<br><br>Pense no calendário pendurado na parede ou na tela do seu celular. O que ele é, senão uma tabela clássica? Dias da semana nas colunas, semanas do mês nas linhas. E a grade horária das disciplinas escolares? Segunda, terça, quarta... cada matéria encaixada no seu quadrado, cruzando o dia com o horário exato. O mesmo acontece quando você pesquisa o horário de funcionamento de um posto de saúde ou de um supermercado nas redes sociais. A estrutura de grade está lá, simplificando sua vida.<br><br>Até nos momentos burocráticos da vida, as tabelas guiam nossas decisões. Quando você recebe um cupom fiscal no mercado, cada item comprado ocupa uma linha, dividida em colunas invisíveis de quantidade, valor unitário e preço total. E quando a conta de água ou de energia elétrica chega na sua casa, além do valor e do vencimento, o que mais chama a sua atenção? Provavelmente será aquele gráfico ou aquela tabela com o histórico de consumo dos últimos doze meses. Ali, olhando linha por linha, você descobre se gastou mais no verão ou no inverno e consegue planejar o orçamento do próximo mês.<br><br>Se quisermos, podemos estender essa organização de informações para uma infinidade de coisas. Por exemplo, quando você está nas redes sociais e vai rolando a tela, cada postagem é como se fosse uma linha de uma tabela infinita em uma única coluna, onde cada linha está organizada de um jeito que você sabe exatamente a localização da informação de quem postou, o que postou, quando postou e quantas curtidas, compartilhamentos ou comentários foram feitos.<br><br>E se você reparar bem, essa mesma lógica está por trás das grandes manchetes que vemos nos jornais da TV ou nas postagens da internet. Os repórteres traduzem tabelas o tempo todo para nos contar o que está acontecendo no mundo.<br><br>Quando a televisão faz um alerta preocupante sobre o aumento de casos de dengue no nosso estado ou mostra o resultado de um mutirão de vacinação, o que sustenta aquela notícia são informações que foram organizadas em uma imensa tabela. Alguém ou algum sistema, em um computador da Secretaria de Saúde, precisou analisar e somar as linhas com os registros de notificações de cada bairro para saber onde a situação é mais crítica.<br><br>O mesmo acontece quando vemos notícias sobre a crise climática e o meio ambiente. Seja ao falar do aumento do desmatamento na Amazônia ou ao anunciar que batemos o recorde do ano mais quente da história, os especialistas dependem das planilhas. Eles passam meses coletando milhares de dados científicos em tabelas com a ajuda de sistemas de monitoramento computadorizado para que, no final, o cruzamento de informações nos mostre com clareza o tamanho do impacto das ações humanas no planeta.<br><br>Até aquela notícia sobre os reservatórios de água da nossa região estarem operando no nível vermelho segue essa regra. A reportagem geralmente exibe na tela um histórico com as últimas medições, organizadas por datas e volumes em metros cúbicos. Olhando essa tabela disfarçada de notícia, a sociedade entende a necessidade de economizar água e os cientistas conseguem estimar o tempo que teremos até o abastecimento colapsar.<br><br>Percebe como as tabelas moldam nossa visão da realidade? Dominar as planilhas eletrônicas não serve só para aprender a digitar números em um computador para trabalhar em um escritório. É desenvolver autonomia. É aprender a ler o mundo através dos dados para poder agir no mundo com informação, tendo a capacidade de entender os problemas, refletir sobre soluções e propor transformações.<br><br>Você está prestes a dar os primeiros passos para dominar essa ferramenta e aprender a construir essas estruturas. Vamos continuar?",
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" }, 
            { texto: "Continuar", destino: "ferramentas" }
        ]
    },

// ================= ETAPA 3: Diferentes Ferramentas =================

    ferramentas: {
        etapa: 3, 
        titulo: "Diferentes ferramentas para criar planilhas",
        texto: `
            Para começar a criar nossas tabelas, precisamos escolher nossa ferramenta de trabalho. Hoje, o mundo da tecnologia se divide em dois caminhos principais:<br><br>
            <b>1º. Editores em Nuvem (Online):</b> Como o Google Planilhas e o Microsoft Excel 365. Eles funcionam no próprio navegador e salvam as alterações automaticamente. São excelentes para trabalhos em grupo, mas exigem conexão constante com a internet.<br><br>
            <b>2º. Editores Locais (Instalados):</b> Como o Microsoft Excel clássico, o LibreOffice Calc e o OnlyOffice. Eles funcionam em aplicação instalada no computador, sem a necessidade de conexão com a internet, mas precisam da nossa atenção para salvar todas as alterações feitas no arquivo.<br><br>
            Algumas dessas aplicações também estão disponíveis para celulares e tablets. Porém, saiba que elas são versões diferentes daquelas do computador, possuindo telas modificadas e funcionalidades mais limitadas.<br><br>
            A seguir, conhecemos um pouco mais sobre cada uma das ferramentas citadas:<br><br>
            
            <div class="tabela-ferramentas">
                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/icons/google_sheets_icon.png" alt="Ícone do Google Planilhas" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>Google Planilhas:</b> É um editor online e gratuito disponível para as contas criadas na Google. A ferramenta está integrada ao Google Drive. Sua grande vantagem é o salvamento automático instantâneo, a facilidade para compartilhar o arquivo e permitir que outras pessoas editem a planilha ao mesmo tempo. Como ponto negativo, ele depende necessariamente de internet e seus recursos para avançados para automações são mais limitados que as versões instaladas.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/icons/microsoft_office_Excel_icon.png" alt="Ícone do Microsoft Excel Web" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>Microsoft Excel 365:</b> É uma versão online do Microsoft Excel Desktop que funciona em qualquer navegador, desde que tenha conexão de internet. É uma ferramenta paga, cuja assinatura também inclui outras ferramentas de escritório. De forma gratuita, a Microsoft permite a visualização de arquivos e edições básicas. Como trata-se de uma versão web, algumas ferramentas avançadas não conseguem ser aplicadas.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/icons/microsoft_office_Excel_icon.png" alt="Ícone do Microsoft Excel Desktop" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>Microsoft Excel Desktop:</b> É o editor instalado mais famoso e utilizado no mercado profissional mundial. É uma ferramenta extremamente completa para a manipulação de planilhas do básico ao avançado, capaz de processar milhões de dados e gráficos complexos sem travamentos. O principal ponto negativo é que se trata de um software comercial pago, exigindo a compra de uma licença ou assinatura ativa.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/icons/libreoffice_icon.png" alt="Ícone do LibreOffice Calc" style="width: 100%; height: auto; max-width: 50px;">
                    </div>
                    <div class="col-conteudo">
                        <p class="texto-unico-app"><b>LibreOffice Calc:</b> É um editor de planilhas instalado no computador, totalmente gratuito e de código aberto (Software Livre). Funciona perfeitamente sem internet e consome pouca memória do computador, sendo ideal para máquinas antigas. Como desvantagem, sua interface visual tem uma aparência mais antiga, e ele pode desconfigurar pequenos detalhes visuais ao abrir arquivos criados originalmente no Excel. Em atualizações recentes é possível configurar algumas formas de visualização, mas ainda assim o visual é o menos intuitivo.</p>
                    </div>
                </div>

                <div class="linha-ferramenta">
                    <div class="col-logo">
                        <img src="assets/img/icons/onlyoffice_icon.png" alt="Ícone do OnlyOffice" style="width: 100%; height: auto; max-width: 50px;">
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
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Excel", destino: "ambiente_excel" },
            { texto: "Google Planilhas", destino: "ambiente_google" },
            { texto: "OnlyOffice", destino: "ambiente_onlyoffice" }
        ]
    },

// ================= RAMIFICAÇÃO MICROSOFT EXCEL =================

    ambiente_excel: {
        etapa: 3,
        titulo: "Conhecendo a Tela do Microsoft Excel",
        texto: `
            Você selecionou o <b>Microsoft Excel Desktop</b>. Antes de começarmos a digitar dados, precisamos entender como a tela do programa está organizada. Se você está olhando para ela pela primeira vez, a quantidade de botões pode assustar, mas todos eles seguem uma lógica de organização bem simples.<br><br>
            
            Veja abaixo a interface padrão do Excel assim que abrimos um arquivo novo:<br><br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen.png" alt="Imagem da tela do Excel" style="width: 100%; height: auto;"></div>
            </div>

            <p>A partir da imagem acima, vamos compreender a função de cada uma das suas partes principais:</p><br>

            <p><b>1. Barra de Ferramentas de Acesso Rápido:</b> Fica no topo esquerdo da janela. É um espaço reservado para botões que você usa a todo momento, como Salvar (Disquete), Desfazer e Refazer ações. Você pode personalizar essa barra para incluir seus comandos favoritos.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_ar.png" alt="Imagem da barra de ferramentas de acesso rápido" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>2. Guias de Menus:</b> São as palavras localizadas logo abaixo do topo (Página Inicial, Inserir, Layout da Página, Fórmulas...). Cada palavra funciona como uma "aba" diferente. Quando você clica em uma guia, toda a barra de botões abaixo dela muda.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_gm.png" alt="Imagem da Guias de Menus" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>3. Faixa de Opções:</b> É a grande faixa retangular horizontal que cruza o topo da tela. Ela abriga todas as ferramentas visuais do Excel e muda seu conteúdo dependendo da Guia de Menu que estiver selecionada.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_fo.png" alt="Imagem da Faixa de Opções" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>4. Grupos:</b> Dentro da Faixa de Opções, repare que os botões são separados por pequenas linhas verticais organizadas por assunto. Esses quadradinhos são chamados de Grupos (ex: dentro da guia Página Inicial, temos o grupo "Fonte" para organizar textos e o grupo "Alinhamento").</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_gr.png" alt="Imagem dos Grupos" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>5. Barra de Fórmulas:</b> É a linha branca horizontal comprida localizada logo acima da grade de células. Ela funciona como uma "janela de raio-X": quando você clica em uma célula, essa barra mostra o texto real ou a fórmula matemática que está escondida ali dentro.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_bf.png" alt="Imagem da Barra de Fórmulas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>6. Área de Trabalho da Planilha:</b> É o corpo principal do programa. Uma imensa grade quadriculada formada pelo cruzamento de linhas e colunas onde nós de fato construímos nossas tabelas e inserimos nossos dados.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_at.png" alt="Imagem da Área de Trabalho da planilha" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>7. Guias de Planilhas:</b> Ficam localizadas no canto inferior esquerdo, logo abaixo da área de trabalho da planilha. Elas mostram as páginas (abas) do seu arquivo. Um único arquivo de Excel pode ter várias planilhas separadas por ali (Planilha1, Planilha2, etc.).</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_gp.png" alt="Imagem da Guias de Planilhas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>8. Barra de Status:</b> É a última faixa no rodapé do programa. Ela exibe informações úteis (como se o sistema está pronto ou calculando algo) e traz, no canto direito, o controle de <b>Zoom</b> para você aumentar ou diminuir o tamanho visual da grade.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/excel_screen_bs.png" alt="Imagem da Barra de Status" style="width: 100%; height: auto;"></div>
            </div><br>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "teclado_excel" }
        ]
    },

    teclado_excel: {
        etapa: 3,
        titulo: "Usando o teclado para navegar pela interface do Excel",
        texto: `
            Aprender a navegar pela interface do Excel usando apenas o teclado é uma habilidade excelente para aumentar a produtividade e garantir acessibilidade no uso do aplicativo sem a dependência do mouse.<br><br>
            
            <b>Como abrir o Excel usando apenas o teclado:</b><br><br>
            Se você estiver na Área de Trabalho do Windows, siga estes passos:<br>

            1. Pressione a tecla <b>Windows</b> <span class="tecla""><img src="assets/img/icons/windows.svg" alt="Ícone do Windows" style="width: auto; height: 1em;"></span> para abrir o menu iniciar.<br>
            2. Digite imediatamente a palavra <code>excel</code>.<br>
            3. Pressione a tecla <span class="tecla">enter</span>. O programa irá abrir na tela imediatamente.<br><br>

            <div class="caixa-atalhos-teclado">
                <h4>Atalhos de acesso às barras de ferramentas</h4><br>
                <p>Uma vez com o Excel aberto, você pode ativar e navegar por todas as seções que estudamos na tela anterior sem usar o mouse. Experimente testar os comandos a seguir:</p><br>
                
                <ul class="lista-teclado">
                    <li><b>Tecla <span class="tecla">alt</span>:</b> Pressione e solte a tecla <code>alt</code>. Repare que pequenas letras pretas vão aparecer em cima de cada <b>Guia de Menu</b> e números em cima da <b>Barra de Acesso Rápido</b>. Se você apertar a letra correspondente no teclado, aquela guia se abrirá.</li><br>
                    <li><b>Teclas <span class="tecla"><img src="assets/img/icons/seta-cima.svg" alt="Ícone de seta para cima" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-baixo.svg" alt="Ícone de seta para baixo" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-esquerda.svg" alt="Ícone de seta para a esquerda" style="width: 100%; height: auto;"></span> e <span class="tecla"><img src="assets/img/icons/seta-direita.svg" alt="Ícone de seta para a direita" style="width: 100%; height: auto;"></span>:</b> Permitem que você navegue botão por botão dentro dos <b>Grupos</b> da <b>Faixa de Opções</b> após ativar o menu pela tecla <code>alt</code>, ou mude de célula na <b>área de trabalho da planilha</b>.</li><br>
                    <li><b>Tecla <span class="tecla">F2</span>:</b> Ao pressionar <code>F2</code>, o cursor vai direto para dentro da <b>Barra de Fórmulas</b> da célula selecionada, permitindo editar o texto sem precisar dar dois cliques com o mouse.</li><br>
                    <li><b>Tecla <span class="tecla">tab</span>:</b> Dentro da Faixa de Opções ou de janelas de configuração, o <code>tab</code> pula para o próximo botão ou campo de texto.</li><br>
                    <li><b>Tecla <span class="tecla">esc</span>:</b> Caso você entre em uma guia sem querer ou queira cancelar a ativação do teclado, aperte <code>esc</code> para voltar ao modo normal de edição.</li><br>
                    <li><b>Teclas <span class="tecla">ctrl</span>+<span class="tecla">pg up</span> e <span class="tecla">ctrl</span>+<span class="tecla">pg dw</span>:</b> Segure a tecla <code>ctrl</code> e aperte <code>PgDn</code> ou <code>PgUp</code> para alternar entre as <b>Guias de Planilhas</b> (mudar de aba) no rodapé do arquivo.</li><br>
                </ul>
            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "interface" }
        ]
    },

// ================= RAMIFICAÇÃO GOOGLE PLANILHAS =================

    ambiente_google: {
        etapa: 3,
        titulo: "Conhecendo a interface do Google Planilhas",
        texto: `
            Você selecionou o <b>Google Planilhas</b>. Como ele funciona diretamente no seu navegador de internet, sua interface é mais limpa, mas possui todas as ferramentas essenciais organizadas em barras de fácil acesso.<br><br>
            
            Veja abaixo a interface padrão do Google Planilhas assim que abrimos um arquivo novo:<br><br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/google_sheets_screen.png" alt="Imagem da tela do Google Planilhas" style="width: 100%; height: auto;"></div>
            </div>

            <p>A partir da imagem acima, vamos compreender a função de cada uma das suas partes principais:</p><br>

            <p><b>1. Barra de Menus:</b> Fica logo abaixo do título do arquivo (Arquivo, Editar, Ver, Inserir, Formatar...). Ao clicar em qualquer uma dessas palavras, um menu em lista se abre para baixo, mostrando as opções disponíveis.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/google_sheets_screen_mt.png" alt="Imagem do Menu de Linha de Texto" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>2. Barra de Atalhos ou Barra de Ferramentas:</b> É a linha cheia de ícones logo abaixo dos menus. Ela traz botões rápidos para as funções que mais usamos no dia a dia, como desfazer, imprimir, formatar como moeda, mudar a cor do texto e aplicar bordas.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/google_sheets_screen_ba.png" alt="Imagem da Barra de Atalhos" style="width: 100%; height: auto;"></div>
            </div><br>
                        
            <p><b>3. Barra de Fórmulas:</b> É o espaço em branco comprido que fica ao lado da Caixa de Nome. Quando você clica em uma célula que possui um cálculo ou uma palavra, é aqui que o Google Planilhas te mostra o que foi digitado de verdade ali dentro.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/google_sheets_screen_bf.png" alt="Imagem da Barra de Fórmulas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>4. Área de Trabalho da Planilha:</b> O corpo central da tela. Uma grande malha quadriculada onde as colunas são organizadas por letras (A, B, C...) e as linhas por números (1, 2, 3...). É aqui que mágina acontece e onde montamos nossas tabelas.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/google_sheets_screen_at.png" alt="Imagem da área de trabalho da planilha" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>5. Guias de Planilhas:</b> Ficam no canto inferior esquerdo do navegador. Permitem que você crie várias páginas diferentes dentro de um mesmo arquivo de planilha, clicando no botão de mais (+).</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/google_sheets_screen_gp.png" alt="Imagem das Guias de Planilhas" style="width: 100%; height: auto;"></div>
            </div><br>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "teclado_google" }
        ]
    },

    teclado_google: {
        etapa: 3,
        titulo: "Usando o teclado para navegar na interface do Google Planilhas",
        texto: `
            Aprender a navegar pela interface do Google Planilhas usando apenas o teclado é uma habilidade excelente para aumentar a produtividade e garantir acessibilidade no uso do aplicativo sem a dependência do mouse.<br><br>
            
            <b>Como abrir o Google Planilhas usando apenas o teclado:</b><br><br>
            Se você estiver na Área de Trabalho do Windows, siga estes passos:<br>
            1. Pressione a tecla <b>Windows</b> <span class="tecla"><img src="assets/img/icons/windows.svg" alt="Ícone do Windows" style="width: auto; height: 1em;"></span> para abrir o menu iniciar.<br>
            2. Digite o nome do seu navegador de internet (ex: <code>chrome</code> ou <code>edge</code>) e pressione <span class="tecla">enter</span>.<br>
            3. Na barra de endereços que se abrir, digite: <code>sheets.new</code> e pressione <span class="tecla">enter</span>. Uma planilha novinha em folha surgirá na tela de forma instantânea!<br><br>

            <div class="caixa-atalhos-teclado">
                <h4>Atalhos de acesso às barras de ferramentas</h4><br>
                <p>No ambiente web, os navegadores às vezes disputam os atalhos com as páginas. Por isso, os comandos do Google Planilhas usam combinações específicas. Teste os comandos a seguir:</p><br>
                
                <ul class="lista-teclado">
                    <li><b>Tecla <span class="tecla">alt</span>:</b> Para abrir os menus superiores sem mouse no Windows, pressione <code>alt</code>. Observe que cada opção da barra de menus terá uma das letras sublinhadas. Pressione a letra sublinha para navegar entre as opções.</li><br>
                    <li><b>Teclas <span class="tecla"><img src="assets/img/icons/seta-cima.svg" alt="Ícone de seta para cima" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-baixo.svg" alt="Ícone de seta para baixo" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-esquerda.svg" alt="Ícone de seta para a esquerda" style="width: 100%; height: auto;"></span> e <span class="tecla"><img src="assets/img/icons/seta-direita.svg" alt="Ícone de seta para a direita" style="width: 100%; height: auto;"></span>:</b> Permitem que você navegue dentro das opções da <b>Barra de menus</b> após ativá-lo pela tecla <code>alt</code>, ou mude de célula dentro da <b>área de trabalho da planilha</b>.</li><br>
                    <li><b>Tecla <span class="tecla">enter</span>:</b> Entra no modo de edição da célula selecionada, posicionando o cursor para você digitar ou alterar os dados.</li><br>
                    <li><b>Tecla <span class="tecla">esc</span>:</b> Cancela a edição atual na célula ou fecha qualquer menu suspenso que tenha sido aberto por engano, devolvendo o foco para a grade.</li><br>
                    <li><b>Teclas <span class="tecla">alt</span>+<span class="tecla"><img src="assets/img/icons/seta-cima.svg" alt="Ícone de seta para cima" style="width: 100%; height: auto;"></span> e <span class="tecla">alt</span>+<span class="tecla"><img src="assets/img/icons/seta-baixo.svg" alt="Ícone de seta para baixo" style="width: 100%; height: auto;"></span>:</b> Quando estiver com uma das <b>Guias de Planilhas</b> (abas inferiores) selecionada, use essa combinação para abrir o menu de opções daquela aba ou alternar entre as páginas.</li><br>
                </ul>
            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "interface" }
        ]
    },

    // ================= RAMIFICAÇÃO ONLYOFFICE =================

    ambiente_onlyoffice: {
        etapa: 3,
        titulo: "Conhecendo a Tela do OnlyOffice Desktop",
        texto: `
            Você selecionou o <b>OnlyOffice Desktop</b>. Ele traz o melhor dos dois mundos: funciona de forma local e offline no computador, mas utiliza o design moderno baseado em abas parecidas com o Microsoft Excel Desktop.<br><br>
            
            Veja abaixo a interface padrão do OnlyOffice assim que abrimos um arquivo novo:<br><br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_screen.png" alt="Imagem da tela do OnlyOffice" style="width: 100%; height: auto;"></div>
            </div>

            <p>A partir da imagem acima, vamos compreender a função de cada uma das suas partes principais:</p><br>

            <p><b>1. Guias de Menus:</b> Localizadas no topo da tela (Arquivo, Página Inicial, Inserir, Layout, Fórmulas, Dados, Colaboração, Proteção, Visualizar, Plug-ins e AI). Clicar nelas altera dinamicamente todo o conjunto de ferramentas exibido logo abaixo.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_screen_gm.png" alt="Imagem das Guias de Menus" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>2. Faixa de Opções:</b> É a régua de ferramentas que abriga todos os comandos visuais do programa. Ela se modifica conforme a Guia de Menu selecionada.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_screen_fo.png" alt="Imagem da Faixa de Opções" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>3. Barra de Fórmulas:</b> A linha horizontal comprida posicionada logo acima da grade de células. Indispensável para visualizar e auditar as funções matemáticas e os textos inseridos nas células.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_screen_bf.png" alt="Imagem da Barra de Fórmulas" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>4. Área de Trabalho da Planilha:</b> A grande matriz quadriculada de linhas e colunas. É neste espaço central que você insere os dados numéricos e textuais para construir tabelas e relatórios.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_screen_at.png" alt="Imagem da área de trabalho da planilha" style="width: 100%; height: auto;"></div>
            </div><br>
            
            <p><b>5. Guias de Planilhas:</b> Abas localizadas na parte inferior esquerda. Permitem gerenciar diferentes planilhas e organizar o seu documento em páginas separadas.</p>
            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_screen_gp.png" alt="Imagem das Guias de Planilhas" style="width: 100%; height: auto;"></div>
            </div><br>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "teclado_onlyoffice" }
        ]
    },

    teclado_onlyoffice: {
        etapa: 3,
        titulo: "Usando o teclado para navegar na interface do OnlyOffice",
        texto: `
            Aprender a navegar pela interface do OnlyOffice usando apenas o teclado é uma habilidade excelente para aumentar a produtividade e garantir acessibilidade no uso do aplicativo sem a dependência do mouse.<br><br>
            
            <b>Como abrir o OnlyOffice usando apenas o teclado:</b><br><br>
            Se você estiver na Área de Trabalho do Windows, siga estes passos:<br>
            1. Pressione a tecla <b>Windows</b> <span class="tecla"><img src="assets/img/icons/windows.svg" alt="Ícone do Windows" style="width: auto; height: 1em;"></span> para abrir o menu iniciar.<br>
            2. Digite a palavra <code>onlyoffice</code>.<br>
            3. Pressione a tecla <span class="tecla">enter</span>. O painel central do programa será aberto imediatamente.<br><br>

            <div class="caixa-atalhos-teclado">
                <h4>Atalhos de acesso às barras de ferramentas</h4><br>
                <p>O OnlyOffice respeita a mesma regras de atalhos consagrada nos principais pacotes de escritório do mercado. Pratique os comandos abaixo:</p><br>
                
                <ul class="lista-teclado">
                    <li><b>Tecla <span class="tecla">alt</span>:</b> Pressione e solte a tecla <code>alt</code>. O sistema exibirá pequenas letras sobre cada seção de ferramentas disponível. Pressione no teclado a letra indicada na tela para saltar direto para aquela seção de ferramentas.</li><br>
                    <li><b>Teclas <span class="tecla"><img src="assets/img/icons/seta-cima.svg" alt="Ícone de seta para cima" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-baixo.svg" alt="Ícone de seta para baixo" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-esquerda.svg" alt="Ícone de seta para a esquerda" style="width: 100%; height: auto;"></span> e <span class="tecla"><img src="assets/img/icons/seta-direita.svg" alt="Ícone de seta para a direita" style="width: 100%; height: auto;"></span>:</b> Movem o cursor célula por célula na <b>área de trabalho da planilha</b> ou navegam entre as ferramentas superiores após o acionamento dos menus.</li><br>
                    <li><b>Tecla <span class="tecla">F2</span>:</b> Abre instantaneamente a edição interna da célula ativa, jogando o foco do teclado para a <b>Barra de Fórmulas</b>.</li><br>
                    <li><b>Tecla <span class="tecla">tab</span>:</b> Avança uma célula para o lado direito na grade principal.</li><br>
                    <li><b>Tecla <span class="tecla">esc</span>:</b> Cancela ações, limpa seleções indesejadas de menus e fecha painéis suspensos voltando para a grade da área de trabalho da planilha.</li><br>
                    <li><b>Teclas <span class="tecla">ctrl</span>+<span class="tecla">pg up</span> e <span class="tecla">ctrl</span>+<span class="tecla">pg dw</span>:</b> Permitem transitar rapidamente entre as diferentes planilhas criadas na <b>Guias de Planilhas</b>, na parte inferior da tela.</li><br>
                </ul>
            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "interface" }
        ]
    },

    // ================= ETAPA 4: Interfaces =================

    interface: {
        etapa: 4,
        titulo: "Interface dos editores de planilha",
        texto: `
            Independentemente da ferramenta que você escolha (Excel, Google Planilhas ou OnlyOffice), a área de trabalho da planilha é sempre a mesma: uma enorme grade organizada por letras e números, onde cada retângulo possui uma referência exclusiva e serve para guardar uma informação. <br><br>
            
            Observe atentamente cada uma das partes que compõem a interface na imagem a seguir:<br>

            <div class="container-print-tela">
                <div class="placeholder-print"><img src="assets/img/screens/onlyoffice_grid_map.png" alt="Imagem da área de trabalho da planilha no OnlyOffice. Na imagem, a linha 3 está pintada de azul, a coluna B está pintada de amarelo, a célula B3 está pintada de verde e 3 intervalos diferentes estão pintados de laranja" style="width: 100%; height: auto;"></div>
            </div>

            <p>Vamos entender cada umas dessas partes?</p><br>

            <p><b>1. Colunas:</b> São as divisões verticais da grade, identificadas sempre por <b>letras</b> (A, B, C...) posicionadas na parte superior da interface. Na imagem, a coluna B foi pintada de Amarelo.</p><br>

            <p><b>2. Linhas:</b> São as divisões horizontais, identificadas por <b>números</b> (1, 2, 3...) posicionados na lateral esquerda da interface. Na imagem, a Linha 3 foi pintada de azul.</p><br>

            <p><b>3. Célula:</b> É o retângulo gerado pelo cruzamento de uma linha com uma coluna. O nome ou endereço da célula é a combinação da letra com o número. Na imagem, o cruzamento da coluna B com a linha 3 gera a Célula B3, pintada  na cor Verde.</p><br>

            <p><b>4. Intervalo:</b> É um conjunto de células selecionadas juntas. Sempre que nos referimos a um intervalo da planilha, indicamos o início desse intervalo pelo endereço da célula localizada no canto superior esquerdo (por exemplo, F6) e o final do intervalo pelo endereço da célula no canto inferior direito (por exemplo, H10). Na linguagem das planilhas, nós escrevemos um intervalo usando o sinal de dois pontos (:) para separar os endereços de início e final (por exemplo, F6:H10). Sempre que você vê os dois pontos (:) entenda como se fosse a palavra "até". Na imagem, estão pintados de laranja os intervalos D5:F5, D7:D10 e F6:H10.</p><br>

            <div class="caixa-voce-sabia verde-excel">
                <h4>Você Sabia?</h4>
                <p>Uma planilha eletrônica parece infinita, mas ela tem limites! No OnlyOffice e no Excel, o tamanho máximo que uma única página pode ter é de exatamente <b>1.048.576 linhas</b> e <b>16.384 colunas</b>.</p><br>

                <p><b>Mas atenção</b>, só porque esse espaço existe, não significa que devemos tentar lotar a planilha até o final. Se você colocar informações demais (como o cadastro de todos os habitantes de uma grande cidade), o computador vai travar ou ficar muito lento ao fazer contas simples. O arquivo também corre um sério risco de <b>corromper</b> (dar um erro que o impede de abrir normalmente), fazendo você perder todos os seus dados.</p><br>

                <p>Quando uma empresa precisa mexer com essa quantidade gigantesca de dados, o correto não é usar planilhas, mas sim um <b>Banco de Dados</b> (sistemas especiais criados apenas para guardar e processar milhões de informações com total segurança, rapidez e sem risco de travamentos).</p>
            </div><br>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "teclado_interface" }
        ]
    },

    teclado_interface: {
        etapa: 4,
        titulo: "Usando o teclado para selecionar intervalos",
        texto: `
            <div>

                <p>Você também pode selecionar linhas, colunas e intervalos sem precisar utilizar o mouse. Pratique as combinações de comando a seguir:</p><br>

                <h4>Selecionar uma célula específica:</h4> 
                <p>Pressione <span class="tecla">ctrl</span>+<span class="tecla">G</span> no Excel <img src="assets/img/icons/microsoft_office_excel_icon.png" alt="Ícone do Excel" class="icone"> ou <span class="tecla">ctrl</span>+<span class="tecla">J</span> no Google Planilha <img src="assets/img/icons/google_sheets_icon.png" alt="Ícone do Google Planilhas" class="icone">. Uma caixa se abrirá para digitar o endereço da célula ou do intervalo (por exemplo <code>B1</code> ou <code>C1:C15</code>).</p><br>

                <h4>Selecionar um Intervalo à partir da célula atual:</h4> 
                <p>Segure a tecla <span class="tecla">shift</span> e vá apertando as teclas <span class="tecla"><img src="assets/img/icons/seta-cima.svg" alt="Ícone de seta para cima" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-baixo.svg" alt="Ícone de seta para baixo" style="width: 100%; height: auto;"></span>, <span class="tecla"><img src="assets/img/icons/seta-esquerda.svg" alt="Ícone de seta para a esquerda" style="width: 100%; height: auto;"></span> ou <span class="tecla"><img src="assets/img/icons/seta-direita.svg" alt="Ícone de seta para a direita" style="width: 100%; height: auto;"></span> conforme sua necessidade. O sistema alterará a seleção entre as células.</p><br>

                <h4>Selecionar uma Linha Inteira:</h4> 
                <p>Com a célula da linha desejada já selecionada, pressione <span class="tecla">shift</span>+<span class="tecla">espaço</span>.</p><br>

                <h4>Selecionar uma Coluna Inteira:</h4> 
                <p>Com a célula da coluna desejada já selecionada, pressione <span class="tecla">ctrl</span>+<span class="tecla">espaço</span>.</p><br>

                <h4>Selecionar a Planilha Toda:</h4> 
                <p>Combine os dois comandos de atalho anteriores, pressione <span class="tecla">shift</span>+<span class="tecla">ctrl</span>+<span class="tecla">espaço</span>.</p><br>

                <div class="caixa-voce-sabia verde-excel">
                    <h4>Você Sabia?</h4>
                    <p>As teclas de atalho podem variar de um programa para o outro. Se algum comando ensinado não funcionar em seu computador, não se preocupe: isso acontece porque ferramentas diferentes (ou até versões diferentes do mesmo programa) podem mudar as regras de atalhos.</p><br>
                    <p>Sempre que você iniciar em uma nova ferramenta, teste os comandos de teclado que você mais utiliza e verifique se os resultados são aqueles esperados. Se algum atalho não funcionar como deveria, pesquise na internet quais são os atalhos da nova ferramenta.</p>
                </div>

            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "mouse_interface" }
        ]
    },

mouse_interface: {
        etapa: 4,
        titulo: "A funcionalidade de cada modelo de cursor do mouse",
        texto: `
            <div>
                <p>Se você optar por utilizar o mouse para navegar pela sua planilha, perceberá que o modelo do ponteiro/cursor muda de formato a depender do que estiver embaixo dele. Cada formato de cursor indica uma funcionalidade completamente diferente e importante dentro da grade ou da interface:</p><br>

                <div class="tabela-ferramentas">
                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-selecao-celulas.svg" alt="Desenho de uma cruz branca larga" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Cruz Branca Larga:</b> Aparece quando o mouse está posicionado bem no meio de uma célula. O único objetivo desse formato de cursor é <b>selecionar</b>. Ao clicar e arrastar, você seleciona um conjunto de células (um intervalo) sem alterar o conteúdo delas.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-arrastar-celulas.svg" alt="Desenho de uma cruz preta e fina" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Cruz Preta e Fina:</b> Também conhecida como alça de preenchimento. Só aparece quando o mouse está posicionado exatamente em cima do quadradinho que fica no canto inferior direito da célula ativa. Serve para <b>arrastar, copiar e preencher fórmulas</b> ou sequências de dados automaticamente.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-mover-celulas.svg" alt="Desenho de quatro setas apontando para os lados" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Quatro Setas:</b> Aparece quando você posiciona o mouse exatamente em cima da linha limite da borda de uma célula selecionada. Esse formato serve para <b>mover</b> a informação daquela célula para outro lugar na tabela. Também funciona para mover intervalos.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-largura-colunas.svg" alt="Desenho de uma linha vertical com duas setas apontando para os lados" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Redimensionar Colunas ou Linhas:</b> Aparece quando você posiciona o mouse exatamente na linha divisória entre duas letras de colunas ou dois números de linhas. Serve para <b>ajustar a largura ou a altura</b> das células. Clique e arraste para o lado para esticar a coluna se o texto não couber e ficar cortado.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-coluna.svg" alt="Desenho de uma seta preta apontando para baixo" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Seta para Baixo:</b> Aparece quando o mouse é posicionado em cima das letras que identificam as colunas (A, B, C...). Um clique com esse cursor <b>seleciona a coluna inteira</b> de uma vez só, até o final da planilha.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-linha.svg" alt="Desenho de uma seta preta apontando para a direita" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Seta para a Direita:</b> Aparece quando o mouse é posicionado em cima dos números que identificam as linhas (1, 2, 3...). Um clique com esse cursor <b>seleciona a linha inteira</b> da tabela.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-texto.png" alt="Desenho da letra I maiúscula romana" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Barra de Texto (I-Beam):</b> Aparece quando você está editando o conteúdo interno de uma célula ou digitando na barra de fórmulas. Indica que o sistema está em <b>modo de digitação</b>.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-link.png" alt="Desenho de uma mãozinha apontando com o indicador" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Mãozinha de Link:</b> Aparece quando o mouse passa por cima de um hiperlink, site ou botão clicável dentro da planilha, indicando que aquela palavra vai <b>abrir uma página da internet</b>.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-selecionar.png" alt="Seta padrão do sistema operacional" class="icone" style="width: 100%; height: auto; max-width: 50px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Seta Padrão:</b> É o ponteiro comum que você usa para clicar nos menus superiores, configurações, botões de salvar ou ferramentas fora da grade de células.</p>
                        </div>
                    </div>
                </div>

                <div class="caixa-voce-sabia verde-excel">
                    <h4>Você Sabia?</h4>
                    <p>Um dos erros mais comuns de quem está aprendendo a usar planilhas é não prestar atenção no modelo do cursor antes de iniciar algum comando. Selecionar, mover ou preencher são funcionalidades ativadas por modelos de cursor diferentes.</p><br>
                    <p>Além disso, a depender do editor de planilhas que você escolher, outros símbolos visuais podem ser adotados para realizar a mesma tarefa. No Google Planilhas <img src="assets/img/icons/google_sheets_icon.png" alt="Ícone do Google Planilhas" class="icone">, por exemplo, em vez de exibir o cursor de quatro setas <img src="assets/img/icons/cursor-mover-celulas.svg" alt="Desenho de quatro setas apontando para os lados ou uma mãozinha" class="icone">, o sistema exibe o ícone de uma mão <img src="assets/img/icons/cursor-mao-fechada.png" alt="Ícone de mão fechada" class="icone">, que abre ou fecha simulando agarrar o bloco de dados.</p>
                </div>

            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "escolha_tematica" }
        ]
    },

    escolha_tematica: {
        etapa: 4,
        titulo: "Hora de comecar a construção de tabelas",
        texto: `
            <div>
                <p>Com a conclusão dos módulos anteriores, você finalizou a etapa de introdução aos componentes visuais e de navegação dos editores de planilhas. Neste momento, você já está apto a identificar as coordenadas da grade, utilizar os comandos de teclado e reconhecer as funções de cada modelo de cursor do mouse. Caso você não se recorde do conteúdo, retorne e revise o material.</p><br>
                
                <p>A partir do módulo seguinte, iniciaremos as atividades práticas de nossa sequência didática. Para aplicar os conceitos estudados, utilizaremos dados sobre temáticas que afetam a vida de todas as pessoas. Selecione abaixo qual das três áreas temáticas você deseja utilizar para desenvolver o seu projeto de construção de tabelas:</p><br>

                <div class="tabela-ferramentas">
                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/E_WEB_03.png" alt="Logotipo do ODS 3: Ícone de um coração com uma linha de batimentos cardíacos" class="icone" style="width: 100%; height: auto; max-width: 55px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Missão 1: Boa Saúde e Bem-Estar</b><br>
                            Investigue planilhas focadas no mapeamento de atendimentos médicos, distribuição de vacinas ou dados de saúde pública da comunidade para garantir uma vida saudável a todos.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/E_WEB_06.png" alt="Logotipo do ODS 6: Ícone de uma torneira com uma gota caindo" class="icone" style="width: 100%; height: auto; max-width: 55px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Missão 2: Água Potável e Saneamento</b><br>
                            Analise tabelas que medem o consumo de água, o acesso ao tratamento de esgoto e o desperdício de recursos hídricos em regiões que precisam de ajuda urgente.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/E_WEB_13.png" alt="Logotipo do ODS 13: Ícone de uma planta germinando" class="icone" style="width: 100%; height: auto; max-width: 55px;">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Missão 3: Ação Contra a Mudança Global do Clima</b><br>
                            Estude planilhas de monitoramento climático, índices de poluição do ar ou desmatamento, descobrindo o impacto das alterações climáticas através dos números.</p>
                        </div>
                    </div>
                </div>

                <p>A temáticas foram escolhidas tomando como referência e inspiração os Objetivos de Desenvolvimento Sustentável (ODS) propostos pela Organização das Nações Unidas (ONU). Oos ODS representam uma agenda de 17 metas globais adaptadas para combater a pobreza, reduzir as desigualdades sociais e regionais e preservar os recursos ambientais. No contexto nacional, esses objetivos orientam a formulação de políticas públicas, projetos educacionais e ações corporativas, buscando garantir que o crescimento econômico do país ocorra de forma inclusiva, sustentável e acessível a toda a população até 2030. Acesse <a href="https://brasil.un.org/pt-br/sdgs">https://brasil.un.org/pt-br/sdgs</a>.</p>

                <div class="caixa-voce-sabia verde-excel">
                    <h4>Atenção:</h4>
                    <p>Independentemente do tema que você escolher, os conceitos de planilhas aprendidos em nossa sequência didática serão os mesmos. Escolha aquele assunto que você mais tem curiosidade ou afinidade em aprender.</p>
                </div>

                <p>Clique no botão do tema desejado:</p>
            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Saúde", destino: "tipo_dados_saude" },
            { texto: "Água", destino: "tipo_dados_agua" },
            { texto: "Clima", destino: "tipo_dados_clima" }
        ]
    },

    // ================= TRILHA SAÚDE E BEM-ESTAR =================
    
    tipo_dados_saude: {
        etapa: 5,
        titulo: "Tipos de dados em editores de planilhas",
        texto: `
            <div>
                <p>Antes de iniciar a digitação de sua primeira tabela, é fundamental compreender que os editores de planilhas eletrônicas tratam as informações de maneiras diferentes a depender do seu conteúdo. Configurar o tipo de dado correto garante que o programa possa realizar cálculos matemáticos e organizar as informações de forma precisa.</p><br>

                <p>Abaixo, estão listados os principais tipos de dados, os quais utilizaremos em nossos exemplos:</p><br>

                <div class="tabela-ferramentas">
                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <span class="icone">Abc</span>
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Texto:</b> Compreende letras, palavras, códigos ou combinações de caracteres. É utilizado para identificar nomes, categorias, observações ou rótulos de colunas, e seus valores não são processados em cálculos aritméticos.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <span class="icone">123</span>
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Inteiro:</b> Destinado ao registro de números exatos, ou seja, valores sem frações ou casas decimais. É o formato ideal para representar contagens absolutas, quantidades de itens e unidades inteiras.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <span class="icone">1,23</span>
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Decimal:</b> Utilizado para números que possuem valores fracionados após a vírgula. É o padrão indicado para medições precisas, notas, pesos e, principalmente, para a representação de valores financeiros (moedas).</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <span class="icone">%</span>
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Percentual:</b> Representa a proporção de uma parte em relação a um todo com base em cem. Embora o editor processe essa informação internamente como um número decimal, a tela exibe o valor formatado com o símbolo de porcentagem.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <span class="white-icon" style="font-size: 1.6em;">📅</span>
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Data:</b> Armazena informações cronológicas estruturadas em formatos padronizados (como dia, mês e ano). Este tipo permite ao software calcular intervalos de tempo, prazos e datas de vencimento.</p>
                        </div>
                    </div>
                </div>

                <div class="caixa-voce-sabia verde-excel">
                    <h4>Atenção:</h4>
                    <p>Por padrão, os editores de planilhas alinham automaticamente os dados do tipo <b>Texto</b> à esquerda da célula, enquanto os dados numéricos (como <b>Inteiro, Decimal e Percentual</b>) são alinhados à direita. Essa é uma dica visual útil para identificar se o programa reconheceu corretamente o número digitado ou se o interpretou erroneamente como texto.</p><br>
                    <p>Alguns editores de planilha podem apresentar erros nos cálculos matemáticos quando você tentar calcular valores utilizando uma célula está configurada como texto. Outros editores conseguirão efetuar o cálculo, mas a recomendação é sempre configurar a célula com o tipo de dado correto.</p>
                </div>

                <p>Após compreender a diferenciação dessas informações, seguiremos para as instruções de montagem da sua primeira tabela no editor de planilhas. Esta sequência didática usará as instruções seguindo a interface do OnlyOffice, mas as instruções dadas servirão para qualquer editor de planilhas, o símbolo dos ícones e o caminho da ferramente podem sofrer variações.</p><br>

                <h3>Atividade prática</h3>
                <p>Siga o passo a passo abaixo para construir a sua tabela de controle de imunização no editor de planilhas:</p><br>

                <p><b>Passo 1: Criar um novo arquivo</b><br>
                Abra o seu editor de planilhas (OnlyOffice). Na tela inicial, clique na opção <b>"Criar nova Planilha"</b> (ou acesse o menu <i>Arquivo > Novo > Planilha</i>). Um arquivo em branco com uma grade limpa será exibido.</p><br>

                <p><b>Passo 2: Inserir a estrutura e os dados</b><br>
                Utilize a primeira linha da grade (Linha 1) para digitar os títulos das colunas de <b>A</b> até <b>E</b>. Em seguida, preencha as linhas de 2 a 4 exatamente com os dados fictícios apresentados na tabela abaixo:</p><br>

                <table class="tabela-dados-exercicio" style="width:100%; border-collapse: collapse; margin-bottom: 20px;">
                    <thead>
                        <tr style="background-color: #f2f2f2; border-bottom: 2px solid #ccc; text-align: left;">
                            <th style="padding: 8px;">A1: Vacina/Lote</th>
                            <th style="padding: 8px;">B1: Validade</th>
                            <th style="padding: 8px;">C1: Doses Aplicadas</th>
                            <th style="padding: 8px;">D1: Custo Unitário</th>
                            <th style="padding: 8px;">E1: Estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <td style="padding: 8px;">Gripe - Lote A</td>
                            <td style="padding: 8px;">15/10/2026</td>
                            <td style="padding: 8px;">1420</td>
                            <td style="padding: 8px;">25,50</td>
                            <td style="padding: 8px;">580</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <td style="padding: 8px;">Covid - Lote B</td>
                            <td style="padding: 8px;">20/01/2027</td>
                            <td style="padding: 8px;">3150</td>
                            <td style="padding: 8px;">42,00</td>
                            <td style="padding: 8px;">120</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <td style="padding: 8px;">Tétano - Lote C</td>
                            <td style="padding: 8px;">05/06/2026</td>
                            <td style="padding: 8px;">890</td>
                            <td style="padding: 8px;">18,75</td>
                            <td style="padding: 8px;">410</td>
                        </tr>
                    </tbody>
                </table>

                <p><b>Passo 3: Formatar os tipos de dados no OnlyOffice</b><br>
                Após digitar os valores textuais e numéricos puros, você deve aplicar a formatação correta para cada coluna utilizando o menu superior do programa:</p>
                <ul>
                    <li><b>Coluna A (Vacina/Lote):</b> Selecione as células de A2 a A4. No painel superior, aba <i>Página Inicial</i>, localize a caixa de seleção de formato (que inicialmente exibe "Geral") e mude para <b>Texto</b>.</li>
                    <li><b>Coluna B (Validade):</b> Selecione de B2 a B4. Na mesma caixa de seleção do topo, mude o formato para <b>Data</b>.</li>
                    <li><b>Colunas C e E (Doses e Estoque):</b> Selecione estes intervalos e configure-os como <b>Inteiro</b> (ou "Número" sem casas decimais).</li>
                    <li><b>Coluna D (Custo Unitário):</b> Selecione de D2 a D4 e configure o formato como <b>Moeda</b> (ou "Contábil"). O programa adicionará automaticamente o símbolo "R$" e ajustará as duas casas decimais.</li>
                </ul><br>

                <p><b>Passo 4: Salvar o documento</b><br>
                Para assegurar que seu progresso não seja perdido, clique no menu <b>Arquivo</b> no canto superior esquerdo e selecione <b>Salvar como</b>. Escolha uma pasta de sua preferência no computador e nomeie o arquivo como <code>controle_vacinas_saude</code> no formato padrão (.xlsx).</p><br>

                <p>Com o arquivo devidamente estruturado, formatado e salvo, clique no botão abaixo para prosseguir à verificação dos resultados.</p>
            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Saúde", destino: "tebela_tipo_dados_saude" }
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