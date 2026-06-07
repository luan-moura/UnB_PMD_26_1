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
                            <p class="texto-unico-app"><b>Inteiro:</b> Destinado ao registro de números exatos, ou seja, valores sem frações ou casas decimals. É o formato ideal para representar contagens absolutas, quantidades de itens e unidades inteiras.</p>
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
                    <p>Alguns editores de planilha podem apresentar erros nos cálculos matemáticos quando você tentar calcular valores utilizando uma célula que está configurada como texto. Outros editores conseguirão efetuar o cálculo, mas a recomendação é sempre configurar a célula com o tipo de dado correto.</p>
                </div>

                <p>Após compreender a diferença dessas informações, seguiremos para as instruções de montagem da sua primeira tabela no editor de planilhas. Esta sequência didática usará as instruções seguindo a interface do OnlyOffice, mas as orientações dadas servirão para qualquer editor de planilhas; o símbolo dos ícones e o caminho das ferramentas podem sofrer variações.</p><br>

                <h3>Atividade Prática</h3><br>
                
                <div>
                    <p><b>Contexto da atividade:</b><br>
                    Imagine que você trabalha na área administrativa de um posto de saúde do bairro. Ao final de cada mês, a coordenação da unidade solicita um relatório sobre a quantidade total de doses que foram aplicadas na população. Este relatório deverá apresentar a quantidade de doses aplicadas por lote de vacinação, indicar o prazo de validade do lote, o custo unitário da dose e o percentual de doses que ainda restam daquele lote.</p><br>
                    <p>As informações sobre o lote, custo e estoque são obtidas pelo setor que controla o almoxarifado de vacinas, enquanto os números de doses aplicadas são obtidos com o setor de aplicação de vacinas.</p><br>
                </div>

                <div>
                    <h4>Inclusão de dados:</h4>
                    <ol>
                        <li>Abra o seu editor de planilhas.</li>
                        <li>Crie uma nova planilha.</li>
                        <li>Escreva as informações a seguir:</li>
                    </ol><br>
                </div>

                <div class="simulador-planilha">
                    <table class="grade-onlyoffice">
                        <thead>
                            <tr>
                                <th>
                                    <img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade. Quando clicado, seleciona toda a grade." class="img-canto">
                                </th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                                <th>E</th>
                                <th>F</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vacina</td>
                                <td>Lote</td>
                                <td>Validade</td>
                                <td>Doses aplicadas</td>
                                <td>Custo unitário</td>
                                <td>Em estoque</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Influenza</td>
                                <td>L15F</td>
                                <td>06/08/2027</td>
                                <td class="num">1250</td>
                                <td class="num">125,78</td>
                                <td class="num">0%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Influenza</td>
                                <td>L29S</td>
                                <td>12/12/2027</td>
                                <td class="num">237</td>
                                <td class="num">130,45</td>
                                <td class="num">76,3%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Febre Amarela</td>
                                <td>L34X</td>
                                <td>12/12/2027</td>
                                <td class="num">96</td>
                                <td class="num">249,2</td>
                                <td class="num">54%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Tríplice viral</td>
                                <td>L95M</td>
                                <td>05/07/2027</td>
                                <td class="num">149</td>
                                <td class="num">150</td>
                                <td class="num">36%</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>HPV</td>
                                <td>L37Q</td>
                                <td>06/07/2027</td>
                                <td class="num">47</td>
                                <td class="num">1150,12</td>
                                <td class="num">76,4%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Instruções de formatação:</h4>
                <ol>
                    <li>Selecione as células de <code>A1:B6</code>, vá até a guia <b>Página Inicial</b>, procure pela ferramenta <b>Formato de Número</b>, e aplique a opção <b>Texto</b> aos tipos de dados selecionados.</li>
                    <li>Selecione as células de <code>C1:F1</code> e aplique a mesma opção de <b>Texto</b> aos tipos de dados selecionados.</li>
                    <li>Selecione as células de <code>C2:C6</code> e aplique a opção de <b>Data Curta</b> aos tipos de dados selecionados.</li>
                    <li>Selecione as células de <code>D2:D6</code> e aplique a opção de <b>Número</b> aos tipos de dados selecionados.</li>
                    <li>No mesmo intervalo de <code>D2:D6</code>, vá até a guia <b>Página Inicial</b>, procure pela ferramenta <b>Estilo vírgula</b> <img src="assets/img/icons/estilo-virgula.svg" alt="Ícone da ferramenta Estilo vírgula. Para acessá-la pelo teclado pressione em sequência: alt H A O."> e aplique sobre o intervalo selecionado. Esta ferramenta é utilizada para incluir os pontos de milhares.</li>
                    <li>Ainda no mesmo intervalo de <code>D2:D6</code>, na guia <b>Página Inicial</b>, procure pela ferramenta <b>Diminuir casas decimais</b> <img src="assets/img/icons/decimal-diminuir.svg" alt="Ícone da ferramenta Diminuir casas decimais. Para acessá-la pelo teclado pressione em sequência: alt H A P."> e ajuste o número de casas decimais para nenhuma.</li>
                    <li>Selecione as células de <code>E2:E6</code>, vá até a guia <b>Página Inicial</b> e aplique a opção de <b>Moeda</b> aos tipos de dados selecionados.</li>
                    <li>Selecione as células de <code>F2:F6</code>, na guia <b>Página Inicial</b>, procure pela ferramenta <b>Aumentar casas decimais</b> <img src="assets/img/icons/decimal-aumentar.svg" alt="Ícone da ferramenta Aumentar casas decimais. Para acessá-la pelo teclado pressione em sequência: alt H A Q."> e ajuste o número de casas decimais para duas.</li>
                </ol><br>

                <h4><b>Resultado Esperado:</b></h4><br>
                <p>Após aplicar as configurações de tipo de dado descritas nas instruções, sua tabela deverá apresentar a formatação visualizada na imagem abaixo:</p>
                
                <div class="simulador-planilha">
                    <table class="grade-onlyoffice">
                        <thead>
                            <tr>
                                <th>
                                    <img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade. Quando clicado, seleciona toda a grade." class="img-canto">
                                </th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                                <th>E</th>
                                <th>F</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vacina</td>
                                <td>Lote</td>
                                <td>Validade</td>
                                <td>Doses aplicadas</td>
                                <td>Custo unitário</td>
                                <td>Em estoque</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Influenza</td>
                                <td>L15F</td>
                                <td>06/08/2027</td>
                                <td class="num">1.250</td>
                                <td class="num">R$ 125,78</td>
                                <td class="num">0,00%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Influenza</td>
                                <td>L29S</td>
                                <td>12/12/2027</td>
                                <td class="num">237</td>
                                <td class="num">R$ 130,45</td>
                                <td class="num">76,30%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Febre Amarela</td>
                                <td>L34X</td>
                                <td>12/12/2027</td>
                                <td class="num">96</td>
                                <td class="num">R$ 249,20</td>
                                <td class="num">54,00%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Tríplice viral</td>
                                <td>L95M</td>
                                <td>05/07/2027</td>
                                <td class="num">149</td>
                                <td class="num">R$ 150,00</td>
                                <td class="num">36,00%</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>HPV</td>
                                <td>L37Q</td>
                                <td>06/07/2027</td>
                                <td class="num">47</td>
                                <td class="num">R$ 1.150,12</td>
                                <td class="num">76,40%</td>
                            </tr>
                        </tbody>
                    </table>
                </div><br>

                <h4><b>Salve o arquivo:</b></h4>
                <p>Não se esqueça de salvar o seu arquivo clicando na ferramenta <b>Salvar</b> <img src="assets/img/icons/salvar.svg" alt="Ícone da ferramenta Salvar. Para acessá-la pelo teclado mantenha pressionada a tecla control e pressione a tecla S."> ou o atalho <code>[ctrl+S]</code>. Se for a primeira vez salvando o arquivo, uma janela aparecerá para que você escolha o local e o nome do arquivo.</p>

                <div class="caixa-voce-sabia verde-excel">
                    <h4>Atividade complementar:</h4>
                    <p>Você sabe quais são as vacinas obrigatórias para a sua faixa etária ou se a sua caderneta de vacinação pessoal está atualizada? O Ministério da Saúde disponibiliza o calendário nacional completo e informações sobre a proteção de cada imunizante. Para consultar as orientações oficiais, acesse a cartilha de vacinação através do endereço eletrônico: <a href="https://www.gov.br/saude/pt-br/vacinacao" target="_blank">www.gov.br/saude/pt-br/vacinacao</a>.</p>
                </div>

                <p>Nesta atividade você aprendeu a configurar as informações das células em texto, número e data; a diferenciar variações numéricas como inteiros, decimais, moedas e percentagens; e a aplicar máscaras de formatação para garantir a integridade e a correta visualização dos dados inseridos. Caso queira aprofundar seus conhecimentos, teste outros formatos de números como: científico, contabilidade, data completa, hora e fração. Os editores de planilha dão suporte a muitos formatos de dados. No próximo exercício aprenderemos sobre os elementos de formatação.</p>
            </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "voltar_tela" },
            { texto: "Avançar", destino: "elementos_formatacao_saude" }
        ]
    },
    
    // === ETAPA 6: Elementos de Formatação ===
 
    elementos_formatacao_saude: {
        etapa: 6,
        titulo: "Elementos de Formatação",
        texto: `
            <div>
                <p>Após compreender como o editor interpreta a natureza de cada dado, o próximo passo é estruturar e estilizar a planilha para que ela se torne legível e eficiente. A formatação visual e os ajustes estruturais ajudam a definir a hierarquia da informação, guiam o olhar do leitor e transformam a massa de dados brutos em informação de fácil interpretação.</p><br>

                <p>Nesta etapa, aprenderemos a manipular a estrutura de linhas e colunas para organizar o layout do documento, além de aplicar formatações essenciais de alinhamento, estilos de texto e delimitação de bordas. Abaixo, estão listadas as principais ferramentas de edição estrutural e visual que utilizaremos em nossos projetos:</p><br>

                <div class="tabela-ferramentas">
                    
                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-linha.svg" alt="Inserir Linha" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Inserção de Linhas:</b> Permite adicionar uma nova linha horizontal acima da célula selecionada. Essencial para empurrar os dados para baixo e abrir espaço para o título principal na Linha 1.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cursor-coluna.svg" alt="Inserir Coluna" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Inserção de Colunas:</b> Adiciona uma nova coluna vertical à esquerda da célula selecionada. Usamos essa ferramenta para abrir espaço e organizar as novas colunas de controle (como <i>Estoque Inicial</i> e <i>Estoque Final</i>).</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/mesclar-centralizar.svg" alt="Mesclar e Centralizar" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Mesclar e Centralizar:</b> Combina um grupo de células selecionadas em uma única célula grande. É o recurso padrão para criar títulos principais que cruzam toda a largura da tabela.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-esquerda.svg" alt="Alinhar à Esquerda" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhar à Esquerda:</b> Posiciona o conteúdo encostado na margem esquerda da célula. É a formatação padrão e ideal para textos, como os nomes das vacinas, pois facilita a leitura ocidental (da esquerda para a direita).</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-centralizado.svg" alt="Alinhamento Centralizado" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhamento Centralizado:</b> Posiciona o conteúdo exatamente no meio da célula. Utilizado para cabeçalhos, códigos curtos (lotes) e datas, deixando o visual simétrico.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-direita.svg" alt="Alinhar à Direita" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhar à Direita:</b> Posiciona o conteúdo encostado na margem direita da célula. É a regra de ouro para números e valores monetários, pois mantém as unidades, dezenas e centenas perfeitamente alinhadas verticalmente.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-justificado.svg" alt="Alinhamento Justificado" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhamento Justificado:</b> Distribui o texto uniformemente entre as margens esquerda e direita da célula. Geralmente aplicado em células que contêm parágrafos grandes ou observações longas.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-superior.svg" alt="Alinhamento Superior" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhamento Vertical Superior:</b> Cola o conteúdo no topo da célula. Útil quando uma linha é muito alta e você deseja alinhar os títulos por cima.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-meio.svg" alt="Alinhamento ao Meio" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhamento Vertical ao Meio:</b> Centraliza o conteúdo verticalmente entre o topo e a base da célula. É o melhor ajuste para cabeçalhos de linhas mais largas, evitando que o texto fique "caído".</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/alinhamento-inferior.svg" alt="Alinhamento Inferior" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Alinhamento Vertical Inferior:</b> Posiciona o conteúdo na base da célula. É o comportamento padrão do editor antes de ser modificado.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/negrito.svg" alt="Negrito" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Negrito (Ctrl + B):</b> Engrossa a fonte para dar destaque imediato. Indicado para a linha de títulos, cabeçalhos das colunas e resultados de totais.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/italico.svg" alt="Itálico" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Itálico (Ctrl + I):</b> Inclina o texto sutilmente. Usado para diferenciar dados secundários, termos estrangeiros ou os códigos de identificação de lotes.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/sublinhado.svg" alt="Sublinhado" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Sublinhado (Ctrl + U):</b> Passa uma linha sob o texto. Na nossa planilha, serve como marcação estética para dar ênfase à palavra "Total".</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cor-fonte.svg" alt="Cor da Fonte" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Cor da Fonte:</b> Modifica a cor do texto ou dos números dentro da célula. É indispensável para garantir a leitura e o contraste ideal quando aplicamos fundos escuros, permitindo mudar a letra para branco, por exemplo.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/cor-preenchimento.svg" alt="Cor de Preenchimento" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Cor de Preenchimento (Lata de Tinta):</b> Pinta o fundo da célula. Ajuda a agrupar blocos visualmente, como o fundo escuro do título principal ou o tom pastel dos cabeçalhos.</p>
                        </div>
                    </div>

                    <div class="linha-ferramenta">
                        <div class="col-logo">
                            <img src="assets/img/icons/bordas-todas.svg" alt="Todas as Bordas" class="icone-app">
                        </div>
                        <div class="col-conteudo">
                            <p class="texto-unico-app"><b>Bordas da Tabela:</b> Cria contornos ao redor das células para que a grade fique visível no relatório final ou na impressão. O painel do OnlyOffice oferece 12 opções de aplicação que você pode combinar: desde contornos completos (<i>bordas-todas</i>), apenas as grades internas (<i>bordas-internas</i>) ou linhas específicas para isolar o rodapé de totais, como a <b>borda inferior dupla</b>.</p>
                        </div>
                    </div>
                </div>

                <h3>Atividade Prática</h3><br>
                
                <div>
                    <p><b>Contexto da atividade:</b><br>
                    A coordenação do posto de saúde gostou do controle inicial, mas agora enviou a listagem completa das vacinas que chegaram ao almoxarifado. Para organizar esse volume de dados, precisaremos realizar ajustes físicos na estrutura da tabela (inserindo novas linhas e colunas para novos controles) e aplicar os elementos visuais de formatação que aprendemos para criar uma hierarquia clara de leitura.</p><br>
                    <p>As colunas de <b>Estoque final</b> e <b>Em estoque</b> deverão ficar totalmente em branco por enquanto. Elas serão preenchidas no próximo módulo, onde aprenderemos a automatizar essas contas.</p><br>
                </div>

                <div>
                    <h4>Modificação e Inclusão de dados:</h4>
                    <ol>
                        <li>Abra a planilha desenvolvida na atividade anterior.</li>
                        <li>Precisaremos abrir espaço para novas colunas e alterar a posição de outra, para isso usaremos a ferramenta de inclusão de colunas e o recurso de arrastar intervalos selecionados. Os cabeçalhos da linha 1 deverão ficar exatamente nesta ordem: 
                        <br><code>A: Vacina</code> | <code>B: Lote</code> | <code>C: Validade</code> | <code>D: Estoque inicial</code> | <code>E: Doses aplicadas</code> | <code>F: Estoque final</code> | <code>G: Em estoque</code> | <code>H: Custo unitário</code>.</li>
                        <li>Clique com o botão direito sobre a letra da coluna <b>D</b> ("Doses aplicadas") e selecione a opção para inserir à esquerda.</li>
                        <li>Selecione o intervalo <code>F1:F6</code>, posicione o mouse na borda do intervalo selecionado, certifique-se de que o cursor mudou o seu ícone para as <b>Quatro Setas</b> <img src="assets/img/icons/cursor-mover-celulas.svg" alt="Desenho de quatro setas apontando para os lados" class="icone" style="width: 1em; height: auto;">, clique, segure e arraste o intervalo até o intervalo <code>H1:H6</code>.</li>
                        <li>Complete as informações da sua tabela conforme a tabela a seguir:</li>
                    </ol><br>
                </div>

                <div class="simulador-planilha">
                    <table class="grade-onlyoffice">
                        <thead>
                            <tr>
                                <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                                <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vacina</td><td>Lote</td><td>Validade</td><td>Estoque inicial</td><td>Doses aplicadas</td><td>Estoque final</td><td>Em estoque</td><td>Custo unitário</td>
                            </tr>
                            <tr><td>2</td><td>Influenza</td><td>L15F</td><td>06/08/2027</td><td class="num">1.250</td><td class="num">1.250</td><td></td><td></td><td class="num">R$ 125,78</td></tr>
                            <tr><td>3</td><td>Influenza</td><td>L29S</td><td>12/12/2027</td><td class="num">1.000</td><td class="num">237</td><td></td><td></td><td class="num">R$ 130,45</td></tr>
                            <tr><td>4</td><td>Febre Amarela</td><td>L34X</td><td>12/12/2027</td><td class="num">200</td><td class="num">96</td><td></td><td></td><td class="num">R$ 249,20</td></tr>
                            <tr><td>5</td><td>Tríplice viral</td><td>L95M</td><td>05/07/2027</td><td class="num">400</td><td class="num">149</td><td></td><td></td><td class="num">R$ 150,00</td></tr>
                            <tr><td>6</td><td>HPV</td><td>L37Q</td><td>06/07/2027</td><td class="num">200</td><td class="num">47</td><td></td><td></td><td class="num">R$ 1.150,12</td></tr>
                            <tr><td>7</td><td>BCG</td><td>B01K</td><td>20/10/2027</td><td class="num">795</td><td class="num">795</td><td></td><td></td><td class="num">R$ 95,30</td></tr>
                            <tr><td>8</td><td>BCG</td><td>B02J</td><td>15/11/2027</td><td class="num">500</td><td class="num">0</td><td></td><td></td><td class="num">R$ 95,30</td></tr>
                            <tr><td>9</td><td>Covid-19</td><td>C42P</td><td>18/09/2027</td><td class="num">1.269</td><td class="num">1.269</td><td></td><td></td><td class="num">R$ 45,00</td></tr>
                            <tr><td>10</td><td>Covid-19</td><td>C43P</td><td>22/10/2027</td><td class="num">2.000</td><td class="num">540</td><td></td><td></td><td class="num">R$ 45,00</td></tr>
                            <tr><td>11</td><td>Dengue</td><td>D11V</td><td>30/06/2027</td><td class="num">1.114</td><td class="num">1.114</td><td></td><td></td><td class="num">R$ 180,50</td></tr>
                            <tr><td>12</td><td>Dengue</td><td>D12V</td><td>15/08/2027</td><td class="num">1.500</td><td class="num">320</td><td></td><td></td><td class="num">R$ 180,50</td></tr>
                            <tr><td>13</td><td>dT</td><td>T04R</td><td>11/04/2027</td><td class="num">1.220</td><td class="num">1.220</td><td></td><td></td><td class="num">R$ 32,15</td></tr>
                            <tr><td>14</td><td>dT</td><td>T05R</td><td>19/05/2027</td><td class="num">800</td><td class="num">150</td><td></td><td></td><td class="num">R$ 32,15</td></tr>
                            <tr><td>15</td><td>DTP</td><td>D08N</td><td>04/02/2027</td><td class="num">350</td><td class="num">88</td><td></td><td></td><td class="num">R$ 74,20</td></tr>
                            <tr><td>16</td><td>Hepatite A</td><td>HA01</td><td>14/03/2027</td><td class="num">450</td><td class="num">112</td><td></td><td></td><td class="num">R$ 110,00</td></tr>
                            <tr><td>17</td><td>Hepatite B</td><td>HB07</td><td>09/01/2027</td><td class="num">853</td><td class="num">853</td><td></td><td></td><td class="num">R$ 55,40</td></tr>
                            <tr><td>18</td><td>Hepatite B</td><td>HB08</td><td>22/03/2027</td><td class="num">1.000</td><td class="num">210</td><td></td><td></td><td class="num">R$ 55,40</td></tr>
                            <tr><td>19</td><td>Meningocócica</td><td>M22W</td><td>17/07/2027</td><td class="num">600</td><td class="num">415</td><td></td><td></td><td class="num">R$ 210,30</td></tr>
                            <tr><td>20</td><td>Penta</td><td>P03Y</td><td>19/08/2027</td><td class="num">400</td><td class="num">305</td><td></td><td></td><td class="num">R$ 165,80</td></tr>
                            <tr><td>21</td><td>Pneumocócica</td><td>PN10</td><td>11/11/2027</td><td class="num">300</td><td class="num">198</td><td></td><td></td><td class="num">R$ 190,00</td></tr>
                            <tr><td>22</td><td>Poliomielite</td><td>VIP5</td><td>25/10/2027</td><td class="num">450</td><td class="num">240</td><td></td><td></td><td class="num">R$ 82,00</td></tr>
                            <tr><td>23</td><td>Rotavírus</td><td>VR02</td><td>08/04/2027</td><td class="num">500</td><td class="num">390</td><td></td><td></td><td class="num">R$ 92,45</td></tr>
                            <tr><td>24</td><td>Tríplice viral</td><td>TV09</td><td>30/05/2027</td><td class="num">350</td><td class="num">120</td><td></td><td></td><td class="num">R$ 150,00</td></tr>
                            <tr><td>25</td><td>Varicela</td><td>VZ04</td><td>14/06/2027</td><td class="num">250</td><td class="num">85</td><td></td><td></td><td class="num">R$ 225,10</td></tr>
                            <tr><td>26</td><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div><br>

                <h4>Instruções de formatação:</h4>
                <ol>
                    <li>Aplique as formatações de tipo de dado ensinadas na tela anterior nas novas linhas: estilo de milhar e sem decimais nas colunas D e E; formato Moeda na coluna H.</li>
                    <li>Clique com o botão direito sobre o número <b>1</b> na barra lateral de linhas e selecione <b>Inserir Linha Acima</b> <img src="assets/img/icons/cursor-linha.svg" alt="Ícone de linha">. Na nova célula <code>A1</code> que surgiu vazia, digite o título: <code>SISTEMA DE INVENTÁRIO E CONTROLE DE IMUNIZANTES - UBS</code>.</li>
                    <li>Selecione o intervalo de <code>A1:H1</code> e clique na ferramenta <b>Mesclar e Centralizar</b> <img src="assets/img/icons/mesclar-centralizar.svg" alt="Ícone Mesclar e Centralizar">. Com a célula ainda selecionada, mude o estilo para <b>Negrito</b> <img src="assets/img/icons/negrito.svg" alt="Ícone Negrito">, altere o tamanho da fonte para 14px, mude a <b>Cor de Preenchimento</b> <img src="assets/img/icons/cor-preenchimento.svg" alt="Ícone Cor de Preenchimento"> para um tom cinza-escuro e a <b>cor da fonte</b> <img src="assets/img/icons/cor-fonte.svg" alt="Cor da Fonte" class="icone-app"> para branco.</li>
                    <li>Selecione os cabeçalhos da tabela no intervalo de <code>A2:H2</code>. Mude o alinhamento usando a ferramenta <b>Alinhamento Centralizado</b> <img src="assets/img/icons/alinhamento-centralizado.svg" alt="Ícone Alinhamento Centralizado">, alinhe também na vertical com a ferramenta <b>Alinhamento ao Meio</b> <img src="assets/img/icons/alinhamento-meio.svg" alt="Ícone Alinhamento Vertical ao Meio">. Aplique <b>Negrito</b> e preencha o fundo com um tom cinza-claro sutil.</li>
                    <li>Selecione os nomes das vacinas no intervalo de <code>A3:A26</code> e aplique a ferramenta <b>Alinhar à Esquerda</b> <img src="assets/img/icons/alinhamento-esquerda.svg" alt="Ícone Alinhar à Esquerda">. Nas colunas de Lote (<code>B3:B26</code>) e Validade (<code>C3:C26</code>), aplique o <b>Alinhamento Centralizado</b>. Nas colunas numéricas de valores (<code>D3:H26</code>), certifique-se de usar a ferramenta <b>Alinhar à Direita</b> <img src="assets/img/icons/alinhamento-direita.svg" alt="Ícone Alinhar à Direita">.</li>
                    <li>Selecione especificamente os códigos de lote no intervalo de <code>B3:B26</code> e clique na ferramenta <b>Itálico</b> <img src="assets/img/icons/italico.svg" alt="Ícone Itálico"> para diferenciá-los visualmente do resto das palavras.</li>
                    <li>Vá até a última linha do relatório (Linha 27), selecione a célula onde está escrito "Total", aplique a ferramenta <b>Negrito</b> e depois a ferramenta <b>Sublinhado</b> <img src="assets/img/icons/sublinhado.svg" alt="Ícone Sublinhado">.</li>
                    <li>Selecione toda a área preenchida do seu relatório, partindo da célula <code>A1</code> até a célula <code>H27</code>. Procure pela ferramenta de contornos e selecione a opção <b>Bordas Todas</b> <img src="assets/img/icons/bordas-todas.svg" alt="Ícone Bordas Todas"> para desenhar a grade de impressão.</li>
                </ol><br>

                <h4><b>Resultado Esperado:</b></h4><br>
                <p>Após executar os passos de inserção estrutural, alinhamentos e aplicação de estilos estéticos, seu relatório técnico deverá apresentar exatamente o seguinte aspecto visual:</p><br>
                
                <div class="simulador-planilha">
                    <table class="grade-onlyoffice" style="border-collapse: collapse; border: 1px solid #333333; width: 100%;">
                        <thead>
                            <tr>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; padding: 4px;"><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto." class="img-canto"></th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">A</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">B</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">C</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">D</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">E</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">F</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">G</th>
                                <th style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">H</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; font-weight: normal; padding: 4px;">1</td>
                                <td colspan="8" style="border: 1px solid #333333; text-align: center; font-weight: bold; background-color: #444444; color: #ffffff; font-size: 14px; padding: 6px;">SISTEMA DE INVENTÁRIO E CONTROLE DE IMUNIZANTES - UBS</td>
                            </tr>
                            <tr style="font-weight: bold; text-align: center; vertical-align: middle; background-color: #e8e8e8;">
                                <td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; font-weight: normal; padding: 4px;">2</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Vacina</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Lote</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Validade</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Estoque inicial</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Doses aplicadas</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Estoque final</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Em estoque</td>
                                <td style="border: 1px solid #333333; padding: 4px;">Custo unitário</td>
                            </tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">3</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Influenza</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L15F</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">06/08/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.250</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.250</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 125,78</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">4</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Influenza</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L29S</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">12/12/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.000</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">237</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 130,45</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">5</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Febre Amarela</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L34X</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">12/12/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">200</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">96</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 249,20</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">6</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Tríplice viral</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L95M</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">05/07/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">400</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">149</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 150,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">7</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">HPV</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L37Q</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">06/07/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">200</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">47</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 1.150,12</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">8</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">BCG</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">B01K</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">20/10/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">795</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">795</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 95,30</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">9</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">BCG</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">B02J</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">15/11/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">500</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">0</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 95,30</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">10</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Covid-19</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">C42P</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">18/09/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.269</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.269</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 45,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">11</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Covid-19</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">C43P</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">22/10/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">2.000</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">540</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 45,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">12</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Dengue</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">D11V</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">30/06/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.114</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.114</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 180,50</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">13</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Dengue</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">D12V</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">15/08/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.500</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">320</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 180,50</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">14</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">dT</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">T04R</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">11/04/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.220</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.220</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 32,15</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">15</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">dT</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">T05R</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">19/05/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">800</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">150</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 32,15</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">16</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">DTP</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">D08N</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">04/02/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">350</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">88</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 74,20</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">17</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Hepatite A</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">HA01</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">14/03/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">450</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">112</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 110,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">18</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Hepatite B</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">HB07</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">09/01/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">853</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">853</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 55,40</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">19</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Hepatite B</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">HB08</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">22/03/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.000</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">210</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 55,40</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">20</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Meningocócica</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">M22W</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">17/07/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">600</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">415</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 210,30</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">21</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Penta</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">P03Y</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">19/08/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">400</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">305</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 165,80</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">22</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Pneumocócica</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">PN10</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">11/11/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">300</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">198</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 190,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">23</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Poliomielite</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">VIP5</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">25/10/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">450</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">240</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 82,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">24</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Rotavírus</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">VR02</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">08/04/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">500</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">390</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 92,45</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">25</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Tríplice viral</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">TV09</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">30/05/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">350</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">120</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 150,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">26</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Varicela</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">VZ04</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">14/06/2027</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">250</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">85</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 225,10</td></tr>
                            <tr style="font-weight: bold;">
                                <td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">27</td>
                                <td style="border: 1px solid #333333; padding: 4px;"><u>Total</u></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                                <td style="border: 1px solid #333333; padding: 4px;"></td>
                            </tr>
                        </tbody>
                    </table>
                </div><br>

                <h4><b>Salve o arquivo:</b></h4>
                <p>Mantenha suas alterações seguras salvando o progresso da planilha. Clique no ícone de <b>Salvar</b> <img src="assets/img/icons/salvar.svg" alt="Ícone Salvar"> ou utilize o atalho de teclado padrão <code>[ctrl+S]</code>.</p>

                <div class="caixa-voce-sabia verde-excel">
                    <h4>A Importância da Imunização</h4>
                    <p>A vacinação é uma das medidas mais eficazes de saúde pública para a prevenção, controle e erradicação de doenças. Segundo o Ministério da Saúde, manter a cobertura vacinal em níveis seguros não apenas protege o indivíduo que recebeu a dose, mas cria uma barreira de imunidade coletiva que resguarda toda a comunidade, especialmente os mais vulneráveis.</p>
                    
                    <p>Assista ao vídeo abaixo do Ministério da Saúde, que reforça a importância de imunizar-se e como esse ato individual protege a saúde de toda a população:</p>

                    <div class="video-responsivo" style="margin-top: 1rem;">
                        <iframe 
                            src="https://www.youtube.com/embed/iA04p3rEz1o?si=UkrAugw2gAqabClM" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <p>Nesta atividade, você aprendeu a modificar a estrutura física de uma planilha existente inserindo linhas e colunas sem corromper a organização dos dados anteriores. Além disso, aplicou recursos de estilização visual (negrito, itálico, sublinhado, mesclagem e cores de preenchimento) que transformaram um emaranhado de dados brutos em uma interface amigável, organizada por alinhamentos coerentes e delimitada por bordas. No próximo módulo, usaremos essa mesma planilha montada para dar os primeiros passos no uso de fórmulas matemáticas automáticas.</p>
        `,
        botoes: [
            { texto: "Retornar", destino: "tipo_dados_saude" },
            { texto: "Avançar", destino: "formulas_funcoes_saude" }
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