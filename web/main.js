let imageIndex=0;
let position=0;
const width=542;
const before=document.querySelector(".before")
const after=document.querySelector(".after")
const images=document.querySelector(".images")

function prev(){
    if(imageIndex>0){
        before.removeAttribute("disabled")
        position+=width;
        images.style.transform=`translateX(${position}px)`;
        imageIndex=imageIndex-1;
    }
    if(imageIndex==0){
        before.setAttribute('disabled', 'true')
    }
}

function next(){
    if(imageIndex<4){
    before.removeAttribute("disabled")
    position-=width;
    images.style.transform=`translateX(${position}px)`;
    imageIndex=imageIndex+1;
    }

    if(imageIndex==4){
        after.setAttribute('disabled', true)
    }
}

function init(){
    before.setAttribute('disabled', 'true')
    before.addEventListener("click", prev)
    after.addEventListener("click", next)
}

init();