console.log("script connected");

//* page loading

// function loaderAnim() {
//     gasp.fromTo("#loader img", {
//         scale: 1.6,
//         yoyo: true,
//         yoyoEase: true,
//         ease: "elastic",
//         repeat: -1,
//     },{
//         scale: .8,
//         yoyo: true,
//         yoyoEase: true,
//         ease: "elastic",
//         repeat: -1,
//     })
// }



const footerCta = document.querySelector('#footer-cta');


const navbar = document.querySelector('.navigation');

const burgerBtn = document.querySelector('.menu-btn');


const burgerMenu = document.querySelector('.menu-overlay');


const supportPageOffset = window.scrollX !== undefined;

const isCSS1Compat = (document.compatMode || "") === "CSS1Compat"

const logo = document.querySelector(".logo");

let previousScrollPosition = 0;
var throttleWait;



logo.onClick = () => {
    window.location.assign('/');
}


const isScrollingDown = () => {
    let currentScrolledPosition = supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    // console.log("currentScrolledPosition", currentScrolledPosition);

    let scrollingDown;

    if(currentScrolledPosition > previousScrollPosition){
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }

    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
}


const animateBtnIn = () => {
    const tl = gsap.timeline();

    tl.fromTo(burgerMenu, {
        autoAlpha: 0,
        xPercent: -100,
    }, {
        delay: .3,
        autoAlpha: 1,
        xPercent: 0,
        duration: .4,
        ease: "elastic"
    })
}


const animateBtnOut = () => {
    const tl = gsap.timeline();

    tl.to(burgerMenu, {
        autoAlpha: 0,
        xPercent: -100,
        ease: "Power2.out",
    })
}

const handleNavScroll = () => {
    if(isScrollingDown() && !navbar.contains(document.activeElement)){
        navbar.classList.add("scroll-down");
        navbar.classList.remove("scroll-up");
        // burgerMenu.classList.add("show");
        // animateBtnIn()
    } else {
        navbar.classList.add("scroll-up");
        navbar.classList.remove("scroll-down");
        // burgerMenu.classList.remove("show")
        // animateBtnOut()
    }
}

const throttle = (callback , time) => {
    if (throttleWait) return;

    throttleWait = true;

    setTimeout(() => {
        callback();

        throttleWait = false;
    }, (time));
}


const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
    if(mediaQuery && !mediaQuery.matches) {
        throttle(handleNavScroll, 250);
    }
});


footerCta.onclick = () =>{
    window.location.assign('/contact');
}