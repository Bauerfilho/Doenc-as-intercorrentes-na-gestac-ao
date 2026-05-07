/* =========================================
   GO PREMIUM — BLOCO HEPATO
   Hepatite B/C, Esteatose, Colestase
   ========================================= */

/* ===================================================
   PÁGINA 27 — HEPATITE B NA GESTAÇÃO
   =================================================== */
GO_RENDER['hep-b'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🟡 Hepato — Bloco 4 / Página 1','Hepatite B na Gestação: Transmissão Vertical e Profilaxia','A transmissão vertical do HBV é alta (70-90% se HBeAg+ sem profilaxia). Mas com imunoprofilaxia (vacina + imunoglobulina) no RN, o risco cai para <5%. A triagem universal é obrigatória no pré-natal.',GRAD_MAP.hepato)}

  <div class="anim-fade-up">
  ${sectionHeader('🔬','Rastreio e Triagem','#d97706')}
  ${alertBox('success','HBsAg é exame obrigatório no pré-natal','O Ministério da Saúde recomenda solicitação de HBsAg no 1º trimestre e repetição no 3º trimestre para todas as gestantes, independentemente de vacinação prévia. Triagem universal, não seletiva.','✅')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Interpretação dos Marcadores do HBV</h4>
    <div class="table-wrap" style="margin-top:8px">
    <table class="premium-table">
      <thead><tr><th>HBsAg</th><th>Anti-HBs</th><th>Anti-HBc</th><th>Significado</th></tr></thead>
      <tbody>
        <tr><td class="cell-cross">+</td><td>-</td><td>+</td><td>Infecção ativa (aguda ou crônica)</td></tr>
        <tr><td>-</td><td class="cell-check">+</td><td>-</td><td>Vacinada com resposta</td></tr>
        <tr><td>-</td><td class="cell-check">+</td><td>+</td><td>Infecção resolvida (imunidade natural)</td></tr>
        <tr><td>-</td><td>-</td><td>-</td><td>Suscetível — vacinar!</td></tr>
        <tr><td class="cell-cross">+</td><td>-</td><td>+</td><td>HBeAg define infectividade</td></tr>
      </tbody>
    </table>
    </div>`)}
    ${glassCard(`<h4>HBeAg — O Marcador de Infectividade</h4>
    <p style="font-size:var(--text-xs);margin-top:8px;line-height:1.6">O HBeAg indica replicação viral ativa e alta infectividade:</p>
    ${styledList([
      '<strong>HBeAg positivo:</strong> risco de transmissão vertical de 70-90%',
      '<strong>HBeAg negativo:</strong> risco de transmissão vertical de 10-20%',
      'DNA-HBV quantitativo: melhor marcador de carga viral e risco de transmissão'
    ])}`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🛡️','Profilaxia da Transmissão Vertical','#d97706')}
  ${alertBox('success','Imunoprofilaxia — Reduz Transmissão para < 5%','A combinação de vacina HBV + imunoglobulina anti-HBV (IGHAHB) no RN de mãe HBsAg positivo é altamente eficaz. Deve ser feita nas primeiras 12 horas de vida (idealmente nas primeiras horas).','🛡️')}

  <div class="grid-2 mb-24">
    ${infoCard('primary','Conduta no RN de Mãe HBsAg+',`
    <ol>
      <li><strong>Imunoglobulina Anti-Hepatite B (IGHAHB)</strong> — 0,5 mL IM nas primeiras 12h</li>
      <li><strong>Vacina HBV</strong> — 1ª dose nas primeiras 12h (sítio diferente da IGHAHB)</li>
      <li>Completar esquema vacinal: 2ª dose 1-2 meses, 3ª dose aos 6 meses</li>
      <li>Sorologia (HBsAg + Anti-HBs) com 9-12 meses para confirmar imunidade</li>
    </ol>`)}
    ${infoCard('warning','Carga Viral Materna Alta (HBV-DNA > 200.000 UI/mL)',`
    <ul>
      <li>Mesmo com imunoprofilaxia, risco de falha aumenta</li>
      <li>Indicar antiviral materno no 3º trimestre</li>
      <li><strong>Tenofovir (TDF)</strong> — droga de escolha; seguro na gestação</li>
      <li>Iniciar entre 28-32 semanas; suspender pós-parto</li>
    </ul>`)}
  </div>

  ${sectionHeader('🤱','Amamentação na Hepatite B','#d97706')}
  ${alertBox('success','Amamentação PERMITIDA com Imunoprofilaxia Completa','Se o RN recebeu IGHAHB + vacina dentro de 12 horas do nascimento, a amamentação é SEGURA e deve ser estimulada. O HBV não está presente no leite materno em quantidade suficiente para causar infecção se o RN está adequadamente imunizado.','✅')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('💊','Tratamento Materno','#d97706')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Quando tratar a mãe?</h4>
    ${styledList([
      'HBV-DNA > 200.000 UI/mL (independentemente de sintomas)',
      'Hepatite B ativa com elevação significativa de transaminases',
      'Objetivo: reduzir carga viral materna e risco de transmissão'
    ])}`)}
    ${glassCard(`<h4>Antivirais seguros na gestação</h4>
    ${styledList([
      '<strong>Tenofovir (TDF) — droga de escolha.</strong> Seguro, eficaz, baixo risco de resistência.',
      'Iniciar entre 28-32 semanas se indicado',
      'Lamivudina: alternativa menos utilizada (maior resistência)',
      'Interferon-alfa: CONTRAINDICADO na gestação (efeito abortivo)'
    ])}`)}
  </div>

  ${provaCard('O que a banca pergunta sobre HBV na gestação?','Imunoprofilaxia no RN (IGHAHB + vacina < 12h). HBeAg = alta infectividade. Tenofovir se carga viral alta. Amamentação permitida após imunoprofilaxia completa. HBsAg é triagem universal obrigatória.')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 36 semanas com HBsAg positivo, HBeAg positivo e HBV-DNA de 350.000 UI/mL. Qual a conduta adicional além da imunoprofilaxia do RN?',
      options: [
        'Nenhuma conduta adicional — a imunoprofilaxia do RN é suficiente',
        'Cesariana eletiva para reduzir o risco de transmissão vertical',
        'Iniciar tenofovir na mãe agora para reduzir carga viral e o risco de falha da imunoprofilaxia',
        'Iniciar interferon-alfa para erradicação viral materna',
        'Suspender a amamentação definitivamente — HBeAg+ contraindica aleitamento'
      ],
      correct: 2,
      explanation: 'HBV-DNA > 200.000 UI/mL indica carga viral alta, o que aumenta o risco de falha da imunoprofilaxia mesmo com IGHAHB + vacina. A conduta é iniciar tenofovir (antiviral seguro na gestação) entre 28-32 semanas para reduzir a carga viral antes do parto. Interferon é contraindicado. A cesárea não reduz o risco de transmissão se a imunoprofilaxia for adequada.',
      tip: 'HBV-DNA > 200.000 = tenofovir materno no 3º trimestre. HBV-DNA < 200.000 = imunoprofilaxia do RN é suficiente.'
    },
    {
      stem: 'Recém-nascido de mãe HBsAg positivo. Qual a conduta obrigatória nas primeiras 12 horas de vida?',
      options: [
        'Apenas a 1ª dose da vacina HBV — a imunoglobulina não é necessária se a mãe está em tratamento',
        'Imunoglobulina anti-hepatite B (IGHAHB) + 1ª dose da vacina HBV nos primeiros 12h',
        'Colher HBsAg do RN e aguardar resultado antes de qualquer intervenção',
        'Apenas isolamento do RN e coleta de sorologias maternas',
        'Observação — profilaxia só é necessária se o RN apresentar sintomas'
      ],
      correct: 1,
      explanation: 'Imunoprofilaxia padrão do RN de mãe HBsAg+: IGHAHB 0,5 mL IM + vacina HBV 1ª dose, ambas nas primeiras 12 horas de vida, em sítios anatômicos diferentes. Essa dupla profilaxia reduz o risco de transmissão de 70-90% para < 5%.',
      tip: 'IGHAHB + Vacina dentro de 12h = dupla proteção. Não esperar resultado de exames para iniciar.'
    },
    {
      stem: 'Mãe com HBsAg positivo e RN que recebeu IGHAHB e vacina HBV dentro de 12 horas do nascimento. Em relação à amamentação, a conduta correta é:',
      options: [
        'Contraindicar o aleitamento materno — HBV pode ser transmitido pelo leite',
        'Permitir o aleitamento materno — com imunoprofilaxia completa, a amamentação é segura',
        'Permitir apenas o leite pasteurizado (pasteurização elimina o HBV)',
        'Aguardar resultado da HBV-DNA do leite materno antes de autorizar a amamentação',
        'Contraindicar se HBeAg for positivo'
      ],
      correct: 1,
      explanation: 'Com imunoprofilaxia completa (IGHAHB + vacina) nas primeiras 12h, o aleitamento materno é SEGURO e RECOMENDADO. O RN está imunizado. A concentração de HBV no leite materno é insuficiente para causar infecção em RN imunizado. Não há necessidade de pasteurização ou interrupção do aleitamento.',
      tip: 'HBV + amamentação: proibida SEM profilaxia; PERMITIDA COM profilaxia completa.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 28 — HEPATITE C NA GESTAÇÃO
   =================================================== */
GO_RENDER['hep-c'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🟠 Hepato — Página 2','Hepatite C na Gestação: Transmissão Vertical e Conduta','HCV: transmissão vertical de apenas 5%. Sem profilaxia disponível. Sem tratamento na gestação. Diagnóstico e encaminhamento.  O que o pré-natal pode e deve fazer.',GRAD_MAP.hepato)}

  <div class="anim-fade-up">
  ${sectionHeader('🔬','Triagem e Diagnóstico','#d97706')}
  ${alertBox('info','Anti-HCV no pré-natal','A pesquisa de Anti-HCV é recomendada no pré-natal. Se positivo: solicitar HCV-RNA quantitativo (confirma infecção ativa — anti-HCV positivo pode ser residual de infecção curada). HCV-RNA detectável = infecção ativa.','🔬')}

  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Triagem: Anti-HCV</h4>
    ${styledList([
      'Anticorpo contra o HCV',
      'Rastreamento inicial',
      'Positivo = pode ser infecção ativa OU passada (curada)',
      'Confirmar com HCV-RNA se Anti-HCV positivo'
    ])}`)}
    ${glassCard(`<h4>Confirmação: HCV-RNA</h4>
    ${styledList([
      'RNA viral — detecta infecção ativa',
      'Quantitativo: carga viral',
      'Se HCV-RNA indetectável + Anti-HCV positivo: infecção resolvida',
      'Se HCV-RNA detectável: infecção crônica ativa → encaminhar para gastroenterologista'
    ])}`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('👶','Transmissão Vertical do HCV','#d97706')}
  ${bodyText('A transmissão vertical do HCV ocorre em <strong>~5% das gestações</strong> de mães virêmicas. É significativamente menor que a do HBV (70-90% se HBeAg+). Alguns fatores aumentam o risco:')}

  <div class="grid-2 mb-24">
    ${infoCard('warning','Fatores que Aumentam Transmissão Vertical',`
    <ul>
      <li>Coinfecção com HIV (risco sobe para 15-20%)</li>
      <li>Carga viral materna elevada (HCV-RNA alto)</li>
      <li>Ruptura prolongada de membranas (>6h)</li>
      <li>Procedimentos invasivos (amniocentese, monitorização interna fetal)</li>
    </ul>`)}
    ${infoCard('primary','Diferenças Críticas HBV vs HCV',`
    <table style="width:100%;font-size:var(--text-xs)">
      <tr><th></th><th>HBV</th><th>HCV</th></tr>
      <tr><td>Transmissão vertical</td><td>70-90% (HBeAg+)</td><td>~5%</td></tr>
      <tr><td>Profilaxia RN</td><td>✅ IGHAHB + Vacina</td><td>❌ Não existe</td></tr>
      <tr><td>Tratamento gestação</td><td>✅ Tenofovir</td><td>❌ Contraindicado</td></tr>
      <tr><td>Amamentação</td><td>✅ Com profilaxia</td><td>✅ Permitida</td></tr>
    </table>`)}
  </div>

  ${alertBox('atencao','NÃO HÁ PROFILAXIA PARA HCV NO RN','Diferentemente do HBV, não existe imunoglobulina nem vacina contra o HCV. O manejo é reduzir fatores de risco durante o parto. Não há tratamento seguro comprovado durante a gestação (os antivirais de ação direta — DAA — são contraindicados).','⚠️')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🏥','Via de Parto e Amamentação no HCV','#d97706')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Via de Parto</h4>
    ${styledList([
      'Parto vaginal: NÃO é contraindicado pelo HCV',
      'Cesárea NÃO reduz o risco de transmissão vertical do HCV (diferente do HIV)',
      'Via de parto definida por critérios obstétricos',
      'Evitar: monitorização invasiva fetal, ruptura artificial precoce das membranas, episiotomia de rotina',
      'Ruptura de membranas prolongada > 6h: aumenta risco → evitar'
    ])}`)}
    ${glassCard(`<h4>Amamentação</h4>
    ${styledList([
      '<strong>PERMITIDA</strong> — HCV não é transmitido pelo leite materno',
      'Exceção: fissuras/lesões nos mamilos com sangramento (risco teórico)',
      'Não há contraindicação formal à amamentação no HCV',
      'Após o parto: encaminhar a mãe para tratamento (DAAs são altamente eficazes fora da gestação)'
    ])}`)}
  </div>

  ${sectionHeader('💊','Tratamento','#d97706')}
  ${alertBox('atencao','DAAs Contraindicados na Gestação','Os antivirais de ação direta (sofosbuvir, daclatasvir, etc.) NÃO devem ser usados durante a gestação — dados de segurança insuficientes. O tratamento é ADIADO para o pós-parto. Após o parto e desmame: DAAs têm eficácia >95% na cura do HCV.','⚠️')}

  ${provaCard('O que a banca pergunta sobre HCV?','Transmissão vertical de 5% (baixa). Sem profilaxia para o RN. DAAs contraindicados na gestação. Amamentação permitida. Cesárea não reduz transmissão. Tratar após o parto.')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 20 semanas com Anti-HCV positivo e HCV-RNA detectável (carga viral: 1.200.000 UI/mL). Qual a conduta durante a gestação?',
      options: [
        'Iniciar sofosbuvir + daclatasvir imediatamente para erradicar o vírus antes do parto',
        'Nenhum tratamento antiviral na gestação — orientar sobre transmissão vertical, controle obstétrico e tratar após o parto',
        'Indicar cesárea eletiva às 38 semanas para reduzir o risco de transmissão vertical',
        'Contraindicar a amamentação independentemente da carga viral',
        'Iniciar ribavirina para reduzir a carga viral antes do parto'
      ],
      correct: 1,
      explanation: 'Não há tratamento antiviral seguro para HCV durante a gestação — DAAs são contraindicados. A conduta é: acompanhamento pré-natal, orientação sobre transmissão vertical (~5%), evitar fatores de risco intraparto (ruptura prolongada, monitorização invasiva) e tratar com DAAs após o parto (eficácia >95%). A cesárea não reduz transmissão do HCV.',
      tip: 'HCV na gestação = observar, orientar e tratar no pós-parto. Diferente do HIV onde cesárea reduz transmissão.'
    },
    {
      stem: 'Qual a principal diferença entre Hepatite B e Hepatite C em relação ao manejo na gestação?',
      options: [
        'O HCV tem vacina eficaz para o RN; o HBV não tem',
        'O HBV tem profilaxia eficaz para o RN (vacina + IGHAHB) e tratamento antiviral materno disponível; o HCV não tem profilaxia para o RN nem tratamento seguro na gestação',
        'A amamentação é proibida no HCV e permitida no HBV',
        'A cesárea reduz a transmissão do HBV mas não do HCV',
        'O HCV tem transmissão vertical maior (70-90%) que o HBV (5%)'
      ],
      correct: 1,
      explanation: 'HBV: transmissão vertical 70-90% (HBeAg+) → profilaxia eficaz (IGHAHB + vacina < 12h) + tenofovir se carga viral alta. HCV: transmissão vertical ~5% → sem profilaxia para o RN + DAAs contraindicados na gestação. Amamentação: permitida em ambos (HBV com imunoprofilaxia; HCV sem restrição formal). Cesárea: não reduz transmissão de nenhum dos dois (HBV ou HCV).',
      tip: 'HBV: tem profilaxia, tem tratamento, transmissão alta. HCV: sem profilaxia, sem tratamento gestacional, transmissão baixa. Inversão clássica de prova.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 29 — ESTEATOSE AGUDA DA GESTAÇÃO
   =================================================== */
GO_RENDER['esteatose'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🫀 Hepato — Página 3','Esteatose Hepática Aguda da Gestação: A Hipoglicemia que Mata','A EAG é rara mas letal. Falência hepática fulminante no 3º trimestre. A hipoglicemia é o achado mais específico. O tratamento é a INTERRUPÇÃO IMEDIATA da gestação.',GRAD_MAP.hepato)}

  <div class="anim-fade-up">
  ${sectionHeader('📋','O que é a EAG?','#d97706')}
  ${bodyText('A Esteatose Hepática Aguda da Gestação (EAG) é uma doença rara (1:10.000-15.000 gestações) que ocorre quase exclusivamente no <strong>3º trimestre</strong>. É causada por depósito de gordura nos hepatócitos (esteatose microvesicular), com comprometimento da função hepática podendo evoluir para falência hepática fulminante e morte materno-fetal.')}

  ${alertBox('danger','EAG é Emergência Obstétrica','A EAG tem mortalidade materna histórica de 70-80% (hoje reduzida para 10-15% com diagnóstico precoce e interrupção imediata). Qualquer suspeita = interrupção da gestação sem demora.','🚨')}

  <div class="grid-2 mb-24">
    ${infoCard('primary','Perfil da Paciente com EAG',`
    <ul>
      <li>3º trimestre (geralmente 30-38 semanas)</li>
      <li>Primíparas (mais frequente)</li>
      <li>Gestação gemelar</li>
      <li>Feto masculino</li>
      <li>Mutação do LCHAD fetal (deficiência de oxidação de ácidos graxos de cadeia longa)</li>
    </ul>`)}
    ${infoCard('warning','Sintomas — Sequência Típica',`
    <ol>
      <li>Náuseas e vômitos (1-2 semanas)</li>
      <li>Dor epigástrica / hipocôndrio direito</li>
      <li>Icterícia (sinal de alerta)</li>
      <li>Encefalopatia hepática (confusão, sonolência)</li>
      <li>Falência hepática + coagulopatia + CIVD</li>
      <li><strong>Hipoglicemia — achado mais específico!</strong></li>
    </ol>`)}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔬','Laboratório — Perfil Diagnóstico','#d97706')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Exame</th><th>Resultado na EAG</th><th>Interpretação</th></tr></thead>
    <tbody>
      <tr><td><strong>Glicemia</strong></td><td class="cell-cross">↓↓ HIPOGLICEMIA (< 60 mg/dL)</td><td>Achado mais ESPECÍFICO — falência de síntese hepática</td></tr>
      <tr><td>Transaminases (AST/ALT)</td><td>↑ Moderado (200-1000 U/L)</td><td>Menor elevação que na hepatite viral aguda</td></tr>
      <tr><td>Bilirrubinas</td><td>↑ Icterícia</td><td>Lesão hepatocelular + colestase</td></tr>
      <tr><td>TP/INR</td><td class="cell-cross">↑ Coagulopatia grave</td><td>Falência de síntese dos fatores de coagulação</td></tr>
      <tr><td>Amônia</td><td class="cell-cross">↑ Encefalopatia</td><td>Falência de detoxificação</td></tr>
      <tr><td>Ácido úrico</td><td>↑</td><td>Também elevado na PE — DD parcial</td></tr>
      <tr><td>Creatinina</td><td>↑ (lesão renal)</td><td>Síndrome hepatorrenal pode ocorrer</td></tr>
      <tr><td>Plaquetas</td><td>↓ (CIVD)</td><td>Coagulopatia de consumo</td></tr>
    </tbody>
  </table>
  </div>

  ${alertBox('pegadinha','Hipoglicemia — O Achado Mais Específico da EAG','A banca vai perguntar sobre o achado mais específico da EAG — é a HIPOGLICEMIA. Explica-se: o fígado está em falência e não consegue produzir glicose (gliconeogênese comprometida). Na pré-eclâmpsia e no HELLP, a glicemia geralmente é normal. Hipoglicemia no 3º trimestre com icterícia = pensar EAG.','🎭')}
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🚨','Tratamento — Interrupção Imediata','#e11d48')}
  ${alertBox('danger','INTERROMPER A GESTAÇÃO é o único tratamento definitivo','Não existe tratamento clínico da EAG que substitua a interrupção. Cada hora de atraso aumenta a mortalidade. Via de parto: preferir vaginal se possível (coagulopatia aumenta risco cirúrgico) ou cesárea se necessário. UTI materna obrigatória.','🚨')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Medida</th><th>Objetivo</th></tr></thead>
    <tbody>
      <tr><td><strong>INTERROMPER A GESTAÇÃO</strong></td><td>Tratamento definitivo — remover placenta e feto (metabolismo fetal LCHAD sobrecarrega o fígado materno)</td></tr>
      <tr><td>UTI materna</td><td>Suporte intensivo — glicose IV, PFC, plaquetas, crioprecipitado</td></tr>
      <tr><td>Glicose IV</td><td>Tratar hipoglicemia</td></tr>
      <tr><td>Plasma fresco congelado (PFC)</td><td>Corrigir coagulopatia</td></tr>
      <tr><td>Considerar transplante hepático</td><td>Última opção se falência fulminante pós-parto sem recuperação</td></tr>
    </tbody>
  </table>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 34 semanas com 5 dias de náuseas, vômitos, icterícia e dor em hipocôndrio direito. Laboratório: AST 420 U/L, ALT 380 U/L, bilirrubina total 8 mg/dL, glicemia 42 mg/dL, INR 3,2, plaquetas 68.000/mm³. Qual o diagnóstico mais provável e conduta?',
      options: [
        'Colestase gestacional — iniciar ácido ursodesoxicólico',
        'Hepatite viral aguda — isolamento e suporte clínico',
        'Esteatose hepática aguda da gestação — interromper a gestação imediatamente com suporte em UTI',
        'Síndrome HELLP — anti-hipertensivo e corticoide',
        'Pré-eclâmpsia com insuficiência hepática — sulfato de magnésio'
      ],
      correct: 2,
      explanation: 'Hipoglicemia (42 mg/dL) + icterícia + coagulopatia grave (INR 3,2) + plaquetopenia no 3º trimestre = EAG até prova em contrário. A hipoglicemia é o achado mais específico. Conduta: interrupção imediata da gestação (tratamento definitivo) + UTI materna + suporte (glicose IV, plasma fresco, plaquetas).',
      tip: 'Hipoglicemia + coagulopatia + icterícia no 3º trimestre = EAG. Interromper imediatamente. Não há tratamento clínico alternativo.'
    },
    {
      stem: 'Qual o achado laboratorial mais ESPECÍFICO que diferencia a esteatose hepática aguda da gestação (EAG) da síndrome HELLP?',
      options: [
        'Elevação de transaminases (AST/ALT)',
        'Trombocitopenia',
        'Hipoglicemia intensa',
        'Icterícia',
        'Elevação de ácido úrico'
      ],
      correct: 2,
      explanation: 'A hipoglicemia é o achado mais específico da EAG. O fígado em falência não consegue realizar gliconeogênese → glicemia cai. No HELLP: transaminases elevadas, plaquetopenia e hemólise estão presentes em ambos, mas a hipoglicemia é característica da EAG. Na PE/HELLP, a glicemia geralmente é normal ou levemente alterada.',
      tip: 'EAG: hipoglicemia. HELLP: hemólise + enzimas hepáticas + plaquetopenia. Glicemia normal no HELLP; glicemia baixa na EAG.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 30 — COLESTASE GESTACIONAL
   =================================================== */
GO_RENDER['colestase'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🟤 Hepato — Página 4','Colestase Gestacional: O Prurido que Mata o Bebê','Prurido palmoplantar sem rash no 3º trimestre = colestase até prova em contrário. O risco maior é FETAL (óbito súbito). A mãe fica bem. Tratar com ácido ursodesoxicólico e antecipar o parto.',GRAD_MAP.hepato)}

  <div class="anim-fade-up">
  ${sectionHeader('📋','Definição e Fisiopatologia','#d97706')}
  ${bodyText('A colestase gestacional (CG) é uma hepatopatia específica da gestação caracterizada por <strong>acúmulo de ácidos biliares</strong> no sangue materno e depósito na pele fetal. Ocorre no 3º trimestre (raramente no 2º) por sensibilidade hormonal da excreção biliar.')}

  <div class="axis-diagram mb-24">
    <div class="axis-box source">Estrógeno e progesterona elevados → inibição da excreção biliar</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box process">Colestase intra-hepática → acúmulo de ácidos biliares no sangue</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-up">Depósito de ácidos biliares na pele → PRURIDO materno</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-down">Ácidos biliares atravessam a placenta → cardiotoxicidade fetal</div>
    <div class="axis-arrow">↓</div>
    <div class="axis-box result-normal" style="border-color:var(--error);background:var(--error-light)">Risco de: Óbito fetal súbito, sofrimento fetal, meconismo</div>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🩺','Quadro Clínico — Como Reconhecer','#d97706')}
  ${alertBox('atencao','Prurido Palmoplantar Noturno = Colestase','O prurido é o sintoma cardinal. Começa pelas palmas das mãos e plantas dos pés (palmoplant palmar), piora à noite, sem lesão de pele primária (a pele é normal, o prurido é por depósito de ácidos biliares). Icterícia pode aparecer depois (10-15% dos casos).','⚠️')}

  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead><tr><th>Característica</th><th>Colestase Gestacional</th></tr></thead>
    <tbody>
      <tr><td>Momento</td><td>3º trimestre (raramente 2º)</td></tr>
      <tr><td>Sintoma principal</td><td class="cell-highlight">Prurido palmoplantar, piora noturna</td></tr>
      <tr><td>Pele</td><td>Normal (sem rash, sem lesão primária)</td></tr>
      <tr><td>Icterícia</td><td>10-15% dos casos (sinal de maior gravidade)</td></tr>
      <tr><td>Resolução</td><td>Espontânea após o parto (dias a semanas)</td></tr>
      <tr><td>Risco materno</td><td>Baixo (confortável, não ameaçadora)</td></tr>
      <tr><td>Risco fetal</td><td class="cell-cross">ALTO — óbito súbito imprevisível</td></tr>
    </tbody>
  </table>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('🔬','Diagnóstico — Os Exames que Importam','#d97706')}
  <div class="grid-2 mb-24">
    ${glassCard(`<h4>Exame diagnóstico de escolha</h4>
    <div style="margin-top:10px;padding:14px;border-radius:10px;background:var(--color-hepato-light);border-left:4px solid var(--color-hepato)">
      <strong>Ácidos biliares séricos ≥ 10 μmol/L</strong><br>
      <span style="font-size:var(--text-xs);color:var(--text-muted)">É o marcador mais sensível e específico. Define o diagnóstico e a gravidade.</span>
    </div>
    <div style="margin-top:8px;padding:10px;border-radius:8px;background:var(--error-light);border-left:3px solid var(--error)">
      <strong>Ácidos biliares ≥ 40 μmol/L</strong> = forma grave → maior risco de óbito fetal
    </div>`)}
    ${glassCard(`<h4>Outros exames</h4>
    ${styledList([
      '<strong>Gama-GT:</strong> geralmente NORMAL na CG (diferente de outras hepatopatias)',
      '<strong>AST/ALT:</strong> levemente elevadas (2-10× o limite)',
      '<strong>FA:</strong> elevada, mas é de origem placentária — não específica',
      '<strong>Bilirrubinas:</strong> normais ou levemente elevadas'
    ])}
    ${alertBox('pegadinha','Gama-GT Normal na Colestase','Gama-GT normal na presença de prurido e ácidos biliares elevados é CARACTERÍSTICA da colestase gestacional. Isso a diferencia de outras hepatopatias (colangite, hepatite viral, etc.), que geralmente elevam a gama-GT.','🎭')}`)}
  </div>

  ${sectionHeader('💊','Tratamento e Conduta Obstétrica','#d97706')}
  <div class="grid-2 mb-24">
    ${infoCard('primary','Tratamento Clínico',`
    <p><strong>Ácido Ursodesoxicólico (AUDC)</strong></p>
    <ul>
      <li>Dose: 10-15 mg/kg/dia (em 2-3 tomadas)</li>
      <li>Mecanismo: melhora o transporte biliar hepático → reduz ácidos biliares séricos</li>
      <li>Reduz o prurido materno</li>
      <li>Pode reduzir o risco fetal (diminuindo a carga de ácidos biliares)</li>
      <li>Seguro na gestação</li>
    </ul>`)}
    ${infoCard('danger','Conduta Obstétrica — Antecipação',`
    <p><strong>A antecipação do parto é indicada</strong></p>
    <ul>
      <li><strong>Ácidos biliares ≥ 40 μmol/L:</strong> antecipar às 36 semanas</li>
      <li><strong>Ácidos biliares < 40 μmol/L (forma leve):</strong> antecipar às 37-38 semanas</li>
      <li>Via de parto: indicação obstétrica (vaginal preferível)</li>
      <li>Monitorização fetal: CTG, PBF — limitados para prever óbito súbito</li>
    </ul>`)}
  </div>

  ${alertBox('pegadinha','O Paradoxo da Colestase','A MÃE está bem — o prurido é incômodo mas não ameaça sua vida. O RISCO É PARA O FETO — óbito súbito imprevisível, que os exames de vitalidade fetal têm baixa sensibilidade para prever. A banca adora explorar esse paradoxo: colestase parece doença "leve" da mãe, mas é grave para o bebê.','🎭')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Gestante de 33 semanas refere prurido intenso nas palmas e plantas, piorando à noite, sem lesão de pele visível. Ácidos biliares séricos: 52 μmol/L. Gama-GT normal. Qual o diagnóstico e conduta?',
      options: [
        'Dermatite gestacional — iniciar anti-histamínico tópico',
        'Colestase gestacional — iniciar ácido ursodesoxicólico e antecipar parto às 36 semanas (ácidos biliares ≥ 40)',
        'Colestase gestacional leve — observar sem necessidade de tratamento',
        'Hepatite viral — solicitar sorologias e aguardar resultado antes de tratar',
        'HELLP — sulfato de magnésio e anti-hipertensivo'
      ],
      correct: 1,
      explanation: 'Prurido palmoplantar noturno + ácidos biliares ≥10 μmol/L = colestase gestacional. Gama-GT normal é característica. Ácidos biliares ≥ 40 μmol/L = forma grave → antecipar parto às 36 semanas + AUDC. O risco de óbito fetal súbito é o principal determinante da antecipação.',
      tip: 'Ácidos biliares: ≥10 = CG; ≥40 = grave → antecipar 36 semanas; <40 = leve → antecipar 37-38 semanas.'
    },
    {
      stem: 'Sobre a colestase gestacional, é INCORRETO afirmar que:',
      options: [
        'O prurido é o sintoma principal, piorando à noite e nas extremidades',
        'Os ácidos biliares séricos ≥ 10 μmol/L confirmam o diagnóstico',
        'O principal risco é para a mãe, que pode evoluir com falência hepática',
        'A gama-GT geralmente é normal, diferenciando de outras hepatopatias',
        'O ácido ursodesoxicólico é o tratamento de escolha'
      ],
      correct: 2,
      explanation: 'INCORRETA: o principal risco é FETAL (óbito súbito imprevisível), não materno. A mãe tem desconforto pelo prurido, mas raramente evolui com complicação grave. O risco de óbito fetal súbito é a principal justificativa para a antecipação do parto. As demais afirmativas estão corretas.',
      tip: 'Colestase: risco materno baixo, risco fetal alto. Mãe: prurido intenso, mas vida preservada. Bebê: risco de óbito súbito.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 31 — TABELA COMPARATIVA HEPATOPATIAS
   =================================================== */
GO_RENDER['hepato-comp'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('📋 Hepato — Página 5','Tabela Comparativa das Hepatopatias na Gestação','HELLP, EAG, Colestase e Hepatites: as quatro entidades que causam disfunção hepática na gestação. Cada uma tem sua fisiopatologia, perfil laboratorial e conduta.',GRAD_MAP.hepato)}

  <div class="anim-fade-up">
  ${sectionHeader('📊','Comparativo Completo','#d97706')}
  <div class="table-wrap mb-24">
  <table class="premium-table">
    <thead>
      <tr>
        <th>Característica</th>
        <th>🩸 HELLP</th>
        <th>🫀 EAG</th>
        <th>🟤 Colestase</th>
        <th>🟡 Hepatite B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Trimestre</strong></td>
        <td>3º (≥20 sem)</td>
        <td>3º (30-38 sem)</td>
        <td>3º (raramente 2º)</td>
        <td>Qualquer</td>
      </tr>
      <tr>
        <td><strong>Fisiopatologia</strong></td>
        <td>Vasoespasmo, hemólise microangiopática</td>
        <td>Depósito de gordura (microvesicular) por deficiência LCHAD fetal</td>
        <td>Colestase intra-hepática por estrógeno/progesterona</td>
        <td>Infecção viral</td>
      </tr>
      <tr>
        <td><strong>Sintoma principal</strong></td>
        <td>Dor epigástrica, cefaleia, hipertensão</td>
        <td>Náuseas, vômitos, icterícia, encefalopatia</td>
        <td class="cell-highlight">PRURIDO palmoplantar noturno</td>
        <td>Astenia, icterícia, náuseas</td>
      </tr>
      <tr>
        <td><strong>AST/ALT</strong></td>
        <td>↑↑ (elevação moderada-grave)</td>
        <td>↑↑ (moderada)</td>
        <td>↑ leve (2-10×)</td>
        <td>↑↑↑ (muito alta, >1000)</td>
      </tr>
      <tr>
        <td><strong>Gama-GT</strong></td>
        <td>↑</td>
        <td>↑</td>
        <td class="cell-highlight">NORMAL (característica!)</td>
        <td>↑</td>
      </tr>
      <tr>
        <td><strong>Plaquetas</strong></td>
        <td class="cell-cross">↓↓ (< 100.000)</td>
        <td>↓ (CIVD)</td>
        <td>Normal</td>
        <td>Normal</td>
      </tr>
      <tr>
        <td><strong>Hemólise (DHL, esquizócitos)</strong></td>
        <td class="cell-cross">Presente (tríade HELLP)</td>
        <td>Possível (CIVD)</td>
        <td>Ausente</td>
        <td>Ausente</td>
      </tr>
      <tr>
        <td><strong>Achado mais específico</strong></td>
        <td>Hemólise + plaquetopenia + ↑ enzimas = tríade</td>
        <td class="cell-highlight">HIPOGLICEMIA</td>
        <td class="cell-highlight">ÁCIDOS BILIARES ≥ 10 μmol/L</td>
        <td>HBsAg + Anti-HBc IgM</td>
      </tr>
      <tr>
        <td><strong>Risco materno</strong></td>
        <td class="cell-cross">Grave (CIVD, ruptura hepática)</td>
        <td class="cell-cross">Muito grave (falência hepática fulminante)</td>
        <td>Baixo (prurido incapacitante)</td>
        <td>Moderado (hepatite fulminante raro)</td>
      </tr>
      <tr>
        <td><strong>Risco fetal</strong></td>
        <td class="cell-cross">Grave (CIUR, óbito)</td>
        <td class="cell-cross">Grave (óbito)</td>
        <td class="cell-cross">Grave — ÓBITO SÚBITO imprevisível</td>
        <td>Transmissão vertical (70-90% HBeAg+)</td>
      </tr>
      <tr>
        <td><strong>Conduta definitiva</strong></td>
        <td><strong>Interromper</strong> + corticoide se < 34 sem + MgSO4</td>
        <td><strong>Interromper IMEDIATAMENTE</strong> + UTI</td>
        <td>AUDC + <strong>antecipar</strong> (36 sem se graves; 37-38 se leve)</td>
        <td>Profilaxia RN + tenofovir se carga viral alta</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🧠','Quiz de Flashcards — Hepatopatias','#d97706')}
  <div class="flashcard-grid" id="hepato-flash">
    ${[
      ['Achado mais específico da EAG?','Hipoglicemia (falência da gliconeogênese hepática). Fígado não produz glicose.'],
      ['Achado diagnóstico da colestase?','Ácidos biliares séricos ≥ 10 μmol/L. Gama-GT normal é pista.'],
      ['Quando antecipar na colestase grave?','Ácidos biliares ≥ 40 μmol/L → antecipar às 36 semanas.'],
      ['Tríade do HELLP?','He (hemólise) + EL (enzimas hepáticas elevadas) + LP (plaquetopenia).'],
      ['Por que cesárea não reduz transmissão HCV?','HCV não é transmitido principalmente no parto — é intraparto/intraútero. Diferente do HIV.'],
      ['Profilaxia do RN no HBV?','IGHAHB + Vacina HBV nas primeiras 12 horas. Reduz transmissão de 90% para <5%.'],
      ['EAG: tratamento definitivo?','Interrupção IMEDIATA da gestação + UTI + suporte (glicose, PFC, plaquetas).'],
      ['Colestase: risco materno vs fetal?','Materno: baixo (prurido). Fetal: ALTO (óbito súbito imprevisível). Paradoxo!'],
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
      stem: 'Gestante de 32 semanas apresenta icterícia, dor em hipocôndrio direito, glicemia de 38 mg/dL, INR 4,1 e creatinina 2,8 mg/dL. Qual o diagnóstico mais provável?',
      options: ['Síndrome HELLP', 'Colestase gestacional grave', 'Esteatose hepática aguda da gestação', 'Hepatite viral aguda fulminante', 'Pré-eclâmpsia grave com CIVD'],
      correct: 2,
      explanation: 'Hipoglicemia (38 mg/dL) + coagulopatia grave (INR 4,1) + lesão renal aguda (creatinina 2,8) no 3º trimestre = EAG. A hipoglicemia é o achado mais específico. HELLP raramente cursa com hipoglicemia. Conduta: interrupção imediata + UTI.',
      tip: 'Hipoglicemia no 3º trimestre + disfunção hepática + coagulopatia = EAG. Interromper imediatamente.'
    },
    {
      stem: 'Qual hepatopatia gestacional tem como característica distintiva a gama-GT NORMAL em vigência de elevação de ácidos biliares e AST/ALT levemente elevados?',
      options: ['Síndrome HELLP', 'Esteatose hepática aguda', 'Hepatite B', 'Colestase gestacional', 'Hepatite C'],
      correct: 3,
      explanation: 'A gama-GT normal é uma característica marcante da colestase gestacional que a diferencia de outras hepatopatias. Na colestase, o defeito é no transporte biliar intra-hepático (não na lesão hepatocelular clássica que elevaria gama-GT). Ácidos biliares elevados + gama-GT normal + prurido = CG.',
      tip: 'Gama-GT normal + prurido + ácidos biliares altos = colestase. Padrão único, difícil de confundir quando você sabe.'
    }
  ]);
  GO_NAV(el, page);
};
