/* Painel — KPIs e saúde da operação (Fase 12) */
(function () {
  NEXUS.registerModule({
    id: 'dashboard', label: 'Painel', icon: 'i-grid', phase: 'F12',
    render(ctx) {
      const { kpis: k, ui, state } = ctx;
      const hist = k.history;
      const mrrSeries = hist.map((h) => h.mrrBRL);
      const g = state.goals.today, t = state.goals.targets;

      const tiles = [
        ui.kpiTile({ label: 'MRR', ico: 'i-money', val: ui.brlK(k.mrr), trend: k.trends.mrr, positive: true }),
        ui.kpiTile({ label: 'Ticket médio', ico: 'i-chart', val: ui.brlK(k.ticket), trend: k.trends.ticket, positive: true }),
        ui.kpiTile({ label: 'CAC', ico: 'i-target', val: ui.brlK(k.cac), trend: k.trends.cac, positive: false }),
        ui.kpiTile({ label: 'LTV : CAC', ico: 'i-bolt', val: k.ltvCac.toFixed(1) + 'x', trend: k.trends.ltv, positive: true }),
        ui.kpiTile({ label: 'Churn', ico: 'i-heart', val: ui.pct(k.churnPct), trend: k.trends.churn, positive: false }),
        ui.kpiTile({ label: 'Taxa de fechamento', ico: 'i-funnel', val: ui.pct(k.closeRatePct, 0), trend: k.trends.close, positive: true }),
        ui.kpiTile({ label: 'ROI', ico: 'i-up', val: k.roi.toFixed(1) + 'x', trend: k.trends.roi, positive: true }),
        ui.kpiTile({ label: 'Tempo de entrega', ico: 'i-clock', val: k.deliveryDays + 'd', trend: k.trends.delivery, positive: false }),
      ].join('');

      const funnelSteps = [
        { key: 'abordagens', label: 'Abordagens' },
        { key: 'respostas', label: 'Respostas' },
        { key: 'reunioes', label: 'Reuniões' },
        { key: 'fechamentos', label: 'Fechamentos' },
      ].map((s) => {
        const done = g[s.key] >= t[s.key];
        return `<div class="goal-step ${done ? 'done' : ''}">
          <div class="gs-num">${g[s.key]}<small>/${t[s.key]}</small></div>
          <div class="gs-label">${s.label}</div>
        </div>`;
      }).join('');

      // alertas
      const alerts = [];
      const risky = state.clients.filter((c) => c.churnRisk === 'alto');
      risky.forEach((c) => alerts.push(`<div class="alert bad"><div class="a-ic">${ui.icon('i-fire')}</div><div class="a-tx"><b>Churn em risco: ${ui.esc(c.name)}</b><small>Health ${c.health} · AM ${ui.esc(c.accountManager)} · renova ${ui.esc(c.renewalDate)}</small></div><button class="btn btn-sm btn-ghost" data-go="clients" data-action="go">Ver</button></div>`));
      const progress = Math.round((g.abordagens / t.abordagens) * 100);
      alerts.push(`<div class="alert ${progress >= 100 ? 'good' : 'warn'}"><div class="a-ic">${ui.icon('i-radar')}</div><div class="a-tx"><b>Meta de prospecção: ${progress}%</b><small>${g.abordagens} de ${t.abordagens} abordagens hoje</small></div><button class="btn btn-sm btn-ghost" data-go="prospecting" data-action="go">Prospectar</button></div>`);
      const hot = state.deals.filter((d) => d.stage === 'fechamento');
      if (hot.length) alerts.push(`<div class="alert good"><div class="a-ic">${ui.icon('i-money')}</div><div class="a-tx"><b>${hot.length} negócio(s) em fechamento</b><small>${ui.brl(hot.reduce((a, d) => a + d.valueBRL, 0))}/mês prestes a entrar</small></div><button class="btn btn-sm btn-ghost" data-go="pipeline" data-action="go">Funil</button></div>`);

      return `
      <div class="grid cols-4" style="margin-bottom:14px">${tiles}</div>

      <div class="grid cols-3" style="grid-template-columns:2fr 1fr;margin-bottom:14px">
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon('i-chart')}</div>
            <div><h3>Crescimento de MRR</h3><div class="sub">${hist.length} meses · ARR projetado ${ui.brlK(k.arr)}</div></div>
            <div class="right"><span class="badge violet">${ui.brlK(k.mrr)} agora</span></div>
          </div>
          ${ui.spark(mrrSeries, 'var(--violet)')}
          <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px" class="muted mono">
            <span>${hist[0] ? hist[0].month : ''}</span><span>${hist[hist.length - 1] ? hist[hist.length - 1].month : ''}</span>
          </div>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon('i-funnel')}</div><div><h3>Pipeline</h3><div class="sub">Forecast ponderado</div></div></div>
          <div class="k-val" style="font-family:'Outfit';font-weight:800;font-size:26px">${ui.brlK(k.forecast)}<small style="font-size:13px;color:var(--txt-3)">/mês</small></div>
          <div class="muted" style="font-size:12px;margin:6px 0 14px">de ${ui.brlK(k.pipelineValue)} em aberto</div>
          ${ui.bar(k.pipelineValue ? (k.forecast / k.pipelineValue) * 100 : 0, 'cyan')}
        </div>
      </div>

      <div class="grid cols-2" style="grid-template-columns:1.3fr 1fr">
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon('i-radar')}</div><div><h3>Meta diária de prospecção</h3><div class="sub">100 abordagens → 20 respostas → 5 reuniões → 1 fechamento</div></div></div>
          <div class="goal-track">${funnelSteps}</div>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-ico">${ui.icon('i-spark')}</div><div><h3>Análise da operação</h3><div class="sub">Recomendações por IA</div></div>
            <div class="right"><button class="btn btn-primary btn-sm" data-action="aiInsight">${ui.icon('i-spark')} Gerar</button></div>
          </div>
          <div id="kpiAiOut" class="ai-out" style="display:none"></div>
          <div id="kpiAiHint" class="muted" style="font-size:12.5px;line-height:1.6">A IA lê seus KPIs (CAC, LTV, churn, ROI) e devolve 3 alavancas priorizadas. ${ctx.ai.live ? '' : '<br><span style="color:var(--amber)">Modo demo ativo — defina ANTHROPIC_API_KEY para IA real.</span>'}</div>
        </div>
      </div>

      <div class="section-title">Alertas <span class="line"></span></div>
      ${alerts.join('')}
      `;
    },
    actions: {
      async aiInsight(ctx, el) {
        const { kpis: k, ui } = ctx;
        const box = document.getElementById('kpiAiOut');
        const hint = document.getElementById('kpiAiHint');
        if (hint) hint.style.display = 'none';
        box.style.display = 'block';
        box.innerHTML = `<div class="ai-tag">${ui.icon('i-spark')} ${ctx.ai.live ? 'Claude analisando…' : 'Modo demo'}</div><div class="skeleton" style="width:90%"></div><div class="skeleton" style="width:80%"></div><div class="skeleton" style="width:95%"></div>`;
        el.disabled = true;
        const vars = { mrr: ui.brl(k.mrr), cac: ui.brl(k.cac), ltv: ui.brl(k.ltv), churn: ui.pct(k.churnPct), closeRate: ui.pct(k.closeRatePct, 0) };
        const prompt = `Sou fundador de uma agência vertical (${ctx.state.agency.niche}). KPIs: MRR ${vars.mrr}, ticket médio ${ui.brl(k.ticket)}, CAC ${vars.cac}, LTV ${vars.ltv} (LTV:CAC ${k.ltvCac.toFixed(1)}x), churn ${vars.churn}, taxa de fechamento ${vars.closeRate}, ROI ${k.roi.toFixed(1)}x. Dê 3 recomendações priorizadas e acionáveis, curtas, com base no playbook (cobrar caro, reduzir churn com Account Managers, dobrar o que converte).`;
        const text = await ctx.ai.run('kpiInsights', vars, prompt);
        box.innerHTML = `<div class="ai-tag">${ui.icon('i-spark')} ${ctx.ai.live ? 'Claude · ' + ctx.ai.model : 'Sugestão (modo demo)'}</div>${ui.md(text)}`;
        el.disabled = false;
      },
    },
  });
})();
