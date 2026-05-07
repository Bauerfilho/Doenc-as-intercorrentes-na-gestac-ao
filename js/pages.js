/* =========================================
   GO PREMIUM — RENDERIZADORES DE PÁGINAS
   Conteúdo completo de todas as páginas
   ========================================= */

window.GO_RENDER = {};

/* ===================================================
   HELPERS GLOBAIS
   =================================================== */
function h(tag, attrs, inner) {
  const a = Object.entries(attrs||{}).map(([k,v])=>`${k}="${v}"`).join(' ');
  return `<${tag}${a?' '+a:''}>${inner||''}</${tag}>`;
}

function pageHero(tag, title, sub, grad) {
  return `<div class="page-hero" style="--grad-current:${grad}">
    <span class="page-hero-tag">${tag}</span>
    <h1>${title}</h1>
    <p class="subtitle">${sub}</p>
  </div>`;
}

function sectionHeader(icon, title, color) {
  return `<div class="section-header mb-24">
    <div class="section-icon" style="background:${color}20;color:${color}">${icon}</div>
    <h2>${title}</h2>
  </div>`;
}

function alertBox(type, title, text, icon) {
  return `<div class="alert ${type} mb-16">
    <span class="alert-icon">${icon}</span>
    <div class="alert-body">
      <div class="alert-title">${title}</div>
      <div class="alert-text">${text}</div>
    </div>
  </div>`;
}

function infoCard(type, title, content) {
  return `<div class="info-card ${type} mb-16">
    <h4>${title}</h4>${content}</div>`;
}

function glassCard(content, extra='') {
  return `<div class="glass-card ${extra}" style="padding:22px;margin-bottom:16px;">${content}</div>`;
}

function twoCol(a, b) {
  return `<div class="grid-2 mb-16">${a}${b}</div>`;
}

function threeCol(a,b,c) {
  return `<div class="grid-3 mb-16">${a}${b}${c}</div>`;
}

function bodyText(text) {
  return `<p class="body-text">${text}</p>`;
}

