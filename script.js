document.addEventListener('DOMContentLoaded', () => {

  // --- MENU TOGGLE ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if(menuToggle && navMenu){
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // zatvor menu po kliknuti
        if(navMenu.classList.contains('open')) navMenu.classList.remove('open');
      }
    });
  });

  // --- HERO SLIDER ---
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  if(slides.length > 0){
    slides[currentSlide].classList.add('active');
    setInterval(() => {
      slides.forEach(slide => slide.classList.remove('active'));
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // --- GALLERY LIGHTBOX ---
  const galleryImgs = document.querySelectorAll('#gallery img');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  if(galleryImgs.length > 0 && lightbox){
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
    lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLB(); });
  }

  // --- CONTACT FORM DEMO ---
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){ alert('Prosím vyplňte všetky polia.'); return; }
      alert(`Ďakujeme, ${name}! Vaša správa bola odoslaná (demo).`);
      form.reset();
    });
  }

});
