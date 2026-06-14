/* ==========================================================================
   NEXUS — Agency OS · Seed de dados
   Nicho vertical: Clínicas de Estética / Beleza (Brasil)
   Moeda: BRL · Idioma: PT-BR · Referência temporal: hoje = 2026-06-13
   --------------------------------------------------------------------------
   Este arquivo popula o estado inicial do app. Os números foram calibrados
   para serem coerentes entre si:
     - A soma de clients[].mrrBRL ≈ kpiHistory[último mês].mrrBRL
     - Funil de leads/deals/clients segue a lógica ADS -> Landing -> Form ->
       Reunião -> Fechamento -> CRM com Account Managers.
     - KPIs evoluem com crescimento realista (MRR sobe, churn cai, LTV:CAC
       melhora de ~1.9x para ~4.6x ao longo de 8 meses).
   ========================================================================== */

(function () {
  "use strict";

  // --- Agência -------------------------------------------------------------
  var agency = {
    name: "NEXUS",
    niche: "Clínicas de Estética",
    currency: "BRL",
    founder: "Maycon Túlio",
    monthlySpendBRL: 21500 // tráfego pago + ferramentas + comissões de prospecção
  };

  // --- Oferta produtizada (high-ticket, escopo fechado) --------------------
  var offer = {
    name: "Clínica Cheia — Aquisição Previsível para Estética",
    promise:
      "Em 90 dias, agenda da clínica preenchida com 30+ avaliações qualificadas por mês, " +
      "com landing page de alta conversão, anúncios no Meta/Google e WhatsApp respondendo " +
      "em menos de 60 segundos — sem você depender de indicação ou de postar todo dia.",
    deliverables: [
      "Diagnóstico de funil e posicionamento da clínica (oferta, ticket e procedimento âncora)",
      "Landing page de conversão exclusiva com prova social, antes/depois e formulário qualificador",
      "Gestão de tráfego pago Meta Ads + Google Ads (criativos, públicos e otimização semanal)",
      "Automação de WhatsApp com IA: qualificação, agendamento e lembrete anti-falta (no-show)",
      "CRM de leads integrado com pipeline de avaliações e follow-up automático em 7 toques",
      "Roteiros de venda e treinamento da recepção para converter avaliação em procedimento",
      "Dashboard de KPIs em tempo real (CPL, custo por avaliação, taxa de comparecimento e ROAS)",
      "Account Manager dedicado com call de performance quinzenal e otimização contínua"
    ],
    priceBRL: 4990, // fee mensal médio de gestão; setup separado de R$ 2.500
    positioning:
      "A única assessoria de marketing 100% especializada em clínicas de estética que entrega " +
      "AGENDA CHEIA como métrica, não 'posts bonitos'. Trabalhamos por número de avaliações " +
      "comparecidas e ROI, com escopo fechado e previsibilidade — não por hora ou por achismo."
  };

  // --- Metas do dia (prospecção outbound 100/dia) --------------------------
  var goals = {
    dailyOutreach: 100,
    today: {
      abordagens: 73,
      respostas: 14,
      reunioes: 3,
      fechamentos: 1
    },
    targets: {
      abordagens: 100,
      respostas: 20,
      reunioes: 5,
      fechamentos: 1
    }
  };

  // --- Leads (topo de funil — prospecção fria) -----------------------------
  // 14 clínicas brasileiras plausíveis com dores reais de aquisição.
  var leads = [
    {
      id: "l1",
      name: "Espaço Renova Estética Avançada",
      instagram: "@renova.estetica",
      phone: "(11) 98421-7763",
      city: "São Paulo, SP",
      revenueEstBRL: 145000,
      employees: 8,
      problem: "Investe R$ 6 mil/mês em impulsionamento sem rastrear lead; recepção perde WhatsApp e não sabe o CPL.",
      source: "Instagram",
      status: "respondeu",
      createdAt: "2026-06-03"
    },
    {
      id: "l2",
      name: "Clínica Belle Vie Harmonização",
      instagram: "@bellevie.harmonizacao",
      phone: "(21) 99654-1108",
      city: "Rio de Janeiro, RJ",
      revenueEstBRL: 98000,
      employees: 5,
      problem: "Site institucional travado e sem formulário; depende 100% de indicação e agenda oscila demais no mês.",
      source: "Google Business",
      status: "reuniao",
      createdAt: "2026-06-01"
    },
    {
      id: "l3",
      name: "Studio Lúmen Estética & Bem-Estar",
      instagram: "@studiolumen.estetica",
      phone: "(31) 98112-9045",
      city: "Belo Horizonte, MG",
      revenueEstBRL: 62000,
      employees: 4,
      problem: "Instagram parado há 5 semanas; faz tráfego sozinha e não tem automação de WhatsApp — leads esfriam.",
      source: "Instagram",
      status: "contatado",
      createdAt: "2026-06-05"
    },
    {
      id: "l4",
      name: "Derma Prime Centro de Estética",
      instagram: "@dermaprime.oficial",
      phone: "(41) 99873-2210",
      city: "Curitiba, PR",
      revenueEstBRL: 120000,
      employees: 7,
      problem: "Tem fila para botox mas botox e limpeza de pele estão paradas; sem oferta âncora nem landing de captação.",
      source: "Indicação",
      status: "respondeu",
      createdAt: "2026-05-29"
    },
    {
      id: "l5",
      name: "Clínica Estética Aurora Pelle",
      instagram: "@aurorapelle",
      phone: "(51) 98330-6677",
      city: "Porto Alegre, RS",
      revenueEstBRL: 54000,
      employees: 3,
      problem: "Sem site e sem Google Meu Negócio otimizado; gasta com panfleto e não consegue medir retorno nenhum.",
      source: "Google Business",
      status: "novo",
      createdAt: "2026-06-10"
    },
    {
      id: "l6",
      name: "Instituto Beleza Pura Estética",
      instagram: "@belezapura.instituto",
      phone: "(85) 99201-4458",
      city: "Fortaleza, CE",
      revenueEstBRL: 88000,
      employees: 6,
      problem: "Anuncia no Meta sem segmentação e recebe lead curioso de promoção; taxa de comparecimento abaixo de 40%.",
      source: "Instagram",
      status: "contatado",
      createdAt: "2026-06-04"
    },
    {
      id: "l7",
      name: "Espaço Glow Skin Care",
      instagram: "@glowskin.clinica",
      phone: "(47) 98765-3392",
      city: "Joinville, SC",
      revenueEstBRL: 71000,
      employees: 4,
      problem: "Cresceu por indicação e estagnou; sem previsibilidade de agenda e sem ninguém respondendo o direct.",
      source: "Indicação",
      status: "novo",
      createdAt: "2026-06-11"
    },
    {
      id: "l8",
      name: "Clínica Vênus Estética Integrada",
      instagram: "@venus.esteticaintegrada",
      phone: "(62) 99488-7120",
      city: "Goiânia, GO",
      revenueEstBRL: 110000,
      employees: 9,
      problem: "Recebe muitos leads mas sem CRM; perde follow-up e não sabe quanto cada procedimento custa pra adquirir.",
      source: "Google Business",
      status: "respondeu",
      createdAt: "2026-06-02"
    },
    {
      id: "l9",
      name: "Bella Forma Centro Estético",
      instagram: "@bellaforma.centro",
      phone: "(11) 98092-5541",
      city: "Campinas, SP",
      revenueEstBRL: 67000,
      employees: 5,
      problem: "Faz reels mas não converte em agendamento; sem landing page e sem qualificação no WhatsApp.",
      source: "Instagram",
      status: "novo",
      createdAt: "2026-06-12"
    },
    {
      id: "l10",
      name: "Clínica Pelle Nova Dermoestética",
      instagram: "@pellenova.dermo",
      phone: "(81) 99317-8804",
      city: "Recife, PE",
      revenueEstBRL: 95000,
      employees: 6,
      problem: "Forte em harmonização facial, mas pacotes de corpo encalhados; sem campanha estruturada para ociosidade.",
      source: "Indicação",
      status: "reuniao",
      createdAt: "2026-05-31"
    },
    {
      id: "l11",
      name: "Studio Essenza Estética",
      instagram: "@essenza.studio",
      phone: "(11) 98654-0192",
      city: "Santo André, SP",
      revenueEstBRL: 49000,
      employees: 3,
      problem: "Abriu há 1 ano, agenda com buracos; gasta em ads no escuro e não tem dashboard de métrica nenhuma.",
      source: "Instagram",
      status: "contatado",
      createdAt: "2026-06-06"
    },
    {
      id: "l12",
      name: "Clínica Lótus Estética & Saúde",
      instagram: "@lotus.esteticasaude",
      phone: "(48) 99120-6638",
      city: "Florianópolis, SC",
      revenueEstBRL: 132000,
      employees: 8,
      problem: "Bom faturamento mas dependente da dona vender; quer escalar avaliações sem aumentar o boca a boca.",
      source: "Google Business",
      status: "novo",
      createdAt: "2026-06-09"
    },
    {
      id: "l13",
      name: "Espaço Lclass Estética Premium",
      instagram: "@lass.estetica",
      phone: "(11) 97744-3015",
      city: "São Bernardo do Campo, SP",
      revenueEstBRL: 58000,
      employees: 4,
      problem: "Já contratou 'social media' e não viu retorno; descrente, quer ver número de avaliações comparecidas.",
      source: "Indicação",
      status: "perdido",
      createdAt: "2026-05-22"
    },
    {
      id: "l14",
      name: "Clínica Reluz Estética Avançada",
      instagram: "@reluz.estetica",
      phone: "(11) 98801-4477",
      city: "Guarulhos, SP",
      revenueEstBRL: 76000,
      employees: 5,
      problem: "Site não aparece no Google e não tem rastreio de WhatsApp; quer parar de depender de promoção pra encher.",
      source: "Google Business",
      status: "convertido",
      createdAt: "2026-05-18"
    }
  ];

  // --- Deals (pipeline ADS -> Landing -> Form -> Reunião -> Fechamento) ----
  // 9 negociações distribuídas pelos estágios; owners são closers/AMs do time.
  var deals = [
    {
      id: "d1",
      name: "Studio Lúmen Estética & Bem-Estar",
      leadId: "l3",
      stage: "ads",
      valueBRL: 3490,
      probability: 15,
      owner: "Rafael Queiroz",
      nextAction: "Lead clicou no anúncio de diagnóstico; aguardando preencher o formulário da landing.",
      niche: "Clínicas de Estética",
      createdAt: "2026-06-07"
    },
    {
      id: "d2",
      name: "Instituto Beleza Pura Estética",
      leadId: "l6",
      stage: "landing",
      valueBRL: 4990,
      probability: 25,
      owner: "Rafael Queiroz",
      nextAction: "Enviar VSL de cases de estética por WhatsApp e chamar para preencher o qualificador.",
      niche: "Clínicas de Estética",
      createdAt: "2026-06-05"
    },
    {
      id: "d3",
      name: "Studio Essenza Estética",
      leadId: "l11",
      stage: "form",
      valueBRL: 2990,
      probability: 35,
      owner: "Bianca Moraes",
      nextAction: "Formulário preenchido; ligar para confirmar faturamento e agendar diagnóstico.",
      niche: "Clínicas de Estética",
      createdAt: "2026-06-06"
    },
    {
      id: "d4",
      name: "Clínica Belle Vie Harmonização",
      leadId: "l2",
      stage: "reuniao",
      valueBRL: 5990,
      probability: 55,
      owner: "Bianca Moraes",
      nextAction: "Diagnóstico agendado 16/06 14h; preparar projeção de avaliações e proposta de escopo.",
      niche: "Clínicas de Estética",
      createdAt: "2026-06-01"
    },
    {
      id: "d5",
      name: "Clínica Pelle Nova Dermoestética",
      leadId: "l10",
      stage: "reuniao",
      valueBRL: 6500,
      probability: 60,
      owner: "Rafael Queiroz",
      nextAction: "Reunião feita; enviar proposta com campanha de ociosidade de pacotes de corpo.",
      niche: "Clínicas de Estética",
      createdAt: "2026-06-02"
    },
    {
      id: "d6",
      name: "Espaço Renova Estética Avançada",
      leadId: "l1",
      stage: "fechamento",
      valueBRL: 7200,
      probability: 80,
      owner: "Bianca Moraes",
      nextAction: "Proposta enviada; aguardando assinatura do contrato e link de pagamento do setup.",
      niche: "Clínicas de Estética",
      createdAt: "2026-05-30"
    },
    {
      id: "d7",
      name: "Clínica Vênus Estética Integrada",
      leadId: "l8",
      stage: "fechamento",
      valueBRL: 6900,
      probability: 70,
      owner: "Rafael Queiroz",
      nextAction: "Negociando setup parcelado; reforçar prova social de Goiânia e fechar até sexta.",
      niche: "Clínicas de Estética",
      createdAt: "2026-05-28"
    },
    {
      id: "d8",
      name: "Clínica Reluz Estética Avançada",
      leadId: "l14",
      stage: "ganho",
      valueBRL: 4990,
      probability: 100,
      owner: "Bianca Moraes",
      nextAction: "Contrato assinado; kickoff de onboarding marcado e repassar para Account Manager.",
      niche: "Clínicas de Estética",
      createdAt: "2026-05-19"
    },
    {
      id: "d9",
      name: "Espaço Lclass Estética Premium",
      leadId: "l13",
      stage: "perdido",
      valueBRL: 3490,
      probability: 0,
      owner: "Rafael Queiroz",
      nextAction: "Perdido por orçamento; colocar em cadência de reaquecimento em 90 dias.",
      niche: "Clínicas de Estética",
      createdAt: "2026-05-23"
    }
  ];

  // --- Clients (CRM ativo — 1 Account Manager por conta) -------------------
  // 6 clientes; soma de mrrBRL = 34.840 ≈ MRR do último mês de kpiHistory.
  var clients = [
    {
      id: "c1",
      name: "Clínica Reluz Estética Avançada",
      mrrBRL: 4990,
      accountManager: "Letícia Prado",
      health: 82,
      churnRisk: "baixo",
      renewalDate: "2026-11-19",
      startedAt: "2025-12-01",
      deliverables: [
        { label: "Meta Ads + Google Ads", status: "ok" },
        { label: "Landing page de avaliação", status: "ok" },
        { label: "Automação de WhatsApp", status: "andamento" },
        { label: "Dashboard de KPIs", status: "ok" }
      ],
      nps: 9
    },
    {
      id: "c2",
      name: "Clínica Harmonia Facial Premium",
      mrrBRL: 6500,
      accountManager: "Letícia Prado",
      health: 88,
      churnRisk: "baixo",
      renewalDate: "2026-09-15",
      startedAt: "2025-09-15",
      deliverables: [
        { label: "Campanha de harmonização facial", status: "ok" },
        { label: "CRM e follow-up 7 toques", status: "ok" },
        { label: "Treinamento da recepção", status: "ok" }
      ],
      nps: 10
    },
    {
      id: "c3",
      name: "Studio Dermmedic Estética",
      mrrBRL: 5490,
      accountManager: "Diego Fontana",
      health: 64,
      churnRisk: "médio",
      renewalDate: "2026-08-10",
      startedAt: "2025-11-10",
      deliverables: [
        { label: "Tráfego pago Meta Ads", status: "ok" },
        { label: "Automação anti-no-show", status: "atrasado" },
        { label: "Otimização de criativos", status: "andamento" },
        { label: "Relatório quinzenal", status: "ok" }
      ],
      nps: 7
    },
    {
      id: "c4",
      name: "Espaço Bella Derme Clínica",
      mrrBRL: 7200,
      accountManager: "Diego Fontana",
      health: 91,
      churnRisk: "baixo",
      renewalDate: "2026-12-05",
      startedAt: "2025-10-05",
      deliverables: [
        { label: "Funil completo ADS -> Landing -> WhatsApp", status: "ok" },
        { label: "Campanha de procedimento âncora", status: "ok" },
        { label: "Dashboard de ROAS em tempo real", status: "ok" }
      ],
      nps: 10
    },
    {
      id: "c5",
      name: "Clínica Estética Vida & Pele",
      mrrBRL: 4170,
      accountManager: "Letícia Prado",
      health: 47,
      churnRisk: "alto",
      renewalDate: "2026-07-20",
      startedAt: "2026-01-20",
      deliverables: [
        { label: "Gestão de tráfego pago", status: "andamento" },
        { label: "Landing page de captação", status: "atrasado" },
        { label: "Automação de WhatsApp", status: "atrasado" }
      ],
      nps: 5
    },
    {
      id: "c6",
      name: "Instituto Estético Lumina Care",
      mrrBRL: 6490,
      accountManager: "Diego Fontana",
      health: 79,
      churnRisk: "baixo",
      renewalDate: "2026-10-12",
      startedAt: "2025-10-12",
      deliverables: [
        { label: "Campanha multi-procedimento", status: "ok" },
        { label: "CRM com Account Manager dedicado", status: "ok" },
        { label: "Roteiros de venda da recepção", status: "andamento" },
        { label: "Call de performance quinzenal", status: "ok" }
      ],
      nps: 8
    }
  ];

  // --- Team (estrutura por departamento; 1-2 heads) ------------------------
  var team = [
    {
      id: "t1",
      name: "Maycon Túlio",
      role: "Founder & Head de Growth",
      department: "Growth",
      head: true,
      status: "ativo",
      hiredAt: "2025-08-01"
    },
    {
      id: "t2",
      name: "Bianca Moraes",
      role: "Head de Vendas / Closer Sênior",
      department: "Sales",
      head: true,
      status: "ativo",
      hiredAt: "2025-09-02"
    },
    {
      id: "t3",
      name: "Rafael Queiroz",
      role: "Closer & SDR de Prospecção",
      department: "Sales",
      head: false,
      status: "ativo",
      hiredAt: "2025-10-15"
    },
    {
      id: "t4",
      name: "Letícia Prado",
      role: "Account Manager Sênior",
      department: "Customer Success",
      head: false,
      status: "ativo",
      hiredAt: "2025-09-20"
    },
    {
      id: "t5",
      name: "Diego Fontana",
      role: "Account Manager",
      department: "Customer Success",
      head: false,
      status: "ativo",
      hiredAt: "2025-11-03"
    },
    {
      id: "t6",
      name: "Camila Bertolini",
      role: "Gestora de Tráfego Pago",
      department: "Growth",
      head: false,
      status: "ativo",
      hiredAt: "2025-10-01"
    },
    {
      id: "t7",
      name: "Thiago Nakamura",
      role: "Desenvolvedor de Landing Pages & Automação",
      department: "Tech",
      head: false,
      status: "ativo",
      hiredAt: "2025-11-18"
    },
    {
      id: "t8",
      name: "Juliana Vasconcelos",
      role: "Copywriter de Anúncios & Páginas",
      department: "Copy",
      head: false,
      status: "treinamento",
      hiredAt: "2026-03-10"
    },
    {
      id: "t9",
      name: "Pedro Lacerda",
      role: "Analista de SEO Local & Google Meu Negócio",
      department: "SEO",
      head: false,
      status: "avaliação",
      hiredAt: "2026-04-22"
    }
  ];

  // --- KPI History (8 meses: 2025-09 a 2026-04, tendência de crescimento) --
  // MRR sobe de 9.8k -> 34.84k · churn cai · LTV:CAC vai de ~1.9x para ~4.6x.
  var kpiHistory = [
    {
      month: "2025-09",
      mrrBRL: 9800,
      cacBRL: 2650,
      ltvBRL: 5100,
      churnPct: 9.5,
      closeRatePct: 12,
      roi: 1.9,
      ticketBRL: 3266,
      deliveryDays: 21
    },
    {
      month: "2025-10",
      mrrBRL: 13900,
      cacBRL: 2480,
      ltvBRL: 6200,
      churnPct: 8.4,
      closeRatePct: 14,
      roi: 2.3,
      ticketBRL: 3475,
      deliveryDays: 19
    },
    {
      month: "2025-11",
      mrrBRL: 17600,
      cacBRL: 2310,
      ltvBRL: 7400,
      churnPct: 7.6,
      closeRatePct: 15,
      roi: 2.7,
      ticketBRL: 3520,
      deliveryDays: 18
    },
    {
      month: "2025-12",
      mrrBRL: 21400,
      cacBRL: 2190,
      ltvBRL: 8600,
      churnPct: 6.8,
      closeRatePct: 17,
      roi: 3.1,
      ticketBRL: 3567,
      deliveryDays: 16
    },
    {
      month: "2026-01",
      mrrBRL: 24800,
      cacBRL: 2040,
      ltvBRL: 9700,
      churnPct: 6.1,
      closeRatePct: 18,
      roi: 3.4,
      ticketBRL: 3543,
      deliveryDays: 15
    },
    {
      month: "2026-02",
      mrrBRL: 28300,
      cacBRL: 1920,
      ltvBRL: 10900,
      churnPct: 5.4,
      closeRatePct: 20,
      roi: 3.9,
      ticketBRL: 3537,
      deliveryDays: 14
    },
    {
      month: "2026-03",
      mrrBRL: 31600,
      cacBRL: 1810,
      ltvBRL: 12200,
      churnPct: 4.7,
      closeRatePct: 22,
      roi: 4.2,
      ticketBRL: 3511,
      deliveryDays: 13
    },
    {
      month: "2026-04",
      mrrBRL: 34840,
      cacBRL: 1680,
      ltvBRL: 13800,
      churnPct: 4.1,
      closeRatePct: 24,
      roi: 4.6,
      ticketBRL: 3484,
      deliveryDays: 12
    }
  ];

  // --- Exporta para o global ----------------------------------------------
  window.NEXUS_SEED = {
    agency: agency,
    offer: offer,
    goals: goals,
    leads: leads,
    deals: deals,
    clients: clients,
    team: team,
    kpiHistory: kpiHistory
  };
})();