function styledList(items) {
  return `<ul class="styled-list">${items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
}

function badge(type, text) {
  return `<span class="badge badge-${type}">${text}</span>`;
}

function medCard(type, icon, name, desc) {
  return `<div class="med-card ${type}">
    <div class="med-icon">${icon}</div>
    <div class="med-info">
      <div class="med-name">${name}</div>
      <div class="med-desc">${desc}</div>
    </div>
  </div>`;
}

function partoCard(type, title, items) {
  return `<div class="parto-card parto-${type}">
    <div class="parto-card-header">${type==='vaginal'?'✅':'⚠️'} ${title}</div>
    <div class="parto-card-body"><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>
  </div>`;
}

function resumoItem(num, color, text) {
  return `<li class="resumo-item">
    <div class="resumo-num" style="background:${color}">${num}</div>
    <div class="resumo-text">${text}</div>
  </li>`;
}

function provaCard(title, text) {
  return `<div class="prova-card mb-12">
    <div class="prova-card-title">🎯 ${title}</div>
    <p>${text}</p>
  </div>`;
}

/* ===================================================
   PÁGINA 00 — HOME / HERO
   =================================================== */
GO_RENDER['home'] = function(el, page) {
  el.innerHTML = `
  <div class="hero-main">
    <div class="hero-title-block anim-fade-up">
      <div class="hero-eyebrow"><span class="hero-eyebrow-dot"></span>Plataforma Premium de Estudo Ativo</div>
      <h1>GO Premium:<br><span class="accent">Doenças Intercorrentes</span><br>na Gestação</h1>
      <p class="hero-sub">Hipotireoidismo, hipertireoidismo, lúpus, SAF, cardiopatias, hepatites, esteatose, colestase e ITU na gestação — fisiopatologia, diagnóstico, medicações seguras, via de parto e raciocínio de prova.</p>
      <div class="hero-stats">
        <div class="hero-stat"><div class="hero-stat-number">36</div><div class="hero-stat-label">Páginas</div></div>
        <div class="hero-stat"><div class="hero-stat-number">100+</div><div class="hero-stat-label">Questões</div></div>
        <div class="hero-stat"><div class="hero-stat-number">17</div><div class="hero-stat-label">Simuladores</div></div>
        <div class="hero-stat"><div class="hero-stat-number">5</div><div class="hero-stat-label">Blocos</div></div>
      </div>
    </div>

    <div class="hero-blocks anim-fade-up delay-2">
      <div class="hero-block tireoide card-hover" data-goto="tir-fisio">
        <div class="hero-block-icon">🦋</div>
        <div class="hero-block-title">Doenças da Tireoide</div>
        <div class="hero-block-count">10 páginas · Hipo, Hiper, PTU, Metimazol</div>
      </div>
      <div class="hero-block reumato card-hover" data-goto="lup-def">
        <div class="hero-block-icon">🔴</div>
        <div class="hero-block-title">Doenças Reumatológicas</div>
        <div class="hero-block-count">9 páginas · Lúpus, SAF, AR</div>
      </div>
      <div class="hero-block cardio card-hover" data-goto="card-fisio">
        <div class="hero-block-icon">❤️</div>
        <div class="hero-block-title">Cardiopatias</div>
        <div class="hero-block-count">5 páginas · OMS, Valvopatias, Parto</div>
      </div>
      <div class="hero-block hepato card-hover" data-goto="hep-b">
        <div class="hero-block-icon">🫀</div>
        <div class="hero-block-title">Doenças Hepáticas</div>
        <div class="hero-block-count">5 páginas · Hepatites, Esteatose, Colestase</div>
      </div>
      <div class="hero-block itu card-hover" data-goto="itu-fisio">
        <div class="hero-block-icon">🦠</div>
        <div class="hero-block-title">ITU na Gestação</div>
        <div class="hero-block-count">3 páginas · Bacteriúria, Pielonefrite, Profilaxia</div>
      </div>
      <div class="hero-block revisao card-hover" data-goto="simulador">
        <div class="hero-block-icon">🎯</div>
        <div class="hero-block-title">Revisão e Simulador</div>
        <div class="hero-block-count">3 páginas · Mnemônicos, Flashcards, Casos</div>
      </div>
    </div>

    ${alertBox('info','Pergunta central permanente','<strong>"O que a gestação muda nesta doença e como isso altera a via de parto, as medicações e o raciocínio de prova?"</strong> — Esta pergunta guia todas as páginas desta plataforma.','🧭')}

    ${alertBox('atencao','Pré-requisito fundamental','Se você não sabe o que é normal na gestação, não consegue distinguir o que é patológico. Cada bloco começa pelas modificações fisiológicas do organismo materno.','⚠️')}
  </div>`;
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 01 — MODIFICAÇÕES FISIOLÓGICAS GERAIS
   =================================================== */
GO_RENDER['fisiologia'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🧬 Fundamento Essencial','Por que Modificações Fisiológicas Importam?','"Se você não sabe o que é normal, não sabe o que está alterado." A gestação muda profundamente os parâmetros clínicos e laboratoriais — sem esse conhecimento, é impossível distinguir fisiologia de doença.',GRAD_MAP.revisao)}

  <div class="anim-fade-up">
  ${sectionHeader('🎯','A Lógica da Aula','#0f766e')}
  ${bodyText('Esta plataforma aborda doenças clínicas que ocorrem <strong>durante</strong> a gestação. O foco não é clínica médica pura — é entender como essas doenças se comportam na gravidez: como o organismo materno as modifica, como o diagnóstico muda, como o tratamento deve ser adaptado e como conduzir o parto.')}
  ${alertBox('info','Conceito central da professora','O obstetra PRECISA saber clínica. As pacientes com doenças clínicas engravidam e precisam de acompanhamento obstétrico integrado. Não é possível considerar que "isso não é problema dele".','💡')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔄','O que a Gestação Muda nos Parâmetros Normais','#0891b2')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Sistema</th><th>Alteração Fisiológica</th><th>Implicação Clínica</th></tr></thead>
    <tbody>
      <tr><td><strong>Cardiovascular</strong></td><td>↑ Débito cardíaco 40-50%<br>↑ FC 10-15 bpm<br>↓ Resistência periférica</td><td>Sopro sistólico e taquicardia podem ser normais</td></tr>
      <tr><td><strong>Hematológico</strong></td><td>↑ Volume plasmático > ↑ Eritrócitos → anemia dilucional<br>↑ Fatores de coagulação</td><td>Hb 10-11 g/dL pode ser normal; estado pró-coagulante</td></tr>
      <tr><td><strong>Renal</strong></td><td>↑ TFG 50%<br>Leve proteinúria e glicosúria</td><td>Creatinina 0,8 pode ser patológica; proteinúria até 300 mg/24h é normal</td></tr>
      <tr><td><strong>Tireoide</strong></td><td>↓ TSH (ação TSH-like do HCG)<br>↑ T3/T4 totais (↑ proteínas carreadoras)<br>T3/T4 livres: normais</td><td>TSH baixo no 1º trimestre pode ser fisiológico</td></tr>
      <tr><td><strong>Respiratório</strong></td><td>↑ Volume corrente<br>↓ CRF<br>PaCO₂ ↓ (alcalose resp. compensada)</td><td>Dispneia leve é comum; hiperventilação é normal</td></tr>
      <tr><td><strong>Hepático</strong></td><td>↑ Fosfatase alcalina (placenta)<br>↓ Albumina<br>↑ Fibrinogênio</td><td>FA elevada pode ser normal; não indica doença hepática isoladamente</td></tr>
      <tr><td><strong>Trato urinário</strong></td><td>Dilatação de ureteres (progesterona)<br>↑ Fluxo renal<br>Compressão uterina</td><td>Estase urinária → risco de ITU</td></tr>
    </tbody>
  </table>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('❓','Sintomas Normais vs Sinais de Doença','#9333ea')}
  ${bodyText('A gestação produz sintomas que mimetizam doenças. Saber o que é fisiológico é o pré-requisito para investigar o patológico.')}

  <div class="classifier" id="cls-fisio">
    <div class="classifier-header">🔎 Classificador Interativo — Fisiológico ou Patológico?</div>
    <div class="classifier-items">
      ${[
        ['Cansaço moderado, melhora com repouso','fisiológico'],
        ['Cansaço desproporcional, não melhora com repouso, história familiar de hipotireoidismo','patológico'],
        ['Taquicardia 90 bpm assintomática','fisiológico'],
        ['Taquicardia >100 bpm persistente + tremor + perda de peso','patológico'],
        ['Dispneia leve aos grandes esforços no 3º trimestre','fisiológico'],
        ['Dispneia em repouso + ortopneia + edema pulmonar','patológico'],
        ['Náuseas e vômitos até 12-14 semanas','fisiológico'],
        ['Vômitos incoercíveis com perda de peso >5% + cetonemia = hiperêmese gravídica','patológico'],
        ['Edema de membros inferiores no 3º trimestre, vespertino','fisiológico'],
        ['Proteinúria >300 mg/24h + hipertensão >140/90 após 20 semanas','patológico'],
      ].map(([label, answer]) => `
        <div class="classifier-item" data-answer="${answer}" onclick="clsClick(this)">
          <span class="classifier-item-label">${label}</span>
          <div class="classifier-item-btns">
            <button class="cls-btn" data-type="fisiológico" onclick="event.stopPropagation();clsBtnClick(this,'fisiológico')">Fisiológico</button>
            <button class="cls-btn" data-type="patológico" onclick="event.stopPropagation();clsBtnClick(this,'patológico')">Patológico</button>
          </div>
        </div>`).join('')}
    </div>
    <div class="classifier-feedback" id="cls-fisio-fb"></div>
  </div>
  </div>

  <div class="anim-fade-up delay-3">
  <div class="sep"></div>
  ${sectionHeader('🗺️','Mapa dos Blocos','#0f766e')}
  ${bodyText('Esta plataforma aborda cinco grupos de doenças. Cada grupo tem sua lógica clínica própria e sua interação específica com a gestação:')}
  <div class="grid-auto mb-24">
    ${[
      ['🦋','Tireoide','TSH, T3/T4, hipo vs hiper, PTU vs metimazol, tireotoxicose transitória','tir-fisio'],
      ['🔴','Reumato','Lúpus (TH2), SAF (trombofilia adquirida), artrite reumatoide (TH1)','lup-def'],
      ['❤️','Cardio','OMS I-IV, estenose vs insuficiência, cardiopatia e parto','card-fisio'],
      ['🫀','Hepato','Hepatite B/C, esteatose (hipoglicemia!), colestase (prurido)','hep-b'],
      ['🦠','ITU','Bacteriúria assintomática obrigatória tratar; pielonefrite = internação','itu-fisio'],
    ].map(([icon,title,desc,goto]) => `
      <div class="glass-card card-hover" style="padding:20px;cursor:pointer;" data-goto="${goto}">
        <div style="font-size:1.8rem;margin-bottom:10px">${icon}</div>
        <div style="font-weight:700;margin-bottom:6px">${title}</div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);line-height:1.5">${desc}</div>
      </div>`).join('')}
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Uma gestante de 28 semanas chega ao pré-natal com queixa de cansaço e dificuldade respiratória. Ao exame: FC 92 bpm, PA 110/70 mmHg, Hb 10,8 g/dL, sopro sistólico grau II em foco pulmonar. Qual é a conduta mais adequada?',
      options: ['Solicitar ecocardiograma urgente por suspeita de cardiopatia','Transfundir hemácias por anemia grave','Tranquilizar a paciente — os achados são fisiológicos da gestação','Iniciar propranolol por taquicardia','Solicitar TSH por suspeita de hipertireoidismo'],
      correct: 2,
      explanation: 'Na gestação, são esperados: anemia dilucional (Hb 10-11 g/dL é normal), taquicardia leve (FC 80-100 bpm), sopro sistólico ejetivo grau I-II (↑ débito cardíaco) e dispneia leve. Sem sinais de alarme, os achados são fisiológicos. A conduta é tranquilizar e orientar.',
      tip: 'Sopro diastólico e sopro sistólico ≥ grau III/IV NÃO são fisiológicos na gestação.'
    },
    {
      stem: 'A fosfatase alcalina (FA) é um marcador de doença hepática. Na gestação de 32 semanas, o laboratório informa FA = 2,5 × LSN (2,5 vezes o limite superior da normalidade). A interpretação correta é:',
      options: ['Provável hepatite viral — solicitar HBsAg e Anti-HCV','Provável colestase gestacional — iniciar ácido ursodesoxicólico','Achado fisiológico — FA placentária eleva o valor total na gestação','Provável cirrose — solicitar biópsia hepática','Provável doença de Wilson — dosar ceruloplasmina'],
      correct: 2,
      explanation: 'A fosfatase alcalina aumenta fisiologicamente na gestação pela produção placentária da isoenzima FA placentária. Não é marcador confiável de doença hepática na gestante isoladamente. Outros exames (AST, ALT, gama-GT, ácidos biliares) são necessários para avaliar disfunção hepática.',
      tip: 'Na colestase gestacional, a gama-GT é frequentemente NORMAL — isso a diferencia de outras hepatopatias.'
    },
    {
      stem: 'Qual dos seguintes mecanismos explica por que gestantes têm maior risco de infecção do trato urinário?',
      options: ['Imunossupressão sistêmica grave causada pela gestação','Dilatação ureteral por progesterona + compressão uterina = estase urinária','Uso obrigatório de cateter vesical durante o pré-natal','Alteração do pH urinário que favorece crescimento bacteriano','Deficiência de IgA secretória no trato urinário'],
      correct: 1,
      explanation: 'A progesterona relaxa a musculatura lisa dos ureteres, causando dilatação (uretero-hidronefrose fisiológica). Associada à compressão uterina, cria estase urinária — ambiente favorável para colonização e ascensão bacteriana. Por isso, a bacteriúria assintomática na gestante SEMPRE deve ser tratada.',
      tip: 'A E. coli responde por 70-80% das ITUs na gestação. Sempre solicitar urinocultura antes de tratar.'
    }
  ]);
  GO_NAV(el, page);
};

/* Função global para classifier */
window.clsBtnClick = function(btn, type) {
  const item = btn.closest('.classifier-item');
  const answer = item.dataset.answer;
  item.querySelectorAll('.cls-btn').forEach(b => { b.classList.remove('selected-ok','selected-no'); });
  btn.classList.add(type === answer ? 'selected-ok' : 'selected-no');
  updateClsFeedback(item.closest('.classifier'));
};

window.clsClick = function(item) { /* handled by btns */ };

function updateClsFeedback(cls) {
  if (!cls) return;
  const items = cls.querySelectorAll('.classifier-item');
  let total = 0, correct = 0;
  items.forEach(it => {
    const sel = it.querySelector('.cls-btn.selected-ok, .cls-btn.selected-no');
    if (sel) { total++; if (sel.classList.contains('selected-ok')) correct++; }
  });
  const fb = cls.querySelector('.classifier-feedback');
  if (fb && total > 0) {
    fb.className = 'classifier-feedback show';
    fb.innerHTML = `<strong>${correct}/${total} corretos.</strong> ${correct === total ? '🏆 Excelente!' : 'Continue praticando — clique nos itens restantes.'}`;
  }
}

/* ===================================================
   PÁGINA 02 — TIREOIDE: FISIOLOGIA NA GESTAÇÃO
   =================================================== */
GO_RENDER['tir-fisio'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🦋 Tireoide — Bloco 1 / Página 1','Modificações Fisiológicas da Tireoide na Gestação','O HCG mimetiza o TSH, as proteínas carreadoras aumentam e o TSH pode cair — tudo isso é NORMAL. Entender esse eixo é fundamental para não confundir fisiologia com doença.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${alertBox('info','Conceito-chave','A gestação modifica profundamente o eixo hipotálamo-hipofisário-tireoidiano. Sem conhecer essas alterações, é impossível interpretar o TSH de uma gestante.','🧠')}

  ${sectionHeader('🔬','O Eixo HCG → TSH → T3/T4','#0891b2')}
  ${bodyText('O <strong>HCG (gonadotrofina coriônica humana)</strong> tem a <strong>subunidade alfa idêntica</strong> à do TSH. Por isso, o HCG elevado do primeiro trimestre tem ação <strong>"TSH-like"</strong>: estimula a tireoide diretamente, como se fosse TSH.')}

  <div class="axis-diagram mb-24">
    <div class="axis-box source">🤰 Placenta → ↑↑↑ HCG (pico 10-12 semanas)</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box process">HCG age nos receptores de TSH (subunidade alfa comum)</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-up">↑ T3 e T4 totais (+ proteínas carreadoras)</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-down">Feedback negativo → ↓ TSH</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-normal">T3 e T4 LIVRES: permanecem normais</div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('📊','As 3 Alterações Fisiológicas Obrigatórias','#0891b2')}
  <div class="grid-3 mb-24">
    ${glassCard(`<div style="font-size:1.5rem;margin-bottom:8px">1️⃣</div><strong>TSH Reduzido no 1º Trimestre</strong>
    <p class="body-text" style="margin-top:8px">O HCG elevado suprime o TSH. É fisiológico. TSH pode chegar próximo a zero em gestações com HCG muito alto (mola, gemelar, hiperêmese).</p>`)}
    ${glassCard(`<div style="font-size:1.5rem;margin-bottom:8px">2️⃣</div><strong>Aumento de T3/T4 TOTAIS</strong>
    <p class="body-text" style="margin-top:8px">O estrogênio gestacional aumenta a produção de proteínas carreadoras (TBG). Como há mais proteína para transportar, o T3 e T4 <em>totais</em> aumentam — mas as formas livres ficam normais.</p>`)}
    ${glassCard(`<div style="font-size:1.5rem;margin-bottom:8px">3️⃣</div><strong>T3/T4 LIVRES: Normais</strong>
    <p class="body-text" style="margin-top:8px">A fração livre (que é biologicamente ativa) permanece normal. Por isso, os valores de T3 livre e T4 livre são os mais confiáveis para avaliar função tireoidiana na gestante.</p>`)}
  </div>

  <div class="simulator-card">
    <h4>🔧 Simulador: Interprete o TSH da Gestante</h4>
    <label class="sim-label">Trimestre da gestação:</label>
    <select class="sim-select" id="tsh-trim">
      <option value="">-- Selecione --</option>
      <option value="1">1º Trimestre (até 13 sem)</option>
      <option value="2">2º Trimestre (14-27 sem)</option>
      <option value="3">3º Trimestre (28-40 sem)</option>
    </select>
    <label class="sim-label">Valor do TSH (mUI/L):</label>
    <input class="sim-input" type="number" id="tsh-val" placeholder="Ex: 0.4" step="0.01" min="0" max="20">
    <button class="sim-btn" onclick="calcTSH()">🔍 Interpretar</button>
    <div class="sim-result neutral" id="tsh-result">Preencha os campos acima para interpretar.</div>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('⚠️','Implicação Clínica Fundamental','#d97706')}
  ${alertBox('atencao','Por que isso importa para o diagnóstico?','Essas alterações fisiológicas fazem com que doenças tireoidianas se comportem de forma diferente na gestação. Um TSH discretamente suprimido no 1º trimestre PODE ser normal (ação do HCG). Um TSH >10 em qualquer trimestre é patológico.','⚠️')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Parâmetro</th><th>Fora da Gestação</th><th>Gestação (1º Trim)</th><th>Gestação (2º/3º Trim)</th></tr></thead>
    <tbody>
      <tr><td>TSH</td><td>0,4 – 4,0 mUI/L</td><td class="cell-check">0,1 – 2,5 mUI/L ✓</td><td>0,2 – 3,0 mUI/L</td></tr>
      <tr><td>T4 livre</td><td>0,8 – 1,8 ng/dL</td><td>Normal a levemente ↑</td><td>Normal</td></tr>
      <tr><td>T3 total</td><td>80 – 200 ng/dL</td><td>↑ (fisiológico)</td><td>↑ (fisiológico)</td></tr>
      <tr><td>T4 total</td><td>5 – 12 μg/dL</td><td>↑ (fisiológico)</td><td>↑ (fisiológico)</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('pegadinha','Pegadinha Clássica — TSH Suprimido no 1º Trimestre','A banca pode apresentar TSH de 0,1 mUI/L em gestante de 10 semanas com hiperêmese e perguntar se deve iniciar antitireoidiano. A resposta é NÃO — pode ser tireotoxicose gestacional TRANSITÓRIA (HCG elevado) que resolve espontaneamente sem tratamento.','🎭')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Em uma gestante de 10 semanas com hiperêmese gravídica, o TSH é de 0,05 mUI/L e o T4 livre está levemente elevado. Não há bócio, não há oftalmopatia e os autoanticorpos (anti-receptor de TSH) são negativos. A conduta correta é:',
      options: ['Iniciar propiltiouracil imediatamente','Iniciar metimazol imediatamente','Realizar cintilografia de tireoide','Observar — é provável tireotoxicose gestacional transitória','Internar e realizar tireoidectomia'],
      correct: 3,
      explanation: 'A tireotoxicose gestacional transitória é causada pela ação TSH-like do HCG elevado no 1º trimestre. É mais comum em hiperêmese gravídica, gestação gemelar e mola. Não tem bócio, não tem oftalmopatia, anticorpos negativos. Resolve espontaneamente após o pico do HCG (12-16 sem). NÃO TRATAR com antitireoidiano.',
      tip: 'O diferencial com Doença de Graves: bócio, oftalmopatia e anticorpos anti-receptor TSH positivos indicam Graves (que deve ser tratado).'
    },
    {
      stem: 'A subunidade que confere homologia estrutural ao HCG e ao TSH, explicando a supressão fisiológica do TSH no 1º trimestre, é:',
      options: ['Subunidade beta','Subunidade alfa','Subunidade gama','Subunidade delta','Subunidade épsilon'],
      correct: 1,
      explanation: 'O HCG e o TSH compartilham a mesma subunidade alfa. A subunidade beta é diferente em cada hormônio (confere especificidade). É essa homologia da subunidade alfa que permite ao HCG agir nos receptores de TSH da tireoide, estimulando a produção de T3/T4 e suprimindo o TSH por feedback negativo.',
      tip: 'Mesmo raciocínio explica por que HCG elevado (mola, gestação gemelar) pode suprimir TSH mais intensamente.'
    }
  ]);
  GO_NAV(el, page);
};

window.calcTSH = function() {
  const trim = document.getElementById('tsh-trim')?.value;
  const val  = parseFloat(document.getElementById('tsh-val')?.value);
  const res  = document.getElementById('tsh-result');
  if (!res) return;
  if (!trim || isNaN(val)) { res.className='sim-result neutral'; res.textContent='Preencha todos os campos.'; return; }
  let msg='', cls='neutral';
  if (val > 10) { msg='⚠️ TSH > 10 mUI/L = Hipotireoidismo FRANCO. Iniciar levotiroxina imediatamente, independente do trimestre.'; cls='danger'; }
  else if (trim==='1' && val < 0.1) { msg='🔍 TSH muito suprimido no 1º trimestre. Avaliar T4 livre, bócio e anticorpos. Se HCG elevado + sem bócio + sem anticorpos: tireotoxicose transitória (não tratar). Se T4 livre muito elevado + bócio: investigar Doença de Graves.'; cls='warn'; }
  else if (trim==='1' && val <= 2.5) { msg='✅ TSH normal para o 1º trimestre (0,1 – 2,5 mUI/L). Nenhuma conduta necessária em paciente assintomática.'; cls='ok'; }
  else if ((trim==='2'||trim==='3') && val >= 4 && val <= 10) { msg='⚠️ TSH entre 4-10 mUI/L = Hipotireoidismo subclínico. Dosar T4 livre e anti-TPO. Tratar se TSH ≥ 4 (ou TSH 2,5-4 + anti-TPO positivo).'; cls='warn'; }
  else if (val >= 2.5 && val <= 4) { msg='🔍 TSH entre 2,5-4 mUI/L: dosar anti-TPO. Se anti-TPO positivo → tratar. Se anti-TPO negativo → conduta controversa (maioria não trata).'; cls='warn'; }
  else { msg='✅ TSH dentro dos limites para o trimestre informado. Sem necessidade de investigação adicional em paciente assintomática.'; cls='ok'; }
  res.className=`sim-result ${cls}`; res.textContent=msg;
};

/* ===================================================
   PÁGINA 03 — HIPOTIREOIDISMO: DEFINIÇÃO E IMPACTO
   =================================================== */
GO_RENDER['hipo-def'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('📉 Tireoide — Página 2','Hipotireoidismo na Gestação: Definição e Por que Importa','O hipotireoidismo é silencioso — seus sintomas se confundem com a gestação normal. Mas o impacto fetal (déficit cognitivo, abortamento, CIUR) é devastador se não tratado.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('📋','Definição e Classificação','#0891b2')}
  <div class="grid-2 mb-24">
    ${infoCard('primary','Hipotireoidismo FRANCO',`<p>TSH > 10 mUI/L + T4 livre geralmente diminuído</p><p>Doença clínica manifesta</p><p>Indicação clara e imediata de tratamento</p><div style="margin-top:8px">${badge('no','Tratar sempre')}</div>`)}
    ${infoCard('warning','Hipotireoidismo SUBCLÍNICO',`<p>TSH entre limite superior normal e 10 mUI/L</p><p>T4 livre normal</p><p>Paciente geralmente assintomática ou oligossintomática</p><p>Tratamento recomendado na gestação se TSH ≥ 4 ou TSH 2,5-4 + anti-TPO positivo</p><div style="margin-top:8px">${badge('warn','Critérios específicos')}</div>`)}
  </div>

  ${alertBox('info','Causa mais comum','Tireoidite de Hashimoto — hipotireoidismo autoimune com anti-TPO (anticorpo antiperoxidase tireoidiana) positivo. Outras causas: tireoidectomia prévia, hipotireoidismo induzido por medicamentos, deficiência de iodo.','🦠')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🚨','Por que o Hipotireoidismo Importa na Gestação','#e11d48')}
  ${bodyText('O hipotireoidismo descompensado aumenta o risco de múltiplas complicações maternas e fetais. A complicação fetal mais <strong>específica</strong> é o <strong>déficit cognitivo</strong> — porque no 1º trimestre, a tireóide fetal ainda não funciona e o feto depende <em>completamente</em> dos hormônios tireoidianos maternos.')}

  <div class="grid-2 mb-24">
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--color-cardio);margin-bottom:12px">⚠️ Complicações MATERNAS</h4>
      ${styledList(['Anemia','Miopatia','Síndrome do túnel do carpo','Galactorreia','Mixedema (casos graves)','Pré-eclâmpsia (associação)'])}
    </div>
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--error);margin-bottom:12px">🚨 Complicações FETAIS/OBSTÉTRICAS</h4>
      ${styledList(['<strong>Déficit cognitivo</strong> — ESPECÍFICO do hipo','Perda gestacional (abortamento)','Restrição de crescimento fetal (CIUR)','Parto pré-termo','Descolamento prematuro de placenta (DPP)','Óbito fetal'])}
    </div>
  </div>

  ${alertBox('pegadinha','Pegadinha — Déficit Cognitivo é Específico do HIPOTIREOIDISMO','O hipertireoidismo NÃO causa déficit cognitivo fetal. O déficit cognitivo é a complicação ESPECÍFICA do hipotireoidismo — porque o feto no 1º trimestre depende exclusivamente dos hormônios tireoidianos maternos para o desenvolvimento neurológico. A banca vai perguntar isso.','🎭')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('⚠️','Fatores de Risco e Quando Rastrear','#d97706')}
  ${alertBox('atencao','Rastreio NÃO é Universal','O Ministério da Saúde NÃO recomenda dosar TSH para toda gestante. O rastreio é DIRECIONADO para pacientes com fatores de risco ou suspeita clínica.','⚠️')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Fator de Risco</th><th>Rastrear?</th></tr></thead>
    <tbody>
      <tr><td>História familiar de doença tireoidiana</td><td class="cell-check">✅ Sim</td></tr>
      <tr><td>Doença autoimune prévia (DM tipo 1, lúpus, vitiligo)</td><td class="cell-check">✅ Sim</td></tr>
      <tr><td>Tireoidectomia prévia</td><td class="cell-check">✅ Sim</td></tr>
      <tr><td>Sintomas sugestivos (cansaço desproporcional, bócio)</td><td class="cell-check">✅ Sim</td></tr>
      <tr><td>Irradiação cervical prévia</td><td class="cell-check">✅ Sim</td></tr>
      <tr><td>Gestante sem fatores de risco, assintomática</td><td class="cell-cross">❌ Não (não é universal)</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Uma gestante de 16 semanas com história familiar de tireoidite de Hashimoto apresenta cansaço excessivo e ganho de peso de 6 kg acima do esperado. TSH = 8,5 mUI/L, T4 livre normal, anti-TPO positivo. O diagnóstico e conduta são:',
      options: ['Hipotireoidismo franco — iniciar levotiroxina 100 mcg/dia','Hipotireoidismo subclínico com critérios de tratamento — iniciar levotiroxina','Gestação normal — sem necessidade de tratamento','Hipertireoidismo subclínico — iniciar propiltiouracil','Hipotireoidismo subclínico sem critérios — apenas observar'],
      correct: 1,
      explanation: 'TSH 8,5 mUI/L com T4 livre normal = hipotireoidismo subclínico. Com TSH ≥ 4 na gestação, o tratamento está indicado, independentemente do anti-TPO. Anti-TPO positivo reforça a indicação. O hipotireoidismo subclínico tratado reduz risco de abortamento, CIUR e déficit cognitivo fetal.',
      tip: 'TSH ≥ 4 → tratar. TSH 2,5-4 → tratar só se anti-TPO positivo. TSH 2,5-4 com anti-TPO negativo → controverso, maioria não trata.'
    },
    {
      stem: 'Qual das seguintes complicações fetais é ESPECÍFICA do hipotireoidismo materno não tratado, não ocorrendo no hipertireoidismo?',
      options: ['Restrição de crescimento fetal (CIUR)','Parto pré-termo','Déficit cognitivo neonatal','Óbito fetal','Prematuridade'],
      correct: 2,
      explanation: 'O déficit cognitivo é a complicação ESPECÍFICA do hipotireoidismo materno. No 1º trimestre, a tireoide fetal ainda não funciona — o feto depende completamente dos hormônios tireoidianos maternos para o desenvolvimento neurológico. O hipotireoidismo materno priva o feto desses hormônios na fase crítica. CIUR, óbito fetal e prematuridade podem ocorrer em ambas as condições.',
      tip: 'A banca frequentemente pergunta sobre a "complicação específica" de cada doença tireoidiana. Hipo → déficit cognitivo. Hiper → hipertireoidismo fetal/neonatal.'
    },
    {
      stem: 'Gestante de 8 semanas, TSH = 3,2 mUI/L, T4 livre normal, anti-TPO negativo, sem sintomas, sem história familiar de doença tireoidiana. A conduta correta é:',
      options: ['Iniciar levotiroxina — TSH acima de 2,5 mUI/L exige tratamento','Dosar anti-TPO e iniciar levotiroxina se positivo — mas já foi colhido e é negativo; logo, apenas observar','Repetir TSH em 4 semanas e iniciar tratamento se mantiver elevado','Encaminhar à endocrinologia com urgência','Solicitar cintilografia de tireoide'],
      correct: 1,
      explanation: 'TSH 2,5-4 mUI/L com anti-TPO negativo: conduta controversa, mas a posição mais aceita (e resposta de prova) é NÃO tratar. O tratamento está indicado nessa faixa apenas se anti-TPO positivo. Sem fatores de risco e anti-TPO negativo, a conduta é observar com controle laboratorial.',
      tip: 'Na faixa TSH 2,5-4: "anti-TPO positivo = tratar; anti-TPO negativo = não tratar" é a resposta de prova mais comum.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 04 — HIPOTIREOIDISMO: FISIOPATOLOGIA
   =================================================== */
GO_RENDER['hipo-fisio'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('⚙️ Tireoide — Página 3','Hipotireoidismo: Fisiopatologia e o que Muda na Gestação','A gestação aumenta a demanda por hormônios tireoidianos em até 30-50%. Quem já era hipotireoidea precisa de mais levotiroxina. Quem nunca soube que tinha pode descompensar.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('⚙️','Mecanismo Fisiopatológico Básico','#0891b2')}
  <div class="flow-container mb-24">
    <div class="flow-step">Doença (Hashimoto, tireoidectomia, etc.) → Tireoide produz menos T3/T4</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">TSH aumenta (hipófise tenta compensar estimulando a tireoide)</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Metabolismo celular reduzido → sintomas clínicos</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step decision" style="clip-path:none;padding:12px 20px;border-radius:12px;background:#fffbeb;">Na gestação: ↑ demanda por T3/T4 (por HCG, necessidade fetal, degradação placentária)</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step" style="border-color:var(--error);background:var(--error-light)">Descompensação: mesmo quem era compensado pode descompensar</div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🤰','O que a Gestação Muda na Fisiopatologia','#9333ea')}
  <div class="grid-2 mb-16">
    ${glassCard(`<h4>Por que a demanda aumenta na gestação?</h4>
    ${styledList([
      'HCG estimula a tireoide (ação TSH-like)',
      'Aumento do volume de distribuição (↑ volume plasmático)',
      'Aumento da degradação placentária de T4 → T3 reverso (inativo)',
      'Feto depende completamente do T4 materno no 1º trimestre',
      'Aumento das proteínas carreadoras → mais T4 sequestrado'
    ])}`)}
    ${glassCard(`<h4>Consequência prática</h4>
    ${alertBox('atencao','Aumento de dose obrigatório',
      'Paciente que já usava levotiroxina antes de engravidar precisa <strong>aumentar a dose em 30%</strong> logo no 1º trimestre. Algumas referências indicam aumento ainda antes da gestação (no momento do planejamento).',
      '💊')}`)}
  </div>

  ${sectionHeader('🗓️','Linha do Tempo na Gestação','#0891b2')}
  <div class="timeline mb-24">
    <div class="timeline-item active">
      <div class="timeline-period">Pré-concepcional</div>
      <div class="timeline-content">Ajustar dose de levotiroxina para manter TSH &lt; 2,5 mUI/L. Planejar gestação com tireoide compensada.</div>
    </div>
    <div class="timeline-item active">
      <div class="timeline-period">1º Trimestre</div>
      <div class="timeline-content"><strong>Fase crítica.</strong> Feto depende de T4 materno para desenvolvimento neurológico. Aumentar dose 30% já na confirmação da gestação. Se diagnóstico novo: iniciar tratamento imediatamente. Rastrear se fatores de risco.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-period">2º Trimestre</div>
      <div class="timeline-content">Manter controle. Ajustar dose conforme TSH. Tireoide fetal já funciona (≈16-20 semanas), mas mãe ainda precisa manter eutireoidismo. Avaliar crescimento fetal.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-period">3º Trimestre</div>
      <div class="timeline-content">Manter tratamento. Rastrear pré-eclâmpsia. Avaliar crescimento (risco CIUR). Vitalidade fetal se CIUR detectado.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-period">Pós-parto</div>
      <div class="timeline-content">Geralmente reduzir dose (retorna à dose pré-gestacional). Reavaliar TSH 6-8 semanas após o parto. Continuar levotiroxina se causa permanente (Hashimoto, pós-tireoidectomia).</div>
    </div>
  </div>

  ${sectionHeader('🩺','Quadro Clínico e Diagnóstico Diferencial com Gestação Normal','#0891b2')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Achado</th><th>Normal da Gestação</th><th>Suspeitar de Hipotireoidismo</th></tr></thead>
    <tbody>
      <tr><td>Cansaço</td><td>Comum, melhora com repouso</td><td class="cell-highlight">Desproporcional, não alivia com repouso</td></tr>
      <tr><td>Ganho de peso</td><td>Progressivo, dentro da curva</td><td class="cell-highlight">Excessivo, desproporcional à ingesta</td></tr>
      <tr><td>Sono</td><td>Aumentado, 1º e 3º trimestres</td><td class="cell-highlight">Sonolência extrema, não restauradora</td></tr>
      <tr><td>Pele</td><td>Estrias, hiperpigmentação</td><td class="cell-highlight">Pele seca, fria, mixedematosa</td></tr>
      <tr><td>Constipação</td><td>Comum (progesterona)</td><td class="cell-highlight">Intensa, refratária</td></tr>
      <tr><td>Tireoide</td><td>Leve aumento fisiológico</td><td class="cell-highlight">Bócio evidente à palpação</td></tr>
      <tr><td>História</td><td>Sintomas surgem na gestação</td><td class="cell-highlight">Sintomas pré-existentes, história familiar+</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Paciente com hipotireoidismo por doença de Hashimoto em uso de levotiroxina 75 mcg/dia. TSH pré-concepcional: 1,8 mUI/L. Descobriu gravidez de 6 semanas. A conduta imediata deve ser:',
      options: ['Manter dose de 75 mcg e repetir TSH em 12 semanas','Reduzir dose para 50 mcg para evitar hipertireoidismo fetal','Aumentar dose em 30% (≈100 mcg/dia) imediatamente','Suspender levotiroxina pois T4 placentário supre a necessidade fetal','Substituir levotiroxina por metimazol'],
      correct: 2,
      explanation: 'Paciente já usuária de levotiroxina que engravida deve aumentar a dose em 30% no 1º trimestre, sem esperar resultado do TSH. Isso se deve ao aumento da demanda pelos hormônios tireoidianos na gestação. Dose: 75 mcg × 1,3 ≈ 100 mcg. Ajuste fino posterior conforme TSH.',
      tip: 'Algumas referências indicam aumentar a dose já antes da gestação, no momento do planejamento.'
    },
    {
      stem: 'O mecanismo pelo qual o hipotireoidismo materno não tratado no 1º trimestre causa déficit cognitivo fetal é:',
      options: ['Passagem transplacentária de anticorpos anti-tireoide que lesam o cérebro fetal','Hipoperfusão placentária que reduz aporte de glicose ao cérebro fetal','O feto depende exclusivamente dos hormônios tireoidianos maternos no 1º trimestre para desenvolvimento neurológico','Ação direta do TSH elevado sobre os neurônios fetais','Vasoconstricção placentária causada pelo mixedema materno'],
      correct: 2,
      explanation: 'A tireoide fetal só começa a funcionar por volta de 16-20 semanas. Até lá, o feto depende 100% dos hormônios tireoidianos maternos para o desenvolvimento neurológico. O hipotireoidismo materno no 1º trimestre priva o cérebro fetal desses hormônios na janela crítica de desenvolvimento, causando déficit cognitivo permanente.',
      tip: 'Depois de 16-20 semanas, a tireoide fetal assume sua função. Mas a janela do 1º trimestre é irreversível — daí a urgência em tratar.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 05 — HIPOTIREOIDISMO: DIAGNÓSTICO
   =================================================== */
GO_RENDER['hipo-dx'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🔬 Tireoide — Página 4','Hipotireoidismo: Diagnóstico e Fluxograma de Conduta','O TSH é o exame de rastreamento. Mas a interpretação depende do valor, do trimestre e do anti-TPO. Aqui você treina o fluxograma completo.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('🔬','Exames e Interpretação','#0891b2')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Exame de escolha para rastreamento</h4>
    ${bodyText('<strong>TSH</strong> — sensível, fácil, barato. É o melhor exame de triagem.')}
    ${bodyText('T4 livre: solicitado quando TSH está alterado, para definir franco vs subclínico.')}
    ${bodyText('<strong>Anti-TPO:</strong> indica etiologia autoimune (Hashimoto) e modifica conduta quando TSH está na "zona cinzenta" (2,5-4 mUI/L).')}`)}
    ${glassCard(`<h4>Quando anti-TPO muda a conduta?</h4>
    ${styledList([
      'TSH > 10: tratar independente do anti-TPO',
      'TSH 4-10: tratar independente do anti-TPO',
      'TSH 2,5-4 + anti-TPO positivo: <strong>TRATAR</strong>',
      'TSH 2,5-4 + anti-TPO negativo: <strong>NÃO TRATAR</strong> (mais aceito)',
      'TSH < 2,5: normal — não tratar'
    ])}`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🌊','Fluxograma de Decisão','#0891b2')}
  <div class="simulator-card">
    <h4>🔧 Simulador de Fluxograma — Hipotireoidismo na Gestação</h4>
    <label class="sim-label">Valor do TSH (mUI/L):</label>
    <input class="sim-input" type="number" id="hipo-tsh" placeholder="Ex: 6.0" step="0.1" min="0" max="25">
    <label class="sim-label">T4 livre:</label>
    <select class="sim-select" id="hipo-t4">
      <option value="">-- Selecione --</option>
      <option value="normal">Normal</option>
      <option value="baixo">Diminuído / Baixo</option>
    </select>
    <label class="sim-label">Anti-TPO (se TSH entre 2,5-4):</label>
    <select class="sim-select" id="hipo-tpo">
      <option value="">-- Selecione --</option>
      <option value="pos">Positivo (reagente)</option>
      <option value="neg">Negativo (não reagente)</option>
      <option value="na">Não se aplica / Não dosado</option>
    </select>
    <button class="sim-btn" onclick="calcHipo()">📋 Ver Diagnóstico e Conduta</button>
    <div class="sim-result neutral mt-16" id="hipo-result">Preencha os campos acima.</div>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🎯','Como Pensar em Questão de Residência','#9333ea')}
  ${provaCard('Como suspeitar?','Cansaço desproporcional, sonolência, ganho de peso excessivo, pele seca, constipação, bócio, história familiar de doença tireoidiana, doença autoimune.')}
  ${provaCard('Qual dado muda a conduta?','Valor do TSH (> 4 = tratar; > 10 = tratar urgente) + anti-TPO (muda conduta na faixa 2,5-4) + T4 livre (define franco vs subclínico).')}
  ${provaCard('Qual dado define interrupção?','O hipotireoidismo PER SE não indica interrupção. Interromper por complicações: pré-eclâmpsia grave, CIUR grave com Doppler alterado, sofrimento fetal.')}
  ${provaCard('Qual dado define via de parto?','Indicação obstétrica. Hipotireoidismo controlado NÃO contraindica parto vaginal.')}
  ${provaCard('Resposta mais provável da banca','Tratar se TSH ≥ 4 (qualquer valor de T4). Tratar se TSH 2,5-4 + anti-TPO positivo. NÃO tratar se TSH 2,5-4 + anti-TPO negativo.')}

  ${alertBox('pegadinha','Não Confunda','Rastreio universal de tireoide na gestação NÃO é recomendado pelo Ministério da Saúde (Brasil). Não pedir TSH para todas as gestantes — apenas para aquelas com fatores de risco ou suspeita clínica.','🎭')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 20 semanas. TSH = 5,8 mUI/L, T4 livre normal. Anti-TPO: não foi dosado. Qual a conduta?',
      options: ['Não tratar — hipotireoidismo subclínico sem sintomas não requer tratamento na gestação','Tratar com levotiroxina — TSH ≥ 4 na gestação é indicação de tratamento','Aguardar resultado do anti-TPO antes de qualquer decisão','Tratar apenas se T4 livre estiver baixo','Tratar apenas se sintomática'],
      correct: 1,
      explanation: 'TSH ≥ 4 mUI/L na gestação é indicação de tratamento com levotiroxina, independentemente do anti-TPO ou dos sintomas. O risco de complicações (CIUR, pré-eclâmpsia, déficit cognitivo) supera os riscos da levotiroxina (segura, categoria A). Anti-TPO é relevante apenas na faixa 2,5-4 mUI/L.',
      tip: 'Memorize: TSH ≥ 4 → tratar sempre. Anti-TPO só importa na zona cinzenta (2,5-4).'
    },
    {
      stem: 'Uma gestante hipotireoidea em uso de levotiroxina 100 mcg/dia vem ao pré-natal com TSH de 0,3 mUI/L no 2º trimestre. A conduta correta é:',
      options: ['Reduzir dose — TSH suprimido indica hipertireoidismo iatrogênico','Manter dose — TSH levemente suprimido no 2º trimestre é meta terapêutica aceitável','Suspender levotiroxina temporariamente e reassessão em 4 semanas','Adicionar metimazol à levotiroxina','Solicitar T3 livre para melhor avaliação'],
      correct: 0,
      explanation: 'TSH de 0,3 mUI/L no 2º trimestre está suprimido e pode indicar dose excessiva de levotiroxina. A meta terapêutica no tratamento do hipotireoidismo na gestação é manter TSH < 2,5 mUI/L no 1º trimestre e < 3,0 mUI/L no 2º/3º trimestre. TSH suprimido = reduzir dose.',
      tip: 'Meta TSH no tratamento: < 2,5 no 1º trim; < 3,0 no 2º/3º trim. Não suprimir o TSH.'
    }
  ]);
  GO_NAV(el, page);
};

