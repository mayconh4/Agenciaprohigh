/* Prospecção — motor outbound (Fases 4, 8) */
(function () {
  const STATUS = {
    novo: { label: 'Novo', cls: 'violet' }, contatado: { label: 'Contatado', cls: 'cyan' },
    respondeu: { label: 'Respondeu', cls: 'amber' }, reuniao: { label: 'Reunião', cls: 'green' },
    convertido: { label: 'Convertido', cls: 'green' }, perdido: { label: 'Perdido', cls: 'red' },
  };

  function leadById(ctx, id) { return ctx.state.leads.find((l) => l.id === id); }

  NEXUS.registerModule({
    id: 'prospecting', label: 'Prospecção', icon: 'i-radar', phase: 'F4',
    render(ctx) {
      const { ui, state } = ctx;
      const g = state.goals.today, t = state.goals.targets;
      const steps = [
        { key: 'abordagens', label: 'Abordagens', ico: 'i-send' },
        { key: 'respostas', label: 'Respostas', ico: 'i-wpp' },
        { key: 'reunioes', label: 'Reuniões', ico: 'i-clock' },
        { key: 'fechamentos', label: 'Fechamentos', ico: 'i-check' },
      ].map((s) => `<div class="goal-step ${g[s.key] >= t[s.key] ? 'done' : ''}">
          <div class="gs-num">${g[s.key]}<small>/${t[s.key]}</small></div>
          <div class="gs-label">${s.label}</div>
          <button class="btn btn-sm btn-ghost" style="margin-top:8px;width:100%;justify-content:center" data-action="incGoal" data-k="${s.key}">+1</button>
        </div>`).join('');

      const rows = state.leads.map((l) => {
        const st = STATUS[l.status] || STATUS.novo;
        return `<tr>
          <td><div class="cell-id"><div class="avatar ${ui.avClass(l.name)}">${ui.initials(l.name)}</div>
            <div><div class="strong">${ui.esc(l.name)}</div><div class="muted" style="font-size:11px">${ui.icon('i-instagram')} ${ui.esc(l.instagram)} · ${ui.esc(l.city)}</div></div></div></td>
          <td><div style="max-width:280px">${ui.esc(l.problem)}</div></td>
          <td><div class="strong">${ui.brlK(l.revenueEstBRL)}</div><div class="tag-src">${l.employees} func · ${ui.esc(l.source)}</div></td>
          <td><span class="badge ${st.cls}">${st.label}</span></td>
          <td style="text-align:right;white-space:nowrap">
            <button class="btn btn-sm btn-primary" data-action="diagnose" data-id="${l.id}" title="Diagnóstico IA">${ui.icon('i-spark')}</button>
            <button class="btn btn-sm btn-ghost" data-action="outreach" data-id="${l.id}" title="Abordagem">${ui.icon('i-wpp')}</button>
            <button class="btn btn-sm btn-ghost" data-action="toPipeline" data-id="${l.id}" title="Enviar ao funil">${ui.icon('i-funnel')}</button>
          </td>
        </tr>`;
      }).join('');

      return `
      <div class="card" style="margin-bottom:14px">
        <div class="card-head"><div class="card-ico">${ui.icon('i-radar')}</div><div><h3>Meta diária</h3><div class="sub">Volume &gt; perfeição — caixa primeiro</div></div>
          <div class="right"><span class="badge violet">${Math.round((g.abordagens / t.abordagens) * 100)}% da meta</span></div></div>
        <div class="goal-track">${steps}</div>
      </div>

      <div class="card">
        <div class="card-head"><div class="card-ico">${ui.icon('i-map')}</div><div><h3>Base de leads</h3><div class="sub">${state.leads.length} negócios · dados = vantagem competitiva</div></div>
          <div class="right"><button class="btn btn-primary btn-sm" data-action="addLead">${ui.icon('i-plus')} Adicionar lead</button></div></div>
        ${state.leads.length ? `<table class="tbl"><thead><tr><th>Negócio</th><th>Problema visível</th><th>Faturamento</th><th>Status</th><th></th></tr></thead><tbody>${rows}</tbody></table>`
          : `<div class="empty">${ui.icon('i-map')}<div>${ui.esc(ctx.content.empty.leads)}</div></div>`}
      </div>`;
    },
    actions: {
      incGoal(ctx, el) {
        const k = el.dataset.k;
        ctx.store.update((s) => { s.goals.today[k] = (s.goals.today[k] || 0) + 1; });
      },
      addLead(ctx) {
        const ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>Novo lead</h2><p>Encontre negócios com problema visível</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div class="field"><label>Nome do negócio</label><input class="input" name="name" placeholder="Clínica..."></div>
          <div class="row-2"><div class="field"><label>Instagram</label><input class="input" name="instagram" placeholder="@perfil"></div>
          <div class="field"><label>Telefone/WhatsApp</label><input class="input" name="phone" placeholder="(11) 9...."></div></div>
          <div class="row-2"><div class="field"><label>Cidade</label><input class="input" name="city"></div>
          <div class="field"><label>Faturamento estimado (R$)</label><input class="input" name="revenueEstBRL" type="number" placeholder="80000"></div></div>
          <div class="row-2"><div class="field"><label>Nº de funcionários</label><input class="input" name="employees" type="number"></div>
          <div class="field"><label>Origem</label><select class="input" name="source"><option>Instagram</option><option>Google Business</option><option>Indicação</option><option>Outro</option></select></div></div>
          <div class="field"><label>Problema visível</label><textarea class="input" name="problem" placeholder="Sem site, instagram parado, sem automação de WhatsApp..."></textarea></div>
          <button class="btn btn-primary" data-action="saveLead">${ui.icon('i-check')} Adicionar à base</button>`);
      },
      saveLead(ctx) {
        const v = ctx.ui.modalForm();
        if (!v.name) { ctx.ui.toast('Informe o nome', 'i-x'); return; }
        ctx.store.update((s) => {
          s.leads.unshift({
            id: 'l' + Date.now(), name: v.name, instagram: v.instagram || '@', phone: v.phone || '',
            city: v.city || '', revenueEstBRL: Number(v.revenueEstBRL) || 0, employees: Number(v.employees) || 0,
            problem: v.problem || '', source: v.source || 'Outro', status: 'novo', createdAt: new Date().toISOString().slice(0, 10),
          });
        });
        ctx.ui.closeModal(); ctx.ui.toast('Lead adicionado');
      },
      async diagnose(ctx, el) {
        const l = leadById(ctx, el.dataset.id); if (!l) return;
        const ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>Diagnóstico gratuito</h2><p>${ui.esc(l.name)} · ${ui.esc(l.instagram)}</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div id="diagOut" class="ai-out"><div class="ai-tag">${ui.icon('i-spark')} ${ctx.ai.live ? 'Claude analisando o negócio…' : 'Modo demo'}</div><div class="skeleton" style="width:90%"></div><div class="skeleton" style="width:80%"></div><div class="skeleton" style="width:95%"></div><div class="skeleton" style="width:70%"></div></div>
          <div style="display:flex;gap:8px;margin-top:14px"><button class="btn btn-ghost btn-sm" data-action="outreach" data-id="${l.id}">${ui.icon('i-wpp')} Gerar abordagem</button><button class="btn btn-primary btn-sm" data-action="toPipeline" data-id="${l.id}">${ui.icon('i-funnel')} Enviar ao funil</button></div>`, true);
        const vars = { leadName: l.name, instagram: l.instagram, niche: ctx.niche.name, problem: l.problem, revenue: ui.brl(l.revenueEstBRL) };
        const prompt = `Gere um diagnóstico gratuito para "${l.name}" (${l.instagram}), do nicho ${ctx.niche.name}. Problema observado: "${l.problem}". Faturamento estimado ${vars.revenue}, ${l.employees} funcionários. Liste: onde está perdendo dinheiro (com estimativa em R$), 3 oportunidades rápidas e uma estimativa de quanto dá para recuperar. Tom consultivo, direto.`;
        const text = await ctx.ai.run('diagnosis', vars, prompt);
        const box = document.getElementById('diagOut');
        if (box) box.innerHTML = `<div class="ai-tag">${ui.icon('i-spark')} ${ctx.ai.live ? 'Claude · ' + ctx.ai.model : 'Diagnóstico (modo demo)'}</div>${ui.md(text)}`;
      },
      async outreach(ctx, el) {
        const l = leadById(ctx, el.dataset.id); if (!l) return;
        const ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>Mensagem de abordagem</h2><p>${ui.esc(l.name)}</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div id="outOut" class="ai-out"><div class="ai-tag">${ui.icon('i-wpp')} ${ctx.ai.live ? 'Claude escrevendo…' : 'Modo demo'}</div><div class="skeleton" style="width:90%"></div><div class="skeleton" style="width:75%"></div></div>
          <button class="btn btn-primary btn-sm" style="margin-top:14px" data-action="copyOut">${ui.icon('i-doc')} Copiar mensagem</button>`);
        const vars = { leadName: l.name, problem: l.problem, niche: ctx.niche.name };
        const prompt = `Escreva uma mensagem curta de abordagem (DM/WhatsApp) para "${l.name}" (${ctx.niche.name}). Problema: "${l.problem}". Consultiva, sem parecer spam, oferecendo um diagnóstico rápido. Máx 4 linhas.`;
        const text = await ctx.ai.run('outreach', vars, prompt);
        const box = document.getElementById('outOut');
        if (box) { box.dataset.text = text; box.innerHTML = `<div class="ai-tag">${ui.icon('i-wpp')} ${ctx.ai.live ? 'Claude · ' + ctx.ai.model : 'Sugestão (modo demo)'}</div>${ui.md(text)}`; }
      },
      copyOut(ctx) {
        const box = document.getElementById('outOut');
        const txt = box ? (box.dataset.text || box.textContent) : '';
        if (navigator.clipboard) navigator.clipboard.writeText(txt);
        ctx.ui.toast('Mensagem copiada');
      },
      toPipeline(ctx, el) {
        const l = leadById(ctx, el.dataset.id); if (!l) return;
        if (ctx.state.deals.some((d) => d.leadId === l.id)) { ctx.ui.toast('Já está no funil'); return; }
        ctx.store.update((s) => {
          s.deals.unshift({ id: 'd' + Date.now(), name: l.name, leadId: l.id, stage: 'landing', valueBRL: s.offer.priceBRL || 4990, probability: 20, owner: 'Você', nextAction: 'Qualificar no formulário', niche: ctx.niche.name, createdAt: new Date().toISOString().slice(0, 10) });
          const lead = s.leads.find((x) => x.id === l.id); if (lead && lead.status === 'novo') lead.status = 'contatado';
        });
        ctx.ui.closeModal(); ctx.ui.toast('Enviado ao funil'); ctx.go('pipeline');
      },
    },
  });
})();
