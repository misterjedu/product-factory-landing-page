// Toggle the mobile nav bar.

document.querySelector(".mobile-menu").style.display = "none";

let mobileNav = document.querySelector(".mobile-menu");

document.querySelector(".menu-icon").addEventListener("click", function () {
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (
    e.target.className !== "div-burger" &&
    e.target.className !== "menu-icon" &&
    e.target.className !== "collapsible-nav-list"
  ) {
    mobileNav.style.display = "none";
  }
});
