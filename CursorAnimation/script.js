let container = document.querySelector(".container");
let box = document.querySelector(".box");
let cursor = document.querySelector("#cursor");

container.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    ease: "back.out",
  });
});

container.addEventListener("mouseenter", function () {
  cursor.style.display = "block";
});

container.addEventListener("mouseleave", function () {
  cursor.style.display = "none";
});

box.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4
    })
});

box.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1
    })
});
