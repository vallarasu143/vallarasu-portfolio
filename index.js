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