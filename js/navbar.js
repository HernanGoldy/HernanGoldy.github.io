const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar-menu_visible");
});