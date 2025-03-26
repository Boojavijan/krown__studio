gsap.registerPlugin(Draggable, InertiaPlugin);

// On load
window.onload = () => {
	//Lazyload
	new LazyLoad({
		threshold: 40
	});

	//Remove preload
	document.documentElement.classList.remove("preload");
};

//Lazyload Cart image
const lazy = new LazyLoad({
	elements_selector: ".cart-empty-image img",
	threshold: 250,

	callback_loaded: (element) => {
		//Fade In Elements
		gsap.fromTo(
			".anim",
			{ scale: 0.88, opacity: 0.001 },
			{
				stagger: 0.13,
				opacity: 1,
				scale: 1,
				duration: 1.8,
				delay: 0.4,
				ease: "power3.out"
			}
		);
	}
});

// Settings
let MIN_ANGLE = 2;
let ANGLE = 2;
let DIRECTION = -1;
let GRAVITY = 12;

// Swing GSAP Animation
const cart = document.querySelector(".cart-empty-image");
let swingAnimation;
let swingTimeout;

// Start Swing Animation
function startSwing() {
	swingAnimation = gsap.to(cart, {
		rotation: DIRECTION * ANGLE,
		duration: 2 + ANGLE / 70,
		ease: "power1.inOut",
		onComplete: () => {
			ANGLE = Math.max(ANGLE - GRAVITY, MIN_ANGLE);
			DIRECTION *= -1;
			startSwing();
		}
	});
}
startSwing();

// Make Rope Draggable
const draggable = Draggable.create(cart, {
	type: "rotation",
	inertia: true,
	bounds: { minRotation: -65, maxRotation: 65 },
	dragResistance: 0.4,
	minDuration: 0.2,
	maxDuration: 1,
	edgeResistance: 1,
	onDragStart: function () {
		swingAnimation.kill();
		clearTimeout(swingTimeout);
	},
	onRelease: function () {
		// If you thow downwards
		let velocity = InertiaPlugin.getVelocity(cart, "rotation");
		if (
			velocity * this.rotation <= 0 > 0 &&
			Math.sign(this.rotation) == Math.sign(this.endRotation)
		) {
			//D isable Inertia Momentary
			draggable[0].disable().enable();

			// Update direction + angle
			DIRECTION = this.rotation >= 0 ? -1 : 1;
			ANGLE = Math.max(Math.abs(this.rotation) - GRAVITY, MIN_ANGLE);

			// Animate with ease out and faster going down
			swingAnimation = gsap.to(cart, {
				rotation: DIRECTION * ANGLE,
				duration: 2 - Math.abs(velocity) / 240,
				ease: "power1.out",
				onComplete: () => {
					DIRECTION *= -1;
					startSwing();
				}
			});
			return;
		}

		// Wait for inertia to finish and animate next swing
		let duration = this.tween?.duration() * 920;
		swingTimeout = setTimeout(() => {
			DIRECTION = this.rotation >= 0 ? -1 : 1;
			ANGLE = Math.max(Math.abs(this.rotation) - GRAVITY, MIN_ANGLE);
			startSwing();
		}, duration);
	}
});

//On Desktop
if (!isMobile()) {
	//DOM Elements
	const starOne = document.querySelector(".star.one");
	const starTwo = document.querySelector(".star.two");

	//On mouse move
	window.addEventListener(
		"mousemove",
		throttle((e) => {
			//Get Rects
			const starOneRect = starOne.getBoundingClientRect();
			const starTwoRect = starTwo.getBoundingClientRect();

			//Distances to mouse
			const distanceStarOneX = e.clientX - starOneRect.left;
			const distanceStarOneY = e.clientY - starOneRect.top;
			const distanceStarTwoX = e.clientX - starTwoRect.left;
			const distanceStarTwoY = e.clientY - starTwoRect.top;

			//Star One
			gsap.to(starOne, {
				x: distanceStarOneX / 60,
				y: distanceStarOneY / 60,
				rotation: 30 - distanceStarOneX / 20,
				duration: 2
			});

			//Star Two
			gsap.to(starTwo, {
				x: distanceStarTwoX / 50,
				y: distanceStarTwoY / 50,
				rotation: -distanceStarTwoX / 10,
				duration: 2.5
			});
		}, 24)
	);
}

// Throttle
function throttle(func, limit) {
	let inThrottle;
	return function () {
		const args = arguments,
			context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

//Check if is Mobile
function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
}
