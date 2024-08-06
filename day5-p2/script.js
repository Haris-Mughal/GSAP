var menuIco = document.querySelector("#nav i");
var cross = document.querySelector("#side i");

var logo = document.querySelector("#nav h2");
var menu = document.querySelector("#menu");
// var side = document.querySelector("#side");
// var li1 = document.querySelector("#side #li1");
// var li2 = document.querySelector("#side #li2");
// var li3 = document.querySelector("#side #li3");
// var li4 = document.querySelector("#side #li4");
// var li5 = document.querySelector("#side #li5");
// var closee = document.querySelector("#closee");

var tl = gsap.timeline();

tl.to("side", {
    right: 0,
    duration: 0.5,
});

tl.from("#side h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
});

tl.from("#side i", {
    opacity: 0,
});

tl.pause();

menuIco.addEventListener("click", function () {
    tl.play();
});

cross.addEventListener("click", function () {
    tl.reverse();
});

//

gsap.from(logo, {
    y: "-80px",
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
});

gsap.from(menu, {
    y: "-80px",
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
});

// menu.addEventListener("click", function () {
//     tl.to(side, {
//         right: 0,
//     });
//     // side.style.right = "0";
// });

// closee.addEventListener("click", function () {
//     tl.to(side, {
//         right: "-35%",
//     });
//     // side.style.right = "";
// });

// li1.addEventListener("mouseenter", function () {
//     gsap.to(li1, {
//         scale: 1.5,
//     });
// });
// li1.addEventListener("mouseleave", function () {
//     gsap.to(li1, {
//         scale: 1,
//     });
// });
// li2.addEventListener("mouseenter", function () {
//     gsap.to(li2, {
//         scale: 1.5,
//     });
// });
// li2.addEventListener("mouseleave", function () {
//     gsap.to(li2, {
//         scale: 1,
//     });
// });
// li3.addEventListener("mouseenter", function () {
//     gsap.to(li3, {
//         scale: 1.5,
//     });
// });
// li3.addEventListener("mouseleave", function () {
//     gsap.to(li3, {
//         scale: 1,
//     });
// });
// li4.addEventListener("mouseenter", function () {
//     gsap.to(li4, {
//         scale: 1.5,
//     });
// });
// li4.addEventListener("mouseleave", function () {
//     gsap.to(li4, {
//         scale: 1,
//     });
// });
// li5.addEventListener("mouseenter", function () {
//     gsap.to(li5, {
//         scale: 1.5,
//     });
// });
// li5.addEventListener("mouseleave", function () {
//     gsap.to(li5, {
//         scale: 1,
//     });
// });
