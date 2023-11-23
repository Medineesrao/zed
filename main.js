// const mobileNav=document.querySelector("nav.mobile-nav")
// const menuIcon=document.querySelector(".menu-icon");
// const closeIcon=document.querySelector(".mobile-menu-container .close-icon");
// const mobileMenuContainer=document.querySelector(".mobile-menu-container");

// menuIcon.addEventListener("click",()=>{
//     mobileMenuContainer.classList.add("active");
// });

// closeIcon.addEventListener("click", () =>{
//     mobileMenuContainer.classList.remove("active");
// });

var tl=gsap.timeline()

tl.from("nav img,nav ul li a",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})

tl.from("header p,.loc>img,.loc h4,.install",{
    y:100,duration:1,opacity:0
})

tl.from(".feature>img",{
    scale:0,opacity:0,duration:1,scrollTrigger:{
        trigger:".feature>img",
        scroller:"body",scrub:1
    }
})

tl.from(".collaborate p ",{
    scale:0,opacity:0,duration:3,scrollTrigger:{
        trigger:".collaborate",
        scroller:"body",scrub:1
    }
})

tl.from(".btn.light",{
    x:-500,opacity:0,duration:1,scrollTrigger:{
        trigger:".btn.light",
        scroller:"body",scrub:1
    }
})
