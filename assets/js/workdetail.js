

// Load More functionality
const boxes = document.getElementsByClassName("work-details-container");
const loadBtn = document.getElementById("load-more-btn");

let count = 2;
console.log(count);

// Initial display for first set of boxes
for (let i = 0; i <= count && i < boxes.length; i++) {
  boxes[i].style.display = "flex";
}

// Load More button click event
loadBtn.addEventListener("click", function () {
  count += 3;

  for (let i = 0; i <= count && i < boxes.length; i++) {
    boxes[i].style.display = "flex";
  }

  // Hide button if all boxes are displayed
  if (count >= boxes.length - 1) {
    loadBtn.style.display = "none";
  }

  // Update Locomotive Scroll after displaying new content
  scroll.update();
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



// Create the custom cursor element
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// CSS for the custom cursor
const style = document.createElement("style");
style.innerHTML = `
  .custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    // background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
    z-index: 9999;
  }
  
  .hoverable {
    cursor: none; /* Hide the default cursor on hoverable elements */
  }
`;
document.head.appendChild(style);

// Track mouse position and update the custom cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Enlarge the cursor on hover over specific elements
document.querySelectorAll("a, button, .hoverable").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.width = "40px"; // Increase size
    cursor.style.height = "40px"; // Increase size
  });
  item.addEventListener("mouseleave", () => {
    cursor.style.width = "20px"; // Reset size
    cursor.style.height = "20px"; // Reset size
  });
});

// -------------------------------------------
