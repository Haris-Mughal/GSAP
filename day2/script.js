gsap.from("#page1 #box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
  backgroundColor: "orange",

  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    start: "top 50%",
    markers: true,
    scrub: 2,
  },
});

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
