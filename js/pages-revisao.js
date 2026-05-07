/* =========================================
   GO PREMIUM — BLOCO REVISÃO
   Mnemônicos, Flashcards, Simulador Final
   ========================================= */

/* ===================================================
   PÁGINA 35 — MNEMÔNICOS E MACETES
   =================================================== */
GO_RENDER['mnemonic'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🧠 Revisão — Bloco 6 / Página 1','Mnemônicos e Macetes de Alta Densidade','Os atalhos mentais que a professora usa para nunca esquecer. Cada mnemônico foi extraído diretamente do roteiro da aula.',GRAD_MAP.revisao)}

  <div class="anim-fade-up">
  ${sectionHeader('🦋','TIREOIDE','#0891b2')}
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-tireoide)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "PTU primeiro, Metimazol depois"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6"><strong>P</strong>TU = <strong>P</strong>rimeiro trimestre | Metimazol = 2º e 3º trimestre<br>
    Lógica: PTU tem menor teratogenicidade no 1º trim. Metimazol: aplasia cutis se dado no 1º trim → evitar.</p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-tireoide)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "HCG = TSH-like → TSH cai no 1º trim"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">HCG tem subunidade alfa idêntica ao TSH → estimula tireoide → feedback negativo → TSH cai.<br>
    TSH baixo no 1º trim com HCG alto = FISIOLÓGICO. Não é hipertireoidismo.</p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-tireoide)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Hipo = Cognitivo; Hiper = Neonatal"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Complicação específica do HIPOTIREOIDISMO → <strong>déficit COGNItivo</strong> (feto depende de T4 materno no 1º trim)<br>
      Complicação específica do HIPERTIREOIDISMO → <strong>hipertireoidismo NEONATAL</strong> (anticorpos anti-rec TSH cruzam a placenta)
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:24px;border-left:4px solid var(--color-tireoide)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "TSH: 2,5 | 3,0 | 3,0 — Meta por trimestre"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      1º trimestre → TSH &lt; 2,5 mUI/L<br>
      2º trimestre → TSH &lt; 3,0 mUI/L<br>
      3º trimestre → TSH &lt; 3,0 mUI/L<br>
      Macete: "<strong>2,5 → 3,0 → 3,0</strong>" (cai depois do 1º trim)
    </p>
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔴','REUMATO (LES, SAF, AR)','#9333ea')}
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-reumato)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "TH1 Melhora, TH2 Piora"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Gestação = estado TH2.<br>
      Doença TH1 (Artrite Reumatoide) → gestação MELHORA (TH2 suprime TH1)<br>
      Doença TH2 (Lúpus) → gestação PIORA (TH2 amplifica TH2)
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-reumato)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "HCA sim, MMC não" (no LES)</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      <strong>H</strong>idroxicloroquina ✅ | <strong>C</strong>orticoide ✅ | <strong>A</strong>zatioprina ✅<br>
      <strong>M</strong>etotrexato ❌ | <strong>M</strong>icofenolato ❌ | <strong>C</strong>iclofosfamida ❌ (evitar especialmente 1º trim)
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-saf)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "SAF = Heparina + AAS (não warfarina!)"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      SAF na gestação → HBPM + AAS.<br>
      Warfarina: proibida no 1º e 3º trims (embriopatia e hemorragia fetal).<br>
      Profilática (abortos, sem trombose) vs terapêutica (com trombose prévia) → muda a DOSE.
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:24px;border-left:4px solid var(--color-saf)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Paradoxo do Anticoagulante Lúpico"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Anticoagulante LÚPICO → <strong>alonga o TTPA</strong> (anticoagulante no laboratório) → mas causa <strong>TROMBOSE</strong> in vivo.<br>
      Motivo: anticorpos interferem nos fosfolípides do teste in vitro, mas ativam plaquetas e endotélio in vivo.
    </p>
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('❤️','CARDIO','#e11d48')}
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-cardio)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Estenose: obstáculo. Insuficiência: refluxo."</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Estenose = obstáculo fixo. Mais volume (gestação) → mais pressão → descompensa.<br>
      Insuficiência = refluxo variável. Menos resistência (gestação) → menos refluxo → compensa.<br>
      <strong>Estenose tolera MAL. Insuficiência tolera MELHOR.</strong>
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-cardio)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Sopro diastólico = NUNCA normal"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Sopro sistólico grau I-II: pode ser fisiológico (↑ débito cardíaco).<br>
      Sopro diastólico: NUNCA fisiológico — sempre patológico → investigar.
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:24px;border-left:4px solid var(--color-cardio)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "IECA/BRA: OK no 1º, proibido no 2º e 3º"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      IECA (enalapril) e BRA (losartana) causam insuficiência renal fetal, oligoidrâmnio e hipocalvaria no 2º e 3º trimestres.<br>
      Substituir por: metildopa (1ª linha), hidralazina, nifedipina.
    </p>
  </div>
  </div>

  <div class="anim-fade-up delay-3">
  ${sectionHeader('🫀','HEPATO','#d97706')}
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-hepato)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "EAG: Hipoglicemia + Interromper"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      EAG = falência hepática no 3º trim. Achado específico: <strong>HIPOGLICEMIA</strong> (fígado não faz gliconeogênese).<br>
      Tratamento: <strong>INTERROMPER A GESTAÇÃO</strong> imediatamente. Não há tratamento clínico alternativo.
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-hepato)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Colestase: Mãe ok, bebê não"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Colestase gestacional: prurido palmoplantar noturno + gama-GT NORMAL + ácidos biliares ≥ 10.<br>
      Risco materno: BAIXO (apenas desconforto).<br>
      Risco fetal: ALTO → óbito súbito imprevisível.<br>
      Antecipar: ≥40 = 36 sem; &lt;40 = 37-38 sem.
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:24px;border-left:4px solid var(--color-hepato)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "HBV: IGHAHB + Vacina nas primeiras 12h"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Dupla profilaxia no RN de mãe HBsAg+: imunoglobulina + vacina &lt; 12h → reduz transmissão de 90% para &lt;5%.<br>
      HCV: sem profilaxia, transmissão apenas 5%, amamentação permitida.
    </p>
  </div>
  </div>

  <div class="anim-fade-up" style="animation-delay:0.4s">
  ${sectionHeader('🦠','ITU','#0284c7')}
  <div class="glass-card" style="padding:24px;margin-bottom:16px;border-left:4px solid var(--color-itu)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Bacteriúria na gestante = SEMPRE TRATAR"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Fora da gestação: bacteriúria assintomática não se trata.<br>
      Na gestante: SEMPRE TRATAR. 30-40% evolui para pielonefrite se não tratada.<br>
      Rastreio: urinocultura obrigatória no 1º trimestre.
    </p>
  </div>
  <div class="glass-card" style="padding:24px;margin-bottom:24px;border-left:4px solid var(--color-itu)">
    <div style="font-size:1.4rem;margin-bottom:10px">🧠 "Pielonefrite = Internar sempre"</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
      Febre + dor lombar + sintomas urinários = pielonefrite → INTERNAÇÃO OBRIGATÓRIA.<br>
      Ceftriaxona IV até 48h afebril → VO 10-14 dias total.<br>
      NUNCA quinolona na gestação.
    </p>
  </div>
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'Com base nos mnemônicos estudados, qual afirmação é CORRETA sobre tireoide na gestação?',
      options: [
        'O metimazol é o antitireoidiano de escolha no 1º trimestre por ser mais potente',
        'O deficit cognitivo fetal é complicação específica do hipertireoidismo',
        'O PTU é preferido no 1º trimestre; no 2º e 3º, troca-se para metimazol',
        'O TSH alvo no 1º trimestre é < 3,0 mUI/L, igual ao 2º e 3º trimestres',
        'A tireotoxicose transitória deve ser tratada com PTU pois o TSH está suprimido'
      ],
      correct: 2,
      explanation: 'PTU no 1º trimestre (menor teratogenicidade — metimazol causa aplasia cutis no 1º trim). Troca para metimazol no 2º/3º (menor hepatotoxicidade a longo prazo). Meta TSH: < 2,5 no 1º trim; < 3,0 no 2º e 3º. Déficit cognitivo = complicação específica do HIPOTIREOIDISMO. Tireotoxicose transitória: NÃO TRATAR.',
      tip: 'Revisão integrada: os mnemônicos funcionam como âncoras. Teste você mesmo verbalizando cada um antes da prova.'
    }
  ]);
  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 36 — FLASHCARDS DE REVISÃO
   =================================================== */
