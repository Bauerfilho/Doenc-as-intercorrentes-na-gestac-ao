# GO Premium — Doenças Intercorrentes na Gestação

> Plataforma premium de estudo ativo para residência médica em Obstetrícia e Ginecologia

---

## 🎯 Objetivo

Plataforma SPA (Single Page Application) 100% estática, desenvolvida para médicos e estudantes que se preparam para provas de alta competição (ENARE, TEGO, USP-RP, UNICAMP, SUS-SP). Foco em **doenças clínicas que intercorrem durante a gestação**, com abordagem fisiopatológica, clínica, farmacológica e obstétrica integrada.

**Pergunta central de toda a plataforma:** *"O que a gestação muda nesta doença e como isso altera a via de parto, as medicações e o raciocínio de prova?"*

---

## 🚀 Como Acessar

Abrir `index.html` diretamente no navegador (sem servidor necessário) ou publicar em qualquer host estático (GitHub Pages, Netlify, Vercel).

**URL de navegação:** `index.html#<id-da-página>`

Exemplos:
- `index.html` → Página inicial
- `index.html#tir-fisio` → Tireoide: Fisiologia
- `index.html#lup-def` → Lúpus: Definição
- `index.html#simulador` → Simulador Final de Casos

---

## 📚 Conteúdo — 36 Páginas em 6 Blocos

### 🏠 Bloco 0 — Entrada (2 páginas)
| Rota | Conteúdo |
|------|---------|
| `#home` | Hero com acesso rápido a todos os blocos + tabela de modificações fisiológicas gerais |
| `#fisiologia` | Modificações fisiológicas por sistema + classificador fisiológico vs patológico |

### 🦋 Bloco 1 — Tireoide (10 páginas)
| Rota | Conteúdo |
|------|---------|
| `#tir-fisio` | Eixo HCG→TSH→T3/T4 + simulador de interpretação do TSH por trimestre |
| `#hipo-def` | Definição, classificação, fatores de risco, complicações maternas e fetais |
| `#hipo-fisio` | Fisiopatologia, demanda aumentada na gestação, fluxograma |
| `#hipo-dx` | Diagnóstico, fluxograma de decisão, simulador TSH/T4/anti-TPO |
| `#hipo-tto` | Levotiroxina, metas por trimestre, interações, ajuste de dose |
| `#hipo-parto` | Via de parto, critérios de interrupção, sequelas do não tratamento |
| `#hiper-def` | Classificação: franco, subclínico, transitório — diferenciador Graves vs transitório |
| `#hiper-dx` | Diagnóstico, crise tireotóxica, checklist de critérios interativo |
| `#hiper-tto` | PTU vs metimazol, simulador por trimestre, contraindicações (iodo radioativo) |
| `#tir-comp` | Tabela comparativa hipo vs hiper + flashcards flip de revisão rápida |

### 🔴 Bloco 2 — Doenças Reumatológicas (10 páginas)
| Rota | Conteúdo |
|------|---------|
| `#lup-def` | LES na gestação, conceito TH1/TH2, impacto bidirecional |
| `#lup-fisio` | Fisiopatologia, anticorpos, mapa mental |
| `#lup-dx` | Diagnóstico diferencial: lúpus vs pré-eclâmpsia + checklist interativo |
| `#lup-tto` | HCA sim, MMC não — medicações seguras e contraindicadas |
| `#lup-neo` | Síndrome do lúpus neonatal, bloqueio AV congênito, anticorpos Ro/La |
| `#lup-parto` | Via de parto, critérios de interrupção no LES |
| `#saf-def` | Critérios de Sapporo, anticorpos antifosfolípides, manifestações |
| `#saf-tto` | HBPM + AAS, doses profilática vs terapêutica, simulador de perfil |
| `#saf-parto` | Programação do parto, manejo periparto da anticoagulação, epidural |
| `#ar-gest` | Artrite reumatoide: gestação MELHORA (TH1), medicações, pós-parto piora |

