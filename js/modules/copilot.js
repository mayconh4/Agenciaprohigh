/* Copiloto IA — assistente do fundador, ancorado no playbook */
(function () {
  const ui = NEXUS.ui;
  let history = [];
  let busy = false;

  const CHIPS = [
    'Onde estou perdendo dinheiro?',
    'Como reduzir meu churn?',
    'Devo subir o ticket?',
    'Qual minha próxima fase?',
    'Como prospectar melhor?',
  ];

  function bodyEl() { return document.getElementById('copilotBody'); }

  function context() {
    const s = NEXUS.store.get();
    const k = NEXUS.computeKpis(s);
    const done = (s.playbookDone || []).length;
    const phases = (NEXUS.content.playbook || []);
    const cur = phases.find((p) => !(s.playbookDone || []).includes(p.id));
    return [
      `Agência: ${s.agency.name} · Nicho: ${s.agency.niche}`,
      `Oferta: ${s.offer.name} a ${ui.brl(s.offer.priceBRL)}/mês — "${s.offer.promise}"`,
      `MRR ${ui.brl(k.mrr)} · ticket ${ui.brl(k.ticket)} · CAC ${ui.brl(k.cac)} · LTV:CAC ${k.ltvCac.toFixed(1)}x · churn ${ui.pct(k.churnPct)} · ROI ${k.roi.toFixed(1)}x · taxa de fechamento ${ui.pct(k.closeRatePct, 0)}`,
      `Leads na base: ${s.leads.length} · negócios no funil: ${s.deals.filter((d) => !['ganho', 'perdido'].includes(d.stage)).length} · clientes: ${s.clients.length} (${s.clients.filter((c) => c.churnRisk === 'alto').length} em risco)`,
      `Playbook: ${done}/${phases.length} fases concluídas. Fase atual: ${cur ? cur.phase + ' — ' + cur.title : 'todas concluídas'}.`,
    ].join('\n');
  }

  function renderChips() {
    return `<div class="chips">${CHIPS.map((c) => `<button class="chip" data-chip="${ui.esc(c)}">${ui.esc(c)}</button>`).join('')}</div>`;
  }

  function paint() {
    const el = bodyEl();
    const welcome = `<div class="msg bot">Eu sou o <strong>Copiloto NEXUS</strong>. Conheço o playbook das 12 fases e os números da sua operação. Me pergunte onde focar — ou escolha:</div>${renderChips()}`;
    const msgs = history.map((m) => `<div class="msg ${m.role === 'user' ? 'me' : 'bot'}">${m.role === 'user' ? ui.esc(m.content) : ui.md(m.content)}</div>`).join('');
    el.innerHTML = welcome + msgs + (busy ? `<div class="msg bot typing"><i></i><i></i><i></i></div>` : '');
    el.scrollTop = el.scrollHeight;
  }

  async function ask(text) {
    text = (text || '').trim();
    if (!text || busy) return;
    history.push({ role: 'user', content: text });
    busy = true; paint();
    const reply = await NEXUS.ai.chat(history.slice(), context());
    busy = false;
    history.push({ role: 'assistant', content: reply });
    paint();
  }

  NEXUS.copilot = {
    init() {
      paint();
      const form = document.getElementById('copilotForm');
      if (form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inp = document.getElementById('copilotText');
        const v = inp.value; inp.value = '';
        ask(v);
      });
    },
    toggle() {
      const c = document.getElementById('copilot');
      const fab = document.getElementById('copilotFab');
      const open = c.classList.toggle('open');
      c.setAttribute('aria-hidden', open ? 'false' : 'true');
      fab.classList.toggle('hide', open);
      if (open) { paint(); setTimeout(() => { const i = document.getElementById('copilotText'); if (i) i.focus(); }, 150); }
    },
    ask(text) {
      const c = document.getElementById('copilot');
      if (!c.classList.contains('open')) this.toggle();
      ask(text);
    },
  };
})();
