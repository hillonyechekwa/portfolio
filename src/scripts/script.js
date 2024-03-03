//* page loading

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


const footerCta = document.querySelector('#footer-cta');


const navbar = document.querySelector('.navigation');

console.log(navbar);


const supportPageOffset = window.scrollX !== undefined;

const isCSS1Compat = (document.compatMode || "") === "CSS1Compat"

const logo = document.querySelector(".logo");

let previousScrollPosition = 0;
var throttleWait;



logo.onClick = () => {
    window.location.assign('/');
}


const isSCrollingDown = () => {
    let currentScrolledPosition = supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    let scrollingDown;

    if(currentScrolledPosition > previousScrollPosition){
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }

    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
}


const handleNavScroll = () => {
    if(isSCrollingDown() && !navbar.contains(document.activeElement)){
        navbar.classList.add("scroll-down");
        navbar.classList.remove("scroll-up");
    } else {
        navbar.classList.add("scroll-up");
        navbar.classList.remove("scroll-down");
    }
}

// const throttle = (callback , time) => {
//     if (throttleWait) return;

//     throttleWAit = true;

//     setTimeout(() => {
//         callback()

//         throttleWait = false;
//     }, (time));
// }


// const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// window.addEventListener("scroll", () => {
//     if(mediaQuery && !mediaQuery.matches) {
//         throttle(handleNavScroll, 250)
//     }
// });


footerCta.onclick = () =>{
    window.location.assign('/contact');
}