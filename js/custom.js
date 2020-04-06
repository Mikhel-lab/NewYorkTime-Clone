const slides = document.querySelectorAll("ul li.slide");
let currentSlide = 0;

let interval = setInterval (changeSlide, 5000);

function changeSlide(){
    slides[currentSlide].setAttribute("class", "slide");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].setAttribute("class", "slide active")
}

