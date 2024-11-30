let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let backButton = document.getElementById("back");

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};

let unAcceppClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};

seeMoreButtons.forEach((button) => {
  button.onclick = function (e) {
    e.stopPropagation(); // Prevent click or touch event propagation
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
    backButton.style.display = "block";
  };
});

backButton.onclick = function () {
  carousel.classList.remove("showDetail");
  backButton.style.display = "none";
};

// Add swipe functionality
let startX = 0;
let endX = 0;
let isTouching = false;

carousel.addEventListener("touchstart", (e) => {
  if (e.target.closest(".seeMore") || e.target.id === "back") return; // Ignore swipes on "See More" or "Back" button
  startX = e.touches[0].clientX;
  isTouching = true;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isTouching) return;
  endX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  if (!isTouching) return;
  isTouching = false;
  let diff = startX - endX;
  if (Math.abs(diff) > 50) {
    // Minimum swipe distance
    if (diff > 0) {
      // Swiped left
      showSlider("next");
    } else {
      // Swiped right
      showSlider("prev");
    }
  }
});
