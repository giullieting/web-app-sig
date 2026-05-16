const DEFAULT_SELECTOR =
  '.card, .expert-card, .tool-badge, .metric-card, .trend-item';

/**
 * Animação de entrada ao rolar (usa @keyframes fadeUp em css/styles.css).
 */
export function initScrollReveal({
  selector = DEFAULT_SELECTOR,
  threshold = 0.1,
} = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      const delay = (index % 4) * 0.08;
      entry.target.style.animation = `fadeUp 0.5s ease ${delay}s both`;
      observer.unobserve(entry.target);
    });
  }, { threshold });

  elements.forEach((el) => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}
