# GO Premium — Doenças Intercorrentes na Gestação
## Relatório de Implementação Técnica

**Versão:** 1.0.0  
**Data:** Maio 2026  
**Plataforma:** Static website — HTML5 / CSS3 / JavaScript (Vanilla)

---

## 1. Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Markup | HTML5 semântico | Acessibilidade ARIA, SEO |
| Estilo | CSS3 custom properties | Sem dependência de framework, controle total |
| Scripts | JavaScript ES6+ (Vanilla) | Sem build step, zero dependências |
| Fontes | Google Fonts (Inter + JetBrains Mono) | Preconnect otimizado |
| Roteamento | Hash Router próprio (GORouter) | SPA sem servidor |
| Dados | localStorage | Progresso do usuário |

---

## 2. Estrutura de Pastas

```
/
├── index.html                  # Shell da SPA (único HTML)
├── css/
│   ├── style.css               # Design tokens, layout, componentes base
│   ├── animations.css          # Keyframes, classes utilitárias de animação
│   └── components.css          # Componentes específicos (hero, flashcard, etc.)
├── js/
│   ├── data.js                 # GO_PAGES, GO_BLOCKS, GRAD_MAP (navegação)
│   ├── pages.js                # Renders: home, fisiologia, tireoide (10 páginas)
│   ├── pages-reumato.js        # Renders: lúpus (6), SAF (3), AR (1) = 10 páginas
│   ├── pages-cardio.js         # Renders: cardio fisiologia, OMS, valvar, tto, parto
│   ├── pages-hepato.js         # Renders: hep-b, hep-c, esteatose, colestase, comp
│   ├── pages-itu.js            # Renders: itu-fisio, itu-classif, itu-profi
│   ├── pages-revisao.js        # Renders: mnemonic, flashcards, simulador
│   ├── router.js               # GORouter — hash-based SPA router
│   └── app.js                  # Sidebar, temas, quizzes, progresso
└── docs/
    └── implementation-report.md  # Este arquivo
```

---

## 3. Arquitetura da Plataforma

### 3.1 Hash Router (GORouter)
- Escuta eventos `hashchange` e `load`
- Resolve `window.location.hash` → page object em `GO_PAGES`
- Chama `GO_RENDER[pageId](container, page)` para renderizar
- Fallback automático para páginas sem renderer (placeholder)
- Rastreia páginas visitadas via `localStorage('go_visited')`
- Atualiza barra de progresso global

### 3.2 Sistema de Renderização
Cada módulo de páginas define funções em `window.GO_RENDER[id]`:

```javascript
GO_RENDER['id-da-pagina'] = function(el, page) {
  el.innerHTML = `...conteúdo HTML...`;
  GO_QUIZ(el, [...questões...]);   // Engine de quiz
  GO_NAV(el, page);                 // Navegação prev/next
};
```

### 3.3 Helpers de Construção HTML
Definidos em `js/pages.js`:

| Helper | Uso |
|--------|-----|
| `pageHero(tag, title, sub, grad)` | Cabeçalho de página com gradiente |
| `sectionHeader(icon, title, color)` | Header de seção |
| `alertBox(type, title, text, icon)` | Alertas (pegadinha, atencao, info, success) |
| `glassCard(content, extra)` | Cards glass-morphism |
| `twoCol(a, b)` / `threeCol(a,b,c)` | Grid de 2 e 3 colunas |
| `medCard(type, icon, name, desc)` | Cards de medicamentos |
| `partoCard(type, title, items)` | Cards de via de parto |
| `provaCard(title, text)` | Dicas "o que a prova quer" |
| `resumoItem(num, color, text)` | Items de resumo numerados |
| `styledList(items)` | Lista estilizada com →  |
| `badge(type, text)` | Badges coloridos |

### 3.4 Quiz Engine (GO_QUIZ)
- Renderiza cards com stem + options
- Clique em opção: desabilita todas, marca correta (verde) / errada (vermelho)
- Exibe feedback detalhado com explicação e dica
- IDs únicos por timestamp para evitar conflito entre páginas

### 3.5 Sidebar e Navegação
- Grupos expansíveis por bloco (entrada, tireoide, reumato, cardio, hepato, itu, revisao)
- Abre automaticamente o grupo da página ativa
- Ripple effect no clique
- Mobile: slide-in com overlay blur
- Tema claro/escuro: persiste em localStorage

---

## 4. Páginas Implementadas (36 total)

