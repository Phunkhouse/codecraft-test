const button = document.getElementById("button123");
const mobileNav = document.getElementById("mobileNav");
let isOpen = false;

function handleClick() {
  if (isOpen === false) {
    button.classList.add("open");
    mobileNav.classList.add("open");
    isOpen = true;
  } else {
    button.classList.remove("open");
    mobileNav.classList.remove("open");
    isOpen = false;
  }
}

function handleMenuLinkClick() {
  button.classList.remove("open");
  mobileNav.classList.remove("open");
  isOpen = false;
}

button.addEventListener("click", handleClick);

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", handleMenuLinkClick);
});

const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

function handleAccordionClick(e) {
  const accordions = document.querySelectorAll('[data-accordion="wrapper"]');
  accordions.forEach((accordion) => {
    accordion.setAttribute("data-accordion-state", "closed");
  });

  const trigger = e.target;
  const wrapper = trigger.closest('[data-accordion="wrapper"]');

  if (wrapper.getAttribute("data-accordion-state") === "closed") {
    wrapper.setAttribute("data-accordion-state", "open");
  } else {
    wrapper.setAttribute("data-accordion-state", "closed");
  }
}

const accordions = document.querySelectorAll('[data-accordion="trigger"]');

accordions.forEach((accordion) => {
  accordion.addEventListener("click", handleAccordionClick);
});
