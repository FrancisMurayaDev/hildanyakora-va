const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll(".reveal");

const toggleMenu = () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
};

const closeMenu = () => {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("active");
};

const handleHeaderScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
};

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < window.innerHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  handleHeaderScroll();
  revealOnScroll();
});

window.addEventListener("load", revealOnScroll);

// FAQ toggle
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