### Bloco 0 — Entrada (2 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| home | Início / Hero | Classificador fisiológico, cards-bloco |
| fisiologia | Modificações Fisiológicas | Classificador interativo, tabela |

### Bloco 1 — Tireoide (10 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| tir-fisio | Fisiologia Tireoidiana | Simulador TSH por trimestre |
| hipo-def | Hipotireoidismo: Definição | Quiz 3 questões |
| hipo-fisio | Hipotireoidismo: Fisiopatologia | Fluxograma animado |
| hipo-dx | Hipotireoidismo: Diagnóstico | Simulador TSH/T4/anti-TPO |
| hipo-tto | Hipotireoidismo: Tratamento | Timeline de ajuste de dose |
| hipo-parto | Hipotireoidismo: Via de Parto | Cards parto vaginal/cesárea |
| hiper-def | Hipertireoidismo: Definição | Diferenciador Graves/Transitório |
| hiper-dx | Hipertireoidismo: Diagnóstico | Critérios checklist interativo |
| hiper-tto | Hipertireoidismo: Tratamento | Simulador antitireoidiano |
| tir-comp | Hipo vs Hiper: Comparativo | Flashcards flip, tabela comparativa |

### Bloco 2 — Reumato (10 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| lup-def | Lúpus: Definição e Impacto | Diagrama TH1/TH2 |
| lup-fisio | Lúpus: Fisiopatologia | Mapa mental LES |
| lup-dx | Lúpus vs Pré-eclâmpsia | Diferenciador DD checklist |
| lup-tto | Lúpus: Tratamento | Cards HCA sim/MMC não |
| lup-neo | Síndrome do Lúpus Neonatal | Timeline bloqueio AV |
| lup-parto | Lúpus: Via de Parto | Critérios parto programado |
| saf-def | SAF: Definição e Critérios | Critérios Sapporo interativos |
| saf-tto | SAF: Tratamento e Heparina | Simulador perfil de risco |
| saf-parto | SAF: Programação do Parto | Manejo periparto da HBPM |
| ar-gest | Artrite Reumatoide | Comparativo TH1/TH2 |

### Bloco 3 — Cardio (5 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| card-fisio | Cardiovascular: Fisiologia | Timeline picos de sobrecarga |
| card-classif | Classificação OMS de Risco | Simulador classe OMS |
| card-valvar | Estenose vs Insuficiência | Comparativo valvopatias |
| card-tto | Cardiopatia: Tratamento | Medicações cardio na gestação |
| card-parto | Cardiopatia: Via de Parto | Regras por classe OMS |

### Bloco 4 — Hepato (5 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| hep-b | Hepatite B na Gestação | Interpretação sorológica |
| hep-c | Hepatite C na Gestação | Tabela TV e conduta |
| esteatose | Esteatose Aguda da Gestação | Diagnóstico diferencial |
| colestase | Colestase Gestacional | Calculadora ácidos biliares |
| hepato-comp | Tabela Comparativa Hepatopatias | Comparativo 4 doenças |

### Bloco 5 — ITU (3 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| itu-fisio | ITU: Por que é Mais Comum | Fluxo fisiopatológico |
| itu-classif | ITU: Classificação e Tratamento | Simulador conduta por forma |
| itu-profi | ITU: Profilaxia | Critérios de profilaxia |

### Bloco 6 — Revisão (3 páginas)
| ID | Título | Interativo |
|----|--------|-----------|
| mnemonic | Mnemônicos e Macetes | Cards por bloco |
| flashcards | Flashcards de Revisão | Flip cards interativos |
| simulador | Simulador Final de Casos | 10 casos clínicos quiz |

---

## 5. Design System

### 5.1 Paleta de Cores por Especialidade
```css
--color-tireoide: #0891b2  /* Azul ciano */
--color-reumato:  #9333ea  /* Roxo */
--color-saf:      #7c3aed  /* Violeta */
--color-cardio:   #e11d48  /* Vermelho */
--color-hepato:   #d97706  /* Âmbar */
--color-itu:      #0284c7  /* Azul */
--color-revisao:  #0f766e  /* Verde-teal */
```

### 5.2 Gradientes de Fundo por Bloco
Cada bloco tem gradiente claro (light mode) e escuro (dark mode) definido nas CSS custom properties. O gradiente anima com `background-position` em loop de 18s.