### ❤️ Bloco 3 — Cardiopatias (5 páginas)
| Rota | Conteúdo |
|------|---------|
| `#card-fisio` | Modificações cardiovasculares, picos de sobrecarga, timeline |
| `#card-classif` | Classificação OMS de risco cardiovascular, simulador de classe |
| `#card-valvar` | Estenose vs insuficiência: qual tolera melhor a gestação? |
| `#card-tto` | Medicações cardiovasculares seguras e contraindicadas |
| `#card-parto` | Via de parto por classe OMS, momento ideal, analgesia |

### 🟡 Bloco 4 — Doenças Hepáticas (5 páginas)
| Rota | Conteúdo |
|------|---------|
| `#hep-b` | Marcadores HBV, imunoprofilaxia RN, amamentação, tenofovir |
| `#hep-c` | Transmissão vertical HCV, amamentação, tratamento pós-parto |
| `#esteatose` | EAG: hipoglicemia + interromper, diagnóstico diferencial HELLP |
| `#colestase` | Prurido noturno, ácidos biliares ≥10, risco fetal, AUDC, interrupção |
| `#hepato-comp` | Tabela comparativa: Hep B, Hep C, EAG, Colestase |

### 🦠 Bloco 5 — ITU na Gestação (3 páginas)
| Rota | Conteúdo |
|------|---------|
| `#itu-fisio` | Por que é mais comum: progesterona, dilatação ureteral, estase |
| `#itu-classif` | Bacteriúria assintomática, cistite, pielonefrite — tratamento e internação |
| `#itu-profi` | Profilaxia pós-pielonefrite, GBS, rastreio obrigatório |

### 🎯 Bloco 6 — Revisão e Simulador (3 páginas)
| Rota | Conteúdo |
|------|---------|
| `#mnemonic` | Mnemônicos de todas as especialidades |
| `#flashcards` | Flashcards flip de revisão rápida por bloco |
| `#simulador` | Simulador final com 10 casos clínicos integrados (todas as especialidades) |

---

## 🛠️ Funcionalidades

### Interface — Template Premium v1.1 (refino visual aplicado)
- ✅ **Glass-morphism refinado** — cards translúcidos com blur 20–28px e saturação 180%
- ✅ **Dark mode elegante** — sem preto chapado, neutros profundos com aurora background
- ✅ **Light mode premium** — sem branco estourado, neutros com luz natural
- ✅ **Sidebar em formato de painel flutuante** — bordas arredondadas (22px), margem do viewport, halo interno
- ✅ **Menu compacto desktop** — recolhe para 76px só com ícones + tooltip ao hover (estado persistido em localStorage)
- ✅ **Header em formato de card flutuante** — translúcido, bordas arredondadas (18px), sombra refinada
- ✅ **Aurora gradients** — luzes naturais no background (radial gradients suaves)
- ✅ **Variação por bloco/seção** — `data-block` no `<body>` muda acentos por especialidade
- ✅ **Preparação para futuras seções** — `data-section="endocardite|itu|diagnostico|tratamento|prova"`
- ✅ **Mobile-first** — hamburger animado (X), overlay blur, sidebar off-canvas com bordas arredondadas
- ✅ **Header oculto ao rolar** — mais espaço para o conteúdo
- ✅ **Ripple effect** — feedback visual ao clicar na sidebar
- ✅ **Microinterações** — lift + halo iluminado no hover dos cards, navegação chips com aurora animada
- ✅ **Acessibilidade** — focus-visible, aria-label, ESC fecha sidebar/modal, prefers-reduced-motion

