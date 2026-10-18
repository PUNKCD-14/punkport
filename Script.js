const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

function closeMenu() {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Close the menu after tapping a link or scrolling
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
window.addEventListener("scroll", closeMenu);
