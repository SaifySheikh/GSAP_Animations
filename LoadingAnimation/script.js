var tl = gsap.timeline();

gsap.from(".firstSec h1", {
  x: 550,
  opacity: 0,
  duration: 2,
});

gsap.from(".secondSec h3", {
  x: -550,
  opacity: 0,
  duration: 2,
});

setTimeout(function(){
    gsap.to(".firstSec h1", {
        x: -1000,
        opacity: 0,
        duration: 2,
      });
      
      gsap.to(".secondSec h3", {
        x: 1000,
        opacity: 0,
        duration: 2,
      });
      
      gsap.to(".firstSec", {
        y: -500,
        display: "none",
        delay: 1.5,
        duration: 2
      });
      
      gsap.to(".secondSec", {
        y: 500,
        display: "none",
        delay: 1.5,
        duration: 2

      });
}, 3000)