window.calcHipo = function() {
  const tsh = parseFloat(document.getElementById('hipo-tsh')?.value);
  const t4  = document.getElementById('hipo-t4')?.value;
  const tpo = document.getElementById('hipo-tpo')?.value;
  const res = document.getElementById('hipo-result');
  if (!res) return;
  if (isNaN(tsh)) { res.className='sim-result neutral'; res.textContent='Informe o valor do TSH.'; return; }

  let diag='', conduta='', cls='neutral';
  if (tsh > 10) {
    diag='Hipotireoidismo FRANCO';
    conduta='Iniciar levotiroxina IMEDIATAMENTE. Meta: TSH < 2,5 mUI/L.';
    cls='danger';
  } else if (tsh >= 4 && tsh <= 10) {
    diag='Hipotireoidismo SUBCLÍNICO com critérios de tratamento';
    conduta='Iniciar levotiroxina. TSH ≥ 4 = indicação de tratamento na gestação independentemente do anti-TPO.';
    cls='warn';
  } else if (tsh >= 2.5 && tsh < 4) {
    if (tpo === 'pos') {
      diag='Hipotireoidismo subclínico na zona cinzenta + anti-TPO positivo';
      conduta='TRATAR com levotiroxina. Anti-TPO positivo + TSH 2,5-4 = indicação de tratamento.';
      cls='warn';
    } else if (tpo === 'neg') {
      diag='TSH na zona cinzenta + anti-TPO negativo';
      conduta='NÃO TRATAR (conduta mais aceita). Conduta controversa, mas maioria dos guidelines não trata nessa situação.';
      cls='ok';
    } else {
      diag='TSH na zona cinzenta (2,5-4 mUI/L)';
      conduta='DOSAR ANTI-TPO. Se positivo → tratar. Se negativo → maioria não trata.';
      cls='warn';
    }
  } else if (tsh < 2.5) {
    diag='TSH normal / Eutireoidismo';
    conduta='Nenhuma intervenção necessária em paciente assintomática sem fatores de risco.';
    cls='ok';
  }
  res.className=`sim-result ${cls}`;
  res.innerHTML=`<div><strong>${diag}</strong><br>${conduta}</div>`;
};

