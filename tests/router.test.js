const test = require('node:test');
const assert = require('node:assert/strict');
const { createSpaTestEnv } = require('./helpers/spa-test-env');

test('router falls back when a page has no registered renderer', () => {
  const env = createSpaTestEnv();
  env.loadScripts(['js/data.js', 'js/router.js']);

  const router = env.getGlobal('router');
  const page = env.getGlobal('GO_PAGES[0]');

  env.window.GO_RENDER = {};
  router._render(page);

  const container = env.document.getElementById('page-container');
  assert.match(container.textContent, /Conteúdo em construção/);
  assert.deepEqual(JSON.parse(env.window.localStorage.getItem('go_visited')), [page.id]);
});

test('router isolates renderer failures with an in-page technical error state', () => {
  const env = createSpaTestEnv();
  const errors = [];
  env.window.console = {
    ...console,
    error: (...args) => errors.push(args)
  };

  env.loadScripts(['js/data.js', 'js/router.js']);

  const router = env.getGlobal('router');
  const page = env.getGlobal('GO_PAGES[0]');
  env.window.GO_RENDER = {
    [page.id]: () => {
      throw new Error('boom');
    }
  };

  assert.doesNotThrow(() => router._render(page));

  const container = env.document.getElementById('page-container');
  assert.match(container.textContent, /Falha técnica ao carregar esta página/);
  assert.match(container.textContent, /boom/);
  assert.ok(
    errors.some(args => String(args[0]).includes(page.id) && String(args[1]).includes('boom')),
    'expected console.error to log the failing page id and error'
  );
});
