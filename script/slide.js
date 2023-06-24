

document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot1");

    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  }

  // Adicione event listeners aos botões
  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");
  prevButton.addEventListener("click", function() {
    plusSlides(-1);
  });
  nextButton.addEventListener("click", function() {
    plusSlides(1);
  });

  // Adicione event listeners aos pontos/círculos
  let dots = document.getElementsByClassName("dot1");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      currentSlide(i);
    });
  }
});

