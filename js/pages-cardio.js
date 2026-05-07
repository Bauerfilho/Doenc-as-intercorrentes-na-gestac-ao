/* =========================================
   GO PREMIUM — BLOCO CARDIO
   Cardiopatias na Gestação
   ========================================= */

/* ===================================================
   PÁGINA 22 — CARDIOVASCULAR: FISIOLOGIA NA GESTAÇÃO
   =================================================== */
GO_RENDER['card-fisio'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('❤️ Cardio — Bloco 3 / Página 1','Modificações Cardiovasculares da Gestação: Por que a Cardiopatia Descompensa?','O débito cardíaco aumenta 40-50%. O volume plasmático aumenta 50%. O coração trabalha muito mais — e se já estava doente, pode não aguentar. Entender a fisiologia é entender por que a cardiopata grávida é de alto risco.',GRAD_MAP.cardio)}

  <div class="anim-fade-up">
  ${sectionHeader('📊','As Grandes Modificações Cardiovasculares','#e11d48')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Parâmetro</th><th>Modificação</th><th>Magnitude</th><th>Implicação Clínica</th></tr></thead>
    <tbody>
      <tr><td><strong>Volume plasmático</strong></td><td>↑ Aumenta</td><td>+40-50%</td><td>Anemia dilucional; ↑ pré-carga</td></tr>
      <tr><td><strong>Débito cardíaco (DC)</strong></td><td>↑ Aumenta</td><td>+40-50%</td><td>Sopro sistólico fisiológico; ↑ trabalho cardíaco</td></tr>
      <tr><td><strong>Frequência cardíaca</strong></td><td>↑ Aumenta</td><td>+10-15 bpm</td><td>Taquicardia até 90-100 bpm pode ser normal</td></tr>
      <tr><td><strong>Resistência periférica</strong></td><td>↓ Diminui</td><td>-30-40%</td><td>↓ Pós-carga; PA pode cair no 2º trimestre</td></tr>
      <tr><td><strong>Pressão arterial</strong></td><td>↓ Diminui levemente</td><td>-5-10 mmHg</td><td>PA baixa no 2º trim pode ser normal</td></tr>
      <tr><td><strong>Volume sistólico</strong></td><td>↑ Aumenta</td><td>+25-30%</td><td>Responsável pelo ↑ DC junto com FC</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('info','Sopro Sistólico na Gestação é Normal','O aumento do débito cardíaco gera um sopro sistólico ejetivo (grau I-II) fisiológico — presente em até 90% das gestantes. NÃO investigar como cardiopatia a menos que seja ≥ grau III ou diastólico. Diastólico NUNCA é normal.','💡')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🗓️','Picos de Sobrecarga Cardiovascular na Gestação','#e11d48')}
  ${bodyText('Existem momentos em que o coração é mais sobrecarregado — são os momentos de maior risco de descompensação da cardiopata.')}

  <div class="timeline mb-24">
    <div class="timeline-item active">
      <div class="timeline-period">28-32 semanas</div>
      <div class="timeline-content"><strong>Pico máximo do débito cardíaco.</strong> Volume plasmático atinge seu ponto mais alto. Cardiopatias que estavam "compensadas" podem descompensar nesse período. Monitorização intensiva.</div>
    </div>
    <div class="timeline-item active">
      <div class="timeline-period">Trabalho de Parto</div>
      <div class="timeline-content">Cada contração ejeta 300-500 mL do útero para a circulação. DC aumenta mais 15-20% durante as contrações. PA e FC oscilam muito. Risco de edema pulmonar.</div>
    </div>
    <div class="timeline-item active">
      <div class="timeline-period">Pós-parto Imediato</div>
      <div class="timeline-content"><strong>Momento mais crítico.</strong> Com a saída do feto, o útero contrai → autotransfusão de 500-1000 mL. DC aumenta bruscamente. Risco máximo de edema pulmonar agudo. Descompensação pode ser fatal.</div>
    </div>
  </div>

  ${alertBox('pegadinha','O Período Mais Perigoso é o Pós-Parto Imediato','A banca pergunta frequentemente: "Qual o período de maior risco de descompensação cardiovascular?" A resposta é o pós-parto imediato — quando o útero se contrai e lança de volta à circulação o sangue que estava represado. O DC pode aumentar 60-80% acima do pré-gestacional nesse momento.','🎭')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🩺','Achados Normais vs Patológicos no Exame Cardiovascular','#e11d48')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4 style="color:var(--success)">✅ NORMAL na Gestação</h4>
    ${styledList([
      'Sopro sistólico ejetivo grau I-II (aórtico ou pulmonar)',
      'Taquicardia até 90-100 bpm',
      'Edema de membros inferiores (vespertino, bilateral)',
      'Dispneia leve aos grandes esforços',
      'B3 pode estar presente (↑ volume)'
    ])}`)}
    ${glassCard(`<h4 style="color:var(--error)">⚠️ PATOLÓGICO — Investigar</h4>
    ${styledList([
      'Sopro diastólico (NUNCA é fisiológico)',
      'Sopro sistólico ≥ grau III/VI',
      'Sopro contínuo',
      'Dispneia em repouso ou ortopneia',
      'Edema assimétrico ou com empastamento',
      'Cianose, síncope, dor torácica'
    ])}`)}
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 30 semanas refere dispneia leve ao subir escadas. Exame físico: FC 88 bpm, PA 105/65 mmHg, sopro sistólico grau II em foco pulmonar, sem edema de membros inferiores. A conduta é:',
      options: [
        'Solicitar ecocardiograma urgente — sopro sistólico exige investigação',
        'Solicitar ECG e radiografia de tórax imediatamente',
        'Tranquilizar a paciente — achados são fisiológicos da gestação',
        'Encaminhar à cardiologia com urgência por insuficiência cardíaca',
        'Iniciar diurético para tratar o edema pulmonar'
      ],
      correct: 2,
      explanation: 'FC 88 bpm (normal até 90-100), sopro sistólico grau II (normal até grau II), PA levemente baixa (resistência periférica reduzida), dispneia leve aos esforços — todos achados fisiológicos da gestação. Não há sinais de alarme (sopro diastólico, ortopneia, cianose). A conduta é tranquilizar e orientar.',
      tip: 'Só investigar sopro se: diastólico, sistólico ≥ grau III, ou acompanhado de sintomas de IC (dispneia em repouso, ortopneia, B3 + estertores).'
    },
    {
      stem: 'Em qual período da gestação e puerpério o débito cardíaco atinge seu pico mais elevado, com maior risco de descompensação em cardiopatas?',
      options: [
        '1º trimestre (8-12 semanas)',
        '28-32 semanas de gestação',
        'Trabalho de parto ativo',
        'Pós-parto imediato (primeiras horas após a saída do feto)',
        '6 semanas pós-parto'
      ],
      correct: 3,
      explanation: 'O pós-parto imediato é o período de maior risco. Com a saída do feto, o útero contrai e ejeta 500-1000 mL de sangue para a circulação (autotransfusão). O DC pode aumentar 60-80% acima do basal em minutos. Cardiopatas que toleraram a gestação toda podem descompensar nesse momento. Por isso, o pós-parto requer monitorização intensiva.',
      tip: 'A sequência de risco: 28-32 sem (pico volume plasmático) < trabalho de parto < pós-parto imediato (maior risco).'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 23 — CLASSIFICAÇÃO OMS DE RISCO CARDIOVASCULAR
   =================================================== */
GO_RENDER['card-classif'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('📊 Cardio — Página 2','Classificação OMS de Risco Cardiovascular na Gestação','A OMS classifica as cardiopatias em 4 classes de risco. Classes III e IV = contraindicação à gestação ou necessidade de aconselhamento especializado. Saber classificar é saber indicar interrupção.',GRAD_MAP.cardio)}

  <div class="anim-fade-up">
  ${sectionHeader('🎯','Por que Classificar?','#e11d48')}
  ${bodyText('A classificação OMS permite estimar o risco de mortalidade e morbidade cardiovascular materna grave na gestação. Ela guia o aconselhamento pré-concepcional, a conduta durante a gestação e a decisão sobre via de parto e momento de interrupção.')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead>
      <tr>
        <th>Classe OMS</th>
        <th>Risco Materno</th>
        <th>Exemplos de Cardiopatias</th>
        <th>Conduta</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="badge badge-ok">Classe I</span></td>
        <td>Risco não aumentado ou levemente aumentado</td>
        <td>Estenose pulmonar leve; CIA/CIV pequenas; PCA ligada; prolapso de valva mitral sem regurgitação; extrassístoles; Tetralogia de Fallot corrigida</td>
        <td>Acompanhamento de rotina</td>
      </tr>
      <tr>
        <td><span class="badge badge-warn">Classe II</span></td>
        <td>Risco levemente aumentado</td>
        <td>CIA/CIV não operadas; coarctação de aorta operada; Tetralogia de Fallot não corrigida; arritmias controladas; valvopatia mitral leve</td>
        <td>Pré-natal especializado</td>
      </tr>
      <tr>
        <td><span class="badge badge-no">Classe III</span></td>
        <td>Risco significativamente aumentado</td>
        <td>Válvula mecânica; ventrículo direito sistêmico; síndrome de Fontan; cardiomiopatia periparto com função preservada; estenose mitral moderada; síndrome de Marfan sem dilatação de aorta</td>
        <td>Acompanhamento intensivo; discutir riscos</td>
      </tr>
      <tr>
        <td><span class="badge badge-no" style="background:var(--error)">Classe IV</span></td>
        <td>Risco extremamente alto — gestação contraindicada</td>
        <td><strong>Hipertensão arterial pulmonar;</strong> síndrome de Eisenmenger; cardiomiopatia com FE &lt;30%; síndrome de Marfan com dilatação aórtica >45 mm; estenose aórtica grave; coarctação de aorta grave não corrigida</td>
        <td>⚠️ Contraindicação à gestação ou interrupção</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🚨','Síndrome de Eisenmenger — A mais Grave','#e11d48')}
  ${alertBox('danger','Eisenmenger = Contraindicação Absoluta à Gestação','A síndrome de Eisenmenger (shunt esquerda-direita que se inverte para direita-esquerda por hipertensão pulmonar) é a cardiopatia de MAIOR RISCO na gestação. Mortalidade materna de 30-50%. Se gestação ocorrer, indicada interrupção no 1º trimestre. Caso mantida, mortalidade materno-fetal extremamente alta.','🚨')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Fisiopatologia do Eisenmenger</h4>
    <div class="flow-container" style="gap:8px;margin-top:10px">
      <div class="flow-step" style="padding:8px 14px;font-size:var(--text-xs)">CIA/CIV/PCA não tratada → shunt E→D</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-step" style="padding:8px 14px;font-size:var(--text-xs)">↑ Fluxo pulmonar → lesão vascular pulmonar</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-step" style="padding:8px 14px;font-size:var(--text-xs)">Hipertensão pulmonar grave (irreversível)</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-step" style="padding:8px 14px;font-size:var(--text-xs);border-color:var(--error);background:var(--error-light)">Shunt se inverte → D→E → <strong>CIANOSE</strong></div>
    </div>`)}
    ${glassCard(`<h4>Por que é fatal na gestação?</h4>
    ${styledList([
      '↓ Resistência periférica sistêmica (normal na gestação)',
      'Shunt D→E piora → mais sangue venoso na circulação sistêmica',
      'Hipóxia materna grave',
      'Crise vascular pulmonar no trabalho de parto',
      'Mortalidade periparto de 30-50%'
    ])}`)}
  </div>

  <div class="simulator-card">
    <h4>🔧 Simulador: Classifique a Cardiopatia (OMS)</h4>
    <label class="sim-label">Escolha a cardiopatia:</label>
    <select class="sim-select" id="oms-card">
      <option value="">-- Selecione --</option>
      <option value="ep_leve">Estenose pulmonar leve</option>
      <option value="cia_nop">CIA não operada (sem HAP)</option>
      <option value="valva_mec">Válvula mecânica</option>
      <option value="eisenmenger">Síndrome de Eisenmenger</option>
      <option value="hap">Hipertensão arterial pulmonar</option>
      <option value="cm_fe30">Cardiomiopatia com FE < 30%</option>
      <option value="fallot_cor">Tetralogia de Fallot corrigida</option>
    </select>
    <button class="sim-btn" onclick="calcOMS()">📊 Ver Classificação</button>
    <div class="sim-result neutral mt-16" id="oms-result">Selecione para ver a classificação.</div>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🎯','Pontos de Prova','#9333ea')}
  ${provaCard('Classe IV — O que lembrar?','Hipertensão arterial pulmonar (HAP), Eisenmenger, FE < 30%, Marfan com dilatação aórtica > 45 mm. Contraindicação à gestação. Se grávida: indicar interrupção no 1º trimestre.')}
  ${provaCard('Classe III — Gestação com vigilância intensa','Válvula mecânica (risco de trombose se trocar warfarina por heparina), cardiomiopatia periparto prévia, Fontan. Necessidade de equipe multidisciplinar.')}
  ${provaCard('A questão favorita da banca','Eisenmenger: mortalidade de 30-50% na gestação. Contraindicação absoluta. Se já grávida de 1º trimestre: orientar interrupção.')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Paciente de 24 anos com CIA (comunicação interatrial) diagnosticada na infância, não operada, evoluiu com hipertensão arterial pulmonar grave e cianose ao esforço. Chega ao pré-natal com 8 semanas. Qual a conduta?',
      options: [
        'Manter a gestação com acompanhamento cardiológico intensivo',
        'Indicar correção cirúrgica da CIA durante a gestação',
        'Orientar interrupção da gestação — Síndrome de Eisenmenger é contraindicação (classe OMS IV)',
        'Iniciar sildenafil para reduzir a hipertensão pulmonar e manter a gestação',
        'Aguardar até 20 semanas para reavaliação'
      ],
      correct: 2,
      explanation: 'CIA não corrigida com HAP grave e cianose = Síndrome de Eisenmenger. Classe OMS IV. Mortalidade materna de 30-50% na gestação. É contraindicação à gestação. Com 8 semanas, deve-se orientar interrupção da gestação. Manter a gestação nessa condição coloca em risco a vida da paciente.',
      tip: 'Eisenmenger: shunt original E→D inverte para D→E por HAP irreversível. Classe OMS IV = gestação contraindicada.'
    },
    {
      stem: 'Uma paciente com prolapso de valva mitral sem regurgitação e sem arritmias planeja engravidar. Qual a classificação OMS de risco cardiovascular e a conduta adequada?',
      options: [
        'Classe OMS III — acompanhamento intensivo com cardiologista',
        'Classe OMS IV — contraindicação à gestação',
        'Classe OMS I — risco não aumentado; acompanhamento de rotina',
        'Classe OMS II — pré-natal especializado obrigatório',
        'Classe OMS I com indicação de profilaxia de endocardite'
      ],
      correct: 2,
      explanation: 'Prolapso de valva mitral sem regurgitação e sem arritmias = Classe OMS I. Risco materno não aumentado. A paciente pode engravidar e ser acompanhada em pré-natal de rotina. Não há contraindicação nem necessidade de acompanhamento especializado obrigatório.',
      tip: 'Classe I = sem risco adicional. Classe IV = contraindicação. Conhecer os exemplos de cada classe é mais importante que memorizar a tabela completa.'
    }
  ]);
  GO_NAV(el, page);
};

