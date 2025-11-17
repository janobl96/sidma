// SIDMA - script.js
document.addEventListener('DOMContentLoaded', function(){
  // --- Navigácia a plynulé posúvanie ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  menuToggle.addEventListener('click', function(){
    navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

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

  // --- Demo pre detailnú stránku stroja/vozidla ---
  document.querySelectorAll('.machine-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); 
          const machineName = this.dataset.name || 'Tento stroj/vozidlo';
          // Ak by existovala detailná stránka, presmerovalo by sa:
          // window.location.href = this.href;

          // Pre demo: Zobrazí alert s informáciou o detailnej stránke
          alert('Klikli ste na detail: ' + machineName + '.\n\nNa reálnej stránke by sa teraz načítala detailná stránka o tomto stroji/vozidle z URL: ' + this.href);
      });
  });

  // --- Simple contact form demo handler ---
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

  // --- Gallery lightbox ---
  const galleryImgs = document.querySelectorAll('#gallery img');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lbImage.src = img.src.replace('w=900','w=1200'); // Skúsi zobraziť väčší obrázok v lightboxe
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
});
