var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.6,
    });
});

image.addEventListener("mouseenter", function () {
    cursor.innerHTML = "See More";
    gsap.to(image, {
        scale: 1.2,
        duration: 0.5,
    });
    gsap.to(cursor, {
        scale: 2,
        duration: 0.5,
        backgroundColor: "#ffffff8a",
    });
});
image.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    cursor.style.backgroundColor = "";
    gsap.to(image, {
        scale: 1,
        duration: 0.5,
    });
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        backgroundColor: "",
    });
});
