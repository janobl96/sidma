document.addEventListener('DOMContentLoaded', function(){
  // Menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  menuToggle.addEventListener('click', function(){
    navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

  // Smooth scroll
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

  // Contact form demo
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

  // Gallery lightbox
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

  // Hero slider
  const slides = ['images/hero1.jpg','images/hero2.jpg','images/hero3.jpg'];
  let currentSlide = 0;
  const hero = document.querySelector('.hero');
  setInterval(()=>{
    currentSlide = (currentSlide+1) % slides.length;
    hero.style.backgroundImage = `url(${slides[currentSlide]})`;
  },5000);
});
