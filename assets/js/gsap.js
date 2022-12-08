gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    smooth: true,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// lenis 효과

window.onload = function () {
    const tl = new TimelineLite({ delay: 2 });
    tl.to(".header__menu", {
        delay: -1,
        xPercent: 100,
        opacity: 1,
        duration: 1,
    })
        .set(".header__menu ul li", {
            opacity: 0,
        })
        .to(".header__menu ul li", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "bounce.out",
        });
};
// header

// 글씨 쪼개기(다중이)
document.querySelectorAll(".split").forEach((text) => {
    let splitText = text.innerText;
    let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
    splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
    text.innerHTML = splitWrap;
    text.setAttribute("aria-label", splitText);
});

gsap.from(".title span", {
    yPercent: -300,
    scale: 0,
    delay: 3.3,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "bounce.out",
});
gsap.to(".title span", {
    y: -200,
    scrollTrigger: {
        trigger: "#section01",
        scrub: true,
        // markers: true,
    },
});
// section01

gsap.from(".rocket", {
    delay: 5,
    opacity: 0,
});
gsap.from(".rocket", {
    yPercent: 15,
    duration: 1.5,
    ease: "power1.inOut",
    stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true,
    },
});
gsap.from(".about__me", {
    delay: 5.5,
    opacity: 0,
});
gsap.from(".profile01", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".profile02", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".profile03", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".profile04", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".aboutMe", {
    yPercent: -20,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".passion", {
    yPercent: -20,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".try", {
    yPercent: -20,
    scrollTrigger: {
        trigger: ".about__me",
        start: "-15%",
        end: "bottom",
        scrub: true,
        // markers: true,
    },
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "0%",
    end: "0%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile01", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "10%",
    end: "10%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile02", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "30%",
    end: "30%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile03", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "50%",
    end: "50%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile04", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "5%",
    end: "5%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".aboutMe", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "35%",
    end: "35%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".passion", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "40%",
    end: "40%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".try", { scale: 0 }, { scale: 1 }),
});
gsap.from(".bubble__effect01", {
    opacity: 0,
    delay: 4,
});
gsap.to([".bubble01", ".bubble02", ".bubble03", ".bubble04", ".bubble05", ".bubble06", ".bubble07", ".bubble08", ".bubble09", ".bubble10", ".bubble11", ".bubble12", ".bubble13", ".bubble14", ".bubble15", ".bubble16", ".bubble17", ".bubble18", ".bubble19", ".bubble20", ".bubble21", ".bubble22", ".bubble23", ".bubble24"], {
    xPercent: "random(-30, 30)",
    yPercent: "random(-30, 30)",
    duration: 1,
    repeat: -1,
    repeatRefresh: true,
    yoyo: true,
    ease: "power1.out",
});
// section02

gsap.to(".sun_rot", {
    rotation: 90,
    scrollTrigger: {
        trigger: ".sun_rot2",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".sun_rot2", {
    rotate: 720,
    duration: 30,
    stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true,
    },
});

gsap.from(".webstandard_title span", {
    yPercent: -100,
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
    yPercent: -100,
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
    yPercent: -100,
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
    yPercent: -100,
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
    yPercent: -100,
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
gsap.from(".webstandard_desc", {
    xPercent: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".sun",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".responsive_desc", {
    xPercent: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".webstandard",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".react_desc", {
    xPercent: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".responsive",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".vue_desc", {
    xPercent: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".react",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".php_desc", {
    xPercent: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".vue",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".webstandard__inner img", {
    xPercent: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".sun",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".responsive__inner img", {
    xPercent: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".webstandard",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".react__inner img", {
    xPercent: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".responsive",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".vue__inner img", {
    xPercent: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".react",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
gsap.from(".php__inner img", {
    xPercent: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".vue",
        start: "70%",
        end: "30%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
// section03