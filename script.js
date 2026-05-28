// ── STATS ──
const startJaar = 2015;
const huidigJaar = new Date().getFullYear();

const jarenEl = document.getElementById('jaren');
const certEl = document.getElementById('certificaten');
const processenEl = document.getElementById('processen');
const jaarEl = document.getElementById('jaar');

if (jarenEl) jarenEl.textContent = huidigJaar - startJaar;
if (certEl) certEl.textContent = 6;
if (processenEl) processenEl.textContent = '25+';
if (jaarEl) jaarEl.textContent = huidigJaar;

// ── VAARDIGHEIDSBALKEN ──
const balken = document.querySelectorAll('.vaardig-vulling');
balken.forEach(balk => {
  const breedte = balk.dataset.breedte;
  if (breedte) balk.style.width = breedte + '%';
});

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
  }, { threshold: 0.15 });

  elementen.forEach(el => waarnemer.observe(el));
} else {
  elementen.forEach(el => el.classList.add('zichtbaar'));
}