const slider = document.querySelector('.p2p-page-html-slider-div .slider');
const slides = slider.children;
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

slider.addEventListener('click', e => {
  if (e.target.classList.contains('next')) {
    nextSlide();
  } else if (e.target.classList.contains('prev')) {
    prevSlide();
  }
});

setInterval(nextSlide, 5000);
