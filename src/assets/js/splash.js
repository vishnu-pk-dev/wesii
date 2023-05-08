let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logospan = document.querySelector(".logo");
let intro2 = document.querySelector(".intro2");
let planeAni = document.querySelector(".plane-img")

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        intro2.style.height= '100vh';
        setTimeout(()=>{
            logospan.style.opacity= '1';
        },200);
        setTimeout(()=>{
            logospan.style.opacity= '0';
        },2000);
        setTimeout(()=>{
            intro.style.top= '-100vh';
            // intro.style.display= 'none';
        },2500);
        setTimeout(()=>{
            intro2.style.height= '0vh';
        },2500);
        console.log(planeAni.style);
        setTimeout(()=>{
            planeAni.style.animationDelay= '0s';
        },3600);
    })
}
)
