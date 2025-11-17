// script.js
const slides = document.querySelectorAll('.hero-carousel img');
let index = 0;


function nextSlide() {
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
}


setInterval(nextSlide, 3500);


let index = 0;
const slides = document.querySelectorAll('.hero-carousel img');
setInterval(() => {
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
}, 3000);
