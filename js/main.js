import { initNavHighlight } from './modules/nav-highlight.js';
import { initScrollReveal } from './modules/scroll-reveal.js';

function initApp() {
  initNavHighlight();
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
