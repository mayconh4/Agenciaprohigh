// NEXUS — Agency OS · Central de Aprendizado (assistente flutuante)
// Conteúdo do "copiloto" de ajuda para QUALQUER leigo (zero conhecimento em
// marketing, vendas, tráfego, automação ou tecnologia).
// Tudo orientado a RESULTADO FINANCEIRO e EXECUÇÃO.
//
// Regras de escrita aplicadas aqui:
//   - Português do Brasil, simples, como explicar para um amigo.
//   - Toda sigla é explicada. Nada de jargão solto.
//   - Exemplo REAL com R$ sempre que envolver número.
//   - Frases curtas. Concreto. Sempre responde: "como ganho dinheiro com isso?".
//   - Nichos citados: clínica de estética, barbearia, dentista, restaurante,
//     imobiliária, academia.
//
// Vanilla JS, sem build. Exposto em window.NEXUS_ACADEMY_ASSIST.

(function () {
  "use strict";

  // ==========================================================================
  // glossAnswers — Respostas do assistente flutuante (modo demo, sem API).
  // match  = palavras-chave (minúsculas, sem acento de preferência) que
  //          disparam a resposta. A busca deve ser feita por "contém".
  // answer = resposta MUITO simples, autossuficiente, com exemplo em R$
  //          quando fizer sentido.
  // ==========================================================================
  var glossAnswers = [
    {
      match: ["cpa", "custo por aquisicao", "custo por aquisição"],
      answer:
        "CPA quer dizer 'Custo Por Aquisição'. É quanto você gastou em anúncio para conseguir UMA venda ou UM cliente novo de verdade. " +
        "Exemplo: você gastou R$ 500 em anúncio e fechou 5 clientes novos. R$ 500 ÷ 5 = R$ 100. Seu CPA é R$ 100. " +
        "Por que importa pro seu bolso: se cada cliente novo te paga R$ 1.000 e custa R$ 100 pra conseguir, você lucra. Se custar R$ 1.200 pra conseguir, você está perdendo dinheiro. CPA é o freio e o acelerador do seu negócio."
    },
    {
      match: ["cac", "custo de aquisicao de cliente", "custo de aquisição de cliente"],
      answer:
        "CAC quer dizer 'Custo de Aquisição de Cliente'. É TUDO que você gastou pra conseguir um cliente: anúncio + ferramentas + comissão de quem vendeu. " +
        "Exemplo: no mês você gastou R$ 3.000 no total (anúncio + WhatsApp pago + comissão) e fechou 6 clientes. R$ 3.000 ÷ 6 = R$ 500 de CAC. " +
        "Diferença pro CPA: o CPA olha só o anúncio; o CAC olha o custo inteiro. Regra de ouro: quem aguenta pagar um CAC mais alto que o concorrente domina o nicho, porque compra os melhores clientes antes dele."
    },
    {
      match: ["ctr", "clique", "taxa de clique"],
      answer:
        "CTR quer dizer 'Click-Through Rate', ou seja, 'taxa de cliques'. De cada 100 pessoas que VIRAM seu anúncio, quantas CLICARAM nele. " +
        "Exemplo: 1.000 pessoas viram o anúncio da barbearia e 30 clicaram. 30 ÷ 1.000 = 3% de CTR. " +
        "Pra que serve: CTR baixo (tipo 0,5%) quase sempre quer dizer que a imagem ou a frase do anúncio estão fracas. Você troca a foto e a chamada, o CTR sobe, você paga menos por clique e sobra mais dinheiro pra fechar venda."
    },
    {
      match: ["cpc", "custo por clique"],
      answer:
        "CPC quer dizer 'Custo Por Clique'. É quanto você paga cada vez que alguém clica no seu anúncio. " +
        "Exemplo: você gastou R$ 200 e teve 100 cliques. R$ 200 ÷ 100 = R$ 2 por clique. " +
        "Como isso vira dinheiro: se a cada 20 cliques (R$ 40) você fecha 1 cliente que paga R$ 1.000, o clique é barato e vale muito a pena. Clique caro só é problema se ninguém compra depois de clicar."
    },
    {
      match: ["cpm", "mil impress", "custo por mil"],
      answer:
        "CPM quer dizer 'Custo Por Mil impressões'. É quanto você paga pra seu anúncio APARECER 1.000 vezes na tela das pessoas (aparecer, não clicar). " +
        "Exemplo: você pagou R$ 30 e o anúncio apareceu 1.000 vezes. CPM = R$ 30. " +
        "Pra que serve: é a medida de quanto custa ser VISTO. Bom pra quando o objetivo é a clínica ou o restaurante ficar conhecido na cidade. Mas lembre: aparecer não paga conta. O que paga é o cliente que clica e fecha."
    },
    {
      match: ["roi", "retorno", "retorno sobre investimento"],
      answer:
        "ROI quer dizer 'Retorno Sobre o Investimento'. Mostra quanto você LUCROU pra cada real investido. " +
        "Exemplo: você investiu R$ 1.000 e isso gerou R$ 4.000 de venda. Lucro = R$ 4.000 - R$ 1.000 = R$ 3.000. ROI = R$ 3.000 ÷ R$ 1.000 = 3, ou seja, 300%. Cada R$ 1 virou R$ 3 de lucro. " +
        "É o número mais importante pra mostrar pro seu cliente: 'coloquei R$ 1.000 e te devolvi R$ 4.000'. Com isso ninguém discute seu preço."
    },
    {
      match: ["roas"],
      answer:
        "ROAS quer dizer 'Return On Ad Spend', ou seja, 'retorno sobre o gasto com anúncio'. Quase igual ao ROI, mas olha SÓ o anúncio. " +
        "Exemplo: gastou R$ 1.000 em anúncio e isso trouxe R$ 5.000 em vendas. R$ 5.000 ÷ R$ 1.000 = ROAS de 5 (ou '5x'). Cada R$ 1 de anúncio voltou como R$ 5 em venda. " +
        "Regra prática: ROAS abaixo de 2x geralmente é prejuízo (depois de pagar produto, equipe e impostos). Acima de 3x costuma ser saúde. Use o ROAS pra decidir se aumenta ou corta o anúncio."
    },
    {
      match: ["ltv", "valor do cliente", "lifetime"],
      answer:
        "LTV quer dizer 'Lifetime Value', ou seja, 'o quanto um cliente gasta com você do começo ao fim'. Não é só a primeira compra. É a soma de tudo. " +
        "Exemplo: na barbearia o cliente gasta R$ 50 por corte e vem 2 vezes por mês durante 2 anos. R$ 50 x 2 x 24 meses = R$ 2.400 de LTV. " +
        "Por que isso te deixa rico: se um cliente vale R$ 2.400 ao longo do tempo, você pode gastar tranquilo R$ 100 ou R$ 200 pra conquistá-lo. Quem só olha a primeira compra (R$ 50) acha que anúncio é caro e perde a corrida."
    },
    {
      match: ["churn", "cancelamento", "perda de cliente"],
      answer:
        "Churn é a 'taxa de cancelamento': quantos clientes pararam de pagar você num mês. " +
        "Exemplo: você começou o mês com 20 clientes pagando mensalidade e 2 cancelaram. 2 ÷ 20 = 10% de churn. " +
        "Por que dói no bolso: cliente que cancela é dinheiro que vaza pelo ralo. É muito mais barato manter um cliente feliz do que conquistar um novo. Churn alto quer dizer que você está enchendo um balde furado — antes de buscar cliente novo, tampe o furo."
    },
    {
      match: ["conversao", "conversão", "converter", "taxa de conversao"],
      answer:
        "Conversão é quando alguém faz a ação que você queria: pedir orçamento, agendar, comprar. 'Taxa de conversão' é de cada 100 pessoas, quantas fizeram isso. " +
        "Exemplo: 100 pessoas mandaram mensagem pro dentista e 25 marcaram avaliação. 25 ÷ 100 = 25% de conversão. " +
        "Como vira dinheiro: se você dobra a conversão de 25% pra 50% SEM gastar mais em anúncio, você dobra o faturamento de graça. Por isso melhorar o atendimento e a resposta no WhatsApp vale ouro."
    },
    {
      match: ["lead", "contato", "interessado"],
      answer:
        "Lead é uma pessoa interessada que deixou o contato dela (nome, WhatsApp, e-mail). Ainda NÃO é cliente — é um possível cliente. " +
        "Exemplo: 40 pessoas viram o anúncio da academia e 12 mandaram 'quero saber do plano'. Você tem 12 leads. " +
        "Por que importa: lead é matéria-prima de venda. Sem lead, não tem com quem falar, e sem conversa não tem venda. Encha o topo de leads e cuide rápido de cada um — lead esquecido por 1 dia já esfria."
    },
    {
      match: ["fechamento", "closing", "fechar", "fechar venda"],
      answer:
        "Fechamento é o momento de transformar um interessado em cliente que PAGA. É pedir o 'sim' e combinar como ele paga. " +
        "Exemplo: você conversou com 10 clínicas, mostrou o plano e 3 disseram sim. Você fechou 3. Sua taxa de fechamento foi de 30%. " +
        "Dica que dá dinheiro: a maioria perde venda por não PEDIR o fechamento. No fim da conversa, diga claro: 'fechamos? consigo começar segunda, o investimento é R$ 2.500/mês'. Quem não pede, não fecha."
    },
    {
      match: ["pipeline", "funil de vendas", "funil"],
      answer:
        "Pipeline (ou 'funil de vendas') é o caminho que cada cliente percorre até comprar: 1) primeiro contato, 2) conversa/reunião, 3) proposta enviada, 4) fechado. " +
        "Exemplo: hoje você tem 8 clínicas no primeiro contato, 4 em reunião marcada, 2 com proposta na mão e 1 já fechada. Isso é seu pipeline. " +
        "Por que usar: o pipeline mostra ONDE o dinheiro está travado. Se tem muita gente parada na 'proposta enviada', o problema é o fechamento. Você vê o gargalo e age, em vez de adivinhar."
    },
    {
      match: ["remarketing", "reimpactar", "perseguir anuncio"],
      answer:
        "Remarketing é mostrar seu anúncio DE NOVO pra quem já te viu mas não comprou. Aquele tênis que te 'persegue' na internet é remarketing. " +
        "Exemplo: 200 pessoas visitaram a página do restaurante e não reservaram. Você mostra de novo um anúncio só pra essas 200 com 'volte hoje e ganhe a sobremesa'. " +
        "Por que é dinheiro fácil: essas pessoas JÁ te conhecem, então custa bem menos pra convencer. Remarketing costuma ter o melhor retorno de todos os anúncios — é fruta no chão pra colher."
    },
    {
      match: ["upsell", "vender mais caro", "aumentar venda"],
      answer:
        "Upsell é oferecer uma versão MAIOR ou MELHOR na hora que a pessoa já vai comprar. 'Quer batata grande por mais R$ 3?' é upsell. " +
        "Exemplo: o cliente vai cortar o cabelo (R$ 50). Você oferece corte + barba + sobrancelha por R$ 90. Se ele aceita, você ganhou R$ 40 a mais SEM gastar nada de anúncio. " +
        "Por que é poderoso: o cliente já está com a carteira na mão e já confia em você. Subir o valor do pedido aqui é o lucro mais barato que existe."
    },
    {
      match: ["downsell", "oferta menor", "opcao mais barata"],
      answer:
        "Downsell é oferecer uma opção MAIS BARATA pra quem disse que o preço está alto, em vez de perder a venda. " +
        "Exemplo: a clínica achou o pacote de R$ 2.500/mês caro. Em vez de desistir, você oferece um plano inicial de R$ 1.200/mês com menos serviços. " +
        "Por que importa: melhor ganhar R$ 1.200 do que R$ 0. E depois que o cliente vê resultado no plano menor, fica fácil subir pro plano maior. Downsell salva venda que ia escapar."
    },
    {
      match: ["aov", "ticket medio", "ticket médio", "valor medio do pedido"],
      answer:
        "Ticket médio (em inglês, AOV = 'Average Order Value') é quanto cada cliente gasta, em média, por compra. " +
        "Exemplo: num dia o restaurante vendeu R$ 2.000 pra 40 pessoas. R$ 2.000 ÷ 40 = R$ 50 de ticket médio. " +
        "Como ganhar mais com isso: se você sobe o ticket médio de R$ 50 pra R$ 60 (com upsell de bebida ou sobremesa), com a MESMA quantidade de clientes seu faturamento sobe 20%. Aumentar o ticket é mais fácil que conseguir cliente novo."
    },
    {
      match: ["mrr", "recorrente", "receita recorrente", "mensalidade"],
      answer:
        "MRR quer dizer 'Monthly Recurring Revenue', ou seja, 'receita que se repete todo mês'. É o dinheiro garantido das mensalidades. " +
        "Exemplo: você tem 6 clientes pagando R$ 2.500/mês cada. 6 x R$ 2.500 = R$ 15.000 de MRR. Esse valor cai todo mês sem você vender de novo. " +
        "Por que é o sonho: MRR é tranquilidade. Você acorda dia 1 do mês já sabendo que tem R$ 15.000 entrando. Por isso vale MUITO mais ter 10 clientes de mensalidade do que 50 trabalhos avulsos."
    },
    {
      match: ["no-show", "no show", "faltou", "nao apareceu", "não apareceu"],
      answer:
        "No-show é quando o cliente AGENDA mas não aparece. Horário vago = dinheiro perdido que não volta. " +
        "Exemplo: a clínica tem 20 agendamentos no dia e 4 faltam. 4 ÷ 20 = 20% de no-show. Se cada avaliação vira R$ 1.200, são R$ 4.800 que evaporaram. " +
        "Como resolver e ganhar dinheiro: uma automação que manda lembrete no WhatsApp 1 dia antes e 2 horas antes derruba o no-show pela metade. Menos faltas = agenda cheia = mais faturamento sem gastar mais."
    },
    {
      match: ["trafego", "tráfego", "anuncio", "anúncio", "trafego pago", "ads"],
      answer:
        "Tráfego é a quantidade de gente chegando até você. 'Tráfego pago' é quando você PAGA (Google, Instagram, Facebook) pra colocar seu anúncio na frente das pessoas certas. " +
        "Exemplo: você coloca R$ 500 num anúncio da academia mostrando pra quem mora a até 3 km. 600 pessoas veem, 40 clicam, 8 fecham plano de R$ 120/mês. " +
        "Por que é o motor do dinheiro: tráfego pago é como uma torneira. Você abre (investe mais) e chega mais cliente; fecha e chega menos. É o jeito mais rápido e previsível de encher a agenda de um negócio."
    },
    {
      match: ["copy", "copywriting", "texto de venda"],
      answer:
        "Copy (de 'copywriting') é o texto escrito pra fazer a pessoa AGIR: clicar, chamar no WhatsApp, comprar. Não é texto bonito — é texto que vende. " +
        "Exemplo ruim: 'Clínica de estética com profissionais qualificados.' Exemplo de copy boa: 'Saia daqui com a pele renovada em 1 sessão — agende sua avaliação gratuita hoje, só 5 vagas essa semana.' " +
        "Por que vira dinheiro: a mesma foto e o mesmo anúncio, só trocando o texto, pode dobrar a quantidade de gente que chama você. Copy boa é o vendedor que trabalha 24 horas por dia de graça."
    },
    {
      match: ["automacao", "automação", "robo", "robô", "automatizar"],
      answer:
        "Automação é fazer o computador repetir uma tarefa sozinho, sem você. Tipo um funcionário que nunca cansa e não cobra hora extra. " +
        "Exemplo: quando alguém manda mensagem pra barbearia às 23h, uma automação responde na hora, mostra os horários livres e já agenda — enquanto você dorme. " +
        "Por que é dinheiro: cliente que não recebe resposta em minutos vai pro concorrente. A automação responde na hora, não perde lead, e te libera pra fechar venda em vez de digitar a mesma mensagem 50 vezes por dia."
    },
    {
      match: ["convencer", "clinica", "clínica", "convenco", "convenço", "abordar", "abordagem", "como vender"],
      answer:
        "Não tente 'convencer'. Mostre DINHEIRO. Faça assim: " +
        "1) Antes de falar, pesquise a clínica (Instagram, Google) e ache 1 problema concreto: 'vocês respondem o direct em horas, perdem cliente'. " +
        "2) Na abordagem, não fale de você. Fale do resultado dela: 'Consigo encher sua agenda com 15 avaliações novas por mês.' " +
        "3) Traduza em R$: 'Se 5 delas viram cliente a R$ 1.200, são R$ 6.000 a mais por mês. Meu serviço custa R$ 2.500. Você lucra R$ 3.500.' " +
        "4) Tire o risco: 'Primeiro mês você acompanha os resultados de perto. Se não fizer sentido, paramos.' " +
        "Quando você mostra que entrega R$ 6.000 e cobra R$ 2.500, não tem o que discutir — o preço deixa de ser caro e vira investimento."
    },
    {
      match: ["primeiro cliente", "comecar", "começar", "comeco", "começo", "por onde comecar", "nao sei o que fazer"],
      answer:
        "Esquece a perfeição. Faça ISSO hoje pra conseguir o primeiro cliente: " +
        "1) Escolha UM nicho perto de você (barbearia, clínica, dentista, academia). Um só. " +
        "2) Faça uma lista de 20 negócios desse tipo na sua cidade (Google Maps + Instagram). Anote o WhatsApp de cada um. " +
        "3) Use o app: na aba Prospecção, gere a mensagem de abordagem pronta. " +
        "4) Mande pros 20 hoje. Não pra 2. Pros 20. Venda é número: de 20 contatos, uns 4 ou 5 respondem. " +
        "5) Com quem responder, marque uma conversa rápida e mostre quanto dinheiro você gera (use a resposta de 'como convencer'). " +
        "A verdade dura e boa: seu primeiro cliente não vem de estudar mais. Vem de mandar a primeira mensagem. Faça os 20 ainda hoje."
    }
  ];

  // ==========================================================================
  // tooltips — Ajuda contextual (1 frase, linguagem simples) por chave.
  // Cada chave deve bater com o data-attribute do elemento na interface.
  // ==========================================================================
  var tooltips = {
    // Navegação principal
    "nav-dashboard":
      "Seu painel: mostra de relance quanto você está faturando e o que precisa de atenção hoje.",
    "nav-studio":
      "Onde você define em qual mercado vai jogar e monta sua oferta — o que vende e por quanto.",
    "nav-prospecting":
      "Onde você acha negócios pra abordar e gera a mensagem pronta pra puxar conversa e conseguir clientes.",
    "nav-pipeline":
      "Seu funil de vendas: acompanhe cada cliente da primeira conversa até fechar e assinar.",
    "nav-clients":
      "Seus clientes que já pagam: aqui você cuida deles pra não cancelarem e ganhar dinheiro todo mês.",
    "nav-team":
      "Seu time: quem vende, quem entrega e quem cuida do cliente — cada tarefa com um responsável.",
    "nav-playbook":
      "O passo a passo completo do negócio, em 12 fases, da escolha do mercado até faturar todo mês.",
    "nav-academy":
      "A Central de Aprendizado: explica tudo em palavras simples e te ensina a ganhar dinheiro de verdade.",

    // Botões de ação
    "btn-diagnose":
      "Clique pra descobrir o problema do negócio antes de falar com ele — assim você chega mostrando solução.",
    "btn-outreach":
      "Gera a mensagem de abordagem pronta pra você copiar e enviar agora no WhatsApp ou direct.",
    "btn-topipeline":
      "Move quem respondeu pro seu funil de vendas, onde você marca a reunião e fecha negócio.",
    "btn-genoffer":
      "Cria sua oferta pronta: o que você entrega, por quanto e a promessa que faz o cliente dizer sim.",
    "btn-addlead":
      "Adiciona um interessado novo (um possível cliente) pra você não esquecer de dar atenção a ele.",
    "btn-adddeal":
      "Cria uma negociação no funil pra acompanhar passo a passo até virar dinheiro no bolso.",
    "btn-aiinsight":
      "Pede uma dica da IA sobre o que fazer agora pra avançar e fechar mais rápido.",

    // Áreas e widgets
    "kanban":
      "Arraste o card do cliente da esquerda (primeiro contato) para a direita (fechado) conforme a negociação avança.",
    "goal-track":
      "Sua meta de hoje: quanto mais gente você aborda, mais clientes fecha. Comece pelas abordagens.",
    "copilot":
      "Pergunte qualquer coisa em linguagem simples — ex.: 'o que é CPA?' ou 'como consigo meu primeiro cliente?'."
  };

  // ==========================================================================
  // nudges — Frases do "modo pressão": empurrões de execução.
  // Motivadoras, diretas, focadas em AÇÃO. Sem culpa exagerada.
  // ==========================================================================
  var nudges = [
    "Você ainda não prospectou hoje. Sem prospecção não existe faturamento.",
    "Seu próximo cliente depende da ação que você ainda não tomou hoje.",
    "Mande 1 mensagem agora. Uma só já te coloca à frente de quem só estuda.",
    "Negócio fechado começa com conversa puxada. Puxe a primeira hoje.",
    "Cliente parado no funil é dinheiro travado. Dê o próximo passo com ele.",
    "Você não precisa de mais teoria. Precisa de mais abordagens enviadas.",
    "Quem responde rápido fecha mais. Tem lead esperando sua resposta?",
    "Pequena ação hoje, faturamento amanhã. Comece pela mais simples.",
    "Anúncio rodando sem você cuidar do lead é dinheiro escorrendo. Cuide deles.",
    "Meta do dia ainda em aberto. Escolha 1 tarefa e termine antes de fechar o app.",
    "Medo de mandar a mensagem custa caro. Mande mesmo imperfeita — venda é número.",
    "Você está a 20 contatos de distância do seu próximo cliente. Comece a lista."
  ];

  window.NEXUS_ACADEMY_ASSIST = {
    glossAnswers: glossAnswers,
    tooltips: tooltips,
    nudges: nudges
  };
})();
