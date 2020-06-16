<template>
  <div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a
            v-smooth-scroll="{ duration: 1000, offset: -50,  updateHistory: false }"
            href="#hero"
            class="nav__link active"
          >Home</a>
        </li>
        <li class="nav__item">
          <a
            class="nav__link"
            v-smooth-scroll="{ duration: 1000, offset: -50,  updateHistory: false }"
            href="#soft-skills"
          >Optimization</a>
        </li>
        <li class="nav__item">
          <a
            class="nav__link"
            v-smooth-scroll="{ duration: 1000, offset: -50,  updateHistory: false }"
            href="#skills"
          >Skills</a>
        </li>
        <li class="nav__item">
          <a
            class="nav__link"
            v-smooth-scroll="{ duration: 1000, offset: -50,  updateHistory: false }"
            href="#projects"
          >Projects</a>
        </li>
        <li class="nav__item">
          <a
            class="nav__link"
            v-smooth-scroll="{ duration: 1000, offset: -50,  updateHistory: false }"
            href="#about"
          >About</a>
        </li>
        <li class="nav__item">
          <a
            v-smooth-scroll="{ duration: 1000, offset: -50,  updateHistory: false }"
            href="#contact"
            class="nav__link nav__link--last"
          >Contact</a>
        </li>
      </ul>
    </nav>
    <div class="nav__btn">
      <svg
        id="menu-btn"
        width="91"
        height="54"
        viewBox="0 0 91 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="top"
          d="M67.2519 1.23366L2 1.52438L53.9866 40.9616C62.9045 47.7268 75.4715 46.7605 83.2504 38.7115C96.847 24.6426 86.817 1.14649 67.2519 1.23366Z"
          stroke="white"
        />
        <path class="middle" d="M10.5 25H66.5" stroke="white" />
        <path
          class="bottom"
          d="M63.3934 53.5H2L57.0783 9.97662C66.1052 2.84344 79.2252 4.48675 86.214 13.6259C90.4468 19.1612 91.5944 26.4611 89.2642 33.0282L88.2222 35.9647C84.4923 46.4763 74.5472 53.5 63.3934 53.5Z"
          stroke="white"
        />
      </svg>
    </div>
  </div>
</template>


<script>
export default {
  name: "Navigation",
  mounted() {
    const nav = document.querySelector(".nav");
    document.querySelector("#menu-btn").addEventListener("click", () => {
      let svgIcon = document.querySelectorAll("#menu-btn path");
      svgIcon.forEach(path => {
        path.classList.toggle("cross");
      });
      document.querySelector(".nav").classList.toggle("reveal");
    });

    const getLinks = document.querySelectorAll(".nav__link");

    getLinks.forEach(link => {
      link.addEventListener("click", function() {
        nav.classList.remove("reveal");
        let svgIcon = document.querySelectorAll("#menu-btn path");
        svgIcon.forEach(path => {
          path.classList.remove("cross");
        });
      });
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/nav";
</style>