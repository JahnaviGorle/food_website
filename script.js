// ----------Scramble------------
$(document).ready(function () {
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);
});

// ----------Scramble End--------------

// ---------- Loader Animation ----------
var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
  })
  .to(
      ".loader",
      {
          y: "-100%",
          duration: 1,
      },
      "up"
  );

// ---------- Redirect After Loader ----------
var tl2 = gsap.timeline();
function example() {
  window.location.href = "again.html";
}

// ---------- Explore Click Event ----------
document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
      const donut = document.getElementById("donut");
      const dotted = document.getElementById("dotted");
      const svgwaala = document.querySelector(".svgwaala");

      // Ensure elements exist before proceeding with animation
      if (!donut || !dotted || !svgwaala) {
          console.error("Required elements (#donut, #dotted, .svgwaala) are missing!");
          return;
      }

      var tl2 = gsap.timeline();

      tl2
          .to(donut, {
              width: "80vw",
              top: "-10%",
              rotate: "360deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
              delay: 0,
          })
          .to(
              dotted,
              {
                  opacity: 0,
              },
              "sw"
          )
          .to(svgwaala, {
              opacity: 0,
          })
          .eventCallback("onComplete", function () {
              // Redirect to again.html after the animation completes
              window.location.href = "again.html";
          });
  });
});

// ---------- Food Section Click Events ----------
let food1s = document.getElementById("food1");
let food2s = document.getElementById("food2");
let foods = document.getElementById("food");

food1s.addEventListener("click", () => {
  foods.style.backgroundImage = "url('/images/food1.png')";
});

food2s.addEventListener("click", () => {
  foods.style.backgroundImage = "url('/images/food.jpg')";
});
