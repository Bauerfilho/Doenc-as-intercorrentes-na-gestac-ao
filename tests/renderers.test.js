const test = require('node:test');
const assert = require('node:assert/strict');
const { createSpaTestEnv } = require('./helpers/spa-test-env');

test('all registered pages have a renderer and render non-empty content', () => {
  const env = createSpaTestEnv();
  env.loadScripts([
    'js/data.js',
    'js/app.js',
    'js/pages.js',
    'js/pages-reumato.js',
    'js/pages-cardio.js',
    'js/pages-hepato.js',
    'js/pages-itu.js',
    'js/pages-revisao.js'
  ]);

  const pages = env.getGlobal('GO_PAGES');
  const renderers = env.getGlobal('GO_RENDER');
  const container = env.document.getElementById('page-container');

  assert.equal(pages.length, 38);

  for (const page of pages) {
    assert.equal(typeof renderers[page.id], 'function', `missing renderer for ${page.id}`);
    container.innerHTML = '';
    assert.doesNotThrow(() => renderers[page.id](container, page), `renderer crashed for ${page.id}`);
    assert.match(container.textContent, /\S/, `renderer produced empty output for ${page.id}`);
  }
});
