const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

// DRY adding class to trigger animation
function addingSlideInAnimation(elements, inOrOut) {
  elements.forEach((element, index) => {
    element.classList.add(`slide-${inOrOut}-${index + 1}`);
  });
}
// DRY remove class to trigger animation
function removingSlideInAnimation(elements, inOurOut) {
  elements.forEach((element, index) => {
    element.classList.remove(`slide-${inOurOut}-${index + 1}`);
  });
}

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");
    nav1.classList.add("slide-in-1");
    addingSlideInAnimation([nav1, nav2, nav3, nav4, nav5], "in");
    removingSlideInAnimation([nav1, nav2, nav3, nav4, nav5], "out");
  } else {
    overlay.classList.remove("overlay-slide-right");
    overlay.classList.add("overlay-slide-left");
    addingSlideInAnimation([nav1, nav2, nav3, nav4, nav5], "out");
    removingSlideInAnimation([nav1, nav2, nav3, nav4, nav5], "in");
  }
}

// Event listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
