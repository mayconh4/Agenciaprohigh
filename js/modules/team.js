/* Time & Operação — departamentos, heads e ciclos (Fases 9-12) */
(function () {
  const DEPTS = ['Growth', 'Sales', 'Tech', 'SEO', 'Copy', 'Customer Success', 'Design/Web'];
  const DICON = { Growth: 'i-up', Sales: 'i-funnel', Tech: 'i-bolt', SEO: 'i-radar', Copy: 'i-doc', 'Customer Success': 'i-heart', 'Design/Web': 'i-grid' };
  const STSTAT = { ativo: 'green', treinamento: 'amber', 'avaliação': 'cyan', avaliacao: 'cyan' };

  NEXUS.registerModule({
    id: 'team', label: 'Time & Operação', icon: 'i-team', phase: 'F10',
    render(ctx) {
      const { ui, state } = ctx;
      const team = state.team;
      const heads = team.filter((t) => t.head).length;
      const training = team.filter((t) => t.status === 'treinamento').length;
      const usedDepts = DEPTS.filter((d) => team.some((t) => t.department === d));

      const depts = usedDepts.map((d) => {
        const members = team.filter((t) => t.department === d);
        const people = members.map((m) => `<div class="person">
          <span class="mini-av ${ui.avClass(m.name)}">${ui.initials(m.name)}</span>
          <div style="flex:1"><div class="strong">${ui.esc(m.name)} ${m.head ? `<span class="badge violet" style="padding:1px 7px">${ui.icon('i-spark')}head</span>` : ''}</div><div class="p-role">${ui.esc(m.role)}</div></div>
          <span class="badge ${STSTAT[m.status] || ''}">${ui.esc(m.status)}</span>
        </div>`).join('');
        return `<div class="dept">
          <div class="dept-head">${ui.icon(DICON[d] || 'i-team')} ${d}<span class="d-cnt">${members.length}</span></div>
          ${people}
        </div>`;
      }).join('');

      const cycle = ['Contratar', 'Treinar', 'Avaliar', 'Demitir', 'Melhorar'].map((c, i, arr) => `<span class="c-step">${c}</span>${i < arr.length - 1 ? ui.icon('i-arrow') : ''}`).join('');

      return `
      <div class="grid cols-4" style="margin-bottom:14px">
        ${ui.kpiTile({ label: 'Headcount', ico: 'i-team', val: team.length })}
        ${ui.kpiTile({ label: 'Heads (líderes)', ico: 'i-spark', val: heads })}
        ${ui.kpiTile({ label: 'Em treinamento', ico: 'i-clock', val: training })}
        ${ui.kpiTile({ label: 'Departamentos', ico: 'i-grid', val: usedDepts.length, sub: '/' + DEPTS.length })}
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="card-head"><div class="card-ico">${ui.icon('i-gear')}</div><div><h3>Ciclo de contratação</h3><div class="sub">Repita até encontrar heads que assumam setores</div></div></div>
        <div class="cycle">${cycle}</div>
      </div>

      <div class="section-title">Departamentos <span class="line"></span>
        <button class="btn btn-primary btn-sm" data-action="addPerson">${ui.icon('i-plus')} Contratar</button></div>
      <div class="dept-grid">${depts || `<div class="empty">${ui.icon('i-team')}<div>${ui.esc(ctx.content.empty.team)}</div></div>`}</div>`;
    },
    actions: {
      addPerson(ctx) {
        const ui = ctx.ui;
        ui.modal(`<div class="modal-head"><div><h2>Contratar</h2><p>Delegue tarefas repetitivas — sua hora é cara</p></div><button class="icon-btn" data-action="closeModal">${ui.icon('i-x')}</button></div>
          <div class="field"><label>Nome</label><input class="input" name="name"></div>
          <div class="row-2"><div class="field"><label>Função</label><input class="input" name="role" placeholder="SDR, Gestor de Tráfego..."></div>
          <div class="field"><label>Departamento</label><select class="input" name="department">${DEPTS.map((d) => `<option>${d}</option>`).join('')}</select></div></div>
          <div class="row-2"><div class="field"><label>Status</label><select class="input" name="status"><option>treinamento</option><option>ativo</option><option>avaliação</option></select></div>
          <div class="field"><label>É head?</label><select class="input" name="head"><option value="no">Não</option><option value="yes">Sim</option></select></div></div>
          <button class="btn btn-primary" data-action="savePerson">${ui.icon('i-check')} Adicionar ao time</button>`);
      },
      savePerson(ctx) {
        const v = ctx.ui.modalForm();
        if (!v.name) { ctx.ui.toast('Informe o nome', 'i-x'); return; }
        ctx.store.update((s) => s.team.push({ id: 't' + Date.now(), name: v.name, role: v.role || 'Membro', department: v.department || 'Growth', head: v.head === 'yes', status: v.status || 'treinamento', hiredAt: new Date().toISOString().slice(0, 10) }));
        ctx.ui.closeModal(); ctx.ui.toast('Contratado: ' + v.name);
      },
    },
  });
})();
