gsap.to(".contain2 h1", {
  transform: "translateX(-100%)",
  // scale: 2,
  scrollTrigger: {
    trigger: ".contain2",
    // markers: true,
    scroller: "body",
    start: "top 40%",
    end: "bottom 30%",
    scrub: 1,
  },
});
