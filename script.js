// 1. Initial Setup
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const navLi = document.querySelectorAll("nav li a")
const navToggle = document.querySelector("#nav-toggle")
const coverCont = document.querySelector(".cover")

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// 2. Utility Functions
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

// 3. Autoplay Functionality
let currentIndex = 0;

function moveToNextSlide() {
    const currentSlide = slides[currentIndex];
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = dots[nextIndex];

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    currentIndex = nextIndex;
}

function startAutoplay() {
    setInterval(moveToNextSlide, 7000);  // Change slide every 5 seconds.
}

startAutoplay();

// 4. Navigation via Dots
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});


for(i=0; i<navLi.length; i++){
    navLi[i].addEventListener("click", function(){
      navToggle.checked = false
      coverCont.classList.toggle("covering")
    })
}

//hamburger function
navToggle.addEventListener("click", function(){
    coverCont.classList.toggle("covering")
})

// on scroll function

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});