window.calcOMS = function() {
  const c = document.getElementById('oms-card')?.value;
  const r = document.getElementById('oms-result');
  if (!r || !c) return;
  const m = {
    'ep_leve':   { cls:'ok',     msg:'<strong>Classe OMS I</strong> — Risco não aumentado. Acompanhamento pré-natal de rotina. Parto vaginal preferível.' },
    'cia_nop':   { cls:'warn',   msg:'<strong>Classe OMS II</strong> — Risco levemente aumentado. Pré-natal especializado. Avaliar função cardíaca periodicamente.' },
    'valva_mec': { cls:'danger', msg:'<strong>Classe OMS III</strong> — Risco significativo. Dilema anticoagulante: warfarina (risco fetal) vs heparina (risco materno de trombose). Acompanhamento multidisciplinar intensivo.' },
    'eisenmenger':{ cls:'danger', msg:'<strong>Classe OMS IV — CONTRAINDICAÇÃO.</strong> Síndrome de Eisenmenger. Mortalidade materna 30-50%. Orientar interrupção no 1º trimestre se gestação ocorrer.' },
    'hap':       { cls:'danger', msg:'<strong>Classe OMS IV — CONTRAINDICAÇÃO.</strong> Hipertensão arterial pulmonar. Risco de morte materna extremamente alto. Contraindicação à gestação.' },
    'cm_fe30':   { cls:'danger', msg:'<strong>Classe OMS IV — CONTRAINDICAÇÃO.</strong> Cardiomiopatia com FE < 30%. Risco de mortalidade materna muito alto. Contraindicação à gestação.' },
    'fallot_cor':{ cls:'ok',     msg:'<strong>Classe OMS I</strong> — Tetralogia de Fallot corrigida cirurgicamente sem sequelas. Risco não aumentado. Pré-natal de rotina.' },
  };
  const v = m[c]; if (v) { r.className=`sim-result ${v.cls}`; r.innerHTML=v.msg; }
};

