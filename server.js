/**
 * NEXUS — Agency OS — servidor zero-dependência.
 * - Serve os arquivos estáticos do app.
 * - Expõe POST /api/ai como um proxy fino para a API da Claude (Anthropic).
 *   Sem ANTHROPIC_API_KEY definida, responde { demo: true } e o front-end
 *   usa as respostas locais (modo demo) — o app funciona sem nenhuma config.
 *
 * Uso: `node server.js`  (Node >= 18, sem `npm install`).
 */
'use strict';

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// ---- .env mínimo (sem dependências) -------------------------------------
(function loadEnv() {
  try {
    const file = path.join(__dirname, '.env');
    if (!fs.existsSync(file)) return;
    for (const raw of fs.readFileSync(file, 'utf8').split('\n')) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const i = line.indexOf('=');
      if (i === -1) continue;
      const key = line.slice(0, i).trim();
      const val = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch (_) { /* ignora */ }
})();

const PORT = Number(process.env.PORT) || 4178;
const API_KEY = process.env.ANTHROPIC_API_KEY || '';
const MODEL = process.env.NEXUS_MODEL || 'claude-sonnet-4-6';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, Object.assign({ 'Cache-Control': 'no-cache' }, headers));
  res.end(body);
}

// ---- Chamada real à Anthropic Messages API -------------------------------
function callClaude({ model, system, messages, max_tokens }) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: model || MODEL,
      max_tokens: max_tokens || 1024,
      system: system || '',
      messages: messages || [],
    });
    const req = https.request(
      {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
          'content-length': Buffer.byteLength(payload),
        },
      },
      (r) => {
        let data = '';
        r.on('data', (c) => (data += c));
        r.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (json.error) return reject(new Error(json.error.message || 'erro da API'));
            const text = (json.content || []).map((b) => b.text || '').join('').trim();
            resolve({ text, model: json.model, usage: json.usage });
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// ---- Static -------------------------------------------------------------
function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(__dirname, path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, ''));
  if (!filePath.startsWith(__dirname)) return send(res, 403, 'Forbidden');
  fs.readFile(filePath, (err, content) => {
    if (err) return send(res, 404, 'Não encontrado: ' + urlPath);
    send(res, 200, content, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
  });
}

// ---- Server -------------------------------------------------------------
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/ai') {
    let body = '';
    req.on('data', (c) => {
      body += c;
      if (body.length > 1e6) req.destroy();
    });
    req.on('end', async () => {
      let payload = {};
      try { payload = JSON.parse(body || '{}'); } catch (_) {}
      if (!API_KEY) {
        return send(res, 200, JSON.stringify({ demo: true, reason: 'no_api_key' }), {
          'Content-Type': 'application/json',
        });
      }
      try {
        const out = await callClaude(payload);
        send(res, 200, JSON.stringify(out), { 'Content-Type': 'application/json' });
      } catch (e) {
        send(res, 200, JSON.stringify({ demo: true, error: String(e.message || e) }), {
          'Content-Type': 'application/json',
        });
      }
    });
    return;
  }
  if (req.method === 'GET' && req.url === '/api/status') {
    return send(res, 200, JSON.stringify({ ai: !!API_KEY, model: MODEL }), {
      'Content-Type': 'application/json',
    });
  }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`\n  NEXUS — Agency OS  ▸  http://localhost:${PORT}`);
  console.log(`  IA: ${API_KEY ? 'ATIVA (Claude ' + MODEL + ')' : 'MODO DEMO (defina ANTHROPIC_API_KEY no .env para ativar)'}\n`);
});
