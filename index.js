let slide1=document.getElementById('slide1');
let carosel=document.querySelector('.carosel .list');

slide1.onclick=function(){
    slidechange('one');
    this.style.backgroundColor='white'
    slide2.style.backgroundColor='transparent'
    slide3.style.backgroundColor='transparent'
}
const slidechange=(text)=>{
    let item=document.querySelectorAll('.carosel .list .item')
    if(text === 'one'){
        carosel.appendChild(item[0])
    }/*else if(text === 'two'){
        carosel.prepend(item[1])
    }else if(text === 'three'){
        carosel.prepend(item[2])
    }*/

}
let time=1;
let exitime=0;
const timeout=setInterval(function(){
    if(exitime >= time){
        clearInterval(timeout)
    }else{
        time++;
        exitime++;
    }
    slide1.click();
},3000);



let dragbtn=document.getElementById('dragbutton');
let offsetX , offsetY, isDraging=false;

function Draging(e){
    e.preventDefault();
    if(e.type === 'mousedown' || e.type === 'touchstart'){
        offsetX = e.type === 'mousedown' ? e.clientX - dragbtn.getBoundingClientRect().left:
        e.touches[0].clientX - dragbtn.getBoundingClientRect().left;
        offsetY = e.type === 'mousedown' ? e.clientY - dragbtn.getBoundingClientRect().top:
        e.touches[0].clientY - dragbtn.getBoundingClientRect().top;
        
        isDraging=true;


    }
}

function drag(e){
    if(isDraging){
        e.preventDefault()
        const clientX = e.type === 'mousemove' ? e.clientX: e.touches[0].clientX;
        const clientY = e.type === 'mousemove' ? e.clientY :e.touches[0].clientY;
        //dragbtn.style.left=(clientX - offsetX)+'px';
        dragbtn.style.top=(clientY - offsetY)+'px';
    }
}

function enddrag(e){
    isDraging=false;
}

//mouse events ---
dragbtn.addEventListener('mousedown',Draging);
document.addEventListener('mousemove',drag);
document.addEventListener('mouseup',enddrag)

//touch events ---

dragbtn.addEventListener("touchstart",Draging);
document.addEventListener("touchmove",drag);
document.addEventListener("touchend", enddrag);