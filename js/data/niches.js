/*
 * NEXUS — Agency OS
 * Base de nichos para a Agência Vertical de IA.
 * Foco analítico: "Onde esse negócio está perdendo dinheiro?" -> transformar em oferta produtizada.
 * Valores em R$ (BRL), realistas para o mercado brasileiro.
 *
 * Ícones disponíveis: i-face | i-syringe | i-scissors | i-home | i-target | i-chart
 *
 * Critérios (score 1-10):
 *   dorCara      -> a dor custa caro o suficiente para justificar high-ticket?
 *   ticketAlto   -> o cliente tem capacidade/cultura de pagar caro?
 *   mercadoGrande-> existe volume de empresas para prospecção em escala?
 *   recorrencia  -> o problema se repete todo mês (sustenta MRR)?
 */

window.NEXUS_NICHES = [
  {
    id: "clinicas-estetica",
    name: "Clínicas de Estética",
    icon: "i-face",
    summary:
      "Clínicas de estética e beleza (harmonização facial, botox, preenchimento, estética corporal, depilação a laser, limpeza de pele). Mercado emocional, de alta margem e altíssima dependência de agenda cheia. Operação quase sempre travada no WhatsApp manual da recepcionista, com leads de tráfego pago caro entrando e morrendo sem follow-up.",
    howTheyMakeMoney:
      "A clínica vive de duas alavancas: ticket por procedimento e taxa de ocupação da agenda dos profissionais (biomédicos, dentistas-harmonizadores, esteticistas). Cada cadeira/sala vazia é prejuízo fixo (aluguel, salário, energia). O lucro real vem de subir o cliente da 'porta de entrada' barata (limpeza de pele, day spa) para procedimentos premium recorrentes (protocolos de harmonização, botox semestral, pacotes de manutenção). Quem domina a recompra e o upsell para protocolos de R$ 3.000+ multiplica o faturamento sem aumentar o custo de aquisição. A maioria, porém, opera reativa: só fatura quem liga, e perde quem não respondeu na hora.",
    revenueStreams: [
      { name: "Harmonização facial (full face)", avgTicketBRL: 4500, marginPct: 70 },
      { name: "Toxina botulínica (botox)", avgTicketBRL: 1200, marginPct: 65 },
      { name: "Preenchimento labial / sulcos", avgTicketBRL: 1800, marginPct: 68 },
      { name: "Pacote de estética corporal (10 sessões)", avgTicketBRL: 2400, marginPct: 75 },
      { name: "Depilação a laser (pacote)", avgTicketBRL: 1500, marginPct: 80 },
      { name: "Limpeza de pele / skincare avulso", avgTicketBRL: 220, marginPct: 60 }
    ],
    pains: [
      "Investem R$ 3 a 8 mil/mês em tráfego, geram dezenas de leads, mas a recepcionista não consegue responder todos a tempo e o lead esfria em poucas horas.",
      "No-show alto: 20% a 35% dos agendamentos de avaliação simplesmente não aparecem, queimando horários nobres dos profissionais.",
      "Dependência total de uma ou duas recepcionistas; quando elas faltam ou estão em atendimento presencial, o WhatsApp acumula e ninguém responde.",
      "Não sabem qual canal/anúncio trouxe qual cliente — gastam em tráfego no escuro, sem CAC nem ROI por campanha.",
      "Base enorme de clientes antigos (botox que venceu, pacote que acabou) parada no celular, sem nenhuma régua de reativação."
    ],
    bottlenecks: [
      "Atendimento 100% manual no WhatsApp da recepção: cada lead exige resposta humana, e o gargalo é o tempo da pessoa.",
      "Agenda controlada em planilha, papel ou app que não conversa com o tráfego — sem confirmação automática nem lista de espera.",
      "Profissional caro (biomédico/dentista) é o recurso limitante: se a agenda dele tem buraco, a clínica perde margem que não volta.",
      "Decisões da dona feitas por 'feeling', sem dashboard de leads, conversão por etapa, no-show e faturamento por procedimento."
    ],
    whereTheyLoseMoney: [
      "Leads pagos sem follow-up: 40% a 60% dos leads de anúncio nunca recebem 2ª, 3ª e 4ª tentativa de contato e morrem como dinheiro jogado fora.",
      "Agenda ociosa: cada janela vazia do profissional premium custa de R$ 800 a R$ 2.000 de margem perdida, todo dia.",
      "No-show sem confirmação automática: 1 em cada 4 avaliações não comparece e o horário não é reocupado.",
      "Zero reativação da base: milhares de clientes antigos (botox vencido, pacote concluído) que voltariam com uma mensagem certa na hora certa.",
      "Sem upsell estruturado: cliente entra pela limpeza de pele de R$ 220 e nunca é guiado ao protocolo de harmonização de R$ 4.500."
    ],
    benchmarks: [
      { metric: "Taxa de no-show em avaliações", value: "20% a 35%", note: "Cai para 8-12% com confirmação e lembrete automatizados." },
      { metric: "Tempo médio de 1ª resposta ao lead", value: "2h a 12h (manual)", note: "Lead respondido em <5 min converte até 4x mais." },
      { metric: "Conversão lead -> avaliação agendada", value: "15% a 25%", note: "Pode chegar a 40% com follow-up estruturado e qualificação." },
      { metric: "Ticket médio mensal por cliente ativo", value: "R$ 350 a R$ 900", note: "Sobe com pacotes e protocolos de recorrência." }
    ],
    criteria: {
      dorCara: {
        score: 9,
        why: "Perder leads pagos e ter agenda ociosa custa milhares de reais por mês de forma visível e mensurável — a dor financeira é óbvia e doída."
      },
      ticketAlto: {
        score: 8,
        why: "Procedimentos de R$ 1.200 a R$ 4.500 com margem de 65-75%; um único cliente recuperado paga a mensalidade da agência."
      },
      mercadoGrande: {
        score: 9,
        why: "Dezenas de milhares de clínicas e consultórios de estética no Brasil, com novas abrindo todo mês — volume infinito para prospecção outbound."
      },
      recorrencia: {
        score: 8,
        why: "Botox vence a cada 4-6 meses, pacotes acabam, novos leads chegam todo dia — o problema se reinstala mensalmente e sustenta MRR."
      }
    },
    suggestedOffer: {
      name: "Máquina de Agenda Cheia para Clínicas de Estética",
      promise: "Encha a agenda com avaliações qualificadas e reduza o no-show para menos de 10% em 60 dias — ou trabalhamos de graça até atingir.",
      deliverables: [
        "Agente de IA no WhatsApp que responde, qualifica e agenda 24/7 em menos de 1 minuto, integrado à agenda da clínica.",
        "Régua de follow-up automática com 5 a 7 toques para todo lead que não respondeu (recupera o lead pago que morria).",
        "Confirmação e lembrete inteligentes de avaliação que derrubam o no-show e reocupam horários cancelados via lista de espera.",
        "Campanha de reativação da base de clientes antigos (botox vencido, pacote concluído) com oferta segmentada.",
        "Roteiro de upsell guiado: subir o cliente da porta de entrada barata para protocolos premium de R$ 3.000+.",
        "Dashboard de KPIs em tempo real: CAC por anúncio, conversão por etapa, no-show, agenda ocupada e faturamento por procedimento."
      ],
      priceBRL: 4500,
      positioning:
        "Setup de R$ 4.500 a R$ 6.000 + fee mensal de R$ 3.000 a R$ 5.000 (ou modelo híbrido fee + % do faturamento recuperado). Vendido como centro de lucro, não custo: 'a agência se paga com o primeiro cliente que sua recepção deixaria escapar'."
    }
  },

  {
    id: "dentistas",
    name: "Dentistas / Odontologia",
    icon: "i-syringe",
    summary:
      "Consultórios e clínicas odontológicas focados em tratamentos de alto valor: implantes, ortodontia (alinhadores e aparelho), lentes de contato dental, harmonização orofacial e próteses. Margem alta, ticket altíssimo, mas decisão de compra longa e cheia de objeção de preço — o que torna o follow-up e o financiamento da venda decisivos.",
    howTheyMakeMoney:
      "A odontologia premium fatura com poucos tratamentos de altíssimo valor por mês, não com volume. Um plano de implantes ou de lentes de contato dental pode passar de R$ 15.000 a R$ 40.000. O dentista lucra quando converte o paciente da 'consulta de avaliação' (muitas vezes gratuita ou barata) para o plano de tratamento completo, idealmente parcelado/financiado. O problema é que a jornada é longa: o paciente pesquisa, pede orçamento, some, compara preço. Quem não nutre esse paciente entre a avaliação e o fechamento perde o caso para o concorrente que ligou de volta. Recorrência vem de manutenção ortodôntica, retornos de canal e novos casos da mesma família indicados.",
    revenueStreams: [
      { name: "Implante dentário (por unidade)", avgTicketBRL: 3500, marginPct: 65 },
      { name: "Lentes de contato dental (arcada)", avgTicketBRL: 18000, marginPct: 70 },
      { name: "Ortodontia / alinhadores invisíveis", avgTicketBRL: 9000, marginPct: 60 },
      { name: "Prótese / reabilitação oral completa", avgTicketBRL: 22000, marginPct: 62 },
      { name: "Harmonização orofacial", avgTicketBRL: 2500, marginPct: 68 },
      { name: "Clareamento e estética dental", avgTicketBRL: 900, marginPct: 72 }
    ],
    pains: [
      "Paciente faz a avaliação, recebe o orçamento alto, diz 'vou pensar' e nunca mais é contatado — o caso de R$ 15 mil esfria por falta de follow-up.",
      "Tráfego pago atrai curioso de preço barato, não o paciente disposto a investir em implante ou lente; lead desqualificado lota a agenda da secretária.",
      "Secretária preparada para atender no balcão, não para vender e contornar objeção de preço por WhatsApp.",
      "Cadeira e equipe especializada paradas entre um caso grande e outro — o custo fixo do consultório não para.",
      "Pacientes que abandonaram o tratamento no meio (parou de pagar, sumiu) sem nenhuma régua de retomada."
    ],
    bottlenecks: [
      "Conversão do orçamento depende do dentista pessoalmente; ninguém faz o follow-up comercial estruturado entre avaliação e fechamento.",
      "Sem qualificação de lead na entrada: a secretária gasta tempo com curioso e demora a chegar no paciente com real intenção e capacidade de pagar.",
      "Ausência de oferta de parcelamento/financiamento clara no momento da objeção de preço derruba a venda do tratamento caro.",
      "Agenda do especialista é o gargalo: poucos horários nobres, mal aproveitados quando há no-show ou buraco entre casos."
    ],
    whereTheyLoseMoney: [
      "Orçamentos altos sem follow-up: o caso de R$ 10-30 mil que 'foi pensar' e foi fechar no concorrente que ligou de volta.",
      "Agenda ociosa do especialista entre tratamentos grandes — custo fixo rodando sem produção.",
      "No-show em avaliações de alto valor: cada falta é um caso premium que pode nunca mais voltar.",
      "Sem reativação de tratamentos abandonados: pacientes que pararam no meio e fechariam o restante com um contato certo.",
      "Lead desqualificado consumindo a agenda da secretária enquanto o paciente com R$ 20 mil para gastar espera resposta."
    ],
    benchmarks: [
      { metric: "Ticket médio de tratamento fechado", value: "R$ 3.000 a R$ 25.000", note: "Casos de reabilitação e lentes puxam a média para cima." },
      { metric: "Conversão avaliação -> tratamento", value: "20% a 40%", note: "Sobe muito com follow-up comercial e parcelamento na objeção." },
      { metric: "Taxa de no-show em avaliação", value: "15% a 30%", note: "Cai com confirmação automática e pré-qualificação do lead." },
      { metric: "Ciclo de decisão (lead -> fechamento)", value: "7 a 45 dias", note: "Janela longa onde a maioria perde o paciente por silêncio." }
    ],
    criteria: {
      dorCara: {
        score: 9,
        why: "Perder um único caso de implante ou lente de R$ 15-30 mil por falta de follow-up é uma dor altíssima e fácil de quantificar."
      },
      ticketAlto: {
        score: 9,
        why: "Tratamentos de R$ 9 mil a R$ 40 mil com margens de 60-70%; o dentista tem capital e cultura de investir em aquisição."
      },
      mercadoGrande: {
        score: 9,
        why: "Brasil é um dos maiores mercados de odontologia do mundo, com centenas de milhares de profissionais e clínicas — prospecção quase ilimitada."
      },
      recorrencia: {
        score: 7,
        why: "Novos casos entram todo mês e manutenção/ortodontia geram recorrência, mas o tratamento em si tende a ser one-time por paciente."
      }
    },
    suggestedOffer: {
      name: "Pipeline de Casos Premium para Odontologia",
      promise: "Mais casos de alto valor fechados por mês transformando orçamentos parados em tratamentos pagos — meta de +30% em fechamentos de implante/lente em 90 dias.",
      deliverables: [
        "Agente de IA que pré-qualifica o lead no WhatsApp e separa o curioso de preço do paciente com real intenção e capacidade de pagar.",
        "Régua de follow-up comercial pós-orçamento (toques em D+1, D+3, D+7, D+15) para resgatar o caso que 'foi pensar'.",
        "Roteiro de contorno de objeção de preço com oferta de parcelamento/financiamento apresentada no momento certo.",
        "Confirmação automatizada de avaliações de alto valor para derrubar no-show e proteger horários do especialista.",
        "Campanha de retomada de tratamentos abandonados (pacientes que pararam no meio).",
        "Dashboard de funil: leads qualificados, orçamentos enviados, taxa de fechamento e valor médio por caso."
      ],
      priceBRL: 5500,
      positioning:
        "Setup de R$ 5.000 a R$ 7.000 + fee mensal de R$ 3.500 a R$ 6.000. Argumento: 'um único caso de implante ou lente recuperado paga meses da agência — o resto é lucro líquido que hoje vaza pelo silêncio do follow-up'."
    }
  },

  {
    id: "barbearias-premium",
    name: "Barbearias Premium",
    icon: "i-scissors",
    summary:
      "Barbearias de alto padrão e grooming clubs masculinos (corte, barba, day clube, produtos próprios, clube de assinatura). Modelo de alta frequência e fidelização: o cliente bom volta a cada 15-20 dias. O ouro está na recompra previsível e na assinatura — mas a maioria opera só com agenda no Instagram e perde o cliente que esqueceu de voltar.",
    howTheyMakeMoney:
      "Barbearia premium fatura por cadeira ocupada e por frequência de retorno. O cliente fiel de barba e cabelo gera de R$ 80 a R$ 200 por visita, a cada 2-3 semanas, o que dá um LTV alto e previsível. As alavancas de lucro são: manter as cadeiras cheias (ocupação dos barbeiros), aumentar a frequência de retorno, vender produtos de grooming de alta margem (pomadas, óleos, kits) e, principalmente, converter o cliente avulso em assinante mensal (clube de barba/corte ilimitado) — que transforma faturamento volátil em MRR. Quem só vive de agenda espontânea do Instagram tem agenda em montanha-russa e perde o cliente que simplesmente esqueceu de marcar de novo.",
    revenueStreams: [
      { name: "Combo corte + barba", avgTicketBRL: 110, marginPct: 70 },
      { name: "Clube de assinatura mensal", avgTicketBRL: 199, marginPct: 75 },
      { name: "Day club / pacote premium (corte, barba, drink)", avgTicketBRL: 180, marginPct: 65 },
      { name: "Produtos de grooming (pomada, óleo, kit)", avgTicketBRL: 90, marginPct: 55 },
      { name: "Coloração / platinado masculino", avgTicketBRL: 250, marginPct: 60 },
      { name: "Pacote noivo / evento", avgTicketBRL: 400, marginPct: 68 }
    ],
    pains: [
      "Agenda em montanha-russa: semana cheia, semana vazia, sem previsibilidade nem controle de ocupação por barbeiro.",
      "Cliente fiel some por 2-3 meses só porque esqueceu de marcar — e ninguém o reativa com um lembrete na hora certa.",
      "Agendamento todo no direct do Instagram e WhatsApp, dependente do dono ou de um atendente, com furos e remarcações no caos.",
      "Cadeiras ociosas em horários e dias fracos (manhãs, segundas) que poderiam ser preenchidos com oferta dirigida.",
      "Clube de assinatura inexistente ou com poucos membros — faturamento 100% transacional e imprevisível mês a mês."
    ],
    bottlenecks: [
      "Atendimento e agenda centralizados no dono/atendente via Instagram, sem automação — cresce e trava.",
      "Sem controle de frequência de retorno por cliente; ninguém sabe quem está 'atrasado' para voltar.",
      "Ociosidade de horários fracos sem mecanismo de oferta relâmpago para preencher cadeira vazia.",
      "Venda de produto e de assinatura depende de o barbeiro lembrar de oferecer na cadeira — sem sistema, não acontece."
    ],
    whereTheyLoseMoney: [
      "Sem reativação por frequência: o cliente de R$ 110 a cada 20 dias que sumiu há 60 dias e não recebeu nenhum 'sua barba já pede manutenção'.",
      "Cadeiras ociosas em horários fracos sem oferta para preencher — barbeiro parado é margem perdida.",
      "Clube de assinatura subexplorado: deixam de converter o cliente recorrente em MRR previsível de R$ 199/mês.",
      "Agenda furada e no-show sem confirmação automática, gerando buracos que ninguém reocupa.",
      "Zero upsell de produtos de grooming de 55% de margem que sairiam fácil com um roteiro no atendimento."
    ],
    benchmarks: [
      { metric: "Frequência ideal de retorno", value: "a cada 15-21 dias", note: "Cliente acima de 30 dias já está em risco de churn." },
      { metric: "Ticket médio por visita", value: "R$ 70 a R$ 180", note: "Sobe com combo, produto e day club." },
      { metric: "Ocupação de cadeira em horário nobre", value: "70% a 90%", note: "Horários fracos ficam abaixo de 40% sem ação." },
      { metric: "% de clientes em assinatura", value: "5% a 20%", note: "Cada ponto a mais vira MRR previsível." }
    ],
    criteria: {
      dorCara: {
        score: 6,
        why: "A dor por cliente é menor (ticket de R$ 110), mas somada (dezenas de clientes sumidos + cadeiras ociosas) vira um rombo relevante no mês."
      },
      ticketAlto: {
        score: 6,
        why: "Ticket por visita é médio, porém o LTV anual de um fiel passa de R$ 2.000 e a assinatura cria base recorrente que justifica investimento."
      },
      mercadoGrande: {
        score: 8,
        why: "Boom de barbearias premium e franquias no Brasil; mercado pulverizado e em expansão, ótimo para prospecção em volume."
      },
      recorrencia: {
        score: 9,
        why: "Recompra a cada 2-3 semanas e modelo de assinatura tornam a recorrência altíssima — terreno perfeito para MRR e KPIs de retenção."
      }
    },
    suggestedOffer: {
      name: "Cadeira Cheia & Clube — Sistema de Recorrência para Barbearias",
      promise: "Aumente a ocupação das cadeiras e a recompra dos clientes fiéis, dobrando os membros do clube de assinatura em 90 dias.",
      deliverables: [
        "Agendamento automatizado no WhatsApp/Instagram com confirmação e lembrete, eliminando furos e no-show.",
        "Régua de reativação por frequência: dispara 'sua barba/cabelo já pede manutenção' no intervalo ideal de cada cliente.",
        "Ofertas relâmpago para horários e dias fracos, preenchendo cadeiras ociosas automaticamente.",
        "Estruturação e venda do clube de assinatura mensal (script + automação de cobrança recorrente) para criar MRR.",
        "Roteiro de upsell de produtos de grooming e combos premium no atendimento.",
        "Dashboard de ocupação por barbeiro, frequência de retorno, churn da base e MRR do clube."
      ],
      priceBRL: 2500,
      positioning:
        "Setup de R$ 2.000 a R$ 3.500 + fee mensal de R$ 1.800 a R$ 3.000. Posicionado como 'fábrica de previsibilidade': transforma agenda em montanha-russa e clientes que somem em MRR e cadeiras sempre cheias."
    }
  },

  {
    id: "imobiliarias",
    name: "Imobiliárias / Corretores",
    icon: "i-home",
    summary:
      "Imobiliárias e corretores de alto padrão (venda e locação de imóveis residenciais e comerciais, lançamentos de incorporadoras). Ticket de comissão altíssimo, mas operação afogada em leads de portais (ZAP, VivaReal, OLX) que chegam em volume e morrem sem qualificação nem follow-up. O dinheiro vaza na velocidade de resposta e no abandono do lead frio.",
    howTheyMakeMoney:
      "Imobiliária e corretor vivem de comissão sobre o valor do negócio: tipicamente 5-6% na venda e o equivalente a um aluguel na locação. Um único imóvel de R$ 700 mil vendido gera de R$ 30 a R$ 42 mil de comissão. O jogo é de volume de leads no topo e qualificação cirúrgica: a maioria dos leads de portal é curioso, mas dentro deles há o comprador real com cash e urgência. Quem responde primeiro e qualifica rápido fica com o negócio. O lucro também vem de nutrir o lead frio (quem vai comprar em 3-6 meses) e de recuperar quem visitou e não fechou. A operação típica desperdiça caixa porque o corretor não dá conta de responder e seguir 100% dos leads que o marketing paga caro para gerar.",
    revenueStreams: [
      { name: "Comissão de venda residencial (5-6%)", avgTicketBRL: 30000, marginPct: 85 },
      { name: "Comissão de venda alto padrão / comercial", avgTicketBRL: 75000, marginPct: 85 },
      { name: "Comissão de locação (1º aluguel)", avgTicketBRL: 3000, marginPct: 80 },
      { name: "Repasse de lançamento de incorporadora", avgTicketBRL: 18000, marginPct: 88 },
      { name: "Taxa de administração de locação (mensal)", avgTicketBRL: 250, marginPct: 70 },
      { name: "Assessoria / intermediação documental", avgTicketBRL: 1500, marginPct: 75 }
    ],
    pains: [
      "Centenas de leads dos portais por mês, mas o corretor responde só uma fração e demora horas — o lead some no concorrente que respondeu primeiro.",
      "Impossível distinguir o curioso do comprador real com cash; o corretor perde tempo com quem nunca vai fechar.",
      "Visitas marcadas que viram no-show ou clientes que visitam, gostam e somem sem follow-up.",
      "Lead que compraria em 3-6 meses (não agora) é descartado em vez de nutrido até o momento da compra.",
      "Comissão alta investida em portais e tráfego sem nenhuma medição de qual fonte traz o lead que realmente fecha."
    ],
    bottlenecks: [
      "Velocidade de resposta: o lead de portal exige contato em minutos, mas depende do corretor estar livre — gargalo humano fatal.",
      "Qualificação manual e inconsistente; sem critério de cash, prazo e perfil, o pipeline entope de lead frio.",
      "Follow-up de médio prazo (3-6 meses) inexistente — o lead que ainda vai comprar é abandonado.",
      "Sem CRM real com etapas de funil; negócios ficam na cabeça do corretor e somem quando ele troca de imobiliária."
    ],
    whereTheyLoseMoney: [
      "Leads de portal sem resposta rápida: o comprador de um imóvel de R$ 700 mil fecha com quem ligou em 5 minutos, não em 5 horas.",
      "Lead frio descartado em vez de nutrido: o comprador de 3-6 meses que vira comissão de R$ 30 mil para o concorrente.",
      "Visitas perdidas e sem follow-up: cliente que viu o imóvel, gostou e sumiu por falta de um único toque comercial.",
      "Pipeline sem CRM: negócios esquecidos, etapas sem cobrança e comissões que evaporam por desorganização.",
      "Sem mensuração de fonte: dinheiro queimado em portais e tráfego que não medem o ROI por canal."
    ],
    benchmarks: [
      { metric: "Tempo de resposta que vence o lead", value: "< 5 minutos", note: "Resposta tardia derruba a chance de fechamento drasticamente." },
      { metric: "Conversão lead de portal -> visita", value: "3% a 10%", note: "Sobe com qualificação e resposta imediata." },
      { metric: "Conversão visita -> proposta/fechamento", value: "8% a 20%", note: "Follow-up pós-visita é o que mais move o número." },
      { metric: "Ciclo médio de venda", value: "30 a 120 dias", note: "Janela longa que exige nutrição contínua do lead." }
    ],
    criteria: {
      dorCara: {
        score: 9,
        why: "Cada negócio perdido vale dezenas de milhares de reais em comissão; perder leads pagos em escala é uma sangria evidente."
      },
      ticketAlto: {
        score: 8,
        why: "Comissões de R$ 30 mil a R$ 75 mil por negócio; imobiliárias têm margem e disposição para investir em geração e gestão de leads."
      },
      mercadoGrande: {
        score: 9,
        why: "Milhares de imobiliárias e corretores autônomos no Brasil, todos competindo pelos mesmos leads de portal — demanda enorme por velocidade e qualificação."
      },
      recorrencia: {
        score: 7,
        why: "Fluxo constante de novos leads e a administração de locações geram recorrência mensal, ainda que o fechamento de venda seja pontual por cliente."
      }
    },
    suggestedOffer: {
      name: "Resposta Relâmpago — Máquina de Qualificação Imobiliária",
      promise: "Responda e qualifique 100% dos leads em menos de 5 minutos e converta mais visitas em propostas — sem perder negócio para o concorrente mais rápido.",
      deliverables: [
        "Agente de IA que responde TODO lead de portal/tráfego em segundos, 24/7, e qualifica por cash, prazo, região e perfil.",
        "Distribuição inteligente do lead quente para o corretor certo, já com o briefing pronto para a abordagem.",
        "Régua de nutrição para o lead de médio prazo (3-6 meses) até o momento exato da decisão de compra.",
        "Follow-up automatizado pós-visita para resgatar quem gostou do imóvel e sumiu.",
        "CRM com funil por etapa (lead -> visita -> proposta -> fechamento) e cobrança automática de tarefas do corretor.",
        "Dashboard de ROI por fonte (ZAP, VivaReal, tráfego), tempo de resposta, taxa de visita e comissão projetada no pipeline."
      ],
      priceBRL: 6000,
      positioning:
        "Setup de R$ 5.000 a R$ 8.000 + fee mensal de R$ 4.000 a R$ 8.000 (ou fee + bônus por negócio fechado via sistema). Argumento matador: 'uma comissão recuperada paga a agência por meio ano — você está pagando em leads perdidos muito mais do que custa parar de perdê-los'."
    }
  },

  {
    id: "academias-studios",
    name: "Academias / Studios",
    icon: "i-target",
    summary:
      "Academias, box de crossfit, studios de pilates, funcional e estúdios boutique. Negócio de mensalidade recorrente (MRR puro) cujo lucro é totalmente decidido por duas variáveis: quantos novos alunos entram e quantos cancelam. Vivem com leads de tráfego que não viram matrícula e churn silencioso que corrói a base todo mês.",
    howTheyMakeMoney:
      "Academia e studio são MRR na veia: o faturamento é a soma das mensalidades ativas. O lucro cresce de três formas — captar mais matrículas (converter visitante/aula experimental em aluno), reduzir o churn (segurar quem ia cancelar) e aumentar o ticket (planos anuais, personal, avaliação física, suplementação, modalidades premium). O custo de aquisição de um aluno só se paga ao longo de meses, então cada cancelamento precoce destrói a economia da operação. A maioria foca obsessivamente em trazer lead novo e ignora o vazamento: alunos somem da grade, param de pagar, não fazem aula experimental e ninguém age. É um balde furado que enche e esvazia ao mesmo tempo.",
    revenueStreams: [
      { name: "Mensalidade plano mensal", avgTicketBRL: 150, marginPct: 60 },
      { name: "Plano anual / semestral (à vista)", avgTicketBRL: 1400, marginPct: 65 },
      { name: "Personal training / aula particular", avgTicketBRL: 600, marginPct: 70 },
      { name: "Studio boutique (pilates/funcional premium)", avgTicketBRL: 350, marginPct: 62 },
      { name: "Avaliação física / acompanhamento", avgTicketBRL: 120, marginPct: 75 },
      { name: "Suplementos e produtos", avgTicketBRL: 130, marginPct: 45 }
    ],
    pains: [
      "Leads de tráfego pedem aula experimental, recebem resposta lenta e nunca aparecem ou nunca matriculam.",
      "Churn silencioso: aluno some da grade por 2-3 semanas, ninguém percebe, e quando o cartão recusa já cancelou de vez.",
      "Recepção sobrecarregada faz captação e retenção 'no susto', sem processo nem follow-up de quem fez experimental e não fechou.",
      "Ofensa ao caixa em janeiro/setembro (alta procura) por não converter o pico de leads, e ociosidade no resto do ano.",
      "Base de ex-alunos enorme e parada, sem nenhuma campanha de retorno ('volta que a gente tem uma condição pra você')."
    ],
    bottlenecks: [
      "Conversão de aula experimental depende de a recepção lembrar de seguir o visitante — sem sistema, a maioria escapa.",
      "Não há monitoramento de frequência para detectar o aluno em risco antes de ele cancelar.",
      "Cobrança recorrente com falha de cartão sem régua de recuperação derruba MRR por motivo puramente operacional.",
      "Sem segmentação da base ativa x inativa para campanhas de upsell (anual, personal) e reativação."
    ],
    whereTheyLoseMoney: [
      "Churn não combatido: cada aluno que cancela sem tentativa de retenção é MRR que some e CAC que nunca se pagou.",
      "Aula experimental sem follow-up: o visitante quente que faria matrícula e sai sem um único contato de retorno.",
      "Falha de cobrança recorrente sem recuperação: aluno que ainda treina mas 'cancela' porque o cartão recusou e ninguém avisou.",
      "Base de ex-alunos parada: centenas de pessoas que voltariam com uma campanha de reativação e oferta certa.",
      "Sem upsell de plano anual e personal: deixam o aluno no mensal de menor margem em vez de subir o ticket e travar a permanência."
    ],
    benchmarks: [
      { metric: "Churn mensal", value: "5% a 12%", note: "Acima de 8% a base não cresce mesmo captando bem." },
      { metric: "Conversão experimental -> matrícula", value: "20% a 45%", note: "Sobe muito com follow-up rápido e oferta no calor da hora." },
      { metric: "% de falhas de cobrança recuperadas", value: "10% a 60%", note: "Régua de recuperação transforma falha técnica em MRR salvo." },
      { metric: "LTV médio do aluno", value: "R$ 800 a R$ 2.500", note: "Plano anual e personal elevam fortemente o LTV." }
    ],
    criteria: {
      dorCara: {
        score: 7,
        why: "Churn e CAC desperdiçado custam caro de forma contínua; cada ponto de churn reduzido em uma base de centenas de alunos vale milhares por mês."
      },
      ticketAlto: {
        score: 5,
        why: "Ticket mensal é baixo (R$ 150), mas o volume da base e o LTV recorrente compensam; o investimento se justifica pela escala de MRR."
      },
      mercadoGrande: {
        score: 8,
        why: "Dezenas de milhares de academias, boxes e studios no Brasil, com forte expansão do segmento boutique — amplo terreno de prospecção."
      },
      recorrencia: {
        score: 10,
        why: "Modelo de mensalidade é recorrência pura; o problema (captação + churn) se renova todo mês e é o caso ideal para gestão contínua e MRR."
      }
    },
    suggestedOffer: {
      name: "Anti-Churn & Matrícula Cheia para Academias e Studios",
      promise: "Reduza o churn e aumente as matrículas a partir do tráfego e da base — meta de derrubar o churn em 30% e converter mais experimentais em 90 dias.",
      deliverables: [
        "Agente de IA que responde o lead na hora, agenda a aula experimental e confirma presença para derrubar o no-show.",
        "Follow-up automático pós-experimental com oferta para fechar a matrícula no calor do interesse.",
        "Monitoramento de frequência com alerta de aluno em risco e régua de retenção antes do cancelamento.",
        "Recuperação automática de falhas de cobrança recorrente (cartão recusado) para salvar MRR operacional.",
        "Campanha de reativação da base de ex-alunos com oferta de retorno segmentada.",
        "Dashboard de MRR, churn, conversão de experimental, alunos em risco e LTV por plano."
      ],
      priceBRL: 3000,
      positioning:
        "Setup de R$ 2.500 a R$ 4.000 + fee mensal de R$ 2.000 a R$ 4.000 (alinhado a MRR salvo/gerado). Vendido como 'tampa do balde furado': captar mais não adianta se a base vaza — entregamos crescimento líquido de alunos, não só leads."
    }
  },

  {
    id: "advogados",
    name: "Advogados / Escritórios",
    icon: "i-chart",
    summary:
      "Escritórios de advocacia e advogados autônomos em áreas de alta demanda (trabalhista, previdenciário, família/divórcio, tributário, empresarial). Causas de honorário relevante, mas operação travada pela ética da OAB (sem publicidade agressiva), por leads que chegam sem qualificação jurídica e por um follow-up lento que perde o cliente para o escritório que respondeu primeiro.",
    howTheyMakeMoney:
      "Advogado fatura de duas formas: honorários contratuais (entrada + parcelas pelo serviço) e honorários de êxito (% do ganho na causa). Uma causa previdenciária, trabalhista ou um divórcio litigioso pode render de R$ 3 mil a dezenas de milhares de reais entre contrato e êxito. O lucro depende de captar o caso certo (cliente com causa viável e disposto a contratar) e de fechar rápido antes que ele procure outro escritório. A advocacia empresarial agrega recorrência via contratos de assessoria mensal (consultivo). O grande desperdício do setor: leads que chegam por indicação e tráfego (dentro dos limites éticos da OAB) ficam sem triagem, sem resposta rápida e sem follow-up — e o caso de honorário alto fecha com o concorrente mais ágil.",
    revenueStreams: [
      { name: "Causa trabalhista (contrato + êxito)", avgTicketBRL: 6000, marginPct: 80 },
      { name: "Causa previdenciária (aposentadoria/benefício)", avgTicketBRL: 5000, marginPct: 80 },
      { name: "Divórcio / família (litigioso)", avgTicketBRL: 8000, marginPct: 78 },
      { name: "Assessoria empresarial (consultivo mensal)", avgTicketBRL: 3500, marginPct: 75 },
      { name: "Planejamento / contencioso tributário", avgTicketBRL: 15000, marginPct: 72 },
      { name: "Consulta jurídica avulsa", avgTicketBRL: 400, marginPct: 85 }
    ],
    pains: [
      "Leads chegam por indicação e tráfego, mas o escritório demora horas/dias para responder e o cliente fecha com quem respondeu antes.",
      "Sem triagem jurídica na entrada: o advogado gasta tempo com caso inviável ou sem disposição de pagar, em vez de focar no caso bom.",
      "Receio com a ética da OAB trava qualquer ação de marketing — o escritório fica refém de indicação espontânea e não escala captação.",
      "Cliente consulta, recebe a proposta de honorários e some; ninguém faz follow-up para fechar o contrato.",
      "Base de antigos clientes (causa encerrada) parada, sem reativação para novos serviços ou indicações estimuladas."
    ],
    bottlenecks: [
      "Resposta inicial dependente do advogado, que está em audiência/peticionando — o lead esfria no gargalo humano.",
      "Triagem manual e sem critério jurídico claro entope a agenda com casos inviáveis e atrasa o caso de honorário alto.",
      "Ausência de processo comercial pós-consulta: nenhuma cadência para converter a proposta de honorários em contrato assinado.",
      "Captação 100% dependente de indicação, sem máquina de leads compatível com os limites éticos da advocacia."
    ],
    whereTheyLoseMoney: [
      "Leads sem resposta rápida: o caso de honorário alto fechando com o escritório que retornou em minutos, não em dias.",
      "Proposta de honorários sem follow-up: o cliente que consultou, recebeu o valor e sumiu por falta de uma cadência de fechamento.",
      "Tempo do advogado caro gasto triando caso inviável em vez de atuar no caso bom e fechar contrato.",
      "Base de ex-clientes parada: pessoas e empresas que voltariam para novos serviços ou indicariam com um único contato.",
      "Captação refém de indicação: deixam de explorar canais eticamente permitidos e perdem volume de casos viáveis todo mês."
    ],
    benchmarks: [
      { metric: "Tempo de resposta ao lead jurídico", value: "minutos (ideal) vs. horas (real)", note: "Resposta rápida é decisiva num setor de baixa diferenciação percebida." },
      { metric: "Conversão consulta -> contrato fechado", value: "20% a 45%", note: "Sobe muito com follow-up estruturado pós-proposta." },
      { metric: "Ticket de honorários (contrato + êxito)", value: "R$ 3.000 a R$ 30.000+", note: "Tributário e empresarial puxam fortemente para cima." },
      { metric: "% de captação por indicação", value: "60% a 90%", note: "Dependência alta revela oportunidade de canais eticamente permitidos." }
    ],
    criteria: {
      dorCara: {
        score: 8,
        why: "Perder um caso de honorário relevante por lentidão de resposta ou ausência de follow-up é uma dor financeira clara e recorrente."
      },
      ticketAlto: {
        score: 8,
        why: "Honorários de R$ 5 mil a R$ 30 mil+ por caso e contratos consultivos mensais; escritórios têm capacidade de investir em captação organizada."
      },
      mercadoGrande: {
        score: 9,
        why: "Brasil tem mais de um milhão de advogados inscritos na OAB e centenas de milhares de escritórios — o maior mercado jurídico do mundo em volume."
      },
      recorrencia: {
        score: 7,
        why: "Fluxo contínuo de novos casos e contratos de assessoria empresarial mensal sustentam recorrência, ainda que cada causa seja pontual."
      }
    },
    suggestedOffer: {
      name: "Captação Ética & Fechamento para Escritórios de Advocacia",
      promise: "Mais contratos fechados a partir dos leads que você já recebe, com triagem jurídica e follow-up — dentro dos limites éticos da OAB.",
      deliverables: [
        "Agente de IA que faz a triagem inicial do lead (área, viabilidade, urgência) e responde em segundos, respeitando os limites éticos da advocacia.",
        "Agendamento automático da consulta com o advogado certo, já com o caso pré-organizado.",
        "Régua de follow-up pós-consulta para converter a proposta de honorários em contrato assinado.",
        "Estruturação de canais de captação eticamente permitidos para reduzir a dependência exclusiva de indicação.",
        "Campanha de reativação e estímulo a indicações junto à base de ex-clientes.",
        "Dashboard de funil: leads por área, taxa de triagem, conversão consulta -> contrato e honorários projetados no pipeline."
      ],
      priceBRL: 5000,
      positioning:
        "Setup de R$ 4.500 a R$ 7.000 + fee mensal de R$ 3.500 a R$ 6.000. Posicionamento: 'organização comercial dentro da ética' — não promete causa, promete que nenhum caso viável se perca por lentidão ou falta de follow-up. Um contrato fechado paga a agência."
    }
  }
];
