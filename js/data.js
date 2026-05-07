/* =========================================
   GO PREMIUM — DADOS DE NAVEGAÇÃO
   Estrutura de páginas e blocos
   ========================================= */

const GO_PAGES = [
  // BLOCO 0 — ENTRADA
  { id: 'home',         block: 'entrada',  icon: '🏠', label: 'Início',                    grad: 'revisao'  },
  { id: 'fisiologia',   block: 'entrada',  icon: '🧬', label: 'Modificações Fisiológicas', grad: 'revisao'  },

  // BLOCO 1 — TIREOIDE
  { id: 'tir-fisio',    block: 'tireoide', icon: '🦋', label: 'Tireoide: Fisiologia',      grad: 'tireoide' },
  { id: 'hipo-def',     block: 'tireoide', icon: '📉', label: 'Hipotireoidismo: Definição', grad: 'tireoide' },
  { id: 'hipo-fisio',   block: 'tireoide', icon: '⚙️', label: 'Hipotireoidismo: Fisiopato', grad: 'tireoide' },
  { id: 'hipo-dx',      block: 'tireoide', icon: '🔬', label: 'Hipotireoidismo: Diagnóstico',grad: 'tireoide'},
  { id: 'hipo-tto',     block: 'tireoide', icon: '💊', label: 'Hipotireoidismo: Tratamento', grad: 'tireoide'},
  { id: 'hipo-parto',   block: 'tireoide', icon: '🤱', label: 'Hipotireoidismo: Via de Parto',grad: 'tireoide'},
  { id: 'hiper-def',    block: 'tireoide', icon: '📈', label: 'Hipertireoidismo: Definição', grad: 'tireoide'},
  { id: 'hiper-dx',     block: 'tireoide', icon: '🔭', label: 'Hipertireoidismo: Diagnóstico',grad: 'tireoide'},
  { id: 'hiper-tto',    block: 'tireoide', icon: '🩺', label: 'Hipertireoidismo: Tratamento', grad: 'tireoide'},
  { id: 'tir-comp',     block: 'tireoide', icon: '⚖️', label: 'Hipo vs Hiper: Comparativo',  grad: 'tireoide'},

  // BLOCO 2 — REUMATO
  { id: 'lup-def',      block: 'reumato',  icon: '🔴', label: 'Lúpus: Definição e Impacto', grad: 'reumato' },
  { id: 'lup-fisio',    block: 'reumato',  icon: '🧫', label: 'Lúpus: Fisiopatologia',       grad: 'reumato' },
  { id: 'lup-dx',       block: 'reumato',  icon: '🔍', label: 'Lúpus vs Pré-eclâmpsia',       grad: 'reumato' },
  { id: 'lup-tto',      block: 'reumato',  icon: '💉', label: 'Lúpus: Tratamento',            grad: 'reumato' },
  { id: 'lup-neo',      block: 'reumato',  icon: '👶', label: 'Síndrome do Lúpus Neonatal',   grad: 'reumato' },
  { id: 'lup-parto',    block: 'reumato',  icon: '🏥', label: 'Lúpus: Via de Parto',          grad: 'reumato' },
  { id: 'saf-def',      block: 'reumato',  icon: '🩸', label: 'SAF: Definição e Critérios',   grad: 'saf'    },
  { id: 'saf-tto',      block: 'reumato',  icon: '💉', label: 'SAF: Tratamento e Heparina',   grad: 'saf'    },
  { id: 'saf-parto',    block: 'reumato',  icon: '🗓️', label: 'SAF: Programação do Parto',   grad: 'saf'    },
  { id: 'ar-gest',      block: 'reumato',  icon: '🦴', label: 'Artrite Reumatoide',           grad: 'reumato' },

  // BLOCO 3 — CARDIO
  { id: 'card-fisio',   block: 'cardio',   icon: '❤️', label: 'Cardiovascular: Fisiologia',   grad: 'cardio' },
  { id: 'card-classif', block: 'cardio',   icon: '📊', label: 'Classificação OMS de Risco',   grad: 'cardio' },
  { id: 'card-valvar',  block: 'cardio',   icon: '🫀', label: 'Estenose vs Insuficiência',     grad: 'cardio' },
  { id: 'card-tto',     block: 'cardio',   icon: '💊', label: 'Cardiopatia: Tratamento',       grad: 'cardio' },
  { id: 'card-parto',   block: 'cardio',   icon: '🏥', label: 'Cardiopatia: Via de Parto',     grad: 'cardio' },

  // BLOCO 4 — HEPATO
  { id: 'hep-b',        block: 'hepato',   icon: '🟡', label: 'Hepatite B na Gestação',        grad: 'hepato' },
  { id: 'hep-c',        block: 'hepato',   icon: '🟠', label: 'Hepatite C na Gestação',        grad: 'hepato' },
  { id: 'esteatose',    block: 'hepato',   icon: '🫀', label: 'Esteatose Aguda da Gestação',   grad: 'hepato' },
  { id: 'colestase',    block: 'hepato',   icon: '🟤', label: 'Colestase Gestacional',          grad: 'hepato' },
  { id: 'hepato-comp',  block: 'hepato',   icon: '📋', label: 'Tabela Comparativa Hepatopatias',grad: 'hepato'},

  // BLOCO 5 — ITU
  { id: 'itu-fisio',    block: 'itu',      icon: '🦠', label: 'ITU: Por que é Mais Comum',     grad: 'itu'   },
  { id: 'itu-classif',  block: 'itu',      icon: '📋', label: 'ITU: Classificação e Tratamento',grad: 'itu'  },
  { id: 'itu-profi',    block: 'itu',      icon: '🛡️', label: 'ITU: Profilaxia',               grad: 'itu'   },

  // BLOCO 6 — REVISÃO
  { id: 'mnemonic',     block: 'revisao',  icon: '🧠', label: 'Mnemônicos e Macetes',          grad: 'revisao'},
  { id: 'flashcards',   block: 'revisao',  icon: '🎴', label: 'Flashcards de Revisão',         grad: 'revisao'},
  { id: 'simulador',    block: 'revisao',  icon: '🎯', label: 'Simulador Final de Casos',      grad: 'revisao'},
];

const GO_BLOCKS = {
  entrada:  { label: 'Início',     color: '#0f766e', pages: [] },
  tireoide: { label: 'Tireoide',   color: '#0891b2', pages: [] },
  reumato:  { label: 'Reumato',    color: '#9333ea', pages: [] },
  cardio:   { label: 'Cardio',     color: '#e11d48', pages: [] },
  hepato:   { label: 'Hepato',     color: '#d97706', pages: [] },
  itu:      { label: 'ITU',        color: '#0284c7', pages: [] },
  revisao:  { label: 'Revisão',    color: '#0f766e', pages: [] },
};

// Organizar páginas por bloco
GO_PAGES.forEach((p, i) => {
  p.index = i;
  if (GO_BLOCKS[p.block]) GO_BLOCKS[p.block].pages.push(p);
});

const GRAD_MAP = {
  tireoide: 'var(--grad-tireoide)',
  reumato:  'var(--grad-reumato)',
  saf:      'var(--grad-saf)',
  cardio:   'var(--grad-cardio)',
  hepato:   'var(--grad-hepato)',
  itu:      'var(--grad-itu)',
  revisao:  'var(--grad-revisao)',
};
