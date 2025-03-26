// TypeScript
var typing = new Typed(".text", {
    strings: ["", "Branding", "Designing"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
  });
  
  // GSAP
  gsap.registerPlugin(ScrollTrigger);
  const introsplitTypes = document.querySelectorAll(".left-part h1");
  introsplitTypes.forEach((char, i) => {
    const i_text = new SplitType(char);
    gsap.to(i_text.chars, {
      y: 0,
      stagger: 0.08, // text splitting transition
      duration: 0.3 // full text duration
    });
  });
//   see more
// Add animation on scroll
const imageWrappers = document.querySelectorAll('.image-wrapper');
const leftImages = document.querySelector('.left-images');
const rightContent = document.querySelector('.right-content');
const circles = document.querySelectorAll('.small-circles .circle');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

// Observe first 4 images
imageWrappers.forEach(wrapper => {
  observer.observe(wrapper);
});

// Observe left and right sections
observer.observe(leftImages);
observer.observe(rightContent);

// Observe small circles
circles.forEach(circle => {
  observer.observe(circle);
});