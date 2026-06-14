# NEXUS — Agency OS

**O sistema operacional para construir e gerir uma agência vertical de IA.**
Um produto SaaS que operacionaliza o playbook de 12 fases — do posicionamento de nicho à liberdade operacional — em uma única plataforma com IA embutida.

> Nicho padrão da demo: **Clínicas de Estética**. Tudo é configurável.

## O que tem dentro

| Módulo | Playbook | O que faz |
|---|---|---|
| **Painel** | Fase 12 | KPIs em tempo real (MRR, CAC, LTV:CAC, churn, ROI, ticket, tempo de entrega), funil do dia, forecast, alertas e **análise por IA**. |
| **Nicho & Oferta** | Fases 1, 2, 7 | Seleção de nicho, economia do nicho (streams, dores, *onde perde dinheiro*), scorer de 4 critérios e **gerador de oferta produtizada com IA**. |
| **Prospecção** | Fases 4, 8 | Meta diária (100 → 20 → 5 → 1), base de leads e **diagnóstico + mensagem de abordagem gerados por IA**. |
| **Funil** | Fase 5 | CRM Kanban (ADS → Landing → Form → Reunião → Fechamento → Ganho) com drag-and-drop e forecast ponderado. |
| **Clientes & CS** | Fase 6 | Carteira com **1 Account Manager por cliente**, health score, risco de churn e renovação. |
| **Time & Operação** | Fases 9–12 | Departamentos, heads e ciclos de contratação. |
| **Playbook** | Fases 1–12 | Roteiro interativo das 12 fases com progresso e deep-link para cada módulo. |
| **Copiloto IA** | — | Assistente do fundador, ancorado no playbook + nos números atuais da operação. |

## Como rodar

Requisitos: **Node.js 18+** (sem `npm install` — zero dependências).

```bash
cd nexus
node server.js
# abre em http://localhost:4178
```

### Modo demo (padrão)
Sem nenhuma configuração, a IA roda em **modo demo**: respostas locais inteligentes e específicas do nicho. O app é 100% navegável.

### IA real (Claude)
Para ativar a IA de verdade:

```bash
cp .env.example .env
# edite .env e defina ANTHROPIC_API_KEY=sk-ant-...
node server.js
```

O `server.js` faz um proxy fino para a Messages API da Anthropic. Modelo padrão: `claude-sonnet-4-6` (configurável via `NEXUS_MODEL` — use `claude-opus-4-8` para máxima qualidade ou `claude-haiku-4-5-20251001` para velocidade/custo).

## Arquitetura

- **Front-end** vanilla (sem build): núcleo reativo + módulos plugáveis em `js/modules/*`.
- **Estado** persistido em `localStorage` (`nexus.os.v1`). Botão *Restaurar demo* nas configurações.
- **Dados** ricos do nicho em `js/data/*` (seed, nichos, prompts de IA, copy).
- **Back-end** `server.js`: servidor estático + `/api/ai` (proxy Claude) + `/api/status`.

```
nexus/
├── index.html
├── server.js            # estático + proxy de IA (zero-dep)
├── css/styles.css       # design system Liquid Glass
└── js/
    ├── core.js          # estado, KPIs, roteamento, UI
    ├── ai.js            # cliente de IA (real + demo)
    ├── data/            # seed, niches, prompts, content
    └── modules/         # dashboard, studio, prospecting, pipeline, clients, team, playbook, copilot
```
