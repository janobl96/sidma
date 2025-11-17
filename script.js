// SIDMA script.js - hero fade carousel + lightbox + contact demo
document.addEventListener('DOMContentLoaded', function(){
  // HERO carousel (fade)
  const slides = document.querySelectorAll('.hero-slide');
  let current = 0;
  function show(index){
    slides.forEach((s,i)=> s.classList.toggle('show', i===index));
  }
  show(0);
  setInterval(()=> {
    current = (current+1) % slides.length;
    show(current);
  }, 3500);

  // contact form demo
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      if(!name){ alert('Prosím vyplňte meno.'); return; }
      alert('Ďakujeme, ' + name + '! Správa odoslaná (demo).');
      form.reset();
    });
  }

  // gallery lightbox
  const galleryImgs = document.querySelectorAll('#gallery img');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  if(galleryImgs.length && lightbox){
    galleryImgs.forEach(img=>{
      img.addEventListener('click', ()=>{
        lbImage.src = img.src;
        lbCaption.textContent = img.closest('figure')?.querySelector('figcaption')?.textContent || '';
        lightbox.classList.add('lb-open');
        lightbox.setAttribute('aria-hidden','false');
      });
    });
    lbClose.addEventListener('click', ()=>{
      lightbox.classList.remove('lb-open');
      lightbox.setAttribute('aria-hidden','true');
    });
    lightbox.addEventListener('click', (e)=> { if(e.target===lightbox){ lightbox.classList.remove('lb-open'); lightbox.setAttribute('aria-hidden','true'); }});
  }
});
