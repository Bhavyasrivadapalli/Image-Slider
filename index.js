const slides=document.querySelectorAll('.slide');
const nextBtn=document.querySelector('.nextBtn');
const prevBtn=document.querySelector('.prevBtn');
slides.forEach(function(slide,index){
     slide.style.left=`${index*100}%`;

}); 
let conter=0;
nextBtn.addEventListener('click',function(){
    conter++;
    carousel();
})
prevBtn.addEventListener('click',function(){
    conter--;
    carousel();
})
function carousel(){
   /* if(conter===slides.length){
        conter=0;
    }
    if(conter<0){
        conter=slides.length-1;
    }*/
    if(conter<slides.length-1){
       nextBtn.style.display='block';
    }else{
        nextBtn.style.display='none';
    }
    if(conter>0){
        prevBtn.style.display='block';
    }else{
        prevBtn.style.display='none';
    }
    slides.forEach(function (slide){
        slide.style.transform=`translateX(-${conter * 100}%)`;
    })

}
prevBtn.style.display='none';