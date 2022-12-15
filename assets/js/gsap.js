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

//loading
function loading() {
    console.log("loading");
    let progress = $(".progress"),
        progressText = progress.find(".progress-text"),
        imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 1000 / 60);
    html = document.querySelector("html");

    imgLoad.on("progress", function () {
        imgLoaded++;
        html.style.overflow = "hidden";
    });

    function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;

        imgCurrent += (target - imgCurrent) * 0.1;
        progressText.text(Math.floor(imgCurrent) + "%");

        if (imgCurrent >= 100) {
            clearInterval(progressTimer);
            progress.delay(1000).animate(
                {
                    top: "-130%",
                },
                400
            );

            const tl = new TimelineLite({ delay: 3 });
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
            // header
        }

        if (imgCurrent > 99) {
            imgCurrent = 100;
            html.style.overflow = "auto";
        }
    }
}
loading();
// 로딩

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    document.querySelectorAll("section").forEach((el, i) => {
        if (scrollTop >= el.offsetTop - 2) {
            document.querySelectorAll("#header li").forEach((li) => {
                li.classList.remove("active");
            });
            document.querySelector("#header li:nth-child(" + (i + 1) + ")").classList.add("active");
        }
    });
});
document.querySelectorAll("#header li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

gsap.to("#progress", {
    immediateRender: false,
    value: 10,
    ease: "none",
    scrollTrigger: {
        trigger: "#section01",
        start: "top top",
        scrub: true,
        invalidateOnRefresh: true,
    },
});
gsap.to("#progress", {
    immediateRender: false,
    value: 30,
    ease: "none",
    scrollTrigger: {
        trigger: "#section02",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
    },
});
gsap.to("#progress", {
    immediateRender: false,
    value: 45,
    ease: "none",
    scrollTrigger: {
        trigger: "#section03",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
    },
});

const sections = gsap.utils.toArray("#section04");
let maxWidth = 0;
const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
        maxWidth += section.offsetWidth;
    });
};
getMaxWidth();
gsap.to("#progress", {
    immediateRender: false,
    value: 65,
    ease: "none",
    scrollTrigger: {
        trigger: "#section04 .sect1",
        start: "top top",
        end: () => `+=${maxWidth * 1.5}`,
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
    },
});

const sections2 = gsap.utils.toArray("#section05");
let maxHeight = 0;
const getMaxHeight = () => {
    maxHeight = 0;
    sections2.forEach((section) => {
        maxHeight += section.offsetHeight;
    });
};
getMaxHeight();
gsap.to("#progress", {
    immediateRender: false,
    value: 85,
    ease: "none",
    scrollTrigger: {
        trigger: "#section05",
        start: "bottom bottom",
        end: "180% 100%",
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
    },
});
gsap.to("#progress", {
    immediateRender: false,
    value: 100,
    ease: "none",
    scrollTrigger: {
        trigger: "#section06",
        start: "200% bottom",
        end: "280% 130%",
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
    },
});
// 메뉴바 프로그래스

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
        trigger: ".profile01",
        // start: "-20%",
        // end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".profile02", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".profile02",
        // start: "-20%",
        // end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".profile03", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".profile03",
        // start: "-20%",
        // end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".profile04", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".profile04",
        // start: "-20%",
        // end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".aboutMe", {
    yPercent: -20,
    scrollTrigger: {
        trigger: ".aboutMe",
        // start: "-20%",
        // end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".passion", {
    yPercent: -20,
    scrollTrigger: {
        trigger: ".passion",
        // start: "-20%",
        // end: "bottom",
        scrub: true,
        // markers: true,
    },
});
gsap.from(".try", {
    yPercent: -20,
    scrollTrigger: {
        trigger: ".try",
        // start: "-20%",
        // end: "bottom",
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
    start: "5%",
    end: "5%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile02", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "25%",
    end: "25%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile03", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "45%",
    end: "45%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".profile04", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "0%",
    end: "0%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".aboutMe", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "30%",
    end: "30%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".passion", { scale: 0 }, { scale: 1 }),
});
ScrollTrigger.create({
    trigger: ".about__me",
    start: "35%",
    end: "35%",
    scrub: 1,
    // markers: true,
    animation: gsap.fromTo(".try", { scale: 0 }, { scale: 1 }),
});
gsap.from(".bubble__effect01", {
    opacity: 0,
    delay: 4,
});
gsap.to(
    [
        ".bubble01",
        ".bubble02",
        ".bubble03",
        ".bubble04",
        ".bubble05",
        ".bubble06",
        ".bubble07",
        ".bubble08",
        ".bubble09",
        ".bubble10",
        ".bubble11",
        ".bubble12",
        ".bubble13",
        ".bubble14",
        ".bubble15",
        ".bubble16",
        ".bubble17",
        ".bubble18",
        ".bubble19",
        ".bubble20",
        ".bubble21",
        ".bubble22",
        ".bubble23",
        ".bubble24",
    ],
    {
        xPercent: "random(-30, 30)",
        yPercent: "random(-30, 30)",
        duration: 1,
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        ease: "power1.out",
    }
);

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
        trigger: ".webstandard_title span",
        // start: "50%",
        // end: "40%",
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
        trigger: ".responsive_title span",
        // start: "50%",
        // end: "50%",
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
        trigger: ".react_title span",
        // start: "50%",
        // end: "50%",
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
        trigger: ".vue_title span",
        // start: "50%",
        // end: "50%",
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
        trigger: ".php_title span",
        // start: "50%",
        // end: "50%",
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
        trigger: ".webstandard_desc",
        // start: "60%",
        // end: "40%",
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
        trigger: ".responsive_desc",
        // start: "60%",
        // end: "40%",
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
        trigger: ".react_desc",
        // start: "60%",
        // end: "40%",
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
        trigger: ".vue_desc",
        // start: "60%",
        // end: "40%",
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
        trigger: ".php_desc",
        // start: "60%",
        // end: "40%",
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
        trigger: ".webstandard__inner img",
        // start: "60%",
        // end: "40%",
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
        trigger: ".responsive__inner img",
        // start: "60%",
        // end: "40%",
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
        trigger: ".react__inner img",
        // start: "60%",
        // end: "40%",
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
        trigger: ".vue__inner img",
        // start: "60%",
        // end: "40%",
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
        trigger: ".php__inner img",
        // start: "60%",
        // end: "40%",
        // markers: true,
        toggleActions: "restart none reverse none",
    },
});
// section03

