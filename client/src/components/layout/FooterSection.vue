<template>
  <footer class="footer" id="contact">
    <canvas id="footer-canvas"></canvas>
    <div class="footer__wrapper">
      <div class="footer__upper">
        <div>
          <h3 class="footer__title underline underline--green">Contact</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" href="mailto:benediceduard@outlook.com"
                >benediceduard@outlook.com</a
              >
            </li>
            <li class="footer__item">
              <a class="footer__link" href="tel:+7480735866">07480735866</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="footer__title underline underline--green">Social</h3>
          <ul class="footer-social">
            <li class="footer-social__item">
              <a
                :href="'https://www.linkedin.com/in/eduard-benedic-94b40710b/'"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
              </a>
            </li>
            <li class="footer-social__item">
              <a :href="'https://github.com/Eduard-Benedic'" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__lower">&copy; 2020 Eduard Benedic</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  mounted() {
    const canvas = document.querySelector("#footer-canvas");
    const c = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = 300;

    const wave = {
      y: canvas.height / 2,
      length: -0.005,
      amplitude: 93,
      frequency: 0.013,
    };

    const strokeColor = {
      h: 33,
      s: 93,
      l: 48,
    };

    const backgroundColor = {
      r: 89,
      g: 2,
      b: 2,
      a: 0.071,
    };

   

    let increment = wave.frequency;
    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.beginPath();
      c.moveTo(0, wave.y);
      for (let i = 0; i < canvas.width; i++) {
        c.lineTo(
          i,
          wave.y +
            Math.sin(i * wave.length + increment) *
              wave.amplitude *
              Math.sin(increment)
        );
      }
      c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`;
      c.stroke();
      increment += wave.frequency;
    }
    animate();

    window.addEventListener("resize", function() {
      canvas.width = innerWidth;
    });
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/footer";
</style>
