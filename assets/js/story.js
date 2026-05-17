const storyData = {
    // === ETAPA 0: Boas-Vindas e Alinhamento Pedagógico ===
    capa: {
        etapa: 0, titulo: "Desbravando as Planilhas",
        texto: "Bem-vindo à sua sequência didática interativa de planilhas eletrônicas! Prepare-se para dominar ferramentas como Excel, Google Planilhas e LibreOffice através de um cenário prático voltado à cidadania digital.",
        botoes: [{ texto: "Apresentar Objetivos", destino: "objetivos" }]
    },
    objetivos: {
        etapa: 0, titulo: "Objetivos de Aprendizagem",
        texto: "Aqui você compreenderá a utilidade das planilhas na organização de dados diários, sabendo diferenciar ferramentas em nuvem ou instaladas e escolhendo a melhor opção para seu contexto.",
        botoes: [{ texto: "Retornar", destino: "capa" }, { texto: "Ver Conteúdos", destino: "conteudos" }]
    },
    conteudos: {
        etapa: 0, titulo: "Nossa Grade de Estudos",
        texto: "Nossa jornada passará por: Interfaces, Tipos de dados, Formatação, Operadores, Funções Iniciais, Condicionais, Gráficos e Relatórios de Impressão.",
        botoes: [{ texto: "Retornar", destino: "objetivos" }, { texto: "Ir para a Etapa 1", destino: "e1_cotidiano" }]
    },

    // === ETAPA 1: As Planilhas no Nosso Cotidiano ===
    e1_cotidiano: {
        etapa: 1, titulo: "E1. As Planilhas no Cotidiano",
        texto: "Tabelas organizam informações visando facilitar buscas rápidas. Na sociedade atual, dominar essa ferramenta é um ato de autonomia e exercício de cidadania digital.",
        botoes: [{ texto: "Retornar", destino: "conteudos" }, { texto: "Continuar para E2", destino: "e2_ferramentas" }]
    },

    // === ETAPA 2: Diferentes Ferramentas ===
    e2_ferramentas: {
        etapa: 2, titulo: "E2. Escolha da Ferramenta",
        texto: "Temos ferramentas instaladas (Excel, LibreOffice Calc) e em nuvem (Google Planilhas, ONLYOFFICE). A escolha depende crucialmente da sua conectividade e privacidade de dados.",
        botoes: [{ texto: "Retornar", destino: "e1_cotidiano" }, { texto: "Ir para a Etapa 3", destino: "e3_interface" }]
    },

    // === ETAPA 3: Interface e Elementos com Ramificação de Acessibilidade ===
    e3_interface: {
        etapa: 3, titulo: "E3. Interface e Estrutura",
        texto: "A área de trabalho é composta por Linhas, Colunas e Células. Você quer aprender o uso comum pelo mouse ou prefere abrir uma trilha extra focada em atalhos de teclado para aumentar sua produtividade e acessibilidade?",
        botoes: [
            { texto: "Usar Interface Convencional (Mouse)", destino: "e3_escolha_ods" },
            { texto: "Trilha Extra: Atalhos de Teclado", destino: "e3_atalhos" }
        ]
    },
    e3_atalhos: {
        etapa: 3, titulo: "Trilha de Atalhos Avançados",
        texto: "Navegar usando as setas direcionais, pressionar 'Ctrl + Espaço' para selecionar colunas ou 'Shift + Espaço' para linhas poupa tempo e contorna barreiras motoras. Memorize esses comandos!",
        botoes: [{ texto: "Voltar", destino: "e3_interface" }, { texto: "Prosseguir para Escolha Temática", destino: "e3_escolha_ods" }]
    },
    e3_escolha_ods: {
        etapa: 3, titulo: "Escolha sua Missão (ODS)",
        texto: "A partir de agora (Etapa 4 à 10), os conceitos técnicos de planilhas serão ensinados com dados reais baseados em metas globais. Escolha qual tema você deseja investigar:",
        botoes: [
            { texto: "ODS 3: Saúde e Bem-Estar", destino: "e4a_dados" },
            { texto: "ODS 6: Água e Saneamento", destino: "e4b_dados" },
            { texto: "ODS 13: Mudança Climática", destino: "e4c_dados" }
        ]
    },

    // ================= RAMIFICAÇÃO A: ODS 3 (SAÚDE) =================
    e4a_dados: { etapa: 4, trilha: "a", titulo: "E4. Dados de Saúde", texto: "Vamos inserir dados de cobertura vacinal. Aqui trabalhamos com Números Inteiros e Percentuais.", botoes: [{ texto: "Voltar", destino: "e3_escolha_ods" }, { texto: "Avançar", destino: "e5a_format" }] },
    e5a_format: { etapa: 5, trilha: "a", titulo: "E5. Formatação em Saúde", texto: "Destaque as colunas de hospitais aplicando bordas e mesclagem nos cabeçalhos de atendimento.", botoes: [{ texto: "Voltar", destino: "e4a_dados" }, { texto: "Avançar", destino: "e6a_operadores" }] },
    e6a_operadores: { etapa: 6, trilha: "a", titulo: "E6. Cálculos de Epidemias", texto: "Utilize operadores matemáticos simples para subtrair casos antigos de novos casos detectados.", botoes: [{ texto: "Voltar", destino: "e5a_format" }, { texto: "Avançar", destino: "e7a_funcoes" }] },
    e7a_funcoes: { etapa: 7, trilha: "a", titulo: "E7. Médias de Atendimento", texto: "Aplique a função MÉDIA e MÁXIMO para avaliar o tempo de espera em prontos-socorros.", botoes: [{ texto: "Voltar", destino: "e6a_operadores" }, { texto: "Avançar", destino: "e8a_condicionais" }] },
    e8a_condicionais: { etapa: 8, trilha: "a", titulo: "E8. Lógica e Alertas", texto: "Use SE e formatação condicional para pintar em vermelho os distritos com surtos críticos.", botoes: [{ texto: "Voltar", destino: "e7a_funcoes" }, { texto: "Avançar", destino: "e9a_graficos" }] },
    e9a_graficos: { etapa: 9, trilha: "a", titulo: "E9. Gráficos de Linha Hospitalar", texto: "Gere um gráfico de linhas para demonstrar visualmente a queda de uma doença na região.", botoes: [{ texto: "Voltar", destino: "e8a_condicionais" }, { texto: "Avançar", destino: "e10a_print" }] },
    e10a_print: { etapa: 10, trilha: "a", titulo: "E10. Exportar Relatório de Saúde", texto: "Configure a folha em modo Paisagem para exportar os dados epidemiológicos finais em PDF.", botoes: [{ texto: "Voltar", destino: "e9a_graficos" }, { texto: "Finalizar Jornada", destino: "e11_conclusao" }] },

    // ================= RAMIFICAÇÃO B: ODS 6 (ÁGUA) =================
    e4b_dados: { etapa: 4, trilha: "b", titulo: "E4. Consumo de Água", texto: "Registraremos volumes em Litros e datas de medição do nível de reservatórios locais.", botoes: [{ texto: "Voltar", destino: "e3_escolha_ods" }, { texto: "Avançar", destino: "e5b_format" }] },
    e5b_format: { etapa: 5, trilha: "b", titulo: "E5. Layout de Recursos Hídricos", texto: "Formate a tabela com cores suaves de fundo para diferenciar rios poluídos de monitorados.", botoes: [{ texto: "Voltar", destino: "e4b_dados" }, { texto: "Avançar", destino: "e6b_operadores" }] },
    e6b_operadores: { etapa: 6, trilha: "b", titulo: "E6. Desperdício Calculado", texto: "Divida o volume total captado pelo número de habitantes para descobrir o gasto per capita.", botoes: [{ texto: "Voltar", destino: "e5b_format" }, { texto: "Avançar", destino: "e7b_funcoes" }] },
    e7b_funcoes: { etapa: 7, trilha: "b", titulo: "E7. Somas Saneamento", texto: "Descubra o total de água consumida na comunidade usando a função SOMA.", botoes: [{ texto: "Voltar", destino: "e6b_operadores" }, { texto: "Avançar", destino: "e8b_condicionais" }] },
    e8b_condicionais: { etapa: 8, trilha: "b", titulo: "E8. Alertas de Escassez", texto: "Insira a função SE para exibir 'ALERTA' se o volume cair abaixo de 25% da capacidade.", botoes: [{ texto: "Voltar", destino: "e7b_funcoes" }, { texto: "Avançar", destino: "e9b_graficos" }] },
    e9b_graficos: { etapa: 9, trilha: "b", titulo: "E9. Gráfico de Pizza do Consumo", texto: "Gere um gráfico de setores (pizza) demonstrando as maiores perdas de água na rede.", botoes: [{ texto: "Voltar", destino: "e8b_condicionais" }, { texto: "Avançar", destino: "e10b_print" }] },
    e10b_print: { etapa: 10, trilha: "b", titulo: "E10. Relatório de Sustentabilidade", texto: "Defina a área de impressão de modo a ocultar notas de rascunho na exportação.", botoes: [{ texto: "Voltar", destino: "e9b_graficos" }, { texto: "Finalizar Jornada", destino: "e11_conclusao" }] },

    // ================= RAMIFICAÇÃO C: ODS 13 (CLIMA) =================
    e4c_dados: { etapa: 4, trilha: "c", titulo: "E4. Emissões de Carbono", texto: "Montaremos uma planilha contendo dados científicos e decimais de gases estufa.", botoes: [{ texto: "Voltar", destino: "e3_escolha_ods" }, { texto: "Avançar", destino: "e5c_format" }] },
    e5c_format: { etapa: 5, trilha: "c", titulo: "E5. Destacando Anomalias", texto: "Aplique fundos cinzas e bordas reforçadas para demarcar os anos de maior aquecimento global.", botoes: [{ texto: "Voltar", destino: "e4c_dados" }, { texto: "Avançar", destino: "e6c_operadores" }] },
    e6c_operadores: { etapa: 6, trilha: "c", titulo: "E6. Projeção Matemática", texto: "Multiplique as taxas de desmatamento pelo fator de emissão usando operadores estritos.", botoes: [{ texto: "Voltar", bridge: "e5c_format" }, { texto: "Avançar", destino: "e7c_funcoes" }] },
    e7c_funcoes: { etapa: 7, trilha: "c", titulo: "E7. Extremos de Temperatura", texto: "Localize a temperatura global mais alta usando a função MÁXIMO nos registros históricos.", botoes: [{ texto: "Voltar", destino: "e6c_operadores" }, { texto: "Avançar", destino: "e8c_condicionais" }] },
    e8c_condicionais: { etapa: 8, trilha: "c", titulo: "E8. Metas do Acordo de Paris", texto: "Use CONT.SE para contar quantos países ultrapassaram o limite aceitável de emissões.", botoes: [{ texto: "Voltar", destino: "e7c_funcoes" }, { texto: "Avançar", destino: "e9c_graficos" }] },
    e9c_graficos: { etapa: 9, trilha: "c", titulo: "E9. Gráfico de Colunas de CO2", texto: "Desenvolva um gráfico de colunas comparando as reduções de poluentes entre blocos econômicos.", botoes: [{ texto: "Voltar", destino: "e8c_condicionais" }, { texto: "Avançar", destino: "e10c_print" }] },
    e10c_print: { etapa: 10, trilha: "c", titulo: "E10. Divulgação Científica", texto: "Insira numeração de páginas no rodapé e exporte seu relatório climático unificado.", botoes: [{ texto: "Voltar", destino: "e9c_graficos" }, { texto: "Finalizar Jornada", destino: "e11_conclusao" }] },

    // === ETAPA 11: Fechamento / Conclusão de Caminhos ===
    e11_conclusao: {
        etapa: 11, titulo: "E11. Certificação e Próximos Passos",
        texto: "Parabéns! Você concluiu a sequência didática de planilhas de forma brilhante e com plena consciência cidadã. Suas tomadas de decisões demonstraram como dados brutos transformam realidades.",
        botoes: [{ texto: "Reiniciar Toda a Sequência", destino: "capa" }]
    }
};

const etapasConfig = [
    { id: 0, nome: "0. Apresentação" },
    { id: 1, nome: "1. Cotidiano" },
    { id: 2, nome: "2. Editores" },
    { id: 3, nome: "3. Interfaces" },
    { id: 4, nome: "4. Tipos de Dados" },
    { id: 5, nome: "5. Formatações" },
    { id: 6, nome: "6. Operadores" },
    { id: 7, nome: "7. Funções Iniciais" },
    { id: 8, nome: "8. Condicionais" },
    { id: 9, nome: "9. Gráficos" },
    { id: 10, nome: "10. Impressão" },
    { id: 11, nome: "11. Encerramento" }
];