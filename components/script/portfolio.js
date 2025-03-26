gsap.registerPlugin(ScrollTrigger, SplitText); // Remove CustomEase

const heroSection = document.querySelector('.hero');
const parallaxTree = document.querySelector('.parallax-tree');
const parallaxCastle = document.querySelector('.parallax-castle');
const parallaxMountains = document.querySelector('.parallax-mountains');

const headerText = document.querySelector('.js-header-text');
const headerMenu = document.querySelector('.js-header-menu');
const subtitle = document.querySelector('.js-anim-subtitle');
const title = document.querySelector('.js-anim-title');
const desc = document.querySelector('.js-anim-desc');

// Replace CustomEase with GSAP's built-in easing functions
const parallaxEase = "power2.out"; // Example easing function
const customEase = "power3.out"; // Another example easing function

const fourtyFrames = 1.3333333;
const oneFrame = 0.0166666;
const fourFrames = 0.133333;

const titleLines = new SplitText(title, { type: "lines" }).lines;
const descChars = new SplitText(desc, { type: "lines, chars" }).lines;

gsap.set(parallaxTree, { y: '1.4rem' });
gsap.set(parallaxCastle, { y: '2.8rem' });
gsap.set(parallaxMountains, { y: '4.2rem' });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: heroSection,
    start: 'top top',
    end: 'bottom bottom-=15%',
    scrub: 1,
  },
});

const parallaxBase = { overwrite: true, ease: parallaxEase };

tl
  .to(parallaxTree, { y: 0, ...parallaxBase }, 0)
  .to(parallaxCastle, { y: 0, ...parallaxBase }, 0)
  .to(parallaxMountains, { y: 0, ...parallaxBase }, 0);

const showElements = () => {
  const timeline = gsap.timeline();
  
  const base = { duration: fourtyFrames, ease: customEase };
  
  timeline
    .fromTo(headerText, { autoAlpha: 0, y: '0.5rem' }, { autoAlpha: 1, y: 0, ...base}, 0)
    .fromTo(headerMenu, { autoAlpha: 0, y: '0.5rem' }, { autoAlpha: 1, y: 0, ...base}, fourFrames)
    .fromTo(subtitle, { autoAlpha: 0, y: '0.5rem' }, { autoAlpha: 1, y: 0, ...base}, fourFrames * 2)
    .fromTo(titleLines, { autoAlpha: 0, y: '0.5rem' }, { autoAlpha: 1, y: 0, ...base, stagger: fourFrames }, fourFrames * 3)
    .fromTo(descChars, { autoAlpha: 0, y: '0.5rem' }, { autoAlpha: 1, y: 0, ...base, stagger: fourFrames / 2 }, fourFrames * 3);
  
  return timeline;
}

document.addEventListener('DOMContentLoaded', () => {
  showElements();
});


// bg draw
console.clear();

	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
	
	//gsap.set('#thePoint', {rotation:-37, transformOrigin:'center'});
	gsap.set("#thePoint", { xPercent: -50, yPercent: -50 });
	
	var dir;
	
	//var scrollDist = 25;
	
	var map = document.getElementById("map"),
	  mapWidth = map.getBoundingClientRect().width,
	  mapHeight = map.getBoundingClientRect().height;
	
	gsap.set("#container", {
	  position: "fixed",
	  width: mapWidth,
	  height: mapHeight,
	  left: "50%",
	  xPercent: -50,
	  top: 0,
	  autoAlpha: 1
	});
	
	var staggerTimes = [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1];
	
	// gsap.set('#scrollDist', {
	//   width:'100%',
	//   height:() => window.innerHeight * (scrollDist + 3),
	// })
	
	var action = gsap
	  .timeline({
		defaults: { duration: 1, ease: "none" },
		scrollTrigger: {
		  trigger: ".pathforeground",
		  scrub: 0.3,
		  start: "top top",
		  end: "bottom +=220%",
		  markers: false,
		  onUpdate: (self) => {
			prog = self.progress.toFixed(2);
			console.log(prog);
		  } // new: info for position
		}
	  })
	  .to(".pathforeground", { drawSVG: "20%" }, { drawSVG: "0% 100%" }, 0)
	  .to(
		".pathbackground",
		{ drawSVG: "100%" },
		//{ drawSVG: "0% 100%" },
		0
	  )
	  .from(
		".stop",
		{
		  autoAlpha: 0,
		  y: "-=100",
		  duration: 0.005,
		  stagger: function (index) {
			return staggerTimes[index];
		  }
		},
		0
	  )
	  .from(
		"#thePoint",
		{
		  motionPath: {
			path: ".pathbackground",
			align: ".pathbackground",
			offsetX: 0,
			offsetY: 0
		  }
		},
		0
	  )
	
	  // To compensate for the 'faster' vertical movement, a logic could be defined that counteracts the position of the SVG. Here is a simple experiment adapted to certain sectors (a fixed width of the SVG!).
	
	  .to("#wrap", { y: "+=200", duration: 0.25 }, 0)
	  .to("#wrap", { y: "-=40", duration: 0.05 }, 0.4)
	  .to("#wrap", { y: "-=800", duration: 0.2 }, 0.5)
	  .to("#wrap", { y: "-=50", duration: 0.2 }, 0.6)
	  .to("#wrap", { y: "-=500", duration: 0.2 }, 0.8);
	// pofoinfo
  // Get the section element
