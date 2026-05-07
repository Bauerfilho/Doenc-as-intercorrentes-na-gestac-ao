/* =========================================
   GO PREMIUM — BLOCO ITU
   Infecção do Trato Urinário na Gestação
   ========================================= */

/* ===================================================
   PÁGINA 32 — ITU: POR QUE É MAIS COMUM NA GESTAÇÃO
   =================================================== */
GO_RENDER['itu-fisio'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🦠 ITU — Bloco 5 / Página 1','ITU na Gestação: Por que Acontece e Por que Sempre Tratar','A gestação cria o ambiente perfeito para a ITU: ureteres dilatados, fluxo lento, pH urinário alterado. E a bacteriúria assintomática — que nunca tratamos fora da gestação — SEMPRE deve ser tratada aqui.',GRAD_MAP.itu)}

  <div class="anim-fade-up">
  ${sectionHeader('⚙️','Mecanismos Fisiopatológicos da ITU na Gestação','#0284c7')}
  ${bodyText('A gestação cria condições anatômicas e hormonais que favorecem a colonização e ascensão bacteriana. Esses mecanismos precisam ser compreendidos para entender por que a bacteriúria assintomática deve ser tratada.')}

  <div class="flow-container mb-24">
    <div class="flow-step">Progesterona → relaxamento da musculatura lisa dos ureteres</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">Dilatação ureteral (ureterohidronefrose fisiológica bilateral)</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step">↑ Fluxo renal + compressão uterina dos ureteres → estase urinária</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step decision" style="clip-path:none;padding:12px 20px;border-radius:12px;background:#fffbeb;">Glicosúria + aminoacidúria fisiológicas → meio de cultura favorável para bactérias</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step" style="border-color:var(--error);background:var(--error-light)">Colonização fácil → ITU mais comum e mais grave na gestação</div>
  </div>

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Fatores Anatômicos</h4>
    ${styledList([
      'Ureterohidronefrose fisiológica (progesterona + compressão uterina)',
      'Estase urinária nos ureteres e pelve renal',
      'Uretra feminina curta (favorece ascensão)',
      'Crescimento uterino comprime a bexiga → menor capacidade + refluxo'
    ])}`)}
    ${glassCard(`<h4>Fatores Bioquímicos</h4>
    ${styledList([
      'Glicosúria gestacional → nutrição para bactérias',
      'Aminoacidúria gestacional → favorece crescimento bacteriano',
      'pH urinário mais alcalino (alguns trimestres)',
      'Supressão imune relativa da gestação'
    ])}`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🦠','Agentes Etiológicos','#0284c7')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Agente</th><th>Frequência</th><th>Observação</th></tr></thead>
    <tbody>
      <tr><td><strong>Escherichia coli</strong></td><td class="cell-check">70-80%</td><td>Principal agente em todas as formas de ITU gestacional</td></tr>
      <tr><td>Klebsiella pneumoniae</td><td>5-10%</td><td>Gram-negativo, pode ser MDR</td></tr>
      <tr><td>Streptococcus agalactiae (GBS)</td><td>5-10%</td><td>Importância especial: GBS na urinocultura = colonização → profilaxia intraparto</td></tr>
      <tr><td>Staphylococcus saprophyticus</td><td>5%</td><td>Mais comum em mulheres jovens sexualmente ativas</td></tr>
      <tr><td>Proteus mirabilis</td><td>2-5%</td><td>Associado a cálculos renais</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('info','Streptococcus agalactiae (GBS) na Urinocultura','Se a urinocultura de rastreio detectar GBS em qualquer contagem (mesmo < 100.000 UFC/mL), isso é evidência de colonização maciça e indica profilaxia intraparto com penicilina. Tratar o episódio atual + marcar para profilaxia no parto.','🦠')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🚨','Por que Tratar Bacteriúria Assintomática na Gestação?','#0284c7')}
  ${alertBox('atencao','Regra Fundamental — Diferente da Não-Gestante','Fora da gestação, a bacteriúria assintomática NÃO é tratada (exceto antes de procedimentos urológicos e em imunodeprimidos). NA GESTAÇÃO, a bacteriúria assintomática SEMPRE É TRATADA — porque em 30-40% dos casos evolui para pielonefrite aguda, que é muito mais grave na gestante.','⚠️')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Situação</th><th>Fora da Gestação</th><th>NA GESTAÇÃO</th></tr></thead>
    <tbody>
      <tr><td>Bacteriúria assintomática</td><td class="cell-check">NÃO tratar (regra geral)</td><td class="cell-cross">SEMPRE TRATAR</td></tr>
      <tr><td>Cistite (ITU baixa)</td><td>Tratar</td><td>Tratar (com antibiótico seguro)</td></tr>
      <tr><td>Pielonefrite</td><td>Tratar</td><td>Tratar + INTERNAR</td></tr>
      <tr><td>Rastreio</td><td>Não indicado de rotina</td><td class="cell-cross">UROCULTURA OBRIGATÓRIA no 1º trim</td></tr>
    </tbody>
  </table>
  </div>

  ${bodyText('<strong>Consequências da bacteriúria assintomática não tratada na gestação:</strong>')}
  ${styledList([
    '30-40% progridem para pielonefrite',
    'Pielonefrite → parto prematuro, CIUR, sepse materna',
    'Risco de sepse urinária e choque séptico (mais grave na gestante)',
    'Associação com pré-eclâmpsia e anemia'
  ])}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'O mecanismo mais importante pelo qual a gestação aumenta o risco de infecção urinária é:',
      options: [
        'Imunodepressão sistêmica grave que impede o combate bacteriano',
        'Dilatação ureteral por progesterona + compressão uterina = estase urinária + condições favoráveis ao crescimento bacteriano',
        'Uso obrigatório de cateter vesical durante o pré-natal',
        'Alteração do pH urinário para alcalino que favorece crescimento de E. coli',
        'Deficiência de IgA secretória no trato urinário gestacional'
      ],
      correct: 1,
      explanation: 'A progesterona relaxa a musculatura lisa dos ureteres → dilatação. O útero crescente comprime os ureteres → estase urinária. Associado à glicosúria gestacional (meio rico em nutrientes para bactérias), esse conjunto cria condições ideais para colonização e ascensão bacteriana. Por isso a ITU é mais frequente e mais grave na gestante.',
      tip: 'Progesterona + compressão uterina = estase = ITU. Simples, mas cobrado frequentemente.'
    },
    {
      stem: 'Uma gestante de 12 semanas realiza urinocultura de rastreio e o resultado é: E. coli 150.000 UFC/mL, sem sintomas urinários. Qual a conduta?',
      options: [
        'Não tratar — bacteriúria assintomática não requer tratamento',
        'Tratar com antibiótico oral por 7 dias — bacteriúria assintomática na gestante sempre deve ser tratada',
        'Repetir a urinocultura em 1 semana antes de decidir',
        'Iniciar antibiótico IV — qualquer ITU na gestação requer internação',
        'Aguardar sintomas antes de tratar'
      ],
      correct: 1,
      explanation: 'Bacteriúria assintomática na gestação SEMPRE deve ser tratada (diferente da não gestante). ≥ 100.000 UFC/mL de um único agente = bacteriúria significativa. Tratamento: antibiótico oral por 7 dias (nitrofurantoína, cefalexina ou amoxicilina-clavulanato, conforme sensibilidade). Controle de cura: urinocultura 7 dias após o término do tratamento.',
      tip: 'Bacteriúria assintomática: não gestante = não tratar; gestante = SEMPRE TRATAR. Essa diferença é cobrada em todas as provas.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 33 — ITU: CLASSIFICAÇÃO E TRATAMENTO
   =================================================== */
GO_RENDER['itu-classif'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('📋 ITU — Página 2','ITU: Classificação, Diagnóstico e Tratamento','Bacteriúria assintomática → cistite → pielonefrite: uma progressão que deve ser interrompida. Antibióticos seguros na gestação. Critérios de internação.',GRAD_MAP.itu)}

  <div class="anim-fade-up">
  ${sectionHeader('📊','Classificação das ITUs na Gestação','#0284c7')}
  <div class="grid-2 mb-24">
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--color-itu);margin-bottom:14px">🦠 ITU BAIXA</h4>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="padding:12px;border-radius:8px;background:var(--color-itu-light);border-left:3px solid var(--color-itu)">
          <strong>Bacteriúria Assintomática (BA)</strong><br>
          <span style="font-size:var(--text-xs);color:var(--text-muted)">≥ 100.000 UFC/mL na urinocultura, SEM SINTOMAS. Tratar com antibiótico VO por 7 dias.</span>
        </div>
        <div style="padding:12px;border-radius:8px;background:var(--color-itu-light);border-left:3px solid var(--color-itu)">
          <strong>Cistite (ITU baixa sintomática)</strong><br>
          <span style="font-size:var(--text-xs);color:var(--text-muted)">Disúria, polaciúria, urgência, dor suprapúbica. Sem febre/calafrios. ≥ 10.000 UFC/mL + sintomas. Tratar VO por 7 dias.</span>
        </div>
      </div>
    </div>
    <div class="glass-card" style="padding:20px">
      <h4 style="color:var(--color-cardio);margin-bottom:14px">🔥 ITU ALTA — PIELONEFRITE</h4>
      <div style="padding:12px;border-radius:8px;background:var(--error-light);border-left:3px solid var(--error)">
        <strong>Pielonefrite Aguda</strong><br>
        <span style="font-size:var(--text-xs);color:var(--text-muted)">Febre (&gt; 38°C) + calafrios + dor lombar + sintomas urinários (ou não). <strong>INTERNAR obrigatoriamente.</strong> Antibiótico IV até 48h afebril, depois VO.</span>
      </div>
      <div style="margin-top:10px;padding:10px;border-radius:8px;background:var(--error-light)">
        <strong>Por que internar?</strong> Risco de: sepse, choque séptico, síndrome do desconforto respiratório agudo (SDRA), parto prematuro, aborto.
      </div>
    </div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('💊','Antibióticos Seguros na Gestação','#0284c7')}

  <div class="med-group">
    <div class="med-group-title" style="color:var(--success)">✅ PODEM SER USADOS</div>
    ${medCard('can','💊','Nitrofurantoína','Excelente para cistite e bacteriúria. ATENÇÃO: contraindicada no 1º trimestre (risco de defeitos congênitos) e na proximidade do parto (> 36 semanas — risco de hemólise neonatal). Use no 2º trimestre e início do 3º.')}
    ${medCard('can','💊','Cefalexina (cefalosporina 1ª geração)','Segura em qualquer trimestre. Excelente para E. coli. Boa cobertura para gram-positivos. Primeira escolha em muitos serviços.')}
    ${medCard('can','💊','Amoxicilina-clavulanato','Segura. Boa cobertura. Útil quando há resistência à amoxicilina simples.')}
    ${medCard('can','💊','Cefalosporinas IV (Ceftriaxona, Cefazolina)','Para pielonefrite (internação). Ceftriaxona IV é opção de primeira linha na pielonefrite gestacional.')}
    ${medCard('can','💊','Ampicilina-sulbactam IV','Pielonefrite. Cobertura de gram-negativos e alguns enterococos.')}
  </div>

  <div class="med-group">
    <div class="med-group-title" style="color:var(--error)">❌ EVITAR / CONTRAINDICADOS</div>
    ${medCard('no','💊','Quinolonas (Ciprofloxacino, Norfloxacino)','CONTRAINDICADAS. Artropatia cartilaginosa fetal. Toxicidade ao desenvolvimento fetal. Substituir por cefalosporina ou amoxicilina-clavulanato.')}
    ${medCard('no','💊','Sulfonamidas (Sulfametoxazol-Trimetoprima)','Evitar no 1º trimestre (antagonismo folato → defeitos tubo neural) e no 3º trimestre (kernicterus neonatal). Pode ser usado no 2º trimestre com cautela.')}
    ${medCard('no','💊','Tetraciclinas','CONTRAINDICADAS. Depósito ósseo e dentário fetal. Hepatotoxicidade materna.')}
    ${medCard('no','💊','Aminoglicosídeos (Gentamicina, Amicacina)','Evitar. Ototoxicidade e nefrotoxicidade fetal. Usar apenas em situações de sepse grave sem alternativa, com monitorização.')}
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🔧','Simulador: Conduta na ITU Gestacional','#0284c7')}
  <div class="simulator-card">
    <h4>🔧 Defina a conduta por cenário</h4>
    <label class="sim-label">Cenário:</label>
    <select class="sim-select" id="itu-cenario">
      <option value="">-- Selecione --</option>
      <option value="ba">Bacteriúria assintomática (100.000 UFC/mL, sem sintomas)</option>
      <option value="cistite">Cistite (disúria, polaciúria, sem febre)</option>
      <option value="pielonefrite">Pielonefrite (febre 39°C, calafrios, dor lombar)</option>
      <option value="gbs">GBS na urinocultura (qualquer contagem)</option>
      <option value="recorrente">2ª infecção no mesmo trimestre</option>
    </select>
    <button class="sim-btn" onclick="calcITU()">📋 Ver Conduta</button>
    <div class="sim-result neutral mt-16" id="itu-result">Selecione o cenário.</div>
  </div>

  ${sectionHeader('📋','Diagnóstico Laboratorial','#0284c7')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Exame</th><th>Achado</th><th>Interpretação</th></tr></thead>
    <tbody>
      <tr><td>Sumário de urina (EAS)</td><td>Leucocitúria (piúria), bacteriúria, nitritos</td><td>Triagem — sensibilidade 70-80%. Confirmar com cultura.</td></tr>
      <tr><td>Urinocultura</td><td>≥ 100.000 UFC/mL (BA e cistite); ≥ 10.000 UFC/mL (cistite sintomática)</td><td>Diagnóstico definitivo. Antibiograma orienta tratamento.</td></tr>
      <tr><td>Hemograma + PCR</td><td>Leucocitose, desvio à esquerda, PCR elevado</td><td>Pielonefrite — avaliar gravidade, sepse.</td></tr>
      <tr><td>Hemocultura</td><td>Pode ser positiva na pielonefrite</td><td>Solicitar se febre alta + calafrios + toxemia.</td></tr>
      <tr><td>Função renal (Cr, ureia)</td><td>Pode elevar na pielonefrite grave</td><td>Lesão renal aguda — pior prognóstico.</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 24 semanas com febre 38,9°C, calafrios, dor lombar à direita e disúria. Urinocultura prévia: positiva (E. coli 200.000 UFC/mL). Qual a conduta imediata?',
      options: [
        'Iniciar nitrofurantoína oral e reavaliação em 48h em ambulatório',
        'Colher urinocultura e aguardar resultado antes de iniciar antibiótico',
        'Internar, coletar hemocultura, iniciar ceftriaxona IV e monitorar vitalidade fetal',
        'Iniciar ciprofloxacino oral — mais eficaz para E. coli',
        'Aguardar resolução espontânea — febre <39°C não requer internação'
      ],
      correct: 2,
      explanation: 'Pielonefrite aguda (febre + dor lombar + sintomas urinários) na gestante = INTERNAÇÃO OBRIGATÓRIA. Conduta: internação, hemograma, hemocultura, urinocultura, função renal, ceftriaxona IV (1-2g/dia). Antibiótico IV até 48h afebril, depois escalonar para VO. Monitorar vitalidade fetal (pielonefrite → parto prematuro).',
      tip: 'Pielonefrite na gestante = SEMPRE internar. Febre + dor lombar = ITU alta. Não tratar em ambulatório.'
    },
    {
      stem: 'Qual antibiótico é CONTRAINDICADO para tratamento de ITU em qualquer trimestre da gestação?',
      options: [
        'Cefalexina', 'Amoxicilina-clavulanato', 'Ceftriaxona',
        'Ciprofloxacino', 'Nitrofurantoína (2º trimestre)'
      ],
      correct: 3,
      explanation: 'Quinolonas (ciprofloxacino, norfloxacino, levofloxacino) são contraindicadas em qualquer trimestre da gestação. Causam artropatia cartilaginosa fetal — ligam-se ao DNA girase da cartilagem fetal em crescimento. As cefalosporinas, amoxicilina-clavulanato e ceftriaxona são seguras. Nitrofurantoína é segura no 2º trimestre (evitar no 1º e após 36 semanas).',
      tip: 'Quinolona = PROIBIDA na gestação em qualquer trimestre. Alternativa: cefalexina, ceftriaxona, amoxicilina-clavulanato.'
    }
  ]);
  GO_NAV(el, page);
};

window.calcITU = function() {
  const c = document.getElementById('itu-cenario')?.value;
  const r = document.getElementById('itu-result');
  if (!r || !c) return;
  const m = {
    'ba': { cls:'warn', msg: '<strong>Bacteriúria Assintomática na Gestação = TRATAR</strong><br>Antibiótico oral por 7 dias conforme antibiograma. Opções: cefalexina, amoxicilina-clavulanato, nitrofurantoína (evitar 1º trim e >36 sem). Controle de cura: urinocultura 7-14 dias após término.' },
    'cistite': { cls:'warn', msg: '<strong>Cistite na Gestação = TRATAR</strong><br>Antibiótico oral por 7 dias. Mesmas opções da BA. NÃO usar quinolonas. Aliviar sintomas: aumentar ingestão hídrica. Urinocultura de controle após tratamento.' },
    'pielonefrite': { cls:'danger', msg: '<strong>Pielonefrite = INTERNAR OBRIGATORIAMENTE</strong><br>1) Hemocultura + urinocultura antes do ATB. 2) Ceftriaxona IV 1-2g/dia (ou ampicilina-sulbactam). 3) Hidratação IV. 4) Antitérmico (paracetamol). 5) Antibiótico IV até 48h afebril → escalonar para VO. 6) Monitorar vitalidade fetal. Duração total: 10-14 dias.' },
    'gbs': { cls:'warn', msg: '<strong>GBS na urinocultura = tratar + marcar profilaxia intraparto</strong><br>Tratar o episódio atual: amoxicilina ou cefalexina por 7 dias. ANOTAR na carteirinha: profilaxia intraparto com penicilina G obrigatória. GBS na urinocultura = colonização maciça = indicação automática de profilaxia no parto.' },
    'recorrente': { cls:'danger', msg: '<strong>2ª ITU no mesmo trimestre = Profilaxia antimicrobiana</strong><br>Após tratar o episódio atual: nitrofurantoína 50-100 mg/dia VO (dose supressiva) até o parto + 6 semanas pós-parto. Investigar fator predisponente (cálculo, anomalia anatômica). Urinocultura mensal de controle.' },
  };
  const v = m[c]; if (v) { r.className=`sim-result ${v.cls}`; r.innerHTML=v.msg; }
};

/* ===================================================
   PÁGINA 34 — ITU: PROFILAXIA
   =================================================== */
GO_RENDER['itu-profi'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🛡️ ITU — Página 3','ITU: Profilaxia, GBS e Resumo','Quando indicar profilaxia antimicrobiana? O que fazer com o GBS na urinocultura? Como conduzir a ITU de repetição na gestação?',GRAD_MAP.itu)}

  <div class="anim-fade-up">
  ${sectionHeader('🛡️','Quando Indicar Profilaxia','#0284c7')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Indicação</th><th>Esquema</th><th>Duração</th></tr></thead>
    <tbody>
      <tr><td>ITU recorrente (≥2 episódios na gestação)</td><td>Nitrofurantoína 50-100 mg/dia VO (dose supressiva)</td><td>Até o parto + 4-6 semanas pós-parto</td></tr>
      <tr><td>Bacteriúria assintomática recorrente após tratamento</td><td>Cefalexina 500 mg/dia VO ou nitrofurantoína 50 mg/dia</td><td>Restante da gestação</td></tr>
      <tr><td>Pielonefrite após tratamento hospitalar</td><td>Nitrofurantoína 100 mg/dia (supressão)</td><td>Até o parto</td></tr>
    </tbody>
  </table>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🦠','Streptococcus agalactiae (GBS) — Rastreio e Profilaxia Intraparto','#0284c7')}
  ${alertBox('atencao','GBS é a maior causa de sepse neonatal precoce','O GBS (estreptococo do grupo B) é a principal causa de sepse bacteriana grave e meningite no recém-nascido nas primeiras 72h de vida. A profilaxia intraparto reduz em 80% o risco de doença neonatal precoce.','⚠️')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Rastreio do GBS</h4>
    ${styledList([
      '<strong>Universal:</strong> cultura reto-vaginal entre 35-37 semanas',
      'Swab vaginal + retal (dois swabs ou um swab vaginal/retal)',
      'Resultado positivo → profilaxia intraparto obrigatória',
      '<strong>Alternativa:</strong> teste de PCR rápido intraparto (se cultura não disponível)'
    ])}`)}
    ${glassCard(`<h4>Indicações de Profilaxia Intraparto (SEM necessidade de cultura prévia)</h4>
    ${styledList([
      'GBS na urinocultura de qualquer trimestre',
      'Filho anterior com doença invasiva por GBS',
      'GBS desconhecido + febre intraparto',
      'GBS desconhecido + trabalho de parto prematuro < 37 semanas',
      'GBS desconhecido + ruptura de membranas ≥ 18h'
    ])}`)}
  </div>

  <div class="med-group">
    <div class="med-group-title" style="color:var(--success)">Profilaxia Intraparto do GBS</div>
    ${medCard('can','💊','Penicilina G cristalina IV','DROGA DE ESCOLHA. 5 milhões UI IV no início, depois 2,5-3 milhões UI a cada 4h até o parto. Altamente eficaz. Estreito espectro (minimiza resistência). Iniciar no mínimo 4h antes do parto para eficácia.')}
    ${medCard('can','💊','Ampicilina IV (alternativa)','Se penicilina G não disponível. 2g IV inicial, depois 1g IV a cada 4h até o parto.')}
    ${medCard('no','💊','Clindamicina ou Eritromicina','Somente se alergia grave à penicilina E sensibilidade confirmada no antibiograma. Resistência ao GBS crescente.')}
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('📋','Resumo de Alto Rendimento — ITU na Gestação','#0284c7')}
  <ol class="resumo-list">
    ${resumoItem(1,'#0284c7','<strong>Por que ITU é mais comum:</strong> progesterona → dilatação ureteral → estase. Glicosúria → meio favorável. E. coli responde por 70-80%.')}
    ${resumoItem(2,'#0284c7','<strong>Bacteriúria assintomática:</strong> SEMPRE TRATAR na gestação. Rastreio universal com urinocultura no 1º trimestre. 30-40% progridem para pielonefrite se não tratada.')}
    ${resumoItem(3,'#0284c7','<strong>Cistite:</strong> tratar ambulatorialmente, antibiótico oral 7 dias. Cefalexina ou amoxicilina-clavulanato ou nitrofurantoína (2º trim).')}
    ${resumoItem(4,'#0284c7','<strong>Pielonefrite:</strong> INTERNAÇÃO OBRIGATÓRIA. Ceftriaxona IV. Manter IV até 48h afebril. Risco de sepse, parto prematuro, SDRA.')}
    ${resumoItem(5,'#0284c7','<strong>Antibióticos proibidos:</strong> quinolonas (qualquer trimestre). Nitrofurantoína: evitar 1º trim e >36 sem. Sulfonamidas: evitar 1º e 3º trim. Tetraciclinas: contraindicadas.')}
    ${resumoItem(6,'#0284c7','<strong>GBS na urinocultura:</strong> tratar + profilaxia intraparto. Penicilina G IV é droga de escolha intraparto.')}
    ${resumoItem(7,'#0284c7','<strong>ITU recorrente (≥2 episódios):</strong> profilaxia supressiva com nitrofurantoína até o parto.')}
  </ol>

  <div class="sep"></div>
  ${sectionHeader('🎯','Raciocínio de Prova — ITU','#0284c7')}
  ${provaCard('A pergunta mais fácil da banca','Gestante com 100.000 UFC/mL sem sintomas → tratar. Se não tratar: 30-40% evolui para pielonefrite.')}
  ${provaCard('A pegadinha clássica','Ciprofloxacino na gestante — NUNCA. A banca coloca como opção "eficaz" — mas é contraindicada.')}
  ${provaCard('A questão difícil','GBS na urinocultura → tratar o episódio E marcar profilaxia intraparto. Não basta só tratar.')}
  ${provaCard('Pielonefrite x cistite: como distinguir?','Cistite: sem febre, apenas sintomas locais. Pielonefrite: febre + calafrios + dor lombar. Pielonefrite = INTERNAR.')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 36 semanas tem cultura reto-vaginal positiva para Streptococcus agalactiae (GBS). Não há contraindicação a penicilina. Qual a conduta no momento do trabalho de parto?',
      options: [
        'Não é necessária nenhuma intervenção — GBS na gestação não requer profilaxia',
        'Penicilina G cristalina IV 5 mi UI dose de ataque, depois 2,5-3 mi UI a cada 4h até o parto',
        'Clindamicina oral 600 mg dose única na admissão',
        'Ciprofloxacino oral 500 mg 2× ao dia durante o trabalho de parto',
        'Cesárea eletiva para evitar transmissão do GBS ao neonato'
      ],
      correct: 1,
      explanation: 'GBS positivo na cultura reto-vaginal = profilaxia intraparto obrigatória com Penicilina G cristalina IV (droga de escolha). Dose: 5 milhões UI IV no início, depois 2,5-3 milhões UI a cada 4h até o parto. Iniciar pelo menos 4h antes do parto para máxima eficácia. A cesárea NÃO elimina o risco de transmissão do GBS.',
      tip: 'GBS + trabalho de parto = Penicilina G IV. Não usar cefalosporina oral como profilaxia intraparto.'
    },
    {
      stem: 'Gestante de 28 semanas é internada com pielonefrite (febre 39,5°C, calafrios, dor lombar). Após 72h de ceftriaxona IV e defervescência, qual a conduta para o restante da gestação?',
      options: [
        'Alta sem prescrição — a pielonefrite está curada após o tratamento hospitalar',
        'Alta com antibiótico oral por 10-14 dias + profilaxia supressiva com nitrofurantoína até o parto',
        'Manter internação até o parto por risco de recidiva',
        'Alta com cefalexina por 3 dias — duração suficiente para pielonefrite',
        'Repetir hemocultura e aguardar resultado antes de alta'
      ],
      correct: 1,
      explanation: 'Após melhora clínica e 48h afebril, pode ter alta com antibiótico oral para completar 10-14 dias de tratamento total. Após episódio de pielonefrite, recomenda-se profilaxia supressiva (nitrofurantoína 50-100 mg/dia VO) até o parto para prevenir recidiva, que é frequente e grave. Urinocultura de controle após alta.',
      tip: 'Pielonefrite: IV até 48h afebril → VO para completar 10-14 dias → profilaxia supressiva até o parto.'
    }
  ]);
  GO_NAV(el, page);
};
