/* Sandaru Lakshitha — Portfolio interactions (no dependencies) */
(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');

  /* Header background once the page scrolls */
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  const setMenu = (open) => {
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* Active section: highlights nav links + side rail */
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const railLinks = [...document.querySelectorAll('.section-rail a')];
  const setActive = (id) => {
    navLinks.forEach((l) => {
      const on = l.getAttribute('href') === `#${id}`;
      l.classList.toggle('is-active', on);
      on ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current');
    });
    railLinks.forEach((l) => l.classList.toggle('is-active', l.dataset.rail === id));
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
  }
  setActive('home');

  /* Footer year */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
