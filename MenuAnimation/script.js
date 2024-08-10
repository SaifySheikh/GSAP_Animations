let menu = document.querySelector(".menu");
let close = document.querySelector(".close");

var tl = gsap.timeline();

tl.to(".contain", {
  right: 0,
  duration: 0.8,
});

tl.to(".contain h3", {
  x: -80,
  stagger: 0.3,
  opacity: 1,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});


close.addEventListener("click", function () {
    tl.reverse();
  });