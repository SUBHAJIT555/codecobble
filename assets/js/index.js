function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

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
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
  });
}
loaderAnimation();

gsap.to("#page>video", {
  scrollTrigger: {
    trigger: `#page>video`,
    start: `2% top`,
    end: `bottom top`,
    scroller: `#main`,
  },
  onStart: () => {
    document.querySelector("#page>video").play();
  },
});

gsap.to("#page", {
  scrollTrigger: {
    trigger: `#page`,
    start: `top top`,
    end: `bottom top`,
    scroller: `#main`,
    pin: true,
  },
});

gsap.to("#page-bottom", {
  scrollTrigger: {
    trigger: `#page-bottom`,
    start: `5% top`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: 0.5,
  },
  opacity: 0,
});

function canvas2() {
  const canvas = document.querySelector("#page-videosolution>canvas");
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
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00000.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00001.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00002.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00003.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00004.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00005.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00006.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00007.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00008.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00009.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00010.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00011.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00012.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00013.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00014.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00015.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00016.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00017.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00018.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00019.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00020.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00021.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00022.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00023.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00024.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00025.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00026.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00027.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00028.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00029.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00030.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00031.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00032.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00033.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00034.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00035.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00036.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00037.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00038.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00039.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00040.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00041.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00042.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00043.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00044.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00045.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00046.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00047.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00048.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00049.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00050.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00051.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00052.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00053.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00054.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00055.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00056.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00057.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00058.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00059.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00060.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00061.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00062.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00063.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00064.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00065.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00066.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00067.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00068.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00069.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00070.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00071.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00072.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00073.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00074.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00075.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00076.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00077.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00078.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00079.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00080.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00081.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00082.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00083.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00084.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00085.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00086.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00087.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00088.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00089.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00090.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00091.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00092.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00093.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00094.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00095.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00096.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00097.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00098.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00099.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00100.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00101.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00102.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00103.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00104.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00105.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00106.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00107.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00108.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00109.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00110.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00111.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00112.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00113.webp
/assets/canvas-asstes/videosolution/Video-solution_video-solution_00114.webp
`;
    return data.split("\n")[index];
  }

  const frameCount = 115;
  const images = [];
  const imageSeq = {
    frame: 0.5,
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
      trigger: `#page-videosolution`,
      //   set start end according to preference
      start: `top top`,
      end: `80% top`,
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
    trigger: "#page-videosolution",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `150% top`,
  });
}
canvas2();


// --------------------------------------- 

 
// ----------------------------------------- 



function videosolutionText(){
  var clutter = "";

  document
    .querySelector("#videosolution-content>h1")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;

      document.querySelector("#videosolution-content>h1").innerHTML = clutter;
    });

  gsap.to("#videosolution-content>h1>span", {
    scrollTrigger: {
      trigger: `#videosolution-content>h1>span`,
      start: `top bottom`,
      end: `bottom top`,
      scroller: `#main`,
      scrub: 0.5,
    },
    stagger: 0.2,
    color: `white`,
  });
}
videosolutionText();

function page5TextAnimation(){
  var clutter = "";

  document
    .querySelector(".right5 p")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;

      document.querySelector(".right5>p").innerHTML = clutter;
    });

  gsap.to(".right5>p>span", {
    scrollTrigger: {
      trigger: `.right5>p>span`,
      start: `top -170%`,
      end: `bottom 100%`,
      scroller: `#main`,
      scrub: 0.1,
    },
    stagger: 1,
    color: `white`,
  });
}
page5TextAnimation();




