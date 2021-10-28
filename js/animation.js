gsap.registerPlugin(ScrollTrigger);

// ----- Animaciones products.html -----
gsap.from(".animate_right1", {
    x: 1100,
    duration: 2,
    scrollTrigger: {
        trigger: ".animate_right1",
    }
});
gsap.from(".img_animate_left1", {
    x: -200, duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".img_animate_left1",
    }
});
gsap.from(".animate_left1", {
    x: -1100,
    duration: 2,
    scrollTrigger: {
        trigger: ".animate_left1",
        start: "top 65%"
    }
});
gsap.from(".img_animate_right1", {
    x: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".img_animate_right1",
        start: "top 65%",
    }
});

gsap.from(".animate_right2", {
    x: 1100,
    duration: 2,
    scrollTrigger: {
        trigger: ".animate_right2",
        start: "top 65%",
    }
});
gsap.from(".img_animate_left2", {
    x: -200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".img_animate_left2",
        start: "top 65%",
    }
});
gsap.from(".animate_left2", {
    x: -1100,
    duration: 2,
    scrollTrigger: {
        trigger: ".animate_left2",
        start: "top 65%",
    }
});
gsap.from(".img_animate_right2", {
    x: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".img_animate_right2",
        start: "top 65%",
    }
});


// ----- Animaciones index.html -----
gsap.from(".img-grupo__b", {
    y: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".img-grupo__b",
        start: "top 95%",
    }
});
gsap.from(".img-grupo__c", {
    y: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".img-grupo__c",
        start: "top 95%"
    }
});


