/* Clientes & CS — Account Managers, saúde e churn (Fase 6) */
(function () {
  const RISK = { baixo: 'green', 'médio': 'amber', medio: 'amber', alto: 'red' };
  const DSTATUS = { ok: { cls: 'green', label: 'ok' }, andamento: { cls: 'amber', label: 'andamento' }, atrasado: { cls: 'red', label: 'atrasado' } };
  const clientById = (ctx, id) => ctx.state.clients.find((c) => c.id === id);

  NEXUS.registerModule({
    id: 'clients', label: 'Clientes & CS', icon: 'i-heart', phase: 'F6',
    render(ctx) {
      const { ui, state } = ctx;
      const cs = state.clients;
      const mrr = cs.reduce((a, c) => a + c.mrrBRL, 0);
      const avgHealth = cs.length ? Math.round(cs.reduce((a, c) => a + c.health, 0) / cs.length) : 0;
      const risky = cs.filter((c) => c.churnRisk === 'alto').length;
      const avgNps = cs.length ? (cs.reduce((a, c) => a + (c.nps || 0), 0) / cs.length).toFixed(1) : 0;

      const cards = cs.map((c) => {
        const riskCls = RISK[c.churnRisk] || 'amber';
        const hColor = c.health >= 75 ? 'var(--mint)' : c.health >= 50 ? 'var(--amber)' : 'var(--red)';
        const deliv = (c.deliverables || []).map((d) => { const s = DSTATUS[d.status] || DSTATUS.andamento; return `<span class="badge ${s.cls}"><span class="dot ${s.cls === 'green' ? 'green' : s.cls === 'red' ? 'red' : 'amber'}"></span>${ui.esc(d.label)}</span>`; }).join(' ');
        return `<div class="card">
          <div class="card-head">
            <div class="avatar ${ui.avClass(c.name)}" style="width:42px;height:42px;border-radius:13px">${ui.initials(c.name)}</div>
            <div><h3>${ui.esc(c.name)}</h3><div class="sub">AM: <b style="color:var(--txt-2)">${ui.esc(c.accountManager)}</b> · renova ${ui.esc(c.renewalDate)}</div></div>
            <div class="right">${ui.ring(c.health, hColor)}</div>
          </div>
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
            <span class="badge violet">${ui.brl(c.mrrBRL)}/mês</span>
            <span class="badge ${riskCls}"><span class="dot ${riskCls === 'green' ? 'green' : riskCls === 'red' ? 'red' : 'amber'}"></span>churn ${ui.esc(c.churnRisk)}</span>
            <span class="badge">NPS ${c.nps}</span>
          </div>
          <div style="font-size:11px;color:var(--txt-3);margin-bottom:6px">Entregáveis</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">${deliv || '<span class="muted">—</span>'}</div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-ghost btn-sm" data-action="editClient" data-id="${c.id}">${ui.icon('i-gear')} Gerir</button>
            <button class="btn btn-primary btn-sm" data-action="renewClient" data-id="${c.id}">${ui.icon('i-check')} Renovar</button>
          </div>
        </div>`;
      }).join('');

      return `
      <div class="grid cols-4" style="margin-bottom:14px">
        ${ui.kpiTile({ label: 'MRR de clientes', ico: 'i-money', val: ui.brlK(mrr) })}
        ${ui.kpiTile({ label: 'Clientes ativos', ico: 'i-heart', val: cs.length })}
        ${ui.kpiTile({ label: 'Health média', ico: 'i-up', val: avgHealth, sub: '/100' })}
        ${ui.kpiTile({ label: 'Churn em risco', ico: 'i-fire', val: risky, positive: false })}
      </div>
      ${risky ? `<div class="alert bad"><div class="a-ic">${ui.icon('i-fire')}</div><div class="a-tx"><b>${risky} cliente(s) com risco alto de churn</b><small>Cada cliente tem 1 Account Manager — acione check-in agora para não perder o MRR.</small></div></div>` : ''}
      <div class="section-title">Carteira · 1 Account Manager por cliente <span class="line"></span><span class="badge">NPS médio ${avgNps}</span></div>
      <div class="grid cols-3" style="grid-template-columns:repeat(auto-fill,minmax(310px,1fr))">${cards || `<div class="empty">${ui.icon('i-heart')}<div>${ui.esc(ctx.content.empty.clients)}</div></div>`}</div>`;
    },
    actions: {
      editClient(ctx, el) {
        const c = clientById(ctx, el.dataset.id); if (!c) return;
        const ui = ctx.ui;
        const ams = [...new Set(ctx.state.team.filter((t) => t.department === 'Customer Success').map((t) => t.name).concat(c.accountManager))];
        ui.modal(`<div class="modal-head"><div><h2>${ui.esc(c.name)}</h2><p>Sucesso do cliente</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div class="row-2"><div class="field"><label>Account Manager</label><select class="input" name="accountManager">${ams.map((a) => `<option ${a === c.accountManager ? 'selected' : ''}>${ui.esc(a)}</option>`).join('')}</select></div>
          <div class="field"><label>MRR (R$)</label><input class="input" name="mrrBRL" type="number" value="${c.mrrBRL}"></div></div>
          <div class="row-2"><div class="field"><label>Health (0-100)</label><input class="input" name="health" type="number" value="${c.health}"></div>
          <div class="field"><label>Risco de churn</label><select class="input" name="churnRisk"><option ${c.churnRisk === 'baixo' ? 'selected' : ''}>baixo</option><option ${c.churnRisk === 'médio' ? 'selected' : ''}>médio</option><option ${c.churnRisk === 'alto' ? 'selected' : ''}>alto</option></select></div></div>
          <div class="field"><label>Renovação</label><input class="input" name="renewalDate" value="${ui.esc(c.renewalDate)}"></div>
          <input type="hidden" name="_id" value="${c.id}">
          <button class="btn btn-primary" data-action="saveClient">${ui.icon('i-check')} Salvar</button>`);
      },
      saveClient(ctx) {
        const v = ctx.ui.modalForm();
        ctx.store.update((s) => { const c = s.clients.find((x) => x.id === v._id); if (!c) return; c.accountManager = v.accountManager; c.mrrBRL = Number(v.mrrBRL) || c.mrrBRL; c.health = Math.max(0, Math.min(100, Number(v.health) || c.health)); c.churnRisk = v.churnRisk; c.renewalDate = v.renewalDate; });
        ctx.ui.closeModal(); ctx.ui.toast('Cliente atualizado');
      },
      renewClient(ctx, el) {
        ctx.store.update((s) => {
          const c = s.clients.find((x) => x.id === el.dataset.id); if (!c) return;
          c.churnRisk = 'baixo'; c.health = Math.min(100, c.health + 10);
          const d = new Date(c.renewalDate); if (!isNaN(d)) { d.setMonth(d.getMonth() + 6); c.renewalDate = d.toISOString().slice(0, 10); }
        });
        ctx.ui.toast('Contrato renovado +6 meses');
      },
    },
  });
})();