/* ===================================================
   PÁGINA 06 — HIPOTIREOIDISMO: TRATAMENTO
   =================================================== */
GO_RENDER['hipo-tto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('💊 Tireoide — Página 5','Hipotireoidismo: Tratamento, Medicações e Meta Laboratorial','Levotiroxina é segura, categoria A. A meta é TSH < 2,5 no 1º trimestre e < 3,0 no 2º/3º. Se já usava antes de engravidar: aumentar 30% imediatamente.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('💊','Tratamento','#0891b2')}
  <div class="med-group">
    <div class="med-group-title" style="color:var(--success)">✅ PODE USAR — Droga de Escolha</div>
    ${medCard('can','💊','Levotiroxina (T4 sintético)','Droga de escolha. Segura (categoria A). Repõe T4 endógeno. Tomar em jejum, 30-60 min antes do café da manhã. Longe de suplementos de cálcio, ferro e antiácidos (interferem na absorção). Dose ajustada conforme TSH.')}
  </div>

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Meta terapêutica por trimestre</h4>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">
      <div style="padding:10px 14px;border-radius:8px;background:var(--success-light);border-left:3px solid var(--success)"><strong>1º Trimestre:</strong> TSH &lt; 2,5 mUI/L</div>
      <div style="padding:10px 14px;border-radius:8px;background:rgba(59,130,246,0.1);border-left:3px solid var(--info)"><strong>2º Trimestre:</strong> TSH &lt; 3,0 mUI/L</div>
      <div style="padding:10px 14px;border-radius:8px;background:rgba(59,130,246,0.1);border-left:3px solid var(--info)"><strong>3º Trimestre:</strong> TSH &lt; 3,0 mUI/L</div>
    </div>`)}
    ${glassCard(`<h4>Ajuste de dose</h4>
    ${styledList([
      'Paciente virgen de tratamento: iniciar com 1,6 mcg/kg/dia',
      'Quem já usava: aumentar 30% imediatamente no 1º trimestre',
      'Ex: 75 mcg → 100 mcg; 100 mcg → 125-137 mcg',
      'Controle: TSH a cada 4 semanas no 1º/2º trim; a cada 4-6 sem no 3º trim',
      'Pós-parto: retornar dose pré-gestacional. Checar TSH 6-8 sem após'
    ])}`)}
  </div>

  ${sectionHeader('🚫','Medicamentos na Gestação — Regras Gerais','#e11d48')}
  ${alertBox('danger','Não há contraindicação para levotiroxina','A levotiroxina não atravessa a placenta de forma significativa. É segura em qualquer trimestre. A preocupação é não suprimir o TSH (meta é eutireoidismo, não supressão).','🛡️')}

  ${glassCard(`<h4>Interações que reduzem absorção da levotiroxina</h4>
  ${styledList([
    'Sulfato ferroso (ferro): tomar 2h separado',
    'Carbonato de cálcio: tomar 2h separado',
    'Antiácidos (hidróxido de alumínio e magnésio)',
    'Colestiramina',
    'Omeprazol/IBPs (reduzem absorção)'
  ])}
  <p style="font-size:var(--text-xs);color:var(--text-muted);margin-top:8px">No pré-natal, ferro e cálcio são prescritos rotineiramente. Orientar a paciente a tomar levotiroxina sempre em jejum, separado de outros medicamentos.</p>`)
  }
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('📋','Resumo de Alto Rendimento','#0891b2')}
  <ol class="resumo-list">
    ${resumoItem(1,'#0891b2','<strong>Definição:</strong> TSH aumentado + T4 livre diminuído (franco) ou normal (subclínico)')}
    ${resumoItem(2,'#0891b2','<strong>Causa principal:</strong> Hashimoto (autoimune, anti-TPO positivo)')}
    ${resumoItem(3,'#0891b2','<strong>Fisiopatologia-chave:</strong> déficit de T3/T4; na gestação, demanda aumenta; feto depende de T4 materno no 1º trimestre')}
    ${resumoItem(4,'#0891b2','<strong>Achado mais frequente:</strong> cansaço, sono, ganho de peso — CONFUNDE com gestação normal')}
    ${resumoItem(5,'#0891b2','<strong>Achado mais específico:</strong> bócio, anti-TPO positivo, TSH > 10')}
    ${resumoItem(6,'#0891b2','<strong>Complicação fetal específica:</strong> déficit cognitivo (1º trimestre)')}
    ${resumoItem(7,'#0891b2','<strong>Medicação:</strong> Levotiroxina (categoria A, segura). Aumentar 30% no 1º trim se já usava')}
    ${resumoItem(8,'#0891b2','<strong>Meta:</strong> TSH &lt; 2,5 no 1º trim; &lt; 3,0 no 2º/3º trim')}
    ${resumoItem(9,'#0891b2','<strong>Via de parto:</strong> vaginal (indicação obstétrica). Hipo não muda via de parto')}
    ${resumoItem(10,'#0891b2','<strong>Pegadinha:</strong> Rastreio NÃO é universal; anti-TPO muda conduta só na faixa TSH 2,5-4')}
  </ol>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 14 semanas com hipotireoidismo de Hashimoto em uso de levotiroxina 88 mcg/dia iniciou pré-natal. TSH = 1,6 mUI/L no 1º trimestre. No 2º trimestre (20 semanas), o TSH é de 3,8 mUI/L. Qual a conduta?',
      options: ['Manter dose — 3,8 está abaixo de 4, portanto dentro do alvo','Aumentar dose de levotiroxina — TSH de 3,8 no 2º trimestre está acima da meta (< 3,0)','Substituir levotiroxina por T3 (liotironina)','Adicionar metimazol para controle','Suspender levotiroxina pois a tireoide fetal já funciona'],
      correct: 1,
      explanation: 'A meta de TSH no 2º e 3º trimestres é < 3,0 mUI/L. TSH de 3,8 está acima da meta — indicação de ajuste de dose (aumentar levotiroxina). A dose deve ser titulada para atingir a meta terapêutica de cada trimestre.',
      tip: 'A meta muda por trimestre: 1º trim < 2,5; 2º e 3º trim < 3,0. Cuidado para não confundir.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 07 — HIPOTIREOIDISMO: VIA DE PARTO
   =================================================== */
GO_RENDER['hipo-parto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🤱 Tireoide — Página 6','Hipotireoidismo: Via de Parto e Interrupção da Gestação','Hipotireoidismo controlado: parto vaginal, sem antecipação. A cesárea e a antecipação são por complicações obstétricas, não pela doença em si.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('🏥','Via de Parto — Raciocínio Completo','#0891b2')}

  ${partoCard('vaginal','Parto Vaginal — Regra Geral no Hipotireoidismo Controlado',[
    'Hipotireoidismo controlado NÃO contraindica parto vaginal',
    'Não há contraindicação a contrações uterinas',
    'Não há risco de descompensação aguda durante trabalho de parto',
    'Sangramento pós-parto não é aumentado pelo hipotireoidismo controlado',
    'Indução pode ser realizada se indicada (hipotireoidismo não contraindica ocitocina)'
  ])}

  ${partoCard('cesarea','Cesárea — Apenas por Critérios Obstétricos Habituais',[
    'Desproporção cefalopélvica',
    'Apresentação pélvica sem critérios para vaginal',
    'Placenta prévia',
    'Cesárea anterior com contraindicação a PVCS',
    'Sofrimento fetal intraparto',
    '<strong>NÃO</strong> é indicada pelo hipotireoidismo em si'
  ])}

  ${alertBox('success','Frase de Decisão para Prova','"No hipotireoidismo, a via de parto é vaginal, porque a doença controlada não interfere no trabalho de parto nem oferece risco materno-fetal agudo. A cesárea fica reservada para indicações obstétricas habituais."','✅')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('⏰','Quando Interromper a Gestação','#e11d48')}
  ${alertBox('info','Regra geral','Hipotireoidismo controlado NÃO é indicação de interrupção da gestação. Não há necessidade de antecipação pela doença per se.','ℹ️')}

  <div class="grid-2 mb-24">
    ${infoCard('warning','Critério Materno',`<ul><li>Hipotireoidismo descompensado refratário (raro)</li><li>Pré-eclâmpsia grave</li></ul>`)}
    ${infoCard('danger','Critério Fetal',`<ul><li>CIUR grave com alteração de Doppler</li><li>Sofrimento fetal (vitalidade alterada)</li><li>Oligoidrâmnio grave</li><li>Óbito fetal</li></ul>`)}
  </div>

  ${bodyText('<strong>Trade-off:</strong> em hipotireoidismo controlado, o risco da prematuridade supera qualquer benefício de antecipação. Se houver complicações obstétricas graves (CIUR com diástole zero, pré-eclâmpsia grave), o risco de manter supera o da prematuridade.')}

  ${sectionHeader('🔴','O que Pode Acontecer se Não Tratar','#e11d48')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Sequela</th><th>Mecanismo</th><th>Quando mais relevante</th></tr></thead>
    <tbody>
      <tr><td>Déficit cognitivo fetal</td><td>Privação de T4 no desenvolvimento neurológico</td><td>1º Trimestre (irreversível)</td></tr>
      <tr><td>Abortamento</td><td>Insuficiência placentária precoce</td><td>1º e 2º trimestre</td></tr>
      <tr><td>CIUR</td><td>Insuficiência placentária crônica</td><td>2º e 3º trimestre</td></tr>
      <tr><td>Pré-eclâmpsia</td><td>Disfunção endotelial (mecanismo multifatorial)</td><td>2º e 3º trimestre</td></tr>
      <tr><td>DPP</td><td>Insuficiência placentária + hipertensão</td><td>3º trimestre</td></tr>
      <tr><td>Parto pré-termo</td><td>Insuficiência placentária</td><td>2º e 3º trimestre</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 36 semanas com hipotireoidismo controlado (TSH 1,8 mUI/L em uso de levotiroxina), sem complicações obstétricas, apresenta-se para discussão do plano de parto. Qual a conduta obstétrica correta?',
      options: ['Cesárea eletiva às 37 semanas para evitar risco de descompensação intraparto','Cesárea eletiva às 38 semanas como padrão para pacientes hipotireoideas','Aguardar trabalho de parto espontâneo ou induzir por indicação obstétrica habitual','Interromper imediatamente por risco de óbito fetal','Manutenção obrigatória de monitorização contínua durante trabalho de parto'],
      correct: 2,
      explanation: 'Hipotireoidismo controlado não é indicação de cesárea eletiva nem de antecipação do parto. A conduta é aguardar trabalho de parto espontâneo ou induzir quando houver indicação obstétrica. A via de parto segue as indicações habituais, sem modificação pelo hipotireoidismo compensado.',
      tip: 'A pergunta-chave é sempre: "a doença está controlada?". Se sim → conduta obstétrica padrão.'
    },
    {
      stem: 'Gestante de 32 semanas com hipotireoidismo de Hashimoto, em uso de levotiroxina. TSH = 12 mUI/L (paciente não estava tomando o medicamento regularmente). Ultrassom evidencia CIUR grave (P3) com diástole zero na artéria umbilical. A conduta é:',
      options: ['Aumentar levotiroxina e aguardar CIUR reverter','Antecipação do parto (indicação: CIUR grave com Doppler alterado) + corticoide para maturidade pulmonar','Realizar cesárea de urgência imediata sem corticoide','Manter expectante até 34 semanas independente do Doppler','Indicar cerclagem cervical para prolongar a gestação'],
      correct: 1,
      explanation: 'CIUR grave com diástole zero na artéria umbilical é indicação de interrupção da gestação, independentemente da causa. Com 32 semanas, deve-se administrar corticoide para maturidade pulmonar fetal e programar a antecipação. A levotiroxina deve ser regularizada, mas a indicação de interrupção é pela gravidade do CIUR, não pelo hipotireoidismo per se.',
      tip: 'Diástole zero → antecipação. Diástole reversa → antecipação imediata. O hipotireoidismo é a causa do CIUR, mas a indicação de parto é o CIUR com Doppler alterado.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 08 — HIPERTIREOIDISMO: DEFINIÇÃO
   =================================================== */
GO_RENDER['hiper-def'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('📈 Tireoide — Página 7','Hipertireoidismo: Definição e Classificação','A grande diferença que a banca adora: Doença de Graves (tratar) vs Tireotoxicose Gestacional Transitória (NÃO tratar). Saber diferenciar é o ponto-chave.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('📋','Classificação das Formas','#0891b2')}
  <div class="grid-3 mb-24">
    ${glassCard(`<h4 style="color:var(--error)">Hipertireoidismo FRANCO</h4>
    <p style="font-size:var(--text-xs);color:var(--text-muted);margin:8px 0">TSH suprimido + T4 livre aumentado</p>
    <hr style="border:none;border-top:1px solid var(--border-color);margin:10px 0">
    ${styledList(['Causa: Doença de Graves (95%)','Bócio difuso presente','Oftalmopatia possível','Autoanticorpos: anti-receptor de TSH positivo','Persiste a gestação toda','TRATAR com antitireoidiano'])}`,'delay-1')}
    ${glassCard(`<h4 style="color:var(--warning)">Hipertireoidismo SUBCLÍNICO</h4>
    <p style="font-size:var(--text-xs);color:var(--text-muted);margin:8px 0">TSH suprimido + T4 livre normal</p>
    <hr style="border:none;border-top:1px solid var(--border-color);margin:10px 0">
    ${styledList(['Paciente assintomática ou pouco sintomática','Sem bócio expressivo','NÃO TRATAR na gestação','Risco-benefício desfavorável','Controle clínico e laboratorial'])}`)}
    ${glassCard(`<h4 style="color:var(--success)">Tireotoxicose TRANSITÓRIA</h4>
    <p style="font-size:var(--text-xs);color:var(--text-muted);margin:8px 0">TSH suprimido + T4 livre normal/levemente ↑</p>
    <hr style="border:none;border-top:1px solid var(--border-color);margin:10px 0">
    ${styledList(['Causa: HCG elevado','1º Trimestre (pico 10-12 sem)','Associada a hiperêmese, gemelar, mola','Sem bócio, sem oftalmopatia, anticorpos negativos','Resolve espontaneamente','NÃO TRATAR'])}`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${alertBox('pegadinha','A Pegadinha Mais Clássica do Hipertireoidismo','A banca apresenta gestante de 8-10 semanas com hiperêmese, TSH suprimido e T4 livre discretamente elevado, sem bócio, sem anticorpos — e pergunta: "Iniciar antitireoidiano?" A resposta é NÃO. É tireotoxicose transitória.','🎭')}

  ${sectionHeader('⚖️','Como Diferenciar: Graves vs Transitório','#0891b2')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Característica</th><th>Doença de Graves</th><th>Tireotoxicose Transitória</th></tr></thead>
    <tbody>
      <tr><td>Duração</td><td class="cell-cross">Gestação toda</td><td class="cell-check">Até ~12-16 semanas</td></tr>
      <tr><td>Bócio</td><td class="cell-cross">Presente (difuso)</td><td class="cell-check">Ausente</td></tr>
      <tr><td>Oftalmopatia</td><td class="cell-cross">Pode ter (exoftalmia)</td><td class="cell-check">Ausente</td></tr>
      <tr><td>Autoanticorpos (anti-rec. TSH)</td><td class="cell-cross">Positivos</td><td class="cell-check">Negativos</td></tr>
      <tr><td>T4 livre</td><td class="cell-cross">Muito aumentado</td><td class="cell-check">Normal ou levemente ↑</td></tr>
      <tr><td>Associação</td><td class="cell-cross">Doença autoimune</td><td class="cell-check">HCG elevado, hiperêmese, gemelar, mola</td></tr>
      <tr><td>Tratamento</td><td class="cell-cross">Antitireoidiano</td><td class="cell-check">NÃO tratar</td></tr>
    </tbody>
  </table>
  </div>

  <div class="simulator-card">
    <h4>🔧 Diferenciador: Graves ou Transitório?</h4>
    <div class="criteria-list" id="hiper-crit">
      ${[
        ['bocio','Bócio difuso palpável',2,'graves'],
        ['exoftalmia','Exoftalmia / oftalmopatia',3,'graves'],
        ['anticorpo','Anti-receptor de TSH positivo',3,'graves'],
        ['t4alto','T4 livre muito elevado (> 2× LSN)',2,'graves'],
        ['hiperemese','Associação com hiperêmese gravídica',2,'transitorio'],
        ['1trim','1º trimestre, pico 10-12 semanas',1,'transitorio'],
        ['sem_bocio','Sem bócio, sem oftalmopatia, anticorpos negativos',2,'transitorio'],
      ].map(([id,label,score,type])=>`
        <div class="criteria-item" id="crit-${id}" onclick="toggleHiperCrit(this,'${type}')">
          <div class="criteria-checkbox" id="cb-${id}"></div>
          <span class="criteria-label">${label}</span>
          <span class="criteria-score">${type==='graves'?'→ Graves':'→ Transitório'}</span>
        </div>`).join('')}
    </div>
    <div class="sim-result neutral" id="hiper-crit-result">Selecione os achados presentes na paciente.</div>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 11 semanas com vômitos intensos (hiperêmese gravídica), perda de 4 kg, TSH = 0,08 mUI/L, T4 livre = 1,9 ng/dL (LSN: 1,8). Sem bócio à palpação, sem oftalmopatia. Anti-receptor de TSH: negativo. A conduta é:',
      options: ['Iniciar propiltiouracil imediatamente — TSH suprimido exige tratamento','Iniciar metimazol — é o antitireoidiano de menor risco no 1º trimestre','Hospitalizar e tratar a hiperêmese; não iniciar antitireoidiano — tireotoxicose transitória','Realizar cintilografia de tireoide para definir conduta','Internar para tireoidectomia de urgência'],
      correct: 2,
      explanation: 'Tireotoxicose gestacional transitória: TSH suprimido com T4 livre levemente elevado, no contexto de hiperêmese no 1º trimestre, sem bócio, sem oftalmopatia e anticorpos negativos. Causa: ação do HCG elevado nos receptores de TSH. Resolve espontaneamente após o pico do HCG. Tratar a hiperêmese (hidratação, antieméticos). NÃO iniciar antitireoidiano.',
      tip: 'A cintilografia é contraindicada na gestação. Nunca é a resposta em gestante.'
    },
    {
      stem: 'A oftalmopatia (exoftalmia) em paciente com TSH suprimido na gestação é:',
      options: ['Achado comum, presente em qualquer causa de hipertireoidismo','Praticamente patognomônica de tireotoxicose transitória','Praticamente patognomônica de Doença de Graves','Sinal de gravidade do hipotireoidismo','Efeito adverso do propiltiouracil'],
      correct: 2,
      explanation: 'A oftalmopatia (exoftalmia — "olhos saltados") é praticamente patognomônica da Doença de Graves. Não ocorre na tireotoxicose transitória. Sua presença confirma o diagnóstico de Graves e indica necessidade de tratamento com antitireoidiano.',
      tip: 'Sem oftalmopatia não exclui Graves — mas com oftalmopatia, praticamente confirma.'
    }
  ]);
  GO_NAV(el, page);
};

window.toggleHiperCrit = function(item, type) {
  item.classList.toggle('checked');
  const cb = item.querySelector('.criteria-checkbox');
  if (item.classList.contains('checked')) cb.textContent = '✓';
  else cb.textContent = '';
  const gravesScore = document.querySelectorAll('.criteria-item.checked[id*="bocio"], .criteria-item.checked[id*="exoftalmia"], .criteria-item.checked[id*="anticorpo"], .criteria-item.checked[id*="t4alto"]').length;
  const transScore  = document.querySelectorAll('.criteria-item.checked[id*="hiperemese"], .criteria-item.checked[id*="1trim"], .criteria-item.checked[id*="sem_bocio"]').length;
  const res = document.getElementById('hiper-crit-result');
  if (!res) return;
  if (gravesScore === 0 && transScore === 0) { res.className='sim-result neutral'; res.textContent='Selecione os achados presentes.'; return; }
  if (gravesScore > transScore) { res.className='sim-result danger'; res.textContent=`⚠️ Padrão compatível com Doença de Graves. Tratar com antitireoidiano (PTU no 1º trim, metimazol no 2º/3º trim).`; }
  else if (transScore > gravesScore) { res.className='sim-result ok'; res.textContent=`✅ Padrão compatível com Tireotoxicose Gestacional Transitória. NÃO tratar. Tratar a causa (ex: hiperêmese). Reavaliar em 4-6 semanas.`; }
  else { res.className='sim-result warn'; res.textContent=`🔍 Achados mistos. Dosar anti-receptor de TSH para diferenciar. Observar evolução clínica.`; }
};

/* ===================================================
   PÁGINA 09 — HIPERTIREOIDISMO: DIAGNÓSTICO
   =================================================== */
GO_RENDER['hiper-dx'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🔭 Tireoide — Página 8','Hipertireoidismo: Diagnóstico e Raciocínio Clínico','Sintomas que mimetizam a gestação normal, mas com intensidade desproporcional. A taquicardia, o tremor e a intolerância ao calor são pistas. O TSH suprimido confirma.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('🩺','Quadro Clínico — Sintomas vs Gestação Normal','#0891b2')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Achado</th><th>Normal da Gestação</th><th>Suspeitar de Hipertireoidismo</th></tr></thead>
    <tbody>
      <tr><td>Taquicardia</td><td>FC 80-100 bpm, assintomática</td><td class="cell-highlight">FC > 100 bpm persistente, palpitações</td></tr>
      <tr><td>Sensação de calor</td><td>Comum, tolerável</td><td class="cell-highlight">Intolerância marcada, sudorese excessiva</td></tr>
      <tr><td>Ansiedade</td><td>Comum, não interfere na vida</td><td class="cell-highlight">Agitação extrema, nervosismo incapacitante</td></tr>
      <tr><td>Peso</td><td>Ganho progressivo</td><td class="cell-highlight">Ganho insuficiente ou perda de peso</td></tr>
      <tr><td>Olhos</td><td>Normal</td><td class="cell-highlight">Exoftalmia (olhos saltados) — muito específico de Graves</td></tr>
      <tr><td>Tireoide</td><td>Leve aumento fisiológico</td><td class="cell-highlight">Bócio evidente, especialmente difuso</td></tr>
    </tbody>
  </table>
  </div>

  ${sectionHeader('🚨','Crise Tireotóxica — Emergência','#e11d48')}
  ${alertBox('danger','Reconhecer a Crise Tireotóxica','FC > 140 bpm + Febre + Agitação extrema / Confusão mental + Insuficiência cardíaca + Arritmia. Pode evoluir para choque e morte. Tratamento: UTI + PTU + Betabloqueador + Suporte.','🚨')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔬','Exames Diagnósticos','#0891b2')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Exames de Tireoide</h4>
    ${styledList([
      'TSH: suprimido (baixo ou indetectável)',
      'T4 livre: aumentado (franco) ou normal (subclínico/transitório)',
      'T3 total: aumentado',
      'Anti-receptor de TSH: positivo na Doença de Graves',
      '<strong>Cintilografia: CONTRAINDICADA na gestação</strong>'
    ])}`)}
    ${glassCard(`<h4>Exames Gerais</h4>
    ${styledList([
      'Hemograma (leucopenia pode ser efeito do antitireoidiano)',
      'Função hepática (PTU → risco hepático)',
      'Eletrocardiograma (se arritmia)',
      'Ultrassom de tireoide (bócio, nódulos)',
      'Ecocardiograma se insuficiência cardíaca'
    ])}`)}
  </div>

  ${alertBox('pegadinha','PROIBIDO — Cintilografia na Gestação','A cintilografia de tireoide é CONTRAINDICADA em qualquer trimestre. O iodo radioativo destrói a tireoide fetal. Nunca é resposta correta em questão de gestante com hipertireoidismo.','🎭')}

  ${sectionHeader('🎯','Achados que Fecham ou Sugerem Diagnóstico','#9333ea')}
  ${provaCard('Achados que FAZEM SUSPEITAR','Palpitações, taquicardia, tremor, agitação, intolerância ao calor, perda de peso, hiperêmese no 1º trimestre.')}
  ${provaCard('Achados que FORTALECEM','Taquicardia persistente > 100 bpm, bócio à palpação, história pessoal ou familiar de doença tireoidiana, perda de peso.')}
  ${provaCard('Achados que FECHAM DIAGNÓSTICO','TSH suprimido + T4 livre elevado. Autoanticorpos positivos → confirma Graves. Oftalmopatia → praticamente patognomônica de Graves.')}
  ${provaCard('Achados que MUDAM CONDUTA','Bócio → tratar. Anticorpos positivos → tratar. 1º trimestre + hiperêmese + sem bócio → tireotoxicose transitória → NÃO tratar. Crise tireotóxica → emergência (PTU + beta).')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 24 semanas com Doença de Graves em uso de metimazol. Vem à emergência com FC de 148 bpm, temperatura de 38,8°C, agitação intensa e dispneia. Qual o diagnóstico e conduta imediata?',
      options: ['Infecção do trato urinário — coletar urinocultura e iniciar antibiótico','Pré-eclâmpsia grave — sulfato de magnésio e antihipertensivo','Crise tireotóxica — PTU + betabloqueador + internação em UTI','Hiperêmese gravídica — hidratação venosa','Eclâmpsia — sulfato de magnésio e interrupção'],
      correct: 2,
      explanation: 'FC > 140 bpm + febre + agitação extrema em paciente com Graves = CRISE TIREOTÓXICA. É uma emergência médica. Tratamento: PTU (bloqueia síntese + conversão periférica T4→T3), betabloqueador (controla FC e sintomas), internação em UTI, suporte clínico.',
      tip: 'PTU é preferido na crise tireotóxica porque tem ação adicional: bloqueia a conversão periférica de T4 em T3 — efeito que o metimazol não tem.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 10 — HIPERTIREOIDISMO: TRATAMENTO
   =================================================== */
GO_RENDER['hiper-tto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🩺 Tireoide — Página 9','Hipertireoidismo: Tratamento e Medicações','PTU no 1º trimestre, metimazol no 2º/3º. A lógica é: menor teratogenicidade no início, menor hepatotoxicidade no longo prazo. Iodo radioativo: CONTRAINDICADO.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  ${sectionHeader('💊','Escolha do Antitireoidiano por Trimestre','#0891b2')}

  <div class="simulator-card mb-24">
    <h4>🔧 Simulador: Qual Antitireoidiano Usar?</h4>
    <label class="sim-label">Situação clínica:</label>
    <select class="sim-select" id="anti-sit">
      <option value="">-- Selecione --</option>
      <option value="1trim">1º Trimestre — Doença de Graves nova</option>
      <option value="2trim">2º Trimestre — Em uso de PTU</option>
      <option value="3trim">3º Trimestre — Doença de Graves</option>
      <option value="crise">Crise tireotóxica (qualquer trimestre)</option>
      <option value="transitoria">Tireotoxicose transitória</option>
      <option value="subclinico">Hipertireoidismo subclínico</option>
    </select>
    <button class="sim-btn" onclick="calcAnti()">💊 Ver Recomendação</button>
    <div class="sim-result neutral mt-16" id="anti-result">Selecione a situação para ver a recomendação.</div>
  </div>

  <div class="grid-2 mb-24">
    ${glassCard(`<h4 style="color:var(--success)">✅ Propiltiouracil (PTU)</h4>
    <div style="margin-bottom:8px">${badge('ok','1º Trimestre')} ${badge('ok','Crise Tireotóxica')}</div>
    <p style="font-size:var(--text-xs);color:var(--text-muted);line-height:1.6"><strong>Vantagens:</strong> Menor passagem transplacentária. Bloqueia conversão T4→T3 (útil na crise). Menos teratogênico no 1º trimestre.<br><strong>Desvantagem:</strong> Risco de hepatite (monitorar TGO/TGP). Por isso trocar para metimazol no 2º trimestre.</p>`)}
    ${glassCard(`<h4 style="color:var(--info)">✅ Metimazol (Tapazol)</h4>
    <div style="margin-bottom:8px">${badge('ok','2º Trimestre')} ${badge('ok','3º Trimestre')}</div>
    <p style="font-size:var(--text-xs);color:var(--text-muted);line-height:1.6"><strong>Vantagens:</strong> Menos hepatotóxico a longo prazo.<br><strong>Desvantagem 1º trim:</strong> Teratogênico — pode causar <strong>aplasia cutis, atresia de esôfago, atresia de ânus</strong>. Por isso EVITAR no 1º trimestre.</p>`)}
  </div>

  ${alertBox('pegadinha','Aplasia Cutis — Achado Clássico de Prova','Aplasia cutis (falha no fechamento da pele, especialmente no couro cabeludo) é o achado teratogênico CLÁSSICO do metimazol. A banca adora cobrar isso. Por isso o metimazol é evitado no 1º trimestre — usar PTU.','🎭')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🚫','Contraindicações Absolutas','#e11d48')}
  <div class="med-group">
    <div class="med-group-title" style="color:var(--error)">❌ CONTRAINDICADO NA GESTAÇÃO</div>
    ${medCard('no','☢️','Iodo Radioativo (I-131)','CONTRAINDICAÇÃO ABSOLUTA em qualquer trimestre. Destrói a tireoide materna E a tireoide fetal → hipotireoidismo congênito permanente. Pode ser usado após o parto (contraindicado na amamentação também).')}
  </div>

  ${sectionHeader('📋','Resumo do Tratamento do Hipertireoidismo','#0891b2')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Forma</th><th>TSH</th><th>T4 livre</th><th>Tratar?</th><th>Medicação</th></tr></thead>
    <tbody>
      <tr><td>Franco (Graves)</td><td class="cell-cross">Suprimido</td><td class="cell-cross">↑ significativo</td><td class="cell-check">✅ SIM</td><td>PTU (1º trim) / Metimazol (2º-3º trim)</td></tr>
      <tr><td>Subclínico</td><td class="cell-cross">Suprimido</td><td class="cell-neutral">Normal</td><td class="cell-check">❌ NÃO</td><td>Não tratar</td></tr>
      <tr><td>Transitório (HCG)</td><td class="cell-cross">Suprimido</td><td class="cell-neutral">Normal/levem.↑</td><td class="cell-check">❌ NÃO</td><td>Não tratar</td></tr>
      <tr><td>Crise tireotóxica</td><td class="cell-cross">Suprimido</td><td class="cell-cross">↑↑ muito</td><td class="cell-check">✅ URGÊNCIA</td><td>PTU + Beta-bloqueador + UTI</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('info','Anticorpos Anti-receptor de TSH Atravessam a Placenta','Os anticorpos do Graves materno podem cruzar a placenta e estimular a tireoide fetal → hipertireoidismo fetal/neonatal (taquicardia fetal, bócio fetal, CIUR). Avaliar sempre o recém-nascido de mãe com Graves.','👶')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 10 semanas com Doença de Graves, iniciando tratamento. Qual o antitireoidiano de escolha e por quê?',
      options: ['Metimazol — mais eficaz e com menos efeitos adversos em qualquer trimestre','Propiltiouracil — menos teratogênico no 1º trimestre, com ação adicional na conversão periférica de T4 em T3','Iodo radioativo — mais eficaz para controle a longo prazo','Metimazol — por ter menor risco de aplasia cutis','Betabloqueador isolado — suficiente para controle'],
      correct: 1,
      explanation: 'No 1º trimestre, o PTU é o antitireoidiano de escolha por duas razões: (1) menor teratogenicidade — o metimazol está associado a aplasia cutis, atresia de esôfago e atresia de ânus; (2) ação adicional na conversão periférica de T4 em T3, útil na fase aguda. No 2º e 3º trimestres, troca-se para metimazol (menor hepatotoxicidade a longo prazo).',
      tip: 'Memorize: "PTU no 1º trimestre, metimazol no 2º e 3º". Aplasia cutis = metimazol no 1º trim = erro.'
    },
    {
      stem: 'Uma gestante de 8 semanas com Doença de Graves está em uso de metimazol desde antes de engravidar. A conduta correta é:',
      options: ['Manter o metimazol — é o mais seguro para o feto','Trocar para propiltiouracil imediatamente — metimazol é teratogênico no 1º trimestre','Suspender todos os antitieroidianos até o 2º trimestre','Adicionar iodo estável ao metimazol para maior controle','Realizar tireoidectomia urgente'],
      correct: 1,
      explanation: 'Paciente com Graves que engravida em uso de metimazol deve trocar IMEDIATAMENTE para PTU no 1º trimestre, pois o metimazol é teratogênico (aplasia cutis, atresia de esôfago/ânus). No 2º trimestre, troca de volta para metimazol (menor risco hepático a longo prazo). A cintilografia/iodo radioativo são contraindicados na gestação.',
      tip: 'Ao planejar gestação com Graves: orientar trocar metimazol para PTU já antes de engravidar.'
    }
  ]);
  GO_NAV(el, page);
};

