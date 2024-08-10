const h1Text = "Animation"


  const splitText = h1Text.split("");
  console.log(splitText);

  let cluster = "";

  splitText.forEach(function (elem) {
    cluster += `<span class="a">${elem}</span>`;
  });

  document.querySelector("h1").innerHTML = cluster;



gsap.from("h1 span", {
    y: 150,
    duration: 3,
    stagger: 0.1,
    opacity: 0
})