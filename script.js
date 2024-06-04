const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var tl = gsap.timeline();

tl.from(".containt h1", {
  y: 100,
  scale: 0,
  delay: 1,
  duration: 1,
});

tl.from("nav h3", {
  y: -100,
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 1,
});
