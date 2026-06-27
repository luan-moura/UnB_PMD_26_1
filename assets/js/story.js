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
            { texto: "Retornar", destino: "capa" }, 
            { texto: "Continuar", destino: "cotidiano" }
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
                <p>No Brasil, a falta de conectividade estável à internet ainda afeta milhões de estudantes, principalmente nas periferias e zonas rurais. Pesquisas de órgãos como o <a href="https://cetic.br/pt/pesquisa/domicilios/">cetic.br</a> apontam que muitas famílias de baixa renda acessam a internet exclusivamente pelo celular, com planos de dados limitados que bloqueiam o acesso após o consumo da franquia. Para evitar a dependência da internet, é recomendado o uso de softwares instalados, como o LibreOffice ou OnlyOffice.</p>

                <p>Caso você queira saber mais sobre como as famílias brasileiras residentes em regiões urbanas e rurais acessam às Tecnologias de Informação e Comunicação (TIC), assista ao vídeo de lançamento da pesquisa <strong>TIC Domicílios 2025</strong> disponibilizado logo abaixo. Apesar de ser um vídeo longo, ele também nos ajuda a entender como uma pesquisa é feita e como ela pode ser apresentada a sociedade.</p>

                <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000; margin-top: 1rem; border-radius: 4px;">
                    <iframe 
                        src="https://www.youtube.com/embed/WQoVMec3fC8" 
                        title="Lançamento da Pesquisa TIC Domicílios 2025" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                    </iframe>
                </div>

                <p>Você apresentaria o assunto desse vídeo de uma maneira diferente? Qual outra informação de chamou mais atenção?</p>
            </div>

            Considerando as explicações sobre as principais ferramentas de edição de planilhas eletrônicas, qual delas você gostaria de aprender?</p>
        `,
        botoes: [
            { texto: "Retornar", destino: "cotidiano" },
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
            { texto: "Retornar", destino: "ferramentas" },
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
            { texto: "Retornar", destino: "ambiente_excel" },
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
            { texto: "Retornar", destino: "ferramentas" },
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
            { texto: "Retornar", destino: "ambiente_google" },
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
            { texto: "Retornar", destino: "ferramentas" },
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
            { texto: "Retornar", destino: "ambiente_onlyoffice" },
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
            { texto: "Retornar", destino: "interface" },
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
            { texto: "Retornar", destino: "teclado_interface" },
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
            { texto: "Retornar", destino: "mouse_interface" },
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
                                <td>06/08/27</td>
                                <td class="num">1250</td>
                                <td class="num">125,78</td>
                                <td class="num">0%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Influenza</td>
                                <td>L29S</td>
                                <td>12/12/27</td>
                                <td class="num">237</td>
                                <td class="num">130,45</td>
                                <td class="num">76,3%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Febre Amarela</td>
                                <td>L34X</td>
                                <td>12/12/27</td>
                                <td class="num">96</td>
                                <td class="num">249,2</td>
                                <td class="num">54%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Tríplice viral</td>
                                <td>L95M</td>
                                <td>05/07/27</td>
                                <td class="num">149</td>
                                <td class="num">150</td>
                                <td class="num">36%</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>HPV</td>
                                <td>L37Q</td>
                                <td>06/07/27</td>
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
                                <td>06/08/27</td>
                                <td class="num">1.250</td>
                                <td class="num">R$ 125,78</td>
                                <td class="num">0,00%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Influenza</td>
                                <td>L29S</td>
                                <td>12/12/27</td>
                                <td class="num">237</td>
                                <td class="num">R$ 130,45</td>
                                <td class="num">76,30%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Febre Amarela</td>
                                <td>L34X</td>
                                <td>12/12/27</td>
                                <td class="num">96</td>
                                <td class="num">R$ 249,20</td>
                                <td class="num">54,00%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Tríplice viral</td>
                                <td>L95M</td>
                                <td>05/07/27</td>
                                <td class="num">149</td>
                                <td class="num">R$ 150,00</td>
                                <td class="num">36,00%</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>HPV</td>
                                <td>L37Q</td>
                                <td>06/07/27</td>
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

            <section class="avaliacao-reacao">
                <div>
                    <p>Antes de avançar para a próxima atividade, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
                </div>

                <aside>
                    <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                        <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                    </a>
                </aside>
            </section>
        `,
        botoes: [
            { texto: "Retornar", destino: "escolha_tematica" },
            { texto: "Avançar", destino: "formatacao_saude" }
        ]
    },
    
    // === ETAPA 6: Elementos de Formatação ===
 
    formatacao_saude: {
        etapa: 6,
        titulo: "Elementos de formatação",
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

                <h3>Atividade Prática</h3>
                
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
                            <tr><td>2</td><td>Influenza</td><td>L15F</td><td>06/08/27</td><td class="num">1.250</td><td class="num">1.250</td><td></td><td></td><td class="num">R$ 125,78</td></tr>
                            <tr><td>3</td><td>Influenza</td><td>L29S</td><td>12/12/27</td><td class="num">1.000</td><td class="num">237</td><td></td><td></td><td class="num">R$ 130,45</td></tr>
                            <tr><td>4</td><td>Febre Amarela</td><td>L34X</td><td>12/12/27</td><td class="num">200</td><td class="num">96</td><td></td><td></td><td class="num">R$ 249,20</td></tr>
                            <tr><td>5</td><td>Tríplice viral</td><td>L95M</td><td>05/07/27</td><td class="num">400</td><td class="num">149</td><td></td><td></td><td class="num">R$ 150,00</td></tr>
                            <tr><td>6</td><td>HPV</td><td>L37Q</td><td>06/07/27</td><td class="num">200</td><td class="num">47</td><td></td><td></td><td class="num">R$ 1.150,12</td></tr>
                            <tr><td>7</td><td>BCG</td><td>B01K</td><td>20/10/27</td><td class="num">795</td><td class="num">795</td><td></td><td></td><td class="num">R$ 95,30</td></tr>
                            <tr><td>8</td><td>BCG</td><td>B02J</td><td>15/11/27</td><td class="num">500</td><td class="num">0</td><td></td><td></td><td class="num">R$ 95,30</td></tr>
                            <tr><td>9</td><td>Covid-19</td><td>C42P</td><td>18/09/27</td><td class="num">1.269</td><td class="num">1.269</td><td></td><td></td><td class="num">R$ 45,00</td></tr>
                            <tr><td>10</td><td>Covid-19</td><td>C43P</td><td>22/10/27</td><td class="num">2.000</td><td class="num">540</td><td></td><td></td><td class="num">R$ 45,00</td></tr>
                            <tr><td>11</td><td>Dengue</td><td>D11V</td><td>30/06/27</td><td class="num">1.114</td><td class="num">1.114</td><td></td><td></td><td class="num">R$ 180,50</td></tr>
                            <tr><td>12</td><td>Dengue</td><td>D12V</td><td>15/08/27</td><td class="num">1.500</td><td class="num">320</td><td></td><td></td><td class="num">R$ 180,50</td></tr>
                            <tr><td>13</td><td>dT</td><td>T04R</td><td>11/04/27</td><td class="num">1.220</td><td class="num">1.220</td><td></td><td></td><td class="num">R$ 32,15</td></tr>
                            <tr><td>14</td><td>dT</td><td>T05R</td><td>19/05/27</td><td class="num">800</td><td class="num">150</td><td></td><td></td><td class="num">R$ 32,15</td></tr>
                            <tr><td>15</td><td>DTP</td><td>D08N</td><td>04/02/27</td><td class="num">350</td><td class="num">88</td><td></td><td></td><td class="num">R$ 74,20</td></tr>
                            <tr><td>16</td><td>Hepatite A</td><td>HA01</td><td>14/03/27</td><td class="num">450</td><td class="num">112</td><td></td><td></td><td class="num">R$ 110,00</td></tr>
                            <tr><td>17</td><td>Hepatite B</td><td>HB07</td><td>09/01/27</td><td class="num">853</td><td class="num">853</td><td></td><td></td><td class="num">R$ 55,40</td></tr>
                            <tr><td>18</td><td>Hepatite B</td><td>HB08</td><td>22/03/27</td><td class="num">1.000</td><td class="num">210</td><td></td><td></td><td class="num">R$ 55,40</td></tr>
                            <tr><td>19</td><td>Meningocócica</td><td>M22W</td><td>17/07/27</td><td class="num">600</td><td class="num">415</td><td></td><td></td><td class="num">R$ 210,30</td></tr>
                            <tr><td>20</td><td>Penta</td><td>P03Y</td><td>19/08/27</td><td class="num">400</td><td class="num">305</td><td></td><td></td><td class="num">R$ 165,80</td></tr>
                            <tr><td>21</td><td>Pneumocócica</td><td>PN10</td><td>11/11/27</td><td class="num">300</td><td class="num">198</td><td></td><td></td><td class="num">R$ 190,00</td></tr>
                            <tr><td>22</td><td>Poliomielite</td><td>VIP5</td><td>25/10/27</td><td class="num">450</td><td class="num">240</td><td></td><td></td><td class="num">R$ 82,00</td></tr>
                            <tr><td>23</td><td>Rotavírus</td><td>VR02</td><td>08/04/27</td><td class="num">500</td><td class="num">390</td><td></td><td></td><td class="num">R$ 92,45</td></tr>
                            <tr><td>24</td><td>Tríplice viral</td><td>TV09</td><td>30/05/27</td><td class="num">350</td><td class="num">120</td><td></td><td></td><td class="num">R$ 150,00</td></tr>
                            <tr><td>25</td><td>Varicela</td><td>VZ04</td><td>14/06/27</td><td class="num">250</td><td class="num">85</td><td></td><td></td><td class="num">R$ 225,10</td></tr>
                            <tr><td>26</td><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div><br>

                <h4>Instruções de formatação:</h4>
                <ol>
                    <li>Aplique as formatações de tipo de dado ensinadas na tela anterior nas novas linhas: estilo de milhar e sem decimais nas colunas D e E; formato Moeda na coluna H.</li>
                    <li>Clique com o botão direito sobre o número <b>1</b> na barra lateral de linhas e selecione <b>Inserir Linha Acima</b> <img src="assets/img/icons/cursor-linha.svg" alt="Ícone de linha">. Na nova célula <code>A1</code> que surgiu vazia, digite o título: <code>CONTROLE DE IMUNIZANTES APLICADOS NO MÊS</code>.</li>
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
                                <td colspan="8" style="border: 1px solid #333333; text-align: center; font-weight: bold; background-color: #444444; color: #ffffff; font-size: 14px; padding: 6px;">CONTROLE DE IMUNIZANTES APLICADOS NO MÊS</td>
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
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">3</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Influenza</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L15F</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">06/08/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.250</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.250</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 125,78</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">4</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Influenza</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L29S</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">12/12/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.000</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">237</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 130,45</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">5</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Febre Amarela</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L34X</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">12/12/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">200</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">96</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 249,20</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">6</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Tríplice viral</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L95M</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">05/07/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">400</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">149</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 150,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">7</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">HPV</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">L37Q</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">06/07/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">200</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">47</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 1.150,12</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">8</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">BCG</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">B01K</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">20/10/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">795</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">795</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 95,30</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">9</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">BCG</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">B02J</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">15/11/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">500</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">0</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 95,30</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">10</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Covid-19</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">C42P</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">18/09/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.269</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.269</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 45,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">11</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Covid-19</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">C43P</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">22/10/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">2.000</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">540</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 45,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">12</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Dengue</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">D11V</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">30/06/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.114</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.114</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 180,50</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">13</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Dengue</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">D12V</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">15/08/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.500</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">320</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 180,50</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">14</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">dT</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">T04R</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">11/04/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.220</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.220</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 32,15</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">15</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">dT</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">T05R</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">19/05/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">800</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">150</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 32,15</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">16</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">DTP</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">D08N</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">04/02/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">350</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">88</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 74,20</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">17</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Hepatite A</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">HA01</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">14/03/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">450</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">112</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 110,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">18</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Hepatite B</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">HB07</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">09/01/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">853</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">853</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 55,40</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">19</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Hepatite B</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">HB08</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">22/03/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">1.000</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">210</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 55,40</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">20</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Meningocócica</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">M22W</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">17/07/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">600</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">415</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 210,30</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">21</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Penta</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">P03Y</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">19/08/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">400</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">305</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 165,80</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">22</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Pneumocócica</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">PN10</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">11/11/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">300</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">198</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 190,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">23</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Poliomielite</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">VIP5</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">25/10/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">450</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">240</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 82,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">24</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Rotavírus</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">VR02</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">08/04/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">500</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">390</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 92,45</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">25</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Tríplice viral</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">TV09</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">30/05/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">350</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">120</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 150,00</td></tr>
                            <tr><td style="background-color: #f2f2f2; border: 1px solid #d4d4d4; text-align: center; padding: 4px;">26</td><td style="border: 1px solid #333333; text-align: left; padding: 4px;">Varicela</td><td style="border: 1px solid #333333; text-align: center; font-style: italic; padding: 4px;">VZ04</td><td style="border: 1px solid #333333; text-align: center; padding: 4px;">14/06/27</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">250</td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">85</td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; padding: 4px;"></td><td style="border: 1px solid #333333; text-align: right; padding: 4px;">R$ 225,10</td></tr>
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

                <section class="avaliacao-reacao">
                    <div>
                        <p>Antes de avançar para a próxima atividade, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
                    </div>

                    <aside>
                        <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                            <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                        </a>
                    </aside>
                </section>
        `,
        botoes: [
            { texto: "Retornar", destino: "tipo_dados_saude" },
            { texto: "Avançar", destino: "operadores_saude" }
        ]
    },
    
    // === ETAPA 7: Operadores Matemáticos ===
    operadores_saude: {
        etapa: 7, 
        titulo: "Operadores matemáticos",
        texto: `
        <p>No ambiente das planilhas eletrônicas, a execução de qualquer cálculo automatizado exige a construção de <strong>fórmulas</strong>. O principal símbolo para que o editor compreenda que um texto inserido em uma célula representa uma operação matemática é o sinal de igual (<code>=</code>). <b>Toda e qualquer fórmula deve, obrigatoriamente, ser iniciada com esse caractere.</b></p>

        <p>Uma fórmula pode ser definida como uma instrução lógica ou uma equação matemática que processa dados existentes para gerar um novo resultado automático. Em vez de utilizar valores fixos e estáticos, as fórmulas operam por meio de referências (como <code>A2</code> ou <code>B2</code>). Isso significa que, caso o dado de origem seja modificado ou atualizado na planilha, o editor recalcula o resultado final instantaneamente, eliminando a necessidade de refazer manualmente.</p>
        
        <p>Para estruturar as instruções lógicas dentro das células, utilizamos os operadores aritméticos padrão. A tabela abaixo apresenta a sintaxe exata utilizada pelos principais editores de mercado:</p>

        <div class="tabela-ferramentas">
            <table class="tabela-conceitual">
                <thead>
                    <tr>
                        <th>Operação</th>
                        <th>Símbolo</th>
                        <th>Exemplo Prático</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Adição</strong></td>
                        <td>+</td>
                        <td><code>=A2+B2</code></td>
                    </tr>
                    <tr>
                        <td><strong>Subtração</strong></td>
                        <td>-</td>
                        <td><code>=A2-B2</code></td>
                    </tr>
                    <tr>
                        <td><strong>Multiplicação</strong></td>
                        <td>*</td>
                        <td><code>=A2*B2</code></td>
                    </tr>
                    <tr>
                        <td><strong>Divisão</strong></td>
                        <td>/</td>
                        <td><code>=A2/B2</code></td>
                    </tr>
                    <tr>
                        <td><strong>Exponenciação</strong></td>
                        <td>^</td>
                        <td><code>=A2^2</code> <small class="menu-item-disabled">(Elevado ao quadrado)</small></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Outro ponto importante na construção de fórmulas é a <strong>ordem de precedência matemática</strong>. O editor de planilhas não realiza os cálculos simplesmente da esquerda para a direita; ele obedece a regras universais de prioridade aritmética.</p>

        <p>Dessa forma, as operações de <strong>exponenciação</strong> são processadas em primeiro lugar. Na sequência, executam-se as <strong>multiplicações e divisões</strong> e, por fim, as <strong>adições e subtrações</strong>. Quando houver a necessidade de alterar essa ordem natural de resolução — forçando o somatório de dois valores antes de sua respectiva divisão, por exemplo —, deve-se isolar a operação prioritária utilizando os <strong>parênteses <code>()</code></strong>.</p>

        <p>Para compreender como o editor interpreta essas prioridades e de que maneira os parênteses modificam completamente o comportamento de um cálculo, analise os exemplos comparativos a seguir:</p>

        <div class="tabela-ferramentas">
            <table class="tabela-conceitual">
                <thead>
                    <tr>
                        <th>Fórmula</th>
                        <th>Ordem de resolução</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>=10+5/5</code></td>
                        <td>Primeiro divide-se <code>5/5</code> (1) e depois soma-se <code>10+1</code></td>
                        <td><strong>11</strong></td>
                    </tr>
                    <tr>
                        <td><code>=(10+5)/5</code></td>
                        <td>Os parênteses forçam a soma <code>10+5</code> (15) antes da divisão por 5</td>
                        <td><strong>3</strong></td>
                    </tr>
                    <tr>
                        <td><code>=3*2^2</code></td>
                        <td>Primeiro resolve-se a potência <code>2^2</code> (4) e depois multiplica-se <code>3*4</code></td>
                        <td><strong>12</strong></td>
                    </tr>
                    <tr>
                        <td><code>=(3*2)^2</code></td>
                        <td>Os parênteses forçam a multiplicação <code>3*2</code> (6) antes de elevar ao quadrado</td>
                        <td><strong>36</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Abra o editor de planilha e reproduza as equações acima. Altere os números e observe se os novos resultados apresentados. Eles correspondem aos resultados que você esperava? Se não, tente descobrir qual foi o problema.</p>
        
        <h3>Atividade Prática</h3>

        <p>Na etapa anterior, você auxiliou a equipe do posto de saúde organizando visualmente a tabela com técnicas de formatação. Agora que o layout está padronizado e limpo, a coordenação admiistrativa solicitou o fechamento da planilha e pediu que você incluí-se o custo total das aplicações no mês.</p>
                
        <p>A partir de agora, utilizaremos fórmulas para executar e automatizar qualquer tipo de cálculo ou instrução. Neste exercício usaremos alguns dos operadores aritiméticos aprendidos.</p>

        <h4>Modificação e Inclusão de dados:</h4>
        <ol>
            <li>Abra a planilha desenvolvida na atividade anterior.</li>

            <li>Insira um novo cabeçalho na célula <code>I2</code> com o título: <code>Custo Total</code>.</li>

            <li>Selecione o título principal na linha 1 (que atualmente está mesclado de <code>A1:H1</code>), desfaça a mesclagem e selecione o novo intervalo de <code>A1:I1</code>. Clique novamente em <b>Mesclar e Centralizar</b> para reajustar o título ao novo tamanho do relatório. Reative a borda geral de <code>A1:I27</code> se necessário.</li>

            <li>Calcule o Estoque Final. Selecione a célula <code>F3</code> (Estoque Final da vacina Influenza). Insira o sinal de igualdade e monte a fórmula subtraindo as <b>Doses aplicadas</b> (<code>E3</code>) do <b>Estoque inicial</b> (<code>D3</code>). <br><small class="menu-item-disabled">Fórmula: <code>=D3-E3</code></small></li>

            <li>Use a alça de preenchimento automático para arrastar a fórmula da célula <code>F3</code> até a célula <code>F26</code>.Lembre-se que para usar a alça de preenchimento corretamente, você deve posicionar o cursor do mouse exatamente sobre o quadrado que marca o canto inferior esquerdo da célula até que o cursor fique com aparencia de <b>Cruz Preta e Fina</b><img src="assets/img/icons/cursor-arrastar-celulas.svg" alt="Desenho de uma cruz preta e fina" class="icone" style="height: 1em;">.</li>

            <li>Calcule a Capacidade em Estoque. A coordenação informou que a capacidade máxima padrão de armazenamento para cada lote é de 1.500 unidades. Na célula <code>G3</code> (Em estoque), calcularemos a proporção atual do estoque dividindo o <b>Estoque final</b> (<code>F3</code>) por <code>1500</code>. <br><small class="menu-item-disabled">Fórmula: <code>=F3/1500</code></small></li>

            <li>Arraste a fórmula de <code>G3</code> até <code>G26</code>. Formate o intervalo resultante com o estilo de <b>Porcentagem (%)</b>.</li>
            
            <li>Calcule o Custo Total Consumido. Na célula <code>I3</code> (Custo Total), calcularemos o valor financeiro total que já foi aplicado na população. Monte a fórmula multiplicando as <b>Doses aplicadas</b> (<code>E3</code>) pelo seu respectivo <b>Custo unitário</b> (<code>H3</code>). <br><small class="menu-item-disabled">Fórmula: <code>=E3*H3</code></small></li>
            <li>Arraste a fórmula de <code>I3</code> até a célula <code>I26</code>. Formate o intervalo como <b>Moeda</b>.</li>
            
            <li>Calcule o somatório do Estoque Inicial. Na célula <code>D27</code>, monte a fórmula somando todas as células daquela coluna, desde a linha 3 até a linha 26. <br><small class="menu-item-disabled">Fórmula: <code>=D3+D4+D5+D6+D7+D8+D9+D10+D11+D12+D13+D14+D15+D16+D17+D18+D19+D20+D21+D22+D23+D24+D25+D26</code></small></li>
        </ol>
        
        <p>Se você digitou a fórmula acima, deve ter achado exaustivo escrever uma fórmula que some 24 células usando apenas o operador de adição (<code>+</code>).</p>
        <p>Usar esse mesmo método para calcular os totais das células <code>E27</code> (Doses aplicadas), <code>F27</code> (Estoque final) e <code>I27</code> (Custo Total) é ineficiente. Imagine se posto de saúde controlasse 500 lotes de vacinas, essa tarefa seria completamente inviável. Adiante descobrirmos como resolver esse problema em segundos.</p>
        <h4><b>Salve o arquivo:</b></h4>
                <p>Mantenha suas alterações seguras salvando o progresso da planilha. Clique no ícone de <b>Salvar</b> <img src="assets/img/icons/salvar.svg" alt="Ícone Salvar"> ou utilize o atalho de teclado padrão <code>[ctrl+S]</code>.</p>

        <h4><b>Resultado Esperado:</b></h4>
        <p>Após executar os passos de inserção estrutural, alinhamentos e aplicação de estilos estéticos, seu relatório técnico deverá apresentar exatamente o seguinte aspecto visual:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td colspan="9" style="text-align: center; font-weight: bold; background-color: #444444; color: #ffffff; font-size: 14px;">CONTROLE DE IMUNIZANTES APLICADOS NO MÊS</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #f2f2f2; text-align: center;">
                        <td>2</td>
                        <td style="text-align: left;">Vacina</td><td>Lote</td><td>Validade</td><td class="num">Estoque inicial</td><td class="num">Doses aplicadas</td><td class="num">Estoque final</td><td class="num">Em estoque</td><td class="num">Custo unitário</td><td class="num">Custo Total</td>
                    </tr>
                    <tr><td>3</td><td>Influenza</td><td style="font-style: italic; text-align: center;">L15F</td><td style="text-align: center;">06/08/27</td><td class="num">1.250</td><td class="num">1.250</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 125,78</td><td class="num">R$ 157.225,00</td></tr>
                    <tr><td>4</td><td>Influenza</td><td style="font-style: italic; text-align: center;">L29S</td><td style="text-align: center;">12/12/27</td><td class="num">1.000</td><td class="num">237</td><td class="num">763</td><td class="num">51%</td><td class="num">R$ 130,45</td><td class="num">R$ 30.916,65</td></tr>
                    <tr><td>5</td><td>Febre Amarela</td><td style="font-style: italic; text-align: center;">L34X</td><td style="text-align: center;">12/12/27</td><td class="num">200</td><td class="num">96</td><td class="num">104</td><td class="num">7%</td><td class="num">R$ 249,20</td><td class="num">R$ 23.923,20</td></tr>
                    <tr><td>6</td><td>Tríplice viral</td><td style="font-style: italic; text-align: center;">L95M</td><td style="text-align: center;">05/07/27</td><td class="num">400</td><td class="num">149</td><td class="num">251</td><td class="num">17%</td><td class="num">R$ 150,00</td><td class="num">R$ 22.350,00</td></tr>
                    <tr><td>7</td><td>HPV</td><td style="font-style: italic; text-align: center;">L37Q</td><td style="text-align: center;">06/07/27</td><td class="num">200</td><td class="num">47</td><td class="num">153</td><td class="num">10%</td><td class="num">R$ 1.150,12</td><td class="num">R$ 54.055,64</td></tr>
                    <tr><td>8</td><td>BCG</td><td style="font-style: italic; text-align: center;">B01K</td><td style="text-align: center;">20/10/27</td><td class="num">795</td><td class="num">795</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 95,30</td><td class="num">R$ 75.763,50</td></tr>
                    <tr><td>9</td><td>BCG</td><td style="font-style: italic; text-align: center;">B02J</td><td style="text-align: center;">15/11/27</td><td class="num">500</td><td class="num">0</td><td class="num">500</td><td class="num">33%</td><td class="num">R$ 95,30</td><td class="num">R$ 0,00</td></tr>
                    <tr><td>10</td><td>Covid-19</td><td style="font-style: italic; text-align: center;">C42P</td><td style="text-align: center;">18/09/27</td><td class="num">1.269</td><td class="num">1.269</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 45,00</td><td class="num">R$ 57.105,00</td></tr>
                    <tr><td>11</td><td>Covid-19</td><td style="font-style: italic; text-align: center;">C43P</td><td style="text-align: center;">22/10/27</td><td class="num">2.000</td><td class="num">540</td><td class="num">1.460</td><td class="num">97%</td><td class="num">R$ 45,00</td><td class="num">R$ 24.300,00</td></tr>
                    <tr><td>12</td><td>Dengue</td><td style="font-style: italic; text-align: center;">D11V</td><td style="text-align: center;">30/06/27</td><td class="num">1.114</td><td class="num">1.114</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 180,50</td><td class="num">R$ 201.077,00</td></tr>
                    <tr><td>13</td><td>Dengue</td><td style="font-style: italic; text-align: center;">D12V</td><td style="text-align: center;">15/08/27</td><td class="num">1.500</td><td class="num">320</td><td class="num">1.180</td><td class="num">79%</td><td class="num">R$ 180,50</td><td class="num">R$ 57.760,00</td></tr>
                    <tr><td>14</td><td>dT</td><td style="font-style: italic; text-align: center;">T04R</td><td style="text-align: center;">11/04/27</td><td class="num">1.220</td><td class="num">1.220</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 32,15</td><td class="num">R$ 39.223,00</td></tr>
                    <tr><td>15</td><td>dT</td><td style="font-style: italic; text-align: center;">T05R</td><td style="text-align: center;">19/05/27</td><td class="num">800</td><td class="num">150</td><td class="num">650</td><td class="num">43%</td><td class="num">R$ 32,15</td><td class="num">R$ 4.822,50</td></tr>
                    <tr><td>16</td><td>DTP</td><td style="font-style: italic; text-align: center;">D08N</td><td style="text-align: center;">04/02/27</td><td class="num">350</td><td class="num">88</td><td class="num">262</td><td class="num">17%</td><td class="num">R$ 74,20</td><td class="num">R$ 6.529,60</td></tr>
                    <tr><td>17</td><td>Hepatite A</td><td style="font-style: italic; text-align: center;">HA01</td><td style="text-align: center;">14/03/27</td><td class="num">450</td><td class="num">112</td><td class="num">338</td><td class="num">23%</td><td class="num">R$ 110,00</td><td class="num">R$ 12.320,00</td></tr>
                    <tr><td>18</td><td>Hepatite B</td><td style="font-style: italic; text-align: center;">HB07</td><td style="text-align: center;">09/01/27</td><td class="num">853</td><td class="num">853</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 55,40</td><td class="num">R$ 47.256,20</td></tr>
                    <tr><td>19</td><td>Hepatite B</td><td style="font-style: italic; text-align: center;">HB08</td><td style="text-align: center;">22/03/27</td><td class="num">1.000</td><td class="num">210</td><td class="num">790</td><td class="num">53%</td><td class="num">R$ 55,40</td><td class="num">R$ 11.634,00</td></tr>
                    <tr><td>20</td><td>Meningocócica</td><td style="font-style: italic; text-align: center;">M22W</td><td style="text-align: center;">17/07/27</td><td class="num">600</td><td class="num">415</td><td class="num">185</td><td class="num">12%</td><td class="num">R$ 210,30</td><td class="num">R$ 87.274,50</td></tr>
                    <tr><td>21</td><td>Penta</td><td style="font-style: italic; text-align: center;">P03Y</td><td style="text-align: center;">19/08/27</td><td class="num">400</td><td class="num">305</td><td class="num">95</td><td class="num">6%</td><td class="num">R$ 165,80</td><td class="num">R$ 50.569,00</td></tr>
                    <tr><td>22</td><td>Pneumocócica</td><td style="font-style: italic; text-align: center;">PN10</td><td style="text-align: center;">11/11/27</td><td class="num">300</td><td class="num">198</td><td class="num">102</td><td class="num">7%</td><td class="num">R$ 190,00</td><td class="num">R$ 37.620,00</td></tr>
                    <tr><td>23</td><td>Poliomielite</td><td style="font-style: italic; text-align: center;">VIP5</td><td style="text-align: center;">25/10/27</td><td class="num">450</td><td class="num">240</td><td class="num">210</td><td class="num">14%</td><td class="num">R$ 82,00</td><td class="num">R$ 19.680,00</td></tr>
                    <tr><td>24</td><td>Rotavírus</td><td style="font-style: italic; text-align: center;">VR02</td><td style="text-align: center;">08/04/27</td><td class="num">500</td><td class="num">390</td><td class="num">110</td><td class="num">7%</td><td class="num">R$ 92,45</td><td class="num">R$ 36.055,50</td></tr>
                    <tr><td>25</td><td>Tríplice viral</td><td style="font-style: italic; text-align: center;">TV09</td><td style="text-align: center;">30/05/27</td><td class="num">350</td><td class="num">120</td><td class="num">230</td><td class="num">15%</td><td class="num">R$ 150,00</td><td class="num">R$ 18.000,00</td></tr>
                    <tr><td>26</td><td>Varicela</td><td style="font-style: italic; text-align: center;">VZ04</td><td style="text-align: center;">14/06/27</td><td class="num">250</td><td class="num">85</td><td class="num">165</td><td class="num">11%</td><td class="num">R$ 225,10</td><td class="num">R$ 19.133,50</td></tr>
                    <tr style="font-weight: bold;">
                        <td>27</td>
                        <td style="text-decoration: underline;">Total</td><td></td><td></td><td class="num">19.351</td><td class="num"></td><td></td><td></td><td></td><td></td></tr>
                </tbody>
            </table>
        </div>

        <div class="caixa-voce-sabia verde-excel">
            <h4>O que é Imunidade de Rebanho?</h4>
            <p>Quando uma grande parte de uma população é vacinada contra uma doença, ela cria uma espécie de "escudo de proteção" que impede o vírus de se espalhar. Isso é chamado de <strong>Imunidade de Rebanho</strong>. Esse fenômeno protege indiretamente as pessoas que não podem ser vacinadas, como bebês recém-nascidos ou pacientes em tratamentos graves de saúde. Na planilha que você está calculando, cada lote distribuído e cada dose aplicada representam uma engrenagem matemática real para alcançar a porcentagem ideal de segurança e salvar vidas na comunidade.</p>
            
            <p>Assista ao vídeo abaixo para entender como funciona essa barreira de proteção coletiva:</p>

            <div class="video-responsivo" style="margin-top: 1rem;">
                <iframe 
                    src="https://www.youtube.com/embed/ruQ0rLeSeVo?si=kbnp_-jqLVja4iDy" 
                    title="Vídeo explicativo sobre Imunidade de Rebanho"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <p>Nesta etapa, você aprendeu a transformar dados estáticos em informações dinâmicas construindo fórmulas com os operadores de adição, subtração, multiplicação e divisão, além de definir a ordem de precedência aritmética com o uso dos parênteses. Contudo, ao digitar a exaustiva soma de 24 linhas para consolidar o total do Estoque Inicial, você se deparou com o limite das fórmulas que usam operadores aritiméticos para grandes intervalos.</p>
        <p>Na próxima etapa, você compreenderá o conceito e a sintaxe de estruturas pré-definidas como as funções <code>SOMA</code>, <code>MÉDIA</code>, <code>MÁXIMO</code>, <code>MÍNIMO</code> e <code>CONT.NÚM</code>, projetadas para processar grandes volumes de dados instantaneamente.</p>

        <section class="avaliacao-reacao">
            <div>
                <p>Antes de avançar para a próxima atividade, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
            </div>

            <aside>
                <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                    <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                </a>
            </aside>
        </section>
    `,
    botoes: [
        { texto: "Voltar", destino: "formatacao_saude" },
        { texto: "Avançar", destino: "funcoes_saude" }
    ]
},
    // === ETAPA 8: Funções Iniciais ===
    funcoes_saude: {
        etapa: 8, 
        titulo: "Funções iniciais",
        texto: `
        <p>Até o momento, você construiu fórmulas instruindo o editor célula por célula (como <code>=A1+A2+A3</code>). Esta maneira é útil para situações que dependem de poucas células, mas se torna inviável na maioria das situações. Para resolver isso, as planilhas eletrônicas utilizam <strong>Funções</strong>: estruturas lógicas pré-definidas que realizam operações complexas instantaneamente sobre intervalos de células.</p>

        <p>Uma função é composta por três elementos obrigatórios que ditam sua <strong>sintaxe</strong>:</p>
        <ol>
            <li><strong>O sinal de igualdade (<code>=</code>):</strong> Indica ao editor que uma operação será realizada.</li>
            <li><strong>O nome da função:</strong> O comando específico em letras maiúsculas (ex: <code>SOMA</code>).</li>
            <li><strong>Os argumentos entre parênteses <code>()</code>:</strong> Os dados ou intervalos de células que a função irá processar.</li>
        </ol>

        <p>Existem algumas dicas que são valiosas e funcionam para qualquer função nos editores de planilha:</p>
        <ul>
            <li>Se a função possui mais de um argumento, cada argumento é separado por ponto-e-vírgula (<code>;</code>). <small><code>=NOMEFUNCAO(ARGUMENTO1;ARGUMENTO2;ARGUMENTO...)</code></small></li>
            <li>Cada função exige que os argumentos sejam informados em uma ordem específica; se você não obedecer a essa ordem, a função apresentará um erro.</li>
            <li>Não se preocupe em memorizar a ordem dos argumentos, porque a maioria dos editores de planilha nos dá uma "cola" sobre a ordem deles:</li>
            <ul>
                <li>Quando você estiver digitando uma função, note que o editor de planilhas vai exibir uma caixa flutuante com algumas informações; lá estão as dicas da ordem dos argumentos.</li>
                <li>Por exemplo, se você digita <code>=soma(</code>, o seu editor de planilha exibirá uma caixa flutuante com <code>=soma(<b>arg1</b>;[arg2];...)</code>.</li>
                <li>O argumento que estiver em negrito é exatamente aquele que você precisa inserir no momento.</li>
                <li>Se houver argumentos entre colchetes, estes são opcionais.</li>
            </ul>
        </ul>

        <h4>Conheça algumas funções</h4>

        <p>Separamos algumas funções iniciais que são muito utilizadas e exigem apenas um intervalo como argumento, por padrão:</p>

        <div class="tabela-ferramentas">
            <table class="tabela-conceitual">
                <thead>
                    <tr>
                        <th>Função</th>
                        <th>O que ela faz?</th>
                        <th>Exemplo de Sintaxe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>SOMA</code></td>
                        <td>Soma todos os valores numéricos presentes no intervalo selecionado.</td>
                        <td><code>=SOMA(D3:D26)</code></td>
                    </tr>
                    <tr>
                        <td><code>CONT.NÚM</code></td>
                        <td>Conta quantas células no intervalo possuem números cadastrados (ignora textos ou células vazias).</td>
                        <td><code>=CONT.NÚM(E3:E26)</code></td>
                    </tr>
                    <tr>
                        <td><code>CONT.VALORES</code></td>
                        <td>Conta quantas células no intervalo não estão vazias, independente de conterem textos ou números.</td>
                        <td><code>=CONT.VALORES(A3:A26)</code></td>
                    </tr>
                    <tr>
                        <td><code>CONTAR.VAZIO</code></td>
                        <td>Conta a quantidade de células totalmente vazias dentro do intervalo selecionado.</td>
                        <td><code>=CONTAR.VAZIO(C3:C26)</code></td>
                    </tr>
                    <tr>
                        <td><code>MÁXIMO</code></td>
                        <td>Identifica e retorna o maior valor numérico encontrado dentro do intervalo.</td>
                        <td><code>=MÁXIMO(H3:H26)</code></td>
                    </tr>
                    <tr>
                        <td><code>MÍNIMO</code></td>
                        <td>Identifica e retorna o menor valor numérico encontrado dentro do intervalo.</td>
                        <td><code>=MÍNIMO(H3:H26)</code></td>
                    </tr>
                    <tr>
                        <td><code>MÉDIA</code></td>
                        <td>Calcula a média aritmética simples (soma todos os valores e divide pela quantidade de elementos).</td>
                        <td><code>=MÉDIA(I3:I26)</code></td>
                    </tr>
                    <tr>
                        <td><code>MED</code></td>
                        <td>Retorna a mediana do intervalo (o número que está exatamente no centro de um conjunto de dados ordenados).</td>
                        <td><code>=MED(I3:I26)</code></td>
                    </tr>
                    <tr>
                        <td><code>MODO</code></td>
                        <td>Identifica e retorna o valor que se repete com maior frequência dentro do intervalo.</td>
                        <td><code>=MODO(B3:B26)</code></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Existem dezenas de funções disponíveis para as mais diversas finalidades. Não é nosso objetivo ensinar todas as funções, até porque algumas possuem uso muito específico. O mais importante é saber como construir a função (sintaxe) e onde consultar o catálogo de opções disponíveis.</p>

        <p>Se você clicar no ícone <strong>f<sub>x</sub></strong>, ao lado esquerdo da barra de fórmulas, uma janela de inserção de função categorizará as opções por: Texto e dados, Estatística, Data e hora, Engenharia, Base de dados, Financeiro, Matemática e trigonometria, Pesquisa e referência, Informação, Lógico, entre outras. Escolha uma categoria, clique nas funções e leia a descrição de cada uma delas. Com o tempo, você aprenderá a separar as funções que são úteis para os seus projetos.</p>

        <h3>Atividade Prática</h3>

        <p>Agora que aprendemos algumas funções funções iniciais poderemos concluir a linha 27 da tabela "CONTROLE DE IMUNIZANTES APLICADOS NO MÊS". Porém a admintração do posto solicitou que a mesma tabela indicasse na parte inferior quantos lotes foram usado no mês, qual é a data de vencimento mais próxima e qual a mais distante.</p>

        <h4>Modificação e Inclusão de dados:</h4>
        <ol>
            <li>Abra a sua planilha de controle de imunizantes na linha **27**.</li>
            <li>Apague a fórmula manual da célula <code>D27</code>. Substitua-a pela função de intervalo: <code>=SOMA(D3:D26)</code>. Pressione Enter e observe o mesmo resultado surgir.</li>
            <li>Adicione as fórmulas de totais nas células <code>E27</code>, <code>F27</code> e <code>I27</code> utilizando a função <code>=SOMA()</code> adaptada para cada coluna.</li>
            <li>Na célula A29 digite "Número de lotes usados:". Mescle o intervalo A29:D29 e alinhe o texto à direita.</li>
            <li>Na célula A30 digite "Data de vencimento mais próxima:". Mescle o intervalo A30:D30 e alinhe o texto à direita.</li>
            <li>Na célula A31 digite "Data de vencimento mais distante:". Mescle o intervalo A31:D31 e alinhe o texto à direita.</li>
            <li>Selecione o intervalo A29:E31 e aplique a formatação todas as bordas</li>
            <li>Selacione o intervalo A29:D31 e formate a cor de fundo igual a cor usada no cabeçalho da linha 2.</li>
            <li>Em E29 use a função CONT.NÚM para contar as doses aplicadas (E3:E26).</li>
            <li>Em E30 use a função MÍNIMO para descobrir qual a menor data de vencimento (C3:C26)</li>
            <li>Em E31 use a função MÁXIMO para descobrir qual a maior data de vencimento (C3:C26)</li>
            <li>Formate as células E29, E30 e E31 conforme seus respectivos tipos de dados e alinhamento à esquerda.</li>
        </ol>

        <h4>Resultado Esperado:</h4>

        <p>Após executar os passos de inserção estrutural, alinhamentos e aplicação de estilos estéticos, seu relatório técnico deverá apresentar exatamente o seguinte aspecto visual:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td colspan="9" style="text-align: center; font-weight: bold; background-color: #444444; color: #ffffff; font-size: 14px;">CONTROLE DE IMUNIZANTES APLICADOS NO MÊS</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #f2f2f2; text-align: center;">
                        <td>2</td>
                        <td style="text-align: left;">Vacina</td><td>Lote</td><td>Validade</td><td class="num">Estoque inicial</td><td class="num">Doses aplicadas</td><td class="num">Estoque final</td><td class="num">Em estoque</td><td class="num">Custo unitário</td><td class="num">Custo Total</td>
                    </tr>
                    <tr><td>3</td><td>Influenza</td><td style="font-style: italic; text-align: center;">L15F</td><td style="text-align: center;">06/08/2027</td><td class="num">1.250</td><td class="num">1.250</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 125,78</td><td class="num">R$ 157.225,00</td></tr>
                    <tr><td>4</td><td>Influenza</td><td style="font-style: italic; text-align: center;">L29S</td><td style="text-align: center;">12/12/2027</td><td class="num">1.000</td><td class="num">237</td><td class="num">763</td><td class="num">51%</td><td class="num">R$ 130,45</td><td class="num">R$ 30.916,65</td></tr>
                    <tr><td>5</td><td>Febre Amarela</td><td style="font-style: italic; text-align: center;">L34X</td><td style="text-align: center;">12/12/2027</td><td class="num">200</td><td class="num">96</td><td class="num">104</td><td class="num">7%</td><td class="num">R$ 249,20</td><td class="num">R$ 23.923,20</td></tr>
                    <tr><td>6</td><td>Tríplice viral</td><td style="font-style: italic; text-align: center;">L95M</td><td style="text-align: center;">05/07/2027</td><td class="num">400</td><td class="num">149</td><td class="num">251</td><td class="num">17%</td><td class="num">R$ 150,00</td><td class="num">R$ 22.350,00</td></tr>
                    <tr><td>7</td><td>HPV</td><td style="font-style: italic; text-align: center;">L37Q</td><td style="text-align: center;">06/07/2027</td><td class="num">200</td><td class="num">47</td><td class="num">153</td><td class="num">10%</td><td class="num">R$ 1.150,12</td><td class="num">R$ 54.055,64</td></tr>
                    <tr><td>8</td><td>BCG</td><td style="font-style: italic; text-align: center;">B01K</td><td style="text-align: center;">20/10/2027</td><td class="num">795</td><td class="num">795</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 95,30</td><td class="num">R$ 75.763,50</td></tr>
                    <tr><td>9</td><td>BCG</td><td style="font-style: italic; text-align: center;">B02J</td><td style="text-align: center;">15/11/2027</td><td class="num">500</td><td class="num">0</td><td class="num">500</td><td class="num">33%</td><td class="num">R$ 95,30</td><td class="num">R$ 0,00</td></tr>
                    <tr><td>10</td><td>Covid-19</td><td style="font-style: italic; text-align: center;">C42P</td><td style="text-align: center;">18/09/2027</td><td class="num">1.269</td><td class="num">1.269</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 45,00</td><td class="num">R$ 57.105,00</td></tr>
                    <tr><td>11</td><td>Covid-19</td><td style="font-style: italic; text-align: center;">C43P</td><td style="text-align: center;">22/10/2027</td><td class="num">2.000</td><td class="num">540</td><td class="num">1.460</td><td class="num">97%</td><td class="num">R$ 45,00</td><td class="num">R$ 24.300,00</td></tr>
                    <tr><td>12</td><td>Dengue</td><td style="font-style: italic; text-align: center;">D11V</td><td style="text-align: center;">30/06/2027</td><td class="num">1.114</td><td class="num">1.114</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 180,50</td><td class="num">R$ 201.077,00</td></tr>
                    <tr><td>13</td><td>Dengue</td><td style="font-style: italic; text-align: center;">D12V</td><td style="text-align: center;">15/08/2027</td><td class="num">1.500</td><td class="num">320</td><td class="num">1.180</td><td class="num">79%</td><td class="num">R$ 180,50</td><td class="num">R$ 57.760,00</td></tr>
                    <tr><td>14</td><td>dT</td><td style="font-style: italic; text-align: center;">T04R</td><td style="text-align: center;">11/04/2027</td><td class="num">1.220</td><td class="num">1.220</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 32,15</td><td class="num">R$ 39.223,00</td></tr>
                    <tr><td>15</td><td>dT</td><td style="font-style: italic; text-align: center;">T05R</td><td style="text-align: center;">19/05/2027</td><td class="num">800</td><td class="num">150</td><td class="num">650</td><td class="num">43%</td><td class="num">R$ 32,15</td><td class="num">R$ 4.822,50</td></tr>
                    <tr><td>16</td><td>DTP</td><td style="font-style: italic; text-align: center;">D08N</td><td style="text-align: center;">04/02/2027</td><td class="num">350</td><td class="num">88</td><td class="num">262</td><td class="num">17%</td><td class="num">R$ 74,20</td><td class="num">R$ 6.529,60</td></tr>
                    <tr><td>17</td><td>Hepatite A</td><td style="font-style: italic; text-align: center;">HA01</td><td style="text-align: center;">14/03/2027</td><td class="num">450</td><td class="num">112</td><td class="num">338</td><td class="num">23%</td><td class="num">R$ 110,00</td><td class="num">R$ 12.320,00</td></tr>
                    <tr><td>18</td><td>Hepatite B</td><td style="font-style: italic; text-align: center;">HB07</td><td style="text-align: center;">09/01/2027</td><td class="num">853</td><td class="num">853</td><td class="num">0</td><td class="num">0%</td><td class="num">R$ 55,40</td><td class="num">R$ 47.256,20</td></tr>
                    <tr><td>19</td><td>Hepatite B</td><td style="font-style: italic; text-align: center;">HB08</td><td style="text-align: center;">22/03/2027</td><td class="num">1.000</td><td class="num">210</td><td class="num">790</td><td class="num">53%</td><td class="num">R$ 55,40</td><td class="num">R$ 11.634,00</td></tr>
                    <tr><td>20</td><td>Meningocócica</td><td style="font-style: italic; text-align: center;">M22W</td><td style="text-align: center;">17/07/2027</td><td class="num">600</td><td class="num">415</td><td class="num">185</td><td class="num">12%</td><td class="num">R$ 210,30</td><td class="num">R$ 87.274,50</td></tr>
                    <tr><td>21</td><td>Penta</td><td style="font-style: italic; text-align: center;">P03Y</td><td style="text-align: center;">19/08/2027</td><td class="num">400</td><td class="num">305</td><td class="num">95</td><td class="num">6%</td><td class="num">R$ 165,80</td><td class="num">R$ 50.569,00</td></tr>
                    <tr><td>22</td><td>Pneumocócica</td><td style="font-style: italic; text-align: center;">PN10</td><td style="text-align: center;">11/11/2027</td><td class="num">300</td><td class="num">198</td><td class="num">102</td><td class="num">7%</td><td class="num">R$ 190,00</td><td class="num">R$ 37.620,00</td></tr>
                    <tr><td>23</td><td>Poliomielite</td><td style="font-style: italic; text-align: center;">VIP5</td><td style="text-align: center;">25/10/2027</td><td class="num">450</td><td class="num">240</td><td class="num">210</td><td class="num">14%</td><td class="num">R$ 82,00</td><td class="num">R$ 19.680,00</td></tr>
                    <tr><td>24</td><td>Rotavírus</td><td style="font-style: italic; text-align: center;">VR02</td><td style="text-align: center;">08/04/2027</td><td class="num">500</td><td class="num">390</td><td class="num">110</td><td class="num">7%</td><td class="num">R$ 92,45</td><td class="num">R$ 36.055,50</td></tr>
                    <tr><td>25</td><td>Tríplice viral</td><td style="font-style: italic; text-align: center;">TV09</td><td style="text-align: center;">30/05/2027</td><td class="num">350</td><td class="num">120</td><td class="num">230</td><td class="num">15%</td><td class="num">R$ 150,00</td><td class="num">R$ 18.000,00</td></tr>
                    <tr><td>26</td><td>Varicela</td><td style="font-style: italic; text-align: center;">VZ04</td><td style="text-align: center;">14/06/2027</td><td class="num">250</td><td class="num">85</td><td class="num">165</td><td class="num">11%</td><td class="num">R$ 225,10</td><td class="num">R$ 19.133,50</td></tr>
                    <tr style="font-weight: bold;">
                        <td>27</td>
                        <td style="text-decoration: underline;">Total</td><td></td><td></td><td class="num">19.351</td><td class="num">11.191</td><td class="num">8.160</td><td></td><td></td><td class="num">R$ 1.250.772,98</td></tr>
                    <tr><td>28</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr>
                        <td>29</td>
                        <td colspan="4" style="background-color: #f2f2f2; font-weight: bold; text-align: right;">Número de lotes usados:</td>
                        <td style="text-align: right; font-weight: bold; text-align: left">24</td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td colspan="4" style="background-color: #f2f2f2; font-weight: bold; text-align: right;">Data de vencimento mais próxima:</td>
                        <td style="text-align: center; font-weight: bold; text-align: left">09/01/2027</td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td colspan="4" style="background-color: #f2f2f2; font-weight: bold; text-align: right;">Data de vencimento mais distante:</td>
                        <td style="text-align: center; font-weight: bold; text-align: left">12/12/2027</td><td></td><td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="caixa-voce-sabia verde-excel">
            <h4>Você sabe onde descartar medicamentos vencidos?</h4>
            <p>É muito comum termos na nossa casa uma caixa ou lugar onde guardamos vários medicamentos que sobram de algum tratamento ou que são usados em alguma emergência. Quando esses medicamentos estragem ou passam do prazo de validade, o que você faz?</p>
            <p> O descarte inadequado de remédios vencidos ou que sobraram de tratamentos antigos no lixo comum ou na descarga do banheiro gera sérios riscos ambientais, contaminando o solo e a água, além de representar um perigo para a saúde pública. Pessoas em situação de rua que vaculharem o seu lixo e encontrarem os medicamento, podem fazer uso deles, mesmo estragados ou vencidos.</p>
            
            <p>Existem pontos de coleta específicos, como farmácias e postos de saúde, que garantem uma destinação final correta e segura. Assista ao vídeo abaixo e entenda o impacto desse gesto no nosso dia a dia:</p>

            <div class="video-responsivo" style="margin-top: 1rem;">
                <iframe 
                    src="https://www.youtube.com/embed/rgNo4IAogj4" 
                    title="Descarte Adequado de Medicamentos Domésticos Vencidos ou em Desuso" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <p>Nesta etapa, você aprendeu a utilizar funções essenciais para extrair informações e estatísticas básicas de um intervalo de dados. Na próxima seção, entraremos no conteúdo de <strong>Análise Condicional</strong> e vamos aplicar algumas outras funções aprendidas aqui. Vamos entender como utilizar a função <code>SE</code> e suas variações para fazer a planilha tomar decisões automáticas a partir de condições lógicas.</p>

        <section class="avaliacao-reacao">
            <div>
                <p>Antes de avançar para a próxima atividade, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
            </div>

            <aside>
                <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                    <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                </a>
            </aside>
        </section>
    `,
    botoes: [
        { texto: "Voltar", destino: "operadores_saude" },
        { texto: "Avançar", destino: "condicionais_saude" }
    ]
    },
    // === ETAPA 9: Funções Condicionais ===
    condicionais_saude: {
        etapa: 9, 
        titulo: "Funções condicionais",
        texto: `
        <p>Até o momento, suas planilhas executavam os mesmos cálculos matemáticos de forma idêntica para todas as linhas. No entanto, a análise de dados normalmente depende de regras, critérios e condições específicas.</p>

        <p>As <strong>Funções Condicionais</strong> permitem que o editor de planilhas analise as informações e tome decisões automáticas com base em testes lógicos predefinidos. Em vez de procurar ou conferir linha por linha visualmente, você programa a planilha para filtrar, somar, contar ou exibir alertas de forma automatizada, dependendo do resultado encontrado.</p>

        <h3>Principais Funções Condicionais</h3>

        <p>Abaixo estão as funções mais utilizadas para automatizar a análise de dados sob critérios específicos:</p>

        <div class="tabela-ferramentas">
            
            <div class="linha-ferramenta">
                <div class="col-logo" style="display: flex; align-items: center; justify-content: center;">
                    <code style="font-size: 1.25rem; font-weight: bold; color: #107c41;">SE</code>
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app">
                        <b>O que ela faz:</b> Avalia se uma condição lógica é verdadeira ou falsa, retornando um resultado para cada situação.<br>
                        <b>Exemplo de Sintaxe:</b> <code>=SE(F3&lt;100;"CRÍTICO";"OK")</code>
                    </p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo" style="display: flex; align-items: center; justify-content: center;">
                    <code style="font-size: 1.1rem; font-weight: bold; color: #107c41;">CONT.SE</code>
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app">
                        <b>O que ela faz:</b> Examina um intervalo e conta apenas as células que atendem a um critério específico (como um texto ou um número exato).<br>
                        <b>Exemplo de Sintaxe:</b> <code>=CONT.SE(C3:C26;"Feminino")</code>
                    </p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo" style="display: flex; align-items: center; justify-content: center;">
                    <code style="font-size: 1.1rem; font-weight: bold; color: #107c41;">CONT.SES</code>
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app">
                        <b>O que ela faz:</b> Permite realizar contagens mais complexas no mesmo intervalo ou em intervalos diferentes utilizando múltiplos critérios simultâneos.<br>
                        <b>Exemplo de Sintaxe:</b> <code>=CONT.SES(C3:C26;"Feminino";B3:B26;"&gt;=60")</code>
                    </p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo" style="display: flex; align-items: center; justify-content: center;">
                    <code style="font-size: 1.1rem; font-weight: bold; color: #107c41;">SOMASE</code>
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app">
                        <b>O que ela faz:</b> Analisa um intervalo de critérios e, caso encontre a correspondência solicitada, soma os valores correspondentes de uma coluna de números.<br>
                        <b>Exemplo de Sintaxe:</b> <code>=SOMASE(A3:A26;"Influenza";I3:I26)</code>
                    </p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo" style="display: flex; align-items: center; justify-content: center;">
                    <code style="font-size: 1.1rem; font-weight: bold; color: #107c41;">SOMASES</code>
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app">
                        <b>O que ela faz:</b> Soma os valores de um intervalo numérico com base em dois ou mais critérios exigidos ao mesmo tempo.<br>
                        <b>Exemplo de Sintaxe:</b> <code>=SOMASES(I3:I26;A3:A26;"Influenza";C3:C26;"Masculino")</code>
                    </p>
                </div>
            </div>

        </div>

        <h3>Regras Importantes para Criar Condicionais</h3>

        <p>Aprofundando nosso conhecimento sobre a sintaxe das funções, você precisa dominar quatro conceitos essenciais que são muito usados em arguents de funções cndicionais, mas que se aplicam a outras funções:</p>

        <h4>1. Operadores de Comparação (Testes Lógicos)</h4>

        <p>O primeiro argumento de uma função condicional é sempre um teste lógico. Ele consiste em uma comparação objetiva entre dois valores que obrigatoriamente resulta em apenas duas respostas possíveis: <strong>VERDADEIRO</strong> (representado pelo sistema como o bit 1) ou <strong>FALSO</strong> (representado pelo bit 0). Para construir esses argumentos, utilizamos os operadores relacionais abaixo:</p>

        <div class="tabela-ferramentas">
            <table class="tabela-conceitual">
                <thead>
                    <tr>
                        <th>Operador</th>
                        <th>Nome</th>
                        <th>O que faz?</th>
                        <th>Exemplo</th>
                        <th>Resultado esperado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>=</code></td>
                        <td>Igual a</td>
                        <td>Verifica se o primeiro valor é exatamente idêntico ao segundo.</td>
                        <td><code>A1 = "Sim"</code></td>
                        <td>Retorna VERDADEIRO se o conteúdo de A1 for a palavra Sim.</td>
                    </tr>
                    <tr>
                        <td><code>&gt;</code></td>
                        <td>Maior que</td>
                        <td>Verifica se o valor à esquerda é estritamente maior que o valor à direita.</td>
                        <td><code>B2 &gt; 60</code></td>
                        <td>Retorna VERDADEIRO se o número em B2 for de 61 para cima.</td>
                    </tr>
                    <tr>
                        <td><code>&lt;</code></td>
                        <td>Menor que</td>
                        <td>Verifica se o valor à esquerda é estritamente menor que o valor à direita.</td>
                        <td><code>B2 &lt; 18</code></td>
                        <td>Retorna VERDADEIRO se o número em B2 for de 17 para baixo.</td>
                    </tr>
                    <tr>
                        <td><code>&gt;=</code></td>
                        <td>Maior ou igual a</td>
                        <td>Verifica se o valor à esquerda é maior ou se possui exatamente o mesmo valor da direita.</td>
                        <td><code>C3 &gt;= 10</code></td>
                        <td>Retorna VERDADEIRO se o número em C3 for igual a 10 ou superior.</td>
                    </tr>
                    <tr>
                        <td><code>&lt;=</code></td>
                        <td>Menor ou igual a</td>
                        <td>Verifica se o valor à esquerda é menor ou se possui exatamente o mesmo valor da direita.</td>
                        <td><code>C3 &lt;= 5</code></td>
                        <td>Retorna VERDADEIRO se o número em C3 for igual a 5 ou inferior.</td>
                    </tr>
                    <tr>
                        <td><code>&lt;&gt;</code></td>
                        <td>Diferente de</td>
                        <td>Analisa se dois valores não correspondem um ao outro sob nenhuma hipótese.</td>
                        <td><code>D4 &lt;&gt; "Não"</code></td>
                        <td>Retorna VERDADEIRO se o conteúdo de D4 for qualquer palavra que não seja Não.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>2. O uso do cifrão ($) para fixar referências (Travamento)</h4>

        <p>Quando escrevemos uma fórmula e a arrastamos para baixo ou para o lado, o editor de planilhas atualiza automaticamente as linhas e colunas das células mencionadas. Esse comportamento padrão é chamado de <strong>referência relativa</strong>. No entanto, ao usar funções condicionais, muitas vezes precisamos fixar um intervalo específico (como uma tabela de consulta ou um critério único) para impedir que ele saia do lugar. Para travar uma célula, linha ou coluna, adicionamos o caractere <code>$</code> antes da letra ou do número.</p>

        <div class="tabela-ferramentas">
            <table class="tabela-conceitual">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Exemplo</th>
                        <th>O que faz?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Referência Relativa</strong></td>
                        <td><code>A1</code></td>
                        <td>Não possui travas. Tanto a linha quanto a coluna mudam automaticamente quando a fórmula é copiada ou arrastada.</td>
                    </tr>
                    <tr>
                        <td><strong>Referência Absoluta (Fixar Tudo)</strong></td>
                        <td><code>$A$1</code></td>
                        <td>Trava completamente a coluna (letra) e a linha (número). A célula referenciada nunca se move, não importa para onde a fórmula seja arrastada.</td>
                    </tr>
                    <tr>
                        <td><strong>Referência Mista (Fixar apenas Linha)</strong></td>
                        <td><code>A$1</code></td>
                        <td>A coluna (letra) continua livre para mudar se arrastada para os lados, mas a linha (número) fica congelada se arrastada para baixo.</td>
                    </tr>
                    <tr>
                        <td><strong>Referência Mista (Fixar apenas Coluna)</strong></td>
                        <td><code>$A1</code></td>
                        <td>A coluna (letra) fica congelada se arrastada para os lados, mas a linha (número) continua livre para mudar se arrastada para baixo.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Para compreender o impacto do travamento, abra uma planilha em branco no seu editor de dados e preencha exatamente o intervalo de <code>A1</code> até <code>C3</code> com os seguintes nomes de cores:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Azul</td>
                        <td>Verde</td>
                        <td>Amarelo</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Branco</td>
                        <td>Cinza</td>
                        <td>Roxo</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Vermelho</td>
                        <td>Preto</td>
                        <td>Rosa</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Agora, realize os quatro testes abaixo e observe com atenção como as fórmulas se transformam internamente:</p>

        <h5>Teste 1: Referência Relativa</h5>
        <p>Clique na célula <code>A5</code>, digite a fórmula <code>=A1</code> e pressione Enter. Em seguida, clique na alça de preenchimento no canto inferior direito de <code>A5</code>, arraste para baixo até a célula <code>A7</code> e solte. Mantendo as três células selecionadas, clique novamente sobre a alça de preenchimento, arraste para o lado até a célula <code>C7</code> e solte.</p>
        <p><strong>O que aconteceu:</strong> Como não havia nenhuma trava, o editor seguiu o movimento do seu mouse. Ao olhar o resultado nas células, você verá a matriz de cores copiada de forma idêntica ao topo. O resultado textual e suas respectivas fórmulas serão:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>5</th>
                        <td>Azul <small class="menu-item-disabled">=A1</small></td>
                        <td>Verde <small class="menu-item-disabled">=B1</small></td>
                        <td>Amarelo <small class="menu-item-disabled">=C1</small></td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>Branco <small class="menu-item-disabled">=A2</small></td>
                        <td>Cinza <small class="menu-item-disabled">=B2</small></td>
                        <td>Roxo <small class="menu-item-disabled">=C2</small></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>Vermelho <small class="menu-item-disabled">=A3</small></td>
                        <td>Preto <small class="menu-item-disabled">=B3</small></td>
                        <td>Rosa <small class="menu-item-disabled">=C3</small></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Teste 2: Referência Absoluta (Fixar Tudo)</h5>
        <p>Clique na célula <code>A9</code>, digite a fórmula <code>=$A$1</code> e pressione Enter. Clique na alça de preenchimento e arraste para baixo até <code>A11</code>, e depois para o lado até <code>C11</code>.</p>
        <p><strong>O que aconteceu:</strong> O caractere <code>$</code> antes da letra A e antes do número 1 congelou a célula por completo. Todas as células desse novo intervalo exibirão a palavra "Azul", pois ficaram presas à célula original. Confira o resultado:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>9</th>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A$1</small></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Teste 3: Referência Mista (Fixar apenas Linha)</h5>
        <p>Clique na célula <code>A13</code>, digite a fórmula <code>=A$1</code> e pressione Enter. Arraste para baixo até <code>A15</code>, e depois para o lado até <code>C15</code>.</p>
        <p><strong>O que aconteceu:</strong> A linha 1 foi congelada, mas as colunas ficaram livres. Quando você arrastou para baixo, a fórmula continuou presa à primeira linha. Quando arrastou para os lados, ela se moveu para as colunas B e C. Na tela, a primeira linha de cores se repete verticalmente:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>13</th>
                        <td>Azul <small class="menu-item-disabled">=A$1</small></td>
                        <td>Verde <small class="menu-item-disabled">=B$1</small></td>
                        <td>Amarelo <small class="menu-item-disabled">=C$1</small></td>
                    </tr>
                    <tr>
                        <th>14</th>
                        <td>Azul <small class="menu-item-disabled">=A$1</small></td>
                        <td>Verde <small class="menu-item-disabled">=B$1</small></td>
                        <td>Amarelo <small class="menu-item-disabled">=C$1</small></td>
                    </tr>
                    <tr>
                        <th>15</th>
                        <td>Azul <small class="menu-item-disabled">=A$1</small></td>
                        <td>Verde <small class="menu-item-disabled">=B$1</small></td>
                        <td>Amarelo <small class="menu-item-disabled">=C$1</small></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Teste 4: Referência Mista (Fixar apenas Coluna)</h5>
        <p>Clique na célula <code>A17</code>, digite a fórmula <code>=$A1</code> e pressione Enter. Arraste para baixo até <code>A19</code>, e depois para o lado até <code>C19</code>.</p>
        <p><strong>O que aconteceu:</strong> A coluna A foi congelada, mas as linhas ficaram livres para mudar. Quando você arrastou para baixo, a fórmula desceu pelas linhas 1, 2 e 3. Quando arrastou para o lado, o <code>$</code> impediu que a fórmula lesse as colunas B ou C. Na tela, a primeira coluna de cores se repete horizontalmente:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>17</th>
                        <td>Azul <small class="menu-item-disabled">=$A1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A1</small></td>
                        <td>Azul <small class="menu-item-disabled">=$A1</small></td>
                    </tr>
                    <tr>
                        <th>18</th>
                        <td>Branco <small class="menu-item-disabled">=$A2</small></td>
                        <td>Branco <small class="menu-item-disabled">=$A2</small></td>
                        <td>Branco <small class="menu-item-disabled">=$A2</small></td>
                    </tr>
                    <tr>
                        <th>19</th>
                        <td>Vermelho <small class="menu-item-disabled">=$A3</small></td>
                        <td>Vermelho <small class="menu-item-disabled">=$A3</small></td>
                        <td>Vermelho <small class="menu-item-disabled">=$A3</small></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>3. Uso de Aspas para Textos</h4>

        <p>Sempre que o seu teste lógico ou o seu critério envolver uma palavra (texto), ela deve estar entre aspas duplas (ex: <code>"Feminino"</code>, <code>"Sim"</code>). Se você esquecer as aspas, o editor tentará localizar uma função com esse nome e gerará o erro <code>#NOME?</code>. Números puros não precisam de aspas.</p>

        <h4>4. Cuidado com os Separadores e a Ordem dos Argumentos</h4>

        <p>Lembre-se de separar cada argumento estritamente com ponto e vírgula (<code>;</code>). Na função <code>SE</code>, a ordem dita o resultado: o primeiro termo após o teste lógico é o que acontece se for <strong>Verdadeiro</strong>, e o segundo se for <strong>Falso</strong>. Inverter essa ordem fará seu relatório exibir dados trocados.</p>

        <h3>Atividade Prática:</h3>

        <p>O gestor da unidade de saúde precisa consolidar os dados das pessoas que receberam a vacina da Influenza. De acondo com a tabela anterior, 1.487 pessoas receberam o imunizante de Influenza (lotes L15F e L29S). Ele exportou do sistema o arquivo <code>imunizacao_influenza.csv</code> contendo os dados registrados no mês na seguinte estrutura:</p>
        
        <ul>
            <li><strong>Matrícula:</strong> Número de identificação com 11 dígitos.</li>
            <li><strong>Idade:</strong> Idade do paciente  em números inteiros.</li>
            <li><strong>Gênero:</strong> Identificado como "Masculino" ou "Feminino".</li>
            <li><strong>Gestante/Puérpera:</strong> Identificado como "Sim" ou "Não".</li>
        </ul>

        <h4>Instruções do Exercício:</h4>

        <h5>Importação e Salvamento dos Dados</h5>
        <ol>
            <li>Realize o download do arquivo de dados brutos clicando no link: <a href="../docs/imunizacao_influenza.csv" class="link-download" download><strong>imunizacao_influenza.csv</strong></a>.</li>
            <li>Abra o arquivo baixado em seu editor de planilhas. Na janela de importação que será exibida, confirme o conjunto de caracteres (codificação) e configure os separadores de colunas corretos para que os dados fiquem distribuídos adequadamente nas colunas de <code>A</code> a <code>D</code>.</li>
            <li>Salve imediatamente uma cópia do arquivo no formato nativo do seu editor de planilhas (como <code>.xlsx</code> ou <code>.ods</code>). O formato original <code>.csv</code> é um formato de texto plano e não retém fórmulas, múltiplas planilhas (abas) ou formatações estéticas.</li>
        </ol>

        <h5>Preparação e Categorização da Base de Dados</h5>
        <ol>
            <li>Renomeie a guia da planilha atual para <code>base</code>.</li>
            <li>Na célula <code>E1</code>, insira o cabeçalho <code>Grupo</code>.</li>
            <li>Na célula <code>E2</code>, insira a função <code>SES</code> para categorizar a idade do paciente (coluna B) conforme os seguintes critérios:
                <ul>
                    <li>Se a idade for menor ou igual a 2, deve retornar <code>"Bebê"</code>;</li>
                    <li>Se a idade for menor ou igual a 12, deve retornar <code>"Criança"</code>;</li>
                    <li>Se a idade for menor ou igual a 18, deve retornar <code>"Adolescente"</code>;</li>
                    <li>Se a idade for menor ou igual a 59, deve retornar <code>"Adulto"</code>;</li>
                    <li>Se a idade for maior que 59, deve retornar <code>"Idoso"</code>.</li>
                </ul>
            </li>
            <li>Com a célula <code>E2</code> selecionada, dê um duplo clique na alça de preenchimento (canto inferior direito da célula) para replicar a função automaticamente até a linha 1488, cobrindo todos os 1.487 registros de pacientes.</li>
        </ol>

        <h5>Etapa 3: Criação do Relatório de Avaliação</h5>
        <ol>
            <li>Crie uma nova planilha (aba) no mesmo arquivo e renomeie-a para <code>avaliação</code>.</li>
            <li>Na célula <code>A1</code> da planilha <code>avaliação</code>, insira o título geral: <code>RELATÓRIO TÉCNICO DE AVALIAÇÃO DA CAMPANHA DE INFLUENZA</code>.</li>
            <li>Selecione o intervalo de <code>A1:D1</code> e aplique o comando de mesclagem de células. Formate este intervalo mesclado com a cor de fundo cinza-escuro, centralize o texto e defina a fonte para branco em negrito com o tamanho de 14px.</li>
            <li>Deixe a linha <code>2</code> completamente em branco para garantir o espaçamento de respiro necessário antes do início das tabelas.</li>
            <li>Construa as tabelas de resumo e utilize as funções matemáticas, estatísticas e lógicas aprendidas para preencher os valores solicitados pela administração do posto. Todos os dados abaixo devem ser calculados por meio de fórmulas:
                <ul>
                    <li><strong>Tabela 1: Indicadores Gerais de Idade</strong>
                        <ul>
                            <li>Na célula <code>A3</code>, insira o texto descritivo: <code>Indicadores Gerais de Idade</code>.</li>
                            <li>Na célula <code>B3</code>, insira o texto informativo: <code>Resultado da Fórmula</code>.</li>
                            <li>Selecione o intervalo <code>A3:B3</code> e aplique a formatação de preenchimento com a cor cinza-escuro e altere a cor da fonte para branco em negrito. Alinhe o texto de <code>B3</code> ao centro.</li>
                            <li>Na célula <code>A4</code>, insira o texto: <code>Idade média dos imunizados:</code>. Na célula <code>B4</code>, utilize a função <code>MÉDIA</code> apontando para a coluna de idade da planilha <code>base</code>. Formate o resultado desta célula para exibir um número inteiro (sem casas decimais) e alinhe-o ao centro.</li>
                            <li>Na célula <code>A5</code>, insira o texto: <code>Idade mediana dos imunizados:</code>. Na célula <code>B5</code>, utilize a função <code>MEDIANA</code> com o mesmo intervalo de idades e alinhe o resultado ao centro.</li>
                            <li>Na célula <code>A6</code>, insira o texto: <code>Idade mais frequente dos imunizados (Moda):</code>. Na célula <code>B6</code>, utilize a função <code>MODO</code> (ou <code>MODA.ÚNICO</code>) para identificar o valor recorrente e alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo de texto <code>A4:A6</code> e aplique a cor de fundo cinza-claro em negrito.</li>
                            <li>Selecione todo o intervalo preenchido da tabela (<code>A3:B6</code>) e aplique a formatação <strong>Todas as Bordas</strong>.</li>
                            <li>Deixe a linha <code>7</code> completamente em branco para garantir o espaçamento adequado antes da próxima tabela.</li>
                        </ul>
                    </li>
                    <li><strong>Tabela 2: Doses Aplicadas por Gênero</strong>
                        <ul>
                            <li>Na célula <code>A8</code>, insira o texto descritivo: <code>Doses aplicadas por gênero</code>.</li>
                            <li>Na célula <code>B8</code>, insira o texto informativo: <code>Total</code>.</li>
                            <li>Selecione o intervalo <code>A8:B8</code>, aplique a cor de fundo cinza-escuro e altere a fonte para branco em negrito. Alinhe o texto da célula <code>B8</code> ao centro.</li>
                            <li>Na célula <code>A9</code>, insira o texto: <code>Masculino</code>. Na célula <code>B9</code>, utilize a função <code>CONT.SE</code> apontando para a coluna de gênero da planilha <code>base</code> para contar as ocorrências do termo "Masculino" com o uso de travamento absoluto (<code>$</code>). Alinhe o resultado ao centro.</li>
                            <li>Na célula <code>A10</code>, insira o texto: <code>Feminino</code>. Na célula <code>B10</code>, utilize a função <code>CONT.SE</code> com os mesmos critérios para contar as ocorrências do termo "Feminino". Alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo de texto <code>A9:A10</code> e aplique a cor de fundo cinza-claro em negrito.</li>
                            <li>Na célula <code>A11</code>, insira o texto: <code>TOTAL</code> em letras maiúsculas. Na célula <code>B11</code>, utilize a função <code>SOMA</code> para consolidar os valores das células <code>B9</code> e <code>B10</code>. Alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo <code>A11:B11</code>, aplique um preenchimento cinza de tom médio e defina todo o texto da linha em negrito para destacar o fechamento dos dados.</li>
                            <li>Selecione todo o intervalo preenchido da tabela (<code>A8:B11</code>) e aplique a formatação <strong>Todas as Bordas</strong>.</li>
                            <li>Deixe a linha <code>12</code> completamente em branco para garantir o espaçamento adequado antes da próxima tabela.</li>
                        </ul>
                    </li>
                    <li><strong>Tabela 3: Doses Aplicadas por Grupo</strong>
                        <ul>
                            <li>Na célula <code>A13</code>, insira o texto descritivo: <code>Doses aplicadas por grupo</code>.</li>
                            <li>Na célula <code>B13</code>, insira o texto informativo: <code>Total</code>.</li>
                            <li>Selecione o intervalo <code>A13:B13</code>, aplique a cor de fundo cinza-escuro e altere a fonte para branco em negrito. Alinhe o texto da célula <code>B13</code> ao centro.</li>
                            <li>Nas células da coluna A, da linha 14 à linha 18, insira sequencialmente as categorias estruturadas na base de dados: <code>Bebê</code> (<code>A14</code>), <code>Criança</code> (<code>A15</code>), <code>Adolescente</code> (<code>A16</code>), <code>Adulto</code> (<code>A17</code>) e <code>Idoso</code> (<code>A18</code>).</li>
                            <li>Nas células correspondentes da coluna B (<code>B14</code> a <code>B18</code>), utilize a função <code>CONT.SE</code> apontando para o intervalo da coluna E da planilha <code>base</code> para extrair a quantidade total de doses de cada um dos cinco grupos criados. Alinhe todos os resultados ao centro.</li>
                            <li>Selecione o intervalo de texto <code>A14:A18</code> e aplique a cor de fundo cinza-claro em negrito.</li>
                            <li>Na célula <code>A19</code>, insira o texto: <code>TOTAL</code> em letras maiúsculas. Na célula <code>B19</code>, utilize a função <code>SOMA</code> para consolidar os valores do intervalo de <code>B14</code> a <code>B18</code>. Alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo <code>A19:B19</code>, aplique um preenchimento cinza de tom médio e defina todo o texto da linha em negrito para destacar o fechamento dos dados.</li>
                            <li>Selecione todo o intervalo preenchido da tabela (<code>A13:B19</code>) e aplique a formatação <strong>Todas as Bordas</strong>.</li>
                            <li>Deixe a linha <code>20</code> completamente em branco para garantir o espaçamento adequado antes da próxima tabela.</li>
                        </ul>
                    </li>
                    <li><strong>Tabela 4: Análise de Gestantes e Puérperas</strong>
                        <ul>
                            <li>Na célula <code>A21</code>, insira o texto descritivo: <code>Doses aplicadas em grávidas ou puérperas?</code>.</li>
                            <li>Na célula <code>B21</code>, insira o texto informativo: <code>Total</code>.</li>
                            <li>Selecione o intervalo <code>A21:B21</code>, aplique a cor de fundo cinza-escuro e altere a fonte para branco em negrito. Alinhe o texto da célula <code>B21</code> ao centro.</li>
                            <li>Na célula <code>A22</code>, insira o texto: <code>Sim</code>. Na célula <code>B22</code>, utilize a função <code>CONT.SES</code> cruzando dois critérios da planilha <code>base</code>: o gênero deve ser igual a <code>"Feminino"</code> e a coluna de gestação deve ser igual a <code>"Sim"</code>. Alinhe o resultado ao centro.</li>
                            <li>Na célula <code>A23</code>, insira o texto: <code>Não</code>. Na célula <code>B23</code>, utilize a função <code>CONT.SES</code> para contabilizar as pacientes que possuem o gênero igual a <code>"Feminino"</code> e a coluna de gestação igual a <code>"Não"</code>. Alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo de texto <code>A22:A23</code> e aplique a cor de fundo cinza-claro em negrito.</li>
                            <li>Na célula <code>A24</code>, insira o texto: <code>TOTAL</code> em letras maiúsculas. Na célula <code>B24</code>, utilize a função <code>SOMA</code> para consolidar os valores das células <code>B22</code> e <code>B23</code>. Alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo <code>A24:B24</code>, aplique um preenchimento cinza de tom médio e defina todo o texto da linha em negrito para destacar o fechamento dos dados.</li>
                            <li>Selecione todo o intervalo preenchido da tabela (<code>A21:B24</code>) e aplique a formatação <strong>Todas as Bordas</strong>.</li>
                            <li>Deixe a linha <code>25</code> completamente em branco para garantir o espaçamento adequado antes da próxima tabela.</li>
                        </ul>
                    </li>
                    <li><strong>Tabela 5: Matriz de Grupo por Gênero</strong>
                        <ul>
                            <li>Na célula <code>A26</code>, insira o título: <code>Doses aplicadas por grupo e gênero</code>. Mescle o intervalo de <code>A26:D26</code>, aplique a cor de fundo cinza-escuro, centralize o texto e defina a fonte para branco em negrito.</li>
                            <li>Na linha 27, monte os cabeçalhos das colunas: insira <code>Grupo</code> em <code>A27</code> (alinhado à esquerda), <code>Masculino</code> em <code>B27</code>, <code>Feminino</code> em <code>C27</code> e <code>Total</code> em <code>D27</code>. Selecione o intervalo <code>A27:D27</code>, aplique o fundo cinza de tom médio, defina o texto para branco em negrito e centralize as células de <code>B27</code> a <code>D27</code>.</li>
                            <li>Nas células da coluna A, da linha 28 à linha 32, insira as cinco categorias etárias na mesma ordem das tabelas anteriores: <code>Bebê</code> (<code>A28</code>), <code>Criança</code> (<code>A29</code>), <code>Adolescente</code> (<code>A30</code>), <code>Adulto</code> (<code>A31</code>) e <code>Idoso</code> (<code>A32</code>). Aplique nestas células o fundo cinza-claro em negrito.</li>
                            <li>No intervalo de dados de <code>B28</code> a <code>C32</code>, utilize a função <code>CONT.SES</code> cruzando os critérios da planilha <code>base</code>. A função deve validar simultaneamente a coluna de grupos (conforme a categoria descrita na coluna A) e a coluna de gênero (<code>"Masculino"</code> para a coluna B ou <code>"Feminino"</code> para a coluna C). Centralize todos os resultados obtidos.</li>
                            <li>No intervalo de <code>D28</code> a <code>D32</code>, utilize a função <code>SOMA</code> horizontal para consolidar o total de doses de cada grupo (soma das colunas B e C correspondentes). Defina estes resultados em negrito, com preenchimento de fundo branco ou sem preenchimento, e alinhe-os ao centro.</li>
                            <li>Na célula <code>A33</code>, insira o texto: <code>TOTAL</code> em letras maiúsculas.</li>
                            <li>Nas células <code>B33</code>, <code>C33</code> e <code>D33</code>, utilize a função <code>SOMA</code> vertical para consolidar os totais de cada coluna. Alinhe os resultados ao centro.</li>
                            <li>Selecione o intervalo <code>A33:D33</code>, aplique o preenchimento cinza de tom médio e formate todo o texto da linha em negrito.</li>
                            <li>Selecione todo o intervalo estruturado da tabela (<code>A26:D33</code>) e aplique a formatação <strong>Todas as Bordas</strong>.</li>
                            <li>Deixe a linha <code>34</code> completamente em branco para manter o espaçamento de respiro padrão do relatório.</li>
                        </ul>
                    </li>
                    <li><strong>Tabela 6: Perfil de Gestantes/Puérperas por Faixa Etária</strong>
                        <ul>
                            <li>Na célula <code>A35</code>, insira o texto descritivo: <code>Imunização em Gestantes ou Puérperas por Grupo</code>.</li>
                            <li>Na célula <code>B35</code>, insira o texto informativo: <code>Total</code>.</li>
                            <li>Selecione o intervalo <code>A35:B35</code>, aplique a cor de fundo cinza-escuro e altere a fonte para branco em negrito. Alinhe o texto da célula <code>B35</code> ao centro.</li>
                            <li>Nas células da coluna A, da linha 36 à linha 38, insira apenas as categorias etárias que registraram ocorrências para este público específico: <code>Criança</code> (<code>A36</code>), <code>Adolescente</code> (<code>A37</code>) e <code>Adulto</code> (<code>A38</code>).</li>
                            <li>Nas células correspondentes da coluna B (<code>B36</code> a <code>B38</code>), utilize a função <code>CONT.SES</code> para segmentar os dados aplicando três critérios simultâneos baseados na planilha <code>base</code>: o gênero deve ser igual a <code>"Feminino"</code>, a coluna de gestação deve ser igual a <code>"Sim"</code> e a coluna de grupos deve corresponder à categoria descrita na coluna A da planilha atual. Alinhe os resultados ao centro.</li>
                            <li>Selecione o intervalo de texto <code>A36:A38</code> e aplique a cor de fundo cinza-claro em negrito.</li>
                            <li>Na célula <code>A39</code>, insira o texto: <code>TOTAL</code> em letras maiúsculas. Na célula <code>B39</code>, utilize a função <code>SOMA</code> para consolidar os valores do intervalo de <code>B36</code> a <code>B38</code>. Alinhe o resultado ao centro.</li>
                            <li>Selecione o intervalo <code>A39:B39</code>, aplique o preenchimento cinza de tom médio e defina todo o texto da linha em negrito para destacar o encerramento do relatório técnico.</li>
                            <li>Selecione todo o intervalo estruturado da tabela (<code>A35:B39</code>) e aplique a formatação <strong>Todas as Bordas</strong>.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>

        <h4>Resultados Esperados:</h4>

        <h5>Planilha base</h5>
        
        <p>Após importar o arquivo e propagar a função <code>SES</code> na coluna <code>E</code>, a sua aba <code>base</code> apresentará a seguinte estrutura de dados padrão (sem formatação adicional):</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="text-align: left;">
                        <td>1</td>
                        <td>Matrícula</td><td class="num">Idade</td><td>Gênero</td><td>Grávida ou Puérpera</td><td>Grupo</td>
                    </tr>
                    <tr><td>2</td><td>26860259222</td><td class="num">80</td><td>Feminino</td><td>Não</td><td>Idoso</td></tr>
                    <tr><td>3</td><td>99219212493</td><td class="num">63</td><td>Masculino</td><td>Não</td><td>Idoso</td></tr>
                    <tr><td>4</td><td>53745843845</td><td class="num">20</td><td>Feminino</td><td>Sim</td><td>Adulto</td></tr>
                    <tr><td>5</td><td>76870146263</td><td class="num">36</td><td>Feminino</td><td>Não</td><td>Adulto</td></tr>
                    <tr><td>6</td><td>78291146786</td><td class="num">34</td><td>Feminino</td><td>Sim</td><td>Adulto</td></tr>
                    <tr><td>7</td><td>9754510526</td><td class="num">33</td><td>Masculino</td><td>Não</td><td>Adulto</td></tr>
                    <tr><td>8</td><td>61347323549</td><td class="num">0</td><td>Masculino</td><td>Não</td><td>Bebê</td></tr>
                    <tr><td>9</td><td>42843479552</td><td class="num">83</td><td>Masculino</td><td>Não</td><td>Idoso</td></tr>
                    <tr><td>10</td><td>86667548581</td><td class="num">25</td><td>Feminino</td><td>Não</td><td>Adulto</td></tr>
                    
                    <tr style="color: #888888; font-style: italic; text-align: center;">
                        <td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td>
                    </tr>
                    
                    <tr><td>1485</td><td>77107044964</td><td class="num">84</td><td>Feminino</td><td>Não</td><td>Idoso</td></tr>
                    <tr><td>1486</td><td>3859770348</td><td class="num">58</td><td>Masculino</td><td>Não</td><td>Adulto</td></tr>
                    <tr><td>1487</td><td>13990490278</td><td class="num">79</td><td>Masculino</td><td>Não</td><td>Idoso</td></tr>
                    <tr><td>1488</td><td>51687409038</td><td class="num">54</td><td>Masculino</td><td>Não</td><td>Adulto</td></tr>
                </tbody>
            </table>
        </div>
        
        <h5>Planilha avaliação — Tabela 1: Indicadores Gerais de Idade</h5>

        <p>Na aba <code>avaliação</code>, a primeira tabela estruturada e calculada com as funções estatísticas deve apresentar o seguinte aspecto visual a partir da linha 3:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th><th>C</th><th>D</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td colspan="4" style="text-align: center; font-weight: bold; background-color: #444444; color: #ffffff; font-size: 14px;">RELATÓRIO TÉCNICO DE AVALIAÇÃO DA CAMPANHA DE INFLUENZA</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #555555; color: #ffffff;">
                        <td>3</td>
                        <td style="text-align: left;">Indicadores Gerais de Idade</td>
                        <td style="text-align: center;">Resultado da Fórmula</td>
                        <td style="background-color: #ffffff;"></td><td style="background-color: #ffffff;"></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Idade média dos imunizados:</td>
                        <td class="num" style="font-family: monospace; text-align: center;">35</td>
                        <td></td><td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Idade mediana dos imunizados:</td>
                        <td class="num" style="font-family: monospace; text-align: center;">34</td>
                        <td></td><td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Idade mais frequente dos imunizados (Moda):</td>
                        <td class="num" style="font-family: monospace; text-align: center;">1</td>
                        <td></td><td></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Planilha avaliação — Tabela 2: Doses Aplicadas por Gênero</h5>

        <p>Abaixo do primeiro bloco, a tabela destinada à contagem de gênero e consolidação do total geral de doses deve apresentar a seguinte configuração visual a partir da linha 8:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-weight: bold; background-color: #555555; color: #ffffff;">
                        <td>8</td>
                        <td style="text-align: left;">Doses aplicadas por gênero</td>
                        <td style="text-align: center;">Total</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Masculino</td>
                        <td class="num" style="font-family: monospace; text-align: center;">721</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Feminino</td>
                        <td class="num" style="font-family: monospace; text-align: center;">766</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #e6e6e6;">
                        <td>11</td>
                        <td style="text-align: left; text-transform: uppercase;">Total</td>
                        <td class="num" style="font-family: monospace; text-align: center;">1487</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Planilha avaliação — Tabela 3: Doses Aplicadas por Grupo</h5>

        <p>Abaixo do bloco de gênero, a tabela destinada à contagem de doses por faixa etária (grupos epidemiológicos) e consolidação do total deve apresentar a seguinte configuração visual a partir da linha 13:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-weight: bold; background-color: #555555; color: #ffffff;">
                        <td>13</td>
                        <td style="text-align: left;">Doses aplicadas por grupo</td>
                        <td style="text-align: center;">Total</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Bebê</td>
                        <td class="num" style="font-family: monospace; text-align: center;">93</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Criança</td>
                        <td class="num" style="font-family: monospace; text-align: center;">212</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Adolescente</td>
                        <td class="num" style="font-family: monospace; text-align: center;">97</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Adulto</td>
                        <td class="num" style="font-family: monospace; text-align: center;">877</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Idoso</td>
                        <td class="num" style="font-family: monospace; text-align: center;">208</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #e6e6e6;">
                        <td>19</td>
                        <td style="text-align: left; text-transform: uppercase;">Total</td>
                        <td class="num" style="font-family: monospace; text-align: center;">1487</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Planilha avaliação — Tabela 4: Análise de Gestantes e Puérperas</h5>

        <p>Abaixo do bloco de grupos, a tabela voltada ao monitoramento específico de gestantes e puérperas dentro do público feminino deve apresentar a seguinte configuração visual a partir da linha 21:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-weight: bold; background-color: #555555; color: #ffffff;">
                        <td>21</td>
                        <td style="text-align: left;">Doses aplicadas em grávidas ou puérperas?</td>
                        <td style="text-align: center;">Total</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Sim</td>
                        <td class="num" style="font-family: monospace; text-align: center;">47</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Não</td>
                        <td class="num" style="font-family: monospace; text-align: center;">719</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #e6e6e6;">
                        <td>24</td>
                        <td style="text-align: left; text-transform: uppercase;">Total</td>
                        <td class="num" style="font-family: monospace; text-align: center;">766</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Planilha avaliação — Tabela 5: Matriz de Grupo por Gênero</h5>

        <p>Abaixo do bloco de gestantes, a matriz cruzada que mapeia os grupos epidemiológicos em relação ao gênero dos pacientes deve apresentar a seguinte configuração visual a partir da linha 26:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th><th>C</th><th>D</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-weight: bold; background-color: #444444; color: #ffffff;">
                        <td>26</td>
                        <td colspan="4" style="text-align: center;">Doses aplicadas por grupo e gênero</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #555555; color: #ffffff; text-align: center;">
                        <td>27</td>
                        <td style="text-align: left;">Grupo</td><td style="text-align: center;">Masculino</td><td style="text-align: center;">Feminino</td><td style="text-align: center;">Total</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Bebê</td>
                        <td class="num" style="font-family: monospace; text-align: center;">48</td>
                        <td class="num" style="font-family: monospace; text-align: center;">45</td>
                        <td class="num" style="font-family: monospace; text-align: center; font-weight: bold; background-color: #fafafa;">93</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Criança</td>
                        <td class="num" style="font-family: monospace; text-align: center;">108</td>
                        <td class="num" style="font-family: monospace; text-align: center;">104</td>
                        <td class="num" style="font-family: monospace; text-align: center; font-weight: bold; background-color: #fafafa;">212</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Adolescente</td>
                        <td class="num" style="font-family: monospace; text-align: center;">45</td>
                        <td class="num" style="font-family: monospace; text-align: center;">52</td>
                        <td class="num" style="font-family: monospace; text-align: center; font-weight: bold; background-color: #fafafa;">97</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Adulto</td>
                        <td class="num" style="font-family: monospace; text-align: center;">431</td>
                        <td class="num" style="font-family: monospace; text-align: center;">446</td>
                        <td class="num" style="font-family: monospace; text-align: center; font-weight: bold; background-color: #fafafa;">877</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Idoso</td>
                        <td class="num" style="font-family: monospace; text-align: center;">89</td>
                        <td class="num" style="font-family: monospace; text-align: center;">119</td>
                        <td class="num" style="font-family: monospace; text-align: center; font-weight: bold; background-color: #fafafa;">208</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #e6e6e6;">
                        <td>33</td>
                        <td style="text-align: left; text-transform: uppercase;">Total</td>
                        <td class="num" style="font-family: monospace; text-align: center;">721</td>
                        <td class="num" style="font-family: monospace; text-align: center;">766</td>
                        <td class="num" style="font-family: monospace; text-align: center;">1487</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Planilha avaliação — Tabela 6: Perfil de Gestantes/Puérperas por Faixa Etária</h5>

        <p>Para concluir o relatório, a tabela final de segmentação etária restrita às pacientes registradas como gestantes ou puérperas deve apresentar a seguinte configuração visual a partir da linha 35:</p>

        <div class="simulador-planilha">
            <table class="grade-onlyoffice">
                <thead>
                    <tr>
                        <th><img src="assets/img/icons/canto-planilha.svg" alt="Ícone de canto da grade." class="img-canto"></th>
                        <th>A</th><th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-weight: bold; background-color: #555555; color: #ffffff;">
                        <td>35</td>
                        <td style="text-align: left;">Imunização em Gestantes ou Puérperas por Grupo</td>
                        <td style="text-align: center;">Total</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Criança</td>
                        <td class="num" style="font-family: monospace; text-align: center;">0</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Adolescente</td>
                        <td class="num" style="font-family: monospace; text-align: center;">5</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td style="background-color: #f2f2f2; font-weight: bold;">Adulto</td>
                        <td class="num" style="font-family: monospace; text-align: center;">42</td>
                    </tr>
                    <tr style="font-weight: bold; background-color: #e6e6e6;">
                        <td>39</td>
                        <td style="text-align: left; text-transform: uppercase;">Total</td>
                        <td class="num" style="font-family: monospace; text-align: center;">47</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="caixa-voce-sabia verde-excel">
            <h4>O que é a Influenza e qual a importância da vacinação?</h4>
            <p>A Influenza é uma infecção respiratória aguda provocada pelos vírus dos tipos A, B, C e D. No entanto, as variantes A e B são as principais responsáveis pelas epidemias anuais. Embora o quadro possa se manifestar de forma leve, a doença apresenta risco de evolução grave, podendo ocasionar hospitalizações e óbitos, especialmente em grupos vulneráveis como gestantes, puérperas, crianças pequenas e idosos.</p>
            
            <p>O monitoramento epidemiológico desses grupos, semelhante ao realizado nesta atividade prática, orienta as estratégias de saúde pública. A imunização anual é a principal medida de prevenção contra as formas graves da doença, sendo necessária a atualização periódica da vacina devido à mutação constante do vírus.</p>
            
            <p>Para entender detalhadamente o comportamento do vírus, os sintomas e as formas de tratamento comentadas pela Dra. Miriam Dalben (infectologista), assista ao vídeo explicativo:</p>

            <div class="video-responsivo" style="margin-top: 1rem;">
                <iframe 
                    src="https://www.youtube.com/embed/ouhPNJIpLvI" 
                    title="INFLUENZA (gripe): tipos, sintomas e tratamento" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <p>Nesta etapa, você aprendeu a utilizar funções essenciais para extrair informações e estatísticas básicas sob critérios específicos em um intervalo de dados. Na próxima seção, entraremos no conteúdo de <strong>Gráficos</strong>. Vamos entender como transformar esses números consolidados e relatórios textuais em recursos visuais (como gráficos de barras, colunas e setores), facilitando a apresentação dos resultados.</p>

        <section class="avaliacao-reacao">
            <div>
                <p>Antes de avançar para a próxima atividade, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
            </div>

            <aside>
                <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                    <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                </a>
            </aside>
        </section>
    `,
        botoes: [
            { texto: "Voltar", destino: "funcoes_saude" },
            { texto: "Avançar", destino: "graficos_saude" }
        ]
    },
    // === ETAPA 10: Gráficos ===
    graficos_saude: {
        etapa: 10, 
        titulo: "Construção de gráficos nos editores de planilhas",
        texto: `
        <p>Os gráficos são representações visuais de dados quantitativos. Eles transformam tabelas em imagens fáceis compreenção. Quando temos uma tabela pequena o nosso cérebro consegue interpretar as informações muito rapidamente. Porém, se a quantidade de linhas ou de locunas aumenta muito, fica mais dificil para o nosso cérebro identificar os padrões e identificar informações rápidamente. Neste momento, as formas, cores e comprimentos usados nos gráfico guiam nosso cérebro a interpretar as informações de forma rápida e intuitiva.</p>

        <p>No entanto, para que um gráfico cumpra o seu papel de forma eficiente, é preciso escolher o modelo correto. Existem diversos tipos de gráficos disponíveis nos editores de planilhas, e cada um deles foi desenhado para comunicar um tipo específico de informação, dependendo se o seu objetivo é comparar categorias, mostrar partes de um todo ou identificar tendências históricas.</p>

        <h3>Principais Tipos de Gráficos e Suas Aplicações</h3>

        <p>Conheça os modelos mais utilizados e as situações ideais para aplicar cada um deles:</p>

        <div class="tabela-ferramentas">
            
            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-coluna.svg" alt="Gráfico de Colunas" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Colunas:</b> Ideal para comparar valores entre diferentes categorias em um momento específico. As categorias ficam dispostas no eixo horizontal (ex: o total de imunizados por posto de saúde ou por faixa etária).</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-linha.svg" alt="Gráfico de Linhas" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Linhas:</b> Perfeito para mostrar tendências e variações de dados ao longo de um período contínuo. Usamos esse modelo para monitorar o aumento ou a queda nos casos de gripe mês a mês ao longo do ano.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-pizza.svg" alt="Gráfico de Pizza" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Pizza:</b> Utilizado para exibir a composição proporcional de um todo, dividindo os dados em fatias percentuais. Funciona melhor com poucas categorias, como a distribuição de imunizados por gênero.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-barra.svg" alt="Gráfico de Barras" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Barras:</b> Semelhante ao de colunas, mas com os dados na horizontal e as categorias no eixo vertical. É excelente para exibir relatórios quando os nomes dos grupos são muito longos.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-area.svg" alt="Gráfico de Área" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Área:</b> Baseia-se no gráfico de linhas, mas possui o espaço abaixo da linha preenchido com cor. Serve para enfatizar a magnitude das alterações e o volume total acumulado no período.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-pontos.svg" alt="Gráfico de Dispersão" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Dispersão (Pontos X,Y):</b> Mostra a relação ou correlação entre duas variáveis numéricas simultâneas. Na saúde, ajuda a avaliar se a idade do paciente possui relação direta com o tempo de recuperação da infecção.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-radar.svg" alt="Gráfico de Radar" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Radar:</b> Útil para comparar múltiplas variáveis quantitativas ao mesmo tempo a partir de um ponto central, criando uma forma geométrica para analisar perfis multifatoriais de atendimento.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-boxplot.svg" alt="Gráfico Boxplot" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráfico de Boxplot (Diagrama de Caixa):</b> Representa a distribuição estatística dos dados através de quartis. Ele destaca graficamente a mediana, a dispersão das idades dos pacientes e os valores discrepantes (<i>outliers</i>).</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/grafico-combinados.svg" alt="Gráficos Combinados" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Gráficos Combinados:</b> Realiza a fusão de dois modelos visuais diferentes no mesmo espaço (como coluna e linha sobrepostas). É ideal para cruzar duas métricas de naturezas distintas, exibindo o total de doses aplicadas (coluna) junto com a taxa de cobertura vacinal atingida (linha).</p>
                </div>
            </div>

        </div>

        <h3>Atividade Prática</h3>

        <p>Após importar o arquivo <code>imunizacao_influenza.csv</code> e estruturar as tabelas de resumo epidemiológico, precisaremos construir elementos visuais para que a equipe gestora consiga observar o relatório e compreender instantaneamente o perfil do público atendido. Para isso, criaremos representações gráficas específicas para cada uma das tabelas consolidadas (gênero, faixa etária e subgrupos de risco).</p>

        <p>Antes de inserir qualquer gráfico no seu editor de planilhas, você deve <strong>selecionar corretamente o intervalo de células</strong> que contém as categorias e os valores correspondentes. Deixar os cabeçalhos de fora ou incluir as linhas de "Total" por engano fará com que o gráfico exiba informações distorcidas ou barras redundantes.</p>

        <p>O roteiro a seguir utizou o ONLYOFFICE para criar os gráficos da atividade anterior:</p>

        <div class="passos-atividade">
            
            <div class="passo-item">
                <h4 class="passo-titulo">Gráfico de Pizza para a Distribuição por Gênero</h4>
                <p class="passo-descricao">Este gráfico exibirá a proporção de doses aplicadas entre homens e mulheres.</p>
                
                <ul>
                    <li>Clique e arraste o mouse do intervalo <code>A8</code> até <code>B10</code> (Selecione os cabeçalhos e as linhas "Masculino" e "Feminino". Não inclua a linha 11 do Total.).</li>
                    <li>Acesse a guia superior <strong>Inserir</strong> &gt; clique no botão <strong>Gráfico</strong> &gt; escolha a categoria <strong>Pizza</strong>.</li>
                    <li>Dê um duplo clique no título padrão do gráfico e altere para: <span class="titulo-grafico-exemplo">Doses Aplicadas por Gênero</span>. Na barra lateral direita de configurações do gráfico, ative a opção <strong>Rótulos de Dados</strong> para exibir os números exatos dentro ou fora das fatias.</li>
                </ul>
            </div>

            <div class="passo-item">
                <h4 class="passo-titulo">Gráfico de Colunas para Doses por Grupo Epidemiológico</h4>
                <p class="passo-descricao">Perfeito para comparar visualmente qual faixa etária teve a maior adesão à campanha vacinal.</p>
                
                <ul>
                    <li>Selecione o intervalo de <code>A13</code> até <code>B18</code> (Contemplando desde o cabeçalho até a linha do grupo "Idoso". Fique atento para deixar a linha 19 do Total de fora.)</li>
                    <li>Vá em <strong>Inserir</strong> &gt; <strong>Gráfico</strong> &gt; escolha o modelo de <strong>Colunas</strong> (as barras verticais clássicas).</li>
                    <li>Edite o título do gráfico para: <span class="titulo-grafico-exemplo">Adesão à Campanha por Faixa Etária</span>. Nas propriedades do gráfico à direita, certifique-se de manter visíveis os rótulos do eixo horizontal (com os nomes dos grupos) e adicione os <strong>Rótulos de Dados</strong> no topo de cada coluna.</li>
                </ul>
            </div>

            <div class="passo-item">
                <h4 class="passo-titulo">Gráfico de Barras Aninhadas em 100% para Subgrupo de Gestantes</h4>
                <p class="passo-descricao">Este formato exibe o preenchimento proporcional completo (100%) indicando o impacto do grupo específico de grávidas e puérperas dentro do universo total de pacientes do gênero feminino.</p>
                
                <ul>
                    <li>Selecione de <code>A21</code> até <code>B23</code> (Cabeçalho e opções "Sim" e "Não". Não inclua a linha 24.).</li>
                    <li>Clique em <strong>Inserir</strong> &gt; <strong>Gráfico</strong> &gt; navegue até a seção de <strong>Barras</strong> (horizontais) e escolha a variação <strong>Barras Aninhadas 100%</strong> (ou Barras Empilhadas 100%).</li>
                    <li>Altere o título para: <span class="titulo-grafico-exemplo">Proporção de Gestantes e Puérperas Atendidas</span>. Ative a exibição dos rótulos internos para demonstrar o contraste numérico das duas faixas segmentadas.</li>
                </ul>
            </div>

            <div class="passo-item">
                <h4 class="passo-titulo">Gráfico de Barras Agrupadas para Matriz Cruzada de Grupo e Gênero</h4>
                <p class="passo-descricao">O gráfico de barras horizontais lado a lado facilitará a leitura e a comparação direta entre os subgrupos masculino e feminino dentro de cada categoria etária.</p>
                
                <ul>
                    <li>Selecione o intervalo que vai de <code>A27</code> até <code>C32</code>. Veja que estamos pegando a coluna "Grupo", "Masculino" e "Feminino", ignorando completamente a coluna "Total" (coluna D) e a linha final de "Total geral" (linha 33).</li>
                    <li>Vá em <strong>Inserir</strong> &gt; <strong>Gráfico</strong> &gt; escolha a opção de <strong>Barras</strong> e selecione o modelo de <strong>Barras Agrupadas</strong>.</li>
                    <li>Modifique o título para: <span class="titulo-grafico-exemplo">Distribuição de Gênero por Grupo Epidemiológico</span>. Certifique-se de que a legenda indicando qual cor representa o gênero Masculino e qual representa o Feminino esteja visível (geralmente posicionada na parte inferior ou lateral do gráfico).</li>
                </ul>
            </div>

            <div class="passo-item">
                <h4 class="passo-titulo">Gráfico de Rosca para Perfil Etário das Gestantes e Puérperas</h4>
                <p class="passo-descricao">Uma variação do gráfico de pizza, também funciona para destacar percentuais, frações ou parte de um todo.</p>
                
                <ul>
                    <li>Marque o intervalo de <code>A35</code> até <code>B38</code> (Desde o cabeçalho até a linha do grupo "Adulto". Não selecione a linha 39 do Total).</li>
                    <li>Acesse <strong>Inserir</strong> &gt; <strong>Gráfico</strong> &gt; selecione a categoria <strong>Pizza</strong> e clique na variação de gráfico em formato de <strong>Rosca</strong>.</li>
                    <li>Defina o título do gráfico como: <span class="titulo-grafico-exemplo">Faixa Etária de Grávidas e Puérperas Imunizadas</span>. Ative os <strong>Rótulos de Dados</strong> nas propriedades para evidenciar graficamente que a grande maioria se concentrou no grupo das adultas.</li>
                </ul>
            </div>

        </div>

        <p>Após inserir os gráficos, eles serão gerados empilhados no centro da tela. Clique sobre eles e arraste-os para as áreas em branco localizadas ao lado ou logo abaixo de suas respectivas tabelas, mantendo o seu relatório limpo, organizado e legível.</p>

        <div class="caixa-voce-sabia verde-excel">
            <h4>Como a higiene protege a nossa saúde no dia a dia?</h4>
            <p>Os hábitos de higiene, como tomar banho, escovar os dentes e lavar o rosto, embora simples, são barreiras importantíssimas contra germes e bactérias. Na Grécia Antiga, esses cuidados já eram tão valorizados que inspiraram a palavra "higiene", usada para definir as práticas que nos mantêm limpos e livres de infecções transmissíveis.</p>
            
            <p>A lavagem correta das mãos, especialmente após voltar da rua, ir ao banheiro ou antes das refeições, é uma das medidas mais eficazes para prevenir problemas de saúde frequentes, como a diarreia e as gripes. Pequenas mudanças de atitude na nossa rotina nos dão bem-estar e ajudam a interromper cadeias de transmissão de doenças na comunidade.</p>
            
            <p>Para conhecer curiosidades históricas sobre a evolução da limpeza em diferentes culturas e aprender a técnica certa para eliminar a sujeira das mãos, assista ao vídeo a srguir:</p>

            <div class="video-responsivo" style="margin-top: 1rem;">
                <iframe 
                    src="https://www.youtube.com/embed/iUkh8J9sNyQ" 
                    title="A Higiene no dia a dia" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <p>Nesta tela, você aprendeu que os gráficos são excelentes ferramentas de comunicação dos dados; praticou a conversão de dados tabulares em representações visuais como gráficos de colunas, linhas e pizza; foi alertado de que é necessário selecionar o modelo de gráfico mais adequado para cada tipo de situação; e foi capaz de configurar títulos, legendas e rótulos para facilitar a interpretação das informações.</p>
        <p>Na próxima etapa fecharemos esta sequência didática com as características de configuração de página para uma boa impressão ou exportação das tabelas em arquivos paginados.</p>

        <section class="avaliacao-reacao">
            <div>
                <p>Antes de avançar para a próxima atividade, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
            </div>

            <aside>
                <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                    <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                </a>
            </aside>
        </section>
        `,
        botoes: [
            { texto: "Voltar", destino: "condicionais_saude" },
            { texto: "Avançar", destino: "impressao_saude" }
        ]
    },
    // === ETAPA 11: Área de Impressão e Exportação ===
    impressao_saude: {
        etapa: 11, 
        titulo: "Configurações de impressão",
        texto: `
        <p>Em algumas situações, saber configurar a página de uma planilha eletrônica antes de exportá-la para outro formato de arquivo é essencial. Sem esses ajustes, as tabelas extensas e outros elementos gráficos utilizados costumam ser cortados ao meio, tornando impossível a compreensão das informações na maioria dos casos. Gastar alguns minutos ajustando o layout garante que qualquer pessoa consiga ler suas planilhas com clareza, organização e profissionalismo.</p>
        
        <h3>Principais Recursos de Configuração de Página</h3>

        <p>Para garantir que o relatório mantenha o visual profissional na folha de papel ou no PDF, conheça as ferramentas disponíveis na guia Layout de Página e suas funções:</p>

        <div class="tabela-ferramentas">
            
            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-margens.png" alt="Configuração de Margens" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Margens:</b> Determinam o recuo e o espaço em branco ao redor de toda a área externa dos dados, delimitando os limites da folha de papel. Ajustar para margens "Estreitas" ajuda a acomodar tabelas levemente mais largas sem quebrar colunas.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-orientacao.png" alt="Orientação da Página" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Orientação:</b> Altera a disposição do papel entre o modo <b>Retrato</b> (página vertical, recomendada para listas longas como a aba base de pacientes) e o modo <b>Paisagem</b> (página horizontal, ideal para abas com múltiplos gráficos posicionados lado a lado).</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-tamanho.png" alt="Tamanho da Página" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Tamanho:</b> Define as dimensões físicas do papel no qual o arquivo será impresso ou gerado em PDF. No serviço público e em relatórios de saúde no Brasil, o padrão normatizado obrigatório é o formato <b>A4</b>.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-area.png" alt="Área de Impressão" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Área de Impressão:</b> Permite que você selecione e isole apenas uma planilha ou uma matriz específica para o envio à impressora. Isso evita o desperdício de papel e impede que rascunhos ou dados brutos fora do relatório final sejam impressos por engano.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-quebras.png" alt="Quebras de Página" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Quebras:</b> Forçam o encerramento da página atual e iniciam o fluxo de dados na folha seguinte a partir de uma célula selecionada. É fundamental para organizar relatórios extensos, garantindo que cada tabela comece no topo de uma nova folha.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-cabecalho.png" alt="Cabeçalho e Rodapé" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Cabeçalho/Rodapé:</b> Áreas reservadas nas extremidades superior e inferior da página para a inserção automática de metadados informativos. São usadas para exibir o número da página, o nome da secretaria de saúde ou a data de emissão do relatório de vacinação.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-dimensionar.png" alt="Dimensionar para Ajustar" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Dimensionar:</b> Reduz ou amplia o tamanho proporcional dos dados para que eles caibam perfeitamente em uma quantidade exata de páginas. Permite forçar, por exemplo, que uma tabela larga e seus respectivos gráficos sejam condensados de forma legível em apenas uma folha de largura.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/impressao-titulos.png" alt="Imprimir Títulos" class="icone-app">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Imprimir títulos:</b> Permite selecionar linhas ou colunas específicas para que sejam repetidas automaticamente no topo de todas as páginas impressas. Em relatórios extensos, esse recurso garante que o cabeçalho com os nomes das colunas apareça em cada folha, evitando que o leitor se perca.</p>
                </div>
            </div>

        </div>

        <h3>Atividade Prática: Ajustando as Planilhas para o Gestor</h3>
        <p>Agora que organizamos os dados da campanha de vacinação contra a Influenza, o último passo será preparar o relatório para o gestor do posto de saúde. Como a aba <code>base</code> tem uma lista enorme de pacientes e a aba <code>avaliação</code> traz os gráficos e tabelas de resumo, vamos configurar a impressão de cada uma delas de jeitos diferentes para que o documento não fique cortado ou desorganizado. Siga o passo a passo abaixo para fazer esses ajustes no seu editor de planilhas:</p>
        
        <div class="passos-atividade">

            <div class="passo-item">
                <h4 class="passo-titulo">Configuração para impressão da planilha "base"</h4>
                <p class="passo-descricao">Como a aba <code>base</code> contém os dados brutos de todos os 1.487 pacientes, lidaremos com uma tabela muito longa verticalmente, mas com poucas colunas. Vamos configurá-la para manter a rastreabilidade dos cabeçalhos em cada folha.</p>
                
                <div class="passo-detalhes">
                    <p>Clique na aba <code>base</code> na barra inferior. Na guia superior <strong>Layout de Página</strong>, clique em <strong>Orientação</strong> e selecione a opção <strong>Retrato</strong>.</p>
                    
                    <p>Garanta que o <strong>Tamanho</strong> esteja definido como <strong>A4</strong>. Em <strong>Margens</strong>, selecione a opção <strong>Normal</strong>.</p>
                    
                    <p>Para evitar que o leitor se perca ao virar as páginas impressas fisicamente ou rolar o PDF na tela, clique em <strong>Imprimir Títulos</strong>. Na opção de repetir linhas no topo, selecione a <strong>Linha 1</strong> (onde estão os rótulos de Matrícula, Idade, Gênero, Gestante e Grupo). Isso fixará o cabeçalho em todas as páginas impressas.</p>
                    
                    <p>Clique no recurso <strong>Cabeçalho e Rodapé</strong>. No cabeçalho (topo), insira o texto: <span class="titulo-grafico-exemplo">Listagem de Imunizados - Campanha Influenza</span>. No rodapé (base), selecione a numeração de página automática (ex: "Página 1 de X") para organizar o documento.</p>
                </div>
            </div>

            <div class="passo-item">
                <h4 class="passo-titulo">Configuração para impressão da planilha "Avaliação"</h4>
                <p class="passo-descricao">A aba <code>avaliação</code> concentra as tabelas e os gráficos. Aqui, o desafio é garantir que as tabelas e seus respectivos gráficos fiquem organizados na página de forma harmônica, sem cortes desordenados.</p>
                
                <div class="passo-detalhes">
                    <p>Mude para a planilha <code>avaliação</code>. Na guia <strong>Layout</strong>, altere a <strong>Orientação</strong> para <strong>Paisagem</strong> (horizontal). Isso dará a amplitude necessária para posicionar os gráficos ao lado das tabelas.</p>
                    
                    <p>Para maximizar a área de plotagem dos gráficos e o tamanho das tabelas, mude o botão <strong>Margens</strong> para a opção <strong>Estreita</strong>.</p>
                    
                    <p>Se houver alguma anotação ou rascunho de cálculo fora do relatório, selecione apenas o intervalo que vai de <code>A1</code> até a última linha ocupada pelo Gráfico de Rosca. Clique em <strong>Área de Impressão</strong> &gt; <strong>Definir Área de Impressão</strong>. Caso queira que a Tabela 5 (Matriz Cruzada) comece obrigatoriamente em uma nova folha física, selecione a célula <code>A26</code> e clique em <strong>Quebras</strong> &gt; <strong>Inserir Quebra de Página</strong>.</p>
                    
                    <p>Para impedir que um gráfico ou uma coluna lateral escape por poucos centímetros para uma folha em branco extra, utilize a ferramenta <strong>Dimensionar (Ajustar Escala)</strong>. Configure a largura para forçar o ajuste em <strong>1 Página de Largura</strong>, permitindo que o editor de planilha reduza a escala proporcionalmente para encaixar o layout.</p>
                    
                    <p>Adicione um <strong>Cabeçalho</strong> com o texto <span class="titulo-grafico-exemplo">Relatório Técnico de Avaliação Epidemiológica</span> e, no <strong>Rodapé</strong>, insira a inserção automática da data atual de emissão do documento.</p>
                </div>
            </div>

            <div class="passo-item">
                <h4>Visualizar e Exportar seu Relatório</h4>
                <p>Depois de aplicar todas as configurações nas duas abas, você não deve fechar ou enviar o arquivo sem antes conferir como ele ficou. Fazer essa checagem evita surpresas, como colunas cortadas ou páginas em branco desnecessárias.</p>
                
                <p>Siga estes dois passos antes de finalizar:</p>
                <div class="passo-detalhes">
                    <p>Pressione as teclas <code>Ctrl + P</code> no seu teclado (ou vá em <em>Arquivo > Imprimir</em>). Em vez de mandar imprimir fisicamente, use a tela de visualização para folhear o documento digitalmente. Repare como a aba <code>base</code> repete o cabeçalho em todas as folhas e como a aba <code>avaliação</code> ajustou os gráficos perfeitamente na horizontal.</p>
                    <p>Com tudo certo, vá no menu <em>Arquivo</em>, escolha a opção <strong>Exportar</strong> (ou <em>Salvar Como</em>) e selecione o formato <strong>PDF</strong>.</p>
                </div>
            </div>

        </div>

        <div class="caixa-voce-sabia verde-excel">
            <h4>Fatores coletivos que afetam a saúde pública</h4>
            <p>Na etapa anterior, vimos como os hábitos individuais de higiene são fundamentais para conter a transmissão de vírus como o da Influenza. No entanto, para que a saúde preventiva seja eficiente, as ações individuais precisam estar amparadas por outros fatores que afetam a coletividade. O bem-estar de uma comunidade depende de, entre outras coisas, o acesso à água potável, a infraestrutura de saneamento básico e a estabilidade climática do nosso planeta.</p>
            
            <h5>Acesso à Água Potável e Saúde da População</h5>
            <p>A água limpa é o primeiro insumo de saúde pública em qualquer lugar. Sem água tratada para consumo e preparo de alimentos, a população fica diretamente exposta a microorganismos que causam surtos de diarreia, desidratação e infecções graves. Entenda mais sobre as doenças veiculadas pela água no vídeo abaixo:</p>
            
            <div class="video-responsivo" style="margin-top: 1rem; margin-bottom: 2rem;">
                <iframe 
                    src="https://www.youtube.com/embed/USu2rWUnoXw" 
                    title="Doenças Veiculadas pela Água" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>

            <h5>Saneamento Básico e Indicadores Epidemiológicos</h5>
            <p>A ausência de coleta e tratamento de esgoto cria um ciclo infinito de doenças. Jogar o esgoto em lugares inapropriados contamina o solo e os lençóis freáticos, atraindo vetores de doenças como ratos e mosquitos, além de espalhar vírus e parasitas que afetam principalmente o desenvolvimento infantil e a imunidade das pessoas. Assista ao vídeo sobre os impactos diretos da falta de saneamento básico:</p>

            <div class="video-responsivo" style="margin-top: 1rem; margin-bottom: 2rem;">
                <iframe 
                    src="https://www.youtube.com/embed/5keWkc1dXdA" 
                    title="Doenças causadas pela falta de saneamento básico" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>

            <h5>Mudanças Climáticas e a Saúde do Futuro</h5>
            <p>As grandes mudanças no meio ambiente estão alterando o mapa das doenças no mundo. O aumento das temperaturas e o clima extremo (como secas prolongadas, enchentes repentinas, ondas de calor mais intensas e frequentes) destroem o habitat de animais silvestres, aceleram o desmatamento e aumentam as ocorrências de queimadas. Cada um desses fatores citados pode ocasionar situações que favorecem diferentes tipos de doenças nas populações afetadas. Para entender como a crise do clima mexe diretamente com o nosso sistema de saúde, assista ao vídeo a seguir:</p>

            <div class="video-responsivo" style="margin-top: 1rem;">
                <iframe 
                    src="https://www.youtube.com/embed/psbQUk_GrWY" 
                    title="Saúde, Poluição e Mudanças Climáticas" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <div class="resumo-aprendizado">
            <p>Nesta última etapa, você aprendeu a usar as <strong>ferramentas de impressão</strong> para ajustar suas tabelas e gráficos ao layout e às dimensões das páginas. Na prática, você aplicou recursos como orientação, margens, tamanho, quebras, cabeçalho e rodapé, além de dimensionamento, títulos e definição da área de impressão.</p>
            <p>Tudo o que foi visto nesta sequência didática pode ser refeito e revisto. As configurações e formatações aplicadas podem ser testadas de diferentes maneiras. O mais importante é exercitar e testar novas possibilidades.</p>
        </div>

        <section class="avaliacao-reacao">
            <div>
                <p>Antes de avançar para a próxima tela, por gentileza, utilize o QR Code ao lado para acessar e preencher o nosso formulário de Avaliação de Reação e o Portfólio desta etapa.</p>
            </div>

            <aside>
                <a href="https://forms.gle/h3D3qsuEKtATWvar6" target="_blank" rel="noopener noreferrer" title="Escaneie para abrir o formulário">
                    <img src="assets/img/qrcode.png" alt="QR Code para o formulário da avaliação de reação">
                </a>
            </aside>
        </section>
        `,
        botoes: [
            { texto: "Voltar", destino: "graficos_saude" },
            { texto: "Avançar", destino: "encerramento" }
        ]
    },

encerramento: {
        etapa: 12, 
        titulo: "Encerramento",
        texto: `
        <p>Parabéns pela conclusão desta sequência didática. Ao finalizar todas as etapas propostas, você demonstrou dedicação e adquiriu competências essenciais para o tratamento de dados e estruturação de informações que podem ser replicadas para qualquer área do conhecimento e infinitas situações do nosso cotidiano. Esperamos que este material tenha contribuído para o desenvolvimento de sua autonomia e cidadania digital!</p>
        
        <p>Ao longo deste percurso, foram estudados os seguintes tópicos:</p>
        
        <ul>
            <li><strong>Introdução e Interface:</strong> Compreensão do papel das tabelas no cotidiano, diferenciação entre editores locais e em nuvem, e domínio da navegação em estruturas de linhas, colunas, células e pastas de trabalho.</li>
            <li><strong>Tipos de Dados e Formatação:</strong> Classificação de informações em texto, número, data e hora, aplicação de máscaras de formatação e personalização estética do layout por meio de fontes, fundos, bordas, alinhamentos e mesclagem.</li>
            <li><strong>Operadores e Fórmulas:</strong> Construção de cálculos manuais utilizando operadores aritméticos de adição, subtração, multiplicação, divisão, quociente, resto e exponenciação, observando a precedência matemática e o uso de parênteses.</li>
            <li><strong>Funções Estatísticas e Referências:</strong> Processamento de dados por meio das funções SOMA, CONT.NÚM, MÁXIMO, MÍNIMO e MÉDIA, além do uso de referências absolutas e relativas para a replicação eficiente de cálculos.</li>
            <li><strong>Lógica Condicional e Visualização:</strong> Aplicação de estruturas de tomada de decisão com as funções SE, CONT.SE e SOMASE, e implementação de regras de formatação condicional para sinalização visual de dados.</li>
            <li><strong>Gráficos e Impressão:</strong> Conversão de dados tabulares em gráficos adequados (colunas, linhas e pizza), configuração de elementos visuais e ajuste de propriedades de página, cabeçalhos, rodapés e áreas de impressão para exportação de relatórios em formato PDF.</li>
        </ul>
        
        <p>Este treinamento representa apenas o primeiro capítulo de seu aprendizado em planilhas eletrônicas. O universo das ferramentas de escritório é vasto e oferece inúmeros recursos avançados que ainda podem ser explorados, como o cruzamento complexo de dados, a automação de processos e a análise estatística aprofundada. Recomendamos muito que você continue exercitando esses conceitos e buscando novos conhecimentos para expandir suas habilidades profissionais e acadêmicas.</p>

        <p>Vale destacar que todo o conteúdo deste material introdutório foi produzido e fundamentado a partir das diretrizes oficiais das ferramentas do mercado. Caso você queira consultar as fontes originais ou aprofundar seus estudos, recomendamos visitar os portais de documentação e suporte dos três principais editores utilizados:</p>

        <div class="tabela-ferramentas">
            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/microsoft_office_Excel_icon.png" alt="Ícone do Microsoft Excel" style="width: 100%; height: auto; max-width: 50px;">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Microsoft Excel:</b> Acesse os guias passo a passo, tutoriais de fórmulas e soluções de problemas diretamente na <a href="https://support.microsoft.com/pt-br/excel" target="_blank" rel="noopener noreferrer">Central de Suporte do Excel</a>.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/onlyoffice_icon.png" alt="Ícone do ONLYOFFICE" style="width: 100%; height: auto; max-width: 50px;">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>ONLYOFFICE:</b> Consulte as instruções detalhadas de ferramentas e recursos visuais diretamente no <a href="https://helpcenter.onlyoffice.com/docs/userguides/spreadsheet_editor.aspx" target="_blank" rel="noopener noreferrer">Guia do Usuário do Editor de Planilhas</a>.</p>
                </div>
            </div>

            <div class="linha-ferramenta">
                <div class="col-logo">
                    <img src="assets/img/icons/google_sheets_icon.png" alt="Ícone do Google Sheets" style="width: 100%; height: auto; max-width: 50px;">
                </div>
                <div class="col-conteudo">
                    <p class="texto-unico-app"><b>Google Sheets:</b> Explore a documentação oficial sobre compartilhamento, funções e formatações na <a href="https://support.google.com/docs/answer/6000292?hl=pt-PT" target="_blank" rel="noopener noreferrer">Central de Ajuda dos Editores de Documentos Google</a>.</p>
                </div>
            </div>
        </div>

        <p>Bons estudos!</p>
        `,
        botoes: [
            { texto: "Saúde", destino: "impressao_saude" },
            { texto: "Água", destino: "impressao_agua" },
            { texto: "Clima", destino: "impressao_clima" },
            { texto: "Referências", destino: "referencias" }
        ]
    },

    referencias: {
        etapa: 13, 
        titulo: "Referências",
        texto: `
        <div class="csl-bib-body" style="line-height: 1.35; ">
            <div class="csl-entry" style="margin-bottom: 1em;">BRASIL. <b>Base Nacional Comum Curricular: Educação é a Base</b>. Brasília: Ministério da Educação, 2018. Disponível em: &lt;<a href="https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf">https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf</a>&gt;.</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Base%20Nacional%20Comum%20Curricular%3A%20Educa%C3%A7%C3%A3o%20%C3%A9%20a%20Base&amp;rft.place=Bras%C3%ADlia&amp;rft.au=undefined&amp;rft.date=2018&amp;rft.pages=600"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">BRASIL. <b>Base Nacional Comum Curricular: Computação na Educação Básica</b>. Brasília: Ministério da Educação, 2022. Disponível em: &lt;<a href="https://www.gov.br/mec/pt-br/escolas-conectadas/BNCCComputaoCompletodiagramado.pdf">https://www.gov.br/mec/pt-br/escolas-conectadas/BNCCComputaoCompletodiagramado.pdf</a>&gt;.</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=report&amp;rft.btitle=Base%20Nacional%20Comum%20Curricular%3A%20Computa%C3%A7%C3%A3o%20na%20Educa%C3%A7%C3%A3o%20B%C3%A1sica&amp;rft.place=Bras%C3%ADlia&amp;rft.au=undefined&amp;rft.date=2022&amp;rft.pages=75"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">DOUTOR AJUDA. <b>INFLUENZA (gripe): tipos, sintomas e tratamento</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=ouhPNJIpLvI">https://www.youtube.com/watch?v=ouhPNJIpLvI</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=INFLUENZA%20(gripe)%3A%20tipos%2C%20sintomas%20e%20tratamento&amp;rft.description=Voc%C3%AA%20j%C3%A1%20teve%20uma%20gripe%20t%C3%A3o%20forte%20que%20mal%20conseguia%20sair%20da%20cama%3F%20Febre%20alta%2C%20dor%20intensa%20no%20corpo%2C%20fraqueza%20e%20muito%20cansa%C3%A7o%20s%C3%A3o%20apenas%20alguns%20dos%20sintomas%20ca...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DouhPNJIpLvI&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">DRAUZIO VARELLA. <b>Vacinas e efeito rebanho | Animações #13</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=ruQ0rLeSeVo">https://www.youtube.com/watch?v=ruQ0rLeSeVo</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Vacinas%20e%20efeito%20rebanho%20%7C%20Anima%C3%A7%C3%B5es%20%2313&amp;rft.description=Voc%C3%AA%20sabe%20o%20que%20%C3%A9%20o%20Efeito%20Rebanho%2C%20quando%20a%20gente%20fala%20sobre%20vacinas%3F%20N%C3%A3o%20caia%20em%20Fake%20News.%20Vacine-se!Site%3A%20http%3A%2F%2Fwww.drauziovarella.uol.com.brFacebook%3A%20h...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DruQ0rLeSeVo&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">GOOGLE. <b>Como usar o Google Planilhas - Computador - Ajuda do Editores de arquivos Google</b>. Disponível em: &lt;<a href="https://support.google.com/docs/answer/6000292?hl=pt-PT">https://support.google.com/docs/answer/6000292?hl=pt-PT</a>&gt;. Acesso em: 27 jun. 2026. </div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Como%20usar%20o%20Google%20Planilhas%20-%20Computador%20-%20Ajuda%20do%20Editores%20de%20arquivos%20Google&amp;rft.identifier=https%3A%2F%2Fsupport.google.com%2Fdocs%2Fanswer%2F6000292%3Fhl%3Dpt-PT&amp;rft.au=undefined"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">HOSPITAL GAFFRÉE E GUINLE. <b>Cartilha ilustrada de Vacinação do HUGG</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=iA04p3rEz1o">https://www.youtube.com/watch?v=iA04p3rEz1o</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Cartilha%20ilustrada%20de%20Vacina%C3%A7%C3%A3o%20do%20HUGG&amp;rft.description=Cartilha%20ilustrada%20sobre%20a%20import%C3%A2ncia%20das%20vacinas&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiA04p3rEz1o&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">INSTITUTO AKATU. <b>A Higiene no dia a dia</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=iUkh8J9sNyQ">https://www.youtube.com/watch?v=iUkh8J9sNyQ</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=A%20Higiene%20no%20dia%20a%20dia&amp;rft.description=A%20gente%20nem%20percebe%2C%20mas%20a%20higiene%20nos%20acompanha%20o%20tempo%20todo.%20Desde%20a%20hora%20que%20acordamos%2C%20e%20escovamos%20os%20dentes%2C%20at%C3%A9%20a%20hora%20de%20dormir%2C%20temos%20uma%20s%C3%A9rie%20de%20h%C3%A1...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiUkh8J9sNyQ&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">MICROSOFT. <b>Auxílio e aprendizado do Excel</b>. Disponível em: &lt;<a href="https://support.microsoft.com/pt-br/excel">https://support.microsoft.com/pt-br/excel</a>&gt;. Acesso em: 27 jun. 2026. </div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Aux%C3%ADlio%20e%20aprendizado%20do%20Excel&amp;rft.identifier=https%3A%2F%2Fsupport.microsoft.com%2Fpt-br%2Fexcel&amp;rft.au=undefined"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">MUDANÇAS CLIMÁTICAS FAPESP. <b>Episódio 5: Saúde, Poluição e Mudanças Climáticas</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=psbQUk_GrWY">https://www.youtube.com/watch?v=psbQUk_GrWY</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Epis%C3%B3dio%205%3A%20Sa%C3%BAde%2C%20Polui%C3%A7%C3%A3o%20e%20Mudan%C3%A7as%20Clim%C3%A1ticas&amp;rft.description=O%20%C3%BAltimo%20epis%C3%B3dio%20da%20s%C3%A9rie%20%22Mudan%C3%A7as%20Clim%C3%A1ticas%20no%20Brasil%22%20traz%20os%20impactos%20dos%20eventos%20extremos%2C%20polui%C3%A7%C3%A3o%20do%20ar%20proveniente%20da%20fuma%C3%A7a%20deind%C3%BAstrias%20e%20autom%C3%B3v...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpsbQUk_GrWY&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">NIC.BR VIDEOS. <b>Lançamento Pesquisa TIC Domicílios 2025</b>. , 9 dez. 2025. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=WQoVMec3fC8">https://www.youtube.com/watch?v=WQoVMec3fC8</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Lan%C3%A7amento%20Pesquisa%20TIC%20Domic%C3%ADlios%202025&amp;rft.description=No%20dia%2009%20de%20dezembro%2C%20%C3%A0s%2010h%2C%20especialistas%20do%20Cetic.br%7CNIC.br%20divulgar%C3%A3o%20a%20nova%20edi%C3%A7%C3%A3o%20da%20pesquisa%20TIC%20Domic%C3%ADlios.%20O%20estudo%20c&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWQoVMec3fC8&amp;rft.au=undefined&amp;rft.date=2025-12-09"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">ORGANIZAÇÃO DAS NAÇÕES UNIDAS. <b>Objetivos de Desenvolvimento Sustentável | As Nações Unidas no Brasil</b>. Disponível em: &lt;<a href="https://brasil.un.org/pt-br/sdgs">https://brasil.un.org/pt-br/sdgs</a>&gt;. Acesso em: 27 jun. 2026. </div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Objetivos%20de%20Desenvolvimento%20Sustent%C3%A1vel%20%7C%20As%20Na%C3%A7%C3%B5es%20Unidas%20no%20Brasil&amp;rft.identifier=https%3A%2F%2Fbrasil.un.org%2Fpt-br%2Fsdgs&amp;rft.au=undefined&amp;rft.language=pt-br"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">PROJETO LAGOAS COSTEIRAS. <b>Doenças Veiculadas pela Água</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=USu2rWUnoXw">https://www.youtube.com/watch?v=USu2rWUnoXw</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Doen%C3%A7as%20Veiculadas%20pela%20%C3%81gua&amp;rft.description=Lagoas%20Costeiras%203Coordenador%3AAlois%20Eduard%20Sch%C3%A4ferRoteiro%3AJomar%20Pereira%20LaurinoEduardo%20Pompeo%20de%20MatosNarra%C3%A7%C3%A3o%3AEduardo%20Pompeo%20de%20MatosEdi%C3%A7%C3%A3o%20e%20arte%3AAdriano%20O...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUSu2rWUnoXw&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;"><b>Spreadsheet Editor - ONLYOFFICE</b>. Disponível em: &lt;<a href="https://helpcenter.onlyoffice.com/">https://helpcenter.onlyoffice.com/</a>&gt;. Acesso em: 27 jun. 2026. </div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Spreadsheet%20Editor%20-%20ONLYOFFICE&amp;rft.description=ONLYOFFICE%20Help%20Center%3A%20find%20answers%20to%20most%20of%20your%20questions.%20Read%20user%20guides%2C%20tips%20and%20tricks%2C%20watch%20video.&amp;rft.identifier=https%3A%2F%2Fhelpcenter.onlyoffice.com%2F&amp;rft.language=en"></span>
            <div class="csl-entry" style="margin-bottom: 1em;"><b>TIC Domicílios</b>. Disponível em: &lt;<a href="https://cetic.br/pt/pesquisa/domicilios/">https://cetic.br/pt/pesquisa/domicilios/</a>&gt;. Acesso em: 27 jun. 2026. </div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=TIC%20Domic%C3%ADlios&amp;rft.description=Centro%20Regional%20de%20Estudos%20para%20o%20Desenvolvimento%20da%20Sociedade%20da%20Informa%C3%A7%C3%A3o.%20Departamento%20do%20NIC.br%20que%20produz%20indicadores%20e%20estat%C3%ADsticas%20sobre%20a%20ado%C3%A7%C3%A3o%20de%20TIC.&amp;rft.identifier=https%3A%2F%2Fcetic.br%2Fpt%2Fpesquisa%2Fdomicilios%2F&amp;rft.language=pt-br"></span>
            <div class="csl-entry" style="margin-bottom: 1em;">TV APARECIDA. <b>Descarte correto de medicamentos evita riscos à saúde | TJ Aparecida</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=rgNo4IAogj4">https://www.youtube.com/watch?v=rgNo4IAogj4</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Descarte%20correto%20de%20medicamentos%20evita%20riscos%20%C3%A0%20sa%C3%BAde%20%7C%20TJ%20Aparecida&amp;rft.description=%23tvaparecida%20%23tjaparecida%20%E2%9A%A0%20INSCREVA-SE%20NO%20CANAL%20%E2%9A%A0Medicamentos%20vencidos%20ou%20sem%20uso%20n%C3%A3o%20devem%20ser%20descartados%20no%20lixo%20comum%20ou%20na%20rede%20de%20esgoto.%20Existem%20pont...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrgNo4IAogj4&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
            <div class="csl-entry" style="margin-bottom: 1em;"><b>Vacinação</b>. Disponível em: &lt;<a href="https://www.gov.br/saude/pt-br/vacinacao/vacinacao">https://www.gov.br/saude/pt-br/vacinacao/vacinacao</a>&gt;. Acesso em: 27 jun. 2026. </div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Vacina%C3%A7%C3%A3o&amp;rft.description=P%C3%A1gina%20de%20Vacina%C3%A7%C3%A3o%20do%20Minist%C3%A9rio%20da%20Sa%C3%BAde&amp;rft.identifier=https%3A%2F%2Fwww.gov.br%2Fsaude%2Fpt-br%2Fvacinacao%2Fvacinacao&amp;rft.language=pt-br"></span>
            <div class="csl-entry">WAGNO ALBINO. <b>Doenças causadas pela falta de saneamento básico</b>. , <i>[S.d.]</i>. Disponível em: &lt;<a href="https://www.youtube.com/watch?v=5keWkc1dXdA">https://www.youtube.com/watch?v=5keWkc1dXdA</a>&gt;. Acesso em: 27 jun. 2026</div>
            <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Doen%C3%A7as%20causadas%20pela%20falta%20de%20saneamento%20b%C3%A1sico&amp;rft.description=A%20falta%20de%20saneamento%20b%C3%A1sico%20deixa%20a%20popula%C3%A7%C3%A3o%20vulner%C3%A1vel%20em%20rela%C3%A7%C3%A3o%20%C3%A0%20sa%C3%BAde%2C%20a%20baixa%20disponibilidade%20de%20%C3%A1gua%20tratada%2C%20o%20destino%20inadequado%20dos%20dejetos%2C%20seja...&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5keWkc1dXdA&amp;rft.au=undefined&amp;rft.language=pt-BR"></span>
        </div>
        `,
        botoes: [
            { texto: "Retornar", destino: "encerramento" },
            { texto: "Créditos", destino: "creditos" }
        ]
    },

    creditos: {
        etapa: 14, 
        titulo: "Créditos",
        texto: `
        <div>
            <p>Profa. Dra. Rozana Reigota Naves</p>
            <p>Reitora da Universidade de Brasília (UnB)</p>
        <div>

        <div>
            <p>Prof. Dr. Ricardo Ruviaro</p>
            <p>Diretor do Instituto de Ciências Exatas (IE)</p>
        <div>

        <div>
            <p>Prof. Dr. Marcelo Antonio Marotta</p>
            <p>Chefe do Departamento de Ciência da Computação (CIC)</p>
        <div>

        <div>
            <p>Profa. Dra. Maria de Fátima Ramos Brandão</p>
            <p>Coordenadora do curso de Licenciatura em Computação</p>
        <div>

        <div>
            <p>Prof. Dr. Jonathan Rosa Moreira</p>
            <p>Profa. Dra. Maria de Fátima Ramos Brandão</p>
            <p>Docentes das disciplinas </p>
            <p>Produção de Material Didático (CIC0208) e </p>
            <p>Supervisão de Produção de Material Didático (CIC0209)</p>
        <div>

        <div>
            <p>Flavio Luis Leite Sousa</p>
            <p>Diretor do Centro de Educação de Jovens e Adultos Asa Sul (CESAS)</p>
        <div>

        <div>
            <p>Alexandre Adriano Neves de Paula</p>
            <p>Nathan Belcavello de Oliveira</p>
            <p>Hery Silveira Braga Costa</p>
            <p>Coordenadores do CESAS</p>
        <div>

        <div>
            <p>Prof. MSc. Nelson Maciel Torres</p>
            <p>Docente do curso de Operador de Computador do CESAS</p>
            <p>Supervisor e Revisor</p>
        <div>

        <div>
            <p>Luan Silveira Alves de Moura</p>
            <p>Gabriel Lima de Meneses Medeiros</p>
            <p>Autores</p>
        <div>
        `,
        botoes: [
            { texto: "Retornar", destino: "referencias" },
            { texto: "Reiniciar", destino: "capa" }
        ]
    },
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
    { id: 12, nome: "12. Encerramento" },
    { id: 13, nome: "13. Referências" },
    { id: 14, nome: "14. Créditos" }
];