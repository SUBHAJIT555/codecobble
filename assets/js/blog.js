const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});


function page3Animation(){
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
      });
    });
}
page3Animation();



function heroanimation() {
  var tl = gsap.timeline();
  tl.from("#center #right ", {
    x: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  });
  tl.from("#center #left", {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  });
  
}
heroanimation();

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
     
    });
}
swiperAnimation();

const burger = document.querySelector(".burger");
const navLinks = document.getElementById("navLinks");
const navLinksItems = document.querySelectorAll("#navLinks a");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Animate burger to X shape for open menu
  burger.classList.toggle("open");
});

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close the menu when a link is clicked
    navLinks.classList.remove("active");
    burger.classList.remove("open");
  });
});


// ------------------ 