/* ===================================================
   PÁGINA 24 — VALVOPATIAS: ESTENOSE vs INSUFICIÊNCIA
   =================================================== */
GO_RENDER['card-valvar'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🫀 Cardio — Página 3','Valvopatias na Gestação: Estenose vs Insuficiência','Estenose tolera MAL o aumento do débito cardíaco (obstáculo fixo). Insuficiência tolera MELHOR (a redução da resistência periférica ajuda). Esse princípio explica tudo.',GRAD_MAP.cardio)}

  <div class="anim-fade-up">
  ${sectionHeader('⚙️','Princípio Fisiológico Fundamental','#e11d48')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4 style="color:var(--error)">⚠️ Estenose — Tolera MAL a Gestação</h4>
    <p style="font-size:var(--text-xs);margin-top:8px;line-height:1.6">A estenose é um <strong>obstáculo fixo</strong> ao fluxo. Com o aumento do débito cardíaco na gestação (+40-50%), mais sangue precisa passar pelo orifício estreitado. O gradiente de pressão aumenta. O coração força mais. Resultado: descompensação.</p>
    <div style="margin-top:12px;padding:10px;border-radius:8px;background:var(--error-light)">
      <strong>Pior valvopatia na gestação:</strong><br>Estenose Mitral grave (mais comum e mais temida)
    </div>`)}
    ${glassCard(`<h4 style="color:var(--success)">✅ Insuficiência — Tolera MELHOR a Gestação</h4>
    <p style="font-size:var(--text-xs);margin-top:8px;line-height:1.6">A insuficiência é um <strong>refluxo variável</strong>. A gestação reduz a resistência vascular periférica (pós-carga). Com menos resistência, o ventrículo precisa vencer menos → menor fração de regurgitação → a insuficiência melhora relativamente.</p>
    <div style="margin-top:12px;padding:10px;border-radius:8px;background:var(--success-light)">
      <strong>Melhor tolerada:</strong><br>Insuficiência mitral / Insuficiência aórtica
    </div>`)}
  </div>

  ${alertBox('pegadinha','A Lógica que Nunca Esquecer','Estenose = obstáculo. Mais volume (gestação) → mais pressão → descompensa. Insuficiência = refluxo. Menos resistência (gestação) → menos refluxo → compensa melhor. Use essa lógica para qualquer valvopatia.','🎭')}
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🫀','Estenose Mitral — A Mais Temida na Gestação','#e11d48')}
  ${bodyText('A estenose mitral (EM) é a valvopatia adquirida mais comum na gestação (principalmente por febre reumática). É também a que mais descompensa.')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Por que a EM descompensa?</h4>
    ${styledList([
      'Orifício mitral estreitado → fila de sangue no átrio esquerdo (AE)',
      '↑ Débito cardíaco na gestação → ↑ pressão no AE',
      '↑ FC (gestação) → menos tempo de enchimento diastólico → piora mais',
      'Congestão pulmonar retrógrada → edema pulmonar',
      'Risco de fibrilação atrial (que piora ainda mais)'
    ])}`)}
    ${glassCard(`<h4>Manejo da Estenose Mitral Grave</h4>
    ${styledList([
      'Restrição de atividade física',
      'Controle rigoroso da FC (metoprolol — seguro na gestação)',
      'Diuréticos com cautela (reduzir pré-carga)',
      'Valvuloplastia mitral percutânea com balão (se grave + sintomática + não responde ao clínico)',
      'Anticoagulação se FA associada'
    ])}`)}
  </div>

  ${sectionHeader('📊','Comparativo das Principais Valvopatias','#e11d48')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Valvopatia</th><th>Tolerância à Gestação</th><th>Risco Predominante</th><th>Manejo</th></tr></thead>
    <tbody>
      <tr><td><strong>Estenose Mitral Grave</strong></td><td class="cell-cross">❌ Mal tolera</td><td>Edema pulmonar, FA, pré-eclâmpsia</td><td>Beta-bloqueador + diurético; valvuloplastia se refratário</td></tr>
      <tr><td>Estenose Mitral Leve</td><td class="cell-check">⚠️ Tolera com vigilância</td><td>Descompensação no 2º-3º trim</td><td>Monitorização intensiva</td></tr>
      <tr><td><strong>Insuficiência Mitral</strong></td><td class="cell-check">✅ Tolera bem</td><td>Baixo risco se compensada</td><td>Acompanhamento clínico</td></tr>
      <tr><td><strong>Estenose Aórtica Grave</strong></td><td class="cell-cross">❌ Mal tolera</td><td>IC, síncope, morte súbita</td><td>Restrição de atividade; cirurgia urgente se IC</td></tr>
      <tr><td><strong>Insuficiência Aórtica</strong></td><td class="cell-check">✅ Tolera razoavelmente</td><td>IC progressiva</td><td>Acompanhamento; vasodilatador se necessário</td></tr>
      <tr><td><strong>Válvula Mecânica</strong></td><td class="cell-cross">❌ Alto risco (anticoagulação)</td><td>Trombose valvar (heparina < warfarina)</td><td>Dilema anticoagulante; OMS Classe III</td></tr>
    </tbody>
  </table>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🔧','Válvula Mecânica — O Dilema da Anticoagulação','#e11d48')}
  ${alertBox('atencao','O Maior Dilema Terapêutico','Pacientes com válvula mecânica PRECISAM de anticoagulação plena — sem ela, o risco de trombose valvar é altíssimo. Mas a warfarina (mais eficaz) é teratogênica no 1º trim e causa hemorragia fetal. A heparina (mais segura para o feto) tem maior risco de trombose valvar materna.','⚠️')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Opção</th><th>Risco Materno (Trombose)</th><th>Risco Fetal</th><th>Preferência</th></tr></thead>
    <tbody>
      <tr><td>Warfarina todo o período</td><td class="cell-check">Baixo</td><td class="cell-cross">Alto (1º trim: embriopatia; 3º trim: hemorragia)</td><td>Preferida por muitos cardiologistas, mas teratogênica</td></tr>
      <tr><td>HBPM todo o período</td><td class="cell-cross">Elevado</td><td class="cell-check">Baixo (não cruza placenta)</td><td>Maior risco materno de trombose valvar</td></tr>
      <tr><td>Warfarina (2º trim) + HBPM (1º e 3º trim)</td><td class="cell-neutral">Intermediário</td><td class="cell-neutral">Reduzido no 1º e 3º trim</td><td>Estratégia de compromisso — mais usada</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 22 semanas com estenose mitral grave (área valvar 0,8 cm²) em uso de metoprolol. Vem à emergência com dispneia intensa em repouso e ortopneia. Exame físico: FC 118 bpm, estertores crepitantes bibasais, SpO2 88%. Qual o diagnóstico e conduta imediata?',
      options: [
        'Crise asmática — broncodilatador inalatório',
        'Edema agudo de pulmão por descompensação da estenose mitral — oxigênio, diurético IV, controle da FC',
        'Pré-eclâmpsia grave — sulfato de magnésio',
        'Embolia pulmonar — heparina imediata',
        'Pneumonia — antibiótico'
      ],
      correct: 1,
      explanation: 'Edema agudo de pulmão por descompensação de estenose mitral grave. FC elevada (menos tempo de enchimento diastólico), SpO2 baixa, estertores bibasais. Conduta: oxigenoterapia, furosemida IV, controle da FC (metoprolol IV ou digitalização). Posição sentada. Se refratário: considerar valvuloplastia mitral com balão durante a gestação.',
      tip: 'Estenose mitral + FC alta = descompensação rápida. Controlar FC é prioridade (diminui tempo de enchimento do VE).'
    },
    {
      stem: 'Por que a insuficiência aórtica é melhor tolerada na gestação do que a estenose aórtica?',
      options: [
        'Porque a insuficiência causa hipertrofia cardíaca que melhora com o tempo',
        'Porque a gestação aumenta a resistência periférica, reduzindo o refluxo aórtico',
        'Porque a redução da resistência vascular periférica na gestação diminui a pós-carga, favorecendo o ventrículo e reduzindo a fração de regurgitação',
        'Porque a insuficiência aórtica nunca causa sintomas na gestação',
        'Porque o volume plasmático aumentado compensa o refluxo valvar'
      ],
      correct: 2,
      explanation: 'A gestação reduz a resistência vascular periférica (pós-carga). Na insuficiência aórtica, menor resistência significa que o ventrículo encontra menos obstáculo para ejetar — logo, regurgita menos e trabalha mais eficientemente. Na estenose, o obstáculo é fixo (a valva estreitada não muda) e o maior débito cardíaco obriga o coração a forçar mais contra ele.',
      tip: 'Insuficiência + gestação (↓ pós-carga) = melhor tolerada. Estenose + gestação (↑ volume) = pior tolerada.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 25 — CARDIOPATIA: TRATAMENTO
   =================================================== */
GO_RENDER['card-tto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('💊 Cardio — Página 4','Cardiopatia: Medicações e Tratamento na Gestação','Quais medicamentos são seguros? Quais são contraindicados? Como manejar o edema, a arritmia e a anticoagulação em gestantes cardiopatas?',GRAD_MAP.cardio)}

  <div class="anim-fade-up">
  ${sectionHeader('💊','Medicações Cardiovasculares na Gestação','#e11d48')}

  <div class="med-group">
    <div class="med-group-title" style="color:var(--success)">✅ PODEM SER USADAS — Seguras ou com Experiência Gestacional</div>
    ${medCard('can','💊','Metoprolol / Propranolol (Beta-bloqueadores)','Seguros. Metoprolol preferido por ser cardiosseletivo. Usados para controle de FC (estenose mitral, taquiarritmias). Propranolol: crise tireotóxica. Monitorar: CIUR, bradicardia e hipoglicemia neonatal.')}
    ${medCard('can','💊','Furosemida (Diurético de alça)','Usada com cautela para alívio da congestão pulmonar. Risco: redução do volume plasmático pode comprometer perfusão placentária. Usar na menor dose eficaz.')}
    ${medCard('can','💊','Digoxina','Segura. Usada para controle da FC na fibrilação atrial e na insuficiência cardíaca. Monitorar nível sérico (janela terapêutica estreita).')}
    ${medCard('can','💊','Heparina (HNF ou HBPM)','Anticoagulante de escolha na gestação. Não cruza a placenta. HBPM preferida pela comodidade (SC, sem monitorização de rotina).')}
    ${medCard('can','💊','Nifedipina (Bloqueador de canal de cálcio)','Usada para hipertensão na gestação. Também pode controlar FC em algumas arritmias. Segura.')}
  </div>

  <div class="med-group">
    <div class="med-group-title" style="color:var(--error)">❌ CONTRAINDICADAS / USO RESTRITO</div>
    ${medCard('no','💊','IECA / BRA (Captopril, Enalapril, Losartana)','CONTRAINDICADOS no 2º e 3º trimestres. Causam insuficiência renal fetal, oligoidrâmnio, calota craniana incompleta, CIUR. No 1º trim: risco menor, mas evitar. Substituir por metildopa, hidralazina ou nifedipina.')}
    ${medCard('no','💊','Amiodarona','Evitar. Causa hipotireoidismo fetal (iodo), bradicardia fetal, prematuridade. Se necessária (arritmia grave refratária), usar com monitorização intensiva.')}
    ${medCard('no','💊','Warfarina','Contraindicada no 1º e 3º trim. 1º trim: embriopatia varfarínica. 3º trim: hemorragia fetal/neonatal. Pode ser usada no 2º trim em casos selecionados (válvula mecânica).')}
    ${medCard('no','💊','Estatinas','Contraindicadas. Potencialmente teratogênicas. Suspender antes de engravidar.')}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔧','Cardiomiopatia Periparto (CMPP)','#e11d48')}
  ${alertBox('atencao','Diagnóstico por Exclusão','CMPP: IC com disfunção sistólica (FE <45%) que se desenvolve no último mês de gestação ou nos 5 primeiros meses pós-parto, sem causa identificável. É diagnóstico de exclusão. Incidência: 1:3.000-4.000 gestações. Mais comum em: negras, multíparas, > 30 anos, gemelar, pré-eclâmpsia.','⚠️')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Quadro Clínico da CMPP</h4>
    ${styledList([
      'Dispneia progressiva, ortopneia',
      'Edema de membros inferiores',
      'Fadiga desproporcional',
      'Taquicardia, ritmo de galope',
      'Estertores pulmonares',
      'Ecocardiograma: FE < 45%, disfunção sistólica'
    ])}`)}
    ${glassCard(`<h4>Tratamento e Prognóstico</h4>
    ${styledList([
      'Diuréticos (furosemida)',
      'Beta-bloqueador (metoprolol)',
      'Digoxina',
      '<strong>IECA e BRA: contraindicados durante gestação; iniciar no pós-parto</strong>',
      'HBPM se FE < 35% (risco de tromboembolismo)',
      '50-60% recuperam função cardíaca normal em 6 meses',
      'Recorrência em gestações futuras: 20-50%'
    ])}`)}
  </div>

  ${alertBox('pegadinha','IECA e BRA — Quando Usar?','IECA/BRA são contraindicados na gestação mas são a base do tratamento da IC e CMPP no pós-parto. Podem ser iniciados logo após o parto. Durante a gestação: substituir por metildopa ou hidralazina para controle pressórico + beta-bloqueador + diurético.','🎭')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 34 semanas, hipertensão arterial crônica com cardiomiopatia hipertensiva, em uso de enalapril 10 mg/dia. Qual a conduta imediata?',
      options: [
        'Manter enalapril — é seguro na gestação e eficaz para a cardiomiopatia',
        'Suspender enalapril e substituir por metildopa ou hidralazina — IECA é contraindicado no 2º e 3º trimestres',
        'Dobrar a dose de enalapril para melhor controle pressórico',
        'Substituir por losartana — BRA tem menor risco fetal que IECA',
        'Suspender toda medicação anti-hipertensiva durante a gestação'
      ],
      correct: 1,
      explanation: 'IECA (enalapril, captopril) e BRA (losartana) são contraindicados no 2º e 3º trimestres: causam insuficiência renal fetal, oligoidrâmnio, hipocalvaria, CIUR e morte fetal. Substituir por: metildopa (1ª linha na gestação), hidralazina ou nifedipina. Reiniciar IECA/BRA no pós-parto.',
      tip: 'IECA e BRA: OK no 1º trim (risco menor), mas CONTRAINDICADOS no 2º e 3º trimestres. Ambos são teratogênicos renais.'
    },
    {
      stem: 'Paciente de 32 anos, puerpério de 3 semanas, apresenta dispneia em repouso, ortopneia, edema. Ecocardiograma: FE 32%. Não tem história de cardiopatia prévia. Qual o diagnóstico mais provável?',
      options: [
        'Embolia pulmonar — solicitar angiotomografia',
        'Trombose venosa profunda — iniciar anticoagulação',
        'Cardiomiopatia periparto — IC com FE reduzida no pós-parto sem causa identificável',
        'Pré-eclâmpsia tardia — iniciar anti-hipertensivo e sulfato de magnésio',
        'Cardiomiopatia hipertensiva por HAC descompensada'
      ],
      correct: 2,
      explanation: 'CMPP: IC com FE <45% desenvolvida no último mês de gestação OU nos 5 primeiros meses pós-parto, sem doença cardíaca prévia e sem causa identificável. Puerpério de 3 semanas + FE 32% = diagnóstico de CMPP. Tratamento: diurético + beta-bloqueador + digoxina. AGORA pode iniciar IECA (pós-parto). HBPM se FE <35%.',
      tip: 'CMPP: o pós-parto é a janela diagnóstica — pode aparecer até 5 meses após. No pós-parto: IECA é liberado.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 26 — CARDIOPATIA: VIA DE PARTO
   =================================================== */
GO_RENDER['card-parto'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🏥 Cardio — Página 5','Cardiopatia: Via de Parto e Manejo Intraparto','Parto vaginal é mais seguro para a maioria das cardiopatas — menos sobrecarga cardiovascular que a cesárea. A decisão é baseada na classificação OMS e na estabilidade clínica.',GRAD_MAP.cardio)}

  <div class="anim-fade-up">
  ${sectionHeader('🏥','Princípio Geral: Vaginal é Mais Seguro que Cesárea','#e11d48')}
  ${alertBox('success','Regra Geral nas Cardiopatas','Para a maioria das cardiopatias, o PARTO VAGINAL é preferível à cesárea. A cesárea envolve anestesia geral ou regional, sangramento cirúrgico, recuperação mais lenta e maior risco de complicações — todos fatores que sobrecarregam mais o coração.','✅')}

  <div class="grid-2 mb-24">
    ${partoCard('vaginal','Parto Vaginal — Preferível nas Cardiopatas',[ 
      'Anestesia peridural (reduz dor e, por consequência, a sobrecarga cardiovascular)',
      'Menor perda sanguínea que a cesárea',
      'Menor risco de infecção e trombose pós-operatória',
      'Recuperação mais rápida',
      'Indicado: Classe OMS I, II e maioria da III (conforme estabilidade)'
    ])}
    ${partoCard('cesarea','Cesárea — Quando Indicada em Cardiopatas',[
      'Indicações obstétricas habituais (DCP, placenta prévia, etc.)',
      'Contraindicação hemodinâmica ao esforço do TP (Classe OMS IV com gestação mantida)',
      'Classe OMS IV com deterioração clínica grave',
      'Coarctação de aorta grave não corrigida (risco de dissecção durante esforço)',
      'Marfan com dilatação aórtica grave (risco de dissecção com Valsalva)'
    ])}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('⚡','Manejo Intraparto — Cuidados Especiais','#e11d48')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Cuidado</th><th>Porquê</th></tr></thead>
    <tbody>
      <tr><td><strong>Anestesia peridural</strong></td><td>Analgesia adequada → reduz liberação de catecolaminas → diminui sobrecarga cardíaca</td></tr>
      <tr><td><strong>Posição semi-sentada / lateral esquerda</strong></td><td>Evita compressão aortocava; melhora retorno venoso</td></tr>
      <tr><td><strong>Abreviar o período expulsivo</strong></td><td>Fórceps ou vácuo eletivo → evitar esforço materno prolongado (Valsalva aumenta pós-carga)</td></tr>
      <tr><td><strong>Ocitocina com cautela</strong></td><td>Ocitocina IV rápida → vasodilatação e hipotensão. Infusão lenta, dose mínima eficaz</td></tr>
      <tr><td><strong>Evitar ergotamina (ergot) pós-parto</strong></td><td>Vasoconstrição intensa → ↑ PA e pós-carga → risco de descompensação. Usar ocitocina.</td></tr>
      <tr><td><strong>Monitorização contínua</strong></td><td>ECG, PA, SpO2, débito urinário. UTI se Classe OMS III-IV.</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('pegadinha','Ergotamina na Cardiopata — PROIBIDA','A ergotamina (e o misoprostol em doses altas) causa vasoconstrição sistêmica intensa → aumento abrupto de pós-carga → risco de edema pulmonar e descompensação cardíaca aguda. Em cardiopatas: usar ocitocina para o manejo da 3ª fase do trabalho de parto.','🎭')}

  ${sectionHeader('📋','Resumo de Alto Rendimento — Cardio na Gestação','#e11d48')}
  <ol class="resumo-list">
    ${resumoItem(1,'#e11d48','<strong>DC aumenta 40-50% na gestação.</strong> Pico: 28-32 semanas. Período mais crítico: pós-parto imediato (autotransfusão uterina).')}
    ${resumoItem(2,'#e11d48','<strong>Estenose tolera mal; insuficiência tolera melhor.</strong> Estenose mitral grave = valvopatia adquirida mais perigosa na gestação.')}
    ${resumoItem(3,'#e11d48','<strong>Classe OMS IV = contraindicação</strong> (Eisenmenger, HAP, FE<30%, Marfan >45mm). Orientar interrupção se grávida.')}
    ${resumoItem(4,'#e11d48','<strong>Medicações:</strong> beta-bloqueador ✅, digoxina ✅, furosemida (cautela) ✅, heparina ✅. IECA/BRA ❌ (2º e 3º trim). Warfarina ❌ (1º e 3º trim). Amiodarona ❌ (evitar).')}
    ${resumoItem(5,'#e11d48','<strong>CMPP:</strong> FE<45% no último mês de gestação ou 5 primeiros meses pós-parto, sem causa. Tratamento: diurético + beta + digoxina; IECA no pós-parto.')}
    ${resumoItem(6,'#e11d48','<strong>Via de parto:</strong> vaginal preferível. Peridural reduz sobrecarga. Abreviar expulsivo. Ergotamina: proibida. Ocitocina: infusão lenta.')}
    ${resumoItem(7,'#e11d48','<strong>Sopro diastólico:</strong> NUNCA normal na gestação. Sistólico grau I-II = pode ser fisiológico.')}
  </ol>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 38 semanas com estenose mitral moderada (área valvar 1,2 cm²), em uso de metoprolol, FC controlada (72 bpm), sem sinais de IC. Qual a via de parto mais indicada?',
      options: [
        'Cesárea eletiva — cardiopatia contraindica parto vaginal',
        'Parto vaginal com anestesia peridural e abreviação eletiva do período expulsivo',
        'Parto vaginal sem anestesia para evitar hipotensão',
        'Cesárea sob anestesia geral para maior controle hemodinâmico',
        'Parto vaginal somente se FE > 60% ao ecocardiograma'
      ],
      correct: 1,
      explanation: 'Estenose mitral moderada compensada = parto vaginal com anestesia peridural (analgesia adequada reduz a liberação de catecolaminas e a sobrecarga cardíaca) e abreviação eletiva do período expulsivo (fórceps ou vácuo para evitar Valsalva prolongado). A cesárea reservada para indicações obstétricas ou descompensação.',
      tip: 'Peridural na cardiopata: além da analgesia, reduz a resposta adrenérgica → menos sobrecarga cardíaca. É recomendada, não contraindicada.'
    },
    {
      stem: 'Uma gestante cardiopata de 36 semanas em uso de oxitocina para indução do parto. A equipe deseja usar ergometrina (ergotamina) para prevenção de hemorragia pós-parto. Qual a conduta correta?',
      options: [
        'Usar ergometrina — é mais eficaz que a ocitocina para prevenção de HPP',
        'Contraindicar o uso de ergometrina — causa vasoconstrição sistêmica intensa com risco de descompensação cardíaca',
        'Usar ergometrina em baixa dose para menor risco cardiovascular',
        'Ergometrina é segura em cardiopatas — apenas contraindicada em hipertensas',
        'Usar misoprostol sublingual em vez de ergometrina — menor risco cardiovascular'
      ],
      correct: 1,
      explanation: 'Ergotamina (ergometrina) causa vasoconstrição sistêmica intensa → aumento súbito da pós-carga → risco de edema pulmonar e colapso cardiovascular em cardiopatas. É contraindicada. Usar ocitocina IV (infusão lenta para minimizar vasodilatação) ou, se necessário, misoprostol retal (em doses menores que o sublingual).',
      tip: 'Cardiopata + pós-parto = NUNCA ergotamina. Ocitocina: infusão lenta. Misoprostol retal: alternativa mais segura que sublingual.'
    }
  ]);
  GO_NAV(el, page);
};
