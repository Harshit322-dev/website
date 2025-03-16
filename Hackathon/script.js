var x1=0;
var x2=1;
var x3=2;

next = document.querySelector(".next");
prev = document.querySelector(".prev");
mid = document.querySelector(".mid");

const slides = document.querySelector(".sourceBox").querySelectorAll(".box");

const goPrev = ()=>{
    if(x1 == 0){
        x1 = slides.length - 1;
        x2--;
        x3--;
    }
    else if(x2 == 0){
        x2 = slides.length - 1;
        x1--;
        x3--;
    }
    else if(x3 == 0){
        x3 = slides.length - 1;
        x2--;
        x1--;
    }
    else{
        x1--;
        x2--;
        x3--;
    }
    slides.forEach((elem)=>{
        elem.style.display = "none";
    })
    slides[x1].style.display = "flex";
    slides[x2].style.display = "flex";
    slides[x3].style.display = "flex";
    prev.style.transform = "scale(0.5)";
    prev.style.boxShadow = "0px 0px 5px 5px rgba(23, 53, 235,0.5)"
    next.style.transform = "scale(1)";
    mid.style.transform = "scale(1)";
    next.style.boxShadow = "none";
    mid.style.boxShadow = "none";
}

const goNext = ()=>{
    if(x1 == slides.length - 1){
        x1 = 0;
        x2++;
        x3++;
    }
    else if(x2 == slides.length - 1){
        x2 = 0;
        x1++;
        x3++;
    }
    else if(x3 == slides.length - 1){
        x3 = 0;
        x2++;
        x1++;
    }
    else{
        x1++;
        x2++;
        x3++;
    }
    slides.forEach((elem)=>{
        elem.style.display = "none";
    })
    slides[x1].style.display = "flex";
    slides[x2].style.display = "flex";
    slides[x3].style.display = "flex";
    next.style.boxShadow = "0px 0px 5px 5px rgba(23, 53, 235,0.5)";
    next.style.transform = "scale(0.5)";
    prev.style.transform = "scale(1)";
    mid.style.transform = "scale(1)";
    prev.style.boxShadow = "none";
    mid.style.boxShadow ="none";
}

const goMid = ()=>{
    mid.style.boxShadow = "0px 0px 5px 5px rgba(23, 53, 235,0.5)";
    mid.style.transform = "scale(0.5)";
    prev.style.boxShadow = "none";
    prev.style.transform = "scale(1)";
    next.style.boxShadow = "none";
    next.style.transform = "scale(1)";
}