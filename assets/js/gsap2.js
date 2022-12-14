gsap.to(".header__inner", {
    y: 0,
    duration: 2,
    ease: "bounce.out",
});
// header
gsap.to("#section01 h1", {
    opacity: 1,
    duration: 2,
});

gsap.to("#section01 h1", {
    yPercent: -200,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble_effect01", {
    opacity: 1,
    duration: 2,
});
gsap.to(".bubble01", {
    xPercent: 50,
    yPercent: -100,
    opacity: 1,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble02", {
    xPercent: 200,
    yPercent: -500,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble03", {
    xPercent: -200,
    yPercent: -500,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble04", {
    xPercent: -200,
    yPercent: -450,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble05", {
    xPercent: 200,
    yPercent: -350,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble06", {
    xPercent: 300,
    yPercent: -500,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});

gsap.to(".bubble07", {
    xPercent: -60,
    yPercent: -150,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble08", {
    xPercent: -50,
    yPercent: -200,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble09", {
    xPercent: 400,
    yPercent: -300,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble10", {
    xPercent: -100,
    yPercent: -200,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble11", {
    xPercent: 150,
    yPercent: -300,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble12", {
    xPercent: 100,
    yPercent: -400,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.from(".rocket__body", {
    y: 150,
    duration: 1.5,
    ease: "power1.inOut",
    stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true,
    },
});

ScrollTrigger.create({
    trigger: ".rocket",
    animation: gsap.fromTo(".profile", { scale: 0 }, { scale: 1 }),
    start: "40%",
    end: "60%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".profile", {
    yPercent: 100,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
ScrollTrigger.create({
    trigger: ".rocket",
    animation: gsap.fromTo(".sub_profile_01", { scale: 0 }, { scale: 1 }),
    start: "80%",
    end: "20%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".sub_profile_01", {
    yPercent: 100,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
ScrollTrigger.create({
    trigger: ".rocket",
    animation: gsap.fromTo(".sub_profile_02", { scale: 0 }, { scale: 1 }),
    start: "100%",
    end: "0%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".sub_profile_02", {
    yPercent: 100,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
ScrollTrigger.create({
    trigger: ".sub_profile_02",
    animation: gsap.fromTo(".sub_profile_03", { scale: 0 }, { scale: 1 }),
    start: "0%",
    end: "100%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".sub_profile_03", {
    yPercent: 100,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
ScrollTrigger.create({
    trigger: ".rocket",
    animation: gsap.fromTo(".aboutMe", { scale: 0 }, { scale: 1 }),
    start: "60%",
    end: "40%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".aboutMe", {
    yPercent: 50,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
ScrollTrigger.create({
    trigger: ".rocket",
    animation: gsap.fromTo(".passion", { scale: 0 }, { scale: 1 }),
    start: "100%",
    end: "0%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".passion", {
    yPercent: 50,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
ScrollTrigger.create({
    trigger: ".sub_profile_01",
    animation: gsap.fromTo(".try", { scale: 0 }, { scale: 1 }),
    start: "100%",
    end: "0%",
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    // markers: true,
});
gsap.to(".try", {
    yPercent: 50,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble13", {
    xPercent: -100,
    yPercent: -50,
    opacity: 1,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble14", {
    xPercent: -100,
    yPercent: -500,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble15", {
    xPercent: -200,
    yPercent: -500,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble16", {
    xPercent: -200,
    yPercent: -450,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble17", {
    xPercent: 200,
    yPercent: -350,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble18", {
    xPercent: 300,
    yPercent: -500,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});

gsap.to(".bubble19", {
    xPercent: -60,
    yPercent: -150,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble20", {
    xPercent: -50,
    yPercent: -200,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble21", {
    xPercent: 400,
    yPercent: -300,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble22", {
    xPercent: -100,
    yPercent: -200,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble23", {
    xPercent: 150,
    yPercent: -300,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
gsap.to(".bubble24", {
    xPercent: 100,
    yPercent: -400,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
    },
});
// aboutMe

gsap.from(".bg_sun_circle", {
    transformOrigin: "50% 50%",
    rotate: 180,
    duration: 10,
    stagger: {
        each: 0.5,
        yoyo: true,
        repeat: -1,
    },
});

gsap.to(".bg_sun", {
    transformOrigin: "50% 50%",
    rotation: 30,
    scrollTrigger: {
        trigger: ".point",
        yoyo: true,
        repeat: -1,
        start: "0%",
        end: "80%",
        scrub: true,
        // markers: true,
    },
});

// 글씨 쪼개기(다중이)
document.querySelectorAll(".split").forEach((text) => {
    let splitText = text.innerText;
    let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
    splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
    text.innerHTML = splitWrap;
    text.setAttribute("aria-label", splitText);
});

gsap.from(".webstandard_title span", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".sun",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});

gsap.from(".responsive_title span", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".webstandard",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".react_title span", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".responsive",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".vue_title span", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".react",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".php_title span", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".vue",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
// sitework
