const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parseHTML } = require('linkedom');

const REPO_ROOT = path.resolve(__dirname, '..', '..');

function createStorage() {
  const store = new Map();
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    clear() {
      store.clear();
    }
  };
}

function createTimers() {
  let nextId = 1;
  const pending = new Map();

  return {
    setTimeout(fn) {
      const id = nextId++;
      pending.set(id, fn);
      return id;
    },
    clearTimeout(id) {
      pending.delete(id);
    },
    runAll(limit = 50) {
      let runs = 0;
      while (pending.size && runs < limit) {
        const entries = Array.from(pending.entries());
        pending.clear();
        entries.forEach(([, fn]) => {
          if (typeof fn === 'function') fn();
        });
        runs += entries.length;
      }
    },
    clearAll() {
      pending.clear();
    }
  };
}

function createShell(pageContainerHtml = '') {
  return `<!DOCTYPE html>
  <html lang="pt-BR">
    <body>
      <aside id="sidebar" class="sidebar"></aside>
      <nav id="sidebar-nav"></nav>
      <div id="sidebar-overlay"></div>
      <button id="hamburger"></button>
      <button id="theme-toggle"></button>
      <span id="theme-icon"></span>
      <button id="progress-btn"></button>
      <div id="progress-modal" hidden></div>
      <button id="modal-close"></button>
      <div id="modal-body"></div>
      <button id="sidebar-collapse-btn"></button>
      <div id="header" class="header"></div>
      <div id="header-breadcrumb"></div>
      <div id="progress-label"></div>
      <div id="page-bg"></div>
      <main>
        <div id="page-container">${pageContainerHtml}</div>
      </main>
    </body>
  </html>`;
}

function createSpaTestEnv(options = {}) {
  const {
    pageContainerHtml = '',
    readyState = 'complete',
    hoverNone = false,
    reduceMotion = false,
  } = options;

  const { window } = parseHTML(createShell(pageContainerHtml));
  const timers = createTimers();
  const listenerLog = new WeakMap();
  const observerRecords = { mutation: [], intersection: [] };

  window.window = window;
  window.self = window;
  window.globalThis = window;
  window.console = console;
  window.localStorage = createStorage();
  window.requestAnimationFrame = (cb) => {
    cb();
    return 1;
  };
  window.cancelAnimationFrame = () => {};
  window.scrollTo = () => {};
  window.router = { navigate() {} };
  window.closeSidebar = () => {};
  window.setTimeout = (fn) => timers.setTimeout(fn);
  window.clearTimeout = (id) => timers.clearTimeout(id);
  window.matchMedia = (query) => ({
    media: query,
    matches:
      (query === '(hover: none)' && hoverNone) ||
      (query === '(prefers-reduced-motion: reduce)' && reduceMotion),
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() { return false; }
  });

  window.MutationObserver = class MutationObserver {
    constructor(callback) {
      this.callback = callback;
    }

    observe(target, options) {
      this.target = target;
      this.options = options;
      observerRecords.mutation.push({ target, options, observer: this });
    }

    disconnect() {}

    takeRecords() {
      return [];
    }

    trigger(records = []) {
      this.callback(records, this);
    }
  };

  window.IntersectionObserver = class IntersectionObserver {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      this.targets = [];
    }

    observe(target) {
      this.targets.push(target);
      observerRecords.intersection.push({ target, options: this.options, observer: this });
    }

    disconnect() {}

    unobserve(target) {
      this.targets = this.targets.filter(item => item !== target);
    }

    trigger(entries = []) {
      this.callback(entries, this);
    }
  };

  Object.defineProperty(window.document, 'readyState', {
    value: readyState,
    configurable: true
  });

  const originalAddEventListener = window.EventTarget.prototype.addEventListener;
  window.EventTarget.prototype.addEventListener = function patchedAddEventListener(type, listener, options) {
    const types = listenerLog.get(this) || [];
    types.push(type);
    listenerLog.set(this, types);
    return originalAddEventListener.call(this, type, listener, options);
  };

  const context = vm.createContext(window);

  function loadScript(relativePath) {
    const code = fs.readFileSync(path.join(REPO_ROOT, relativePath), 'utf8');
    vm.runInContext(code, context, { filename: relativePath });
  }

  return {
    window,
    document: window.document,
    context,
    observerRecords,
    loadScript,
    loadScripts(relativePaths) {
      relativePaths.forEach(loadScript);
    },
    getGlobal(expression) {
      return vm.runInContext(expression, context);
    },
    runAllTimers() {
      timers.runAll();
    },
    getListenerTypes(target) {
      return Array.from(listenerLog.get(target) || []);
    },
    dispatchDOMContentLoaded() {
      window.document.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true }));
      timers.runAll();
    },
    cleanup() {
      timers.clearAll();
    }
  };
}

module.exports = { createSpaTestEnv };
