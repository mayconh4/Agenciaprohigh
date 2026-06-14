/* Aprender — Central de Aprendizado: Modo Prático + Modo Básico + Glossário
   Ensina o usuário leigo e o conduz até o primeiro cliente pagante. */
(function () {
  let TAB = null; // 'pratico' | 'basico' | 'gloss'

  // Botão "Ouvir" (leitura em voz) reutilizável
  function ouvir(kind, id) {
    return '<button class="btn btn-ghost btn-sm tts" data-action="speak" data-kind="' + kind + '" data-id="' + NEXUS.ui.esc(id) + '" data-tip="Ouvir esta explicação em voz" aria-label="Ouvir explicação"><svg><use href="#i-sound"/></svg><span class="tts-lbl">Ouvir</span></button>';
  }

  function tabs(active) {
    const items = [
      { id: 'pratico', label: 'Modo Prático', ico: 'i-target' },
      { id: 'basico', label: 'Modo Básico', ico: 'i-doc' },
      { id: 'gloss', label: 'Glossário', ico: 'i-chart' },
    ];
    return `<div class="tabs">${items.map((t) => `<button class="tab ${t.id === active ? 'active' : ''}" data-action="setTab" data-tab="${t.id}">${NEXUS.ui.icon(t.ico)} ${t.label}</button>`).join('')}</div>`;
  }

  /* ---------------- MODO PRÁTICO ---------------- */
  function renderPratico(ctx) {
    const { ui, academy, firstClient: fc, nextAction: na, state } = ctx;
    const P = academy.pratico;
    const done = state.learn.stepsDone || [];
    const prog = P.etapas.length ? Math.round((done.length / P.etapas.length) * 100) : 0;

    const fcWidget = `<div class="card" style="margin-bottom:14px">
      <div class="card-head"><div class="card-ico">${ui.icon('i-money')}</div>
        <div><h3>${ui.esc(P.titulo)}</h3><div class="sub">${ui.esc(P.subtitulo || '')}</div></div>
        <div class="right"><span class="badge ${fc.conquered ? 'green' : 'amber'}">${fc.conquered ? ui.icon('i-check') + ' 1º cliente conquistado' : 'Primeiro cliente: pendente'}</span></div>
      </div>
      <div class="fc-grid">
        <div class="fc-cell"><div class="fc-lbl">Faturamento atual</div><div class="fc-val">${ui.brlK(fc.faturamento)}</div><div class="muted" style="font-size:11px">meta ${ui.brlK(fc.metaBRL)}</div></div>
        <div class="fc-cell"><div class="fc-lbl">Clientes fechados</div><div class="fc-val">${fc.clientes}</div></div>
        <div class="fc-cell"><div class="fc-lbl">Abordagens hoje</div><div class="fc-val">${fc.abordagensHoje}<small>/${fc.metaAbordagens}</small></div></div>
        <div class="fc-cell"><div class="fc-lbl">Reuniões hoje</div><div class="fc-val">${fc.reunioesHoje}</div></div>
        <div class="fc-cell"><div class="fc-lbl">Taxa de resposta</div><div class="fc-val">${ui.pct(fc.taxaResposta, 0)}</div></div>
      </div>
      <div style="margin-top:14px"><div class="progress-head"><span>Rumo à meta de faturamento</span><span class="mono">${fc.pct}%</span></div>${ui.bar(fc.pct, 'mint')}</div>
    </div>`;

    const nextStep = `<div class="card nextstep" style="margin-bottom:14px">
      <div class="ns-ic">${ui.icon('i-bolt')}</div>
      <div style="flex:1"><div class="tl-phase">SEU PRÓXIMO PASSO</div><h3 style="font-family:'Outfit';font-size:17px;margin:2px 0 4px">${ui.esc(na.title)}</h3><div class="muted" style="font-size:12.5px">${ui.esc(na.why)}</div></div>
      <button class="btn btn-primary" data-go="${na.module}" data-action="go">${ui.esc(na.cta)} ${ui.icon('i-arrow')}</button>
    </div>`;

    const steps = P.etapas.map((e, i) => {
      const isDone = done.includes(e.id);
      const locked = i > 0 && !done.includes(P.etapas[i - 1].id) && !isDone;
      const current = !isDone && !locked;
      const acoes = (e.acoes || []).map((a) => `<li>${ui.esc(a)}</li>`).join('');
      return `<div class="step ${isDone ? 'done' : ''} ${locked ? 'locked' : ''} ${current ? 'current' : ''}">
        <div class="step-n">${isDone ? ui.icon('i-check') : locked ? ui.icon('i-clock') : e.n}</div>
        <div class="step-body">
          <div class="step-head"><h4>${ui.esc(e.titulo)}</h4>${current ? '<span class="badge violet">comece aqui</span>' : ''}${locked ? '<span class="badge">conclua a etapa anterior</span>' : ''}</div>
          <p class="step-oque">${ui.esc(e.oque)}</p>
          <div class="step-meta"><b>Por que:</b> ${ui.esc(e.porque)}</div>
          <div class="step-meta"><b>Resultado esperado:</b> ${ui.esc(e.resultado)}</div>
          ${acoes ? `<ul class="step-acoes">${acoes}</ul>` : ''}
          ${e.dica ? `<div class="step-dica">${ui.icon('i-spark')} ${ui.esc(e.dica)}</div>` : ''}
          <div class="step-actions">
            ${locked ? `<button class="btn btn-ghost btn-sm" disabled>${ui.icon('i-arrow')} ${ui.esc(e.cta || 'Abrir')}</button>`
              : `<button class="btn ${current ? 'btn-primary' : 'btn-ghost'} btn-sm" data-go="${e.module}" data-action="go">${ui.icon('i-arrow')} ${ui.esc(e.cta || 'Abrir módulo')}</button>`}
            <button class="btn btn-sm ${isDone ? 'btn-ghost' : 'btn-cyan'}" data-action="toggleStep" data-id="${e.id}">${isDone ? 'Concluída ✓' : ui.icon('i-check') + ' Marcar como feita'}</button>
            ${ouvir('step', e.id)}
          </div>
        </div>
      </div>`;
    }).join('');

    return `${fcWidget}${nextStep}
      <div class="card" style="margin-bottom:14px">
        <div class="progress-head" style="margin-bottom:10px"><span class="section-title" style="margin:0">Etapas até o primeiro cliente</span><span class="badge ${prog >= 100 ? 'green' : 'violet'}">${done.length}/${P.etapas.length}</span></div>
        ${ui.bar(prog)}
      </div>
      <div class="steps">${steps}</div>
      ${renderScripts(ctx)}`;
  }

  function renderScripts(ctx) {
    const { ui, academy } = ctx;
    const s = (academy.pratico && academy.pratico.scripts) || {};
    if (!(s.abordagem || []).length && !(s.fechamento || []).length && !(s.objecoes || []).length) return '';
    const abord = (s.abordagem || []).map((m, i) => `<div class="script-card"><div class="sc-head"><b>${ui.esc(m.titulo)}</b><button class="btn btn-sm btn-ghost" data-action="copyScript" data-kind="abordagem" data-i="${i}">${ui.icon('i-doc')} Copiar</button></div><p>${ui.esc(m.mensagem)}</p></div>`).join('');
    const fech = (s.fechamento || []).map((m) => `<details class="acc"><summary>${ui.esc(m.titulo)}</summary><p>${ui.md(m.conteudo)}</p></details>`).join('');
    const obj = (s.objecoes || []).map((o) => `<details class="acc"><summary>${ui.icon('i-x')} "${ui.esc(o.objecao)}"</summary><p>${ui.md(o.resposta)}</p></details>`).join('');
    const reu = s.reuniao || {};
    const roteiro = (reu.roteiro || []).map((r) => `<li>${ui.esc(r)}</li>`).join('');
    const check = (reu.checklist || []).map((r) => `<li>${ui.icon('i-check')} ${ui.esc(r)}</li>`).join('');
    return `<div class="section-title" style="margin-top:24px">Biblioteca de execução <span class="line"></span><span class="muted" style="font-size:11px">copie e use hoje</span></div>
      <div class="grid cols-2" style="grid-template-columns:1fr 1fr;align-items:start">
        <div class="card"><div class="card-head"><div class="card-ico">${ui.icon('i-wpp')}</div><div><h3>Mensagens de abordagem</h3><div class="sub">Primeiro contato (DM/WhatsApp)</div></div></div>${abord || '<div class="muted">—</div>'}</div>
        <div class="card"><div class="card-head"><div class="card-ico">${ui.icon('i-money')}</div><div><h3>Fechamento & objeções</h3><div class="sub">Transforme interesse em contrato</div></div></div>${fech}${obj}</div>
      </div>
      ${(roteiro || check) ? `<div class="card" style="margin-top:14px"><div class="card-head"><div class="card-ico">${ui.icon('i-doc')}</div><div><h3>Roteiro da reunião</h3></div></div><div class="grid cols-2" style="grid-template-columns:1.3fr 1fr"><ol class="step-acoes">${roteiro}</ol><ul class="loss" style="list-style:none">${check}</ul></div></div>` : ''}`;
  }

  /* ---------------- MODO BÁSICO ---------------- */
  function renderBasico(ctx) {
    const { ui, academy, state } = ctx;
    const B = academy.basico;
    const mods = B.modulos || [];
    const read = state.learn.conceptsRead || [];
    const prog = mods.length ? Math.round((read.length / mods.length) * 100) : 0;

    const intro = B.intro || {};
    const cards = mods.map((m) => {
      const isRead = read.includes(m.id);
      const extra = (m.extra || []).map((x) => `<div class="concept-extra"><b>${ui.esc(x.rotulo)}:</b> ${ui.esc(x.texto)}</div>`).join('');
      return `<div class="concept ${isRead ? 'read' : ''}">
        <div class="concept-head"><div class="card-ico">${ui.icon(m.icon || 'i-spark')}</div><h3>${ui.esc(m.titulo)}</h3>${isRead ? `<span class="badge green" style="margin-left:auto">${ui.icon('i-check')} entendido</span>` : ''}</div>
        <div class="concept-row"><span class="cr-tag">O que é</span><p>${ui.esc(m.oque)}</p></div>
        <div class="concept-row"><span class="cr-tag good">Por que importa</span><p>${ui.esc(m.porque)}</p></div>
        ${m.erro ? `<div class="concept-row"><span class="cr-tag bad">Erro comum</span><p>${ui.esc(m.erro)}</p></div>` : ''}
        ${m.como ? `<div class="concept-row"><span class="cr-tag">Como aplicar</span><p>${ui.esc(m.como)}</p></div>` : ''}
        ${m.exemplo ? `<div class="concept-ex">${ui.icon('i-spark')} <span><b>Exemplo real:</b> ${ui.esc(m.exemplo)}</span></div>` : ''}
        ${extra}
        <div class="concept-actions">
          ${ouvir('concept', m.id)}
          <button class="btn btn-sm ${isRead ? 'btn-ghost' : 'btn-primary'}" data-action="markConcept" data-id="${m.id}">${isRead ? 'Marcar como não lido' : ui.icon('i-check') + ' Entendi'}</button>
        </div>
      </div>`;
    }).join('');

    return `<div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="flex:1;min-width:220px"><h3 style="font-family:'Outfit';font-size:16px">${ui.esc(intro.titulo || 'Modo Básico')}</h3><p class="muted" style="font-size:13px;margin-top:4px">${ui.esc(intro.basico || intro.subtitulo || '')}</p></div>
        <div style="min-width:200px;flex:1"><div class="progress-head"><span>Conceitos entendidos</span><span class="mono">${read.length}/${mods.length}</span></div>${ui.bar(prog)}</div>
      </div>
      <div class="concept-grid">${cards || `<div class="empty">${ui.icon('i-doc')}<div>Conteúdo carregando…</div></div>`}</div>`;
  }

  /* ---------------- GLOSSÁRIO ---------------- */
  function renderGloss(ctx) {
    const { ui, academy } = ctx;
    const g = (academy.basico && academy.basico.glossario) || [];
    const cards = g.map((m) => `<div class="gloss-card" data-search="${ui.esc((m.sigla + ' ' + (m.nome || '')).toLowerCase())}">
      <div class="gloss-top"><span class="gloss-sigla">${ui.esc(m.sigla)}</span><span class="muted" style="font-size:11.5px">${ui.esc(m.nome || '')}</span></div>
      <p class="gloss-oq">${ui.esc(m.oque)}</p>
      ${m.exemplo ? `<div class="gloss-ex">${ui.icon('i-spark')} ${ui.esc(m.exemplo)}</div>` : ''}
      <div class="gloss-meta">
        ${m.calculo ? `<div><b>Como calcular:</b> ${ui.esc(m.calculo)}</div>` : ''}
        ${m.leitura ? `<div><b>Número bom/ruim:</b> ${ui.esc(m.leitura)}</div>` : ''}
        ${m.melhorar ? `<div><b>Como melhorar:</b> ${ui.esc(m.melhorar)}</div>` : ''}
      </div>
      <div class="gloss-ouvir">${ouvir('gloss', m.sigla)}</div>
    </div>`).join('');
    return `<div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <div style="flex:1;min-width:220px"><h3 style="font-family:'Outfit';font-size:16px">Glossário de marketing e vendas</h3><p class="muted" style="font-size:13px;margin-top:4px">Toda sigla explicada do jeito simples, com exemplo. ${g.length} termos.</p></div>
        <input class="input" id="glossSearch" placeholder="Buscar termo (ex.: CPA, ROI, churn...)" style="max-width:280px">
      </div>
      <div class="gloss-grid" id="glossGrid">${cards || `<div class="empty">${ui.icon('i-chart')}<div>Glossário carregando…</div></div>`}</div>`;
  }

  NEXUS.registerModule({
    id: 'academy', label: 'Aprender', icon: 'i-doc', phase: '',
    render(ctx) {
      if (NEXUS.stopSpeak) NEXUS.stopSpeak();
      const tab = TAB || (ctx.state.learn.mode === 'basico' ? 'basico' : 'pratico');
      TAB = tab;
      let body = '';
      if (tab === 'basico') body = renderBasico(ctx);
      else if (tab === 'gloss') body = renderGloss(ctx);
      else body = renderPratico(ctx);
      return `<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px">
          ${tabs(tab)}
          <button class="btn btn-ghost btn-sm" data-action="askAssistant" style="margin-left:auto">${ctx.ui.icon('i-bot')} Perguntar ao assistente</button>
          <button class="btn btn-ghost btn-sm" data-action="showTour">Rever apresentação</button>
        </div>
        <div class="fade-in">${body}</div>`;
    },
    mount(root, ctx) {
      const inp = root.querySelector('#glossSearch');
      if (inp) inp.addEventListener('input', () => {
        const q = inp.value.trim().toLowerCase();
        root.querySelectorAll('.gloss-card').forEach((c) => { c.style.display = !q || c.dataset.search.includes(q) ? '' : 'none'; });
      });
    },
    actions: {
      setTab(ctx, el) { TAB = el.dataset.tab; ctx.store.update((s) => { s.learn.mode = TAB === 'basico' ? 'basico' : s.learn.mode; }); },
      markConcept(ctx, el) {
        const id = el.dataset.id;
        ctx.store.update((s) => { const a = s.learn.conceptsRead; const i = a.indexOf(id); if (i === -1) a.push(id); else a.splice(i, 1); });
      },
      toggleStep(ctx, el) {
        const id = el.dataset.id;
        let nowDone = false;
        ctx.store.update((s) => { const a = s.learn.stepsDone; const i = a.indexOf(id); if (i === -1) { a.push(id); nowDone = true; } else a.splice(i, 1); });
        if (nowDone) ctx.ui.toast('Etapa concluída! Próximo passo liberado 🚀');
      },
      copyScript(ctx, el) {
        const kind = el.dataset.kind, i = Number(el.dataset.i);
        const arr = (ctx.academy.pratico.scripts || {})[kind] || [];
        const txt = arr[i] ? (arr[i].mensagem || arr[i].conteudo || '') : '';
        if (navigator.clipboard) navigator.clipboard.writeText(txt);
        ctx.ui.toast('Mensagem copiada');
      },
      speak(ctx, el) {
        const kind = el.dataset.kind, id = el.dataset.id;
        const join = (arr) => arr.filter(Boolean).join(' ');
        let text = '';
        if (kind === 'concept') {
          const m = (ctx.academy.basico.modulos || []).find((x) => x.id === id);
          if (m) text = join([m.titulo + '.', 'O que é:', m.oque, 'Por que importa:', m.porque, m.erro ? ('Erro comum: ' + m.erro) : '', m.como ? ('Como aplicar: ' + m.como) : '', m.exemplo ? ('Exemplo: ' + m.exemplo) : '']);
        } else if (kind === 'gloss') {
          const g = (ctx.academy.basico.glossario || []).find((x) => x.sigla === id);
          if (g) text = join([g.sigla + '.', (g.nome || '') + '.', g.oque, g.exemplo ? ('Exemplo: ' + g.exemplo) : '', g.calculo ? ('Como calcular: ' + g.calculo) : '', g.melhorar ? ('Como melhorar: ' + g.melhorar) : '']);
        } else if (kind === 'step') {
          const s = (ctx.academy.pratico.etapas || []).find((x) => x.id === id);
          if (s) text = join([s.titulo + '.', s.oque, 'Por que:', s.porque, 'Resultado esperado:', s.resultado, s.dica ? ('Dica: ' + s.dica) : '']);
        }
        NEXUS.speak(text, el);
      },
      askAssistant() { NEXUS.copilot.toggle(); },
    },
  });
})();
