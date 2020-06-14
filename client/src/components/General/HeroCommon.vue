<template>
  <section id="hero" class="hero">
    <div class="hero__content">
      <h1 class="hero__title">Full-stack Developer with professional experience in Front-end</h1>
      <h2 class="hero__subtitle">Eduard Benedic</h2>
      <a
        v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
        href="#boxes"
        class="hero__btn"
      >
        <svg id="dynamic-btn">
          <rect />
        </svg>
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          size="2x"
          id="icon-down"
        />
      </a>
    </div>
    <canvas id="canvas-hero"></canvas>
    <a target="_blank" v-bind:href="pdfLink" class="hero__resume"
      >View Resume</a
    >
  </section>
</template>

<script>
export default {
  name: "HeroCommon",
  data() {
    return {
      pdfLink: require("../../assets/images/documents/resume.pdf").default,
    };
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/components/hero";
</style>
