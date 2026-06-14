/* Playbook — as 12 fases para escalar (mapa estratégico) */
(function () {
  NEXUS.registerModule({
    id: 'playbook', label: 'Playbook', icon: 'i-map', phase: 'F1-12',
    render(ctx) {
      const { ui, state, content } = ctx;
      const phases = content.playbook || [];
      const done = state.playbookDone || [];
      const current = phases.find((p) => !done.includes(p.id));
      const pct = phases.length ? Math.round((done.length / phases.length) * 100) : 0;

      const principles = (content.principles || []).map((p) => `<div class="alert"><div class="a-ic" style="background:rgba(167,139,250,.14);color:var(--violet)">${ui.icon('i-bolt')}</div><div class="a-tx">${ui.esc(p)}</div></div>`).join('');

      const items = phases.map((p) => {
        const isDone = done.includes(p.id);
        const isCur = current && p.id === current.id;
        const acts = (p.actions || []).map((a) => `<span>${ui.esc(a)}</span>`).join('');
        return `<div class="tl-item ${isDone ? 'done' : ''} ${isCur ? 'current' : ''}">
          <div class="tl-dot">${isDone ? ui.icon('i-check') : p.id}</div>
          <div class="tl-card">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <div style="flex:1">
                <div class="tl-phase">${ui.esc(p.phase)}${isCur ? ' · VOCÊ ESTÁ AQUI' : ''}</div>
                <h4>${ui.esc(p.title)}</h4>
                <p>${ui.esc(p.summary || p.goal || '')}</p>
              </div>
              <button class="btn btn-sm ${isDone ? 'btn-ghost' : 'btn-primary'}" data-action="togglePhase" data-id="${p.id}">${isDone ? 'Concluída' : ui.icon('i-check') + ' Concluir'}</button>
            </div>
            <div class="tl-actions">${acts}</div>
            ${p.module ? `<button class="btn btn-ghost btn-sm" style="margin-top:11px" data-go="${p.module}" data-action="go">Abrir módulo ${ui.icon('i-arrow')}</button>` : ''}
          </div>
        </div>`;
      }).join('');

      return `
      <div class="card" style="margin-bottom:16px">
        <div class="card-head"><div class="card-ico">${ui.icon('i-map')}</div><div><h3>Progresso do playbook</h3><div class="sub">${done.length} de ${phases.length} fases concluídas</div></div>
          <div class="right"><span class="badge ${pct >= 100 ? 'green' : 'violet'}">${pct}%</span></div></div>
        ${ui.bar(pct)}
        ${current ? `<div class="muted" style="font-size:12.5px;margin-top:12px">Fase atual: <b style="color:var(--txt)">${ui.esc(current.phase)} — ${ui.esc(current.title)}</b></div>` : `<div class="muted" style="font-size:12.5px;margin-top:12px">🎉 Todas as fases concluídas — rumo à liberdade operacional.</div>`}
      </div>

      <div class="grid cols-2" style="grid-template-columns:1.5fr 1fr;align-items:start">
        <div>
          <div class="section-title">As 12 fases <span class="line"></span></div>
          <div class="timeline">${items}</div>
        </div>
        <div>
          <div class="section-title">Princípios <span class="line"></span></div>
          ${principles}
        </div>
      </div>`;
    },
    actions: {
      togglePhase(ctx, el) {
        const id = Number(el.dataset.id);
        ctx.store.update((s) => {
          if (!Array.isArray(s.playbookDone)) s.playbookDone = [];
          const i = s.playbookDone.indexOf(id);
          if (i === -1) s.playbookDone.push(id); else s.playbookDone.splice(i, 1);
        });
      },
    },
  });
})();
