/* ===================================================================
   NEXUS — Agency OS · ai.js
   Cliente de IA: usa o proxy /api/ai (Claude) quando há chave;
   caso contrário, cai no MODO DEMO (templates locais inteligentes).
   =================================================================== */
(function () {
  'use strict';
  const P = NEXUS.prompts || {};
  const D = (P.demo) || {};

  function fill(tpl, vars) {
    return String(tpl || '').replace(/\{\{(\w+)\}\}/g, (_, k) => (vars && vars[k] != null ? vars[k] : ''));
  }

  function demoText(feature, vars) {
    if (feature === 'copiloto') return copilotoDemo(vars && vars._q);
    const tpl = D[feature];
    return tpl ? fill(tpl, vars || {}) : 'Conteúdo gerado (modo demo).';
  }

  const noAccent = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  function copilotoDemo(q) {
    const text = noAccent(q);
    const hit = (rules) => { for (const r of (rules || [])) { if ((r.match || []).some((m) => text.includes(noAccent(m)))) return r.answer; } return null; };
    // 1) Dúvidas de iniciante / glossário (Central de Aprendizado)
    const gloss = (NEXUS.academy && NEXUS.academy.assist && NEXUS.academy.assist.glossAnswers) || [];
    const g = hit(gloss); if (g) return g;
    // 2) Regras estratégicas do playbook
    const r = hit(D.copiloto); if (r) return r;
    return D.copilotoDefault || 'Pelo playbook, foque em onde o negócio perde dinheiro e ataque a próxima fase.';
  }

  async function post(payload) {
    const r = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return r.json();
  }

  const ai = {
    live: false,
    model: P.model || 'claude-sonnet-4-6',

    async init() {
      try {
        const r = await fetch('/api/status');
        const j = await r.json();
        ai.live = !!j.ai;
        if (j.model) ai.model = j.model;
      } catch (_) { ai.live = false; }
      // atualiza chrome (pílula de status)
      const pill = document.getElementById('aiPill');
      const txt = document.getElementById('aiPillText');
      const cm = document.getElementById('copilotMode');
      if (pill) { pill.classList.toggle('live', ai.live); txt.textContent = ai.live ? 'IA ativa' : 'Modo demo'; }
      if (cm) cm.textContent = ai.live ? 'Claude ' + ai.model : 'modo demo';
    },

    /* run(feature, vars, userPrompt) -> texto
       vars: placeholders p/ o template demo; userPrompt: instrução p/ IA real */
    async run(feature, vars, userPrompt) {
      if (!ai.live) return demoText(feature, vars);
      try {
        const j = await post({
          model: ai.model,
          system: (P.system && P.system[feature]) || '',
          max_tokens: 1024,
          messages: [{ role: 'user', content: userPrompt || JSON.stringify(vars || {}) }],
        });
        if (j && j.text) return j.text;
        return demoText(feature, vars); // demo:true ou erro
      } catch (_) {
        return demoText(feature, vars);
      }
    },

    /* chat do copiloto: history = [{role,content}], context = string */
    async chat(history, context) {
      const lastUser = [...history].reverse().find((m) => m.role === 'user');
      if (!ai.live) return demoText('copiloto', { _q: lastUser ? lastUser.content : '' });
      try {
        const sys = ((P.system && P.system.copiloto) || '') + '\n\n[Contexto atual da agência]\n' + (context || '');
        const j = await post({ model: ai.model, system: sys, max_tokens: 900, messages: history });
        if (j && j.text) return j.text;
        return demoText('copiloto', { _q: lastUser ? lastUser.content : '' });
      } catch (_) {
        return demoText('copiloto', { _q: lastUser ? lastUser.content : '' });
      }
    },
  };

  NEXUS.ai = ai;
})();
