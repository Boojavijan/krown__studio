const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});
// hover gallay 
/*
 * Ham menu *
 */
// Select Element
const app = document.querySelector("#app");
const hamMenu = document.querySelector(".ham-menu-icon");
let projectSelected = app.querySelector('li[data-selected="true"]');

// Event handlers
function openMenu() {
  let appState = app.dataset.menuOpen;
  if (appState) {
    app.removeAttribute("data-menu-open");
  } else {
    app.dataset.menuOpen = true;
  }
}

// Event Listeners
hamMenu.addEventListener("click", openMenu);

/*
 * List selection
 */
// Select Element
const list = document.querySelector("#projects-list ul");
const listItem = Array.from(list.querySelectorAll("#projects-list ul li"));
const galleryImgs = document.querySelectorAll("#projects-gallery img");

// Event handlers
function toggleListItem(e) {
  const target = e.target.closest("li");
  if (target.dataset.selected) {
    return;
  } else {
    listItem.forEach((item) => item.removeAttribute("data-selected"));
  }

  target.dataset.selected = true;

  // Restore the selected target as "projectSelected"
  projectSelected = target;
}

function setAppBackground() {
  const imageSelected = [...galleryImgs].find((image) =>
    image.attributes.getNamedItem("data-selected")
  );
  const imageSrc = imageSelected.src;
  const imageColor = imageSelected.dataset.colorized;
  // console.log(imageSrc)

  //Set Properties
  app.style.setProperty("--colorize", `${imageColor}`);
  app.style.setProperty("--image-cover", `url(${imageSrc})`);
}

function selectImage(target) {
  // Detect the target index on the ul list
  let index = listItem.findIndex((li) => li === target);

  // Check if selected
  if (galleryImgs.childElementCount === index) {
    return;
  } else {
    galleryImgs.forEach((image) => image.removeAttribute("data-selected"));
    galleryImgs[index].dataset.selected = true;
  }

  setAppBackground();
}

function showGallery(e) {
  const target = e.target.closest("li");
  selectImage(target);
}

function returGallery() {
  const target = projectSelected;
  selectImage(target);
}

// Event Listeners
list.addEventListener("click", toggleListItem);
list.addEventListener("mouseover", showGallery);
list.addEventListener("mouseleave", returGallery);
