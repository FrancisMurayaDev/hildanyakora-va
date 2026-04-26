const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

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
  document.querySelectorAll(".reveal").forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 120) {
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

const counters = document.querySelectorAll(".counter");

const runCounters = () => {
  counters.forEach((counter) => {
    if (counter.dataset.counted === "true") return;

    const counterTop = counter.getBoundingClientRect().top;

    if (counterTop < window.innerHeight - 100) {
      counter.dataset.counted = "true";

      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 80));

      const updateCounter = () => {
        current += increment;

        if (current >= target) {
          counter.textContent = target;
          return;
        }

        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      };

      updateCounter();
    }
  });
};

window.addEventListener("scroll", runCounters);
window.addEventListener("load", runCounters);
