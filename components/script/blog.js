
gsap.registerPlugin(CustomEase);

const customEaseIn = CustomEase.create('custom-ease-in', '0.52, 0.00, 0.48, 1.00');
const fourtyFrames = 1.3333333;
const fiftyFrames = 1.66666;
const twoFrames = 0.666666;
const fourFrames = 0.133333;
const sixFrames = 0.2;

const video = document.querySelector('.hero-video');
const header = document.querySelector('.header');
const book = document.querySelector('.first-desc span');
const open = document.querySelector('.second-desc span');
const copy = document.querySelector('.copyright span');
const scrollToRows = document.querySelectorAll('.scroll-to .scroll-to__row span');
const btnCircle = document.querySelector('.book-btn__circle');
const btnText = document.querySelector('.btn-text span');
const eve = document.querySelector('#eve span');
const ry = document.querySelector('#ry span');
const fo = document.querySelector('#fo span');
const ssil = document.querySelector('#ssil span');
const tells = document.querySelector('#tells span');
const a = document.querySelector('#a span');
const st = document.querySelector('#st span');
const ory = document.querySelector('#ory span');

const showElements = () => {
  const timeline = gsap.timeline();
  timeline
        .fromTo(btnCircle, { autoAlpha: 0 }, { autoAlpha: 1, duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(btnCircle, { scale: 0.417 }, { scale: 1, duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(header, {y: '-0.5rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(eve, {x: '2.7rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, 0)
        .fromTo(book, {y: '0.5rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(fo, {x: '2.1rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(a, {x: '-1.2rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(ory, {x: '-3.2rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(open, {y: '0.3rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(btnText, {y: '0.4rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(ry, {x: '-2rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(ssil, {x: '-3.1rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(tells, {x: '4.3rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(st, {x: '1.9rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(copy, {y: '0.4rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(scrollToRows, {y: '0.5rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, sixFrames);
  
  return timeline;
}

const hideElements = () => {
  const timeline = gsap.timeline();
  
  timeline
        .fromTo(copy, {y: '0rem'}, {y: '0.4rem', duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(scrollToRows, {y: '0rem'}, {y: '0.5rem', duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(open, {y: '0rem'}, {y: '0.3rem', duration: fourtyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(btnText, {y: '0rem'}, {y: '0.4rem', duration: fourtyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(ry, {x: '0rem'}, { x: '-2rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(ssil, {x: '0rem'}, { x: '-3.1rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(tells, {x: '0rem'}, { x: '4.3rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(st, {x: '0rem'}, { x: '1.9rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(book, {y: '0rem'}, {y: '0.5rem', duration: fourtyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(fo, {x: '0rem'}, { x: '2.1rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(a, {x: '0rem'}, { x: '-1.2rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(ory, {x: '0rem'}, { x: '-3.2rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(btnCircle, { autoAlpha: 1 }, { autoAlpha: 0, duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(btnCircle, { scale: 1 }, { scale: 0.417, duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(header, {y: '0rem'}, {y: '-100%', duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(eve, {x: '0rem'}, { x: '2.7rem', duration: fiftyFrames, ease: customEaseIn}, sixFrames);
  
  return timeline;
}


  // hover gallay 
  
        // ------- Osmo [https://osmo.supply/] ------- //

gsap.registerPlugin(CustomEase, Flip)
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1")

gsap.defaults({
  ease:"osmo-ease",
  duration: 0.725
})

document.addEventListener("DOMContentLoaded", () => {
  
  const listItems = document.querySelectorAll(".main-title__item");
  const imageItems = document.querySelectorAll(".main-img__item");
  const overlayItems = document.querySelectorAll(".overlay-item");
  const overlayNav = document.querySelector(".overlay-nav");
  const navItems = document.querySelectorAll("[data-overlay='nav-item']");
  const closeButton = document.querySelector("[data-overlay='close']");
  const headings = document.querySelectorAll(".main-title")
  
  let activeListItem = null;
  
  function openOverlay(index) {
    // Set active class to the clicked list item
    listItems.forEach(item => item.classList.remove("active"));
    activeListItem = listItems[index];
    activeListItem.classList.add("active");

    // Record the state of the title
    const title = activeListItem.querySelector(".main-title");
    const titleState = Flip.getState(title, {props: "fontSize"});

    // Record the state of the image
    const image = imageItems[index].querySelector(".image");
    const imageState = Flip.getState(image);

    // Show the overlay and get elements for animation
    const overlayItem = overlayItems[index];
    const content = overlayItem.querySelector(".overlay-row")
    
    gsap.set(overlayItem,{display: "block", autoAlpha:110 })
    gsap.fromTo(content,{autoAlpha:0},{autoAlpha:1, delay: 0.5})

    const textTarget = overlayItem.querySelector("[data-overlay='text-target']");
    const imgTarget = overlayItem.querySelector("[data-overlay='img-target']");

    // Append the elements to overlay targets
    textTarget.appendChild(title);
    imgTarget.appendChild(image);

    // Animate with GSAP Flip
    Flip.from(titleState);
    Flip.from(imageState);
    

    gsap.set(overlayNav,{display: "flex" })
    gsap.fromTo(navItems, {
      yPercent: 110,
      },{
      yPercent: 0,
      stagger: 0.1,
    });
    
    gsap.set(imageItems,{ autoAlpha: 0})
    
    listItems.forEach((listItem, i) => {
      if (i !== index) {
        const otherTitle = listItem.querySelector(".main-title");
        gsap.to(otherTitle, { yPercent: 100, autoAlpha: 0, duration:0.45, delay: 0.2 - i * 0.05});
      }
    });

  }

  // Function to close overlay
  function closeOverlay() {
    
   if (!activeListItem) return;

    // Find active overlay
    const index = Array.from(listItems).indexOf(activeListItem);
    const overlayItem = overlayItems[index];
    const title = overlayItem.querySelector("[data-overlay='text-target'] .main-title");
    const image = overlayItem.querySelector("[data-overlay='img-target'] .image");
    const overlayContent = overlayItem.querySelector(".overlay-row");

    // Record the state of title and image in overlay
    const titleState = Flip.getState(title, { props: "fontSize" });
    const imageState = Flip.getState(image);

    // Reset overlay display and move elements back to their original containers
    gsap.to(navItems, { yPercent: 110, onComplete: () => { overlayNav.style.display = "none"; } });
    gsap.to(overlayContent, { autoAlpha: 0, onComplete: () => { overlayItem.style.display = "none"; } });

    activeListItem.querySelector(".button").appendChild(title);
    imageItems[index].appendChild(image);
    gsap.set(imageItems[index],{autoAlpha:1})

    // Animate elements back with GSAP Flip
    Flip.from(titleState);
    Flip.from(imageState);

    // Remove active class
    activeListItem.classList.remove("active");
    activeListItem = null;

    gsap.to(headings, { yPercent: 0, autoAlpha: 1, delay: 0.3, stagger: 0.05 });

}

  // Add click event listeners to list items
  listItems.forEach((listItem, index) => {
    listItem.addEventListener("click", () => openOverlay(index));
  });

  // Close overlay on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });

  // Close overlay on close button click
  closeButton.addEventListener("click", closeOverlay);


	// Show corresponding image on hover of a list item, based on index
  listItems.forEach((listItem, i) => {
    listItem.addEventListener("mouseenter", () => {
      gsap.set(imageItems,{autoAlpha: 0}) // hide all
      gsap.set(imageItems[i],{autoAlpha: 1}) // show image with matching index
    })   
  })

  
})
