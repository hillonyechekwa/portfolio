
console.log("anims.js is connected!")

gsap.registerPlugin(ScrollTrigger);


// const heroText = document.querySelector(".projects-hero p");

// const text = new SplitType(heroText, { types: 'words chars'})

// console.log(text.chars)
// page scroll animations.
//page transitions
function homeContentAnimation(){
    const tl = gsap.timeline({
        defaults: {
            delay: 1
        }
    });

    if(location.pathname === '/'){
        tl.fromTo('#first-col h3 span', {
            delay: .3,
            x: -300,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: "Power2.out",
            delay: .4,
            stagger: 0.2
        }).fromTo("#second-col p", {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: "Power2.out"
        }).fromTo("#primary-cta", {
            delay: .5,
            scaleX: 0,
            transformOrigin: "left",
            opacity: 0,
        }, {
            scaleX: 1,
            transformOrigin: "left",
            opacity: 1,
            ease: "Power2.inOut"
        }).fromTo("#primary-cta a",{
            delay: 1,
            y: 80,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            ease: "Power3.out"
        }).fromTo(".home-hero h1 span", {
            delay: .8,
            y: 500,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: .5,
            stagger: 0.2,
            ease: "Power3.out"
        })
    }

    
    
}
function aboutContentAnimation(){
    const tl = gsap.timeline({
        defaults: {
            delay: 1,
        }
    })

    if(location.pathname === "/about/"){
         const aboutImages = document.querySelectorAll(".about-images");

        aboutImages.forEach(image => {
            tl.fromTo(image, {
                transformOrigin: "top left",
                opacity: 0,
                yPercent: -30,
            },{
                delay: .5,
                duration: 1.7,
                transformOrigin: "top left",
                yPercent: 0,
                opacity: 1,
                ease: "Power2.inOut"
            }, 0)
        })
        // add a text stagger animations later
        tl.fromTo("#about-hero h1", {
            opacity: 0,
            yPercent: 30,
        }, {
            delay: .8,
            opacity: 1,
            yPercent: 0,
            ease: "Power2.inOut"
        })
    }
}
function projectsContentAnimation(){
    const tl = gsap.timeline({
        defaults: {
            delay: 1
        }
    });

    const heroText = document.querySelector(".projects-hero p");

    const text = new SplitType(heroText)

    if(location.pathname === "/projects/") {
        tl.fromTo(".projects-hero h1 span", {
            opacity: 0,
            yPercent: 30,
            delay: .4
        }, {
            opacity: 1,
            yPercent: 0,
            delay: .8,
            stagger: 0.2,
            ease: "Power2.inOut",
        }).fromTo(text.lines, {
            opacity: 0,
            delay: .2
        }, {
            opacity: 1,
            delay: .4,
            stagger: 0.2
        })
    }
}
function projectContentAnimation(){}
function teachingContentAnimation(){
    const tl = gsap.timeline({
        defaults: {
            delay: 1,
        }
    })


    tl.fromTo(".teaching-hero img", {
        delay: .4,
        duration: 1.5,
        opacity: .3,
        scale: 1.5,
        transformOrigin: "top center"
    }, {
        opacity: 1,
        scale: 1,
        transformOrigin: "top center",
        ease: "Power2.inOut"
    }).fromTo(".teaching-hero h1", {
        delay: .4,
        opacity: 0,
        yPercent: 40,
    }, {
        opacity: 1,
        yPercent: 1,
        ease: "Power2.inOut",
    })
}
function contactContentAnimation(){}



function pageTransition(){

    const tl = gsap.timeline();

    tl.fromTo('.overlay-transition', {
        duration: 2.5,
        scaleY: 1,
        transformOrigin: "top left",
    },{
        delay: 2.5,
        duration: .8,
        scaleY: 0,
        transformOrigin: "bottom left",
        ease: "elastic",
    })
}


    //barba delay function
function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done()
        }, n)
    })
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },
        async enter(data){
            homeContentAnimation()
            aboutContentAnimation()
            projectsContentAnimation()
            projectContentAnimation()
            teachingContentAnimation()
            contactContentAnimation()
        },
        async once(data){
            homeContentAnimation()
            aboutContentAnimation()
            projectsContentAnimation()
            projectContentAnimation()
            teachingContentAnimation()
            contactContentAnimation()
        }
    }]
})



//Scroll Animations
function homeScrollAnims(){}
function aboutScrollAnims(){}
function projectsScrollAnims(){}
function teachingScrollAnims(){}
function contactScrollAnims(){}