<template>
  <div id="app">
    <header-section />
    <hero-section />
    <card-grid />
    <Skills />
    <project-grid />
    <about-section />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "./components/layout/HeaderSection.vue";
import FooterSection from "./components/layout/FooterSection.vue";
import HeroSection from "./components/General/Hero";
import CardGrid from "./components/General/CardGrid.vue";
import Skills from "./components/General/Skills.vue";
import ProjectGrid from "./components/General/ProjectGrid.vue";
import AboutSection from "./components/General/AboutSection.vue";

export default {
  name: "app",
  components: {
    HeaderSection,
    HeroSection,
    CardGrid,
    Skills,
    ProjectGrid,
    AboutSection,
    FooterSection
  }
};
</script>

<style lang="less">
/* ===============COLOR VARIABLES =================*/
@import "assets/less/global.less";
@import (css)
  url("https://fonts.googleapis.com/css?family=Antic+Didone|Roboto:300,400,500,900|Rubik:300,400,500,700&display=swap");
@import "assets/styles/normalise.css";
</style>
