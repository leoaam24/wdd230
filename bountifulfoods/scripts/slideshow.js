const mediaQuerySmall = window.matchMedia("(max-width: 699px)");
const mediaQueryMedium = window.matchMedia("(min-width: 700px) and (max-width: 1079px)");
const mediaQueryLarge = window.matchMedia("(min-width: 1080px)");

function screenSizeSmall(smallEvent) {
  if (smallEvent.matches) {
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.querySelectorAll(".slide");
      let dots = document.querySelectorAll(".dot");
      let slidetexts = document.querySelectorAll(".slide-text-bg");
      
  
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
      }
  
      for (i = 0; i < slidetexts.length; i++) {
        slidetexts[i].style.display = "none";
      }
  
      slides[slideIndex-1].style.display = "flex";
      dots[slideIndex-1].className += " activedot";
      slides[slideIndex-1].addEventListener('click', ()=> {
        slidetexts[slideIndex-1].style.display = "flex";
      });
    }
    
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    })
    
    next.addEventListener('click', ()=> {
        plusSlides(1);
    })
    
    const dot1 = document.querySelector('.dot1');
    const dot2 = document.querySelector('.dot2');
    const dot3 = document.querySelector('.dot3');
    const dot4 = document.querySelector('.dot4');

    next.style.display = "block";
    prev.style.display = "block";
    dot1.style.display = "block";
    dot2.style.display = "block";
    dot3.style.display = "block";
    dot4.style.display = "block";
    
    dot1.addEventListener('click', ()=>{
        currentSlide(1)
    })
    dot2.addEventListener('click', ()=>{
        currentSlide(2)
    })
    dot3.addEventListener('click', ()=>{
        currentSlide(3)
    })
    dot4.addEventListener('click', ()=>{
        currentSlide(4)
    })
  }
}

function screenSizeMedium(mediumEvent) {
  if (mediumEvent.matches) {
    let slideIndex = 1;
      showSlides(slideIndex);
      
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }  
    
    function showSlides(n) {
      let i;
      let slides = document.querySelectorAll(".slide");
      let dots = document.querySelectorAll(".dot");
      let slidetexts = document.querySelectorAll('.slide-text-bg');
    
      if (n > slides.length - 1) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length - 1;
      }
    
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
      }

      for (i = 0; i < slidetexts.length; i++) {
        slidetexts[i].style.display = "none";
      }
    
      slides[slideIndex - 1].style.display = "block";
      slides[slideIndex].style.display = "block";
      slidetexts[slideIndex - 1].style.display = "unset";
      slidetexts[slideIndex].style.display = "unset";
      dots[slideIndex - 1].className += " activedot";
    }
      
      const prev = document.querySelector('.prev');
      const next = document.querySelector('.next');
      
      prev.addEventListener('click', ()=> {
          plusSlides(-2);
      })
      
      next.addEventListener('click', ()=> {
          plusSlides(2);
      })
      
      const dot1 = document.querySelector('.dot1');
      const dot2 = document.querySelector('.dot2');
      const dot3 = document.querySelector('.dot3');
      const dot4 = document.querySelector('.dot4');
    
      dot2.style.display = "none";
      dot4.style.display = "none";
      dot1.style.display = "block";
      dot3.style.display = "block";

      next.style.display = "block";
      prev.style.display = "block";
      
      
      dot1.addEventListener('click', ()=>{
          currentSlide(1)
      })
      dot2.addEventListener('click', ()=>{
          currentSlide(2)
      })
      dot3.addEventListener('click', ()=>{
          currentSlide(3)
      })
      dot4.addEventListener('click', ()=>{
          currentSlide(4)
      })
  }
}

function screenSizeLarge(largeEvent) {
  if (largeEvent.matches) {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let slidetexts = document.querySelectorAll(".slide-text-bg");

    next.style.display = "none";
    prev.style.display = "none";
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].style.display = "none";
    }
    for (i = 0; i < slidetexts.length; i++) {
      slidetexts[i].style.display = "flex";
    }
  }
}

mediaQueryMedium.addEventListener('change', screenSizeMedium);
mediaQuerySmall.addEventListener('change', screenSizeSmall);
mediaQueryLarge.addEventListener('change', screenSizeLarge);

screenSizeSmall(mediaQuerySmall);
screenSizeMedium(mediaQueryMedium);
screenSizeLarge(mediaQueryLarge);

