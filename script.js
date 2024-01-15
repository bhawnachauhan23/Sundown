const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemc=document.querySelector('#elem-container');
    var fixed=document.querySelector("#fixed-image");
    elemc.addEventListener("mouseenter",function(){
        fixed.style.display="block"
    })
     elemc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
    })
    var elems=document.querySelectorAll(".elem");
    elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image");
        fixed.style.backgroundImage=`url(${image})`
    })
  })
}

function page4Animation(){
    var previousH1 = document.querySelector('#left-part h1[style="color: white;"]');
    document.getElementById('left-part').addEventListener('click', function(event) {
        // Check if the clicked element is an h1 tag
        if (event.target.tagName === 'H1') {
            if (previousH1 === event.target) {
                return;
            }
             // Change color of the clicked h1 tag to white
                event.target.style.color = 'white';
    
                // Reset color of the previous h1 tag to the default color
                if (previousH1 !== null) {
                    previousH1.style.color = '';
                }
            // Get the content and image from the data attributes
            var newContent = event.target.getAttribute('data-content');
            var imageName = event.target.getAttribute('data-image');
            // Change the content of the paragraph
            document.getElementById('para-div').textContent = newContent;
            // Change the source attribute to display the selected image
            document.getElementById('image-div').src = imageName;
            previousH1 = event.target;
        }
        
    }); 
}

function swiperanimation(){
   var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 50,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

function page5Animation(){
    var page5=document.querySelector("#page5");
    var playbtn=document.querySelector("#play");
    page5.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
      })
   })

    page5.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
      })
    })

    page5.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-90,
        top:dets.y-150
      })
   })
}

function menuAnimation(){
    var menu = document.querySelector("nav h3");
    var full=document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var flag=0
     menu.addEventListener("click",function(){
    if(flag==0){
      full.style.top=0;
      navimg.style.opacity=0;
      flag=1;
    }   
    else{
      full.style.top = "-100%";
      navimg.style.opacity=1;
      flag=0;
    }
 })
}

function loaderAnimation(){
    var loader=document.querySelector("#loader");
    setTimeout(function(){
      loader.style.top = "-100%";
    },4200)
}

page3Animation();
page4Animation();
swiperanimation();
page5Animation();
menuAnimation();
loaderAnimation();