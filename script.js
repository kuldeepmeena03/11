var tl = gsap.timeline()

tl.from(".logo",{
    y:-40,
    delay:0.5,
    duration:0.5,
    opacity:0,
    scale:0
})
tl.from(".navitems #a1",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".navitems #a2",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".navitems #a3",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".navitems #a4",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".navitems #a5",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".navitems #a6",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".navitems #a7",{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".logos .Search" ,{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".logos .Searchbar" ,{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".logos .profile" ,{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".logos .like" ,{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
tl.from(".logos .mycart" ,{
    y:-40,
    duration:0.3,
    opacity:0,
    scale:0

})
gsap.from(" #Ladies .Cardimage",{
    duration:1,
    delay:0.5,
    opacity:0,
    scale:0,
    scrollTrigger:"#Ladies .Cardimage"
})
gsap.from(" #Men .Cardimage",{
    duration:1,
    delay:0.5,
    opacity:0,
    scale:0,
    scrollTrigger:"#Men .Cardimage"
})
gsap.from(" #Kids .Cardimage",{
    duration:1,
    delay:0.5,
    opacity:0,
    scale:0,
    scrollTrigger:"#Kids .Cardimage"
})
gsap.from(" #Sports .Cardimage",{
    duration:1,
    delay:0.5,
    opacity:0,
    scale:0,
    scrollTrigger:"#Sports .Cardimage"
})

Shery.makeMagnet(".underline" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet();


  var tl = gsap.timeline({scrollTrigger:{
    trigger:"#Men",
    start:"70% 70%",
    end:"100% 100%",
    scrub:true,
    // markers:true
}
    
});
tl
.to(".sale",{
    left:"-20%",

},'a')
.to(".sale2",{
    right:"-15%",
},'a')

// script.js
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000, // Auto scroll to the next slide after 2 seconds
        disableOnInteraction: false, // Keep autoplay active after manual swiping
      },
      speed: 1000, // Transition duration between slides
      loop: true,  // Enable continuous loop mode
      on: {
        slideChangeTransitionStart: function () {
          const slides = document.querySelectorAll('.swiper-slide');
          slides.forEach(slide => {
            const banner = slide.querySelector('.banner');
            if (slide.classList.contains('swiper-slide-active')) {
              banner.style.animation = 'slideIn 1s forwards';
            } else if (slide.classList.contains('swiper-slide-prev')) {
              banner.style.animation = 'slideOut 1s forwards';
            } else {
              banner.style.animation = 'none';
            }
          });
        },
      },
    });
  });

  gsap.from(".hotdeals-word", {
    opacity: 0,
    y: -50,
    stagger: 0.2, // Stagger the animation for each word
    duration: 0.5,
    delay: 0.5,
    ease: "power2.out",
});
  
  document.getElementsByClassName('profile').addEventListener('click',function(){
    window.location.href='profile.html';
  });
