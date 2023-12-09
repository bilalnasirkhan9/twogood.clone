
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
}

locomotive()
gsap.to("#floting", {
  transform: "translateY(-53%)",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    markers: false,
    start: "top 0",
    end: "top -5%",
    scrub: 0.20,
  }
});

gsap.to("#floting", {
  transform: "translateY(0%)",
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    markers: false,
    start: "top 20%",
    end: "top 20%",
    scrub: 0.20,
    onEnter: () => {
      gsap.to("#floting", {
        transform: "translateY(0%)",
        duration: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to("#floting", {
        transform: "translateY(-53%)",
        duration: 0.2
      });
    }
  }
});


gsap.to("#links .links_href",{
  transform: "translateY(-100%)",
  opacity: 0,
  scrollTrigger:{
    trigger: "#page1",
    scroller: "#main",
    markers: false,
    start: "top 0",
    end: "top -5%",
    scrub: 0.20,
  }
})

gsap.from("#privacy_logo_img",{
  transform: "rotate(10deg)",
  scale: 1,
  duration: 1,
  opacity: 0,
  scrollTrigger:{
    trigger: "#page6",
    scroller: "#main",
    markers: false,
    start: "top 65%",
    end: "top 20%",
    scrub: 0.20,
  }
})

function nav_Animation() {

  gsap.from("#logo h3", {
    y: -105,
    delay: 0.2,
    duration: 0.5,
  })

  gsap.from("#links a", {
    y: -25,
    delay: 0.3,
    opacity: 0,
    duration: 0.5,
  })

  gsap.from("#menu_btn", {
    y: -25,
    delay: 0.3,
    duration: 0.5,
  })
}

function hero_Animation() {
  const timeline = gsap.timeline();
  timeline.from("#page1 h1", {
    y: 150,
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
    stagger: 0.15,
  })

  gsap.from("#page1 #featured_video", {
    y: 95,
    opacity: 0,
    delay: 0.6,
    duration: 0.6,
    stagger: 0.4,
  })
}

function videoPlayBtn() {
  var videocon = document.querySelector("#featured_video");
  var videoplay = document.querySelector("#video_play");

  videocon.addEventListener("mouseenter", function () {
    gsap.to(videoplay, {
      scale: 1,
      opacity: 1,
    })
  })
  videocon.addEventListener("mouseleave", function () {
    gsap.to(videoplay, {
      scale: 0,
      opacity: 0,
    })
  })

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(videoplay, {
      top: dets.y,
      left: dets.x,
    })
  })
}

nav_Animation()
hero_Animation();
videoPlayBtn();

const goodnessCards = document.querySelectorAll('.goodness_card');
const goodnessCont = document.querySelector('.goodness_cont');
const circleanim = document.querySelector(".side_circle2");
const circlebhai = document.getElementsByClassName('bound_h3_1')
const cardCount = goodnessCards.length;
const cardWidth = goodnessCards[0].offsetWidth;

let currentCardIndex = 0;

goodnessCards.forEach((card, index) => {
    card.addEventListener('click', () => centerCard(index));
});

function centerCard(cardIndex) {
    const leftDistance = (cardIndex - currentCardIndex + cardCount) % cardCount;
    const rightDistance = (currentCardIndex - cardIndex + cardCount) % cardCount;

    // Determine whether to scroll left or right based on the shortest distance.
    if (leftDistance <= rightDistance) {
        currentCardIndex = (currentCardIndex + leftDistance) % cardCount;
    } else {
        currentCardIndex = (currentCardIndex - rightDistance + cardCount) % cardCount;
    }

    scrollCards();
}

function scrollCards() {
    const scrollLeft = currentCardIndex * cardWidth;
    goodnessCont.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
    });
}

function hidePlaceholder(input) {
  input.placeholder = '';
  var placeholderImage = document.querySelector('#placeholderImage')
  placeholderImage.style.display = "none";
  
}
var animcommit = document.querySelectorAll(".bounding_h3 h3");
var goodnessCard = document.querySelector("#card1");
var animationTriggered = false; 

function getbhai(){
  console.log("hello world")
}
goodnessCards.forEach(function(card) {
  card.addEventListener("click", function() {
      circleanim.style.backgroundColor = 'black';
      getbhai();
  });
});




function clientComments() {
    gsap.from(animcommit, {
      y: 150,
      opacity: 0,
      delay: 0.1, 
      duration: 0.4,
      stagger: 0.08,
     
    });
  }

var connectCont = document.querySelector('##get_message')

connectCont.addEventListener('click',function(){
  connectCont.style.backgroundColor = "blue"
  connectCont.style.marginBottom = "-180px"
  connectCont.style.borderRadius = "25px"
  /*   
    .carousel_slider:hover {
      height: 230px;
      margin-bottom: -180px;
      border-radius: 25px;
    } */

})












