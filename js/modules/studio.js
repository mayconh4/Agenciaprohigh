/* Nicho & Oferta — posicionamento e oferta fechada (Fases 1, 2, 7) */
(function () {
  const CRIT = [
    { key: 'dorCara', label: 'Dor cara', hint: 'Perde dinheiro com o problema?' },
    { key: 'ticketAlto', label: 'Ticket alto', hint: 'Paga R$2.000+/mês?' },
    { key: 'mercadoGrande', label: 'Mercado grande', hint: 'Milhares de clientes?' },
    { key: 'recorrencia', label: 'Recorrência', hint: 'Precisa sempre?' },
  ];

  NEXUS.registerModule({
    id: 'studio', label: 'Nicho & Oferta', icon: 'i-target', phase: 'F1·2',
    render(ctx) {
      const { niche: n, ui, state, niches } = ctx;
      const score = CRIT.reduce((a, c) => a + ((n.criteria[c.key] || {}).score || 0), 0);

      const cards = niches.map((x) => `
        <button class="niche-card ${x.id === state.nicheId ? 'active' : ''}" data-action="selectNiche" data-id="${x.id}">
          <span class="nc-check">${ui.icon('i-check')}</span>
          <div class="nc-ic">${ui.icon(x.icon || 'i-target')}</div>
          <h4>${ui.esc(x.name)}</h4><p>${ui.esc(x.summary)}</p>
        </button>`).join('');

      const streams = (n.revenueStreams || []).map((s) => `
        <li>${ui.icon('i-money')}<div><div class="strong">${ui.esc(s.name)}</div><div class="muted" style="font-size:11px">margem ~${s.marginPct}%</div></div>
        <span class="s-tick">${ui.brl(s.avgTicketBRL)}</span></li>`).join('');

      const crit = CRIT.map((c) => {
        const o = n.criteria[c.key] || { score: 0, why: '' };
        return `<div class="crit">
          <div class="c-name">${c.label}<small>${c.hint}</small></div>
          ${ui.bar(o.score * 10, o.score >= 7 ? 'mint' : o.score >= 5 ? 'amber' : 'red')}
          <div class="c-score">${o.score}</div>
        </div>`;
      }).join('');

      const loss = (n.whereTheyLoseMoney || []).map((l) => `<li>${ui.icon('i-x')}<span>${ui.esc(l)}</span></li>`).join('');
      const bench = (n.benchmarks || []).map((b) => `<div class="kpi" style="padding:14px"><div class="k-label">${ui.esc(b.metric)}</div><div class="k-val" style="font-size:21px">${ui.esc(b.value)}</div><div class="muted" style="font-size:11px;margin-top:4px">${ui.esc(b.note)}</div></div>`).join('');
      const o = state.offer;
      const deliver = (o.deliverables || []).map((d) => `<li>${ui.icon('i-check')}<span>${ui.esc(d)}</span></li>`).join('');

      return `
      <div class="section-title">Escolha o nicho vertical <span class="line"></span><span class="badge">Especialize-se em 1</span></div>
      <div class="niche-grid" style="margin-bottom:18px">${cards}</div>

      <div class="grid cols-2" style="grid-template-columns:1.1fr 1fr;margin-bottom:14px">
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon(n.icon || 'i-target')}</div><div><h3>${ui.esc(n.name)}</h3><div class="sub">Como o nicho ganha dinheiro</div></div>
            <div class="right"><span class="badge ${score >= 28 ? 'green' : score >= 22 ? 'violet' : 'amber'}">Score ${score}/40</span></div></div>
          <p class="muted" style="font-size:13px;line-height:1.6;margin-bottom:14px">${ui.esc(n.howTheyMakeMoney)}</p>
          <ul class="streams">${streams}</ul>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon('i-target')}</div><div><h3>Critérios do nicho</h3><div class="sub">Vale a pena atacar?</div></div></div>
          <div class="criteria">${crit}</div>
        </div>
      </div>

      <div class="grid cols-2" style="grid-template-columns:1fr 1fr;margin-bottom:14px">
        <div class="card">
          <div class="card-head"><div class="card-ico" style="background:rgba(251,113,133,.14)"><span style="color:var(--red)">${ui.icon('i-money')}</span></div><div><h3>Onde perde dinheiro</h3><div class="sub">Sua oferta resolve isso</div></div></div>
          <ul class="loss">${loss}</ul>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon('i-chart')}</div><div><h3>Benchmarks do setor</h3></div></div>
          <div class="grid cols-2">${bench}</div>
        </div>
      </div>

      <div class="section-title">Oferta fechada <span class="line"></span><span class="muted" style="font-size:11px">Não venda serviço. Venda solução financeira.</span></div>
      <div class="card offer-card">
        <div class="card-head">
          <div><div class="tl-phase">OFERTA PRODUTIZADA</div><h3 style="font-size:18px">${ui.esc(o.name)}</h3><div class="sub" style="margin-top:4px">${ui.esc(o.positioning)}</div></div>
          <div class="right" style="flex-direction:column;align-items:flex-end">
            <div class="offer-price">${ui.brl(o.priceBRL)}<span style="font-size:14px;-webkit-text-fill-color:var(--txt-3)">/mês</span></div>
          </div>
        </div>
        <div class="grid cols-2" style="grid-template-columns:1.2fr 1fr;align-items:start">
          <div>
            <div class="badge violet" style="margin-bottom:12px">${ui.icon('i-bolt')} ${ui.esc(o.promise)}</div>
            <ul class="deliver">${deliver}</ul>
          </div>
          <div>
            <div id="offerAiOut" class="ai-out" style="display:none;margin-bottom:12px"></div>
            <button class="btn btn-primary" style="width:100%;justify-content:center;margin-bottom:8px" data-action="genOffer" data-tip="A IA monta uma oferta pronta para vender: o que entregar, por quanto e como posicionar.">${ui.icon('i-spark')} Gerar oferta com IA</button>
            <button class="btn btn-ghost" style="width:100%;justify-content:center;margin-bottom:8px" data-action="applySuggested">Usar sugestão do nicho</button>
            <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:center" data-action="editOffer">Editar oferta</button>
          </div>
        </div>
      </div>`;
    },
    actions: {
      selectNiche(ctx, el) {
        const id = el.dataset.id;
        const n = ctx.niches.find((x) => x.id === id);
        ctx.store.update((s) => { s.nicheId = id; if (n) s.agency.niche = n.name; });
        ctx.ui.toast('Nicho: ' + (n ? n.name : id));
      },
      applySuggested(ctx) {
        ctx.store.update((s) => { const n = ctx.niches.find((x) => x.id === s.nicheId); if (n && n.suggestedOffer) s.offer = JSON.parse(JSON.stringify(n.suggestedOffer)); });
        ctx.ui.toast('Oferta sugerida aplicada');
      },
      async genOffer(ctx, el) {
        const { ui, niche: n } = ctx;
        const box = document.getElementById('offerAiOut');
        box.style.display = 'block';
        box.innerHTML = `<div class="ai-tag">${ui.icon('i-spark')} ${ctx.ai.live ? 'Claude criando oferta…' : 'Modo demo'}</div><div class="skeleton" style="width:92%"></div><div class="skeleton" style="width:85%"></div>`;
        el.disabled = true;
        const prompt = `Crie uma OFERTA FECHADA/produtizada para o nicho "${n.name}". Contexto — onde perdem dinheiro: ${(n.whereTheyLoseMoney || []).join('; ')}. Streams: ${(n.revenueStreams || []).map((s) => s.name).join(', ')}. Devolva: nome da oferta, promessa financeira em 1 linha, 6 entregáveis, faixa de preço mensal e 1 frase de posicionamento (vendo solução financeira, não serviço).`;
        const text = await ctx.ai.run('offer', { niche: n.name }, prompt);
        box.innerHTML = `<div class="ai-tag">${ui.icon('i-spark')} ${ctx.ai.live ? 'Claude · ' + ctx.ai.model : 'Sugestão (modo demo)'}</div>${ui.md(text)}`;
        el.disabled = false;
      },
      editOffer(ctx) {
        const o = ctx.state.offer, ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>Editar oferta</h2><p>Sua oferta produtizada</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div class="field"><label>Nome</label><input class="input" name="name" value="${ui.esc(o.name)}"></div>
          <div class="field"><label>Promessa (resultado financeiro)</label><input class="input" name="promise" value="${ui.esc(o.promise)}"></div>
          <div class="row-2"><div class="field"><label>Preço mensal (R$)</label><input class="input" name="priceBRL" type="number" value="${o.priceBRL}"></div>
          <div class="field"><label>Posicionamento</label><input class="input" name="positioning" value="${ui.esc(o.positioning)}"></div></div>
          <div class="field"><label>Entregáveis (1 por linha)</label><textarea class="input" name="deliverables">${ui.esc((o.deliverables || []).join('\n'))}</textarea></div>
          <button class="btn btn-primary" data-action="saveOffer">${ui.icon('i-check')} Salvar oferta</button>`);
      },
      saveOffer(ctx) {
        const v = ctx.ui.modalForm();
        ctx.store.update((s) => {
          s.offer = {
            name: v.name || s.offer.name, promise: v.promise, positioning: v.positioning,
            priceBRL: Number(v.priceBRL) || s.offer.priceBRL,
            deliverables: (v.deliverables || '').split('\n').map((x) => x.trim()).filter(Boolean),
          };
        });
        ctx.ui.closeModal(); ctx.ui.toast('Oferta atualizada');
      },
    },
  });
})();
