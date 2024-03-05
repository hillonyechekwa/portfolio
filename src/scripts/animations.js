

//* imports
gsap.registerPlugin(ScrollTrigger);

console.log("Animations Connected");

// class Animations {
//     constructor () {


//         this._initialize();
//         this._render();
//     }

//     _initialize() {
//         this._setInitialStates();
//         this._createLenis();
//         this._createIntro();
//     }
// }

// const lenis = new Lenis();

// lenis.on('scroll', (e) => {
//     console.log(e);
// })

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);



const splitTypes = document.querySelectorAll(".about-text");

splitTypes.forEach((char, i) => {
    // console.log('before object', char);
    const text = new SplitType(char, {types: 'chars,words'});

    console.log('after object', text);
})





//* page transitions

const pageOverlayText = document.querySelector(".overlay-transition h3");

//* page intro animations

const homeIntroAnimation = (tl) => {
    tl.fromTo("#second-col p, #second-col button", {
        opacity: 0,
        translateY: "40px"
    },{
        opacity: 1,
        translateY: "0px",
        stagger: .1,
        ease: "Power2.inOut"
    })

    tl.fromTo("#first-col h3 span", {
        opacity: 0,
        translateX: "-100px",
    }, {
        delay: .8,
        opacity: 1,
        translateX: "0px",
        stagger: .2,
        ease: "Power2.inOut"
    })

    tl.fromTo(".home-hero h1 span", {
        opacity: 0,
        translateY: "200px",
    },{
        delay: 1,
        opacity: 1,
        translateY: "0px",
        stagger: .15,
        ease: "Power2.out"
    })
}

const aboutIntroAnimation = (tl) => {
   
}

const projectsIntroAnimation = (tl) => {}

const teachingIntroAnimation = (tl) => {}

const contactIntroAnimation = (tl) => {}





const pageTransition = () => {

    
    if(location.pathname === "/"){
        pageOverlayText.textContent = "Home"
    }else{
        pageOverlayText.textContent = `${location.pathname}`.replace('/', '');
    }

    const tl = gsap.timeline();

    tl.to(".overlay-transition", {
        duration: 1.2,
        scaleY: 1,
        transformOrigin: "top left",
        ease: "elastic",
    }).to(".overlay-transition", {
        delay: 1.2,
        duration: 1.2,
        scaleY: 0,
        transformOrigin: "bottom left",
        ease: "elastic"
    })
}

const contentAnimation = () => {
    const tl = gsap.timeline();

    //*nav intro animation
    tl.fromTo(".navigation ul li", {
        opacity: 0,
        translateY:"-8px"
    }, {
        delay: .8,
        opacity: 1,
        translateY: "0px",
        stagger: .1,
        ease: "Power2.out"
    })

    //*home intro animation
    if(location.pathname === "/"){
        homeIntroAnimation(tl);
    } else if (location.pathname === "/about/"){
        aboutIntroAnimation(tl);
    } else if (location.pathname === "/projects/"){
        projectsIntroAnimation(tl);
    }else if (location.pathname === "/teaching/"){
        teachingIntroAnimation(tl);
    }else if (location.pathname === "/contact/"){
        contactIntroAnimation(tl);
    }
    


    //* about animation
}


const delay = (n) => {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n)
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave (data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done()
        },
        async enter (data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        }
    }]
})