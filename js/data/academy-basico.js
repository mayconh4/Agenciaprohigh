// NEXUS — Agency OS
// CENTRAL DE APRENDIZADO (modo básico): ensina qualquer leigo — zero conhecimento
// em marketing, vendas, tráfego, automação ou tecnologia — a USAR o app e a GANHAR
// DINHEIRO. Linguagem PT-BR simples, direta, com exemplos reais em R$.
// Nicho padrão: clínicas de estética/beleza no Brasil. Também: barbearias,
// dentistas, restaurantes, imobiliárias, academias.
// Vanilla JS, sem build. Exposto em window.NEXUS_ACADEMY_BASICO.

(function () {
  "use strict";

  // Texto de abertura da Central de Aprendizado.
  var INTRO = {
    titulo: "Central de Aprendizado",
    subtitulo:
      "Aprenda do zero a operar sua agência e a transformar conhecimento em dinheiro na conta. Sem enrolação, sem termo difícil sem explicação.",
    basico:
      "O modo básico é a base de tudo. Aqui você entende os conceitos com palavras simples e exemplos reais (R$, clínicas, barbearias). É como sentar com um amigo que explica devagar até cair a ficha.",
    pratico:
      "O modo prático é a mão na massa. Depois que você entendeu o conceito aqui, vai até o módulo certo do app e executa o passo a passo para começar a faturar de verdade."
  };

  // 8 módulos didáticos, na ordem pedida.
  var MODULOS = [
    {
      id: "visao-geral",
      icon: "i-grid",
      titulo: "1. Visão geral: o que este app resolve",
      oque:
        "O NEXUS é o painel de controle de uma agência que vende um único resultado para um único tipo de negócio: encher a agenda de clientes. Você escolhe um nicho (ex.: clínicas de estética), acha donos desses negócios, oferece um serviço de captar clientes para eles e cobra todo mês por isso.",
      porque:
        "Porque dono de negócio não quer 'post bonito' — quer cliente entrando pela porta. Quando você entrega isso, ele paga R$ 1.500, R$ 3.000, R$ 5.000 por mês, todo mês. Esse dinheiro recorrente é o que faz a sua agência crescer sem você correr atrás de venda nova toda semana.",
      erro:
        "O erro clássico é tentar atender qualquer negócio (uma clínica hoje, um pet shop amanhã, uma loja de roupa depois). Você nunca vira especialista de nada, demora mais para entregar e não consegue cobrar caro. Espalhar é o caminho mais rápido para quebrar.",
      como:
        "Use o app na ordem dos módulos: primeiro escolha 1 nicho e monte a oferta, depois prospecte (ache os donos), depois aborde, jogue os interessados no funil e feche o primeiro cliente. Faça um de cada vez até a roda girar sozinha.",
      exemplo:
        "Você foca só em clínicas de estética. Fecha 5 clínicas a R$ 3.000/mês cada = R$ 15.000/mês entrando. Como é sempre o mesmo tipo de cliente, você usa as mesmas campanhas e os mesmos textos, gastando 1/3 do tempo. Resultado: mais margem e menos dor de cabeça.",
      extra: [
        {
          rotulo: "Resultado esperado",
          texto:
            "Em 60 a 90 dias com execução constante: de 1 a 3 clientes pagantes recorrentes. A meta não é 'ficar rico amanhã', é ter os primeiros R$ 3.000 a R$ 9.000/mês previsíveis."
        },
        {
          rotulo: "Para quem serve",
          texto:
            "Barbearia, dentista, restaurante, imobiliária, academia, estética. Qualquer negócio que vive de cliente voltando e que sofre com agenda vazia."
        }
      ]
    },
    {
      id: "lead",
      icon: "i-spark",
      titulo: "2. O que é um Lead",
      oque:
        "Lead é uma pessoa que demonstrou algum interesse e deixou um jeito de você falar com ela (um WhatsApp, um e-mail, um clique). Ainda NÃO é cliente — é alguém que levantou a mão e disse 'talvez eu queira isso'.",
      porque:
        "Sem lead você não tem com quem falar, e sem conversa não tem venda. Lead é a matéria-prima do dinheiro: você junta leads, conversa, e uma parte vira cliente pagante. Mais leads bons = mais vendas no fim do mês.",
      erro:
        "Tratar todo mundo igual. Mandar 'fecha comigo agora' para quem acabou de te conhecer espanta a pessoa. É como pedir alguém em casamento no primeiro 'oi'. Cada lead está num momento diferente e precisa de uma conversa diferente.",
      como:
        "Separe seus leads por 'temperatura' (frio, morno, quente) e fale com cada um do jeito certo. No app, você registra cada lead e move ele conforme ele esquenta. Sempre responda rápido: lead que espera 1 dia esfria.",
      exemplo:
        "Uma clínica viu seu anúncio e mandou 'quanto custa?' no WhatsApp. Isso é 1 lead. Se você responde na hora e marca uma conversa, ele esquenta. Se some por 2 dias, ele esfria e provavelmente fecha com outro.",
      extra: [
        {
          rotulo: "Lead frio",
          texto:
            "Mal te conhece. Curtiu um post ou caiu no seu perfil. Não fale de preço ainda — entregue valor (uma dica, um conteúdo) para ele lembrar de você."
        },
        {
          rotulo: "Lead morno",
          texto:
            "Já conversou, sabe o que você faz e tem o problema que você resolve. Aqui você apresenta a solução e mostra casos de quem já teve resultado."
        },
        {
          rotulo: "Lead quente",
          texto:
            "Está pronto para decidir, só falta o empurrão. Aqui você manda a proposta, o preço e marca o fechamento. É aqui que entra dinheiro."
        }
      ]
    },
    {
      id: "funil",
      icon: "i-funnel",
      titulo: "3. O que é Funil de Vendas",
      oque:
        "Funil é o caminho que uma pessoa percorre do 'nunca ouvi falar de você' até 'pronto, pode cobrar'. Chama funil porque entra muita gente em cima (topo) e sai pouca gente fechada embaixo (fundo) — igual a um funil de cozinha.",
      porque:
        "Porque venda não acontece num passo só. Se você entende em que parte do funil cada pessoa está, sabe exatamente o que falar para empurrar ela para a próxima etapa. Funil organizado = você para de perder venda por esquecimento e desorganização.",
      erro:
        "Não ter funil nenhum: você fala com 10 pessoas, anota nada, esquece de 7 e no fim do mês não sabe por que não vendeu. Dinheiro que estava na mesa vai embora porque ninguém deu o próximo passo.",
      como:
        "No app, cada interessado entra no topo do funil e você vai movendo pelas etapas (captação, conversa/nutrição, proposta, fechamento). Olhe o funil todo dia e pergunte: 'quem precisa do meu próximo contato hoje?'. Sempre haja um próximo passo marcado.",
      exemplo:
        "30 donos de barbearia viram seu anúncio (topo). 10 mandaram mensagem. 4 marcaram reunião (meio). 2 pediram proposta. 1 fechou a R$ 2.000/mês (fundo). Sabendo desses números, você descobre onde está vazando e conserta.",
      extra: [
        {
          rotulo: "Topo — Captação",
          texto:
            "Fazer gente te descobrir. Anúncios, posts, indicação. Objetivo: virar estranhos em leads. Aqui o jogo é volume."
        },
        {
          rotulo: "Meio — Nutrição",
          texto:
            "Aquecer quem já te conhece. Conversa, conteúdo, prova de que você resolve. Objetivo: virar lead em interessado de verdade."
        },
        {
          rotulo: "Fundo — Conversão",
          texto:
            "Fechar a venda. Proposta, preço, contrato. Objetivo: virar interessado em cliente pagante. Aqui entra o R$."
        }
      ]
    },
    {
      id: "trafego-pago",
      icon: "i-radar",
      titulo: "4. O que é Tráfego Pago",
      oque:
        "'Tráfego' é gente chegando até você (visitas, mensagens, cliques). Tráfego pago é quando você PAGA para o Instagram, Facebook ou Google mostrarem seu anúncio para o público certo. Você coloca R$ e eles entregam pessoas interessadas.",
      porque:
        "Porque é a forma mais rápida e controlável de ter leads. Orgânico (sem pagar) é de graça mas lento e imprevisível. Com tráfego pago você liga uma 'torneira': põe R$ 30/dia e começam a chegar mensagens. Isso é o que te faz vender já, não daqui a 6 meses.",
      erro:
        "Apertar 'turbinar publicação' sem saber para quem está mostrando, gastar R$ 500 e não medir nada. Ou achar que o anúncio sozinho vende — ele só TRAZ a pessoa; quem fecha é a conversa e o funil depois.",
      como:
        "Comece pequeno e meça: defina um público (ex.: mulheres de 25 a 45 anos perto da clínica), um valor diário baixo, e acompanhe quantos leads vieram e quanto custou cada um. Suba o orçamento só no anúncio que está trazendo lead barato.",
      exemplo:
        "Uma clínica gastou R$ 600 no mês em anúncios. Vieram 60 mensagens (R$ 10 por lead). Dessas, 12 marcaram avaliação e 6 fecharam pacote de R$ 800. Faturou R$ 4.800 gastando R$ 600. Esse é o poder do tráfego pago bem feito.",
      extra: [
        {
          rotulo: "Tráfego pago",
          texto:
            "Você paga e tem resultado rápido e controlável. Bom para vender agora e escalar (é só aumentar o investimento no que funciona)."
        },
        {
          rotulo: "Tráfego orgânico",
          texto:
            "De graça (posts, Reels, indicação), mas lento e depende de constância. Bom para construir autoridade no longo prazo. O ideal é usar os dois."
        }
      ]
    },
    {
      id: "uso-diario",
      icon: "i-bolt",
      titulo: "5. Como usar o app no dia a dia",
      oque:
        "É a rotina de operar a agência dentro do NEXUS. O app te leva pela mesma sequência todo dia, para você nunca ficar 'sem saber o que fazer agora'. Cada módulo é uma etapa do caminho até o cliente pagar.",
      porque:
        "Porque resultado vem de repetição, não de inspiração. Quem segue a rotina fatura; quem só 'pensa em estratégia' não. Seguir o passo a passo é literalmente o que separa quem ganha dinheiro de quem só assistiu o conteúdo.",
      erro:
        "Pular etapas: querer fechar cliente (módulo Clientes) sem ter prospectado e abordado direito. Ou ficar 3 semanas só 'escolhendo o nicho perfeito' e nunca falar com um dono de verdade. Paralisia não paga boleto.",
      como:
        "Siga a ordem: 1) Escolha o nicho — 2) Monte a oferta — 3) Prospecte (ache os donos) — 4) Aborde (mande mensagem/ligue) — 5) Funil (mova os interessados pelas etapas) — 6) Clientes (feche e registre o contrato). Faça um pouco de cada, todo dia útil.",
      exemplo:
        "Segunda: escolhe 'clínicas de estética' e escreve a oferta ('lotamos sua agenda por R$ 2.500/mês'). Terça a quinta: lista 20 clínicas e manda 20 mensagens. Sexta: 3 responderam, vão para o funil. Semana seguinte: 1 vira reunião, fecha a R$ 2.500. Em 2 semanas você saiu do zero.",
      extra: [
        {
          rotulo: "Meta diária realista",
          texto:
            "1 hora por dia: 10 a 20 abordagens novas + mover quem já está no funil + responder leads na hora. Constância pequena bate esforço gigante esporádico."
        },
        {
          rotulo: "Onde está o dinheiro",
          texto:
            "Os passos 3 (prospecção) e 4 (abordagem) geram conversas, mas é o passo 6 (fechar cliente) que coloca R$ na conta. Nunca termine o dia sem mexer no funil."
        }
      ]
    },
    {
      id: "copywriting",
      icon: "i-doc",
      titulo: "6. O que é Copywriting",
      oque:
        "Copywriting é escrever para vender. É a diferença entre 'oi, faço marketing' (ninguém responde) e 'sua barbearia tem cadeira vazia de terça a quinta? Eu encho' (o cara para e te ouve). É escolher palavras que fazem a pessoa querer agir.",
      porque:
        "Porque a mesma oferta, com as palavras certas, vende muito mais. Você não precisa de mais leads — precisa que os leads que já tem respondam 'sim'. Boa copy aumenta sua taxa de fechamento sem gastar 1 real a mais em anúncio. É dinheiro de graça.",
      erro:
        "Falar de você ('somos uma agência completa, com expertise em soluções 360'). O dono não liga para você — ele liga para o problema dele. Texto cheio de palavra bonita e vazia faz a pessoa rolar a tela e te ignorar.",
      como:
        "Siga a fórmula: 1) Dor (mostre o problema que dói) — 2) Desejo (pinte como fica bom depois) — 3) Oferta (o que você faz e por quanto) — 4) CTA, o 'Chamada Para Ação' (diga exatamente o próximo passo: 'me chama no WhatsApp'). No app, os textos prontos já seguem essa estrutura.",
      exemplo:
        "Ruim: 'Trabalho com gestão de tráfego e mídias.' Bom: 'Dentista, sua agenda tem buraco de manhã? (dor) Imagina ela cheia toda semana (desejo). Eu trago de 10 a 15 pacientes novos/mês por R$ 2.000 (oferta). Responde AGENDA aqui que te mando como (CTA).' O segundo fecha 3x mais.",
      extra: [
        {
          rotulo: "Dor",
          texto: "O problema concreto que tira o sono do dono: agenda vazia, cliente que some, mês fraco."
        },
        {
          rotulo: "Desejo",
          texto: "Como a vida dele fica depois: agenda lotada, faturamento previsível, menos preocupação."
        },
        {
          rotulo: "Oferta",
          texto: "O que você entrega, em quanto tempo, por qual preço. Claro e específico, sem rodeio."
        },
        {
          rotulo: "CTA (Chamada Para Ação)",
          texto: "A instrução do próximo passo. Uma só, fácil de obedecer: 'responde SIM', 'clica aqui', 'me chama'."
        }
      ]
    },
    {
      id: "automacao",
      icon: "i-bolt",
      titulo: "7. O que é Automação",
      oque:
        "Automação é fazer a máquina repetir tarefas chatas por você, sempre do mesmo jeito, sem você precisar estar online. Ex.: responder na hora quem manda 'oi' no WhatsApp, mandar lembrete de agendamento, organizar leads sozinho.",
      porque:
        "Porque seu tempo é limitado e caro. Cada hora respondendo mensagem repetida é uma hora que você não está fechando venda. Automação te dá escala (atender 100 sem contratar ninguém), velocidade (resposta na hora, lead não esfria) e padrão (ninguém esquece de responder).",
      erro:
        "Automatizar antes de entender o processo na mão. Se você ainda não sabe o que funciona na conversa, a máquina vai repetir o erro 100x mais rápido. E robô frio demais, sem toque humano, espanta cliente. Automatize o repetitivo, mantenha o humano no que importa.",
      como:
        "Primeiro faça manual umas 10 vezes e veja o que funciona. Depois automatize só a parte repetitiva: resposta inicial ('oi, recebi! me conta o que você precisa'), lembretes e organização. Deixe a negociação e o fechamento com você (ou com uma pessoa).",
      exemplo:
        "Sem automação, você perde o lead que manda mensagem às 22h porque só vê de manhã (ele já fechou com outro). Com uma resposta automática na hora, ele se sente atendido e fica. Isso pode ser a diferença de R$ 800 (um pacote) por mês que você salvava do lixo.",
      extra: [
        {
          rotulo: "Economia de tempo",
          texto: "Tarefa de 5 min repetida 30x/dia = 2,5 horas. Automatizou? Recuperou meio expediente para vender."
        },
        {
          rotulo: "Escala",
          texto: "Atender 10 ou 100 leads dá o mesmo trabalho quando o repetitivo é automático. Cresce sem inchar custo."
        },
        {
          rotulo: "Padronização",
          texto: "Toda pessoa recebe a mesma resposta rápida e bem feita. Nada cai no esquecimento, nada sai torto."
        }
      ]
    },
    {
      id: "analise-resultados",
      icon: "i-chart",
      titulo: "8. Como analisar resultados",
      oque:
        "É olhar os números do seu trabalho e entender se está dando lucro ou prejuízo — sem precisar de matemática difícil. Basicamente: quanto entrou, quanto saiu, e quanto custou trazer cada cliente.",
      porque:
        "Porque sem números você decide no 'achismo' e queima dinheiro. Com números você sabe qual anúncio desligar (gasta e não traz nada) e qual turbinar (traz cliente barato). É assim que você para de jogar dinheiro fora e dobra o que funciona.",
      erro:
        "Olhar só métrica de vaidade (curtidas, seguidores, visualizações). Isso não paga boleto. 10 mil curtidas e zero cliente = R$ 0. O que importa é: virou conversa? Virou venda? Custou menos do que rendeu?",
      como:
        "Olhe 3 números por semana: 1) Quantos leads chegaram e quanto custaram (CPA). 2) Quantos viraram cliente (taxa de fechamento). 3) Quanto cada cliente rende contra o que custou (ROI/ROAS). Se entrou mais do que saiu, está no caminho. Use o glossário abaixo para cada sigla.",
      exemplo:
        "Mês da clínica: gastou R$ 1.000 em anúncios, veio 50 leads (R$ 20 cada). Fechou 5 clientes (10% de fechamento). Cada um pagou R$ 800 = R$ 4.000. Entrou R$ 4.000, saiu R$ 1.000. Sobrou R$ 3.000. Conclusão fácil: continua e investe mais.",
      extra: [
        {
          rotulo: "A pergunta que importa",
          texto: "'Para cada R$ 1 que coloquei, quanto voltou?'. Voltou mais de R$ 1? Bom. Menos? Ajuste antes de gastar mais."
        },
        {
          rotulo: "Regra do leigo",
          texto: "Não decore fórmula. Compare sempre: o que GASTEI para trazer o cliente x o que ele me PAGA. Se paga mais, lucro."
        }
      ]
    }
  ];

  // Glossário: ~20 siglas/métricas, todas explicadas de forma bem simples,
  // com exemplo em R$, como ler o número e como melhorar.
  var GLOSSARIO = [
    {
      sigla: "Lead",
      nome: "Lead (Contato Interessado)",
      oque: "Pessoa que demonstrou interesse e deixou um contato. Ainda não é cliente, é um possível cliente.",
      calculo: "Não se calcula — você conta quantos contatos interessados chegaram no período.",
      exemplo: "10 donos de clínica mandaram mensagem no seu anúncio essa semana = 10 leads.",
      leitura: "Quanto mais lead bom (do nicho certo), melhor. Lead de gente errada não conta.",
      melhorar: "Faça mais anúncios e abordagens para o público certo e responda rápido para não perder ninguém."
    },
    {
      sigla: "CPA",
      nome: "Cost Per Acquisition (Custo por Aquisição)",
      oque: "Quanto você gastou, em média, para conseguir UM cliente (ou um lead, dependendo de como você mede).",
      calculo: "Pegue o total gasto e divida pelo número de clientes (ou leads) que vieram.",
      exemplo: "Gastou R$ 500 em anúncios e vieram 5 clientes -> CPA = R$ 100 por cliente.",
      leitura: "Número bom: CPA bem menor do que o cliente te paga. Ruim: CPA perto ou acima do que ele paga (prejuízo).",
      melhorar: "Melhore a copy e o público do anúncio, e feche mais dos leads que já chegam (corta o desperdício)."
    },
    {
      sigla: "CAC",
      nome: "Custo de Aquisição de Cliente",
      oque: "Quanto custa, no total, para transformar um estranho em cliente pagante. Parecido com CPA, mas inclui TUDO: anúncio, ferramentas e seu tempo de venda.",
      calculo: "Some todo o gasto de marketing e vendas e divida pelo número de clientes fechados.",
      exemplo: "Gastou R$ 1.000 (anúncio + ferramentas) e fechou 4 clientes -> CAC = R$ 250 por cliente.",
      leitura: "Bom: CAC bem menor que o LTV (o quanto o cliente rende no total). Ruim: CAC maior que o LTV.",
      melhorar: "Aumente a recorrência (cliente fica mais tempo) e feche mais rápido para diluir o custo."
    },
    {
      sigla: "CTR",
      nome: "Click Through Rate (Taxa de Cliques)",
      oque: "De cada 100 pessoas que VIRAM seu anúncio, quantas clicaram nele. Mostra se o anúncio é interessante.",
      calculo: "Cliques divididos por quantas vezes o anúncio apareceu, em porcentagem.",
      exemplo: "1.000 pessoas viram o anúncio e 30 clicaram -> CTR = 3%.",
      leitura: "Bom: acima de 1% a 2% costuma ser saudável. Ruim: abaixo de 1% (anúncio sem graça ou público errado).",
      melhorar: "Troque a imagem/vídeo e o título por algo mais chamativo e que fale da dor do cliente."
    },
    {
      sigla: "CPC",
      nome: "Cost Per Click (Custo por Clique)",
      oque: "Quanto você paga, em média, cada vez que alguém clica no seu anúncio.",
      calculo: "Total gasto dividido pelo número de cliques.",
      exemplo: "Gastou R$ 200 e teve 100 cliques -> CPC = R$ 2 por clique.",
      leitura: "Bom: CPC baixo trazendo gente certa. Ruim: CPC alto OU barato mas que não vira lead nenhum.",
      melhorar: "Melhore o anúncio (CTR) e mire um público mais específico; clique barato sem venda não adianta."
    },
    {
      sigla: "CPM",
      nome: "Cost Per Mille (Custo por Mil Exibições)",
      oque: "Quanto custa para seu anúncio aparecer 1.000 vezes na tela das pessoas (visto, não necessariamente clicado).",
      calculo: "Total gasto dividido pelas exibições, multiplicado por 1.000.",
      exemplo: "Gastou R$ 50 e o anúncio apareceu 5.000 vezes -> CPM = R$ 10 por mil exibições.",
      leitura: "Bom: CPM baixo significa que mostrar seu anúncio está barato. É mais um custo de bastidor.",
      melhorar: "Públicos muito disputados encarecem o CPM; teste horários e públicos diferentes para baratear."
    },
    {
      sigla: "Conversão",
      nome: "Taxa de Conversão",
      oque: "De cada 100 pessoas em uma etapa, quantas deram o próximo passo que você queria (virar lead, marcar reunião, comprar).",
      calculo: "Quantos fizeram a ação dividido por quantos tiveram a chance, em porcentagem.",
      exemplo: "100 clicaram no anúncio e 5 viraram lead -> conversão de 5%.",
      leitura: "Bom: conversão subindo ao longo do tempo. Ruim: muita gente entra e quase ninguém avança.",
      melhorar: "Conserte a etapa que mais vaza: copy, oferta, página ou velocidade de resposta."
    },
    {
      sigla: "Closing Rate",
      nome: "Closing Rate (Taxa de Fechamento)",
      oque: "De cada 100 pessoas que chegaram na hora de decidir (proposta), quantas viraram cliente pagante.",
      calculo: "Clientes fechados dividido por propostas/reuniões feitas, em porcentagem.",
      exemplo: "Fez 10 reuniões de proposta e fechou 3 -> taxa de fechamento de 30%.",
      leitura: "Bom: 20% a 40% costuma ser saudável em serviço. Ruim: abaixo de 10% (oferta ou conversa fraca).",
      melhorar: "Melhore a oferta, mostre casos de resultado e qualifique melhor quem chega na proposta."
    },
    {
      sigla: "ROI",
      nome: "Return On Investment (Retorno sobre Investimento)",
      oque: "Quanto você LUCROU em relação ao que gastou. Responde: 'valeu a pena ou não?'.",
      calculo: "Quanto voltou menos quanto gastou, dividido pelo que gastou, em porcentagem.",
      exemplo: "Gastou R$ 1.000 e faturou R$ 3.000 -> lucro de R$ 2.000 -> ROI de 200%.",
      leitura: "Bom: ROI positivo (voltou mais do que saiu). Ruim: ROI negativo (saiu mais do que voltou = prejuízo).",
      melhorar: "Corte o que dá prejuízo e coloque mais dinheiro no que já está dando retorno."
    },
    {
      sigla: "ROAS",
      nome: "Return On Ad Spend (Retorno sobre o Gasto em Anúncios)",
      oque: "Para cada R$ 1 gasto SÓ em anúncio, quantos reais voltaram em venda. É o ROI focado só na mídia paga.",
      calculo: "Faturamento gerado pelos anúncios dividido pelo valor gasto em anúncios.",
      exemplo: "Gastou R$ 500 em anúncios e isso gerou R$ 2.500 em vendas -> ROAS = 5 (cada R$ 1 virou R$ 5).",
      leitura: "Bom: ROAS acima de 2 ou 3 (depende da margem). Ruim: ROAS abaixo de 1 (anúncio dá prejuízo).",
      melhorar: "Pause os anúncios com ROAS baixo e reforce os que têm ROAS alto; melhore a copy e o fechamento."
    },
    {
      sigla: "LTV",
      nome: "Lifetime Value (Valor no Tempo de Vida)",
      oque: "Quanto um cliente te paga no TOTAL, somando todos os meses que ele fica com você. Não só a primeira venda.",
      calculo: "Valor que ele paga por mês multiplicado por quantos meses ele costuma ficar.",
      exemplo: "Clínica paga R$ 2.000/mês e fica 10 meses -> LTV = R$ 20.000.",
      leitura: "Bom: LTV bem maior que o CAC (vale muito mais do que custou trazer). Ruim: LTV perto do CAC.",
      melhorar: "Entregue resultado para o cliente ficar mais tempo e ofereça serviços extras (upsell)."
    },
    {
      sigla: "Churn",
      nome: "Churn (Taxa de Cancelamento)",
      oque: "De cada 100 clientes, quantos cancelaram/foram embora no período. É a 'evasão' de clientes.",
      calculo: "Clientes que saíram dividido pelo total de clientes que você tinha, em porcentagem.",
      exemplo: "Tinha 10 clientes, 1 cancelou no mês -> churn de 10%.",
      leitura: "Bom: churn baixo (clientes ficam). Ruim: churn alto (você enche um balde furado, trabalha e não cresce).",
      melhorar: "Mostre resultado claro todo mês, tenha um responsável por cliente e resolva problema rápido."
    },
    {
      sigla: "Pipeline",
      nome: "Pipeline (Carteira de Oportunidades)",
      oque: "A soma de todas as vendas que você tem em andamento no funil, com o valor potencial de cada uma.",
      calculo: "Some o valor de todos os clientes em potencial que estão conversando/negociando com você.",
      exemplo: "Você tem 4 propostas em aberto de R$ 2.000/mês -> pipeline de R$ 8.000/mês em potencial.",
      leitura: "Bom: pipeline cheio e se movendo. Ruim: pipeline vazio (mês que vem vai ser fraco) ou parado.",
      melhorar: "Prospecte sempre, mesmo com a agenda cheia, para nunca deixar o pipeline secar."
    },
    {
      sigla: "Remarketing",
      nome: "Remarketing (Reimpacto)",
      oque: "Mostrar anúncio de novo para quem JÁ teve contato com você (visitou, clicou, conversou) mas não fechou.",
      calculo: "Não é um número — é um tipo de campanha mirada em quem já te conhece.",
      exemplo: "50 donos clicaram no anúncio mas não responderam. Você mostra um novo anúncio só para esses 50.",
      leitura: "Costuma ter o melhor retorno: gente que já te conhece fecha mais barato e mais rápido.",
      melhorar: "Crie anúncios específicos para quem já interagiu, com prova de resultado e uma oferta mais direta."
    },
    {
      sigla: "Upsell",
      nome: "Upsell (Venda para Cima)",
      oque: "Oferecer algo a MAIS ou um plano maior para quem já é seu cliente, aumentando o que ele paga.",
      calculo: "Não é número — é a ação de vender um upgrade ou serviço extra ao cliente atual.",
      exemplo: "Cliente paga R$ 2.000 só por tráfego. Você oferece também atendimento automático por +R$ 1.000 -> agora paga R$ 3.000.",
      leitura: "Toda venda extra para cliente atual é a mais barata que existe (ele já confia em você).",
      melhorar: "Depois de entregar resultado, ofereça o próximo passo natural que ajuda ainda mais o cliente."
    },
    {
      sigla: "Downsell",
      nome: "Downsell (Venda Reduzida)",
      oque: "Quando o cliente vai dizer não pelo preço, você oferece uma versão menor e mais barata para não perder a venda.",
      calculo: "Não é número — é a ação de oferecer um plano mais simples quando o principal é recusado.",
      exemplo: "Dono achou R$ 2.500/mês caro. Você oferece um plano básico de R$ 1.200 -> fecha em vez de perder.",
      leitura: "Melhor ganhar R$ 1.200 do que R$ 0. Downsell salva venda que ia escorrer pelos dedos.",
      melhorar: "Tenha sempre uma opção menor no bolso para apresentar no momento do 'tá caro'."
    },
    {
      sigla: "AOV",
      nome: "Average Order Value (Ticket Médio)",
      oque: "Quanto, em média, cada cliente paga por compra/contrato. Mostra o tamanho típico das suas vendas.",
      calculo: "Faturamento total dividido pelo número de vendas/clientes no período.",
      exemplo: "Faturou R$ 9.000 com 6 clientes -> ticket médio = R$ 1.500 por cliente.",
      leitura: "Bom: ticket médio alto (cada venda rende mais). Ruim: muitos clientes pagando pouco (muito trabalho, pouca margem).",
      melhorar: "Cobre por resultado, monte pacotes maiores e faça upsell para subir o valor de cada cliente."
    },
    {
      sigla: "MRR",
      nome: "Monthly Recurring Revenue (Receita Recorrente Mensal)",
      oque: "O dinheiro que entra TODO mês de forma previsível, somando todos os clientes que pagam mensalidade.",
      calculo: "Some a mensalidade de todos os seus clientes ativos.",
      exemplo: "5 clientes pagando R$ 2.000/mês cada -> MRR = R$ 10.000 que entra todo mês.",
      leitura: "É a métrica mais importante da agência: MRR subindo = negócio saudável e crescendo de verdade.",
      melhorar: "Feche novos clientes recorrentes, segure os atuais (baixe o churn) e faça upsell para subir a mensalidade."
    },
    {
      sigla: "No-show",
      nome: "No-show (Falta / Não Compareceu)",
      oque: "Quando a pessoa marca uma reunião ou agendamento e simplesmente não aparece.",
      calculo: "Quantos faltaram dividido por quantos foram agendados, em porcentagem.",
      exemplo: "Marcou 10 reuniões na semana e 3 faltaram -> no-show de 30%.",
      leitura: "Bom: no-show baixo. Ruim: no-show alto (você perde tempo e a venda nem começa).",
      melhorar: "Mande lembrete antes (automatize), confirme no dia e marque com quem está realmente quente."
    },
    {
      sigla: "Funil",
      nome: "Funil de Vendas",
      oque: "O caminho do 'nunca te viu' até 'virou cliente'. Muita gente entra no topo, poucos saem fechados no fundo.",
      calculo: "Não é um número único — você acompanha quantos avançam de uma etapa para a outra.",
      exemplo: "30 viram o anúncio -> 10 viraram lead -> 4 reuniões -> 1 fechou. Esse é o funil em números.",
      leitura: "Bom: funil com gente avançando em todas as etapas. Ruim: muita gente travada num degrau.",
      melhorar: "Ache a etapa onde mais gente para e melhore só ela; pequenas correções aumentam muito a venda final."
    }
  ];

  window.NEXUS_ACADEMY_BASICO = {
    intro: INTRO,
    modulos: MODULOS,
    glossario: GLOSSARIO
  };
})();
