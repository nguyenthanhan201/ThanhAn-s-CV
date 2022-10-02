const flightPath = {
  curviness: 1.25,
  autoRotate: false,
  values: [
    // { x: 100, y: -20 },
    // { x: 300, y: 10 },
    // { x: 500, y: 100 },
    // { x: 750, y: -100 },
    // { x: 350, y: -50 },
    // { x: 600, y: 100 },
    // { x: 800, y: 0 },
    // { x: window.innerWidth, y: -150 },
    {
      x: (10 / 100) * window.innerWidth,
      y: -1 * ((2 / 100) * window.innerHeight),
    },
    {
      x: (30 / 100) * window.innerWidth,
      y: (1 / 100) * window.innerHeight,
    },
    { x: (50 / 100) * window.innerWidth, y: (10 / 100) * window.innerHeight },
    {
      x: (75 / 100) * window.innerWidth,
      y: -1 * (10 / 100) * window.innerHeight,
    },
    {
      x: (35 / 100) * window.innerWidth,
      y: -1 * (5 / 100) * window.innerHeight,
    },
    // {
    //   x: (60 / 100) * window.innerWidth,
    //   y: (10 / 100) * window.innerHeight,
    // },
    // {
    //   x: (80 / 100) * window.innerWidth,
    //   y: 0,
    // },
    { x: (10 / 100) * window.innerWidth, y: (10 / 100) * window.innerHeight },
    // { x: window.innerWidth, y: -150 },
  ],
};

// console.log(window.innerWidth);

const dissAppearPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    // { x: 100, y: -20 },
    // { x: 300, y: 10 },
    // { x: 500, y: 100 },
    // { x: 750, y: -100 },
    // { x: 350, y: -50 },
    // { x: 600, y: 100 },
    // { x: 800, y: 0 },
    // { x: window.innerWidth, y: -150 },
    // {
    //   x: (10 / 100) * window.innerWidth,
    //   y: -1 * ((2 / 100) * window.innerHeight),
    // },
    // {
    //   x: (30 / 100) * window.innerWidth,
    //   y: (1 / 100) * window.innerHeight,
    // },
    // { x: (50 / 100) * window.innerWidth, y: (10 / 100) * window.innerHeight },
    {
      x: (75 / 100) * window.innerWidth,
      y: -1 * (10 / 100) * window.innerHeight,
    },
    // {
    //   x: (35 / 100) * window.innerWidth,
    //   y: -1 * (5 / 100) * window.innerHeight,
    // },
    // // {
    // //   x: (60 / 100) * window.innerWidth,
    // //   y: (10 / 100) * window.innerHeight,
    // // },
    // // {
    // //   x: (80 / 100) * window.innerWidth,
    // //   y: 0,
    // // },
    // {
    //   x: (12 / 100) * window.innerWidth,
    //   y: -1 * ((2 / 100) * window.innerHeight),
    // },
    // { x: window.innerWidth, y: -150 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

tween.add(
  TweenLite.to(".scrollDown", 1, {
    bezier: dissAppearPath,
    ease: Power1.easeInOut,
  })
);

// TweenLite.to(".scrollDown", 1, {
//   bezier: flightPath,
//   ease: Power1.easeInOut,
// })

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1500,
  triggerHook: 0,
})
  .setTween(tween)
  .addIndicators()
  .setPin(".animation")
  .addTo(controller);