var tl = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl.to("#page1>h1", {
  top: `-50%`,
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl1.to("#page2>h1", {
  top: `-50%`,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl2.to("#page4>#center-page4", {
  top: `-50%`,
});

function canvas() {
  const canvas = document.querySelector("#page7>canvas");
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
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0000.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0001.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0002.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0003.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0004.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0005.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0006.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0007.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0008.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0009.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0010.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0011.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0012.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0013.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0014.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0015.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0016.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0017.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0018.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0019.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0020.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0021.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0022.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0023.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0024.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0025.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0026.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0027.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0028.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0029.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0030.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0031.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0032.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0033.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0034.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0035.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0036.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0037.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0038.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0039.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0040.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0041.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0042.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0043.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0044.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0045.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0046.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0047.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0048.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0049.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0050.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0051.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0052.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0053.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0054.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0055.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0056.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0057.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0058.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0059.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0060.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0061.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0062.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0063.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0064.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0065.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0066.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0067.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0068.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0069.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0070.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0071.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0072.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0073.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0074.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0075.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0076.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0077.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0078.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0079.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0080.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0081.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0082.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0083.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0084.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0085.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0086.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0087.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0088.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0089.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0090.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0091.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0092.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0093.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0094.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0095.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0096.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0097.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0098.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0099.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0100.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0101.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0102.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0103.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0104.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0105.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0106.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0107.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0108.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0109.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0110.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0111.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0112.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0113.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0114.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0115.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0116.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0117.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0118.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0119.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0120.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0121.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0122.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0123.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0124.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0125.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0126.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0127.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0128.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0129.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0130.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0131.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0132.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0133.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0134.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0135.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0136.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0137.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0138.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0139.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0140.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0141.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0142.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0143.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0144.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0145.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0146.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0147.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0148.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0149.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0150.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0151.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0153.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0154.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0155.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0156.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0157.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0158.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0159.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0160.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0161.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0162.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0163.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0164.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0165.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0166.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0167.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0168.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0169.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0170.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0171.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0172.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0173.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0174.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0175.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0176.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0177.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0178.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0179.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0180.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0181.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0182.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0183.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0184.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0185.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0186.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0187.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0188.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0189.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0190.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0191.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0192.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0193.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0194.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0195.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0196.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0197.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0198.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0199.jpg
 `;
    return data.split("\n")[index];
  }

  const frameCount = 198;

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
      trigger: `#page7>canvas`,
      //   set start end according to preference
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
    var ratio = Math.min(hRatio, vRatio);
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
    trigger: "#page7>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}
canvas();

function canvas1() {
  const canvas = document.querySelector("#page18>canvas");
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
/assets/img/canvas/Vision00001.png
/assets/img/canvas/Vision00002.png
/assets/img/canvas/Vision00003.png
/assets/img/canvas/Vision00004.png
/assets/img/canvas/Vision00005.png
/assets/img/canvas/Vision00006.png
/assets/img/canvas/Vision00007.png
/assets/img/canvas/Vision00008.png
/assets/img/canvas/Vision00009.png
/assets/img/canvas/Vision00010.png
/assets/img/canvas/Vision00011.png
/assets/img/canvas/Vision00012.png
/assets/img/canvas/Vision00013.png
/assets/img/canvas/Vision00014.png
/assets/img/canvas/Vision00015.png
/assets/img/canvas/Vision00016.png
/assets/img/canvas/Vision00017.png
/assets/img/canvas/Vision00018.png
/assets/img/canvas/Vision00019.png
/assets/img/canvas/Vision00020.png
/assets/img/canvas/Vision00021.png
/assets/img/canvas/Vision00022.png
/assets/img/canvas/Vision00023.png
/assets/img/canvas/Vision00024.png
/assets/img/canvas/Vision00025.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 25;

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
      trigger: `#page18`,
      //   set start end according to preference
      start: `top top`,
      end: `80% top`,
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
    trigger: "#page18",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `80% top`,
  });
}
canvas1();

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page21`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl3.to("#page21>#troff", {
  opacity: 0,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page22`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl4.to("#page22>#snroff", {
  opacity: 0,
});

gsap.to("#page23>img", {
  scrollTrigger: {
    trigger: `#page23>img`,
    start: `top bottom`,
    end: `bottom 60%`,
    scrub: 0.5,
    scroller: `#main`,
  },
  opacity: 1,
});

const burger = document.querySelector(".burger");
const navLinks = document.getElementById("navLinks");
const navLinksItems = document.querySelectorAll("#navLinks a");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Animate burger to X shape for open menu
  burger.classList.toggle("open");
});

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close the menu when a link is clicked
    navLinks.classList.remove("active");
    burger.classList.remove("open");
  });
});