const sects = gsap.utils.toArray(".sect");

ScrollTrigger.matchMedia({
    "(min-width: 480px)": function () {
        gsap.to(sects, {
            xPercent: -100 * (sects.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontalWrap",
                pin: true,
                scrub: 1,
                end: "+=2000",
                // markers: true,
            },
        });
    },
});
// 가로모드

gsap.to(".card_01", {
    yPercent: "random(-90 90)",
    rotate: "random(-10 10)",
    scrollTrigger: {
        trigger: "#section04",
        scrub: 1,
        start: "20% 0%",
        // markers: true,
    },
});
gsap.to(".card_02", {
    yPercent: "random(-90 90)",
    rotate: "random(-10 10)",
    scrollTrigger: {
        trigger: "#section04",
        scrub: 1,
        start: "30% 0%",
        // markers: true,
    },
});
gsap.to(".card_03", {
    yPercent: "random(-90 90)",
    rotate: "random(-10 10)",
    scrollTrigger: {
        trigger: "#section04",
        scrub: 1,
        start: "45% 0%",
        // markers: true,
    },
});
gsap.to(".card_04", {
    yPercent: "random(-90 90)",
    rotate: "random(-10 10)",
    scrollTrigger: {
        trigger: "#section04",
        scrub: 1,
        start: "55% 0%",
        // markers: true,
    },
});
gsap.to(".card_05", {
    yPercent: "random(90)",
    rotate: "random(-3 3)",
    scrollTrigger: {
        trigger: "#section04",
        scrub: 1,
        start: "65% 0%",
        // markers: true,
    },
});
gsap.to(".card_06", {
    yPercent: "random(90)",
    rotate: "random(-3 3)",
    scrollTrigger: {
        trigger: "#section04",
        scrub: 1,
        start: "80% 0%",
        // markers: true,
    },
});
// section04

const cursor = document.querySelector(".cursor");
const overlay = document.querySelectorAll(".site_overlay");

function moveCircle(e) {
    gsap.to(cursor, 0.3, {
        css: {
            left: e.pageX,
            top: e.pageY,
        },
        delay: 0.03,
    });
}

document.querySelector(".p-1").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/javascript_refer.png?raw=true)";
});
document.querySelector(".p-2").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/html_refer.png?raw=true)";
});
document.querySelector(".p-3").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/css_refer.png?raw=true)";
});
document.querySelector(".p-4").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/svg_ani.png?raw=true)";
});
document.querySelector(".p-5").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/css_ani.png?raw=true)";
});
document.querySelector(".p-6").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/tistory.png?raw=true)";
});
document.querySelector(".p-7").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/programmers.png?raw=true)";
});
document.querySelector(".p-8").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/jquery.png?raw=true)";
});
document.querySelector(".p-9").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/mysql.png?raw=true)";
});
document.querySelector(".p-10").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/firebase.png?raw=true)";
});
document.querySelector(".p-11").addEventListener("mouseover", function () {
    document.querySelector(".cursor").style.backgroundImage = "url(https://github.com/sukjun2/portfolio/blob/main/assets/img/netlify.png?raw=true)";
});

let flag = false;

overlay.forEach((item) => {
    item.addEventListener("mousemove", function () {
        flag = true;
        gsap.to(cursor, 0.3, { scale: 1, autoAlpha: 1 });
        overlay.forEach((item) => {
            item.addEventListener("mousemove", moveCircle);
        });
    });
});
overlay.forEach((item) => {
    item.addEventListener("touchmove", function () {
        flag = true;
        gsap.to(cursor, 0.3, { scale: 1, autoAlpha: 1 });
        overlay.forEach((item) => {
            item.addEventListener("touchmove", moveCircle);
        });
    });
});
overlay.forEach((item) => {
    item.addEventListener("mouseout", function () {
        flag = false;
        gsap.to(cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
    });
});
overlay.forEach((item) => {
    item.addEventListener("touchend", function () {
        flag = false;
        gsap.to(cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
    });
});
// section05
