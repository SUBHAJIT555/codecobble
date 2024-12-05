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

// -------- canvas for video solution ----- 


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
      trigger: `#page-videosolution`,
      //   set start end according to preference
      start: `-50% top`,
      end: `+=2150`,
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
    end: `140% top`,
  });
}
canvas2();






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


// -------------- canvas for hero section ----- 

function canvas(){
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
          /assets/canvas-asstes/home/About_video_00021.webp
/assets/canvas-asstes/home/About_video_00022.webp
/assets/canvas-asstes/home/About_video_00023.webp
/assets/canvas-asstes/home/About_video_00024.webp
/assets/canvas-asstes/home/About_video_00025.webp
/assets/canvas-asstes/home/About_video_00026.webp
/assets/canvas-asstes/home/About_video_00027.webp
/assets/canvas-asstes/home/About_video_00028.webp
/assets/canvas-asstes/home/About_video_00029.webp
/assets/canvas-asstes/home/About_video_00030.webp
/assets/canvas-asstes/home/About_video_00031.webp
/assets/canvas-asstes/home/About_video_00032.webp
/assets/canvas-asstes/home/About_video_00033.webp
/assets/canvas-asstes/home/About_video_00034.webp
/assets/canvas-asstes/home/About_video_00035.webp
/assets/canvas-asstes/home/About_video_00036.webp
/assets/canvas-asstes/home/About_video_00037.webp
/assets/canvas-asstes/home/About_video_00038.webp
/assets/canvas-asstes/home/About_video_00039.webp
/assets/canvas-asstes/home/About_video_00040.webp
/assets/canvas-asstes/home/About_video_00041.webp
/assets/canvas-asstes/home/About_video_00042.webp
/assets/canvas-asstes/home/About_video_00043.webp
/assets/canvas-asstes/home/About_video_00044.webp
/assets/canvas-asstes/home/About_video_00045.webp
/assets/canvas-asstes/home/About_video_00046.webp
/assets/canvas-asstes/home/About_video_00047.webp
/assets/canvas-asstes/home/About_video_00048.webp
/assets/canvas-asstes/home/About_video_00049.webp
/assets/canvas-asstes/home/About_video_00050.webp
/assets/canvas-asstes/home/About_video_00051.webp
/assets/canvas-asstes/home/About_video_00052.webp
/assets/canvas-asstes/home/About_video_00053.webp
/assets/canvas-asstes/home/About_video_00054.webp
/assets/canvas-asstes/home/About_video_00055.webp
/assets/canvas-asstes/home/About_video_00056.webp
/assets/canvas-asstes/home/About_video_00057.webp
/assets/canvas-asstes/home/About_video_00058.webp
/assets/canvas-asstes/home/About_video_00059.webp
/assets/canvas-asstes/home/About_video_00060.webp
/assets/canvas-asstes/home/About_video_00061.webp
/assets/canvas-asstes/home/About_video_00062.webp
/assets/canvas-asstes/home/About_video_00063.webp
/assets/canvas-asstes/home/About_video_00064.webp
/assets/canvas-asstes/home/About_video_00065.webp
/assets/canvas-asstes/home/About_video_00066.webp
/assets/canvas-asstes/home/About_video_00067.webp
/assets/canvas-asstes/home/About_video_00068.webp
/assets/canvas-asstes/home/About_video_00069.webp
/assets/canvas-asstes/home/About_video_00070.webp
/assets/canvas-asstes/home/About_video_00071.webp
/assets/canvas-asstes/home/About_video_00072.webp
/assets/canvas-asstes/home/About_video_00073.webp
/assets/canvas-asstes/home/About_video_00074.webp
/assets/canvas-asstes/home/About_video_00075.webp
/assets/canvas-asstes/home/About_video_00076.webp
/assets/canvas-asstes/home/About_video_00077.webp
/assets/canvas-asstes/home/About_video_00078.webp
/assets/canvas-asstes/home/About_video_00079.webp
/assets/canvas-asstes/home/About_video_00080.webp
/assets/canvas-asstes/home/About_video_00081.webp
/assets/canvas-asstes/home/About_video_00082.webp
/assets/canvas-asstes/home/About_video_00083.webp
/assets/canvas-asstes/home/About_video_00084.webp
/assets/canvas-asstes/home/About_video_00085.webp
/assets/canvas-asstes/home/About_video_00086.webp
/assets/canvas-asstes/home/About_video_00087.webp
/assets/canvas-asstes/home/About_video_00088.webp
/assets/canvas-asstes/home/About_video_00089.webp
/assets/canvas-asstes/home/About_video_00090.webp
/assets/canvas-asstes/home/About_video_00091.webp
/assets/canvas-asstes/home/About_video_00092.webp
/assets/canvas-asstes/home/About_video_00093.webp
/assets/canvas-asstes/home/About_video_00094.webp
/assets/canvas-asstes/home/About_video_00095.webp
/assets/canvas-asstes/home/About_video_00096.webp
/assets/canvas-asstes/home/About_video_00097.webp
/assets/canvas-asstes/home/About_video_00098.webp
/assets/canvas-asstes/home/About_video_00099.webp
/assets/canvas-asstes/home/About_video_00100.webp
/assets/canvas-asstes/home/About_video_00101.webp
/assets/canvas-asstes/home/About_video_00102.webp
/assets/canvas-asstes/home/About_video_00103.webp
/assets/canvas-asstes/home/About_video_00104.webp
/assets/canvas-asstes/home/About_video_00105.webp
/assets/canvas-asstes/home/About_video_00106.webp
/assets/canvas-asstes/home/About_video_00107.webp
/assets/canvas-asstes/home/About_video_00108.webp
/assets/canvas-asstes/home/About_video_00109.webp
/assets/canvas-asstes/home/About_video_00110.webp
/assets/canvas-asstes/home/About_video_00111.webp
/assets/canvas-asstes/home/About_video_00112.webp
/assets/canvas-asstes/home/About_video_00113.webp
/assets/canvas-asstes/home/About_video_00114.webp
/assets/canvas-asstes/home/About_video_00115.webp
/assets/canvas-asstes/home/About_video_00116.webp
/assets/canvas-asstes/home/About_video_00117.webp
/assets/canvas-asstes/home/About_video_00118.webp
/assets/canvas-asstes/home/About_video_00119.webp
/assets/canvas-asstes/home/About_video_00120.webp
/assets/canvas-asstes/home/About_video_00121.webp
/assets/canvas-asstes/home/About_video_00122.webp
/assets/canvas-asstes/home/About_video_00123.webp
/assets/canvas-asstes/home/About_video_00124.webp
/assets/canvas-asstes/home/About_video_00125.webp
/assets/canvas-asstes/home/About_video_00126.webp
/assets/canvas-asstes/home/About_video_00127.webp
/assets/canvas-asstes/home/About_video_00128.webp
/assets/canvas-asstes/home/About_video_00129.webp
/assets/canvas-asstes/home/About_video_00130.webp
/assets/canvas-asstes/home/About_video_00131.webp
/assets/canvas-asstes/home/About_video_00132.webp
/assets/canvas-asstes/home/About_video_00133.webp
/assets/canvas-asstes/home/About_video_00134.webp
/assets/canvas-asstes/home/About_video_00135.webp
/assets/canvas-asstes/home/About_video_00136.webp
/assets/canvas-asstes/home/About_video_00137.webp
/assets/canvas-asstes/home/About_video_00138.webp
/assets/canvas-asstes/home/About_video_00139.webp
/assets/canvas-asstes/home/About_video_00140.webp
/assets/canvas-asstes/home/About_video_00141.webp
/assets/canvas-asstes/home/About_video_00142.webp
/assets/canvas-asstes/home/About_video_00143.webp
/assets/canvas-asstes/home/About_video_00144.webp
/assets/canvas-asstes/home/About_video_00145.webp
/assets/canvas-asstes/home/About_video_00146.webp
/assets/canvas-asstes/home/About_video_00147.webp
/assets/canvas-asstes/home/About_video_00148.webp
/assets/canvas-asstes/home/About_video_00149.webp
/assets/canvas-asstes/home/About_video_00150.webp
/assets/canvas-asstes/home/About_video_00151.webp
/assets/canvas-asstes/home/About_video_00152.webp
/assets/canvas-asstes/home/About_video_00153.webp
/assets/canvas-asstes/home/About_video_00154.webp
/assets/canvas-asstes/home/About_video_00155.webp
/assets/canvas-asstes/home/About_video_00156.webp
/assets/canvas-asstes/home/About_video_00157.webp
/assets/canvas-asstes/home/About_video_00158.webp
/assets/canvas-asstes/home/About_video_00159.webp
/assets/canvas-asstes/home/About_video_00160.webp
/assets/canvas-asstes/home/About_video_00161.webp
/assets/canvas-asstes/home/About_video_00162.webp
/assets/canvas-asstes/home/About_video_00163.webp
/assets/canvas-asstes/home/About_video_00164.webp
/assets/canvas-asstes/home/About_video_00165.webp
/assets/canvas-asstes/home/About_video_00166.webp
/assets/canvas-asstes/home/About_video_00167.webp
/assets/canvas-asstes/home/About_video_00168.webp
/assets/canvas-asstes/home/About_video_00169.webp
/assets/canvas-asstes/home/About_video_00170.webp
/assets/canvas-asstes/home/About_video_00171.webp
/assets/canvas-asstes/home/About_video_00172.webp
/assets/canvas-asstes/home/About_video_00173.webp
/assets/canvas-asstes/home/About_video_00174.webp
/assets/canvas-asstes/home/About_video_00175.webp
/assets/canvas-asstes/home/About_video_00176.webp
/assets/canvas-asstes/home/About_video_00177.webp
/assets/canvas-asstes/home/About_video_00178.webp
/assets/canvas-asstes/home/About_video_00179.webp
/assets/canvas-asstes/home/About_video_00180.webp
/assets/canvas-asstes/home/About_video_00181.webp
/assets/canvas-asstes/home/About_video_00182.webp
/assets/canvas-asstes/home/About_video_00183.webp
/assets/canvas-asstes/home/About_video_00184.webp
/assets/canvas-asstes/home/About_video_00185.webp
/assets/canvas-asstes/home/About_video_00186.webp
/assets/canvas-asstes/home/About_video_00187.webp
/assets/canvas-asstes/home/About_video_00188.webp
/assets/canvas-asstes/home/About_video_00189.webp
/assets/canvas-asstes/home/About_video_00190.webp
/assets/canvas-asstes/home/About_video_00191.webp
/assets/canvas-asstes/home/About_video_00192.webp
/assets/canvas-asstes/home/About_video_00193.webp
/assets/canvas-asstes/home/About_video_00194.webp
/assets/canvas-asstes/home/About_video_00195.webp
/assets/canvas-asstes/home/About_video_00196.webp
/assets/canvas-asstes/home/About_video_00197.webp
/assets/canvas-asstes/home/About_video_00198.webp
/assets/canvas-asstes/home/About_video_00199.webp
/assets/canvas-asstes/home/About_video_00200.webp
/assets/canvas-asstes/home/About_video_00201.webp
/assets/canvas-asstes/home/About_video_00202.webp
/assets/canvas-asstes/home/About_video_00203.webp
/assets/canvas-asstes/home/About_video_00204.webp
/assets/canvas-asstes/home/About_video_00205.webp
/assets/canvas-asstes/home/About_video_00206.webp
/assets/canvas-asstes/home/About_video_00207.webp
/assets/canvas-asstes/home/About_video_00208.webp
/assets/canvas-asstes/home/About_video_00209.webp
/assets/canvas-asstes/home/About_video_00210.webp
/assets/canvas-asstes/home/About_video_00211.webp
/assets/canvas-asstes/home/About_video_00212.webp
/assets/canvas-asstes/home/About_video_00213.webp
/assets/canvas-asstes/home/About_video_00214.webp
/assets/canvas-asstes/home/About_video_00215.webp
/assets/canvas-asstes/home/About_video_00216.webp
/assets/canvas-asstes/home/About_video_00217.webp
/assets/canvas-asstes/home/About_video_00218.webp
/assets/canvas-asstes/home/About_video_00219.webp
/assets/canvas-asstes/home/About_video_00220.webp
/assets/canvas-asstes/home/About_video_00221.webp
/assets/canvas-asstes/home/About_video_00222.webp
/assets/canvas-asstes/home/About_video_00223.webp
/assets/canvas-asstes/home/About_video_00224.webp
/assets/canvas-asstes/home/About_video_00225.webp
/assets/canvas-asstes/home/About_video_00226.webp
/assets/canvas-asstes/home/About_video_00227.webp
/assets/canvas-asstes/home/About_video_00228.webp
/assets/canvas-asstes/home/About_video_00229.webp
/assets/canvas-asstes/home/About_video_00230.webp
/assets/canvas-asstes/home/About_video_00231.webp
/assets/canvas-asstes/home/About_video_00232.webp
/assets/canvas-asstes/home/About_video_00233.webp
/assets/canvas-asstes/home/About_video_00234.webp
/assets/canvas-asstes/home/About_video_00235.webp
/assets/canvas-asstes/home/About_video_00236.webp
/assets/canvas-asstes/home/About_video_00237.webp
/assets/canvas-asstes/home/About_video_00238.webp
/assets/canvas-asstes/home/About_video_00239.webp
/assets/canvas-asstes/home/About_video_00240.webp
/assets/canvas-asstes/home/About_video_00241.webp
/assets/canvas-asstes/home/About_video_00242.webp
/assets/canvas-asstes/home/About_video_00243.webp
/assets/canvas-asstes/home/About_video_00244.webp
/assets/canvas-asstes/home/About_video_00245.webp
/assets/canvas-asstes/home/About_video_00246.webp
/assets/canvas-asstes/home/About_video_00247.webp
/assets/canvas-asstes/home/About_video_00248.webp
/assets/canvas-asstes/home/About_video_00249.webp
/assets/canvas-asstes/home/About_video_00250.webp
/assets/canvas-asstes/home/About_video_00251.webp
/assets/canvas-asstes/home/About_video_00252.webp
/assets/canvas-asstes/home/About_video_00253.webp
/assets/canvas-asstes/home/About_video_00254.webp
/assets/canvas-asstes/home/About_video_00255.webp
/assets/canvas-asstes/home/About_video_00256.webp
/assets/canvas-asstes/home/About_video_00257.webp
/assets/canvas-asstes/home/About_video_00258.webp
/assets/canvas-asstes/home/About_video_00259.webp
/assets/canvas-asstes/home/About_video_00260.webp
/assets/canvas-asstes/home/About_video_00261.webp
/assets/canvas-asstes/home/About_video_00262.webp
/assets/canvas-asstes/home/About_video_00263.webp
/assets/canvas-asstes/home/About_video_00264.webp
/assets/canvas-asstes/home/About_video_00265.webp
/assets/canvas-asstes/home/About_video_00266.webp
/assets/canvas-asstes/home/About_video_00267.webp
/assets/canvas-asstes/home/About_video_00268.webp
/assets/canvas-asstes/home/About_video_00269.webp
/assets/canvas-asstes/home/About_video_00270.webp
/assets/canvas-asstes/home/About_video_00271.webp
/assets/canvas-asstes/home/About_video_00272.webp
/assets/canvas-asstes/home/About_video_00273.webp
/assets/canvas-asstes/home/About_video_00274.webp
/assets/canvas-asstes/home/About_video_00275.webp
/assets/canvas-asstes/home/About_video_00276.webp
/assets/canvas-asstes/home/About_video_00277.webp
/assets/canvas-asstes/home/About_video_00278.webp
/assets/canvas-asstes/home/About_video_00279.webp
/assets/canvas-asstes/home/About_video_00280.webp
/assets/canvas-asstes/home/About_video_00281.webp
/assets/canvas-asstes/home/About_video_00282.webp
/assets/canvas-asstes/home/About_video_00283.webp
/assets/canvas-asstes/home/About_video_00284.webp
/assets/canvas-asstes/home/About_video_00285.webp
/assets/canvas-asstes/home/About_video_00286.webp
/assets/canvas-asstes/home/About_video_00287.webp
/assets/canvas-asstes/home/About_video_00288.webp
/assets/canvas-asstes/home/About_video_00289.webp
/assets/canvas-asstes/home/About_video_00290.webp
/assets/canvas-asstes/home/About_video_00291.webp
/assets/canvas-asstes/home/About_video_00292.webp
/assets/canvas-asstes/home/About_video_00293.webp
/assets/canvas-asstes/home/About_video_00294.webp
/assets/canvas-asstes/home/About_video_00295.webp
/assets/canvas-asstes/home/About_video_00296.webp
/assets/canvas-asstes/home/About_video_00297.webp
/assets/canvas-asstes/home/About_video_00298.webp
/assets/canvas-asstes/home/About_video_00299.webp
/assets/canvas-asstes/home/About_video_00300.webp
/assets/canvas-asstes/home/About_video_00301.webp
/assets/canvas-asstes/home/About_video_00302.webp
/assets/canvas-asstes/home/About_video_00303.webp
/assets/canvas-asstes/home/About_video_00304.webp
/assets/canvas-asstes/home/About_video_00305.webp
/assets/canvas-asstes/home/About_video_00306.webp
/assets/canvas-asstes/home/About_video_00307.webp
/assets/canvas-asstes/home/About_video_00308.webp
/assets/canvas-asstes/home/About_video_00309.webp
/assets/canvas-asstes/home/About_video_00310.webp
/assets/canvas-asstes/home/About_video_00311.webp
/assets/canvas-asstes/home/About_video_00312.webp
/assets/canvas-asstes/home/About_video_00313.webp
/assets/canvas-asstes/home/About_video_00314.webp
/assets/canvas-asstes/home/About_video_00315.webp
/assets/canvas-asstes/home/About_video_00316.webp
/assets/canvas-asstes/home/About_video_00317.webp
/assets/canvas-asstes/home/About_video_00318.webp
/assets/canvas-asstes/home/About_video_00319.webp
/assets/canvas-asstes/home/About_video_00320.webp
/assets/canvas-asstes/home/About_video_00321.webp
/assets/canvas-asstes/home/About_video_00322.webp
/assets/canvas-asstes/home/About_video_00323.webp
/assets/canvas-asstes/home/About_video_00324.webp
/assets/canvas-asstes/home/About_video_00325.webp
/assets/canvas-asstes/home/About_video_00326.webp
/assets/canvas-asstes/home/About_video_00327.webp
/assets/canvas-asstes/home/About_video_00328.webp
/assets/canvas-asstes/home/About_video_00329.webp
/assets/canvas-asstes/home/About_video_00330.webp
/assets/canvas-asstes/home/About_video_00331.webp
/assets/canvas-asstes/home/About_video_00332.webp
/assets/canvas-asstes/home/About_video_00333.webp
/assets/canvas-asstes/home/About_video_00334.webp
/assets/canvas-asstes/home/About_video_00335.webp
/assets/canvas-asstes/home/About_video_00336.webp
/assets/canvas-asstes/home/About_video_00337.webp
/assets/canvas-asstes/home/About_video_00338.webp
/assets/canvas-asstes/home/About_video_00339.webp
/assets/canvas-asstes/home/About_video_00340.webp
/assets/canvas-asstes/home/About_video_00341.webp
/assets/canvas-asstes/home/About_video_00342.webp
/assets/canvas-asstes/home/About_video_00343.webp
/assets/canvas-asstes/home/About_video_00344.webp
/assets/canvas-asstes/home/About_video_00345.webp
/assets/canvas-asstes/home/About_video_00346.webp
/assets/canvas-asstes/home/About_video_00347.webp
/assets/canvas-asstes/home/About_video_00348.webp
/assets/canvas-asstes/home/About_video_00349.webp
/assets/canvas-asstes/home/About_video_00350.webp
/assets/canvas-asstes/home/About_video_00351.webp
/assets/canvas-asstes/home/About_video_00352.webp
/assets/canvas-asstes/home/About_video_00353.webp
/assets/canvas-asstes/home/About_video_00354.webp
/assets/canvas-asstes/home/About_video_00355.webp
/assets/canvas-asstes/home/About_video_00356.webp
/assets/canvas-asstes/home/About_video_00357.webp
/assets/canvas-asstes/home/About_video_00358.webp
/assets/canvas-asstes/home/About_video_00359.webp
 `;
    return data.split("\n")[index];
  }
  const frameCount = 339;

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
      scrub: 0.5,
      trigger: `#page7`,
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
    trigger: "#page7>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
}
canvas();

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



