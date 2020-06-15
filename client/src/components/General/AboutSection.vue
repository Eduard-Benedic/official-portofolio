<template>
  <section id="about" class="section bg-white">
    <div class="wrapper">
      <div class="about">
        <h2 class="about__h h h--main">About me</h2>
        <img v-bind:src="imgLink" alt="Profile Picture" class="about__img" />
        <div class="about__info">
          <h2 class="h underline underline--main-color underline--center">My background</h2>
          <p class="about__p">I am a Front-End Developer for Netrix in London.</p>
          <p> I gained rich experience from my current workplace as I was in charge of many activities (from dealing with every aspect of the front-end development to writing HTML emails and dealing with customers).
              I used JavaScript intensively during both my professional life and leisure time.</p>
          <p>Even though I am currently working as a Front-end developer I wanted to fully understand how everyting fits together so not long after I felt comfortable enough with the front-end side of things
            I started diving into Back-End development and databases</p>
          <p class="about__p">I am an avid learner and willing to constantly learn and take my skills to the next level</p>
          <p class="about__p">Looking forward to hearing from you!</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import gsap from "gsap";
export default {
  name: "AboutSection",
  data() {
    return {
      imgLink: require("../../assets/images/about-picture.jpg").default
    };
  },
  mounted() {
    const about = document.querySelector(".about");
    const aboutHeight = about.getBoundingClientRect().height;
    const aboutTop = about.getBoundingClientRect().top;
    console.log(aboutHeight);
    function revealCards() {
      if (window.scrollY + aboutHeight > aboutTop - aboutHeight) {
        gsap.fromTo(
          ".about",
          {
            opacity: 0,
            scale: 0.6
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1
          }
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
  }
};
</script>

<style scoped lang="scss">
.about {
  opacity: 0;

  &__img {
   width: 18rem;
   height: 18rem;
   border-radius: 50%;
    margin: 0 auto;
    /* width: 100%; */
    clip-path: polygon(
      calc(0% + 90px) 0%,
      calc(100% - 90px) 0%,
      100% 50%,
      calc(100% - 90px) 100%,
      calc(0% + 90px) 100%,
      0% 50%
    );

    @include mobile {
      clip-path: polygon(
        calc(0% + 40px) 0%,
        calc(100% - 40px) 0%,
        100% 50%,
        calc(100% - 40px) 100%,
        calc(0% + 40px) 100%,
        0% 50%
      );
    }
    margin-bottom: 30px;
    filter: drop-shadow(-1px 6px 3px rgba(050, 50, 0, 0.5));
  }

  &__info {
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
  }

  &__h {
    animation: slide-in-right 1.5s ease both;
    margin-bottom: 25px;
    text-align: center;
  }
}

.bg-white {
  background-color: $white;
}
</style>