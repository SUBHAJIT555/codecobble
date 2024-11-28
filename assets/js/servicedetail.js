function loco() {
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
loco();
// ----------------------------------------------









// ---------- FAQ section animation ------------ 
var arrows = document.getElementsByClassName("iconfaq");
var faqs = document.getElementsByClassName("paragraphfaq");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    faqs[i].classList.toggle("faqtoggle");

    // Toggle rotation based on current state
    if (arrows[i].style.transform === "rotate(585deg)") {
      arrows[i].style.transform = "rotate(0deg)";
    } else {
      arrows[i].style.transform = "rotate(585deg)";
    }
  });
}
// ---------- FAQ section animation End ------------

function locomotive() {
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
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./assets/service assets/male0001.png
./assets/service assets/male0002.png
./assets/service assets/male0003.png
./assets/service assets/male0004.png
./assets/service assets/male0005.png
./assets/service assets/male0006.png
./assets/service assets/male0007.png
./assets/service assets/male0008.png
./assets/service assets/male0009.png
./assets/service assets/male0010.png
./assets/service assets/male0011.png
./assets/service assets/male0012.png
./assets/service assets/male0013.png
./assets/service assets/male0014.png
./assets/service assets/male0015.png
./assets/service assets/male0016.png
./assets/service assets/male0017.png
./assets/service assets/male0018.png
./assets/service assets/male0019.png
./assets/service assets/male0020.png
./assets/service assets/male0021.png
./assets/service assets/male0022.png
./assets/service assets/male0023.png
./assets/service assets/male0024.png
./assets/service assets/male0025.png
./assets/service assets/male0026.png
./assets/service assets/male0027.png
./assets/service assets/male0028.png
./assets/service assets/male0029.png
./assets/service assets/male0030.png
./assets/service assets/male0031.png
./assets/service assets/male0032.png
./assets/service assets/male0033.png
./assets/service assets/male0034.png
./assets/service assets/male0035.png
./assets/service assets/male0036.png
./assets/service assets/male0037.png
./assets/service assets/male0038.png
./assets/service assets/male0039.png
./assets/service assets/male0040.png
./assets/service assets/male0041.png
./assets/service assets/male0042.png
./assets/service assets/male0043.png
./assets/service assets/male0044.png
./assets/service assets/male0045.png
./assets/service assets/male0046.png
./assets/service assets/male0047.png
./assets/service assets/male0048.png
./assets/service assets/male0049.png
./assets/service assets/male0050.png
./assets/service assets/male0051.png
./assets/service assets/male0052.png
./assets/service assets/male0053.png
./assets/service assets/male0054.png
./assets/service assets/male0055.png
./assets/service assets/male0056.png
./assets/service assets/male0057.png
./assets/service assets/male0058.png
./assets/service assets/male0059.png
./assets/service assets/male0060.png
./assets/service assets/male0061.png
./assets/service assets/male0062.png
./assets/service assets/male0063.png
./assets/service assets/male0064.png
./assets/service assets/male0065.png
./assets/service assets/male0066.png
./assets/service assets/male0067.png
./assets/service assets/male0068.png
./assets/service assets/male0069.png
./assets/service assets/male0070.png
./assets/service assets/male0071.png
./assets/service assets/male0072.png
./assets/service assets/male0073.png
./assets/service assets/male0074.png
./assets/service assets/male0075.png
./assets/service assets/male0076.png
./assets/service assets/male0077.png
./assets/service assets/male0078.png
./assets/service assets/male0079.png
./assets/service assets/male0080.png
./assets/service assets/male0081.png
./assets/service assets/male0082.png
./assets/service assets/male0083.png
./assets/service assets/male0084.png
./assets/service assets/male0085.png
./assets/service assets/male0086.png
./assets/service assets/male0087.png
./assets/service assets/male0088.png
./assets/service assets/male0089.png
./assets/service assets/male0090.png
./assets/service assets/male0091.png
./assets/service assets/male0092.png
./assets/service assets/male0093.png
./assets/service assets/male0094.png
./assets/service assets/male0095.png
./assets/service assets/male0096.png
./assets/service assets/male0097.png
./assets/service assets/male0098.png
./assets/service assets/male0099.png
./assets/service assets/male0100.png
./assets/service assets/male0101.png
./assets/service assets/male0102.png
./assets/service assets/male0103.png
./assets/service assets/male0104.png
./assets/service assets/male0105.png
./assets/service assets/male0106.png
./assets/service assets/male0107.png
./assets/service assets/male0108.png
./assets/service assets/male0109.png
./assets/service assets/male0110.png
./assets/service assets/male0111.png
./assets/service assets/male0112.png
./assets/service assets/male0113.png
./assets/service assets/male0114.png
./assets/service assets/male0115.png
./assets/service assets/male0116.png
./assets/service assets/male0117.png
./assets/service assets/male0118.png
./assets/service assets/male0119.png
./assets/service assets/male0120.png
./assets/service assets/male0121.png
./assets/service assets/male0122.png
./assets/service assets/male0123.png
./assets/service assets/male0124.png
./assets/service assets/male0125.png
./assets/service assets/male0126.png
./assets/service assets/male0127.png
./assets/service assets/male0128.png
./assets/service assets/male0129.png
./assets/service assets/male0130.png
./assets/service assets/male0131.png
./assets/service assets/male0132.png
./assets/service assets/male0133.png
./assets/service assets/male0134.png
./assets/service assets/male0135.png
./assets/service assets/male0136.png
./assets/service assets/male0137.png
./assets/service assets/male0138.png
./assets/service assets/male0139.png
./assets/service assets/male0140.png
./assets/service assets/male0141.png
./assets/service assets/male0142.png
./assets/service assets/male0143.png
./assets/service assets/male0144.png
./assets/service assets/male0145.png
./assets/service assets/male0146.png
./assets/service assets/male0147.png
./assets/service assets/male0148.png
./assets/service assets/male0149.png
./assets/service assets/male0150.png
./assets/service assets/male0151.png
./assets/service assets/male0152.png
./assets/service assets/male0153.png
./assets/service assets/male0154.png
./assets/service assets/male0155.png
./assets/service assets/male0156.png
./assets/service assets/male0157.png
./assets/service assets/male0158.png
./assets/service assets/male0159.png
./assets/service assets/male0160.png
./assets/service assets/male0161.png
./assets/service assets/male0162.png
./assets/service assets/male0163.png
./assets/service assets/male0164.png
./assets/service assets/male0165.png
./assets/service assets/male0166.png
./assets/service assets/male0167.png
./assets/service assets/male0168.png
./assets/service assets/male0169.png
./assets/service assets/male0170.png
./assets/service assets/male0171.png
./assets/service assets/male0172.png
./assets/service assets/male0173.png
./assets/service assets/male0174.png
./assets/service assets/male0175.png
./assets/service assets/male0176.png
./assets/service assets/male0177.png
./assets/service assets/male0178.png
./assets/service assets/male0179.png
./assets/service assets/male0180.png
./assets/service assets/male0181.png
./assets/service assets/male0182.png
./assets/service assets/male0183.png
./assets/service assets/male0184.png
./assets/service assets/male0185.png
./assets/service assets/male0186.png
./assets/service assets/male0187.png
./assets/service assets/male0188.png
./assets/service assets/male0189.png
./assets/service assets/male0190.png
./assets/service assets/male0191.png
./assets/service assets/male0192.png
./assets/service assets/male0193.png
./assets/service assets/male0194.png
./assets/service assets/male0195.png
./assets/service assets/male0196.png
./assets/service assets/male0197.png
./assets/service assets/male0198.png
./assets/service assets/male0199.png
./assets/service assets/male0200.png
./assets/service assets/male0201.png
./assets/service assets/male0202.png
./assets/service assets/male0203.png
./assets/service assets/male0204.png
./assets/service assets/male0205.png
./assets/service assets/male0206.png
./assets/service assets/male0207.png
./assets/service assets/male0208.png
./assets/service assets/male0209.png
./assets/service assets/male0210.png
./assets/service assets/male0211.png
./assets/service assets/male0212.png
./assets/service assets/male0213.png
./assets/service assets/male0214.png
./assets/service assets/male0215.png
./assets/service assets/male0216.png
./assets/service assets/male0217.png
./assets/service assets/male0218.png
./assets/service assets/male0219.png
./assets/service assets/male0220.png
./assets/service assets/male0221.png
./assets/service assets/male0222.png
./assets/service assets/male0223.png
./assets/service assets/male0224.png
./assets/service assets/male0225.png
./assets/service assets/male0226.png
./assets/service assets/male0227.png
./assets/service assets/male0228.png
./assets/service assets/male0229.png
./assets/service assets/male0230.png
./assets/service assets/male0231.png
./assets/service assets/male0232.png
./assets/service assets/male0233.png
./assets/service assets/male0234.png
./assets/service assets/male0235.png
./assets/service assets/male0236.png
./assets/service assets/male0237.png
./assets/service assets/male0238.png
./assets/service assets/male0239.png
./assets/service assets/male0240.png
./assets/service assets/male0241.png
./assets/service assets/male0242.png
./assets/service assets/male0243.png
./assets/service assets/male0244.png
./assets/service assets/male0245.png
./assets/service assets/male0246.png
./assets/service assets/male0247.png
./assets/service assets/male0248.png
./assets/service assets/male0249.png
./assets/service assets/male0250.png
./assets/service assets/male0251.png
./assets/service assets/male0252.png
./assets/service assets/male0253.png
./assets/service assets/male0254.png
./assets/service assets/male0255.png
./assets/service assets/male0256.png
./assets/service assets/male0257.png
./assets/service assets/male0258.png
./assets/service assets/male0259.png
./assets/service assets/male0260.png
./assets/service assets/male0261.png
./assets/service assets/male0262.png
./assets/service assets/male0263.png
./assets/service assets/male0264.png
./assets/service assets/male0265.png
./assets/service assets/male0266.png
./assets/service assets/male0267.png
./assets/service assets/male0268.png
./assets/service assets/male0269.png
./assets/service assets/male0270.png
./assets/service assets/male0271.png
./assets/service assets/male0272.png
./assets/service assets/male0273.png
./assets/service assets/male0274.png
./assets/service assets/male0275.png
./assets/service assets/male0276.png
./assets/service assets/male0277.png
./assets/service assets/male0278.png
./assets/service assets/male0279.png
./assets/service assets/male0280.png
./assets/service assets/male0281.png
./assets/service assets/male0282.png
./assets/service assets/male0283.png
./assets/service assets/male0284.png
./assets/service assets/male0285.png
./assets/service assets/male0286.png
./assets/service assets/male0287.png
./assets/service assets/male0288.png
./assets/service assets/male0289.png
./assets/service assets/male0290.png
./assets/service assets/male0291.png
./assets/service assets/male0292.png
./assets/service assets/male0293.png
./assets/service assets/male0294.png
./assets/service assets/male0295.png
./assets/service assets/male0296.png
./assets/service assets/male0297.png
./assets/service assets/male0298.png
./assets/service assets/male0299.png
./assets/service assets/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#hero>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#hero>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#hero1", {
  scrollTrigger: {
    trigger: `#hero1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#hero2", {
  scrollTrigger: {
    trigger: `#hero2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#hero3", {
  scrollTrigger: {
    trigger: `#hero3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});







// ------------------------------------- 
function page2Animation() {
  gsap.from("#page2 .heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".heading",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,

    },
  });
  gsap.from("#page2 .sub-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".sub-heading",
      scroller: "#main",
      start: "top 70%",
      end: "top 60%",
      scrub: 3,

    },
  });
  gsap.from("#page2 #right", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "img",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
}
page2Animation();

function page3Animation() {
  gsap.from("#page3 .page3-heading", {
    y: 200,
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
  gsap.from("#page3 .presence", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".presence",
      scroller: "#main",
      start: "top 70%",
      end: "top 80%",
      scrub: 5,
    },
  });
  
}
page3Animation();

function page4Animation() {
  gsap.from("#page4 #page4-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4-heading",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page4 #page4-subheading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4-subheading",
      scroller: "#main",
      start: "top 70%",
      end: "top 60%",
      scrub: 5,
    },
  });
  gsap.from("#page4 .page4image", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".page4image",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
page4Animation();

function page5Animation() {
  gsap.from("#page5 .page5-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page5 .topic", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".topic",
      scroller: "#main",
      start: "top 70%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
page5Animation();

function page6Animation() {
  gsap.from("#page6 .page6-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page6 .technology", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".technology",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page6 .technology img", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".technology",
      scroller: "#main",
      start: "top 70%",
      end: "top 90%",
      scrub: 3,
    },
  });
}
page6Animation();

function servicesAnimation() {
  gsap.from("#page-otherservices .otherservices-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page-otherservices",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page-otherservices .service", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".service",
      scroller: "#main",
      start: "top 70%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
servicesAnimation();

function page7Animation() {
  gsap.from("#page7 #page7-heading", {
    y: 300,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page7 #faq", {
    y: 500,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
page7Animation();

function page8Animation() {
  gsap.from("#page8 #page8-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page8 .input-container", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page8 #contact-button", {
    y: 500,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
}
page8Animation();