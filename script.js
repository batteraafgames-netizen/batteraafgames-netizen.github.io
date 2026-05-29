// ── TAAL SYSTEEM ──
let huidige_taal = 'nl';
 
function wisselTaal() {
  huidige_taal = huidige_taal === 'nl' ? 'en' : 'nl';
  const knop = document.getElementById('taal-btn');
  if (knop) knop.textContent = huidige_taal === 'nl' ? 'EN' : 'NL';
 
  document.querySelectorAll('[data-nl]').forEach(el => {
    const tekst = el.getAttribute('data-' + huidige_taal);
    if (tekst) el.textContent = tekst;
  });
 
  document.documentElement.lang = huidige_taal;
}
 
const taalKnop = document.getElementById('taal-btn');
if (taalKnop) taalKnop.addEventListener('click', wisselTaal);
 
// ── MOBIEL MENU ──
const menuKnop = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
 
if (menuKnop && navLinks) {
  menuKnop.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
 
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}
 
// ── STATS ──
const startJaar = 2018;
const huidigJaar = new Date().getFullYear();
 
const jarenEl = document.getElementById('jaren');
const certEl = document.getElementById('certificaten');
const jaarEl = document.getElementById('jaar');
 
if (jarenEl) jarenEl.textContent = huidigJaar - startJaar;
if (certEl) certEl.textContent = 3;
if (jaarEl) jaarEl.textContent = huidigJaar;
 
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
 
// Fallback
setTimeout(() => {
  elementen.forEach(el => el.classList.add('zichtbaar'));
}, 2000);
 
// ── TERUG NAAR BOVEN ──
const naarBovenKnop = document.getElementById('naar-boven');
 
if (naarBovenKnop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      naarBovenKnop.classList.add('zichtbaar-knop');
    } else {
      naarBovenKnop.classList.remove('zichtbaar-knop');
    }
  });
 
  naarBovenKnop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
