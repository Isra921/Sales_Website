let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const text = document.querySelectorAll(".text");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function showText(index) {
  text.forEach((text, i) => {
    text.classList.remove("active");
    if (i === index) {
      text.classList.add("active");
    }
  });
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
  showText(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
  showText(currentSlide);
});

// Cambio automático cada 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
  showText(currentSlide);
}, 5000);

// Mostrar el primer slide al cargar
showSlide(currentSlide);
showText(currentSlide);
