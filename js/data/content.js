// NEXUS — Agency OS
// Conteúdo estático do app: marca, princípios, playbook de 12 fases,
// metadados dos módulos e textos de estado vazio.
// Nicho padrão: clínicas de estética / beleza no Brasil. Valores em R$ (BRL).
// Vanilla JS, sem build. Exposto em window.NEXUS_CONTENT.

(function () {
  "use strict";

  var BRAND = {
    name: "NEXUS",
    tagline: "O sistema operacional da sua agência vertical de IA.",
    subtitle:
      "Construa, opere e escale uma agência focada em clínicas de estética — do nicho ao MRR, com IA em toda a operação."
  };

  // Princípios do playbook — a mentalidade que sustenta as 12 fases.
  var PRINCIPLES = [
    "Não venda serviço. Venda solução financeira: quantas clientes a mais por mês e quanto isso vale.",
    "Quem aguenta pagar mais caro pelo CAC domina o nicho — porque compra os melhores canais antes dos concorrentes.",
    "10 clínicas a R$ 5.000/mês valem mais que 50 a R$ 500: menos operação, mais margem, menos churn.",
    "Use IA em toda a operação — prospecção, copy, atendimento, relatórios — para cortar custo e escalar sem inchar o time.",
    "Um Account Manager por cliente: quando algo falha, você sabe exatamente o nome de quem é responsável.",
    "Os dados do nicho são sua vantagem injusta: cada clínica atendida torna a próxima venda e a próxima entrega melhores."
  ];

  // Playbook — 12 fases, cada uma mapeada a um módulo operável do app.
  var PLAYBOOK = [
    {
      id: 1,
      phase: "FASE 1",
      title: "Escolha de mercado e posicionamento",
      goal: "Decidir em qual mercado você joga e como quer ser percebido antes de gastar o primeiro real.",
      summary:
        "Mercado de beleza e estética no Brasil é gigante, fragmentado e movido a agenda cheia. Posicione-se como quem enche a agenda da clínica — não como mais uma agência que 'faz post bonito'. Posição clara filtra cliente ruim antes da reunião.",
      actions: [
        "Defina a promessa central em uma frase: 'Lotamos a agenda de clínicas de estética com tráfego + IA de atendimento'.",
        "Liste 3 dores caras do mercado (agenda com buracos, lead que some no WhatsApp, dependência da dona postando).",
        "Escolha um inimigo: 'agência genérica que entrega métrica de vaidade' — todo o discurso se opõe a ele.",
        "Escreva o manifesto de posicionamento de 1 página e fixe no topo do Nicho & Oferta."
      ],
      module: "studio"
    },
    {
      id: 2,
      phase: "FASE 2",
      title: "Nicho vertical e economia do nicho",
      goal: "Travar UM sub-nicho e entender sua economia: ticket, margem, valor de uma cliente nova.",
      summary:
        "Vertical estreito vende mais rápido: 'clínicas de harmonização facial e estética avançada' é melhor que 'beleza'. Entenda os números da cliente — quanto vale um procedimento, qual a margem — para precificar seu serviço como fração do que você gera.",
      actions: [
        "Trave o sub-nicho: harmonização facial / estética avançada (ticket alto, margem alta, ciclo de recompra).",
        "Mapeie a economia: procedimento médio R$ 1.200–R$ 3.500, LTV de cliente fiel R$ 8.000+/ano.",
        "Calcule o valor de 10 clientes novas/mês para a clínica e amarre seu fee a uma fração disso.",
        "Monte o dossiê do nicho: sazonalidade (verão, datas), objeções comuns, gírias do setor."
      ],
      module: "studio"
    },
    {
      id: 3,
      phase: "FASE 3",
      title: "Estrutura de sócios e fundação",
      goal: "Definir papéis, divisão e ritmo de decisão antes do primeiro cliente para não brigar depois.",
      summary:
        "Agência quebra mais por sociedade mal feita do que por falta de cliente. Separe quem vende, quem entrega e quem cuida de operação/finanças. Coloque metas, vesting e regra de saída no papel desde o dia zero.",
      actions: [
        "Defina os 3 chapéus essenciais: Comercial (vendas), Operação (entrega) e Financeiro/Gestão.",
        "Acordem divisão societária + vesting (ex.: 4 anos, cliff de 1) e o que acontece se um sair.",
        "Estabeleçam o ritmo de gestão: reunião semanal de números e mensal de estratégia.",
        "Registrem CNPJ, conta PJ e contrato social; nada de 'a gente acerta depois'."
      ],
      module: "team"
    },
    {
      id: 4,
      phase: "FASE 4",
      title: "Primeiros clientes via outbound",
      goal: "Conseguir os primeiros contratos com prospecção ativa — 100 abordagens/dia, sem depender de indicação.",
      summary:
        "No começo ninguém te indica. Outbound é controlável: DM no Instagram, WhatsApp e e-mail para clínicas reais, com mensagem específica sobre a agenda delas. Volume + personalização ganham os primeiros logos que viram prova social.",
      actions: [
        "Monte a lista: 100 clínicas/dia por cidade no Instagram (bio, @ , telefone, perfil da dona).",
        "Use 3 ganchos de abertura testáveis e registre resposta de cada um no módulo de Prospecção.",
        "Ofereça uma isca de baixo atrito: auditoria gratuita de 15 min do funil de agendamento.",
        "Bata a meta diária de toques e mova quem responde direto para o Funil."
      ],
      module: "prospecting"
    },
    {
      id: 5,
      phase: "FASE 5",
      title: "Funil high-ticket: ADS → Landing → Form → Reunião → Fechamento",
      goal: "Transformar interesse em reunião qualificada e reunião em contrato de ticket alto.",
      summary:
        "O funil é o coração da máquina: anúncio chama atenção, landing converte em formulário, formulário qualifica (orçamento, autoridade, urgência), reunião diagnostica e proposta fecha. Cada etapa tem taxa de conversão que você mede e melhora.",
      actions: [
        "Crie a landing de uma promessa só, com prova social de clínicas e formulário de qualificação (BANT).",
        "Defina o roteiro de reunião: diagnóstico da agenda → impacto em R$ → oferta produtizada.",
        "Padronize a proposta com 3 opções (ancoragem) e prazo de validade curto.",
        "Acompanhe conversão de cada etapa no Funil e ataque o maior gargalo primeiro."
      ],
      module: "pipeline"
    },
    {
      id: 6,
      phase: "FASE 6",
      title: "Operação interna e Account Managers",
      goal: "Entregar com consistência: um Account Manager por cliente e processos que não dependem de heróis.",
      summary:
        "Vender é metade; entregar e reter é a outra. Cada cliente tem um AM dono do resultado, com ritual de onboarding, reunião quinzenal e relatório claro. Operação documentada permite trocar gente sem perder qualidade.",
      actions: [
        "Atribua 1 Account Manager por clínica, com meta de retenção e NPS sob a responsabilidade dele.",
        "Padronize o onboarding de 14 dias: acessos, ICP, promessa, primeira campanha no ar.",
        "Crie o ritual quinzenal: relatório de agendamentos gerados, CAC da clínica e próximos passos.",
        "Documente os SOPs no módulo de Time para que a entrega não dependa de uma pessoa só."
      ],
      module: "clients"
    },
    {
      id: 7,
      phase: "FASE 7",
      title: "Cobrar caro (high-ticket)",
      goal: "Subir preço com base em valor gerado e parar de competir por ser o mais barato.",
      summary:
        "Preço baixo atrai cliente que dá trabalho e some. Cobre como fração do resultado: se você gera R$ 40k/mês para a clínica, R$ 5k de fee é barato. Suba preço para clientes novos primeiro e use casos para justificar.",
      actions: [
        "Estabeleça piso de fee (ex.: R$ 4.500/mês) e recuse contrato abaixo dele.",
        "Modele a oferta como ROI: 'investe X, projetamos Y agendamentos = Z em faturamento'.",
        "Adicione performance fee ou setup para alinhar incentivo e elevar ticket médio.",
        "Reprecifique novos contratos a cada 3 cases sólidos no módulo de Clientes."
      ],
      module: "studio"
    },
    {
      id: 8,
      phase: "FASE 8",
      title: "Data do nicho = vantagem competitiva",
      goal: "Acumular dados de campanhas e resultados das clínicas para vender e entregar melhor que qualquer um.",
      summary:
        "A cada clínica atendida você aprende criativos, ganchos, ofertas e CPLs que funcionam no nicho. Esse acervo vira pitch ('temos benchmark de 40 clínicas') e acelera resultado de novos clientes. Centralize tudo no Painel.",
      actions: [
        "Padronize a coleta: CPL, custo por agendamento, taxa de comparecimento e ticket por clínica.",
        "Crie o benchmark do nicho (médias e melhores marcas) e use na reunião de vendas.",
        "Monte uma biblioteca de criativos vencedores reutilizáveis entre clientes.",
        "Revise os KPIs consolidados no Painel toda semana e ajuste a oferta padrão."
      ],
      module: "dashboard"
    },
    {
      id: 9,
      phase: "FASE 9",
      title: "Contratar cedo (antes de afogar)",
      goal: "Trazer a primeira contratação operacional antes do gargalo travar o crescimento.",
      summary:
        "O erro clássico é segurar contratação até o fundador virar refém da operação. Contrate o primeiro AM/operacional quando estiver com ~70% da capacidade — não a 100%. Treine com SOPs já documentados na fase 6.",
      actions: [
        "Defina o gatilho de contratação: ao chegar a 70% da capacidade do time atual.",
        "Comece pelo cargo que te tira da entrega: Account Manager ou gestor de tráfego.",
        "Use os SOPs documentados para um onboarding de 1 semana, não de 1 mês.",
        "Registre o novo papel e a meta no módulo de Time antes do primeiro dia."
      ],
      module: "team"
    },
    {
      id: 10,
      phase: "FASE 10",
      title: "Escalar o time em departamentos",
      goal: "Sair de 'todo mundo faz tudo' para áreas com líderes: Comercial, Operação/CS e Mídia.",
      summary:
        "Acima de ~15 clientes a estrutura solta precisa virar departamentos com responsáveis. Comercial alimenta o funil, Operação/CS entrega e retém, Mídia roda as campanhas. Cada área com meta, indicador e líder claro.",
      actions: [
        "Desenhe o organograma por área: Comercial, Operação/CS, Mídia/Tráfego e Gestão.",
        "Nomeie líderes com metas próprias (ex.: Operação responde por churn e NPS).",
        "Defina capacidade por AM (ex.: até 8 clínicas) para saber quando abrir nova vaga.",
        "Acompanhe headcount x carteira no módulo de Time e antecipe contratações."
      ],
      module: "team"
    },
    {
      id: 11,
      phase: "FASE 11",
      title: "Ciclos de contratação e cultura",
      goal: "Tornar contratação um processo recorrente e previsível, não um susto de última hora.",
      summary:
        "Agência que escala contrata em ciclos, não em pânico. Tenha pipeline de talentos sempre aberto, processo seletivo padronizado e plano de carreira para reter os bons. Cultura forte reduz o churn de gente — que é o mais caro.",
      actions: [
        "Mantenha um pipeline de candidatos sempre quente, mesmo sem vaga aberta.",
        "Padronize o processo seletivo: teste prático ligado ao nicho de estética.",
        "Crie trilha de carreira (Júnior → AM → Líder) e revisão de remuneração semestral.",
        "Meça turnover e tempo de rampa no módulo de Time a cada ciclo."
      ],
      module: "team"
    },
    {
      id: 12,
      phase: "FASE 12",
      title: "Liberdade operacional e KPIs",
      goal: "Tirar o fundador da operação diária e pilotar a agência por indicadores: CAC, LTV, Churn, ROI, MRR.",
      summary:
        "O objetivo final é uma máquina que roda com você fora do dia a dia: lê-se o Painel, decide-se por número. CAC saudável, LTV alto, churn baixo e MRR previsível significam liberdade. Você passa de operador a dono de verdade.",
      actions: [
        "Defina as metas de KPI: LTV/CAC ≥ 3, churn mensal < 5%, MRR crescente mês a mês.",
        "Implante o ritual de leitura do Painel sem o fundador na operação tática.",
        "Automatize relatórios com IA para liberar horas do time e do dono.",
        "Reinvista o caixa previsível em aquisição e novos departamentos."
      ],
      module: "dashboard"
    }
  ];

  // Metadados dos módulos do app (títulos e subtítulos da navegação).
  var MODULES = {
    dashboard: {
      title: "Painel",
      subtitle: "MRR, CAC, LTV, churn e ROI da agência num olhar só."
    },
    studio: {
      title: "Nicho & Oferta",
      subtitle: "Posicionamento, economia do nicho e oferta produtizada de ticket alto."
    },
    prospecting: {
      title: "Prospecção",
      subtitle: "100 abordagens/dia: outbound ativo, ganchos e meta diária de toques."
    },
    pipeline: {
      title: "Funil",
      subtitle: "ADS → Landing → Form → Reunião → Fechamento, etapa por etapa."
    },
    clients: {
      title: "Clientes & CS",
      subtitle: "Carteira ativa, Account Managers, retenção e saúde de cada conta."
    },
    team: {
      title: "Time & Operação",
      subtitle: "Papéis, SOPs, capacidade e contratação por departamento."
    },
    playbook: {
      title: "Playbook",
      subtitle: "As 12 fases para construir a agência vertical de IA, da escolha do nicho à liberdade."
    },
    copiloto: {
      title: "Copiloto IA",
      subtitle: "Gere copy de outbound, scripts de reunião e relatórios em segundos."
    }
  };

  // Textos de estado vazio (quando ainda não há dados cadastrados).
  var EMPTY = {
    leads:
      "Nenhuma clínica na lista ainda. Comece pela Fase 4: monte sua lista de 100 clínicas e dispare as primeiras abordagens hoje.",
    deals:
      "Seu funil está vazio. Mova as clínicas que responderam à prospecção para cá e marque a primeira reunião de diagnóstico.",
    clients:
      "Nenhum cliente ativo por enquanto. Quando fechar o primeiro contrato, ele aparece aqui com um Account Manager responsável.",
    team:
      "Time ainda não montado. Defina os papéis de sócios (Fase 3) e registre quem vende, quem entrega e quem gere."
  };

  window.NEXUS_CONTENT = {
    brand: BRAND,
    principles: PRINCIPLES,
    playbook: PLAYBOOK,
    modules: MODULES,
    empty: EMPTY
  };
})();
