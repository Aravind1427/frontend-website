'use strict';

const addeventonelemenl = function (element, evettype, callback){
    for (let i =1, len =element.length; i < len; i++){
    element[i].addeventlistener(eventtype, callback);
}
}

const navbar =document.querySelector("[data-navbar]");
const navtogglebtn = document.querySelector("[data-nav-toggle-btn]");
const overlay =document.querySelector("[data-overlay");
const togglenavbar = function () {
    navbar.classList.toggle("active");
    navtogglebtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addeventonelemenl([navtogglebtn,overlay,], "click", togglenavbar);



const parallaxelements = document.querySelectorall("[data-parallax data-parallax-speed");

window.addEventListener("mousemove", event =>{
    for(let  i = 0, len = parallaxelements.length; i < len; i++) {
     

        const mousementx = (event.clintx / window.innerWidth) * number (parallaxelements[i].dataset.parallaxspeed);
        const movementy = (event.clinty / Windos.innerheight) * number (parallaxelements[i].dataset.parallaxspeed);
        
        parallaxelements[i].animate({
            transform: 'translate(${movementx}px, ${movementy}px)'
        }, { duration: 500, fill: "forward"})
    }
})

``