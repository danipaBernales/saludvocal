let slideRight = document.getElementById('slide-right');
let slideLeft = document.getElementById('slide-left');

const itemsLength = (slideLeft.querySelectorAll('.slide').length - 1) * 100;
slideLeft.style.transform = `translateY(-${itemsLength}vh)`;

let trayectoRight = 100;
let trayectoLeft = -200;

let animationInterval;

document.getElementById('arrow-up').addEventListener('click', onUp);
document.getElementById('arrow-down').addEventListener('click', onDown);

document.getElementById('arrow-up').addEventListener('mouseenter', stopAnimation);
document.getElementById('arrow-down').addEventListener('mouseenter', stopAnimation);
document.getElementById('arrow-up').addEventListener('mouseleave', startAnimationLoop);
document.getElementById('arrow-down').addEventListener('mouseleave', startAnimationLoop);

function onUp(){
    startUpAnimation();
    startDownAnimation()
}

function onDown(){
    startDownAnimation();
    startUpAnimation()
}

function startDownAnimation(){
    trayectoLeft += 100; 
    slideLeft.style.transform = `translateY(${trayectoLeft}vh)`;
    if(trayectoLeft == 0){
        trayectoLeft = -300;
    }
}

function startUpAnimation(){
    slideRight.style.transform = `translateY(-${trayectoRight}vh)`;
    trayectoRight += 100;
    if(trayectoRight == 300){
        trayectoRight = 0;
    }
}
function startAnimationLoop() {
    animationInterval = setInterval(() => {
        onDown();
    }, 2500);
}

function stopAnimation() {
    clearInterval(animationInterval);
}

startAnimationLoop();