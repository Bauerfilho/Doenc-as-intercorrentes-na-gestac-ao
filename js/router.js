/* =========================================
   GO PREMIUM — HASH ROUTER
   ========================================= */

class GORouter {
  constructor() {
    this.currentPage = null;
    this.handlers = {};
    this._rafId = null;
    this._init();
  }

  _init() {
    window.addEventListener('hashchange', () => this._resolve());
    window.addEventListener('load', () => this._resolve());
  }

  on(pageId, handler) {
    this.handlers[pageId] = handler;
    return this;
  }

  navigate(pageId) {
    window.location.hash = '#' + pageId;
  }

  _resolve() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const page = GO_PAGES.find(p => p.id === hash) || GO_PAGES[0];
    if (this.currentPage === page.id) return;
    this.currentPage = page.id;
    this._render(page);
  }

  _render(page) {
    // Atualizar breadcrumb, gradiente e título imediatamente (operações leves)
    const bc = document.getElementById('header-breadcrumb');
    if (bc) bc.textContent = `${this._blockLabel(page.block)} › ${page.label}`;

    const bg = document.getElementById('page-bg');
    if (bg) {
      bg.style.background = GRAD_MAP[page.grad] || GRAD_MAP.revisao;
      bg.style.backgroundSize = '400% 400%';
    }

    document.title = `${page.label} — GO Premium`;

    const container = document.getElementById('page-container');
    if (!container) return;

    // Cancelar render pendente se o usuário navegou rápido
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    const targetPage = page;

    this._rafId = requestAnimationFrame(() => {
      this._rafId = null;

      const fn = window.GO_RENDER && window.GO_RENDER[targetPage.id];
      try {
        container.innerHTML = '';
        if (fn) {
          fn(container, targetPage);
        } else {
          container.innerHTML = this._fallback(targetPage);
        }
      } catch (error) {
        console.error(`[GORouter] Falha ao renderizar a página "${targetPage.id}"`, error);
        container.innerHTML = this._renderError(targetPage, error);
      }

      // Rolar para o topo após renderizar (uma única vez)
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Atualizar nav uma única vez, após o conteúdo estar pronto
      if (window.GO_UPDATE_NAV) window.GO_UPDATE_NAV(targetPage.id);

      this._attachPageLinks(container);
      this._markVisited(targetPage.id);
      this._updateProgress();
    });
  }

  _attachPageLinks(container) {
    container.querySelectorAll('[data-goto]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.goto));
    });
  }

  _blockLabel(block) {
    return GO_BLOCKS[block] ? GO_BLOCKS[block].label : block;
  }

  _fallback(page) {
    return `<div class="page-hero" style="--grad-current:${GRAD_MAP[page.grad]}">
      <span class="page-hero-tag">📖 ${this._blockLabel(page.block)}</span>
      <h1>${page.label}</h1>
      <p class="subtitle">Conteúdo em construção...</p>
    </div>`;
  }

  _renderError(page, error) {
    const detail = error?.message ?? 'Erro não identificado';
    return `<div class="page-hero" style="--grad-current:${GRAD_MAP[page.grad] || GRAD_MAP.revisao}">
      <span class="page-hero-tag">⚠️ ${this._blockLabel(page.block)}</span>
      <h1>${page.label}</h1>
      <p class="subtitle">Falha técnica ao carregar esta página.</p>
      <div class="alert warning" style="margin-top:20px;">
        <strong>Detalhe técnico:</strong> ${detail}<br />
        Verifique o console para o stack trace completo.
      </div>
    </div>`;
  }

  _markVisited(pageId) {
    const visited = JSON.parse(localStorage.getItem('go_visited') || '[]');
    if (!visited.includes(pageId)) {
      visited.push(pageId);
      localStorage.setItem('go_visited', JSON.stringify(visited));
    }
  }

  _updateProgress() {
    const visited = JSON.parse(localStorage.getItem('go_visited') || '[]');
    const pct = Math.round((visited.length / GO_PAGES.length) * 100);
    const lbl = document.getElementById('progress-label');
    if (lbl) lbl.textContent = pct + '%';
  }
}

const router = new GORouter();