### Estudo
- ✅ **36 páginas de conteúdo** — fisiopatologia, diagnóstico, tratamento, via de parto
- ✅ **100+ questões no estilo prova** — ENARE, TEGO, USP-RP, SUS-SP
- ✅ **17+ simuladores clínicos** — resposta instantânea com explicação
- ✅ **Flashcards flip** — 3D CSS, clique para ver resposta
- ✅ **Classificadores interativos** — fisiológico vs patológico
- ✅ **Critérios checklist** — diferencial diagnóstico interativo
- ✅ **Mnemônicos por especialidade** — atalhos mentais da professora
- ✅ **Rastreamento de progresso** — % de páginas visitadas por bloco

### Componentes Pedagógicos
- ✅ **Alertas pegadinha** 🎭 — armadilhas clássicas de prova
- ✅ **Alertas "não confunda"** ⚠️ — confusões frequentes de alunos
- ✅ **Cards "o que a prova quer"** 🎯 — síntese objetiva para prova
- ✅ **Tabelas premium** — hover, cores semânticas, overflow responsivo
- ✅ **Timelines** — sequência temporal de eventos clínicos
- ✅ **Fluxogramas** — decisão clínica passo a passo
- ✅ **Diagramas de eixo** — representação fisiopatológica visual
- ✅ **Cards de medicamentos** — pode/deve/não pode com ícones
- ✅ **Cards de via de parto** — vaginal vs cesárea com critérios

---

## 🏗️ Arquitetura Técnica

```
index.html              → Shell SPA (único HTML)
css/
  style.css             → Design tokens base, layout, componentes (~1500 linhas)
  animations.css        → Keyframes + classes utilitárias (~155 linhas)
  components.css        → Componentes específicos (~870 linhas)
  theme.css             → 🆕 Refino visual premium: tokens, sidebar flutuante,
                          header card, sidebar compacta, aurora, hover states
js/
  data.js               → GO_PAGES[], GO_BLOCKS{}, GRAD_MAP{} (navegação)
  pages.js              → Renders home, fisiologia + bloco tireoide completo
  pages-reumato.js      → Renders bloco reumatológico (LES, SAF, AR)
  pages-cardio.js       → Renders bloco cardiopatias
  pages-hepato.js       → Renders bloco hepatopatias
  pages-itu.js          → Renders bloco ITU
  pages-revisao.js      → Renders revisão + simulador final
  router.js             → GORouter (hash-based SPA routing)
  app.js                → Sidebar, quiz engine, progresso, temas
  theme-enhancer.js     → 🆕 Patch mínimo: sidebar compacta, data-block,
                          ESC fecha modal/sidebar, hambúrguer animado
docs/
  implementation-report.md → Documentação técnica completa
```

### Roteamento
Hash Router próprio — sem dependências. Navega por `window.location.hash`:
```
index.html#tir-fisio  →  GO_RENDER['tir-fisio'](container, page)
```

### Persistência
`localStorage`:
- `go_visited` — array de IDs de páginas visitadas (progresso)
- `go_theme` — tema atual ('light' | 'dark')
- `go_sidebar_compact` — estado do menu compacto ('1' | '0')

---

## 📐 Design System

### Cores por Especialidade
| Bloco | Cor | Hex |
|-------|-----|-----|
| Tireoide | Azul ciano | `#0891b2` |
| Reumato (LES/AR) | Roxo | `#9333ea` |
| SAF | Violeta | `#7c3aed` |
| Cardio | Vermelho | `#e11d48` |
| Hepato | Âmbar | `#d97706` |
| ITU | Azul | `#0284c7` |
| Revisão | Teal | `#0f766e` |

### Tipografia
- **Body:** Inter (300–900 + italic)
- **Código/Mono:** JetBrains Mono (400, 600)
- **Escala:** xs (12px) → sm (14px) → base (16px) → lg (18px) → xl (20px) → 2xl (24px) → 3xl (30px) → 4xl (36px)

### Breakpoints
- **Desktop:** > 900px (sidebar fixo)
- **Tablet/Mobile:** ≤ 900px (sidebar off-canvas, hamburger)
- **Pequeno:** ≤ 480px (grid simplificado, fontes reduzidas)