const section = document.querySelector('.pofoinfo');

// Add the 'shrink' class to reduce size
section.classList.add('shrink');

// After a delay, add the 'scroll' class to enable scrolling
setTimeout(() => {
    section.classList.add('scroll');
}, 500); // Adjust delay as needed


// circle text scroll
function revealOnScroll() {
  const element = document.querySelector(".circle-text");
  const rect = element.getBoundingClientRect();
  
  if (rect.top < window.innerHeight * 0.75) {
      element.classList.add("show");
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// video freme 
// Show the frame when scrolling down
document.addEventListener("scroll", function() {
  const frame = document.getElementById("frame");
  const position = frame.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight - 50) {
      frame.classList.add("show");
  }
});        // Scroll Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}

// Set up observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Select elements to observe
document.querySelectorAll('.circle-text, .frame-container').forEach(el => {
    observer.observe(el);
});

// text zoom
document.addEventListener("scroll", function () {
  let textSection = document.querySelector(".text-section");
  let zoomText = document.querySelector(".zoom-text");
  let sectionTop = textSection.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  // If the text section is in view, show text
  if (sectionTop < windowHeight * 0.7) {
      zoomText.classList.add("visible");
  } else {
      zoomText.classList.remove("visible");
  }
});
// text-hover-link
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});
// and draw text
// Switch between drawing and un-drawing
setInterval(() => {
  const borderEl = document.querySelector('#border')
  borderEl.classList.toggle('is-undrawn')
  borderEl.classList.toggle('is-drawn')
}, 3000)

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".handdraw-text");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show"); // Add animation on scroll down
          } else {
              entry.target.classList.remove("show"); // Remove animation when scrolling back up
          }
      });
  }, { threshold: 0.2 });

  sections.forEach((section) => observer.observe(section));
});
// animi text
// ------- Osmo [https://osmo.supply/] ------- //

document.addEventListener('DOMContentLoaded', function() {
	const wordList = document.querySelector('[data-looping-words-list]');
	const words = Array.from(wordList.children);
	const totalWords = words.length;
	const wordHeight = 100 / totalWords; // Offset as a percentage
	const edgeElement = document.querySelector('[data-looping-words-selector]');
	let currentIndex = 0;
	function updateEdgeWidth() {
	  const centerIndex = (currentIndex + 1) % totalWords;
	  const centerWord = words[centerIndex];
	  const centerWordWidth = centerWord.getBoundingClientRect().width;
	  const listWidth = wordList.getBoundingClientRect().width;
	  const percentageWidth = (centerWordWidth / listWidth) * 100;
	  gsap.to(edgeElement, {
		width: `${percentageWidth}%`,
		duration: 2.5,
		ease: 'Expo.easeOut',
	  });
	}
	function moveWords() {
	  currentIndex++;
	  gsap.to(wordList, {
		yPercent: -wordHeight * currentIndex,
		duration: 1.2,
		ease: 'elastic.out(1, 0.85)',
		onStart: updateEdgeWidth,
		onComplete: function() {
		  if (currentIndex >= totalWords - 3) {
			wordList.appendChild(wordList.children[0]);
			currentIndex--;
			gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
			words.push(words.shift());
		  }
		}
	  });
	}
	updateEdgeWidth();
	gsap.timeline({ repeat: -1, delay: 1 })
	  .call(moveWords)
	  .to({}, { duration: 2 })
	  .repeat(-1);
  });

//   intro video 


document.addEventListener('DOMContentLoaded', function () {
	gsap.registerPlugin(ScrollTrigger);

	gsap.to(".krown-intro-video", {
		scrollTrigger: {
			trigger: ".x__banner", // When previous section scrolls away
			start: "bottom center", // Animation starts when bottom of `.x__banner` reaches center of viewport
			end: "bottom top", // Ends when `.x__banner` moves out of view
			toggleActions: "play none none reverse", // Play when in view, reverse when out
		},
		x: "0%", // Moves video to normal position
		opacity: 1, // Fades in
		duration: 0.5,
		ease: "power3.out",
	});
});
// card ceo

document.addEventListener('DOMContentLoaded', function () {
	gsap.to(".founder-card .card-content", {
		scrollTrigger: {
			trigger: ".krown-intro-video",
			start: "bottom center", // Start animation when `.krown-intro-video` ends
			toggleActions: "play none none reverse",
		},
		x: "0%", // Slide into place
		opacity: 1,
		duration: 1.2,
		ease: "power3.out",
	});
});


