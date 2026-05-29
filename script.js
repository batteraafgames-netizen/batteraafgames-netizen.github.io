// ── SCROLL ANIMATIES ──
const elementen = document.querySelectorAll('.verberg');

if ('IntersectionObserver' in window) {
  const waarnemer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('zichtbaar');
        waarnemer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });

  elementen.forEach(el => waarnemer.observe(el));
} else {
  elementen.forEach(el => el.classList.add('zichtbaar'));
}

// Fallback — alles zichtbaar na 1 seconde
setTimeout(() => {
  elementen.forEach(el => el.classList.add('zichtbaar'));
}, 1000);
