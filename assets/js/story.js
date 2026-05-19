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
        titulo: "Diferentes Ferramentas para Criar Planilhas",
        texto: "Temos ferramentas instaladas (Excel, LibreOffice Calc) e em nuvem (Google Planilhas, ONLYOFFICE). A escolha depende crucialmente da sua conectividade e privacidade de dados.",
        botoes: [
            { 
                texto: "Retornar", 
                destino: "cotidiano" 
            }, 
            { 
                texto: "Continuar", 
                destino: "interface" 
            }
        ]
    },

    // === ETAPA 4: Interface da Ferramenta ===
    interface: {
        etapa: 4, 
        titulo: "Interface e Elementos Essenciais",
        texto: "A área de trabalho é composta por Linhas, Colunas e Células. Você quer aprender o uso comum pelo mouse ou prefere abrir uma trilha extra focada em atalhos de teclado para aumentar sua produtividade e acessibilidade?",
        botoes: [
            { 
                texto: "Usar Interface Convencional (Mouse)", 
                destino: "escolha_ods" 
            }, 
            { 
                texto: "Trilha Extra: Atalhos de Teclado", 
                destino: "atalhos_teclado" 
            }
        ]
    },
    atalhos_teclado: {
        etapa: 4, 
        titulo: "Trilha de Atalhos Avançados",
        texto: "Navegar usando as setas direcionais, pressionar 'Ctrl + Espaço' para selecionar colunas ou 'Shift + Espaço' para linhas poupa tempo e contorna barreiras motoras. Memorize esses comandos!",
        botoes: [
            { 
                texto: "Voltar", 
                destino: "interface" 
            }, 
            { 
                texto: "Prosseguir para Escolha Temática", 
                destino: "escolha_ods" 
            }
        ]
    },
    escolha_ods: {
        etapa: 4, 
        titulo: "Escolha sua Missão (ODS)",
        texto: "A partir de agora (Etapa 5 à 11), os conceitos técnicos de planilhas serão ensinados com dados reais baseados em metas globais. Escolha qual tema você deseja investigar:",
        botoes: [
            { 
                texto: "ODS 3: Saúde e Bem-Estar", 
                destino: "saude_dados" 
            }, 
            { 
                texto: "ODS 6: Água e Saneamento", 
                destino: "agua_dados" 
            }, 
            { 
                texto: "ODS 13: Mudança Climática", 
                destino: "clima_dados" 
            }
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