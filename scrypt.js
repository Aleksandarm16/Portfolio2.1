gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".top-element", {
  y: "-50%",
  x: "-50%",
  opacity: "0",
  duration: 0.8,
  ease: Back.easeOut,
});
tl.from(
  ".bottom-element ",
  {
    y: "30%",
    x: "30%",
    opacity: "0",
    duration: 0.8,
    ease: Back.easeOut,
  },
  "-=.5"
);
tl.from(".stagger1", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
  ease: Back.easeOut,
  duration: 1,
});
gsap.from(".transition1", {
  scrollTrigger: {
    trigger: ".transition1",
    start: "bottom bottom",
  },
  x: 150,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});
gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "bottom bottom",
  },
  x: 150,
  opacity: 0,
  duration: 1.2,
});
gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top bottom",
  },
  x: 150,
  opacity: 0,
  duration: 1.2,
});