window.calcAnti = function() {
  const sit = document.getElementById('anti-sit')?.value;
  const res = document.getElementById('anti-result');
  if (!res || !sit) return;
  const map = {
    '1trim': { cls:'warn', msg:'1º Trimestre com Graves: usar <strong>Propiltiouracil (PTU)</strong>. Menos teratogênico. Menor passagem transplacentária. Monitorar função hepática.' },
    '2trim': { cls:'ok',   msg:'2º Trimestre: <strong>Trocar PTU → Metimazol</strong>. O metimazol tem menor risco hepático para uso a longo prazo. O 1º trimestre (risco de aplasia cutis) já passou.' },
    '3trim': { cls:'ok',   msg:'3º Trimestre: manter <strong>Metimazol</strong>. Avaliar crescimento fetal (risco CIUR). Monitorar tireoide fetal (anticorpos maternos atravessam a placenta).' },
    'crise': { cls:'danger', msg:'Crise Tireotóxica: <strong>PTU + Betabloqueador (propranolol) + Internação UTI</strong>. PTU bloqueia a conversão periférica T4→T3 (efeito rápido). Beta controla FC e sintomas.' },
    'transitoria': { cls:'ok', msg:'Tireotoxicose Transitória: <strong>NÃO TRATAR com antitireoidiano</strong>. Tratar a causa (hidratação na hiperêmese, etc.). Resolve espontaneamente após o pico do HCG (12-16 sem).' },
    'subclinico': { cls:'ok', msg:'Hipertireoidismo Subclínico: <strong>NÃO TRATAR</strong>. Risco-benefício desfavorável. Apenas monitorar com TSH e T4 livre periodicamente.' },
  };
  const r = map[sit];
  if (r) { res.className=`sim-result ${r.cls}`; res.innerHTML=r.msg; }
};

