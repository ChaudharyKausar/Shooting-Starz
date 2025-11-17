

  // popup Video
  window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopup');
  const enterBtn = document.getElementById('enterSite');

  // Show popup on page load
  popup.style.display = 'flex';

  // Close popup on button clicks
  closeBtn.addEventListener('click', () => popup.style.display = 'none');
  enterBtn.addEventListener('click', () => popup.style.display = 'none');
});



// Select elements we'll need to manipulate
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

// Toggle mobile menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  // Toggle active class on hamburger and nav menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Add accessibility attributes
  const isExpanded = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isExpanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  // Toggle active class on hamburger and nav menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Add accessibility attributes
  const isExpanded = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isExpanded);
})})});

// Close mobile menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Only take action if hamburger menu is visible (mobile view)
    if (window.innerWidth <= 768) {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    }
  }});
});

// Add accessibility support
function addAccessibility() {
  // Add ARIA attributes to hamburger menu
  hamburger.setAttribute("aria-label", "Toggle navigation menu");
  hamburger.setAttribute("aria-expanded", false);
  hamburger.setAttribute("role", "button");
  hamburger.setAttribute("tabindex", "0");

  // Allow keyboard activation of hamburger menu
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hamburger.click();
    }
  });
}

// Initialize accessibility features
addAccessibility();



const heroBanner = document.getElementById("heroBanner");
  const hoverTexts = document.querySelectorAll(".hover-change");

  // Default background
  const defaultBg = "assets/img/Home Background Image.jpg";

  hoverTexts.forEach(span => {
    span.addEventListener("mouseenter", () => {
      const newBg = span.getAttribute("data-bg");
      heroBanner.style.backgroundImage = `url('${newBg}')`;
    });

    span.addEventListener("mouseleave", () => {
      heroBanner.style.backgroundImage = `url('${defaultBg}')`;
    });
  });



