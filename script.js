
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
  transform: "rotate(45deg)",
  scale: 1.1,
  duration: 3,
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