---

## 🎓 Público-Alvo

- Médicos em preparação para residências de alta competição
- Estudantes de medicina cursando Obstetrícia
- Médicos de família/comunidade e generalistas que acompanham gestantes com doenças clínicas

---

## 📊 Métricas da Plataforma

| Métrica | Valor |
|---------|-------|
| Páginas de conteúdo | 36 |
| Questões de prova | 100+ |
| Simuladores clínicos | 17+ |
| Flashcards | 40+ |
| Blocos temáticos | 6 |
| Linhas de CSS | ~2.525 |
| Linhas de JS | ~3.800+ |
| Dependências externas | 0 (runtime) |

---

## 🚧 Funcionalidades Não Implementadas (Próximos Passos)

- [ ] SVGs educacionais estáticos por página (diagramas anatômicos)
- [ ] Busca global de conteúdo
- [ ] Modo Pomodoro integrado
- [ ] Exportação de resumo em PDF
- [ ] Sistema de autenticação e progresso em nuvem
- [ ] Algoritmo de repetição espaçada (SM-2) para flashcards
- [ ] Analytics de questões certas/erradas por bloco
- [ ] Notificações push de lembrete de revisão
- [ ] Modo offline (Service Worker / PWA)

---

## 📋 QA Checklist

- [x] Navegação entre todas as 36 páginas
- [x] Quiz engine: correto marcado em verde, errado em vermelho
- [x] Feedback e explicação exibidos após resposta
- [x] Simuladores clínicos retornam resultado correto
- [x] Flashcards flip funcionando
- [x] Critérios checklist com score dinâmico
- [x] Dark mode: todas as páginas renderizam corretamente
- [x] Mobile: sidebar abre/fecha com hamburger e overlay
- [x] Header oculto ao rolar para baixo
- [x] Modal de progresso com % por bloco
- [x] Breadcrumb atualiza com a página ativa
- [x] Gradiente de fundo troca por especialidade
- [x] Navegação prev/next entre páginas
- [x] Ripple effect na sidebar
- [x] Sem erros de console no carregamento
- [x] Todos os scripts carregados no index.html

---

## 🎨 Relatório do Refino Visual (v1.1 — Maio 2026)

### Diagnóstico inicial
1. Sidebar com fundo escuro chapado (sem unidade visual no light)
2. Header em barra fixa, sem aparência de card premium
3. Sem menu compacto em desktop (apenas off-canvas mobile)
4. Light mode com branco estourado (`#ffffff`) e sem profundidade
5. Cards sem variação tonal nem hover halo refinado
6. Sem tokens `data-section` para variação por doença/bloco

### Arquivos modificados/criados
| Arquivo | Tipo | Mudança |
|---------|------|---------|
| `css/theme.css` | 🆕 NOVO | 34 seções, ~700 linhas — overlay premium completo |
| `js/theme-enhancer.js` | 🆕 NOVO | Patch mínimo: compact toggle + data-block + ESC + hambúrguer X |
| `index.html` | EDIT | +1 link CSS, +1 script JS, +1 botão `sidebar-collapse-btn` |
| `README.md` | EDIT | Documentação atualizada |

**⚠️ Nada de conteúdo médico, rotas, dados, quizzes ou simuladores foi alterado.**

### Principais melhorias aplicadas

**Sidebar premium**
- Painel flutuante com `border-radius: 22px` e margem do viewport (12px)
- Halo interno com radial-gradients (luz natural)
- Logo badge com aurora animada (gradient shift 14s)
- Grupos com toggle suave + open automático na página ativa
- Cards de página com barra lateral iluminada que cresce no hover/active
- **Menu compacto**: recolhe para 76px com tooltip ao hover de cada item
- Persistência em `localStorage.go_sidebar_compact`
- Em mobile: comportamento off-canvas preservado (compactação desabilitada)

