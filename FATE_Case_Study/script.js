(() => {
  const candidates = document.querySelectorAll(
    '.intro-grid, .stats-grid, .section-heading, .two-column-copy, .problem-flow, .architecture-diagram, .data-flow, .validation-grid, .metric-cards, .walkforward-panel, .engineering-list, .decision-system, .closing'
  );

  candidates.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    candidates.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px' });

  candidates.forEach(el => observer.observe(el));
})();
