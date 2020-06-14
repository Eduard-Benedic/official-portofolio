<template>
  <section id="soft-skills">
    <h2 class="h h--main underline underline--main-color">Soft Skills</h2>
    <div class="grid-33 gap-4">
      <card-item v-for="(card,index) in cardArr" v-bind:key="index" :cardData="card" />
    </div>
  </section>
</template>

<script>
import CardItem from "./CardItem";
import gsap from "gsap";

export default {
  name: "CardGrid",
  components: {
    CardItem
  },
  mounted() {
    const cards = document.querySelector("#soft-skills");
    const cardsHeight = cards.getBoundingClientRect().height;
    const cardsTop = cards.getBoundingClientRect().top;

    function revealCards() {
      if (window.scrollY + cardsHeight > cardsTop + cardsHeight / 4) {
        gsap.fromTo(
          "#soft-skills .grid-33 .card,#boxes > h2",
          {
            x: 900,
            opacity: 0
          },
          { x: 0, stagger: 0.1, opacity: 1, duration: 1.6 }
        );
        window.removeEventListener("scroll", passIntoListener);
      } else {
        return;
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

    var passIntoListener = function() {
      throttleFunction(revealCards, 100);
    };
    window.addEventListener("scroll", passIntoListener, {
      passive: true
    });
  },
  data: function() {
    return {
      cardArr: [
        {
          title: "Dinamism",
          text:
            "Animations are what gives life to a webpage and are a part of my design.",
          background: true,
          icon: "sun"
        },
        {
          title: "Speed",
          text:
            "Speed is a top priority. I follow the best practices to boost the performance of my webpages.",
          icon: "bolt"
        },
        {
          title: "Up to date",
          text: "I am constanly learning and improve my skills.",
          icon: "book"
        },
        {
          title: "Attention to detail",
          text: "The angel's in the details.",
          background: true,
          icon: "eye"
        }
      ]
    };
  }
};
</script>




<style scoped lang="scss">
#soft-skills {
  padding: 5rem 1rem 5rem;
  position: relative;
  margin-bottom: 50px;
  max-width: 93.75rem;
  margin: 0 auto;
}
</style>