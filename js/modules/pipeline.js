/* Funil — pipeline/CRM high-ticket (Fase 5) */
(function () {
  const STAGES = [
    { id: 'ads', label: 'ADS', color: 'var(--violet)' },
    { id: 'landing', label: 'Landing', color: 'var(--indigo)' },
    { id: 'form', label: 'Formulário', color: 'var(--cyan)' },
    { id: 'reuniao', label: 'Reunião', color: 'var(--amber)' },
    { id: 'fechamento', label: 'Fechamento', color: 'var(--pink)' },
    { id: 'ganho', label: 'Ganho', color: 'var(--mint)' },
  ];
  const ALL = STAGES.concat([{ id: 'perdido', label: 'Perdido', color: 'var(--red)' }]);
  const dealById = (ctx, id) => ctx.state.deals.find((d) => d.id === id);

  NEXUS.registerModule({
    id: 'pipeline', label: 'Funil', icon: 'i-funnel', phase: 'F5',
    render(ctx) {
      const { ui, state } = ctx;
      const deals = state.deals;
      const open = deals.filter((d) => !['ganho', 'perdido'].includes(d.stage));
      const openVal = open.reduce((a, d) => a + d.valueBRL, 0);
      const forecast = open.reduce((a, d) => a + d.valueBRL * d.probability / 100, 0);
      const won = deals.filter((d) => d.stage === 'ganho');

      const cols = STAGES.map((st) => {
        const items = deals.filter((d) => d.stage === st.id);
        const val = items.reduce((a, d) => a + d.valueBRL, 0);
        const cards = items.map((d) => {
          const lead = state.leads.find((l) => l.id === d.leadId);
          return `<div class="deal" draggable="true" data-id="${d.id}" data-action="editDeal">
            <h5>${ui.esc(d.name)}</h5>
            <div class="d-val">${ui.brlK(d.valueBRL)}<span style="font-size:11px;color:var(--txt-3)">/mês</span></div>
            <div class="muted" style="font-size:11px;margin-top:5px">${ui.esc(d.nextAction || '')}</div>
            <div class="d-meta"><span class="d-owner"><span class="mini-av ${ui.avClass(d.owner)}">${ui.initials(d.owner)}</span>${ui.esc(d.owner)}</span><span>${d.probability}%</span></div>
          </div>`;
        }).join('') || `<div class="muted" style="font-size:11.5px;padding:6px 2px">—</div>`;
        return `<div class="kcol" data-stage="${st.id}">
          <div class="kcol-head"><span class="kc-bar" style="background:${st.color}"></span>${st.label}<span class="kc-count">${items.length} · ${ui.brlK(val)}</span></div>
          ${cards}
        </div>`;
      }).join('');

      return `
      <div class="grid cols-4" style="margin-bottom:14px">
        ${ui.kpiTile({ label: 'Em aberto', ico: 'i-funnel', val: ui.brlK(openVal), sub: '/mês' })}
        ${ui.kpiTile({ label: 'Forecast ponderado', ico: 'i-bolt', val: ui.brlK(forecast), sub: '/mês' })}
        ${ui.kpiTile({ label: 'Negócios abertos', ico: 'i-doc', val: open.length })}
        ${ui.kpiTile({ label: 'Ganhos', ico: 'i-check', val: won.length, sub: ui.brlK(won.reduce((a, d) => a + d.valueBRL, 0)) })}
      </div>
      <div class="card">
        <div class="card-head"><div class="card-ico">${ui.icon('i-funnel')}</div><div><h3>Pipeline</h3><div class="sub">Arraste os cards entre os estágios</div></div>
          <div class="right"><button class="btn btn-primary btn-sm" data-action="addDeal">${ui.icon('i-plus')} Novo negócio</button></div></div>
        <div class="kanban" id="kanban">${cols}</div>
      </div>`;
    },
    mount(root, ctx) {
      let dragId = null;
      root.querySelectorAll('.deal').forEach((el) => {
        el.addEventListener('dragstart', (e) => { dragId = el.dataset.id; el.classList.add('drag'); e.dataTransfer.effectAllowed = 'move'; });
        el.addEventListener('dragend', () => el.classList.remove('drag'));
      });
      root.querySelectorAll('.kcol').forEach((col) => {
        col.addEventListener('dragover', (e) => { e.preventDefault(); col.classList.add('drop-hint'); });
        col.addEventListener('dragleave', () => col.classList.remove('drop-hint'));
        col.addEventListener('drop', (e) => {
          e.preventDefault(); col.classList.remove('drop-hint');
          const stage = col.dataset.stage; if (!dragId) return;
          ctx.store.update((s) => {
            const d = s.deals.find((x) => x.id === dragId); if (!d) return;
            d.stage = stage;
            if (stage === 'ganho') { d.probability = 100; }
            else if (stage === 'fechamento') d.probability = Math.max(d.probability, 75);
          });
          ctx.ui.toast('Movido para ' + (ALL.find((x) => x.id === stage) || {}).label);
        });
      });
    },
    actions: {
      addDeal(ctx) {
        const ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>Novo negócio</h2><p>Adicione ao funil</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div class="field"><label>Cliente/clínica</label><input class="input" name="name"></div>
          <div class="row-2"><div class="field"><label>Valor mensal (R$)</label><input class="input" name="valueBRL" type="number" value="${ctx.state.offer.priceBRL || 4990}"></div>
          <div class="field"><label>Probabilidade (%)</label><input class="input" name="probability" type="number" value="30"></div></div>
          <div class="row-2"><div class="field"><label>Responsável</label><input class="input" name="owner" value="Você"></div>
          <div class="field"><label>Estágio</label><select class="input" name="stage">${STAGES.map((s) => `<option value="${s.id}">${s.label}</option>`).join('')}</select></div></div>
          <div class="field"><label>Próxima ação</label><input class="input" name="nextAction"></div>
          <button class="btn btn-primary" data-action="saveNewDeal">${ui.icon('i-check')} Adicionar</button>`);
      },
      saveNewDeal(ctx) {
        const v = ctx.ui.modalForm();
        if (!v.name) { ctx.ui.toast('Informe o nome', 'i-x'); return; }
        ctx.store.update((s) => s.deals.unshift({ id: 'd' + Date.now(), name: v.name, leadId: '', stage: v.stage || 'ads', valueBRL: Number(v.valueBRL) || 0, probability: Number(v.probability) || 0, owner: v.owner || 'Você', nextAction: v.nextAction || '', niche: ctx.niche.name, createdAt: new Date().toISOString().slice(0, 10) }));
        ctx.ui.closeModal(); ctx.ui.toast('Negócio adicionado');
      },
      editDeal(ctx, el) {
        const d = dealById(ctx, el.dataset.id); if (!d) return;
        const ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>${ui.esc(d.name)}</h2><p>Editar negócio</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div class="row-2"><div class="field"><label>Valor mensal (R$)</label><input class="input" name="valueBRL" type="number" value="${d.valueBRL}"></div>
          <div class="field"><label>Probabilidade (%)</label><input class="input" name="probability" type="number" value="${d.probability}"></div></div>
          <div class="row-2"><div class="field"><label>Responsável</label><input class="input" name="owner" value="${ui.esc(d.owner)}"></div>
          <div class="field"><label>Estágio</label><select class="input" name="stage">${ALL.map((s) => `<option value="${s.id}" ${s.id === d.stage ? 'selected' : ''}>${s.label}</option>`).join('')}</select></div></div>
          <div class="field"><label>Próxima ação</label><input class="input" name="nextAction" value="${ui.esc(d.nextAction || '')}"></div>
          <input type="hidden" name="_id" value="${d.id}">
          <div style="display:flex;gap:8px;margin-top:6px"><button class="btn btn-primary" data-action="saveDeal">${ui.icon('i-check')} Salvar</button>
          <button class="btn btn-ghost" data-action="winDeal" data-id="${d.id}">${ui.icon('i-check')} Marcar ganho</button>
          <button class="btn btn-ghost btn-sm" style="margin-left:auto" data-action="delDeal" data-id="${d.id}">Excluir</button></div>`);
      },
      saveDeal(ctx) {
        const v = ctx.ui.modalForm();
        ctx.store.update((s) => { const d = s.deals.find((x) => x.id === v._id); if (!d) return; d.valueBRL = Number(v.valueBRL) || 0; d.probability = Number(v.probability) || 0; d.owner = v.owner; d.stage = v.stage; d.nextAction = v.nextAction; });
        ctx.ui.closeModal(); ctx.ui.toast('Negócio atualizado');
      },
      winDeal(ctx, el) {
        ctx.store.update((s) => { const d = s.deals.find((x) => x.id === el.dataset.id); if (d) { d.stage = 'ganho'; d.probability = 100; } });
        ctx.ui.closeModal(); ctx.ui.toast('Negócio ganho! 🎉');
      },
      delDeal(ctx, el) {
        ctx.store.update((s) => { s.deals = s.deals.filter((x) => x.id !== el.dataset.id); });
        ctx.ui.closeModal(); ctx.ui.toast('Negócio removido');
      },
    },
  });
})();