/* ===================================================
   PÁGINA 11 — TIREOIDE: COMPARATIVO HIPO vs HIPER
   =================================================== */
GO_RENDER['tir-comp'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('⚖️ Tireoide — Página 10','Hipotireoidismo vs Hipertireoidismo: Comparativo Final','A tabela que você precisa ter na cabeça para nunca errar uma questão sobre tireoide na gestação.',GRAD_MAP.tireoide)}

  <div class="anim-fade-up">
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Aspecto</th><th>Hipotireoidismo</th><th>Hipertireoidismo</th></tr></thead>
    <tbody>
      <tr><td><strong>TSH</strong></td><td class="cell-cross">Aumentado</td><td class="cell-check">Suprimido</td></tr>
      <tr><td><strong>T4 livre</strong></td><td class="cell-cross">Dimido (franco) ou normal (subclínico)</td><td class="cell-check">Aumentado (franco) ou normal (sub/transitório)</td></tr>
      <tr><td><strong>Causa principal</strong></td><td>Hashimoto (autoimune)</td><td>Doença de Graves (95%)</td></tr>
      <tr><td><strong>Sintomas</strong></td><td>Cansaço, sono, ganho de peso, pele seca</td><td>Taquicardia, tremor, agitação, sudorese</td></tr>
      <tr><td><strong>Confunde com gestação?</strong></td><td class="cell-check">SIM (sintomas inespecíficos)</td><td>Menos (sintomas mais exuberantes)</td></tr>
      <tr><td><strong>Achado específico</strong></td><td>Bócio, anti-TPO positivo</td><td>Oftalmopatia, bócio difuso</td></tr>
      <tr><td><strong>Complicação fetal específica</strong></td><td class="cell-cross">DÉFICIT COGNITIVO</td><td class="cell-cross">HIPERTIREOIDISMO FETAL/NEONATAL</td></tr>
      <tr><td><strong>Tratamento</strong></td><td>Levotiroxina (segura, categoria A)</td><td>PTU (1º trim) / Metimazol (2º/3º trim)</td></tr>
      <tr><td><strong>Rastreio universal?</strong></td><td class="cell-cross">NÃO</td><td class="cell-cross">NÃO</td></tr>
      <tr><td><strong>Meta TSH</strong></td><td>&lt; 2,5 (1º trim) / &lt; 3,0 (2º/3º)</td><td>Eutireoidismo (não suprimir)</td></tr>
      <tr><td><strong>Via de parto</strong></td><td>Indicação obstétrica</td><td>Indicação obstétrica</td></tr>
      <tr><td><strong>Pegadinha da banca</strong></td><td>TSH 2,5-4 + anti-TPO negativo → NÃO tratar</td><td>TSH suprimido no 1º trim + hiperêmese → transitório → NÃO tratar</td></tr>
    </tbody>
  </table>
  </div>

  ${sectionHeader('🧠','Flashcards de Revisão Rápida — Tireoide','#0891b2')}
  <div class="flashcard-grid" id="tir-flash">
    ${[
      ['PTU — quando usar?','1º trimestre e crise tireotóxica. Menor teratogenicidade no 1º trim. Bloqueia conversão T4→T3.'],
      ['Metimazol — quando NÃO usar?','1º trimestre. Risco de aplasia cutis, atresia de esôfago, atresia de ânus.'],
      ['TSH > 10 na gestação?','Hipotireoidismo franco. Tratar imediatamente com levotiroxina.'],
      ['TSH 2,5-4 + anti-TPO negativo?','Conduta controversa. Maioria NÃO trata. Resposta de prova: não tratar.'],
      ['Complicação específica do hipo?','Déficit cognitivo fetal (1º trimestre — feto depende de T4 materno).'],
      ['Complicação específica do hiper?','Hipertireoidismo fetal/neonatal (anticorpos anti-receptor TSH cruzam a placenta).'],
      ['Iodo radioativo na gestação?','CONTRAINDICADO. Destrói tireoide fetal. Nunca é resposta correta.'],
      ['Tireotoxicose transitória?','TSH suprimido no 1º trim + HCG elevado (hiperêmese, gemelar, mola). NÃO TRATAR.'],
    ].map(([q,a])=>`
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">${q}</div>
          <div class="flashcard-back">${a}</div>
        </div>
      </div>`).join('')}
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Sobre as doenças da tireoide na gestação, assinale a afirmativa INCORRETA:',
      options: [
        'O hipotireoidismo subclínico com TSH ≥ 4 mUI/L deve ser tratado na gestação',
        'A oftalmopatia é praticamente patognomônica da Doença de Graves',
        'O déficit cognitivo fetal é complicação específica do hipotireoidismo materno não tratado no 1º trimestre',
        'O iodo radioativo pode ser utilizado na crise tireotóxica gestacional como alternativa ao PTU',
        'A tireotoxicose gestacional transitória não deve ser tratada com antitireoidiano'
      ],
      correct: 3,
      explanation: 'O iodo radioativo é CONTRAINDICAÇÃO ABSOLUTA na gestação (qualquer trimestre). Destrói a tireoide fetal, causando hipotireoidismo congênito permanente. Na crise tireotóxica gestacional, o tratamento é PTU + betabloqueador + suporte em UTI. As demais alternativas estão corretas.',
      tip: 'Questão do tipo "incorreta" — leia todas as alternativas antes de responder.'
    }
  ]);
  GO_NAV(el, page);
};
