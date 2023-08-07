//what we want to animate  

const BOXES = document.getElementById('boxes');
const BOX = document.getElementsByClassName('box');

//buttons
const LEFTBUTTON = document.getElementById('btn1');
const RIGHTBUTTON = document.getElementById('btn2');

//Image counter
let counter = 0;
const SIZE = BOXES.childElementCount;

//Button Listeners

RIGHTBUTTON.addEventListener('click',function() {
    
    counter>=2?counter:counter+=3;

    BOX[counter].scrollIntoView({behavior: "smooth",block: "start",inline: "nearest"});
})

LEFTBUTTON.addEventListener('click',function() {
    
    counter<=0?counter:counter-=3;

    BOX[counter].scrollIntoView({behavior: "smooth",block: "start",inline: "nearest"});
})