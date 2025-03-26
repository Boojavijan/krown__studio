gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const inFrames = (frames, fps = 60) => {
    return frames / fps;
};

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});

const heightScreen = window.innerHeight;

const showFirstSection = () => {
  const splitTitle = new SplitText('.section-1__title');
  console.log(splitTitle.lines);
  gsap.timeline()
    .fromTo(
      splitTitle.lines, 
      { y: '1.96rem', autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: 'power2.out', duration: 0.833, stagger: inFrames(2) },
      0
    )
    .fromTo(
      '.section-1__desc', 
      { y: '1.96rem', autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: 'power2.out', duration: 0.833 },
      inFrames(4),
    )
    .fromTo(
      '.section-1__wilhelm', 
      { y: '1.96rem', autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: 'power2.out', duration: 0.833 },
      inFrames(6),
    );
}

document.addEventListener('DOMContentLoaded', () => {
  showFirstSection();
});

const splitSubTitle = new SplitText('.section-1__subtitle');
const firstSectionSubtitleTL = gsap.timeline();

firstSectionSubtitleTL.fromTo(splitSubTitle.lines, 
      { y: '0.5rem', autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: 'power3.out', duration: 0.667, stagger: 0.07 },
      0
    );

const firstSectionSubtitleTrigger = ScrollTrigger.create({
  trigger: '.section-1__subtitle',
  start: 'top bottom-=20%',
  end: 'bottom top+=20%',
  animation: firstSectionSubtitleTL,
});

const secondSectionInviewTl = gsap.timeline();

secondSectionInviewTl
  .fromTo(
    '.learn-more__item', 
    { y: '0.9rem', autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.667, stagger: 0.05, ease: 'power3.out' },
    0
  );

ScrollTrigger.create({
  trigger: '.section-2',
  start: 'top bottom-=20%',
  end: 'top top',
  animation: secondSectionInviewTl,
});

const thirdSectionInviewTl = gsap.timeline();
thirdSectionInviewTl.to('.section-2', {
  y: heightScreen,
  ease: 'none',
});

ScrollTrigger.create({
  trigger: '.section-3',
  start: 'top bottom',
  end: 'top top',
  scrub: true,
  animation: thirdSectionInviewTl,
});

const thirdSectionAnimationTl = gsap.timeline();
thirdSectionAnimationTl
  .fromTo(
    '.section-3__title', 
    { scale: 1.5, transformOrigin: 'top left'},
    { scale: 1 }
  )
  .fromTo('.section-3__item', { y: '4.8rem' }, { y: 0, stagger: 0.033 }, "<" );

ScrollTrigger.create({
  trigger: '.section-3',
  start: 'top bottom-=20%',
  end: 'bottom bottom-=20%',
  scrub: 1,
  animation: thirdSectionAnimationTl,
});

const fourthSectionAnimationTl = gsap.timeline();
fourthSectionAnimationTl
  .to('.section-4__title', { ease: 'none', left: '100vw', x: '-100%' }, inFrames(4))
  .to('.section-3 .container', { ease: 'none', right: '-50vw' }, '<')
  .to('.section-3', { opacity: 0 }, '<+=50%')
  .to('.tv img', { ease: 'none', scale: 1 })
  .to('.section-4', { ease: 'none', opacity: 0 }, '<');

ScrollTrigger.create({
  trigger: '.section-4',
  start: 'top top',
  end: `+=100vw`,
  scrub: true,
  pin: true,
  animation: fourthSectionAnimationTl,
});

const fifthSectionAnimation = gsap.timeline({ defaults: { ease: 'none' } });

fifthSectionAnimation
  .fromTo('.section-5__item:first-child', { scale: 20 }, { scale: 1 } )
  .fromTo('.section-5', { opacity: 0 }, { opacity: 1 }, '<' );

ScrollTrigger.create({
  trigger: '.section-5',
  start: 'top top',
  end: `+=${heightScreen * 5}`,
  scrub: true,
  pin: true,
  animation: fifthSectionAnimation,
});

[...document.querySelectorAll('.section-5__item')].forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: `top+=${heightScreen * 5} center`,
    end: `center+=${heightScreen * 5} center`,
    scrub: 1,
    onUpdate: () => {
      gsap.to('.section-5', { 
        background: i === 0 ? '#E0C0D9' : i === 1 ? '#D4E07D' : '#EEEBE4', 
        ease: 'none',
      });
    },
  });
});

const soundLink = "https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/wilhelm/scream.mp3";
const context = new window.AudioContext();

function playFile(filepath) {
  fetch(filepath)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      const soundSource = context.createBufferSource();
      soundSource.buffer = audioBuffer;
      soundSource.connect(context.destination);
      soundSource.start();
    });
}

document.querySelector(".play-button").addEventListener("click", function() {
  playFile(soundLink);
});
