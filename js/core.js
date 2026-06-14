/* ===================================================================
   NEXUS — Agency OS · core.js
   Estado, KPIs, roteamento, UI helpers e registro de módulos.
   Funciona com dados embutidos (defaults) e é enriquecido pelos
   arquivos js/data/*.js gerados (window.NEXUS_SEED / NICHES / CONTENT).
   =================================================================== */
(function () {
  'use strict';

  // ----------------------------------------------------------------
  // DEFAULTS (fallback — sobrescritos por js/data/*.js quando presentes)
  // ----------------------------------------------------------------
  const DEFAULT_CONTENT = {
    brand: { name: 'NEXUS', tagline: 'O sistema operacional da sua agência vertical de IA', subtitle: 'Agency OS' },
    principles: [
      'Não venda serviço. Venda solução financeira.',
      'Quem consegue pagar mais pelo CAC domina o mercado.',
      '10 clientes a R$5.000 valem mais que 50 a R$500.',
      'Use IA em toda a operação para derrubar o custo.',
      '1 Account Manager por cliente — saiba quem falhou.',
      'Dados do nicho = vantagem competitiva e CAC menor.',
    ],
    modules: {
      dashboard: { title: 'Painel', subtitle: 'KPIs e saúde da operação em tempo real' },
      studio: { title: 'Nicho & Oferta', subtitle: 'Posicionamento e oferta fechada com IA' },
      prospecting: { title: 'Prospecção', subtitle: 'Motor outbound — 100 abordagens/dia' },
      pipeline: { title: 'Funil', subtitle: 'ADS → Landing → Form → Reunião → Fechamento' },
      clients: { title: 'Clientes & CS', subtitle: 'Account Managers, saúde e churn' },
      team: { title: 'Time & Operação', subtitle: 'Departamentos, heads e ciclos' },
      playbook: { title: 'Playbook', subtitle: 'As 12 fases para escalar a agência' },
    },
    empty: {
      leads: 'Nenhum lead ainda. Importe ou adicione um para começar a prospecção.',
      deals: 'Sem negociações neste estágio.',
      clients: 'Nenhum cliente ativo ainda.',
      team: 'Monte seu time por departamento.',
    },
    playbook: [
      { id: 1, phase: 'FASE 1', title: 'Escolha do mercado', goal: 'Não ser "mais uma agência".', summary: 'Decida entre agência tradicional ou de soluções com IA — e use IA em toda a operação para reduzir custo.', actions: ['Defina o modelo (tradicional x IA)', 'Liste onde a IA entra na operação'], module: 'studio' },
      { id: 2, phase: 'FASE 2', title: 'Nicho vertical', goal: 'Virar autoridade em 1 segmento.', summary: 'Escolha um único nicho e estude profundamente como ele ganha e perde dinheiro.', actions: ['Escolha 1 nicho', 'Responda: onde ele perde dinheiro?'], module: 'studio' },
      { id: 3, phase: 'FASE 3', title: 'Estrutura de sócios', goal: 'Habilidades complementares.', summary: 'Sócio comercial + sócio de operação. Nunca dois iguais.', actions: ['Defina comercial', 'Defina operação/tech'], module: 'team' },
      { id: 4, phase: 'FASE 4', title: 'Primeiros clientes', goal: 'Caixa: 10 a 20 clientes.', summary: 'Outbound manual: 100 abordagens/dia, protótipo grátis, abordagem direta.', actions: ['100 abordagens/dia', 'Crie diagnósticos grátis'], module: 'prospecting' },
      { id: 5, phase: 'FASE 5', title: 'Funil high-ticket', goal: 'Máquina previsível.', summary: 'ADS → Landing → Formulário → Reunião → Closer.', actions: ['Monte o funil', 'Filtre leads ruins'], module: 'pipeline' },
      { id: 6, phase: 'FASE 6', title: 'Operação interna', goal: '1 responsável por cliente.', summary: 'Cada cliente tem um Account Manager responsável pela renovação.', actions: ['Atribua AMs', 'Acompanhe churn'], module: 'clients' },
      { id: 7, phase: 'FASE 7', title: 'Cobrar caro', goal: 'Margem > volume.', summary: 'Menos clientes, ticket maior, menos suporte, mais qualidade.', actions: ['Suba o ticket', 'Recalcule a oferta'], module: 'studio' },
      { id: 8, phase: 'FASE 8', title: 'Data = vantagem', goal: 'Reduzir CAC.', summary: 'Banco de dados do nicho: nome, telefone, instagram, faturamento.', actions: ['Construa a base', 'Enriqueça os leads'], module: 'prospecting' },
      { id: 9, phase: 'FASE 9', title: 'Contratar cedo', goal: 'Sua hora é cara.', summary: 'Delegue tarefas repetitivas o quanto antes.', actions: ['Liste tarefas repetitivas', 'Contrate para delegar'], module: 'team' },
      { id: 10, phase: 'FASE 10', title: 'Escalar time', goal: 'Criar departamentos.', summary: 'Growth, Sales, Tech, SEO, Copy, CS, Design/Web.', actions: ['Estruture departamentos'], module: 'team' },
      { id: 11, phase: 'FASE 11', title: 'Ciclos de contratação', goal: 'Encontrar líderes (heads).', summary: 'Contratar → Treinar → Avaliar → Demitir → Melhorar.', actions: ['Rode ciclos', 'Promova heads'], module: 'team' },
      { id: 12, phase: 'FASE 12', title: 'Liberdade operacional', goal: 'Você acompanha só KPIs.', summary: 'Heads controlam setores. Você acompanha CAC, LTV, churn, ROI.', actions: ['Acompanhe KPIs', 'Defina metas'], module: 'dashboard' },
    ],
  };

  const DEFAULT_NICHES = [
    {
      id: 'estetica', name: 'Clínicas de Estética', icon: 'i-face',
      summary: 'Procedimentos estéticos e injetáveis com alto ticket e recorrência.',
      howTheyMakeMoney: 'Faturam com procedimentos de alto valor (harmonização, botox, preenchimento) e pacotes recorrentes.',
      revenueStreams: [
        { name: 'Harmonização facial', avgTicketBRL: 3500, marginPct: 70 },
        { name: 'Botox / toxina', avgTicketBRL: 1200, marginPct: 75 },
        { name: 'Preenchimento labial', avgTicketBRL: 1500, marginPct: 72 },
        { name: 'Depilação a laser (pacote)', avgTicketBRL: 2400, marginPct: 65 },
      ],
      pains: ['Agenda ociosa em dias fracos', 'Leads do Instagram sem resposta rápida', 'Muito no-show', 'Depende da indicação', 'Não reativa clientes antigos'],
      bottlenecks: ['Atendimento manual no WhatsApp', 'Sem follow-up de orçamentos', 'Recepção sobrecarregada', 'Sem CRM'],
      whereTheyLoseMoney: ['Leads sem follow-up viram nada', 'No-show derruba o faturamento', 'Clientes somem após 1 procedimento', 'Sem remarketing de quem pediu orçamento', 'Horários vazios não são preenchidos'],
      benchmarks: [{ metric: 'Ticket médio', value: 'R$ 1.800', note: 'por procedimento' }, { metric: 'No-show', value: '18%', note: 'média do setor' }, { metric: 'Conversão de orçamento', value: '22%', note: 'sem follow-up' }, { metric: 'Recompra 90d', value: '31%', note: 'com reativação' }],
      criteria: { dorCara: { score: 9, why: 'Cada lead perdido vale centenas de reais.' }, ticketAlto: { score: 8, why: 'Procedimentos de R$1.000 a R$5.000.' }, mercadoGrande: { score: 9, why: 'Milhares de clínicas no Brasil.' }, recorrencia: { score: 8, why: 'Manutenção e pacotes recorrentes.' } },
      suggestedOffer: { name: 'Sistema de Aquisição & Conversão de Pacientes', promise: 'Vender 30% mais procedimentos premium no automático', deliverables: ['Tráfego pago (Meta/Google)', 'Landing page de alta conversão', 'IA atendendo no WhatsApp 24/7', 'Follow-up e recuperação de orçamentos', 'Reativação de clientes antigos', 'Dashboard de resultados'], priceBRL: 4990, positioning: 'Não vendemos tráfego. Entregamos pacientes na sua agenda.' },
    },
  ];

  const DEFAULT_PROMPTS = {
    model: 'claude-sonnet-4-6',
    system: {},
    demo: {
      diagnosis: '**Diagnóstico — {{leadName}}**\n\nAnalisei o perfil {{instagram}} ({{niche}}) e o ponto crítico "{{problem}}".\n\n**Onde está perdendo dinheiro:**\n• Leads do Instagram sem resposta nas primeiras 2h → perda estimada de R$ 8–14 mil/mês.\n• Sem follow-up de orçamentos: ~22% fechariam com 3 contatos.\n• Agenda ociosa em dias fracos → capacidade desperdiçada.\n\n**Oportunidades rápidas:**\n1. IA respondendo no WhatsApp em segundos.\n2. Sequência de follow-up automática (D+1, D+3, D+7).\n3. Reativação da base antiga com oferta sazonal.\n\n**Estimativa:** recuperar R$ 12–20 mil/mês com a operação atual.',
      outreach: 'Oi! Analisei a operação de {{leadName}} e percebi que "{{problem}}" provavelmente está fazendo vocês perderem pacientes todos os dias. Montei um diagnóstico rápido com 3 oportunidades — posso te mostrar em 10 min?',
      offer: 'Oferta para {{niche}}: um sistema produtizado que transforma leads parados em agenda cheia — tráfego + landing + IA no WhatsApp + follow-up + reativação. Você não compra serviço, compra faturamento previsível.',
      adCopy: 'Clínicas de {{niche}} estão perdendo milhares por não automatizar o atendimento.\n\nEnquanto você lê isso, um lead mandou DM e ninguém respondeu.\n\nNós colocamos uma IA atendendo 24/7 e enchemos sua agenda. Quer ver como?',
      kpiInsights: 'Com MRR de {{mrr}} e CAC de {{cac}}, seu LTV:CAC está saudável. Prioridades:\n1. Atacar o churn ({{churn}}) com check-ins de CS no D+30.\n2. Subir o ticket médio — sua oferta comporta mais.\n3. Dobrar o que já converte na prospecção antes de abrir canal novo.',
      copiloto: [
        { match: ['cac', 'custo', 'aquisição', 'caro'], answer: 'CAC é o que você paga para conquistar um cliente. A regra do playbook: quem aguenta pagar mais pelo CAC domina o nicho. Suba o ticket para poder investir mais em aquisição — e use os dados do nicho para reduzir o CAC.' },
        { match: ['churn', 'cancel', 'retenção', 'renov'], answer: 'Churn é cliente saindo. Cada cliente tem 1 Account Manager justamente para você saber quem falhou. Foque em check-ins no D+30 e em entregar resultado financeiro visível — não só "serviço".' },
        { match: ['nicho', 'mercado', 'posicion'], answer: 'Escolha 1 nicho com dor cara, ticket alto, mercado grande e recorrência. Depois responda: onde esse negócio perde dinheiro? Sua oferta resolve exatamente isso.' },
        { match: ['oferta', 'preço', 'cobrar', 'ticket'], answer: '10 clientes a R$5.000 batem 50 a R$500 — com muito menos caos. Produtize a entrega e venda solução financeira ("vendo +30% de procedimentos"), nunca "faço tráfego".' },
        { match: ['prospec', 'lead', 'abordagem', 'outbound'], answer: 'Meta de início: 100 abordagens/dia → 20 respostas → 5 reuniões → 1 fechamento. Encontre negócios com problema visível, crie um diagnóstico grátis e aborde direto.' },
        { match: ['contratar', 'time', 'equipe', 'head', 'departamento'], answer: 'Contrate cedo para tirar de você as tarefas repetitivas. Rode ciclos (contratar → treinar → avaliar → demitir → melhorar) até achar heads que assumam setores.' },
      ],
      copilotoDefault: 'Boa pergunta. Pelo playbook, sua próxima alavanca costuma estar em "onde o negócio perde dinheiro". Me diga em qual fase você está (nicho, prospecção, funil, clientes ou escala) que eu aponto o próximo passo concreto.',
    },
  };

  const DEFAULT_SEED = {
    agency: { name: 'NEXUS', niche: 'Clínicas de Estética', currency: 'BRL', founder: 'Você', monthlySpendBRL: 16000 },
    nicheId: 'estetica',
    offer: DEFAULT_NICHES[0].suggestedOffer,
    goals: { dailyOutreach: 100, today: { abordagens: 64, respostas: 13, reunioes: 3, fechamentos: 1 }, targets: { abordagens: 100, respostas: 20, reunioes: 5, fechamentos: 1 } },
    leads: [
      { id: 'l1', name: 'Studio Lumière Estética', instagram: '@studiolumiere', phone: '(11) 99812-4410', city: 'São Paulo', revenueEstBRL: 80000, employees: 6, problem: 'Instagram parado, sem resposta em DM', source: 'Instagram', status: 'novo', createdAt: '2026-06-10' },
      { id: 'l2', name: 'Clínica Bella Pelle', instagram: '@bellapelle', phone: '(21) 99744-2231', city: 'Rio de Janeiro', revenueEstBRL: 120000, employees: 9, problem: 'Sem site e sem automação de WhatsApp', source: 'Google Business', status: 'contatado', createdAt: '2026-06-09' },
      { id: 'l3', name: 'Espaço Renove', instagram: '@espacorenove', phone: '(31) 99655-1188', city: 'Belo Horizonte', revenueEstBRL: 60000, employees: 4, problem: 'Muito no-show, agenda ociosa', source: 'Indicação', status: 'respondeu', createdAt: '2026-06-08' },
      { id: 'l4', name: 'Derma Care Clinic', instagram: '@dermacare', phone: '(41) 99511-7766', city: 'Curitiba', revenueEstBRL: 150000, employees: 11, problem: 'Não reativa clientes antigos', source: 'Instagram', status: 'reuniao', createdAt: '2026-06-05' },
      { id: 'l5', name: 'Vita Estética Avançada', instagram: '@vitaestetica', phone: '(51) 99423-9090', city: 'Porto Alegre', revenueEstBRL: 95000, employees: 7, problem: 'Leads de orçamento sem follow-up', source: 'Google Business', status: 'novo', createdAt: '2026-06-11' },
    ],
    deals: [
      { id: 'd1', name: 'Clínica Bella Pelle', leadId: 'l2', stage: 'reuniao', valueBRL: 4990, probability: 55, owner: 'Marina', nextAction: 'Reunião quinta 15h', niche: 'Clínicas de Estética', createdAt: '2026-06-09' },
      { id: 'd2', name: 'Derma Care Clinic', leadId: 'l4', stage: 'fechamento', valueBRL: 6500, probability: 80, owner: 'Marina', nextAction: 'Enviar contrato', niche: 'Clínicas de Estética', createdAt: '2026-06-05' },
      { id: 'd3', name: 'Espaço Renove', leadId: 'l3', stage: 'form', valueBRL: 3500, probability: 35, owner: 'Rafa', nextAction: 'Qualificar faturamento', niche: 'Clínicas de Estética', createdAt: '2026-06-08' },
      { id: 'd4', name: 'Studio Lumière', leadId: 'l1', stage: 'landing', valueBRL: 4200, probability: 20, owner: 'Rafa', nextAction: 'Aguardando preencher form', niche: 'Clínicas de Estética', createdAt: '2026-06-10' },
      { id: 'd5', name: 'Clínica Áurea', leadId: '', stage: 'ganho', valueBRL: 5500, probability: 100, owner: 'Marina', nextAction: 'Onboarding', niche: 'Clínicas de Estética', createdAt: '2026-05-28' },
    ],
    clients: [
      { id: 'c1', name: 'Clínica Áurea', mrrBRL: 5500, accountManager: 'Bruna', health: 88, churnRisk: 'baixo', renewalDate: '2026-11-28', startedAt: '2025-11-28', deliverables: [{ label: 'Tráfego pago', status: 'ok' }, { label: 'IA WhatsApp', status: 'ok' }, { label: 'Reativação', status: 'andamento' }], nps: 9 },
      { id: 'c2', name: 'Espaço Glow', mrrBRL: 4200, accountManager: 'Bruna', health: 72, churnRisk: 'médio', renewalDate: '2026-07-15', startedAt: '2026-01-15', deliverables: [{ label: 'Landing page', status: 'ok' }, { label: 'Follow-up', status: 'atrasado' }], nps: 7 },
      { id: 'c3', name: 'Instituto Pelle', mrrBRL: 6800, accountManager: 'Diego', health: 91, churnRisk: 'baixo', renewalDate: '2026-09-02', startedAt: '2025-09-02', deliverables: [{ label: 'Tráfego', status: 'ok' }, { label: 'CRM', status: 'ok' }], nps: 10 },
      { id: 'c4', name: 'Clínica Nova Face', mrrBRL: 3800, accountManager: 'Diego', health: 54, churnRisk: 'alto', renewalDate: '2026-06-30', startedAt: '2026-02-01', deliverables: [{ label: 'Ads', status: 'atrasado' }, { label: 'Relatórios', status: 'andamento' }], nps: 5 },
    ],
    team: [
      { id: 't1', name: 'Marina Costa', role: 'Closer', department: 'Sales', head: true, status: 'ativo', hiredAt: '2025-08-01' },
      { id: 't2', name: 'Rafael Lima', role: 'SDR', department: 'Sales', head: false, status: 'ativo', hiredAt: '2025-10-01' },
      { id: 't3', name: 'Bruna Alves', role: 'Account Manager', department: 'Customer Success', head: true, status: 'ativo', hiredAt: '2025-09-15' },
      { id: 't4', name: 'Diego Santos', role: 'Account Manager', department: 'Customer Success', head: false, status: 'ativo', hiredAt: '2026-01-10' },
      { id: 't5', name: 'Carla Mendes', role: 'Gestora de Tráfego', department: 'Growth', head: false, status: 'ativo', hiredAt: '2025-11-01' },
      { id: 't6', name: 'Pedro Rocha', role: 'Eng. de Automação/IA', department: 'Tech', head: false, status: 'treinamento', hiredAt: '2026-03-01' },
    ],
    kpiHistory: [
      { month: '2025-11', mrrBRL: 9700, cacBRL: 2800, ltvBRL: 8200, churnPct: 9.5, closeRatePct: 16, roi: 1.4, ticketBRL: 4850, deliveryDays: 14 },
      { month: '2025-12', mrrBRL: 11500, cacBRL: 2600, ltvBRL: 9800, churnPct: 8.8, closeRatePct: 18, roi: 1.7, ticketBRL: 4900, deliveryDays: 12 },
      { month: '2026-01', mrrBRL: 13800, cacBRL: 2450, ltvBRL: 11200, churnPct: 8.0, closeRatePct: 19, roi: 1.9, ticketBRL: 4950, deliveryDays: 11 },
      { month: '2026-02', mrrBRL: 15600, cacBRL: 2300, ltvBRL: 12600, churnPct: 7.2, closeRatePct: 21, roi: 2.2, ticketBRL: 5050, deliveryDays: 10 },
      { month: '2026-03', mrrBRL: 17900, cacBRL: 2150, ltvBRL: 14100, churnPct: 6.5, closeRatePct: 23, roi: 2.6, ticketBRL: 5100, deliveryDays: 9 },
      { month: '2026-04', mrrBRL: 20300, cacBRL: 2050, ltvBRL: 15800, churnPct: 5.8, closeRatePct: 24, roi: 2.9, ticketBRL: 5180, deliveryDays: 8 },
    ],
  };

  // ----------------------------------------------------------------
  // Merge defaults + dados gerados
  // ----------------------------------------------------------------
  const CONTENT = Object.assign({}, DEFAULT_CONTENT, window.NEXUS_CONTENT || {});
  if (!CONTENT.playbook || !CONTENT.playbook.length) CONTENT.playbook = DEFAULT_CONTENT.playbook;
  if (!CONTENT.modules) CONTENT.modules = DEFAULT_CONTENT.modules;
  const NICHES = (window.NEXUS_NICHES && window.NEXUS_NICHES.length) ? window.NEXUS_NICHES : DEFAULT_NICHES;
  const PROMPTS = Object.assign({}, DEFAULT_PROMPTS, window.NEXUS_PROMPTS || {});
  if (!PROMPTS.demo) PROMPTS.demo = DEFAULT_PROMPTS.demo;
  const SEED = window.NEXUS_SEED || DEFAULT_SEED;

  // ---- Central de Aprendizado (enriquecida por js/data/academy-*.js) ----
  const DEFAULT_ACADEMY = {
    basico: { intro: { titulo: 'Modo Básico', subtitulo: 'Entenda tudo do zero, sem enrolação', basico: 'Aprenda os conceitos do jeito mais simples possível.', pratico: 'Siga o passo a passo até o primeiro cliente pagante.' }, modulos: [], glossario: [] },
    pratico: {
      titulo: 'Caminho para o Primeiro Cliente', subtitulo: 'Siga as etapas e consiga seu primeiro cliente pagante.', meta: { faturamentoMetaBRL: 5000 },
      etapas: [
        { id: 'nicho', n: 1, titulo: 'Escolher o nicho', oque: 'Escolha um mercado específico para atuar.', porque: 'Quanto mais específico, mais fácil vender.', resultado: 'Você sabe para quem vai vender.', acoes: ['Abra Nicho & Oferta', 'Escolha 1 nicho'], dica: 'Não tente atender todo mundo.', module: 'studio', cta: 'Abrir Nicho & Oferta' },
        { id: 'dor', n: 2, titulo: 'Entender onde o nicho perde dinheiro', oque: 'Descubra o problema que custa dinheiro ao cliente.', porque: 'Ninguém compra marketing — compram solução para uma dor financeira.', resultado: 'Você sabe a dor que vai resolver.', acoes: ['Veja "onde perde dinheiro" no nicho'], dica: 'Pergunte: onde esse nicho perde dinheiro hoje?', module: 'studio', cta: 'Ver a dor do nicho' },
        { id: 'oferta', n: 3, titulo: 'Criar a oferta', oque: 'Monte uma oferta que promete resultado, não serviço.', porque: 'Oferta clara fecha mais e cobra mais caro.', resultado: 'Você tem uma proposta pronta.', acoes: ['Gere a oferta com IA', 'Defina o preço'], dica: 'Venda "mais pacientes", não "tráfego pago".', module: 'studio', cta: 'Criar oferta' },
        { id: 'prospeccao', n: 4, titulo: 'Prospecção: 100 contatos/dia', oque: 'Encontre empresas com o problema que você resolve.', porque: 'Sem prospecção não há clientes.', resultado: 'Lista de leads para abordar.', acoes: ['Adicione leads', 'Bata a meta diária'], dica: 'Volume primeiro. Caixa primeiro.', module: 'prospecting', cta: 'Ir para Prospecção' },
        { id: 'abordagem', n: 5, titulo: 'Abordagem com script', oque: 'Mande a primeira mensagem com um diagnóstico.', porque: 'Abordagem consultiva gera reuniões.', resultado: 'Conversas abertas com leads.', acoes: ['Gere diagnóstico e mensagem por IA'], dica: 'Mostre a dor antes de oferecer.', module: 'prospecting', cta: 'Gerar abordagem' },
        { id: 'reuniao', n: 6, titulo: 'Reunião de diagnóstico', oque: 'Converse, entenda o problema e apresente a solução.', porque: 'É na reunião que o interesse vira proposta.', resultado: 'Proposta apresentada.', acoes: ['Mova o lead para Reunião no funil'], dica: 'Escute mais, fale menos.', module: 'pipeline', cta: 'Abrir o Funil' },
        { id: 'fechamento', n: 7, titulo: 'Fechar o cliente', oque: 'Transforme interesse em contrato.', porque: 'Sem fechamento, não há faturamento.', resultado: 'Contrato assinado.', acoes: ['Mova o negócio para Fechamento/Ganho'], dica: 'Trate objeção com calma e prova.', module: 'pipeline', cta: 'Fechar negócio' },
        { id: 'entrega', n: 8, titulo: 'Entregar resultado', oque: 'Entregue crescimento e mantenha o cliente pagando.', porque: 'Cliente satisfeito = recorrência = MRR.', resultado: 'Cliente ativo e renovando.', acoes: ['Atribua um Account Manager', 'Acompanhe a saúde'], dica: 'Mostre o retorno em R$ todo mês.', module: 'clients', cta: 'Ir para Clientes' },
      ],
      scripts: { abordagem: [], fechamento: [], objecoes: [], reuniao: { roteiro: [], checklist: [] } },
    },
    assist: { glossAnswers: [], tooltips: {}, nudges: ['Você ainda não prospectou hoje. Sem prospecção não existe faturamento.', 'Seu próximo cliente depende da ação que você ainda não tomou.'] },
  };
  const ACADEMY = {
    basico: window.NEXUS_ACADEMY_BASICO || DEFAULT_ACADEMY.basico,
    pratico: window.NEXUS_ACADEMY_PRATICO || DEFAULT_ACADEMY.pratico,
    assist: window.NEXUS_ACADEMY_ASSIST || DEFAULT_ACADEMY.assist,
  };
  if (!ACADEMY.pratico.etapas || !ACADEMY.pratico.etapas.length) ACADEMY.pratico.etapas = DEFAULT_ACADEMY.pratico.etapas;
  // mapa de glossário por sigla (p/ tooltips e consultas)
  const GLOSS = {};
  ((ACADEMY.basico && ACADEMY.basico.glossario) || []).forEach((g) => { if (g && g.sigla) GLOSS[g.sigla.toUpperCase()] = g; });
  function gloss(sigla) { return GLOSS[String(sigla || '').toUpperCase()] || null; }

  const STORE_KEY = 'nexus.os.v1';

  // ----------------------------------------------------------------
  // STORE
  // ----------------------------------------------------------------
  let state;
  const subs = [];
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return JSON.parse(JSON.stringify(SEED));
  }
  function persist() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {}
  }
  const store = {
    get() { return state; },
    update(fn) { fn(state); persist(); render(); subs.forEach((s) => s()); },
    save() { persist(); render(); subs.forEach((s) => s()); },
    subscribe(fn) { subs.push(fn); },
    reset() { state = JSON.parse(JSON.stringify(SEED)); persist(); render(); },
  };

  // ----------------------------------------------------------------
  // KPIs
  // ----------------------------------------------------------------
  function computeKpis(s) {
    const hist = s.kpiHistory || [];
    const last = hist[hist.length - 1] || {};
    const prev = hist[hist.length - 2] || last;
    const clients = s.clients || [];
    const deals = s.deals || [];
    const mrr = clients.reduce((a, c) => a + (c.mrrBRL || 0), 0);
    const active = clients.length || 1;
    const ticket = mrr / active;
    const spend = s.agency.monthlySpendBRL || 0;
    // KPIs canônicos vêm do histórico mensal curado (coerentes com as tendências);
    // MRR e ticket são calculados ao vivo a partir da carteira de clientes.
    const closeRate = last.closeRatePct != null ? last.closeRatePct : 0;
    const cac = last.cacBRL || 0;
    const ltv = last.ltvBRL || (ticket * 12 * 0.6);
    const roi = last.roi != null ? last.roi : (spend ? (mrr - spend) / spend : 0);
    const pipelineValue = deals.filter((d) => !['ganho', 'perdido'].includes(d.stage)).reduce((a, d) => a + (d.valueBRL || 0), 0);
    const forecast = deals.filter((d) => !['ganho', 'perdido'].includes(d.stage)).reduce((a, d) => a + (d.valueBRL || 0) * (d.probability || 0) / 100, 0);
    const tr = (cur, old, key) => {
      const o = old[key], c = cur[key];
      if (o == null || c == null || o === 0) return { dir: 'flat', pct: 0 };
      const pct = ((c - o) / Math.abs(o)) * 100;
      return { dir: pct > 0.5 ? 'up' : pct < -0.5 ? 'down' : 'flat', pct: Math.abs(pct) };
    };
    return {
      mrr, arr: mrr * 12, ticket, active,
      cac, ltv, ltvCac: cac ? ltv / cac : 0,
      churnPct: last.churnPct || 0, closeRatePct: closeRate, roi,
      deliveryDays: last.deliveryDays || 0,
      pipelineValue, forecast,
      history: hist,
      trends: {
        mrr: tr(last, prev, 'mrrBRL'), cac: tr(last, prev, 'cacBRL'),
        ltv: tr(last, prev, 'ltvBRL'), churn: tr(last, prev, 'churnPct'),
        close: tr(last, prev, 'closeRatePct'), roi: tr(last, prev, 'roi'),
        ticket: tr(last, prev, 'ticketBRL'), delivery: tr(last, prev, 'deliveryDays'),
      },
    };
  }

  function currentNiche() {
    return NICHES.find((n) => n.id === state.nicheId) || NICHES[0];
  }

  // Progresso "Caminho para o primeiro cliente" (orientado a faturamento)
  function firstClientProgress(s, k) {
    const g = (s.goals && s.goals.today) || {};
    const t = (s.goals && s.goals.targets) || {};
    const metaBRL = (ACADEMY.pratico.meta && ACADEMY.pratico.meta.faturamentoMetaBRL) || 5000;
    const clientes = (s.clients || []).length;
    const taxaResposta = g.abordagens ? (g.respostas || 0) / g.abordagens * 100 : 0;
    return {
      conquered: clientes > 0, metaBRL, faturamento: k.mrr, clientes,
      abordagensHoje: g.abordagens || 0, metaAbordagens: t.abordagens || 100,
      reunioesHoje: g.reunioes || 0, taxaResposta,
      pct: Math.min(100, Math.round((k.mrr / metaBRL) * 100)),
    };
  }

  // Recomenda a PRÓXIMA AÇÃO que mais aproxima do dinheiro (comportamento de mentor)
  function recommendNextAction(s, k) {
    const offer = s.offer || {};
    const g = (s.goals && s.goals.today) || {}; const t = (s.goals && s.goals.targets) || {};
    if (!offer.name || !(offer.deliverables || []).length) return { title: 'Crie sua oferta fechada', why: 'Sem oferta clara você não tem o que vender.', module: 'studio', cta: 'Criar oferta' };
    const fechamento = (s.deals || []).filter((d) => d.stage === 'fechamento');
    if (fechamento.length) return { title: `Feche o negócio: ${fechamento[0].name}`, why: 'Está a um passo de virar faturamento.', module: 'pipeline', cta: 'Abrir o Funil' };
    const churn = (s.clients || []).filter((c) => c.churnRisk === 'alto');
    if (churn.length) return { title: `Salve do churn: ${churn[0].name}`, why: 'Perder um cliente custa mais do que conquistar um novo.', module: 'clients', cta: 'Ver cliente' };
    const reuniao = (s.deals || []).filter((d) => d.stage === 'reuniao');
    if (reuniao.length) return { title: `Conduza a reunião: ${reuniao[0].name}`, why: 'É na reunião que o interesse vira proposta.', module: 'pipeline', cta: 'Abrir o Funil' };
    if ((s.leads || []).length < 5) return { title: 'Adicione leads à sua base', why: 'Sem leads não há quem abordar.', module: 'prospecting', cta: 'Ir para Prospecção' };
    if ((g.abordagens || 0) < (t.abordagens || 100)) return { title: `Faça suas abordagens de hoje (${g.abordagens || 0}/${t.abordagens || 100})`, why: 'Volume de prospecção é o que gera reuniões e clientes.', module: 'prospecting', cta: 'Prospectar agora' };
    return { title: 'Continue prospectando e nutrindo o funil', why: 'Consistência diária é o que constrói faturamento previsível.', module: 'prospecting', cta: 'Prospecção' };
  }

  // ----------------------------------------------------------------
  // UI HELPERS
  // ----------------------------------------------------------------
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const brl = (n) => 'R$ ' + Math.round(n || 0).toLocaleString('pt-BR');
  const brlK = (n) => { n = n || 0; return n >= 1000 ? 'R$ ' + (n / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + 'k' : 'R$ ' + Math.round(n); };
  const num = (n) => Math.round(n || 0).toLocaleString('pt-BR');
  const pct = (n, d = 1) => (n || 0).toFixed(d).replace('.', ',') + '%';
  const initials = (name) => String(name || '?').trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const avClass = (str) => 'c' + (Math.abs([...String(str)].reduce((a, c) => a + c.charCodeAt(0), 0)) % 4 + 1);
  const icon = (id) => `<svg><use href="#${id}"/></svg>`;

  function trendBadge(t, positivePolarity = true) {
    if (!t || t.dir === 'flat') return `<span class="trend flat">—</span>`;
    const good = positivePolarity ? t.dir === 'up' : t.dir === 'down';
    const colorCls = good ? 'up' : 'down'; // cor = bom(verde)/ruim(vermelho)
    const flip = t.dir === 'down' ? ' style="transform:scaleY(-1)"' : ''; // seta = direção real
    return `<span class="trend ${colorCls}"><svg${flip}><use href="#i-up"/></svg>${t.pct.toFixed(0)}%</span>`;
  }

  function kpiTile({ label, ico, val, sub, trend, positive = true, tip }) {
    const help = tip ? ` <span class="help" data-tip="${esc(tip)}" tabindex="0">?</span>` : '';
    return `<div class="kpi fade-in">
      <div class="k-label">${ico ? icon(ico) : ''}${esc(label)}${help}</div>
      <div class="k-val">${val}${sub ? `<small>${sub}</small>` : ''}</div>
      <div class="k-foot">${trend ? trendBadge(trend, positive) + '<span class="muted" style="font-size:11px">vs. mês anterior</span>' : ''}</div>
    </div>`;
  }

  function spark(values, color = 'var(--violet)') {
    if (!values || values.length < 2) return '';
    const w = 240, h = 38, min = Math.min(...values), max = Math.max(...values), span = max - min || 1;
    const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - ((v - min) / span) * (h - 6) - 3}`);
    const area = `0,${h} ${pts.join(' ')} ${w},${h}`;
    const id = 'sg' + Math.random().toString(36).slice(2, 7);
    return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
      <polygon points="${area}" fill="url(#${id})"/>
      <polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function bar(p, cls = '') { return `<div class="bar ${cls}"><span style="width:${Math.max(0, Math.min(100, p))}%"></span></div>`; }
  function ring(p, color = 'var(--violet)') { return `<div class="ring" style="--p:${p};--c:${color}"><b>${Math.round(p)}</b></div>`; }

  // ---- Modal ----
  const overlay = () => document.getElementById('overlay');
  const modalBody = () => document.getElementById('modalBody');
  function modal(html, wide) {
    document.getElementById('modal').classList.toggle('wide', !!wide);
    modalBody().innerHTML = html;
    overlay().classList.add('open');
    overlay().setAttribute('aria-hidden', 'false');
    const f = modalBody().querySelector('input,textarea,select');
    if (f) setTimeout(() => f.focus(), 60);
  }
  function closeModal() { overlay().classList.remove('open'); overlay().setAttribute('aria-hidden', 'true'); }

  // ---- Toast ----
  let toastT;
  function toast(msg, ico = 'i-check') {
    const t = document.getElementById('toast');
    t.innerHTML = icon(ico) + '<span>' + esc(msg) + '</span>';
    t.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove('show'), 2600);
  }

  // ---- Leitura em voz (Web Speech API, pt-BR) ----
  let _ttsBtn = null;
  function _ttsReset(btn) {
    if (!btn) return;
    btn.classList.remove('playing');
    const lbl = btn.querySelector('.tts-lbl'); if (lbl) lbl.textContent = 'Ouvir';
    const u = btn.querySelector('use'); if (u) u.setAttribute('href', '#i-sound');
  }
  function stopSpeak() {
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (_) {}
    _ttsReset(_ttsBtn); _ttsBtn = null;
  }
  function speak(text, btn) {
    if (!('speechSynthesis' in window)) { toast('Seu navegador não suporta leitura em voz', 'i-x'); return; }
    const synth = window.speechSynthesis;
    const wasThis = (_ttsBtn === btn) && synth.speaking;
    stopSpeak();
    if (wasThis || !text) return; // clicar de novo no mesmo = parar
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'pt-BR'; u.rate = 1; u.pitch = 1;
    const voices = synth.getVoices() || [];
    const v = voices.find((x) => /pt[-_]?BR/i.test(x.lang)) || voices.find((x) => /^pt/i.test(x.lang));
    if (v) u.voice = v;
    _ttsBtn = btn;
    if (btn) { btn.classList.add('playing'); const lbl = btn.querySelector('.tts-lbl'); if (lbl) lbl.textContent = 'Parar'; const us = btn.querySelector('use'); if (us) us.setAttribute('href', '#i-stop'); }
    u.onend = () => { if (_ttsBtn === btn) { _ttsReset(btn); _ttsBtn = null; } };
    u.onerror = () => { _ttsReset(btn); };
    synth.speak(u);
  }

  const md = (t) => esc(t)
    .replace(/^#{1,6}\s+(.+)$/gm, '<strong>$1</strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[-*]\s+/gm, '• ');
  const ui = { esc, brl, brlK, num, pct, initials, avClass, icon, md, gloss, kpiTile, trendBadge, spark, bar, ring, modal, closeModal, toast, modalForm };
  function modalForm(values) {
    // lê inputs/selects/textarea do modal por name -> objeto
    const out = {};
    modalBody().querySelectorAll('[name]').forEach((el) => { out[el.name] = el.value.trim(); });
    return out;
  }

  // ----------------------------------------------------------------
  // MODULES + ROUTER
  // ----------------------------------------------------------------
  const modules = {};
  let activeId = 'dashboard';
  function registerModule(m) { modules[m.id] = m; }

  function ctx() {
    const kpis = computeKpis(state);
    return {
      state, store, ui, ai: NEXUS.ai, content: CONTENT, niches: NICHES, prompts: PROMPTS, academy: ACADEMY,
      kpis, niche: currentNiche(), offer: state.offer,
      firstClient: firstClientProgress(state, kpis), nextAction: recommendNextAction(state, kpis),
      go: setActive, refresh: render,
    };
  }

  function buildNav() {
    const order = ['dashboard', 'studio', 'prospecting', 'pipeline', 'clients', 'team', 'academy', 'playbook'];
    const nav = document.getElementById('nav');
    const tips = (ACADEMY.assist && ACADEMY.assist.tooltips) || {};
    let html = '<div class="nav-sep">Operação</div>';
    order.forEach((id) => {
      const m = modules[id];
      if (!m) return;
      if (id === 'academy') html += '<div class="nav-sep">Aprender & Estratégia</div>';
      const meta = (CONTENT.modules && CONTENT.modules[id]) || {};
      const tip = tips['nav-' + id] ? ` data-tip="${esc(tips['nav-' + id])}"` : '';
      html += `<button class="nav-item ${id === activeId ? 'active' : ''}" data-nav="${id}"${tip}>
        ${icon(m.icon)}<span>${esc(meta.title || m.label)}</span>${m.phase ? `<span class="ni-phase">${m.phase}</span>` : ''}
      </button>`;
    });
    nav.innerHTML = html;
  }

  function updateChrome() {
    const k = computeKpis(state);
    const meta = (CONTENT.modules && CONTENT.modules[activeId]) || {};
    document.getElementById('pageTitle').textContent = meta.title || (modules[activeId] && modules[activeId].label) || '';
    document.getElementById('pageSub').textContent = meta.subtitle || '';
    document.getElementById('brandName').childNodes[0].nodeValue = (CONTENT.brand && CONTENT.brand.name) || 'NEXUS';
    const sub = (CONTENT.brand && CONTENT.brand.subtitle) || '';
    document.getElementById('brandTag').textContent = (sub && sub.length <= 16) ? sub : 'Agency OS';
    document.getElementById('agencyChipText').textContent = state.agency.niche || 'Agência';
    // ai pill
    const pill = document.getElementById('aiPill');
    const txt = document.getElementById('aiPillText');
    if (NEXUS.ai && NEXUS.ai.live) { pill.classList.add('live'); txt.textContent = 'IA ativa'; }
    else { pill.classList.remove('live'); txt.textContent = 'Modo demo'; }
    document.querySelectorAll('.nav-item').forEach((n) => n.classList.toggle('active', n.dataset.nav === activeId));
  }

  function render() {
    const m = modules[activeId];
    if (!m) return;
    const c = ctx();
    const view = document.getElementById('view');
    view.innerHTML = `<div class="view-pad">${m.render(c)}</div>`;
    view.scrollTop = 0;
    if (m.mount) m.mount(view, c);
    updateChrome();
  }

  function setActive(id) {
    if (!modules[id]) return;
    stopSpeak();
    activeId = id;
    document.getElementById('sidebar').classList.remove('open');
    buildNav();
    render();
  }

  // ----------------------------------------------------------------
  // EVENT DELEGATION
  // ----------------------------------------------------------------
  const globalActions = {
    toggleCopilot() { NEXUS.copilot.toggle(); },
    openSettings() { openSettings(); },
    resetData() { if (confirm('Restaurar todos os dados de demonstração?')) { store.reset(); ui.toast('Dados restaurados'); closeModal(); } },
    closeModal() { closeModal(); },
    go(c, el) { setActive(el.dataset.go); },
  };

  function onClick(e) {
    const navEl = e.target.closest('[data-nav]');
    if (navEl) { setActive(navEl.dataset.nav); return; }
    const chip = e.target.closest('[data-chip]');
    if (chip) { NEXUS.copilot.ask(chip.dataset.chip); return; }
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const name = el.dataset.action;
    const m = modules[activeId];
    const c = ctx();
    if (m && m.actions && m.actions[name]) { e.preventDefault(); m.actions[name](c, el, e); return; }
    if (globalActions[name]) { e.preventDefault(); globalActions[name](c, el, e); }
  }

  function openSettings() {
    const s = state;
    modal(`<div class="modal-head">
        <div><h2>Configurações da agência</h2><p>Posicionamento, gasto e dados</p></div>
        <button class="icon-btn" data-action="closeModal">${icon('i-x')}</button>
      </div>
      <div class="field"><label>Nome da agência</label><input class="input" name="name" value="${esc(s.agency.name)}"></div>
      <div class="field"><label>Nicho vertical</label><input class="input" name="niche" value="${esc(s.agency.niche)}"></div>
      <div class="row-2">
        <div class="field"><label>Gasto mensal (marketing+vendas)</label><input class="input" name="spend" type="number" value="${s.agency.monthlySpendBRL}"></div>
        <div class="field"><label>Fundador(a)</label><input class="input" name="founder" value="${esc(s.agency.founder)}"></div>
      </div>
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-primary" data-action="saveSettings">${icon('i-check')} Salvar</button>
        <button class="btn btn-ghost" data-action="resetData">Restaurar demo</button>
      </div>`);
  }
  globalActions.saveSettings = function () {
    const v = modalForm();
    store.update((s) => {
      s.agency.name = v.name || s.agency.name;
      s.agency.niche = v.niche || s.agency.niche;
      s.agency.monthlySpendBRL = Number(v.spend) || s.agency.monthlySpendBRL;
      s.agency.founder = v.founder || s.agency.founder;
    });
    closeModal(); ui.toast('Configurações salvas');
  };

  // ----------------------------------------------------------------
  // TOOLTIPS (ajuda contextual em todo o app)
  // ----------------------------------------------------------------
  function initTooltips() {
    const tip = document.getElementById('tip');
    if (!tip) return;
    let hideT;
    const show = (el) => {
      const txt = el.getAttribute('data-tip'); if (!txt) return;
      tip.textContent = txt; tip.classList.add('show');
      const r = el.getBoundingClientRect(), tr = tip.getBoundingClientRect();
      let left = r.left + r.width / 2 - tr.width / 2;
      let top = r.top - tr.height - 10;
      if (top < 8) top = r.bottom + 10;
      left = Math.max(8, Math.min(left, window.innerWidth - tr.width - 8));
      tip.style.left = left + 'px'; tip.style.top = top + 'px';
    };
    const hide = () => tip.classList.remove('show');
    document.addEventListener('mouseover', (e) => { const el = e.target.closest('[data-tip]'); if (el) { clearTimeout(hideT); show(el); } });
    document.addEventListener('mouseout', (e) => { if (e.target.closest('[data-tip]')) hideT = setTimeout(hide, 80); });
    document.addEventListener('focusin', (e) => { const el = e.target.closest('[data-tip]'); if (el) show(el); });
    document.addEventListener('focusout', hide);
    // No celular (sem hover): tocar no "?" abre a explicação em modal
    document.addEventListener('click', (e) => {
      const h = e.target.closest('.help[data-tip]');
      if (h) { e.stopPropagation(); modal(`<div class="modal-head"><div><h2>O que significa</h2></div><button class="icon-btn" data-action="closeModal">${icon('i-x')}</button></div><p style="font-size:14px;line-height:1.65">${esc(h.getAttribute('data-tip'))}</p><button class="btn btn-primary" style="margin-top:14px" data-action="closeModal">${icon('i-check')} Entendi</button>`); }
    });
  }

  // ----------------------------------------------------------------
  // ONBOARDING
  // ----------------------------------------------------------------
  function showOnboarding() {
    modal(`<div class="onb">
      <div class="onb-badge">${icon('i-spark')}</div>
      <h2>Bem-vindo ao NEXUS</h2>
      <p>Este app te ajuda a <b>conseguir clientes pagantes</b>: você escolhe um nicho, cria uma oferta e prospecta — com a IA te guiando em cada passo. Funciona mesmo que você <b>nunca</b> tenha trabalhado com marketing ou vendas.</p>
      <p class="muted" style="font-size:13px;margin-top:4px">Como você quer começar?</p>
      <div class="onb-opts">
        <button class="onb-card" data-action="onbStart" data-mode="pratico">
          <div class="oc-ic">${icon('i-target')}</div>
          <strong>Quero clientes agora</strong>
          <span>Modo Prático: o passo a passo até o 1º cliente pagante.</span>
        </button>
        <button class="onb-card" data-action="onbStart" data-mode="basico">
          <div class="oc-ic">${icon('i-doc')}</div>
          <strong>Sou iniciante total</strong>
          <span>Modo Básico: entenda os conceitos do zero, sem termos difíceis.</span>
        </button>
      </div>
      <button class="btn btn-ghost btn-sm" data-action="onbSkip" style="width:100%;justify-content:center">Pular e explorar sozinho</button>
    </div>`);
  }
  globalActions.onbStart = function (c, el) {
    const mode = el.dataset.mode;
    store.update((s) => { s.learn = s.learn || {}; s.learn.onboardingDone = true; s.learn.mode = mode; });
    closeModal(); setActive('academy');
  };
  globalActions.onbSkip = function () {
    store.update((s) => { s.learn = s.learn || {}; s.learn.onboardingDone = true; });
    closeModal(); ui.toast('Você pode rever o tour a qualquer momento em Aprender');
  };
  globalActions.showTour = function () { showOnboarding(); };

  // ----------------------------------------------------------------
  // BOOT
  // ----------------------------------------------------------------
  function boot() {
    state = loadState();
    // migração leve: garante chaves
    ['leads', 'deals', 'clients', 'team', 'kpiHistory'].forEach((k) => { if (!Array.isArray(state[k])) state[k] = SEED[k] || []; });
    if (!state.goals) state.goals = SEED.goals;
    if (!state.offer) state.offer = SEED.offer;
    if (!state.nicheId) state.nicheId = SEED.nicheId || (NICHES[0] && NICHES[0].id);
    if (!state.learn) state.learn = { conceptsRead: [], stepsDone: [], onboardingDone: false, mode: 'pratico' };
    if (!Array.isArray(state.learn.conceptsRead)) state.learn.conceptsRead = [];
    if (!Array.isArray(state.learn.stepsDone)) state.learn.stepsDone = [];

    buildNav();
    initTooltips();
    document.addEventListener('click', onClick);
    document.getElementById('overlay').addEventListener('click', (e) => { if (e.target.id === 'overlay') closeModal(); });
    document.getElementById('hamburger').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    if (NEXUS.ai && NEXUS.ai.init) NEXUS.ai.init();
    if (NEXUS.copilot && NEXUS.copilot.init) NEXUS.copilot.init();
    setActive('dashboard');
    if (!state.learn.onboardingDone) setTimeout(showOnboarding, 400);
  }

  // ----------------------------------------------------------------
  window.NEXUS = {
    boot, registerModule, store, ui, computeKpis, currentNiche,
    content: CONTENT, niches: NICHES, prompts: PROMPTS, academy: ACADEMY, gloss, speak, stopSpeak,
    get ctx() { return ctx(); },
    setActive,
    ai: { live: false, generate: async () => '', init() {} }, // substituído por ai.js
    copilot: { toggle() {}, ask() {}, init() {} }, // substituído por copilot.js
  };
})();
