<template>
  <section id="skills" >
    <div class="wrapper  container-md">
      <h2 class="h h--main underline underline--main-color">Main Skills</h2>
    </div>
    <div class="grid grid-33 gap-4 container-md">
      <div>
        <h3>Frontend Skills</h3>
        <p>HTML 5</p>
        <p>CSS - Tailwindcss, Less, Sass</p>
        <p>JavaScript - ES5/ES6</p>
        <p>jQuery</p>
        <p>Frameworks: React, Vue (Routing, Store etc), </p>
      </div>
      <div>
        <h3>Backend Skills</h3> 
        <p>Node/Express</p>
        <p>REST API</p>
        <p>MongoDB</p>
        <p>GraphQL</p>
      </div>
      <div>
        <h3>Headless CMS</h3>
        <p>Contenful</p>
        <p>Strapi</p>
        <h3>Other tools and technologies</h3>
        <p>Gatsby</p>
        <p>Webpack</p>
      </div>
        
    </div>
    <div class="context">
      <div class="img-grid">
        <img
          data-animate="true"
          data-color="sun"
          class="img-grid__img"
          v-bind:src="js"
          alt="JavaScript"
        />
        <img
          class="img-grid__img"
          data-color="autumn"
          data-animate="false"
          v-bind:src="html"
          alt="html5"
        />
        <img
          class="img-grid__img"
          data-color="sea"
          data-animate="true"
          v-bind:src="react"
          alt="React"
        />
        <img
          class="img-grid__img"
          data-color="sea"
          data-animate="false"
          v-bind:src="webpack"
          alt="Webpack"
        />
        <img
          class="img-grid__img"
          data-color="forest"
          data-animate="true"
          v-bind:src="vue"
          alt="Vue"
        />
      </div>
      <canvas id="canvas" fill="white"></canvas>
    </div>
  </section>
</template>
<script>
export default {
  name: "Skills",
  data() {
    return {
      js: require("./../../assets/images/javascript.png").default,
      html: require("./../../assets/images/html.png").default,
      react: require("./../../assets/images/react.png").default,
      webpack: require("./../../assets/images/webpack.png").default,
      vue: require("./../../assets/images/vue.png").default
    };
  },
  mounted() {
      
    function intRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(palette) {
      return palette[Math.ceil(Math.random() * palette.length)];
    }

    function Circle(x, y, radius, color) {
      this.radius = radius;
      this.color = color;
      this.speed = 0.02;
      this.distanceFromCenter = intRange(30, 90);
      this.x = x;
      this.y = y;
      this.radians = Math.random() * Math.PI * 2;
      this.lastPoint = {
        x: this.x,
        y: this.y
      };
    }

    Circle.prototype.draw = function(lastPoint) {
      c.beginPath();
      c.lineWidth = this.radius * 1.3;
      c.strokeStyle = this.color;
      c.moveTo(lastPoint.x, lastPoint.y);
      c.lineTo(this.x, this.y);
      c.stroke();
      c.closePath();
    };

    Circle.prototype.update = function() {
      const lastPoint = { x: this.x, y: this.y };
      this.radians += this.speed;
      this.x =
        this.lastPoint.x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y =
        this.lastPoint.y + Math.sin(this.radians) * this.distanceFromCenter;
      this.draw(lastPoint);
    };

    const colorsRange = {
      sea: ["#1B72BF", "#3D90D9", "#439FD9", "#99D0F2", "#C4E1F2"],
      autumn: ["#F28705", "#D96704", "#A63F03", "#8C1C03", "#590202"],
      forest: ["#154001", "#4A8C1B", "#3F7319", "#69BF2C"],
      sun: ["#F2CA50", "#D99B29", "#BF771F"]
    };

    const canvas = document.getElementById("canvas");
    let canvasParent = canvas.parentElement;

    let canvasDimension = {
      x: canvasParent.offsetWidth,
      y: canvasParent.scrollHeight
    };

    canvas.width = canvasDimension.x;
    canvas.height = canvasDimension.y;

    const c = canvas.getContext("2d");
    const getImages = document.querySelectorAll(".img-grid__img");

    let colorPalette;
    // !!!!!!--- NEEDS IMPROVEMENT --- I NEED THIS TO  REINSTANCIATE EACH ANIMATION AROUND EACH IMAGE WHEN RESIZE

    function init() {
      for (let i = 0; i < getImages.length; i++) {
        if (getImages[i].dataset.animate === "true") {
          // ==== SET THE COLOR PALETTE UPFRON ============

          switch (getImages[i].dataset.color) {
            case "sea":
              colorPalette = colorsRange.sea;
              break;
            case "autumn":
              colorPalette = colorsRange.autumn;
              break;
            case "forest":
              colorPalette = colorsRange.forest;
              break;
            case "sun":
              colorPalette = colorsRange.sun;
              break;
          }

          const getPosition = getImages[i].getBoundingClientRect();

          const leftImg = getPosition.left + getPosition.width / 2;

          const topImg =
            Math.round(getImages[i].scrollTop + 95) + getPosition.height / 2;

          let circles = [];

          for (var x = 0; x < 10; x++) {
            const radius = Math.random() * 2 + 1;

            let color = randomColor(colorPalette);

            circles.push(new Circle(leftImg, topImg, radius, color));
          }

          const animate = function() {
            requestAnimationFrame(animate);
            c.fillStyle = "rgb(255,255,255,0.04)";
            c.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < circles.length; i++) {
              circles[i].update();
            }
          };
          animate();
        }
      }
    }

    if(window.innerWidth > 600) {
        init();
    } else {
      return;
    }
   
  }
};
</script>



<style scoped lang="scss">
#canvas {
  background-color: rgb(177, 177, 177);

  @include tablet{
    display: none;
  }
}
.img-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  left: 0;
  right: 0;
  min-height: 250px;
  justify-items: center;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  grid-gap: 5rem;
  margin: 0 auto;
  padding: 0 25px;
  

  @include tablet {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 0 25px;
    position: static;
  }

  &__img {
    width: 6rem;
    height: 6rem;

    @include mobile {
      width: 5rem;
    }
  }
}
</style>