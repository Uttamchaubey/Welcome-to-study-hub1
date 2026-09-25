function scrolltr(){
const scroll = new LocomotiveScroll({
el:document.querySelector('.main'),
smooth: true
})
}
scrolltr()
function videoconanimation(){

    var videocon = document.querySelector(".video-container");

var playbtn = document.querySelector(".play");

videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
    })
});

videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })
});

videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn,{
       left:dets.x-30,
       top:dets.y-50,
       
       
    })
});
}
function loading_animet(){
    videoconanimation()
gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:0.6,
    duration:1.5,
    stagger:0.4
})

gsap.from(".page1 .video-container",{
    
    opacity:0,
    delay:1.5,
    duration:1.5,
    scale:0.9,
})
}
loading_animet()
document.addEventListener("mousemove",function(dete){
    gsap.to(".corsor",{
        left:dete.x,
        top:dete.y
    })
})
document.querySelector(".child").addEventListener("mouseenter",function(){
    gsap.to(".corsor",{
    transform:'translate(-50%, -50%) scale(1)'
    })
})
document.querySelector(".child").addEventListener("mouseleve",function(){
    gsap.to(".corsor",{
    transform:'translate(-50%, -50%) scale(0)'
    })
})