### 5.3 Glass-morphism
```css
backdrop-filter: blur(16px) saturate(160%);
background: rgba(255,255,255,0.75);
border: 1px solid rgba(0,0,0,0.08);
```

### 5.4 Dark Mode
Implementado via `[data-theme="dark"]` no `<html>`. Persiste em `localStorage('go_theme')`. Troca de tema sem reload de página.

---

## 6. Componentes Interativos

| Componente | Classe CSS | Descrição |
|-----------|-----------|-----------|
| Simulador clínico | `.simulator-card` | Select/input → resultado instantâneo |
| Quiz | `.quiz-card` | Questão + alternativas + feedback animado |
| Flashcard flip | `.flashcard` | 3D flip CSS, click para virar |
| Critérios checklist | `.criteria-item` | Toggle checked com score dinâmico |
| Classificador | `.classifier-item` | Fisiológico vs patológico |
| Timeline | `.timeline-item` | Linha do tempo com marcadores |
| Fluxograma | `.flow-step` | Diagrama de decisão vertical |
| Diagrama de eixo | `.axis-box` | Representação fisiopatológica |
| Comparativo | `.versus-card` | Duas colunas frente a frente |
| Mapa mental | `.mindmap-wrap` | Nó central + ramos |

---

## 7. Animações

| Keyframe | Uso |
|----------|-----|
| `fadeInUp` | Entrada de seções |
| `gradientFlow` | Background dinâmico |
| `hotspotPulse` | Pontos interativos |
| `pulseSuccess` | Resposta correta no quiz |
| `shakeError` | Resposta errada no quiz |
| `ripple` | Efeito clique na sidebar |
| `spin` | Loading spinner |
| `scaleIn` | Entrada de cards |

Classes utilitárias: `.anim-fade-up`, `.anim-fade`, `.anim-scale`, `.delay-1` a `.delay-6`

---

## 8. Acessibilidade (ARIA)

- `role="navigation"` na sidebar
- `role="main"` no conteúdo principal
- `role="dialog"` no modal de progresso
- `aria-label` em todos os botões de ação
- `aria-expanded` nos grupos expansíveis da sidebar
- `aria-modal="true"` no modal
- `tabindex="0"` nos headers de grupo (navegação por teclado)
- Suporte a `prefers-reduced-motion`

---

## 9. Performance

- Zero dependências externas de runtime (exceto Google Fonts)
- CSS crítico inline no `<head>` (via link separados sem bloqueio)
- Fontes com `preconnect` e `display=swap`
- Scripts carregados no final do `<body>` (não bloqueiam render)
- Renderização lazy por página (só renderiza o conteúdo da página ativa)
- `requestAnimationFrame` para rendering suave

---

## 10. Problemas Conhecidos e Próximos Passos

### Problemas Conhecidos
- Em telas muito pequenas (< 320px), tabelas comparativas podem ter overflow horizontal
- O simulador de TSH no `tir-fisio` aceita valores negativos (validação básica)

### Próximos Passos Recomendados
1. **SVGs educacionais**: adicionar diagramas SVG estáticos por página (eixo tireoidiano, anatomia SAF, etc.)
2. **Busca global**: implementar campo de busca por conteúdo entre páginas
3. **Modo estudo**: timer de Pomodoro integrado ao progresso
4. **Exportação PDF**: resumo das páginas visitadas em PDF
5. **Backend/auth**: sistema de usuários para persistência de progresso em nuvem
6. **Analytics**: rastreamento de questões certas/erradas por bloco
7. **Modo revisão**: repetição espaçada dos flashcards (algoritmo SM-2)
8. **Notificações push**: lembretes de revisão

---

## 11. Convenções de Código

### JavaScript
- Funções de renderização: `GO_RENDER['id']`
- Funções globais (chamadas via `onclick`): `window.nomeDaFuncao = function()`
- Constantes: `GO_PAGES`, `GO_BLOCKS`, `GRAD_MAP`
- Utilitários globais: `GO_QUIZ`, `GO_NAV`, `GO_UPDATE_NAV`

### CSS
- Variáveis: `--color-[bloco]`, `--grad-[bloco]`, `--radius-[tamanho]`
- Modificadores de estado: `.active`, `.open`, `.checked`, `.flipped`
- Dark mode: `[data-theme="dark"] .classe`
- Responsividade: `@media (max-width: 900px)` (tablet) e `@media (max-width: 480px)` (mobile)

---

*Relatório gerado automaticamente — GO Premium v1.0.0*
