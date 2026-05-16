/**
 * Destaca o link da navegação conforme a seção visível na viewport.
 */
export function initNavHighlight({
  sectionSelector = 'section[id]',
  linkSelector = '.nav-links a',
  threshold = 0.3,
  activeColor = 'var(--accent)',
} = {}) {
  const sections = document.querySelectorAll(sectionSelector);
  const navLinks = document.querySelectorAll(linkSelector);
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.style.color = href === `#${id}` ? activeColor : '';
      });
    });
  }, { threshold });

  sections.forEach((section) => observer.observe(section));
}
