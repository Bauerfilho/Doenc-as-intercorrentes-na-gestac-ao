/* =========================================
   GO PREMIUM — BLOCO REUMATO
   Lúpus, SAF, Artrite Reumatoide
   ========================================= */

/* ===================================================
   PÁGINA 12 — LÚPUS: DEFINIÇÃO E IMPACTO
   =================================================== */
GO_RENDER['lup-def'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🔴 Reumato — Bloco 2 / Página 1','Lúpus Eritematoso Sistêmico na Gestação: Definição e Impacto','O LES é protótipo das doenças TH2 — a gestação É imunologicamente TH2, então o lúpus pode PIORAR. Além disso, o risco de pré-eclâmpsia e a dificuldade de diferenciar flare de pré-eclâmpsia são os grandes desafios clínicos.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('📋','O que é Lúpus Eritematoso Sistêmico (LES)','#9333ea')}
  ${bodyText('O LES é uma doença autoimune sistêmica caracterizada por produção de autoanticorpos (especialmente anti-DNA dupla hélice e anti-Sm) com depósito de imunocomplexos em múltiplos órgãos. Afeta principalmente mulheres em idade reprodutiva — por isso é tão relevante na gestação.')}

  <div class="grid-2 mb-24">
    ${infoCard('primary','Epidemiologia relevante para obstetrícia',`
    <ul>
      <li>Predominância feminina (9:1 mulheres:homens)</li>
      <li>Pico de incidência: 15-45 anos (idade reprodutiva)</li>
      <li>Gestação pode ser planejada em LES controlado</li>
      <li>Risco materno-fetal aumentado, mas manejável</li>
    </ul>`)}
    ${infoCard('warning','Impacto bilateral: lúpus afeta gestação e gestação afeta lúpus',`
    <ul>
      <li>Gestação pode <strong>ativar o lúpus</strong> (flare)</li>
      <li>Lúpus aumenta risco de pré-eclâmpsia, CIUR, parto prematuro</li>
      <li>Anticorpos maternos podem afetar o feto (síndrome do lúpus neonatal)</li>
      <li>Dificuldade de distinguir flare renal de pré-eclâmpsia</li>
    </ul>`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🧬','Por que a Gestação Ativa o Lúpus? — A Chave TH1/TH2','#9333ea')}
  ${alertBox('info','Conceito Fundamental','O sistema imune opera em dois perfis: TH1 (resposta celular, pró-inflamatória) e TH2 (resposta humoral, anticorpos). A gestação é naturalmente TH2 para tolerar o feto (semialoenxerto). O lúpus É UMA DOENÇA TH2. Logo, a gestação cria o ambiente favorável para o lúpus se ativar.','🧬')}

  <div class="axis-diagram mb-24">
    <div class="axis-box source">🤰 Gestação → estado fisiológico TH2 (tolera o feto)</div>
    <div class="axis-arrow">↕</div>
    <div class="axis-box process">LES = doença TH2 (produção excessiva de anticorpos)</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-up">Gestação amplifica a resposta TH2 → ativa o lúpus</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-normal">Contraexemplo: Artrite Reumatoide (TH1) → gestação MELHORA a AR</div>
  </div>

  ${alertBox('pegadinha','TH1 vs TH2 — Pegadinha de Prova Clássica','Lúpus (TH2) → gestação PIORA. Artrite Reumatoide (TH1) → gestação MELHORA. A banca adora cobrar essa inversão. Grave essa lógica: a gestação protege a AR porque suprime TH1. A gestação agrava o LES porque potencializa TH2.','🎭')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🚨','Complicações Maternas e Fetais do LES na Gestação','#e11d48')}
  <div class="grid-2 mb-24">
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--color-cardio);margin-bottom:12px">⚠️ Complicações MATERNAS</h4>
      ${styledList([
        '<strong>Pré-eclâmpsia</strong> — risco 3-5× maior que gestação normal',
        'Flare do lúpus (reativação)',
        'Nefrite lúpica',
        'Trombose (especialmente se SAF associada)',
        'Síndrome HELLP',
        'Infecções oportunistas (imunossupressão)',
        'Complicações das medicações'
      ])}
    </div>
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--error);margin-bottom:12px">🚨 Complicações FETAIS/OBSTÉTRICAS</h4>
      ${styledList([
        'Perda gestacional (abortamento, óbito fetal)',
        'Restrição de crescimento fetal (CIUR)',
        'Parto pré-termo',
        '<strong>Bloqueio cardíaco congênito</strong> (anti-Ro/SSA)',
        'Síndrome do lúpus neonatal',
        'Trombocitopenia neonatal',
        'Prematuridade iatrogênica (interrupção precoce)'
      ])}
    </div>
  </div>

  ${sectionHeader('📋','Critérios SLICC 2012 — Resumo para Obstetrícia','#9333ea')}
  ${bodyText('O diagnóstico de LES requer ≥4 critérios (ou nefrite lúpica confirmada por biópsia + anticorpo antinuclear ou anti-DNA). Os critérios mais relevantes para o diagnóstico durante a gestação:')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Categoria</th><th>Critério</th><th>Relevância Obstétrica</th></tr></thead>
    <tbody>
      <tr><td>Cutâneo</td><td>Rash malar ("asa de borboleta"), fotossensibilidade, úlceras orais</td><td>Diagnóstico clínico</td></tr>
      <tr><td>Musculoesquelético</td><td>Artrite não erosiva (≥2 articulações)</td><td>Diagnóstico clínico</td></tr>
      <tr><td>Renal</td><td>Proteinúria >500 mg/24h ou cilindros celulares</td><td>⚠️ CONFUNDE com pré-eclâmpsia</td></tr>
      <tr><td>Neurológico</td><td>Psicose, convulsões, mononeurite múltipla</td><td>DD eclâmpsia</td></tr>
      <tr><td>Hematológico</td><td>Citopenia (leucopenia, linfopenia, trombocitopenia, anemia hemolítica)</td><td>⚠️ CONFUNDE com HELLP</td></tr>
      <tr><td>Imunológico</td><td>Anti-DNA, anti-Sm, antifosfolípides, complemento baixo (C3/C4)</td><td>Diagnóstico laboratorial</td></tr>
      <tr><td>ANA</td><td>FAN (anticorpo antinuclear) positivo</td><td>Rastreio inicial</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Uma paciente de 28 anos com LES planeja engravidar. Sobre o comportamento do lúpus durante a gestação, é CORRETO afirmar:',
      options: [
        'A gestação é protetora para o lúpus, pois o estado TH2 suprime autoimunidade',
        'A gestação pode ativar o lúpus pois é um estado TH2, que amplifica a resposta autoimune do LES',
        'A gestação não interfere na atividade do lúpus — a doença se comporta da mesma forma',
        'Apenas o 3º trimestre apresenta risco de flare lúpico',
        'O lúpus sempre piora na gestação, tornando a gestação contraindicada'
      ],
      correct: 1,
      explanation: 'O LES é uma doença de predomínio TH2 (produção de autoanticorpos). A gestação é fisiologicamente TH2 (para tolerar o feto). Esse paralelo faz a gestação ser um estado favorável à ativação do lúpus (flare). Porém, gestação NÃO é contraindicada — é possível com doença controlada por pelo menos 6 meses antes.',
      tip: 'Comparação de prova: LES (TH2) = gestação PIORA. AR (TH1) = gestação MELHORA. Lógica inversa, mas coerente com a imunologia.'
    },
    {
      stem: 'O anticorpo mais associado ao bloqueio cardíaco congênito fetal em gestantes com lúpus é:',
      options: ['Anti-DNA dupla hélice', 'Anti-Sm', 'Anti-Ro (SSA) / Anti-La (SSB)', 'Anticorpo antifosfolípide', 'FAN (anticorpo antinuclear)'],
      correct: 2,
      explanation: 'Os anticorpos Anti-Ro/SSA e Anti-La/SSB cruzam a placenta e podem afetar o sistema de condução cardíaco fetal, causando bloqueio cardíaco congênito (grau III). É a complicação fetal mais grave específica do anti-Ro. Gestantes com LES devem ser rastreadas para esses anticorpos.',
      tip: 'Anti-Ro → bloqueio cardíaco congênito. Rastrear na 1ª consulta de pré-natal em toda LES.'
    },
    {
      stem: 'Sobre os critérios de planejamento de gestação no LES, é correto afirmar que:',
      options: [
        'A gestação pode ser planejada imediatamente após diagnóstico de LES',
        'A gestação deve ser planejada com LES em remissão por pelo menos 6 meses, sem envolvimento renal ativo',
        'A gestação está contraindicada em qualquer paciente com LES',
        'Gestantes com LES não precisam de pré-natal especializado',
        'O planejamento gestacional no LES não requer ajuste de medicações'
      ],
      correct: 1,
      explanation: 'A gestação no LES deve ser planejada com doença em remissão por pelo menos 6 meses (idealmente 12 meses sem flare). Envolvimento renal ativo (nefrite lúpica) é critério de adiar a gestação. Medicações teratogênicas (metotrexato, ciclofosfamida) devem ser substituídas antes.',
      tip: '"6 meses de remissão" é o prazo mínimo padrão para planejamento gestacional no LES.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 13 — LÚPUS: FISIOPATOLOGIA
   =================================================== */
GO_RENDER['lup-fisio'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🧫 Reumato — Página 2','Lúpus: Fisiopatologia e Mecanismos de Dano','Autoanticorpos, imunocomplexos e complemento. Como o LES danifica rins, articulações, pele e sistema de condução fetal. O que os anticorpos fazem na prática clínica.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('⚙️','Mecanismo Fisiopatológico Central','#9333ea')}
  <div class="flow-container mb-24">
    <div class="flow-step">Defeito na depuração de células apoptóticas → liberação de autoantígenos nucleares</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Ativação de linfócitos B → produção de autoanticorpos (anti-DNA, anti-Sm, anti-Ro, antifosfolípides)</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Formação de imunocomplexos (antígeno + anticorpo)</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Depósito de imunocomplexos em vasos, glomérulos, pele, articulações</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step decision" style="clip-path:none;padding:12px 20px;border-radius:12px;background:#fffbeb;">Ativação do complemento (C3/C4 caem) → inflamação e dano tecidual</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step" style="border-color:var(--error);background:var(--error-light)">Manifestações clínicas: nefrite, artrite, rash, serosites, citopenias</div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔬','Os Anticorpos e seus Significados Clínicos','#9333ea')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Anticorpo</th><th>Especificidade para LES</th><th>Significado Clínico / Dano</th></tr></thead>
    <tbody>
      <tr><td><strong>FAN (ANA)</strong></td><td>Sensível (95%) — pouco específico</td><td>Rastreio. Positivo em muitas condições. Negativo praticamente exclui LES.</td></tr>
      <tr><td><strong>Anti-DNA dupla hélice</strong></td><td>Alta especificidade para LES</td><td>Correlaciona com atividade da doença, especialmente nefrite. Sobe no flare.</td></tr>
      <tr><td><strong>Anti-Sm</strong></td><td>Muito específico para LES</td><td>Diagnóstico — presente em ~25% dos casos. Não correlaciona com atividade.</td></tr>
      <tr><td><strong>Anti-Ro (SSA)</strong></td><td>Menos específico para LES</td><td>⚠️ Bloqueio cardíaco congênito fetal. Presente também na Síndrome de Sjögren.</td></tr>
      <tr><td><strong>Anti-La (SSB)</strong></td><td>Associado ao anti-Ro</td><td>Lúpus neonatal. Costuma ocorrer junto com anti-Ro.</td></tr>
      <tr><td><strong>Antifosfolípides</strong></td><td>Inespecífico para LES (SAF também)</td><td>Trombose, abortamento. Quando presente no LES → Síndrome Antifosfolípide secundária.</td></tr>
      <tr><td><strong>Anti-C1q</strong></td><td>Associado à atividade renal</td><td>Correlaciona com nefrite lúpica.</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('info','Complemento como marcador de atividade','No flare do LES, o complemento (C3 e C4) CAI — porque está sendo consumido pelos imunocomplexos. Na pré-eclâmpsia, o complemento é normal ou pode estar levemente alterado (mas geralmente não tão baixo). C3/C4 baixos favorecem flare lúpico vs pré-eclâmpsia.','🔬')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('💔','Como o Anti-Ro Causa Bloqueio Cardíaco Congênito','#e11d48')}
  ${bodyText('O anticorpo Anti-Ro (SSA) materno atravessa a placenta a partir da 16ª semana. Ele se liga aos canais de cálcio do sistema de condução cardíaco fetal, especialmente no nó atrioventricular (NAV), causando inflamação e fibrose — o resultado é o <strong>bloqueio AV congênito</strong>.')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Bloqueio AV — Graus e Conduta</h4>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
      <div style="padding:10px;border-radius:8px;background:var(--success-light);border-left:3px solid var(--success)"><strong>Grau I e II:</strong> Monitorar. Pode regredir. Não requer intervenção imediata.</div>
      <div style="padding:10px;border-radius:8px;background:var(--error-light);border-left:3px solid var(--error)"><strong>Grau III (completo):</strong> FC fetal &lt; 55 bpm. Hidropsia fetal. Alta mortalidade. Considerar parto prematuro se viável. Marcapasso após nascimento.</div>
    </div>`)}
    ${glassCard(`<h4>Rastreamento e Prevenção</h4>
    ${styledList([
      'Dosar Anti-Ro e Anti-La na 1ª consulta em TODA gestante com LES',
      'Se Anti-Ro positivo: ECG fetal semanal entre 16-26 semanas',
      'Dexametasona materno pode tentar reverter bloqueio de 1º e 2º grau (resultados controversos)',
      'Bloqueio grau III: irreversível — planejar suporte neonatal imediato'
    ])}`)}
  </div>

  ${sectionHeader('🩸','Nefrite Lúpica vs Pré-Eclâmpsia — O Maior Desafio','#9333ea')}
  ${alertBox('atencao','O Dilema Diagnóstico','Tanto o flare renal do lúpus quanto a pré-eclâmpsia cursam com: hipertensão, proteinúria, edema. A diferença entre as duas condiciona condutas opostas — flare = imunossupressão; pré-eclâmpsia = antihipertensivo + interrupção. Confundir pode ser fatal.','⚠️')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Característica</th><th>Flare Renal do LES</th><th>Pré-eclâmpsia</th></tr></thead>
    <tbody>
      <tr><td>Início</td><td>Qualquer trimestre</td><td>Após 20 semanas (geralmente 3º trim)</td></tr>
      <tr><td>Sedimento urinário</td><td class="cell-highlight">Hematúria, cilindros celulares</td><td>Poucos cilindros, sem hematúria</td></tr>
      <tr><td>Complemento (C3/C4)</td><td class="cell-highlight">↓↓ Baixo (consumido)</td><td>Normal ou levemente ↑</td></tr>
      <tr><td>Anti-DNA</td><td class="cell-highlight">↑ Elevado</td><td>Normal</td></tr>
      <tr><td>Ácido úrico</td><td>Normal ou levemente ↑</td><td class="cell-highlight">↑↑ Muito elevado</td></tr>
      <tr><td>Trombocitopenia</td><td>Pode ter (citopenia autoimune)</td><td class="cell-highlight">Sugere HELLP</td></tr>
      <tr><td>Plaquetas + hemólise + TGO/TGP ↑</td><td>Pode ocorrer</td><td class="cell-highlight">Tríade do HELLP</td></tr>
      <tr><td>Resposta a corticoide</td><td class="cell-highlight">Melhora</td><td>Não melhora</td></tr>
      <tr><td>Conduta</td><td class="cell-highlight">Imunossupressão</td><td>Antihipertensivo + interrupção</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 28 semanas com LES apresenta PA 155/100 mmHg, proteinúria de 2g/24h, sedimento urinário com hematúria e cilindros celulares, C3 baixo, anti-DNA elevado, plaquetas normais. O diagnóstico mais provável é:',
      options: [
        'Pré-eclâmpsia grave — iniciar anti-hipertensivo e programar interrupção',
        'Síndrome HELLP — interrupção imediata',
        'Flare renal do lúpus — iniciar imunossupressão',
        'Nefropatia diabética — investigar diabetes gestacional',
        'ITU com pielonefrite — colher urinocultura e iniciar antibiótico'
      ],
      correct: 2,
      explanation: 'O padrão é clássico de flare renal do LES: hematúria + cilindros celulares (indicam nefrite glomerular ativa), C3 baixo (complemento consumido pelos imunocomplexos), anti-DNA elevado (marcador de atividade). A ausência de trombocitopenia e hemólise afasta HELLP. Conduta: imunossupressão (pulsoterapia com metilprednisolona + hidroxicloroquina).',
      tip: 'Sedimento urinário ativo (hematúria + cilindros) + complemento baixo + anti-DNA alto = flare renal. Não é pré-eclâmpsia.'
    },
    {
      stem: 'Gestante com LES e Anti-Ro positivo, 22 semanas. O que deve ser monitorado especificamente pelo anti-Ro positivo?',
      options: [
        'Pressão arterial materna semanal',
        'ECG fetal semanal entre 16-26 semanas para rastreio de bloqueio cardíaco congênito',
        'Glicemia de jejum materna mensal',
        'Pesquisa semanal de bacteriúria assintomática',
        'Doppler da artéria uterina quinzenal'
      ],
      correct: 1,
      explanation: 'O Anti-Ro (SSA) materno atravessa a placenta e pode causar bloqueio AV congênito fetal (especialmente grau III). O rastreamento é feito com ECG fetal semanal entre 16-26 semanas, quando o risco é maior (anticorpo cruza a placenta após a 16ª semana e a janela crítica vai até ~26 semanas).',
      tip: 'Anti-Ro + gestação = ECG fetal semanal 16-26 semanas. Bloqueio grau III = emergência neonatal.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 14 — LÚPUS vs PRÉ-ECLÂMPSIA
   =================================================== */
GO_RENDER['lup-dx'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🔍 Reumato — Página 3','Lúpus vs Pré-eclâmpsia: O Diagnóstico Diferencial Mais Difícil','Hipertensão + proteinúria = pré-eclâmpsia OU flare renal. As duas condutas são opostas. Um simulador para você dominar esse diagnóstico diferencial.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('🎯','Por que Esse DD é Tão Importante?','#9333ea')}
  ${bodyText('Flare renal do LES e pré-eclâmpsia compartilham os três achados clássicos: hipertensão, proteinúria e edema. Porém, as condutas são diametralmente opostas:')}
  <div class="grid-2 mb-24">
    ${infoCard('danger','Flare Renal do LES → Imunossupressão',`<ul><li>Metilprednisolona (pulsoterapia)</li><li>Hidroxicloroquina (segura na gestação)</li><li>Azatioprina (se necessário)</li><li>NÃO interromper gestação como tratamento do flare</li></ul>`)}
    ${infoCard('warning','Pré-eclâmpsia → Antihipertensivo + Interrupção',`<ul><li>Labetalol ou nifedipina (antihipertensivo)</li><li>Sulfato de magnésio (se grave, para profilaxia de eclâmpsia)</li><li>Interrupção da gestação é o tratamento definitivo</li><li>Imunossupressão NÃO é indicada</li></ul>`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔧','Simulador: Flare Lúpico ou Pré-Eclâmpsia?','#9333ea')}
  <div class="simulator-card">
    <h4>🔍 Analisador de Diagnóstico Diferencial</h4>
    <p style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:16px">Selecione os achados presentes na paciente:</p>
    <div class="criteria-list" id="lup-dd-crit">
      ${[
        ['hematuria','Hematúria + cilindros celulares no sedimento',3,'flare'],
        ['c3baixo','Complemento C3/C4 baixo (consumido)',3,'flare'],
        ['antidna','Anti-DNA elevado (marcador de atividade lúpica)',3,'flare'],
        ['historico','Histórico de flares prévios / lúpus ativo recente',2,'flare'],
        ['melhora_cort','Melhora com corticoide',2,'flare'],
        ['acido_urico','Ácido úrico muito elevado (>6 mg/dL)',3,'pe'],
        ['plaq_hemol','Plaquetopenia + hemólise + TGO/TGP elevados (HELLP)',3,'pe'],
        ['apos20','Início após 20 semanas, sem história prévia de hipertensão',2,'pe'],
        ['sem_sed','Sedimento urinário inativo (sem hematúria, sem cilindros)',2,'pe'],
        ['compl_norm','Complemento normal',2,'pe'],
      ].map(([id,label,score,type])=>`
        <div class="criteria-item" id="ddcrit-${id}" onclick="toggleDDCrit(this,'${type}')">
          <div class="criteria-checkbox" id="ddcb-${id}"></div>
          <span class="criteria-label">${label}</span>
          <span class="criteria-score" style="color:${type==='flare'?'var(--color-reumato)':'var(--color-cardio)'}">${type==='flare'?'→ Flare LES':'→ Pré-eclâmpsia'}</span>
        </div>`).join('')}
    </div>
    <div class="sim-result neutral mt-16" id="lup-dd-result">Selecione os achados presentes na paciente.</div>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('📋','Quadro Comparativo Completo','#9333ea')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Parâmetro</th><th>🔴 Flare Renal LES</th><th>🩸 Pré-Eclâmpsia</th></tr></thead>
    <tbody>
      <tr><td>Trimestre de início</td><td>Qualquer</td><td class="cell-highlight">≥20 semanas</td></tr>
      <tr><td>Sedimento urinário</td><td class="cell-highlight">Hematúria, cilindros</td><td>Inativo</td></tr>
      <tr><td>C3/C4 (complemento)</td><td class="cell-highlight">↓↓ Muito baixo</td><td>Normal/↑ levemente</td></tr>
      <tr><td>Anti-DNA</td><td class="cell-highlight">↑ Elevado</td><td>Normal</td></tr>
      <tr><td>Ácido úrico</td><td>Normal a leve ↑</td><td class="cell-highlight">↑↑ Muito elevado</td></tr>
      <tr><td>DHL</td><td>Normal ou ↑ leve</td><td class="cell-highlight">↑↑ (hemólise no HELLP)</td></tr>
      <tr><td>Trombocitopenia + hemólise</td><td>Pode ter (autoimune)</td><td class="cell-highlight">Tríade do HELLP</td></tr>
      <tr><td>Resposta a corticoide</td><td class="cell-highlight">Melhora a proteinúria e PA</td><td>Não melhora (piora)</td></tr>
      <tr><td>Conduta definitiva</td><td class="cell-highlight">Imunossupressão</td><td>Antihipertensivo + Interrupção</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('pegadinha','Casos Mistos Existem!','Uma gestante com LES pode ter pré-eclâmpsia SOBREPOSTA ao lúpus. Nesses casos, os achados laboratoriais podem ser mistos. A deterioração clínica rápida após 20 semanas, sem resposta a imunossupressão, favorece pré-eclâmpsia sobreposta → indicação de interrupção.','🎭')}

  ${provaCard('Raciocínio de prova — "O que muda a conduta?"','Complemento baixo + anti-DNA alto + hematúria = tratar lúpus. Ácido úrico alto + plaquetas caindo + TGO/TGP subindo = HELLP/PE → interromper.')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 30 semanas com LES apresenta PA 160/105 mmHg, proteinúria 4g/24h, ácido úrico 7,8 mg/dL, plaquetas 62.000/mm³, TGO 180 U/L, DHL 890 U/L. Hematúria ausente. C3 e C4 normais. Qual o diagnóstico e conduta?',
      options: [
        'Flare renal do lúpus — iniciar pulsoterapia com metilprednisolona',
        'Pré-eclâmpsia grave com HELLP — antihipertensivo + corticoide para maturidade fetal + programar interrupção',
        'Nefrite lúpica isolada — aumentar dose de hidroxicloroquina',
        'Trombocitopenia imune (PTI) — administrar imunoglobulina IV',
        'Síndrome nefrótica gestacional — dieta hipoprotéica e repouso'
      ],
      correct: 1,
      explanation: 'Quadro clássico de HELLP (plaquetopenia + hemólise com DHL elevado + TGO elevado) associado a pré-eclâmpsia grave (PA ≥160/110 + proteinúria). Complemento normal e ausência de hematúria afastam flare lúpico. Ácido úrico muito elevado é típico de PE. Conduta: anti-hipertensivo (labetalol ou nifedipina) + betametasona para maturidade + programar interrupção.',
      tip: 'Tríade HELLP: He (hemólise), EL (elevação de enzimas hepáticas), LP (plaquetopenia). + PA ≥140/90 = HELLP dentro de pré-eclâmpsia.'
    },
    {
      stem: 'Qual exame laboratorial é o mais útil para diferenciar flare renal do lúpus de pré-eclâmpsia em uma gestante com LES e hipertensão + proteinúria?',
      options: [
        'Ácido úrico sérico isoladamente',
        'Biópsia renal transplacentária',
        'Complemento C3/C4 + anti-DNA + sedimento urinário (conjunto)',
        'Ecocardiograma materno',
        'Dosagem de fibrinogênio sérico'
      ],
      correct: 2,
      explanation: 'O conjunto de C3/C4 + anti-DNA + sedimento urinário é o mais discriminativo: C3/C4 baixo + anti-DNA elevado + hematúria/cilindros = flare renal. C3/C4 normal + anti-DNA normal + sedimento inativo = mais favorável a pré-eclâmpsia. Nenhum exame isolado é definitivo — o conjunto clínico-laboratorial é que decide.',
      tip: 'Biópsia renal durante a gestação é de alto risco e raramente indicada. Evitar.'
    }
  ]);
  GO_NAV(el, page);
};

window.toggleDDCrit = function(item, type) {
  item.classList.toggle('checked');
  const cb = item.querySelector('.criteria-checkbox');
  cb.textContent = item.classList.contains('checked') ? '✓' : '';
  const flareScore = document.querySelectorAll('#lup-dd-crit .criteria-item.checked[id*="ddcrit-hematuria"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-c3baixo"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-antidna"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-historico"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-melhora_cort"]').length;
  const peScore   = document.querySelectorAll('#lup-dd-crit .criteria-item.checked[id*="ddcrit-acido_urico"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-plaq_hemol"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-apos20"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-sem_sed"], #lup-dd-crit .criteria-item.checked[id*="ddcrit-compl_norm"]').length;
  const res = document.getElementById('lup-dd-result');
  if (!res) return;
  if (flareScore === 0 && peScore === 0) { res.className='sim-result neutral'; res.textContent='Selecione os achados presentes.'; return; }
  if (flareScore > peScore) { res.className='sim-result warn'; res.innerHTML=`<strong>🔴 Sugestivo de Flare Renal do LES</strong><br>Conduta: imunossupressão (metilprednisolona IV + manutenção com azatioprina). Não interromper a gestação como medida primária.`; }
  else if (peScore > flareScore) { res.className='sim-result danger'; res.innerHTML=`<strong>🩸 Sugestivo de Pré-eclâmpsia / HELLP</strong><br>Conduta: anti-hipertensivo + sulfato de magnésio se grave + programar interrupção da gestação. Corticoide para maturidade pulmonar se &lt;34 semanas.`; }
  else { res.className='sim-result warn'; res.innerHTML=`<strong>⚠️ Achados Mistos — Caso Difícil</strong><br>Pode ser pré-eclâmpsia sobreposta ao LES. Consultar especialista. Monitorização intensiva. Deterioração clínica rápida → priorizar interrupção.`; }
};

/* ===================================================
   PÁGINA 15 — LÚPUS: TRATAMENTO
   =================================================== */
GO_RENDER['lup-tto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('💉 Reumato — Página 4','Lúpus: Tratamento e Medicações Seguras na Gestação','Hidroxicloroquina é segura e DEVE ser mantida. Corticoides são permitidos. Metotrexato e ciclofosfamida são PROIBIDOS. Cada medicação tem sua regra.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('💊','Medicações por Categoria de Segurança','#9333ea')}

  <div class="med-group">
    <div class="med-group-title" style="color:var(--success)">✅ PODE USAR — Seguras na Gestação</div>
    ${medCard('can','💊','Hidroxicloroquina (HCQ)','<strong>Droga âncora do LES na gestação.</strong> Segura em qualquer trimestre. Atravessa a placenta, mas é PROTETORA para o feto — reduz risco de bloqueio cardíaco congênito. Não suspender durante a gestação. Manter dose habitual (200-400 mg/dia).')}
    ${medCard('can','💉','Prednisona / Prednisolona','Seguras na gestação. Usadas para controle de flares. Dose: 0,5-1 mg/kg/dia. Metilprednisolona IV (pulsoterapia) para flares graves. Evitar doses altas por tempo prolongado — risco de DM gestacional, hipertensão, osteopenia.')}
    ${medCard('can','💊','Azatioprina','Imunossupressor seguro na gestação. Usado para manutenção e controle de flares moderados-graves. Alternativa à ciclofosfamida (que é contraindicada).')}
  </div>

  <div class="med-group">
    <div class="med-group-title" style="color:var(--error)">❌ CONTRAINDICADO — Teratogênico / Perigoso</div>
    ${medCard('no','💊','Metotrexato (MTX)','CONTRAINDICADO. Antagonista do folato — teratogênico (defeitos do tubo neural, anomalias faciais, CIUR). Também abortivo. Deve ser suspenso 3 meses antes de engravidar. Usar ácido fólico em altas doses pós-suspensão.')}
    ${medCard('no','💊','Ciclofosfamida','CONTRAINDICADO no 1º trimestre. Teratogênico. Pode ser considerado em casos graves refratários no 2º/3º trimestre em situações de risco de vida — decisão multidisciplinar. Preferir azatioprina.')}
    ${medCard('no','💊','Micofenolato Mofetil (MMF)','CONTRAINDICADO. Teratogênico — anomalias de orelha, face, coração, rim, dedos. Suspender 6 semanas antes de engravidar. Substituir por azatioprina.')}
    ${medCard('no','💊','Leflunomida','CONTRAINDICADO. Teratogênica. Suspender com washout (colestiramina) antes de engravidar.')}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🛡️','Ácido Acetilsalicílico (AAS) — Profilaxia de Pré-eclâmpsia','#0891b2')}
  ${alertBox('success','AAS em Baixa Dose — Recomendação Universal no LES','Toda gestante com LES deve usar AAS 100-150 mg/dia iniciando no 1º trimestre (12-16 semanas) para profilaxia de pré-eclâmpsia. O risco de PE no LES é 3-5× maior que na população geral.','🛡️')}

  ${sectionHeader('📋','Esquema de Tratamento por Cenário','#9333ea')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Cenário</th><th>Tratamento</th><th>Observação</th></tr></thead>
    <tbody>
      <tr><td>LES controlado na gestação</td><td>Hidroxicloroquina + AAS (profilaxia PE)</td><td>Manter dose habitual de HCQ</td></tr>
      <tr><td>Flare leve (artrite, rash)</td><td>Prednisona 0,5 mg/kg/dia + HCQ</td><td>Reduzir dose gradualmente ao controle</td></tr>
      <tr><td>Flare moderado-grave</td><td>Metilprednisolona IV (pulsoterapia) + HCQ + azatioprina</td><td>Monitorar DM gestacional e PA</td></tr>
      <tr><td>Flare renal grave (nefrite)</td><td>Pulsoterapia + azatioprina + HCQ</td><td>Evitar ciclofosfamida se possível</td></tr>
      <tr><td>SAF associada</td><td>Heparina + AAS (ver bloco SAF)</td><td>Anticoagulação completa se trombose prévia</td></tr>
    </tbody>
  </table>
  </div>

  ${sectionHeader('🧠','Mnemônico: "HCA pode; MTX, MMF e Ciclo NÃO"','#9333ea')}
  <div class="glass-card" style="padding:24px;margin-bottom:24px;border-left:4px solid var(--color-reumato)">
    <div style="font-size:2rem;margin-bottom:12px">🧠</div>
    <div style="font-family:var(--font-mono);font-size:var(--text-lg);font-weight:700;margin-bottom:12px">
      H = Hidroxicloroquina ✅<br>
      C = Corticoide (prednisona) ✅<br>
      A = Azatioprina ✅<br>
      <br>
      M = Metotrexato ❌<br>
      M = Micofenolato ❌<br>
      C = Ciclofosfamida ❌ (evitar especialmente no 1º trim)
    </div>
    <p style="font-size:var(--text-xs);color:var(--text-muted)">Fácil de memorizar: <strong>HCA sim; MMC não</strong></p>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 14 semanas com LES em uso de hidroxicloroquina 400 mg/dia e micofenolato mofetil 2g/dia (em uso desde antes da gestação por nefrite lúpica controlada). Qual a conduta imediata?',
      options: [
        'Manter ambas as medicações — o LES controlado tem prioridade',
        'Suspender a hidroxicloroquina — contraindicada na gestação',
        'Suspender o micofenolato mofetil e substituir por azatioprina — MMF é teratogênico',
        'Substituir a hidroxicloroquina por metotrexato — mais eficaz',
        'Suspender ambas e iniciar prednisona isolada'
      ],
      correct: 2,
      explanation: 'O Micofenolato Mofetil (MMF) é teratogênico (anomalias de orelha, face, coração) e deve ser suspenso — idealmente antes de engravidar, mas ao descobrir a gestação, suspender imediatamente e substituir por azatioprina (segura). A hidroxicloroquina deve ser MANTIDA — é segura e protetora.',
      tip: 'HCQ = manter sempre. MMF = suspender sempre. Azatioprina = substituto seguro do MMF na gestação.'
    },
    {
      stem: 'Uma gestante com LES está em remissão há 8 meses. Está grávida de 14 semanas. Qual medicação deve ser INICIADA profilaticamente, mesmo sem história prévia de pré-eclâmpsia?',
      options: [
        'Metotrexato para manter remissão',
        'Ciclofosfamida para profilaxia de flare renal',
        'AAS 100-150 mg/dia para profilaxia de pré-eclâmpsia',
        'Heparina de baixo peso molecular para profilaxia de trombose',
        'Nenhuma — LES em remissão não requer profilaxia'
      ],
      correct: 2,
      explanation: 'Toda gestante com LES tem risco aumentado de pré-eclâmpsia (3-5× maior). O AAS em baixa dose (100-150 mg/dia), iniciado entre 12-16 semanas, é recomendado universalmente para profilaxia de pré-eclâmpsia em gestantes de alto risco — incluindo LES.',
      tip: 'LES + gestação = AAS profilático SEMPRE. Mesma recomendação para SAF, DM, hipertensão crônica, nefropatia.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 16 — SÍNDROME DO LÚPUS NEONATAL
   =================================================== */
GO_RENDER['lup-neo'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('👶 Reumato — Página 5','Síndrome do Lúpus Neonatal: O que Acontece com o Bebê','Anticorpos Anti-Ro e Anti-La maternos atravessam a placenta e causam doença transitória no recém-nascido — exceto o bloqueio cardíaco, que é permanente.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('🔬','Mecanismo: Passagem Transplacentária de Anticorpos','#9333ea')}
  ${bodyText('A síndrome do lúpus neonatal (SLN) é causada pela passagem transplacentária dos anticorpos Anti-Ro (SSA) e Anti-La (SSB) maternos. O feto não tem lúpus — ele sofre os efeitos dos anticorpos maternos que circulam em seu sangue. Por isso, a SLN é <strong>autolimitada</strong> — quando os anticorpos maternos são catabolizados (2-6 meses), as manifestações regridem.')}

  <div class="axis-diagram mb-24">
    <div class="axis-box source">Mãe com LES / Sjögren → Anti-Ro / Anti-La positivos</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box process">Passagem transplacentária (a partir da 16ª semana)</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-up">Anticorpos circulam no sangue fetal/neonatal</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-normal">Dano tecidual em pele, fígado, coração do RN</div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🩺','Manifestações Clínicas do Lúpus Neonatal','#9333ea')}
  <div class="grid-2 mb-24">
    <div class="glass-card" style="padding:20px">
      <h4 style="margin-bottom:12px;color:var(--success)">✅ TRANSITÓRIAS (regridem em 2-6 meses)</h4>
      ${styledList([
        '<strong>Rash cutâneo</strong> — lesões eritematosas periorbiculares ("óculos"), fotossensíveis. Mais comum após exposição ao sol.',
        '<strong>Hepatite neonatal</strong> — elevação de transaminases, raramente grave',
        '<strong>Citopenias</strong> — trombocitopenia, leucopenia, anemia hemolítica',
        '<strong>Manifestações neurológicas</strong> — raras, transitórias',
        'Todas regridem após catabolismo dos anticorpos maternos (2-6 meses)'
      ])}
    </div>
    <div class="glass-card" style="padding:20px">
      <h4 style="margin-bottom:12px;color:var(--error)">⚠️ PERMANENTE — Bloqueio Cardíaco Congênito</h4>
      ${styledList([
        'Bloqueio AV completo (3º grau) — <strong>irreversível</strong>',
        'Anti-Ro se liga aos canais de cálcio do nó AV → inflamação → fibrose permanente',
        'FC neonatal &lt; 55-60 bpm → necessita marcapasso após o nascimento',
        'Risco de morte intrauterina se grave (hidropsia)',
        'Recorrência em gestações futuras: 10-15% se já houve um caso'
      ])}
    </div>
  </div>

  ${alertBox('danger','Bloqueio Cardíaco Grau III — Emergência','FC fetal < 55 bpm + hidropsia fetal = bloqueio AV completo grave. Pode indicar interrupção precoce da gestação + suporte neonatal intensivo + marcapasso neonatal. A mortalidade é significativa.','🚨')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🎯','Rastreio e Prevenção','#9333ea')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Quando</th><th>O que fazer</th><th>Objetivo</th></tr></thead>
    <tbody>
      <tr><td>1ª consulta pré-natal</td><td>Dosar Anti-Ro e Anti-La</td><td>Identificar risco</td></tr>
      <tr><td>16-26 semanas (se Anti-Ro+)</td><td>ECG fetal semanal</td><td>Detectar bloqueio precoce</td></tr>
      <tr><td>Bloqueio 1º/2º grau detectado</td><td>Dexametasona materna (controverso)</td><td>Tentar reverter (resultados variáveis)</td></tr>
      <tr><td>Bloqueio 3º grau</td><td>Avaliar interrupção + marcapasso neonatal</td><td>Salvar vida do RN</td></tr>
      <tr><td>Pós-natal (se Anti-Ro+)</td><td>Examinar pele do RN, ECG neonatal</td><td>Diagnosticar SLN</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('info','Importante: A Mãe Pode Não Ter LES!','O Anti-Ro pode ser positivo em mães com Síndrome de Sjögren, LES ou mesmo em mulheres assintomáticas! O lúpus neonatal pode ocorrer mesmo sem diagnóstico materno de lúpus. Rastrear Anti-Ro sempre que houver bloqueio cardíaco congênito no RN ou aborto de repetição inexplicado.','💡')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Recém-nascido de mãe com LES e Anti-Ro positivo apresenta, ao nascimento, lesão eritematosa periorbicular com aspecto de "óculos", sem outras alterações. ECG neonatal: normal. Qual o diagnóstico e conduta?',
      options: [
        'Lúpus neonatal — rash cutâneo transitório. Proteger da exposição solar. Reavaliar em 2-6 meses (regride espontaneamente)',
        'Lúpus neonatal com bloqueio cardíaco — implantar marcapasso urgente',
        'Dermatite atópica — iniciar corticoide tópico',
        'Toxoplasmose congênita — iniciar espiramicina',
        'Eritema infeccioso — isolamento e tratamento antiviral'
      ],
      correct: 0,
      explanation: 'Rash periorbicular em "óculos" em RN de mãe com Anti-Ro positivo é o quadro clássico de lúpus neonatal cutâneo. É transitório — regride com o catabolismo dos anticorpos maternos em 2-6 meses. Conduta: proteção solar, acompanhamento pediátrico. ECG normal afasta bloqueio cardíaco. Não requer imunossupressão.',
      tip: 'Rash + Anti-Ro materno + ECG normal = lúpus neonatal cutâneo transitório. Simples e autolimitado.'
    },
    {
      stem: 'Sobre a síndrome do lúpus neonatal, qual afirmação é VERDADEIRA?',
      options: [
        'É causada pela passagem transplacentária de linfócitos T maternos ativados',
        'O bloqueio cardíaco congênito causado pelo Anti-Ro é uma complicação transitória que regride em 6 meses',
        'Todas as manifestações são transitórias, exceto o bloqueio cardíaco completo, que é permanente',
        'Só ocorre em filhos de mães com diagnóstico confirmado de LES',
        'O mecanismo é a infecção fetal pelo vírus do lúpus'
      ],
      correct: 2,
      explanation: 'Na SLN: manifestações cutâneas, hepáticas e hematológicas são TRANSITÓRIAS (regridem em 2-6 meses com catabolismo dos anticorpos maternos). O bloqueio cardíaco completo (3º grau) é PERMANENTE — o Anti-Ro causa fibrose irreversível no nó AV. Pode ocorrer em filhos de mães sem diagnóstico de LES (Anti-Ro pode ser positivo em Sjögren, em mulheres assintomáticas, etc.).',
      tip: 'Permanente no lúpus neonatal: APENAS o bloqueio cardíaco completo. Todo o resto regride.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 17 — LÚPUS: VIA DE PARTO
   =================================================== */
GO_RENDER['lup-parto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🏥 Reumato — Página 6','Lúpus: Via de Parto e Programação','LES controlado: parto vaginal é possível. As indicações de cesárea e antecipação são pelas complicações (CIUR, pré-eclâmpsia, SAF), não pelo lúpus em si.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('🏥','Via de Parto no LES','#9333ea')}

  ${partoCard('vaginal','Parto Vaginal — Quando o LES Está Controlado',[
    'LES controlado, sem complicações ativas',
    'Função renal preservada, sem flare',
    'Feto com crescimento normal, sem bloqueio cardíaco grave',
    'Sem SAF associada que contraindique vaginal (ver bloco SAF)',
    'Corticoides devem ser administrados no parto se a paciente os usa cronicamente (estresse glicocorticoide)'
  ])}

  ${partoCard('cesarea','Cesárea / Antecipação — Indicações',[
    'CIUR grave com Doppler alterado',
    'Pré-eclâmpsia grave / Síndrome HELLP',
    'Bloqueio cardíaco fetal grau III com comprometimento hemodinâmico',
    'SAF com indicação específica de interrupção',
    'Flare grave refratário a tratamento com comprometimento materno',
    'Indicações obstétricas habituais (DCP, placenta prévia, etc.)'
  ])}

  ${sectionHeader('⏰','Quando Interromper a Gestação','#e11d48')}
  <div class="grid-2 mb-24">
    ${infoCard('warning','Indicações Maternas',`<ul>
      <li>Nefrite lúpica grave refratária</li>
      <li>Pré-eclâmpsia grave / HELLP</li>
      <li>Flare grave não responsivo a tratamento</li>
      <li>Comprometimento de órgãos vitais</li>
    </ul>`)}
    ${infoCard('danger','Indicações Fetais',`<ul>
      <li>CIUR grave com Doppler alterado (diástole zero/reversa)</li>
      <li>Bloqueio cardíaco completo com hidropsia</li>
      <li>Sofrimento fetal agudo</li>
      <li>Óbito fetal iminente</li>
    </ul>`)}
  </div>

  ${alertBox('info','Corticoides no Parto','Pacientes em uso crônico de corticoides (≥5 mg/dia por >3 semanas) têm supressão do eixo hipotálamo-hipofisário-adrenal. No parto (estresse cirúrgico/clínico), precisam de "dose de estresse": hidrocortisona IV 100 mg a cada 8h nas primeiras 24h, com redução gradual. Sem isso, risco de crise adrenal.','💉')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('📋','Resumo de Alto Rendimento — LES na Gestação','#9333ea')}
  <ol class="resumo-list">
    ${resumoItem(1,'#9333ea','<strong>LES = doença TH2</strong> → gestação (estado TH2) pode ATIVAR o lúpus (ao contrário da AR, que melhora)')}
    ${resumoItem(2,'#9333ea','<strong>Anti-Ro positivo</strong> → rastreio com ECG fetal semanal 16-26 semanas → bloqueio cardíaco congênito grau III é permanente')}
    ${resumoItem(3,'#9333ea','<strong>Flare renal vs Pré-eclâmpsia:</strong> C3/C4 baixo + anti-DNA alto + hematúria = flare. Ácido úrico alto + HELLP = PE → condutas opostas!')}
    ${resumoItem(4,'#9333ea','<strong>HCQ = manter sempre.</strong> MMF e MTX = contraindicados. Azatioprina = substituto seguro. AAS = profilaxia de PE em toda gestante com LES.')}
    ${resumoItem(5,'#9333ea','<strong>SLN:</strong> manifestações transitórias (rash, citopenia, hepatite) + bloqueio cardíaco permanente. A mãe pode não ter LES (Anti-Ro em Sjögren também).')}
    ${resumoItem(6,'#9333ea','<strong>Via de parto:</strong> vaginal no LES controlado. Cesárea/antecipação por complicações (CIUR, PE grave, bloqueio grau III).')}
    ${resumoItem(7,'#9333ea','<strong>Planejamento:</strong> remissão ≥ 6 meses. Suspender MTX 3 meses antes. Suspender MMF 6 semanas antes. Manter HCQ.')}
  </ol>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 34 semanas com LES controlado (TSH normal, sem flare, sem proteinúria, sem SAF). Vem ao pré-natal para discussão do parto. A conduta obstétrica é:',
      options: [
        'Cesárea eletiva programada — LES sempre contraindica parto vaginal',
        'Aguardar trabalho de parto espontâneo ou induzir se necessário — LES controlado permite parto vaginal',
        'Interrupção imediata — gestações com LES não devem ultrapassar 34 semanas',
        'Cesárea às 36 semanas de rotina em toda gestante com LES',
        'Esperar até 42 semanas como em gestação normal'
      ],
      correct: 1,
      explanation: 'LES controlado não contraindica parto vaginal nem antecipação da gestação. A via de parto segue critérios obstétricos habituais. O LES per se não é indicação de cesárea. Lembrar: se a paciente usa corticoide crônico, oferecer "dose de estresse" no parto.',
      tip: '"Doença controlada = conduta obstétrica padrão" — regra que vale para quase todas as doenças clínicas na gestação.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 18 — SAF: DEFINIÇÃO E CRITÉRIOS
   =================================================== */
GO_RENDER['saf-def'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🩸 Reumato — Página 7 (SAF)','Síndrome Antifosfolípide: A Trombofilia Adquirida da Gestação','SAF = anticorpos + evento clínico (trombose OU morbidade gestacional). A causa mais importante de abortamento de repetição adquirida. E o tratamento que muda tudo: heparina + AAS.',GRAD_MAP.saf)}

  <div class="anim-fade-up">
  ${sectionHeader('📋','O que é a SAF?','#7c3aed')}
  ${bodyText('A Síndrome Antifosfolípide (SAF) é uma <strong>trombofilia adquirida</strong> (não hereditária) caracterizada por anticorpos que se ligam aos fosfolípides das membranas celulares — especialmente das plaquetas e do endotélio vascular — causando estado <strong>pró-coagulante</strong> e perdas gestacionais.')}
  ${bodyText('Pode ser <strong>primária</strong> (sem outra doença de base) ou <strong>secundária</strong> (associada ao LES em ~30% dos casos).')}

  <div class="grid-2 mb-24">
    ${infoCard('primary','SAF Primária',`<p>Anticorpos antifosfolípide presentes sem outra doença autoimune identificável.</p><p>~50-60% dos casos de SAF.</p>`)}
    ${infoCard('warning','SAF Secundária',`<p>Associada ao LES em 30% dos casos.</p><p>Pode ocorrer em AR, Sjögren, outras doenças autoimunes, neoplasias, infecções.</p>`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🎯','Critérios de Sapporo (Sydney) — Como Diagnosticar SAF','#7c3aed')}
  ${alertBox('info','Regra diagnóstica','Para diagnosticar SAF: pelo menos <strong>1 critério clínico</strong> + pelo menos <strong>1 critério laboratorial</strong>, com o anticorpo positivo em 2 ocasiões com intervalo ≥ 12 semanas.','📋')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Critérios CLÍNICOS (precisa de 1)</h4>
    ${styledList([
      '<strong>Trombose vascular:</strong> arterial, venosa ou de pequenos vasos (excluída trombose superficial)',
      '<strong>Morbidade gestacional:</strong>',
      '&nbsp;&nbsp;• ≥ 1 óbito fetal com ≥ 10 semanas (morfologia fetal normal)',
      '&nbsp;&nbsp;• ≥ 3 abortamentos espontâneos consecutivos com &lt; 10 semanas (sem causa cromossômica ou anatômica)',
      '&nbsp;&nbsp;• Pré-eclâmpsia grave ou insuficiência placentária antes de 34 semanas'
    ])}`)}
    ${glassCard(`<h4>Critérios LABORATORIAIS (precisa de 1)</h4>
    ${styledList([
      '<strong>Anticoagulante lúpico (AL)</strong> — o mais trombogênico; paradoxalmente alonga o TTPA',
      '<strong>Anticardiolipina (aCL)</strong> — IgG ou IgM, título médio ou alto (>40 GPL ou MPL)',
      '<strong>Anti-β2-glicoproteína I (anti-β2GPI)</strong> — IgG ou IgM, título > 99º percentil',
      '<strong>OBRIGATÓRIO:</strong> confirmar em 2 dosagens com ≥ 12 semanas de intervalo'
    ])}`)}
  </div>

  ${alertBox('pegadinha','Paradoxo do Anticoagulante Lúpico','O anticoagulante lúpico ALONGA o TTPA in vitro (porque interfere com os fosfolípides do teste), mas AUMENTA o risco de TROMBOSE in vivo (porque os anticorpos ativam plaquetas e endotélio). É o paradoxo da SAF: anticoagulante no laboratório, pró-coagulante no paciente.','🎭')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🩸','Mecanismo: Por que SAF Causa Perda Gestacional?','#7c3aed')}
  <div class="flow-container mb-24">
    <div class="flow-step">Anticorpos antifosfolípide se ligam a células placentárias e endotélio</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Ativação plaquetária + inibição de anticoagulantes naturais (proteína C, antitrombina)</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Microtrombos na circulação uteroplacentária</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step decision" style="clip-path:none;padding:12px 20px;border-radius:12px;background:#fffbeb;">Infarto placentário → insuficiência placentária</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step" style="border-color:var(--error);background:var(--error-light)">Abortamento, óbito fetal, CIUR, pré-eclâmpsia precoce</div>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Paciente de 32 anos com 3 abortamentos espontâneos consecutivos antes de 10 semanas. Investigação: anticoagulante lúpico positivo e anticardiolipina IgG positiva em dois exames com intervalo de 14 semanas. Morfologia dos embriões sem alterações cromossômicas. Qual o diagnóstico?',
      options: [
        'Trombofilias hereditárias — solicitar fator V de Leiden e mutação da protrombina',
        'Síndrome Antifosfolípide — critérios clínicos (≥3 abortamentos < 10 sem) + laboratoriais (AL + aCL positivos × 2)',
        'Incompetência istmocervical — indicar cerclagem',
        'Hipotireoidismo oculto — solicitar TSH',
        'Causa desconhecida — sem diagnóstico definitivo'
      ],
      correct: 1,
      explanation: 'Diagnóstico de SAF requer ≥1 critério clínico + ≥1 critério laboratorial confirmado em 2 ocasiões ≥12 semanas. Aqui: ≥3 abortamentos consecutivos <10 semanas (critério clínico) + AL positivo + aCL IgG positivo × 2 com 14 semanas de intervalo (critério laboratorial). Diagnóstico: SAF. Tratamento: heparina + AAS na próxima gestação.',
      tip: 'Abortamento de repetição = investigar SAF sempre. É a causa adquirida mais importante de abortamento recorrente.'
    },
    {
      stem: 'O "paradoxo do anticoagulante lúpico" refere-se ao fato de que ele:',
      options: [
        'Previne trombose in vivo, mas causa sangramento in vitro',
        'Alonga o TTPA in vitro (anticoagulante no exame), mas causa TROMBOSE in vivo',
        'É chamado de "lúpico" mas não está relacionado ao lúpus',
        'Inibe todos os fatores de coagulação simultaneamente',
        'Causa trombose in vitro, mas não in vivo'
      ],
      correct: 1,
      explanation: 'O paradoxo: o anticoagulante lúpico alonga o TTPA no laboratório (porque os anticorpos interferem com os fosfolípides usados no teste, que são necessários para a coagulação in vitro). Mas in vivo, esses mesmos anticorpos ativam plaquetas e endotélio, causando um estado pró-trombótico. Daí o "paradoxo".',
      tip: 'TTPA longo no laboratório + estado pró-trombótico no paciente = característica paradoxal do anticoagulante lúpico.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 19 — SAF: TRATAMENTO E HEPARINA
   =================================================== */
GO_RENDER['saf-tto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('💉 Reumato — Página 8 (SAF)','SAF: Tratamento na Gestação — Heparina + AAS','A combinação heparina de baixo peso molecular + AAS reduz drasticamente o risco de perda gestacional. A warfarina é contraindicada no 1º e 3º trimestres.',GRAD_MAP.saf)}

  <div class="anim-fade-up">
  ${sectionHeader('💊','Tratamento da SAF na Gestação','#7c3aed')}
  ${alertBox('success','Base do Tratamento','<strong>HEPARINA DE BAIXO PESO MOLECULAR (HBPM) + AAS em baixa dose (100-150 mg/dia)</strong> — essa combinação reduz em 70-80% o risco de perda gestacional na SAF.','💊')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4 style="color:var(--success)">✅ HBPM (Enoxaparina/Dalteparina)</h4>
    <p style="font-size:var(--text-xs);margin-top:8px;line-height:1.6">Não atravessa a placenta. Segura para o feto. Subcutânea. Duas doses por cenário:</p>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
      <div style="padding:8px 12px;border-radius:8px;background:var(--success-light);border-left:3px solid var(--success)"><strong>Dose profilática:</strong> Enoxaparina 40 mg SC 1×/dia — para morbidade gestacional sem trombose prévia</div>
      <div style="padding:8px 12px;border-radius:8px;background:rgba(59,130,246,0.1);border-left:3px solid var(--info)"><strong>Dose terapêutica/plena:</strong> Enoxaparina 1 mg/kg SC 2×/dia — se história de trombose prévia</div>
    </div>`)}
    ${glassCard(`<h4 style="color:var(--success)">✅ AAS Baixa Dose</h4>
    <p style="font-size:var(--text-xs);margin-top:8px;line-height:1.6">100-150 mg/dia. Iniciado preferencialmente no 1º trimestre (12-16 semanas). Inibição da agregação plaquetária. Profilaxia de pré-eclâmpsia e microtrombose placentária.</p>
    <div style="margin-top:10px">${badge('ok','Seguro na gestação')} ${badge('ok','Iniciar no 1º trim')}</div>`)}
  </div>

  <div class="med-group">
    <div class="med-group-title" style="color:var(--error)">❌ CONTRAINDICADO — Warfarina</div>
    ${medCard('no','💊','Warfarina (Varfarina)','CONTRAINDICADA no 1º e 3º trimestres. 1º trim: embriopatia varfarínica (hipoplasia nasal, condrodisplasia punctata, CIUR). 3º trim: hemorragia fetal/neonatal. Pode ser usada no 2º trimestre em situações específicas (ex: válvula cardíaca mecânica). Substituir por HBPM.')}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('📋','Tabela de Decisão por Perfil de Risco','#7c3aed')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Perfil da Paciente</th><th>Tratamento</th><th>Dose</th></tr></thead>
    <tbody>
      <tr><td>SAF + morbidade gestacional prévia (abortos) + SEM trombose</td><td>HBPM + AAS</td><td>HBPM profilática (enoxaparina 40 mg/dia) + AAS 100 mg/dia</td></tr>
      <tr><td>SAF + trombose venosa prévia (TVP/EP)</td><td>HBPM + AAS</td><td>HBPM terapêutica (enoxaparina 1 mg/kg 2×/dia) + AAS 100 mg/dia</td></tr>
      <tr><td>SAF + trombose arterial prévia (AVC) ou SAF triplo positivo</td><td>HBPM terapêutica + AAS</td><td>Dose plena durante toda a gestação</td></tr>
      <tr><td>SAF sem evento clínico (anticorpo positivo isolado)</td><td>AAS isolado ou observar</td><td>AAS 100 mg/dia (profilático)</td></tr>
    </tbody>
  </table>
  </div>

  <div class="simulator-card">
    <h4>🔧 Simulador: Qual Tratamento na SAF?</h4>
    <label class="sim-label">Perfil da paciente:</label>
    <select class="sim-select" id="saf-perfil">
      <option value="">-- Selecione --</option>
      <option value="aborto">SAF + ≥3 abortamentos (sem trombose)</option>
      <option value="tvp">SAF + trombose venosa prévia (TVP/EP)</option>
      <option value="avc">SAF + trombose arterial (AVC, IAM)</option>
      <option value="ab_isolado">Anticorpo positivo sem evento clínico</option>
    </select>
    <button class="sim-btn" onclick="calcSAF()">💉 Ver Tratamento</button>
    <div class="sim-result neutral mt-16" id="saf-result">Selecione o perfil para ver o tratamento.</div>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('⚠️','Manejo do Anticoagulante no Parto','#7c3aed')}
  ${alertBox('atencao','Regra para o Parto','A HBPM deve ser suspensa antes do parto para evitar sangramento. Regra geral: HBPM profilática → suspender 12-24h antes; HBPM terapêutica → suspender 24h antes. Reiniciar 12-24h após parto vaginal ou 24-48h após cesárea (quando hemostasia garantida).','⚠️')}

  ${alertBox('pegadinha','Warfarina no 2º Trimestre','A warfarina PODE ser usada no 2º trimestre em situações específicas (válvulas mecânicas, por exemplo). Mas na SAF, a HBPM é preferida em toda a gestação pela segurança e pelo perfil de anticoagulação. Não cair na pegadinha de considerar warfarina "segura na gestação" de forma geral — ela é contraindicada no 1º e 3º trimestres.','🎭')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 8 semanas com diagnóstico de SAF (anticardiolipina e anticoagulante lúpico positivos em 2 ocasiões), história de 4 abortamentos espontâneos, sem trombose prévia. Qual o tratamento correto?',
      options: [
        'Warfarina + AAS 100 mg/dia durante toda a gestação',
        'Heparina de baixo peso molecular (dose profilática) + AAS 100 mg/dia',
        'Aspirina isolada — suficiente para SAF obstétrica sem trombose',
        'Hidroxicloroquina + prednisona (mesma conduta do LES)',
        'Heparina não fracionada IV em bomba de infusão contínua'
      ],
      correct: 1,
      explanation: 'SAF + morbidade obstétrica (≥3 abortos) sem trombose = HBPM em dose profilática + AAS. A warfarina é contraindicada no 1º e 3º trimestres (embriopatia e hemorragia fetal). HBPM não atravessa a placenta. AAS inibe a agregação plaquetária. Juntos, reduzem em 70-80% o risco de nova perda gestacional.',
      tip: 'SAF obsétrica (sem trombose) = HBPM profilática. SAF com trombose prévia = HBPM terapêutica. A distinção muda a dose.'
    },
    {
      stem: 'Paciente com SAF em uso de enoxaparina 40 mg/dia e AAS 100 mg/dia está em trabalho de parto às 39 semanas. Tomou a última dose de enoxaparina há 18 horas. Pode receber anestesia epidural?',
      options: [
        'Sim — a dose profilática de HBPM não contraindica anestesia epidural se intervalo ≥12h',
        'Não — qualquer uso de heparina contraindica anestesia epidural',
        'Sim — AAS não contraindica epidural, e a heparina profilática com ≥12h permite',
        'Não — SAF sempre exige anestesia geral',
        'Sim — a anestesia pode ser feita imediatamente sem necessidade de intervalo'
      ],
      correct: 0,
      explanation: 'HBPM em dose profilática: aguardar ≥12h após a última dose para anestesia neuroaxial (epidural/raqui). Com 18h de intervalo, está dentro do prazo. HBPM em dose terapêutica: aguardar ≥24h. AAS não contraindica anestesia neuroaxial. Portanto: pode receber epidural.',
      tip: 'Profilática = ≥12h; Terapêutica = ≥24h. Essa distinção de intervalo é cobrada em provas de anestesiologia e obstetrícia.'
    }
  ]);
  GO_NAV(el, page);
};

window.calcSAF = function() {
  const p = document.getElementById('saf-perfil')?.value;
  const r = document.getElementById('saf-result');
  if (!r || !p) return;
  const m = {
    'aborto': { cls:'warn', msg: '<strong>HBPM em dose PROFILÁTICA + AAS 100 mg/dia</strong><br>Iniciar desde a confirmação da gestação. HBPM profilática: enoxaparina 40 mg SC 1×/dia. AAS 100-150 mg/dia. Manter até 6-12 semanas pós-parto.' },
    'tvp': { cls:'warn', msg: '<strong>HBPM em dose TERAPÊUTICA + AAS 100 mg/dia</strong><br>Enoxaparina 1 mg/kg SC 2×/dia. AAS 100-150 mg/dia. Monitorar nível anti-Xa se necessário. Manter anticoagulação pós-parto (4-6 semanas mínimo).' },
    'avc': { cls:'danger', msg: '<strong>HBPM TERAPÊUTICA + AAS + Avaliação multidisciplinar</strong><br>Trombose arterial = risco muito alto. Enoxaparina terapêutica durante toda gestação. Discutir com neurologia e reumatologia. Anticoagulação pós-parto prolongada.' },
    'ab_isolado': { cls:'ok', msg: '<strong>AAS 100 mg/dia isolado OU observar</strong><br>Anticorpo positivo sem evento clínico = baixo risco. AAS profilático pode ser considerado. Monitorar gestação de perto.' },
  };
  const v = m[p]; if (v) { r.className=`sim-result ${v.cls}`; r.innerHTML=v.msg; }
};

/* ===================================================
   PÁGINA 20 — SAF: PROGRAMAÇÃO DO PARTO
   =================================================== */
GO_RENDER['saf-parto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🗓️ Reumato — Página 9 (SAF)','SAF: Programação do Parto e Manejo Periparto','Quando e como interromper? Como manejar a anticoagulação no parto? O que fazer com as plaquetas e o bloqueio neuroaxial?',GRAD_MAP.saf)}

  <div class="anim-fade-up">
  ${sectionHeader('🗓️','Momento do Parto na SAF','#7c3aed')}
  <div class="glass-card" style="padding:24px;margin-bottom:20px">
    <h4>Critérios de Interrupção na SAF</h4>
    <div class="timeline">
      <div class="timeline-item active">
        <div class="timeline-period">SAF Controlada — Sem Complicações</div>
        <div class="timeline-content">Aguardar trabalho de parto espontâneo ou induzir às 39-40 semanas. Via de parto: conforme indicação obstétrica. Parto vaginal preferível se possível.</div>
      </div>
      <div class="timeline-item active">
        <div class="timeline-period">SAF com CIUR ou Insuficiência Placentária</div>
        <div class="timeline-content">Interromper conforme critérios do CIUR (Doppler alterado, oligoidrâmnio). Pode ser antes de 37 semanas. Corticoide para maturidade se &lt;34 semanas.</div>
      </div>
      <div class="timeline-item active">
        <div class="timeline-period">SAF com Pré-eclâmpsia Grave</div>
        <div class="timeline-content">Seguir protocolo de PE grave (antihipertensivo + sulfato de magnésio + interrupção). Via de parto conforme critérios obstétricos.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-period">SAF com Trombose durante a Gestação</div>
        <div class="timeline-content">Emergência. HBPM terapêutica imediata. Avaliação multidisciplinar. Interrupção conforme gravidade materna.</div>
      </div>
    </div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('💉','Manejo da Anticoagulação Periparto','#7c3aed')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Situação</th><th>HBPM</th><th>Anestesia Neuroaxial</th><th>Reinício</th></tr></thead>
    <tbody>
      <tr><td>HBPM profilática (40 mg/dia)</td><td>Suspender 12-24h antes do parto</td><td class="cell-check">✅ Permitida se ≥12h da última dose</td><td>12-24h pós-parto vaginal; 24h pós-cesárea</td></tr>
      <tr><td>HBPM terapêutica (1 mg/kg 2×/dia)</td><td>Suspender 24h antes do parto</td><td class="cell-check">✅ Permitida se ≥24h da última dose</td><td>24-48h pós-parto (após hemostasia)</td></tr>
      <tr><td>Warfarina (se usada no 2º trim)</td><td>Trocar para HBPM próximo ao parto</td><td class="cell-cross">❌ INR >1,5 = contraindicação</td><td>Reiniciar warfarina pós-parto + HBPM bridge</td></tr>
    </tbody>
  </table>
  </div>

  ${sectionHeader('📋','Pós-parto na SAF — Anticoagulação Obrigatória','#7c3aed')}
  ${alertBox('atencao','Não Esquecer o Pós-Parto!','O período pós-parto é de altíssimo risco trombótico na SAF (estado pró-coagulante do puerpério + SAF). A anticoagulação deve ser mantida por pelo menos 6-12 semanas após o parto. Em pacientes com trombose prévia: anticoagulação indefinida.','⚠️')}

  ${sectionHeader('🧠','Resumo SAF — Alta Densidade de Prova','#7c3aed')}
  <ol class="resumo-list">
    ${resumoItem(1,'#7c3aed','<strong>SAF = trombofilia adquirida:</strong> anticorpos antifosfolípide + evento clínico (trombose OU morbidade gestacional: ≥3 abortos <10 sem, ou óbito fetal ≥10 sem, ou PE grave <34 sem)')}
    ${resumoItem(2,'#7c3aed','<strong>Anticorpos:</strong> anticoagulante lúpico (AL) + anticardiolipina (aCL) + anti-β2GPI. Positivos em 2 ocasiões ≥12 semanas = critério laboratorial.')}
    ${resumoItem(3,'#7c3aed','<strong>Paradoxo:</strong> AL alonga TTPA in vitro mas causa trombose in vivo.')}
    ${resumoItem(4,'#7c3aed','<strong>Tratamento:</strong> HBPM + AAS. Profilático (abortos sem trombose) ou terapêutico (trombose prévia). Warfarina: contraindicada no 1º e 3º trimestres.')}
    ${resumoItem(5,'#7c3aed','<strong>Parto:</strong> suspender HBPM 12-24h (profilática) ou 24h (terapêutica) antes. Reiniciar em 12-48h pós-parto. Manter anticoagulação por 6-12 semanas no mínimo.')}
    ${resumoItem(6,'#7c3aed','<strong>Anestesia epidural:</strong> permitida se HBPM profilática ≥12h ou terapêutica ≥24h antes.')}
  </ol>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Paciente com SAF em uso de enoxaparina 40 mg/dia SC está com 38 semanas. Decidiu-se pela indução do parto. A data de indução é programada para amanhã às 8h. Quando suspender a enoxaparina?',
      options: [
        'Agora mesmo — suspender imediatamente para garantir segurança',
        'Hoje à noite, garantindo pelo menos 12h de intervalo até o parto',
        'Apenas após a amniotomia no trabalho de parto',
        'Manter até o início das contrações ativas',
        'Não há necessidade de suspender — a enoxaparina profilática não aumenta sangramento'
      ],
      correct: 1,
      explanation: 'HBPM profilática: suspender 12-24h antes do procedimento/parto. Se a indução é às 8h de amanhã, suspender a dose de hoje à noite — garantindo ≥12h de intervalo. Isso permite anestesia neuroaxial segura (epidural) e reduz risco de sangramento no parto. Reiniciar 12-24h após o parto vaginal.',
      tip: 'Profilática = 12h; Terapêutica = 24h. Isso é o intervalo mínimo antes do neuroaxial e do parto.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 21 — ARTRITE REUMATOIDE NA GESTAÇÃO
   =================================================== */
GO_RENDER['ar-gest'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🦴 Reumato — Página 10','Artrite Reumatoide na Gestação: A Doença que MELHORA','AR = TH1. Gestação = TH2. A gestação suprime TH1, então a AR MELHORA durante a gravidez — mas recidiva no pós-parto. Medicações permitidas e proibidas.',GRAD_MAP.reumato)}

  <div class="anim-fade-up">
  ${sectionHeader('🧬','AR na Gestação — A Imunologia que Explica Tudo','#9333ea')}
  ${alertBox('success','Conceito Central','A Artrite Reumatoide é uma doença TH1 (mediada por células T e citocinas pró-inflamatórias como TNF-α, IL-1, IL-6). A gestação desloca o sistema imune para TH2. Esse desvio suprime a resposta TH1 → a AR melhora durante a gestação em 60-70% das pacientes.','🧬')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Durante a gestação</h4>
    ${styledList([
      '60-70% das pacientes com AR melhoram (remissão ou redução de atividade)',
      'Pode reduzir ou suspender DMARDs em algumas pacientes',
      'Pico de melhora: 2º e 3º trimestres',
      'Menor risco de flares durante a gestação'
    ])}`)}
    ${glassCard(`<h4>No pós-parto</h4>
    ${styledList([
      '90% das pacientes que melhoraram recidivam no pós-parto',
      'O estado TH2 se desfaz → volta TH1 → AR ativa novamente',
      'Geralmente nas primeiras 6-12 semanas pós-parto',
      'Reiniciar DMARDs conforme atividade da doença'
    ])}`)}
  </div>

  ${alertBox('pegadinha','AR Melhora, LES Piora','A banca adora cobrar essa diferença: AR (TH1) → gestação (TH2) → MELHORA. LES (TH2) → gestação (TH2) → PIORA. São as duas doenças reumatológicas mais cobradas em provas de residência médica e de obstetrícia.','🎭')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('💊','Medicações na AR e Gestação','#9333ea')}
  <div class="grid-2 mb-24">
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--success);margin-bottom:12px">✅ PERMITIDAS</h4>
      ${styledList([
        '<strong>Hidroxicloroquina</strong> — segura em qualquer trimestre',
        '<strong>Sulfasalazina</strong> — segura (complementar com ácido fólico)',
        '<strong>Prednisona/prednisolona</strong> — seguras (doses menores possível)',
        '<strong>AINEs (ibuprofeno)</strong> — até 28-32 semanas; após isso, risco de fechamento prematuro do ducto arterioso',
        '<strong>Certolizumabe (anti-TNF)</strong> — único anti-TNF sem passagem transplacentária significativa; pode ser usado em gestação quando necessário'
      ])}
    </div>
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--error);margin-bottom:12px">❌ CONTRAINDICADAS</h4>
      ${styledList([
        '<strong>Metotrexato</strong> — teratogênico, abortivo. Suspender 3 meses antes da gestação.',
        '<strong>Leflunomida</strong> — teratogênica. Washout com colestiramina necessário.',
        '<strong>AINEs após 28-32 semanas</strong> — fechamento prematuro do ducto arterioso → hipertensão pulmonar fetal',
        '<strong>Outros anti-TNF (infliximabe, adalimumabe)</strong> — cruzam a placenta; evitar especialmente no 3º trimestre',
        '<strong>Rituximabe</strong> — depleta linfócitos B; evitar'
      ])}
    </div>
  </div>

  ${sectionHeader('📋','Pontos de Prova — AR na Gestação','#9333ea')}
  ${provaCard('Qual o comportamento da AR na gestação?','Melhora em 60-70% — porque gestação é TH2 e AR é TH1. Após o parto, 90% recidivam.')}
  ${provaCard('Por que AINEs são perigosos no 3º trimestre?','Inibem as prostaglandinas necessárias para manter o ducto arterioso aberto. Fechamento prematuro → hipertensão pulmonar fetal persistente do RN.')}
  ${provaCard('Qual anti-TNF é permitido na gestação?','Certolizumabe — único que não tem passagem transplacentária significativa (é peguilado, sem porção Fc para fixar na placenta). Os outros cruzam a placenta.')}
  ${provaCard('MTX na AR — o que fazer se a paciente engravida?','Suspender imediatamente. MTX é antagonista do folato → defeitos do tubo neural. Suplementar com ácido fólico em alta dose.')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('⚖️','Comparativo Final Reumato','#9333ea')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Aspecto</th><th>🔴 LES</th><th>🩸 SAF</th><th>🦴 AR</th></tr></thead>
    <tbody>
      <tr><td>Tipo imune</td><td>TH2</td><td>TH2 (anticorpos)</td><td>TH1</td></tr>
      <tr><td>Gestação</td><td class="cell-cross">PIORA</td><td class="cell-cross">PIORA / Perdas</td><td class="cell-check">MELHORA</td></tr>
      <tr><td>Pós-parto</td><td>Pode flare</td><td>Alto risco trombo.</td><td class="cell-cross">Recidiva em 90%</td></tr>
      <tr><td>Anticorpo-chave</td><td>Anti-DNA, Anti-Ro</td><td>AL, aCL, anti-β2GPI</td><td>FR, anti-CCP</td></tr>
      <tr><td>Risco fetal específico</td><td>Bloqueio cardíaco (anti-Ro)</td><td>Abortamento, trombose placentária</td><td>Pequeno ↑ parto prematuro</td></tr>
      <tr><td>Droga principal na gestação</td><td>Hidroxicloroquina</td><td>HBPM + AAS</td><td>HCQ, sulfasalazina</td></tr>
      <tr><td>Droga proibida</td><td>MTX, MMF, ciclofosfamida</td><td>Warfarina (1º e 3º trim)</td><td>MTX, leflunomida, AINEs tardios</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 26 semanas com artrite reumatoide em uso de metotrexato (MTX) e prednisona. Descobre estar grávida de 6 semanas (gestação não planejada). Qual a conduta imediata?',
      options: [
        'Manter o metotrexato — a artrite reumatoide justifica o risco',
        'Suspender o metotrexato imediatamente e suplementar com ácido fólico em alta dose',
        'Aumentar a dose de prednisona e manter o MTX',
        'Substituir o MTX por ciclofosfamida, mais segura na gestação',
        'Aguardar até o 2º trimestre para suspender o MTX'
      ],
      correct: 1,
      explanation: 'O metotrexato é antagonista do folato — teratogênico (defeitos do tubo neural, anomalias faciais, CIUR) e abortivo. Deve ser suspenso IMEDIATAMENTE ao descobrir a gestação. Suplementar com ácido fólico em alta dose (5 mg/dia). Substituir por medicação segura (hidroxicloroquina, sulfasalazina, prednisona). A prednisona pode ser mantida.',
      tip: 'MTX é talvez o medicamento mais importante para lembrar como contraindicado: teratogênico + abortivo. Suspender + ácido fólico alto.'
    },
    {
      stem: 'Sobre o uso de anti-inflamatórios não esteroidais (AINEs) na gestação, é correto afirmar que:',
      options: [
        'São contraindicados em qualquer trimestre da gestação',
        'São seguros durante toda a gestação e podem ser usados sem restrição',
        'Podem ser usados com cautela até 28-32 semanas; após isso, risco de fechamento prematuro do ducto arterioso',
        'São contraindicados apenas no 1º trimestre por risco de defeitos do tubo neural',
        'O ibuprofeno é seguro a qualquer momento, diferente dos outros AINEs'
      ],
      correct: 2,
      explanation: 'AINEs inibem as prostaglandinas que mantêm o ducto arterioso fetal aberto. Após 28-32 semanas, o uso pode causar fechamento prematuro do ducto arterioso → hipertensão pulmonar persistente do recém-nascido (HPPN). Antes desse período, podem ser usados com cautela quando necessários. Todos os AINEs têm esse risco no 3º trimestre.',
      tip: '28-32 semanas = "corte" para AINEs. Antes: usar com cautela. Depois: contraindicado (ducto arterioso).'
    }
  ]);
  GO_NAV(el, page);
};
