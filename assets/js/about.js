function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.5,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#page1-content h1 span", {
    x: -100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,

  });
  
}
loaderAnimation();

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);

  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
   
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


  ScrollTrigger.refresh();
}

locoScroll();

function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");
 

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      opacity: 1,
    });
  });

  
  page1Content.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}


cursorEffect();

function page2Animation() {
  gsap.from("#page2-bottom .elem h1", {
    y: 120,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 30%",
      end: "top 37%",
      scrub: 3,
    },
  });
}

page2Animation();




function page5MarqueAnimation(){
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 3,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 3,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}
page5MarqueAnimation();





// const burger = document.querySelector(".burger");
// const navLinks = document.getElementById("navLinks");
// const navLinksItems = document.querySelectorAll("#navLinks a");

// burger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
//   // Animate burger to X shape for open menu
//   burger.classList.toggle("open");
// });

// navLinksItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // Close the menu when a link is clicked
//     navLinks.classList.remove("active");
//     burger.classList.remove("open");
//   });
// });


function page3Animation(){
 gsap.from("#page3-top h4", {
   x: -120,
   opacity: 0,
   stagger: 2,
   duration: 2,
   scrollTrigger: {
     trigger: "#page3",
     scroller: "#main",
     start: "top 80%",
     end: "top 90%",
     scrub: 1,

   },
 });
 gsap.from("#page3-top h2", {
   y: 120,
   opacity: 0,
   stagger: 2,
   duration: 4,
   scrollTrigger: {
     trigger: "#page3",
     scroller: "#main",
     start: "top 60%",
     end: "top 80%",
     scrub: 3,

   },
 });
}
page3Animation();

//  gsap.from(".innerExpert img", {
//    y: 120,
//    opacity: 0,
//    stagger: 1,
//    duration: 2,
//    scrollTrigger: {
//      trigger: "#page4",
//      scroller: "#main",
//      start: "top 60%",
//      end: "top 15%",
//      scrub: 3,
//     //  markers:"true"
//    },
//  });

 gsap.from("#page4-content h1", {
   y: 120,
   opacity: 0,
   stagger: 0.5,
   duration: 0.5,
   scrollTrigger: {
     trigger: "#page4",
     scroller: "#main",
     start: "top 70%",
     end: "top 50%",
     scrub: 3,

   },
 });

 function frontend(){
   gsap.from("#page4-content .frontend", {
     y: 120,
     opacity: 0,
     stagger: 0.5,
     duration: 0.5,
     scrollTrigger: {
       trigger: ".frontend",
       scroller: "#main",
       start: "top 70%",
       end: "top 50%",
       scrub: 3,
     },
   });
   gsap.from("#page4-content .frontend h4", {
     y: 120,
     opacity: 0,
     stagger: 0.5,
     duration: 0.5,
     scrollTrigger: {
       trigger: ".frontend",
       scroller: "#main",
       start: "top 70%",
       end: "top 50%",
       scrub: 3,
     },
   });
    gsap.from("#page4-content .frontend h2", {
      x: 120,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".frontend",
        scroller: "#main",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
      },
    });
   gsap.from("#page4-content .frontend img", {
     y: 120,
     opacity: 0,
     stagger: 0.5,
     duration: 0.5,
     scrollTrigger: {
       trigger: ".frontend",
       scroller: "#main",
       start: "top 70%",
       end: "top 50%",
       scrub: 3,
     },
   });
 }
 frontend();

  function backend() {
    gsap.from("#page4-content .backend", {
      y: 120,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".backend",
        scroller: "#main",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,

      },
    });
     gsap.from("#page4-content .backend h4", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".backend",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
    gsap.from("#page4-content .backend h2", {
      x: 120,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".backend",
        scroller: "#main",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
      },
    });
    gsap.from("#page4-content .backend img", {
      y: 120,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".backend",
        scroller: "#main",
        start: "top 60%",
        end: "top 50%",
        scrub: 3,
      },
    });
  }
  backend();

   function cms() {
     gsap.from("#page4-content .cms", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".cms",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
      gsap.from("#page4-content .cms h4", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".cms",
          scroller: "#main",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
     gsap.from("#page4-content .cms h2", {
       x: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".cms",
         scroller: "#main",
         start: "top 60%",
         end: "top 50%",
         scrub: 3,
       },
     });
     gsap.from("#page4-content .cms img", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".cms",
         scroller: "#main",
         start: "top 60%",
         end: "top 50%",
         scrub: 3,
       },
     });
   }
   cms();

   function app() {
     gsap.from("#page4-content .app", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".app",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
      gsap.from("#page4-content .app h4", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".app",
          scroller: "#main",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
     gsap.from("#page4-content .app h2", {
       x: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".app",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
     gsap.from("#page4-content .app img", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".app",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
   }
   app();

  function graphic() {
      gsap.from("#page4-content .graphic", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".graphic",
          scroller: "#main",
          start: "top 60%",
          end: "top 50%",
          scrub: 3,
        },
      });
       gsap.from("#page4-content .graphic h4", {
         y: 120,
         opacity: 0,
         stagger: 0.5,
         duration: 0.5,
         scrollTrigger: {
           trigger: ".graphic",
           scroller: "#main",
           start: "top 60%",
           end: "top 50%",
           scrub: 3,
         },
       });
      gsap.from("#page4-content .graphic h2", {
        x: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".graphic",
          scroller: "#main",
          start: "top 60%",
          end: "top 50%",
          scrub: 3,
        },
      });
      gsap.from("#page4-content .graphic img", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".graphic",
          scroller: "#main",
          start: "top 60%",
          end: "top 50%",
          scrub: 3,
        },
      });
  }
   graphic();

  function video() {
      gsap.from("#page4-content .video", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".video",
          scroller: "#main",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
       gsap.from("#page4-content .video h4", {
         y: 120,
         opacity: 0,
         stagger: 0.5,
         duration: 0.5,
         scrollTrigger: {
           trigger: ".video",
           scroller: "#main",
           start: "top 70%",
           end: "top 50%",
           scrub: 3,
         },
       });
      gsap.from("#page4-content .video h2", {
        x: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".video",
          scroller: "#main",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
      gsap.from("#page4-content .video img", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".video",
          scroller: "#main",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
  }
  video();

  function other() {
     gsap.from("#page4-content .other", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".other",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
      gsap.from("#page4-content .other h4", {
        y: 120,
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".other",
          scroller: "#main",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,

        },
      });
     gsap.from("#page4-content .other h2", {
       x: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".other",
         scroller: "#main",
         start: "top 70%",
         end: "top 50%",
         scrub: 3,
       },
     });
     gsap.from("#page4-content .other img", {
       y: 120,
       opacity: 0,
       stagger: 0.5,
       duration: 0.5,
       scrollTrigger: {
         trigger: ".other",
         scroller: "#main",
         start: "top 90%",
         end: "top 70%",
         scrub: 3,
       },
     });
  }
  other();


// ---------------- 
function team(){
  gsap.from("#team .photo", {
    y: 120,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#team",
      scroller: "#main",
      start: "top 70%",
      end: "top 50%",
      scrub: 3,
    },
  });
  gsap.from("#team .skilsvg", {
    y: 120,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".skilsvg",
      scroller: "#main",
      start: "top 90%",
      end: "top 85%",
      scrub: 4,
    },
  });
}
team();
 
 

//  --------- 

 