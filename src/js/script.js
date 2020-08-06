$(function() {
  function setSizes() {
    setTimeout(function() {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", vh + "px");
      //document.body.style.setProperty("--vh", vh + "px");
    }, 50);
  }

  setSizes();

  $(window).resize(function() {
    setSizes();
  });

  class Animal {
    constructor(name) {
      this.name = name;
    }

    walk() {
      console.log(`${this.name} идет`);
    }

    static say() {
      console.log("Я животное");
    }
  }
  var cat = new Animal("Ева");

  /* ============================== */
  // var button = document.querySelector("button");

  // window.addEventListener("resize", function() {
  //   console.log("resize");
  // });

  // console.dir(document.constructor.name);

  // console.dir(h1.offsetTop);
  // console.dir(document.documentElement.scrollTop);
  // console.dir(window.pageYOffset);
  // console.dir(document.body.clientWidth);
  // console.dir(document.body.offsetWidth);
  // console.dir(window.innerWidth);

  // let ball = document.getElementById("ball");
  // let box = document.getElementById("box");

  // ball.onmousedown = function(event) {
  //   ball.style.position = "absolute";

  //   console.log(box.getBoundingClientRect(), event);

  //   ball.addEventListener("mousemove", moveAt);

  //   function moveAt(event) {
  //     // ball.style.left = event.clientX - box.getBoundingClientRect().left + "px";
  //     // ball.style.top = event.clientY - box.getBoundingClientRect().top + "px";
  //   }

  //   ball.onmouseup = function(event) {
  //     ball.style.position = "";
  //     ball.removeEventListener("mousemove", moveAt);
  //   };
  // };

  // let progress = document.querySelector(".progress");

  // window.addEventListener("scroll", progressBar);

  // function progressBar(event) {
  //   let winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   let winHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //   progress.style.width = (winScroll / winHeight) * 100 + "%";
  // }

  document.addEventListener("keydown", event => {
    document.addEventListener("keyup", event => {
      console.log(event);
    });
  });
  
});
