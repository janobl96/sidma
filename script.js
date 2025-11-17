document.addEventListener('DOMContentLoaded', function(){
  // MENU TOGGLE
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  menuToggle.addEventListener('click', function(){
    navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ 
        e.preventDefault(); 
        target.scrollIntoView({behavior:'smooth', block:'start'}); 
        if(navMenu.classList.contains('open')) navMenu.classList.remove('open');
      }
    });
  });

  // CONTACT FORM DEMO
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){ alert('Prosím vyplňte všetky polia.'); return; }
      alert('Ďakujeme, ' + name + '! Vaša správa bola odoslaná (demo).');
      form.reset();
    });
  }

  // GALLERY LIGHTBOX
  const galleryImgs = document.querySelectorAll('#gallery img');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lbImage.src = img.src;
      lbCaption.textContent = img.closest('figure')?.querySelector('figcaption')?.textContent || '';
      lightbox.classList.add('lb-open');
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  function closeLB(){
    lightbox.classList.remove('lb-open');
    lightbox.setAttribute('aria-hidden','true');
    lbImage.src = '';
    lbCaption.textContent = '';
  }
  lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLB(); });

  // HERO SLIDER
  // HERO SLIDER
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove('active'));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000); // každých 5 sekúnd