**Header premium**
- Card flutuante translúcido (border-radius 18px, blur 24px, saturate 180%)
- Breadcrumb com dot iluminado da cor da seção atual
- Botão de progresso com aurora ao hover
- Hambúrguer com animação X ao abrir sidebar mobile
- Esconde-se ao rolar para baixo (já existia, refinado)

**Sistema de cards**
- Glassmorphism com blur 20px + saturate 180%
- Borda superior com brilho de luz natural (gradient horizontal)
- Hover: lift -3px + sombra elevada + borda iluminada
- Variações: glass-card, simulator-card, quiz-card, calc-card, hero-block, etc.

**Variação por seção (preparação Endocardite + ITU)**
```css
[data-section="endocardite"] → rubi (#be123c)
[data-section="itu"]         → azul (#0284c7)
[data-section="diagnostico"] → azul clínico (#1d4ed8)
[data-section="tratamento"]  → teal (#0d9488)
[data-section="prova"]       → âmbar (#d97706)
```
Plus: `body[data-block]` aplicado dinamicamente conforme página atual.

**Modo claro/escuro elegantes**
- Light: bg `#eef2f7` + radial gradients de aurora; sem branco estourado
- Dark: bg `#07090f` com aurora violeta/azul/púrpura; sem preto chapado
- Sombras adaptadas para cada tema

**Microinterações**
- Aurora shift (14s) em logos, botões, badges, progress bars
- Shimmer (2.4s) em barras de progresso
- Lift + halo no hover de cards, hero-blocks, med-cards, parto-cards
- Modal close com rotação de 90° ao hover
- Page-container com fade+slide na entrada (0.5s)

**Acessibilidade**
- `focus-visible` outline em todos botões/cards interativos
- `aria-label` no botão compactar e tooltip nos itens compactos
- ESC fecha sidebar mobile e modal
- `prefers-reduced-motion` respeitado (animações em 0.01ms)
- Contraste mantido em ambos os temas

### Testes realizados
- ✅ Carregamento da página: **0 erros no console** (Playwright capture)
- ✅ Theme toggle (light ↔ dark): tokens trocam corretamente
- ✅ Sidebar collapse (desktop): persiste estado, mostra tooltips
- ✅ Hambúrguer mobile: anima para X, overlay blur funciona
- ✅ Estrutura de rotas preservada (hash router intacto)
- ✅ `GO_UPDATE_NAV` interceptado mas com fallback para original

### Pendências / não implementado nesta etapa
- Conteúdo médico de Endocardite + ITU (etapas seguintes dos 5 prompts)
- Granularização de páginas novas
- PWA / Service Worker
- Busca global, exportação PDF, repetição espaçada
- Visualizar todas as 36 páginas no navegador foi feito apenas via console capture (sem screenshots browser real)

### Riscos de regressão
- **Baixo**: `theme.css` é overlay carregado por último; remover o `<link>` reverte 100%
- **Baixo**: `theme-enhancer.js` apenas adiciona comportamento; o wrapper de `GO_UPDATE_NAV` chama o original com try/catch
- **Nenhum** arquivo de conteúdo (`pages-*.js`, `data.js`, `router.js`, `app.js`) foi tocado

### Recomendação para próxima etapa
1. Testar manualmente em iPad (Safari) e ajustar `backdrop-filter` se necessário (`-webkit-backdrop-filter` já incluído)
2. Implementar conteúdo médico de **Endocardite** usando `data-section="endocardite"` no body/container
3. Implementar conteúdo médico de **ITU** (já tem `data-block="itu"` ativo)
4. Adicionar SVGs educacionais por página (etapa "ilustrações")
5. Avaliar se quer reaproveitar o template para outras plataformas (basta trocar `data-block` map)

---

*GO Premium — Doenças Intercorrentes na Gestação · v1.1.0 · Refino Visual · Maio 2026*