GO_RENDER['flashcards'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🎴 Revisão — Página 2','Flashcards de Revisão: Toda a Plataforma em 40 Cartões','Clique para virar. Percorra todos os flashcards antes da prova. São as perguntas que mais aparecem nas provas de residência de ginecologia e obstetrícia.',GRAD_MAP.revisao)}

  <div class="anim-fade-up">
  ${sectionHeader('🦋','Tireoide — Flashcards','#0891b2')}
  <div class="flashcard-grid">
    ${[
      ['TSH alvo no 1º trimestre?','< 2,5 mUI/L'],
      ['TSH alvo no 2º e 3º trimestre?','< 3,0 mUI/L'],
      ['Hipo: complicação fetal específica?','Déficit cognitivo (feto depende de T4 materno no 1º trim)'],
      ['Hiper: complicação fetal específica?','Hipertireoidismo fetal/neonatal (anticorpos anti-rec TSH cruzam placenta)'],
      ['PTU: quando usar?','1º trimestre e crise tireotóxica'],
      ['Metimazol: quando NÃO usar?','1º trimestre (aplasia cutis, atresia esôfago/ânus)'],
      ['Iodo radioativo na gestação?','CONTRAINDICADO absoluto — destrói tireoide fetal'],
      ['Tireotoxicose transitória: tratar?','NÃO. HCG elevado, resolve espontaneamente após 12-16 semanas'],
      ['TSH 2,5-4 + anti-TPO negativo?','NÃO tratar (mais aceito). Anti-TPO positivo → tratar'],
      ['Aumento de dose de levotiroxina na gestação?','30% no 1º trimestre imediatamente ao confirmar gestação'],
    ].map(([q,a])=>`
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">${q}</div>
          <div class="flashcard-back">${a}</div>
        </div>
      </div>`).join('')}
  </div>
  </div>

  <div class="anim-fade-up delay-1">
  ${sectionHeader('🔴','Reumato — Flashcards','#9333ea')}
  <div class="flashcard-grid">
    ${[
      ['LES: gestação melhora ou piora?','PIORA (LES = TH2; gestação = TH2 → amplifica)'],
      ['AR: gestação melhora ou piora?','MELHORA (AR = TH1; gestação = TH2 → suprime TH1)'],
      ['Anti-Ro positivo na gestante: monitorar o quê?','ECG fetal semanal 16-26 semanas (bloqueio cardíaco congênito)'],
      ['Bloqueio cardíaco grau III: permanente?','SIM. Os graus I e II podem regredir; grau III é irreversível.'],
      ['HCQ na gestação?','MANTER sempre. Segura e protetora para o feto.'],
      ['MTX e MMF na gestação?','CONTRAINDICADOS. Teratogênicos. Substituir por azatioprina.'],
      ['SAF: critério clínico principal?','≥3 abortos < 10 sem, óbito fetal ≥10 sem, PE grave < 34 sem, trombose vascular'],
      ['SAF: anticoagulante lúpico e TTPA?','AL alonga o TTPA in vitro → mas causa TROMBOSE in vivo (paradoxo)'],
      ['SAF + abortos (sem trombose): tratamento?','HBPM profilática + AAS 100 mg/dia'],
      ['Warfarina na gestação?','Proibida no 1º e 3º trimestres. Pode ser usada no 2º em casos selecionados.'],
    ].map(([q,a])=>`
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">${q}</div>
          <div class="flashcard-back">${a}</div>
        </div>
      </div>`).join('')}
  </div>
  </div>

  <div class="anim-fade-up delay-2">
  ${sectionHeader('❤️','Cardio — Flashcards','#e11d48')}
  <div class="flashcard-grid">
    ${[
      ['Período de maior risco cardiovascular?','Pós-parto imediato (autotransfusão uterina → ↑ DC 60-80%)'],
      ['Estenose mitral: tolera bem ou mal?','MAL. Obstáculo fixo + ↑ volume → descompensa'],
      ['Insuficiência mitral: tolera bem ou mal?','Melhor que a estenose. ↓ Resistência periférica → menos refluxo'],
      ['Eisenmenger: pode gestar?','NÃO. Classe OMS IV. Contraindicação. Mortalidade 30-50%.'],
      ['Sopro diastólico na gestação?','NUNCA normal. Sempre patológico — investigar.'],
      ['CMPP: quando diagnosticar?','FE < 45% no último mês de gestação ou 5 primeiros meses pós-parto'],
      ['IECA/BRA no 2º e 3º trim?','CONTRAINDICADOS. Insuficiência renal fetal, oligoidrâmnio, hipocalvaria.'],
      ['Ergotamina em cardiopata?','PROIBIDA. Vasoconstrição → ↑ pós-carga → edema pulmonar.'],
    ].map(([q,a])=>`
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">${q}</div>
          <div class="flashcard-back">${a}</div>
        </div>
      </div>`).join('')}
  </div>
  </div>

  <div class="anim-fade-up delay-3">
  ${sectionHeader('🫀🦠','Hepato + ITU — Flashcards','#d97706')}
  <div class="flashcard-grid">
    ${[
      ['EAG: achado mais específico?','HIPOGLICEMIA (falência da gliconeogênese hepática)'],
      ['EAG: tratamento definitivo?','INTERROMPER A GESTAÇÃO imediatamente + UTI'],
      ['Colestase: risco principal?','FETAL (óbito súbito imprevisível). Risco materno = baixo.'],
      ['Colestase grave (ácidos biliares ≥ 40)?','Antecipar o parto às 36 semanas'],
      ['Gama-GT na colestase gestacional?','NORMAL (característica que diferencia de outras hepatopatias)'],
      ['HBV: profilaxia do RN?','IGHAHB + Vacina HBV < 12h. Reduz transmissão de 90% para < 5%.'],
      ['HCV: profilaxia do RN?','NÃO EXISTE. Transmissão vertical 5%.'],
      ['Bacteriúria assintomática na gestante: tratar?','SEMPRE. 30-40% evolui para pielonefrite se não tratada.'],
      ['Pielonefrite na gestante: internação?','OBRIGATÓRIA. Risco de sepse, parto prematuro, SDRA.'],
      ['Quinolona na gestação?','CONTRAINDICADA em qualquer trimestre.'],
    ].map(([q,a])=>`
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">${q}</div>
          <div class="flashcard-back">${a}</div>
        </div>
      </div>`).join('')}
  </div>
  </div>`;

  GO_NAV(el, page);
};

/* ===================================================
   PÁGINA 37 — SIMULADOR FINAL DE CASOS
   =================================================== */
GO_RENDER['simulador'] = function(el, page) {
  el.innerHTML = `
  ${pageHero('🎯 Revisão — Página 3','Simulador Final: Casos Clínicos Integrados','10 casos clínicos que integram todo o conteúdo da plataforma. Cada caso exige raciocínio clínico completo. Prepare-se para a prova!',GRAD_MAP.revisao)}

  <div class="anim-fade-up">
  ${sectionHeader('🎯','Missão do Simulador','#0f766e')}
  ${alertBox('info','Como usar','Leia o caso clínico completo antes de escolher a resposta. Após selecionar, veja a explicação detalhada. Tente chegar ao diagnóstico e conduta antes de clicar.',  '📖')}
  </div>`;

  GO_QUIZ(el, [
    {
      stem: 'CASO 1 — Gestante de 10 semanas com hiperêmese gravídica intensa (perda de 5 kg). TSH = 0,05 mUI/L, T4 livre = 1,9 ng/dL (levemente acima do limite). Sem bócio. Sem oftalmopatia. Anti-receptor de TSH: negativo. A conduta é:',
      options: [
        'Iniciar propiltiouracil imediatamente — TSH suprimido exige tratamento',
        'Iniciar metimazol — mais seguro no 1º trimestre',
        'Tratar a hiperêmese (hidratação, antieméticos) e observar — tireotoxicose transitória gestacional',
        'Solicitar cintilografia de tireoide para definir conduta',
        'Internar para tireoidectomia de urgência'
      ],
      correct: 2,
      explanation: 'Tireotoxicose gestacional transitória: TSH suprimido + T4 livre levemente elevado no 1º trimestre + hiperêmese + sem bócio + sem anticorpos = causa pelo HCG. Resolve espontaneamente após o pico do HCG (12-16 sem). NÃO TRATAR com antitireoidiano. Cintilografia é contraindicada na gestação.',
      tip: 'Tireoide + hiperêmese + 1º trimestre + sem bócio/anticorpos = tireotoxicose transitória → NÃO tratar.'
    },
    {
      stem: 'CASO 2 — Gestante de 28 semanas com LES (diagnóstico há 3 anos). PA 158/104 mmHg, proteinúria 3,5 g/24h, creatinina 1,8 mg/dL, C3 muito baixo, anti-DNA elevado, sedimento com hematúria + cilindros. Plaquetas normais. Qual a conduta?',
      options: [
        'Sulfato de magnésio + anti-hipertensivo + interrupção (pré-eclâmpsia grave)',
        'Pulsoterapia com metilprednisolona IV + hidroxicloroquina (flare renal do LES)',
        'Apenas observar — hipertensão e proteinúria podem ser da gestação',
        'Biópsia renal de urgência antes de qualquer tratamento',
        'Diurético e restrição proteica'
      ],
      correct: 1,
      explanation: 'Padrão de flare renal: C3 muito baixo (consumido), anti-DNA elevado, hematúria + cilindros (sedimento ativo), plaquetas normais (afasta HELLP). Não é pré-eclâmpsia. Conduta: imunossupressão (pulsoterapia IV + HCQ). Não interromper a gestação como medida primária.',
      tip: 'C3/C4 baixo + anti-DNA alto + sedimento ativo = flare renal. Complemento normal + HELLP = pré-eclâmpsia. Condutas opostas!'
    },
    {
      stem: 'CASO 3 — Gestante de 36 semanas com estenose mitral grave em uso de metoprolol. Chega à emergência com FC 128 bpm, SpO2 90%, estertores bibasais, ortopneia. Qual o diagnóstico e conduta imediata?',
      options: [
        'Crise tireotóxica — PTU + betabloqueador',
        'Pré-eclâmpsia — sulfato de magnésio e anti-hipertensivo',
        'Edema agudo de pulmão por descompensação da estenose mitral — O2, furosemida IV, controle da FC',
        'Tromboembolismo pulmonar — heparina IV',
        'Pneumonia — antibiótico + fisioterapia'
      ],
      correct: 2,
      explanation: 'Estenose mitral grave + FC elevada (menos tempo de enchimento diastólico) + SpO2 baixa + estertores bibasais = edema agudo de pulmão por descompensação. Conduta: O2 alto fluxo, furosemida IV (reduz pré-carga), controle da FC (metoprolol IV ou digitalização). Posição sentada. FC alta é o grande inimigo da estenose mitral.',
      tip: 'Estenose mitral: controlar FC é prioridade absoluta. FC alta → menos diástole → menos enchimento → descompensa.'
    },
    {
      stem: 'CASO 4 — Paciente de 34 anos com SAF (3 abortamentos prévios, anticoagulante lúpico positivo × 2). Grávida de 6 semanas. Qual o tratamento correto?',
      options: [
        'Warfarina 5 mg/dia + AAS 100 mg/dia',
        'HBPM profilática (enoxaparina 40 mg SC/dia) + AAS 100 mg/dia',
        'Apenas AAS 100 mg/dia — HBPM só se houver trombose',
        'Prednisona 40 mg/dia + hidroxicloroquina',
        'Aguardar sintomas para iniciar tratamento'
      ],
      correct: 1,
      explanation: 'SAF + morbidade obstétrica (≥3 abortos) sem trombose prévia = HBPM em dose profilática + AAS. Warfarina: contraindicada no 1º trimestre. HBPM não cruza a placenta. AAS: antiagregante plaquetário. Juntos, reduzem em 70-80% o risco de nova perda gestacional.',
      tip: 'SAF obstétrica (sem trombose) = profilática. SAF com trombose = terapêutica. A distinção define a dose.'
    },
    {
      stem: 'CASO 5 — Gestante de 33 semanas com prurido intenso palmoplantar noturno há 2 semanas. Sem rash cutâneo visível. Ácidos biliares: 65 μmol/L. Gama-GT normal. Qual o diagnóstico e conduta?',
      options: [
        'Dermatite gestacional — anti-histamínico tópico',
        'Colestase gestacional grave — AUDC + antecipar parto às 36 semanas',
        'Hepatite viral — solicitar sorologias antes de qualquer conduta',
        'HELLP — anti-hipertensivo e corticoide',
        'Colestase leve — apenas AUDC, aguardar 40 semanas'
      ],
      correct: 1,
      explanation: 'Prurido palmoplantar noturno + ácidos biliares ≥ 10 μmol/L = colestase gestacional. Gama-GT normal é pista. Ácidos biliares ≥ 40 μmol/L = forma grave → AUDC + antecipar às 36 semanas. Risco de óbito fetal súbito justifica a antecipação.',
      tip: 'AB ≥ 40 = grave = 36 semanas. AB < 40 = leve = 37-38 semanas. Gama-GT normal na CG = distintivo.'
    },
    {
      stem: 'CASO 6 — Gestante de 32 semanas com icterícia, encefalopatia leve, glicemia 38 mg/dL, INR 3,8. Qual o diagnóstico e conduta imediata?',
      options: [
        'Colestase gestacional — AUDC e antecipar o parto às 36 semanas',
        'HELLP — sulfato de magnésio e interrupção',
        'Esteatose hepática aguda da gestação — INTERROMPER IMEDIATAMENTE + UTI',
        'Hepatite viral fulminante — tratar a etiologia',
        'Eclâmpsia com encefalopatia — sulfato de magnésio'
      ],
      correct: 2,
      explanation: 'Hipoglicemia (38 mg/dL) + coagulopatia grave (INR 3,8) + encefalopatia + icterícia no 3º trimestre = EAG até prova em contrário. A hipoglicemia é o achado mais específico. Tratamento: interrupção IMEDIATA da gestação + UTI materna + suporte (glicose IV, PFC, plaquetas).',
      tip: 'Hipoglicemia + coagulopatia + encefalopatia no 3º trim = EAG. Interromper imediatamente. Sem alternativa clínica.'
    },
    {
      stem: 'CASO 7 — Gestante de 24 semanas com febre 39°C, calafrios, dor lombar à direita, disúria e polaciúria. EAS: leucocitúria intensa, bacteriúria, nitritos positivos. Qual a conduta?',
      options: [
        'Nitrofurantoína oral por 7 dias e reavaliação em 48h',
        'Ciprofloxacino oral — mais eficaz para gram-negativos',
        'Internação + ceftriaxona IV + hemocultura + urinocultura',
        'Aguardar resultado da urinocultura antes de qualquer antibiótico',
        'Apenas hidratação oral e analgésico'
      ],
      correct: 2,
      explanation: 'Pielonefrite aguda (febre + dor lombar + sintomas urinários) na gestação = INTERNAÇÃO OBRIGATÓRIA. Conduta: hemocultura + urinocultura antes do antibiótico; ceftriaxona IV; hidratação IV; antitérmico. Antibiótico IV até 48h afebril → VO por 10-14 dias total. NUNCA ciprofloxacino (contraindicado na gestação).',
      tip: 'Febre + dor lombar = pielonefrite = internar. Quinolona na gestação = NUNCA.'
    },
    {
      stem: 'CASO 8 — Gestante de 36 semanas tem cultura reto-vaginal positiva para Streptococcus agalactiae. Sem alergia à penicilina. Chega em trabalho de parto com 4 cm de dilatação. Qual a conduta?',
      options: [
        'Não há necessidade de intervenção — GBS é colonização, não infecção',
        'Cesárea de emergência para evitar transmissão do GBS ao neonato',
        'Penicilina G cristalina IV 5 mi UI + 2,5 mi UI a cada 4h até o parto',
        'Ampicilina oral 500 mg a cada 6h durante o trabalho de parto',
        'Clindamicina IV — mais eficaz que penicilina para GBS'
      ],
      correct: 2,
      explanation: 'GBS positivo na cultura = profilaxia intraparto obrigatória. Droga de escolha: Penicilina G cristalina IV. Dose: 5 mi UI IV inicial, depois 2,5 mi UI IV a cada 4h até o parto. Iniciar pelo menos 4h antes do parto. A cesárea NÃO elimina o risco de transmissão. Oral não é eficaz intraparto.',
      tip: 'GBS + trabalho de parto = Penicilina G IV. Não confundir com o tratamento da bacteriúria por GBS (oral).'
    },
    {
      stem: 'CASO 9 — Gestante de 34 semanas, HBsAg positivo, HBeAg positivo, HBV-DNA 420.000 UI/mL. Qual a conduta adicional para reduzir a transmissão vertical?',
      options: [
        'Nenhuma — a imunoprofilaxia do RN é suficiente em qualquer situação',
        'Cesárea eletiva para evitar transmissão intraparto',
        'Tenofovir para a mãe (para reduzir carga viral) + imunoprofilaxia do RN',
        'Interferon-alfa para eliminar o vírus antes do parto',
        'Contraindicar amamentação definitivamente'
      ],
      correct: 2,
      explanation: 'HBV-DNA > 200.000 UI/mL = carga viral alta → risco de falha da imunoprofilaxia. Conduta adicional: tenofovir (antiviral seguro) entre 28-32 semanas para reduzir carga viral antes do parto. Imunoprofilaxia do RN (IGHAHB + vacina < 12h) obrigatória de qualquer forma. Interferon: contraindicado (efeito abortivo). Cesárea: não reduz transmissão de HBV.',
      tip: 'HBV-DNA > 200.000 = tenofovir materno. O ponto de corte é importante para a prova.'
    },
    {
      stem: 'CASO 10 — Gestante de 30 semanas com artrite reumatoide em uso de metotrexato. Descobre estar grávida de 6 semanas. Qual a conduta imediata?',
      options: [
        'Manter o metotrexato — a AR grave justifica o risco',
        'Suspender o metotrexato imediatamente e suplementar com ácido fólico em alta dose (5 mg/dia)',
        'Substituir metotrexato por leflunomida — menor teratogenicidade',
        'Aguardar o 2º trimestre para suspender — no 1º trim o risco é baixo',
        'Aumentar a dose de prednisona e manter MTX'
      ],
      correct: 1,
      explanation: 'MTX é antagonista do folato: teratogênico (defeitos do tubo neural, anomalias faciais, CIUR) e abortivo. Suspender IMEDIATAMENTE ao descobrir gestação. Suplementar com ácido fólico 5 mg/dia (alta dose). Substituir por medicação segura (HCQ, sulfasalazina, prednisona). A leflunomida também é contraindicada (washout com colestiramina necessário antes de engravidar).',
      tip: 'MTX + gravidez = suspender imediatamente + ácido fólico alto. Leflunomida também é proibida.'
    }
  ]);
  GO_NAV(el, page);
};
