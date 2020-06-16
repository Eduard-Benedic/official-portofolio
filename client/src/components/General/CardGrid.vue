<template>
  <section id="soft-skills">
    <h2 class="h h--main underline underline--main-color">Website optimization</h2>
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
            "I use animations to give color and dinamism to webpages to keep the users engaged throughout their web journey.",
          background: true,
          icon: "sun"
        },
        {
          title: "Responsive",
          text: "My websites are well crafted to work smoothly on every device: mobile, tablet and desktop responsive.",
          background: true,
          icon: "mobile"
        },
        {
          title: 'SEO',
          text: 'No matter how great the website, your users can\'t enjoy it unless it is visible. I understand the importance of SEO optimization for ranking and visibility.',
          icon: 'pencil'
        },
        {
          title: "Speed",
          text:
            "Knowing that your users are more likely to leave a webpage if the loading time exceeds 2 seconds, speed becomes a top priority. I write code that performs fast.",
          icon: "bolt"
        },
        {
          title: "Technology",
          text: "I keep up with the latest trends and technologies in the field for a better optimization.",
          icon: "book"
        },
        {
          title: "Organization",
          text: "The structure of my code is well organized for scaling.",
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