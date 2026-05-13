const test = require('node:test');
const assert = require('node:assert/strict');
const { createSpaTestEnv } = require('./helpers/spa-test-env');

test('theme motion skips quiz cards while keeping motion on supported desktop cards', () => {
  const env = createSpaTestEnv({
    pageContainerHtml: `
      <div class="glass-card" id="glass-card"></div>
      <div class="quiz-card" id="quiz-card"></div>
      <button class="page-nav-btn" id="nav-btn"></button>
    `
  });

  env.loadScript('js/theme-motion.js');

  const glassCard = env.document.getElementById('glass-card');
  const quizCard = env.document.getElementById('quiz-card');
  const navBtn = env.document.getElementById('nav-btn');

  assert.ok(glassCard.classList.contains('has-spotlight'));
  assert.ok(glassCard.classList.contains('has-tilt'));
  assert.ok(navBtn.classList.contains('btn-spotlight'));
  assert.equal(quizCard.classList.contains('has-spotlight'), false);
  assert.equal(quizCard.classList.contains('has-tilt'), false);
  assert.deepEqual(
    env.getListenerTypes(quizCard).filter(type => type.startsWith('mouse')),
    []
  );
  assert.ok(env.getListenerTypes(glassCard).includes('mousemove'));
});

test('theme motion does not bind mouse listeners on touch-first viewports', () => {
  const env = createSpaTestEnv({
    hoverNone: true,
    pageContainerHtml: '<div class="glass-card" id="glass-card"></div>'
  });

  env.loadScript('js/theme-motion.js');

  const glassCard = env.document.getElementById('glass-card');
  assert.ok(glassCard.classList.contains('has-spotlight'));
  assert.ok(glassCard.classList.contains('has-tilt'));
  assert.deepEqual(
    env.getListenerTypes(glassCard).filter(type => type.startsWith('mouse')),
    []
  );
});
