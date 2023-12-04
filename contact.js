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


const navLi = document.querySelectorAll("nav li a")
const navToggle = document.querySelector("#nav-toggle")
const coverCont = document.querySelector(".cover")

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