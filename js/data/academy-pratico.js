// NEXUS — Agency OS
// Central de Aprendizado (modo PRÁTICO): "Caminho para o Primeiro Cliente".
// Ensina QUALQUER leigo (zero marketing/vendas/tráfego/tecnologia) a usar o
// app e, principalmente, a GANHAR DINHEIRO. Tudo orientado a resultado
// financeiro e execução. Português do Brasil, simples, com exemplos reais (R$).
// Nicho padrão: clínicas de estética/beleza. Cita também barbearias,
// dentistas, restaurantes, imobiliárias e academias.
// Vanilla JS, sem build. Exposto em window.NEXUS_ACADEMY_PRATICO.

(function () {
  "use strict";

  var ACADEMY_PRATICO = {
    titulo: "Caminho para o Primeiro Cliente",
    subtitulo:
      "8 passos do zero ao primeiro contrato. A meta não é \"aprender\": é botar R$ 5.000 por mês na sua conta.",

    meta: { faturamentoMetaBRL: 5000 },

    etapas: [
      {
        id: "escolher-nicho",
        n: 1,
        titulo: "Escolha um nicho (um só tipo de negócio)",
        oque:
          "Nicho é o tipo de cliente que você vai atender. Em vez de tentar vender para \"qualquer empresa\", você escolhe UM tipo: clínicas de estética, ou barbearias, ou dentistas, ou restaurantes. Só um.",
        porque:
          "Quem fala com todo mundo não convence ninguém. Quando você atende só clínicas de estética, na terceira clínica você já sabe os problemas de cor, já tem os textos prontos e fecha mais rápido. Isso vira dinheiro: menos tempo por venda, mais vendas por mês.",
        resultado:
          "Um nicho escolhido e anotado. Você consegue dizer em uma frase: \"Eu ajudo [clínicas de estética] a [conseguir mais clientes].\"",
        acoes: [
          "Escolha 1 nicho que exista perto de você e que cobre caro pelo serviço (clínica de estética, dentista e barbearia premium são ótimos começos).",
          "Pesquise no Google Maps quantos desse tipo existem na sua cidade. Se tiver mais de 30, está ótimo: tem mercado de sobra.",
          "Confirme que esse negócio depende de clientes voltando sempre (estética, barbearia, academia) — recorrência facilita a sua venda.",
          "Escreva sua frase de uma linha: \"Eu ajudo ___ a conseguir mais clientes todo mês.\""
        ],
        dica:
          "Comece pelo nicho onde você já conhece alguém (sua dentista, seu barbeiro). A primeira reunião com um conhecido é 10x mais fácil de marcar.",
        module: "studio",
        cta: "Abrir Nicho & Oferta"
      },
      {
        id: "onde-perde-dinheiro",
        n: 2,
        titulo: "Descubra onde o nicho está perdendo dinheiro",
        oque:
          "Antes de vender qualquer coisa, entenda o buraco no bolso do dono. Quase todo negócio perde dinheiro nos mesmos pontos: gente que pede orçamento e some, agenda com horários vazios, e cliente que vem uma vez e não volta.",
        porque:
          "Você não vai vender \"marketing\". Você vai vender a tampa pro buraco. Se a barbearia perde 20 clientes por mês porque não responde o WhatsApp a tempo, você mostra exatamente esse prejuízo. Dor clara em R$ = venda fácil.",
        resultado:
          "Uma lista de 2 ou 3 problemas concretos do nicho, com o valor em reais que cada um custa por mês. Isso vira o seu argumento de venda.",
        acoes: [
          "Liste os 3 vazamentos mais comuns: orçamento que não vira cliente, horário vazio na agenda, e cliente que não volta.",
          "Coloque número: \"Uma clínica que perde 15 agendamentos/mês a R$ 200 cada está jogando fora R$ 3.000 por mês.\"",
          "Mande mensagem para 1 dono que você conhece e pergunte: \"Quantas pessoas pedem informação e somem sem fechar?\" Anote a resposta.",
          "Escolha O VAZAMENTO MAIS CARO. É nele que sua oferta vai mirar."
        ],
        dica:
          "Não invente o problema. Pergunte ao dono e repita as palavras dele na hora de vender. Quando o cliente ouve a própria dor, ele compra.",
        module: "studio",
        cta: "Abrir Diagnóstico do Nicho"
      },
      {
        id: "criar-oferta",
        n: 3,
        titulo: "Monte a sua oferta (a solução, com preço)",
        oque:
          "Oferta é o que você entrega + quanto custa + o que o cliente ganha em dinheiro. Não é \"pacote de posts\". É \"eu trago mais clientes agendados pra você, por R$ X por mês\".",
        porque:
          "Cliente não paga por trabalho, paga por resultado. Se você cobra R$ 2.000/mês e traz R$ 8.000 a mais em vendas, o cliente está ganhando R$ 6.000. Esse é o argumento que faz ele dizer sim sem reclamar do preço.",
        resultado:
          "Uma oferta de 3 linhas que qualquer pessoa entende: o que você faz, quanto custa por mês e quanto o cliente ganha de volta.",
        acoes: [
          "Escreva a promessa em resultado, não em tarefa: \"Encho sua agenda com 20+ clientes novos por mês\" (não \"gerencio seu Instagram\").",
          "Defina um preço mensal fixo (começo seguro: R$ 1.500 a R$ 2.500/mês). Mensal é melhor que avulso: vira renda recorrente sua.",
          "Mostre a conta para o cliente: \"R$ 2.000 pra você, que traz uns R$ 8.000 a mais. Você sai no lucro de R$ 6.000.\"",
          "Garanta confiança: \"Primeiro mês, se eu não trouxer resultado, a gente conversa.\" Reduz o medo de comprar."
        ],
        dica:
          "Nunca cobre por hora. Cobrar mensalidade fixa pelo resultado te paga melhor e dá renda previsível: 5 clientes a R$ 2.000 já são R$ 10.000/mês entrando.",
        module: "studio",
        cta: "Abrir Construtor de Oferta"
      },
      {
        id: "prospeccao",
        n: 4,
        titulo: "Prospecção: 100 contatos por dia",
        oque:
          "Prospecção é ir atrás de clientes em vez de esperar. Todo dia você lista 100 negócios do seu nicho e guarda o contato (nome, Instagram, WhatsApp). É garimpo: você não precisa de todos, precisa dos poucos que vão dizer sim.",
        porque:
          "Vendas é números. Se de cada 100 contatos, 10 respondem, 3 marcam reunião e 1 fecha — então 100 contatos/dia podem virar 1 cliente novo por dia. Pouco contato = pouco dinheiro. É a etapa que mais separa quem fatura de quem não fatura.",
        resultado:
          "Uma lista crescendo todo dia com nome, Instagram e WhatsApp de negócios do seu nicho, prontos para receber a abordagem.",
        acoes: [
          "Abra o Google Maps e o Instagram, busque seu nicho na sua cidade e em cidades vizinhas (ex: \"clínica de estética em Campinas\").",
          "Salve 100 contatos por dia no app: nome do negócio, @ do Instagram e WhatsApp. Sem julgar ainda — quantidade primeiro.",
          "Marque os que parecem \"meio largados\" (post antigo, poucas curtidas): esses precisam mais de você e fecham mais fácil.",
          "Repita TODO DIA útil. 100 por dia = 2.000 contatos por mês. Dá cliente."
        ],
        dica:
          "Bloqueie 1 hora fixa no dia só pra isso, sempre no mesmo horário. Prospecção que depende de \"quando sobrar tempo\" nunca acontece — e sem ela não tem cliente.",
        module: "prospecting",
        cta: "Abrir Prospecção"
      },
      {
        id: "abordagem",
        n: 5,
        titulo: "Abordagem: a primeira mensagem (com script pronto)",
        oque:
          "Abordagem é a primeira mensagem que você manda pro dono, no Direct do Instagram ou no WhatsApp. Curta, simpática e sobre ELE — nunca um textão vendendo. O objetivo da mensagem é só um: começar uma conversa.",
        porque:
          "É aqui que o contato vira possível cliente. Mensagem boa abre conversa; mensagem ruim é ignorada. Como você já fala com 100 por dia, mesmo poucos respondendo já enche sua agenda de reuniões — e reunião é onde nasce a venda.",
        resultado:
          "Mensagens enviadas todos os dias e respostas chegando. Cada resposta é uma porta aberta para marcar uma reunião.",
        acoes: [
          "Copie um dos scripts de abordagem prontos (abaixo) e troque o nome e o nicho. Não precisa inventar do zero.",
          "Mande primeiro um elogio verdadeiro ao negócio dele e SÓ depois fale do problema. Ninguém ouve quem não elogiou antes.",
          "Nunca venda na primeira mensagem. Termine sempre com uma pergunta fácil de responder (\"Posso te mostrar uma ideia rápida?\").",
          "Quem respondeu mas não marcou: mande 1 follow-up educado 2 dias depois. A maioria das vendas vem no 2º ou 3º toque."
        ],
        dica:
          "Mande mensagem de manhã cedo ou no fim da tarde: é quando o dono está olhando o celular. Mensagem na hora certa é respondida; na hora errada some no meio das outras.",
        module: "prospecting",
        cta: "Abrir Scripts de Abordagem"
      },
      {
        id: "reuniao-diagnostico",
        n: 6,
        titulo: "Reunião de diagnóstico (a conversa que vende)",
        oque:
          "Reunião de diagnóstico é uma conversa de 20 a 30 minutos (chamada ou pessoalmente) onde você faz perguntas e deixa o dono falar dos problemas dele. Você NÃO chega vendendo: você escuta, entende a dor e só no fim mostra a solução.",
        porque:
          "Quem pergunta, manda. Quando o dono fala em voz alta que perde clientes, ele mesmo se convence de que precisa de ajuda. Aí sua oferta deixa de ser \"gasto\" e vira \"solução pra dor que ele acabou de admitir\". É a etapa que transforma conversa em contrato.",
        resultado:
          "Você conhece os números reais do cliente (quanto cobra, quantos clientes perde) e ele confia em você. Pronto para receber a proposta.",
        acoes: [
          "Use o roteiro de reunião (abaixo): pergunta, escuta, anota. Fale no máximo 30% do tempo — deixe o cliente falar 70%.",
          "Pergunte os números: \"Quanto custa um serviço seu? Quantas pessoas pedem e somem por mês?\" Isso vira a conta da sua proposta.",
          "Repita a dor com as palavras dele: \"Então você perde uns R$ 3.000/mês com gente que pede e não fecha, é isso?\"",
          "Cadastre o cliente no funil do app como \"Reunião feita\" e anote tudo que ele disse — você vai usar na proposta."
        ],
        dica:
          "No fim, pergunte: \"Se eu resolvesse exatamente esse problema, faria diferença pro seu negócio?\" Se ele disser sim, a venda já está 80% feita.",
        module: "pipeline",
        cta: "Abrir Funil / Reunião"
      },
      {
        id: "fechar-cliente",
        n: 7,
        titulo: "Fechar o cliente (apresentar proposta e receber o sim)",
        oque:
          "Fechar é apresentar a proposta com base no que o cliente te contou, lidar com as dúvidas dele (objeções) e combinar o começo. É a hora de transformar a reunião em contrato e em dinheiro entrando na sua conta.",
        porque:
          "Sem fechamento, todo o trabalho anterior não pagou nada. É literalmente o momento em que o seu faturamento sai do zero. Um cliente fechado a R$ 2.000/mês já é R$ 24.000 no ano — e você só precisa de 2 ou 3 pra bater a meta de R$ 5.000/mês.",
        resultado:
          "Contrato fechado, primeiro pagamento combinado e cliente movido para \"Ativo\" no funil. Dinheiro de verdade entrando.",
        acoes: [
          "Apresente a proposta usando os números DELE: \"Você disse que perde R$ 3.000/mês. Por R$ 2.000 eu ataco exatamente isso.\"",
          "Tenha as respostas de objeção prontas (abaixo): \"está caro\", \"vou pensar\", \"já tentei e não deu\". Não improvise na hora.",
          "Crie um motivo real pra decidir agora: \"Pego só 1 cliente do seu nicho por região, pra não atender concorrente seu.\"",
          "Feche o combinado: valor, dia do pagamento e quando começa. Mande por escrito no WhatsApp pra não ficar dúvida."
        ],
        dica:
          "Depois de dizer o preço, FIQUE CALADO. Quem fala primeiro depois do preço, perde. Deixe o silêncio trabalhar a favor do seu sim.",
        module: "pipeline",
        cta: "Abrir Fechamento"
      },
      {
        id: "entregar-manter",
        n: 8,
        titulo: "Entregue resultado e mantenha o cliente pagando",
        oque:
          "Depois de fechar, você entrega o que prometeu e mostra o resultado todo mês. Manter o cliente é mandar um relatório simples: \"esse mês trouxemos X clientes novos, que valem R$ Y\". Cliente que vê resultado não cancela.",
        porque:
          "Aqui mora o dinheiro de verdade. Cliente que fica pagando todo mês é renda recorrente: você não precisa vender de novo pra receber de novo. 5 clientes mantidos a R$ 2.000 = R$ 10.000/mês garantidos. Reter é mais barato e mais lucrativo que conquistar.",
        resultado:
          "Cliente satisfeito, pagando todo mês, e — o melhor — indicando você para outros donos do mesmo nicho. Sua renda vira bola de neve.",
        acoes: [
          "Entregue o combinado e cadastre o cliente como \"Ativo\" no app, com a data de pagamento de cada mês.",
          "No fim de cada mês, mande um relatório curto com o resultado em R$: \"Trouxemos 18 clientes novos, ~R$ 7.200 em vendas.\"",
          "Marque uma conversa rápida por mês pra ouvir o cliente. Cliente ouvido não troca você pelo concorrente mais barato.",
          "Peça indicação quando o resultado vier: \"Conhece outro dono de [clínica] que também ia querer isso?\" É o jeito mais barato de crescer."
        ],
        dica:
          "Comemore o resultado COM o cliente todo mês, mesmo que pequeno. Quem lembra o cliente do quanto está ganhando, nunca é visto como custo — e nunca é cancelado.",
        module: "clients",
        cta: "Abrir Carteira de Clientes"
      }
    ],

    scripts: {
      abordagem: [
        {
          titulo: "Elogio + ideia rápida (Instagram)",
          mensagem:
            "Oi, {{nome}}! Tô seguindo o trabalho de vocês e curti demais. Trabalho ajudando {{nicho}} a encher a agenda com mais clientes todo mês e tive uma ideia rápida pro seu negócio. Posso te mostrar em 2 minutinhos por aqui?"
        },
        {
          titulo: "Foco no problema (WhatsApp)",
          mensagem:
            "Oi, {{nome}}, tudo bem? Vi que vocês são referência em {{nicho}} aqui na região. Uma dúvida rápida: hoje vocês perdem muita gente que pede informação no Direct e some sem fechar? É justamente isso que eu ajudo a resolver. Posso te explicar como?"
        },
        {
          titulo: "Curiosidade curta",
          mensagem:
            "Oi, {{nome}}! Olhei o perfil de vocês e percebi 2 coisas simples que provavelmente estão fazendo perder cliente toda semana. Quer que eu te mande aqui sem compromisso? É rapidinho."
        },
        {
          titulo: "Prova de conhecimento do nicho",
          mensagem:
            "Oi, {{nome}}! Trabalho só com {{nicho}}, então conheço bem o dia a dia de vocês. A maioria perde uns 15 a 20 clientes por mês só por demora em responder. Tenho uma forma de tampar esse vazamento. Topa eu te mostrar?"
        },
        {
          titulo: "Follow-up educado (2 dias depois)",
          mensagem:
            "Oi, {{nome}}! Imagino que a correria tenha engolido minha mensagem (acontece comigo também 😅). Aquela ideia pra trazer mais clientes pra {{nicho}} continua de pé. Quer que eu te mande agora ou prefere a gente marcar 15 min essa semana?"
        }
      ],

      fechamento: [
        {
          titulo: "Como apresentar a proposta",
          conteudo:
            "Comece pelos números que o PRÓPRIO cliente te deu na reunião, nunca pelo seu preço. Exemplo: \"Você me disse que perde uns 15 clientes por mês, e cada um vale uns R$ 200. Isso é R$ 3.000 escorrendo todo mês.\" Aí entre com a solução em uma frase de resultado: \"Meu trabalho é tampar esse vazamento e te trazer esses clientes de volta — a gente combina a parte do Instagram, do WhatsApp e do retorno de quem já é cliente.\" Só DEPOIS diga o preço, sempre comparado ao ganho: \"O investimento é R$ 2.000 por mês, pra recuperar R$ 3.000+. Você fica no lucro desde o primeiro mês.\" Termine com um próximo passo simples: \"Se fizer sentido, a gente já começa essa semana.\""
        },
        {
          titulo: "Como justificar o preço",
          conteudo:
            "Preço alto vira barato quando comparado ao resultado, não ao trabalho. Nunca defenda o preço falando das suas tarefas (\"faço 12 posts, 8 stories...\") — isso vira tabela de mercearia. Defenda pelo retorno: \"R$ 2.000 é menos do que você perde hoje parado. É o salário de uma atendente, só que essa atendente trabalha 24h trazendo cliente.\" Outra comparação que funciona: \"Quanto vale 1 cliente novo seu? R$ 200? Então se eu te trouxer só 10 no mês, já me paguei. Tudo acima disso é lucro seu.\" Transforme o gasto em conta de padaria: o cliente tem que enxergar que dizer não é que está caro."
        },
        {
          titulo: "Como criar urgência (verdadeira)",
          conteudo:
            "Urgência honesta acelera o sim sem pressão chata. Use motivos reais: 1) Exclusividade de região: \"Eu pego só 1 cliente do seu nicho por bairro, pra nunca atender o seu concorrente. Se o salão da esquina fechar comigo antes, eu não posso mais te atender.\" 2) Custo de esperar: \"Cada mês que passa parado é mais ou menos R$ 3.000 que você não recupera. Começar hoje ou em 30 dias é a diferença de R$ 3.000 no seu bolso.\" 3) Agenda: \"Tenho 2 vagas pra começar esse mês; depois disso só no mês que vem.\" Nunca minta sobre escassez — se descobrirem, você perde a confiança e o cliente."
        }
      ],

      objecoes: [
        {
          objecao: "Está caro / não tenho esse dinheiro agora.",
          resposta:
            "Eu entendo. Mas repara: hoje você já perde mais do que isso todo mês com cliente que pede e some. Não é gasto novo, é parar de jogar dinheiro fora. Se em 30 dias eu não trouxer pelo menos o valor que você me paga, a gente reavalia juntos. Você arrisca pouco e pode ganhar muito."
        },
        {
          objecao: "Vou pensar / me manda por escrito que depois eu vejo.",
          resposta:
            "Claro, te mando agora mesmo. Só pra eu entender e te ajudar a decidir: o que ainda ficou na dúvida — é o preço, é se vai funcionar, ou é o momento? Me fala sinceramente que eu já te respondo isso aqui, sem enrolação."
        },
        {
          objecao: "Já tentei marketing/agência antes e não deu certo.",
          resposta:
            "Faz total sentido o pé atrás. Te pergunto: o que fizeram antes — ficaram só postando foto bonita, certo? Foto não traz cliente. Meu foco é diferente: é tampar o vazamento de quem pede informação e some, e fazer cliente antigo voltar. É resultado em agendamento, não em curtida. Te mostro mês a mês quantos clientes a mais entraram."
        },
        {
          objecao: "Eu mesmo cuido do Instagram / minha sobrinha posta pra mim.",
          resposta:
            "Que bom que já tem alguém! Postar é só uma parte pequena. O que dá dinheiro é o que vem depois: responder rápido quem chama, transformar curioso em agendamento e trazer cliente antigo de volta. É aí que eu entro. Sua sobrinha continua postando, e eu cuido da parte que enche a agenda."
        },
        {
          objecao: "Minha agenda já está cheia, não preciso de mais cliente.",
          resposta:
            "Ótimo problema de ter! Então o foco muda: em vez de mais gente, a gente foca em fazer cada cliente gastar mais e voltar mais vezes, e em encher os horários vazios do meio da semana. Mesmo cheio, sempre tem dia fraco e cliente que sumiu. É de lá que eu tiro dinheiro pra você."
        },
        {
          objecao: "Não sei se vai funcionar pro meu tipo de negócio.",
          resposta:
            "Justo. Por isso eu trabalho só com {{nicho}} — conheço os problemas de cor e já vi funcionar em negócios iguais ao seu. Pra tirar o risco do seu lado: a gente começa com o primeiro mês focado em uma coisa só e mensurável. Se o número não aparecer, você viu por si mesmo e não perdeu quase nada."
        }
      ],

      reuniao: {
        roteiro: [
          "Quebre o gelo e elogie algo real do negócio (\"Vi que vocês têm muita avaliação boa, parabéns\"). Deixe o clima leve.",
          "Diga em 1 frase por que está ali e quanto tempo vai levar: \"São uns 20 minutinhos. Quero entender seu negócio antes de te propor qualquer coisa.\"",
          "Faça perguntas e ESCUTE: \"Como os clientes chegam até vocês hoje? Quanto custa um serviço? Quantos pedem informação e somem? Cliente costuma voltar?\"",
          "Repita a dor com as palavras dele e coloque número: \"Então são uns 15 por mês a R$ 200... isso é uns R$ 3.000 escapando, certo?\"",
          "Só agora apresente a solução, ligada à dor que ele admitiu, e mostre o ganho em R$ (não fale ainda em tarefas).",
          "Combine o próximo passo concreto: \"Te mando a proposta hoje e a gente fala amanhã às 15h pra você me dar o sim ou tirar dúvida?\""
        ],
        checklist: [
          "Falei no máximo 30% do tempo e deixei o cliente falar o resto.",
          "Anotei os números reais: preço do serviço, quantos clientes perde, se voltam.",
          "Repeti a dor com as palavras dele e ele confirmou (\"é isso mesmo\").",
          "Conectei minha oferta a um problema que ELE admitiu, não a um que eu inventei.",
          "Saí com data e hora marcadas pro próximo passo (nunca um \"depois a gente vê\")."
        ]
      }
    }
  };

  window.NEXUS_ACADEMY_PRATICO = ACADEMY_PRATICO;
})();
