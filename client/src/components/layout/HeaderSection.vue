<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__element">
        <a class="header__link" target="_blank" :href="links[0]">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
        </a>
        <a class="header__link" target="_blank" :href="links[1]">
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </a>
      </div>
      <Navigation />
    </div>
  </header>
</template>


<script>
import Navigation from "./Navigation.vue";
export default {
  name: "HeaderSection",
  components: {
    Navigation
  },
  data() {
    return {
      links: [
        "https://www.linkedin.com/in/eduard-benedic-94b40710b/",
        "https://github.com/Eduard-Benedic"
      ]
    };
  },
  mounted() {
    const hero = document.querySelector(".hero");
    const header = document.querySelector(".header__wrapper");
    const heroCoordinates = hero.getBoundingClientRect();

    function modifyHeader() {
      const heroBottomValue = heroCoordinates.bottom;
      const heroTopValue = heroCoordinates.top;

      if (window.scrollY > heroBottomValue - heroTopValue - 350) {
        header.classList.add("pasthero");
      } else {
        header.classList.remove("pasthero");
      }
    }

    var timerId;

    var throttleFunction = function(func, delay) {
      if (timerId) {
        return;
      }

      timerId = setTimeout(function() {
        func();
        timerId = undefined;
      }, delay);
    };

    window.addEventListener(
      "scroll",
      function() {
        throttleFunction(modifyHeader, 100);
      },
      {
        passive: true
      }
    );

    // CSS
  }
};
</script>


<style scoped lang="scss">
@import "../../assets/styles/components/header";
</style>