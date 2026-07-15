// Pressed & Bloom — small progressive-enhancement script
// No frameworks, no build step: safe to drop straight onto GitHub Pages.

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const navCta = document.querySelector('.nav-cta');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      nav.style.display = isOpen ? 'flex' : '';
      if (navCta) navCta.style.display = isOpen ? 'inline-flex' : '';
      if (isOpen) {
        nav.style.cssText += 'flex-direction:column; position:absolute; top:100%; left:0; right:0; background:#F7F2E7; padding:1.2rem 28px; gap:1rem; border-bottom:1px solid rgba(43,43,38,0.18);';
      }
    });

    // Close mobile menu after choosing a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (document.body.classList.contains('nav-open')) {
          toggle.click();
        }
      });
    });
  }

  // Subtle reveal-on-scroll for specimen cards & sections
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.specimen-card, .occasion-item, .process-list li, .note'
    );

    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => observer.observe(el));
  }

  // Order form: friendly placeholder confirmation (no backend wired up)
  const orderForm = document.querySelector('.order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = orderForm.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Request noted — we\'ll follow up by email';
        setTimeout(() => { btn.textContent = original; }, 3200);
      }
    });
  }

});
