const navLi = document.querySelectorAll("nav li a")
const navToggle = document.querySelector("#nav-toggle")
const coverCont = document.querySelector(".cover")


document.addEventListener("DOMContentLoaded", function() {
  var interval = 1000;
  var texts = ['.text1', '.text2', '.text3', '.text4', '.text5', '.text6'];

  setInterval(function(){
    texts.forEach(function(selector, index) {
      setTimeout(function() {
          var element = document.querySelector(selector);
          if (element) {
              element.classList.add('animate');
          }
      }, interval * (index + 1));
  });

  texts.forEach(function(selector, index) {
    setTimeout(function() {
        var element = document.querySelector(selector);
        if (element) {
            element.classList.remove('animate');
        }
    }, 2000 * (index + 1));
  });
  },13000)
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
