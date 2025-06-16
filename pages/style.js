const btns = document.querySelectorAll(".nav-btn2");
const slides = document.querySelectorAll(".video-slide");


  var sliderNav=function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    });

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    })
});

ScrollReveal().reveal('.s1,.s2', { delay: 50,origin:'left'  });
ScrollReveal().reveal('.s3,.s4', { delay: 50,origin:'left' });
ScrollReveal().reveal('.content2', { delay: 50,origin:'left' });

ScrollReveal().reveal('.video', { delay: 50,origin:'left' });
ScrollReveal().reveal('.image', { delay: 50,origin:'left' });


ScrollReveal().reveal('.text-box,.ab1', { delay: 50,origin:'right' });
ScrollReveal().reveal('.card,.coloumn,.coloumn3,.c4', { delay: 50,origin:'bottom',interval:'150' });
 
