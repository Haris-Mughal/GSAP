var tl = gsap.timeline();

tl.to("#box1", {
  x: 700,
  duration: 1,
  delay: 1,
  rotate: 270,
  backgroundColor: "green",
  borderRadius: "30%",
  repeat: -1,
  yoyo: true,
});

tl.from("#box2", {
  x: 700,
  // y: 200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "crimson",
  borderRadius: "50%",
});

tl.from("h1", {
  y: 30,
  color: "red",
  duration: 1,
  delay: 1,
  stagger: 0.3,
});

tl.from("h2", {
  y: 30,
  opacity: 0,
  color: "green",
  duration: 1,
  delay: 1,
});
