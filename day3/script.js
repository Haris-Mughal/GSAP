var initialPath = `M 10 150 Q 500 150 990 150`;

var string = document.querySelector("#string");

string.addEventListener("mouseout", function (e) {
  path = `M 10 150 Q ${e.x} ${e.y} 990 150`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: {
      d: initialPath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