$(document).ready(function () {
  $("html,body").addClass("overflow");
  setTimeout(() => {
    $("html,body").removeClass("overflow");
  }, 2500);

  gsap.registerPlugin(ScrollTrigger);

  var $animeCard = document.querySelector(".anime-card-inner");
  //loader img
  gsap.set($animeCard, {
    rotationY: 90,
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    width: "40vh",
    height: "40vh",
    scale: 1,
  });

  //img set
  gsap.set(".anime-card-front img", {
    attr: {
      src: "https://www.yudiz.com/codepen/gsap-landing-page/tanjiro.jpg",
    },
  });
  gsap.set(".anime-card-back img", {
    attr: {
      src: "https://www.yudiz.com/codepen/gsap-landing-page/zenitsu.jpg",
    },
  });

  //Main card-wrapper
  gsap.set(".anime-card", { x: "50%", y: "50%" });

  // Main-text animation
  //Main text load
  gsap.set(".main-txt", { opacity: 0, yPercent: 50 });
  const mainTxt = gsap.timeline();
  mainTxt.to(".main-txt", { opacity: 1, yPercent: -50, duration: 2 });

  //Main text opacity down
  const mainTxt2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-txt",
      start: "center center",
      end: "+=50",
      markers: false,
      scrub: 1,
    },
  });
  mainTxt2.to(".main-txt", { opacity: 0, ease: "linear" });

  //loader to scale
  const tl = gsap.timeline();
  tl.to($animeCard, {
    rotationY: 0,
    ease: Expo.easeIn,
    duration: 2.5,
    scale: 1,
    width: "100vw",
    height: "100vh",
  });

  //Banner one image scale down
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "center center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t2.to($animeCard, {
      height: "60vh",
      width: "472.5px",
      left: "calc(243.75px + (50% - 585px) + 682.5px)",
    });
  } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t2.to($animeCard, {
      height: "60vh",
      width: "465px",
      left: "calc(240px + (50% - 480px) + 480px)",
    });
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t2.to($animeCard, {
      height: "60vh",
      width: "345px",
      left: "calc(180px + (50% - 360px) + 360px)",
    });
  } else if (window.innerWidth <= 767) {
    t2.to($animeCard, {
      height: "calc(100vh - 340px)",
      width: "95%",
      left: "50%",
      top: "calc(100% - 40px)",
      yPercent: -100,
    });
  } else {
    t2.to($animeCard, {
      height: "60vh",
      width: "535px",
      left: "calc(275px + (50% - 660px) + 770px)",
    });
  }

  gsap.to(".main-wallpaper", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".banner",
      start: "center+=" + 100 + " center",
      end: "bottom center",
      markers: false,
      scrub: 1,
    },
  });

  //Banner text-animation
  gsap.set(".banner-content", { opacity: 0, yPercent: 50 });
  gsap.to(".banner-content", {
    ease: "linear",
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".banner",
      start: "center+=" + 300 + " center",
      end: "+=200",
      markers: false,
      scrub: 1,
    },
  });

  //Banner animation
  gsap.to(".banner", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner two animation
  gsap.to(".banner-two", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner-two",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner two image rotation
  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-two",
      start: "top center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth <= 767) {
    t3.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
      top: "50%",
      yPercent: -50,
    });
  } else {
    t3.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
    });
  }

  //Banner three animation
  gsap.to(".banner-three", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner-three",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner three image rotation
  const t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-three",
      start: "top center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "472.5px",
      left: "calc((50% - 585px) + 243.75px)",
    });
  } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "465px",
      left: "calc((50% - 465px) + 240px)",
    });
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "345px",
      left: "calc((50% - 360px) + 180px)",
    });
  } else if (window.innerWidth <= 767) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "calc(100vh - 340px)",
      width: "95%",
      left: "50%",
      top: "calc(100% - 40px)",
      yPercent: -100,
    });
  } else {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "535px",
      left: "calc((50% - 660px) + 275px)",
    });
  }

  //Banner four animation
  gsap.to(".banner-four", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner-four",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner four image rotation
  const t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-four",
      start: "top center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth <= 767) {
    t5.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
      top: "50%",
      yPercent: -50,
    });
  } else {
    t5.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
    });
  }

  // Main wrapper card
  gsap.to(".anime-card", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".anime-card",
      start: "top top",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  //slider-left img animation
  gsap.set(".slider-left img:first-child", { xPercent: 50 });
  gsap.set(".slider-left img:not(:first-child)", { xPercent: 100 });
  gsap.to(".slider-left .img-1", {
    ease: "none",
    xPercent: -95,
    scale: 0.6,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 180 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-2", {
    ease: "none",
    xPercent: -70,
    scale: 0.7,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 360 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-3", {
    ease: "none",
    xPercent: -40,
    scale: 0.8,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 540 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-4", {
    ease: "none",
    xPercent: -10,
    scale: 0.9,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 720 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-5", {
    ease: "none",
    xPercent: 20,
    scale: 1,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 800 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });

  // slider right img animation
  gsap.set(".slider-right img:first-child", { xPercent: -50 });
  gsap.set(".slider-right img:not(:first-child)", { xPercent: -100 });
  gsap.to(".slider-right .img-1", {
    ease: "none",
    xPercent: 95,
    scale: 0.6,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 180 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-2", {
    ease: "none",
    xPercent: 70,
    scale: 0.7,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 360 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-3", {
    ease: "none",
    xPercent: 40,
    scale: 0.8,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 540 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-4", {
    ease: "none",
    xPercent: 10,
    scale: 0.9,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 720 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-5", {
    ease: "none",
    xPercent: -20,
    scale: 1,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 800 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });

  //slider card
  gsap.to(".slider-card", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center center",
      end: "+=1000",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  // image source changed
  gsap.to(".anime-card-front img", {
    attr: {
      src: "https://www.yudiz.com/codepen/gsap-landing-page/inosuke.jpg",
    },
    scrollTrigger: {
      trigger: ".banner-three",
      start: "top bottom",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      scrub: 1,
    },
  });

  gsap.to(".anime-card-back img", {
    attr: { src: "https://www.yudiz.com/codepen/gsap-landing-page/nezuko.png" },
    scrollTrigger: {
      trigger: ".banner-four",
      start: "top bottom",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      scrub: 1,
    },
  });
});

///////////////////////////
const cursor = document.querySelector(".cb-cursor");
window.onpointermove = (event) => {
  const { clientX, clientY } = event;
  cursor.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
const elements = [...document.querySelectorAll("h2 div")];
elements.map((element) => {
  element.onmouseover = () => {
    cursor.classList.add("-video");
  };
  element.onmouseout = () => {
    cursor.classList.remove("-video");
  };
});

// --------------------------------------------------------------------------
