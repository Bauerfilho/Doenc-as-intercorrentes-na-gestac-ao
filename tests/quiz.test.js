const test = require('node:test');
const assert = require('node:assert/strict');
const { createSpaTestEnv } = require('./helpers/spa-test-env');

test('quiz feedback ids stay stable and reveal the matching explanation per question', () => {
  const env = createSpaTestEnv();
  env.loadScripts(['js/data.js', 'js/app.js']);

  const GO_QUIZ = env.getGlobal('GO_QUIZ');
  const container = env.document.getElementById('page-container');

  GO_QUIZ(container, [
    {
      stem: 'Qual alternativa está correta?',
      options: ['Alternativa A', 'Alternativa B'],
      correct: 1,
      explanation: 'A alternativa B é a correta.',
      tip: 'Observe a letra B.'
    },
    {
      stem: 'Qual conduta é indicada?',
      options: ['Conduta indicada', 'Conduta incorreta'],
      correct: 0,
      explanation: 'A primeira conduta é a indicada.'
    }
  ]);

  const cards = container.querySelectorAll('.quiz-card');
  const feedbacks = container.querySelectorAll('.quiz-feedback');

  assert.equal(cards.length, 2);
  assert.equal(feedbacks.length, 2);
  assert.notEqual(feedbacks[0].id, feedbacks[1].id);

  cards[0].querySelector('[data-oi="0"]').dispatchEvent(new env.window.Event('click', { bubbles: true }));

  assert.match(feedbacks[0].className, /show/);
  assert.match(feedbacks[0].className, /wrong-feedback/);
  assert.match(feedbacks[0].textContent, /A alternativa B é a correta/);
  assert.match(feedbacks[0].textContent, /Observe a letra B/);

  cards[1].querySelector('[data-oi="0"]').dispatchEvent(new env.window.Event('click', { bubbles: true }));

  assert.match(feedbacks[1].className, /show/);
  assert.match(feedbacks[1].className, /correct-feedback/);
  assert.match(feedbacks[1].textContent, /A primeira conduta é a indicada/);
});
