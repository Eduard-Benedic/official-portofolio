<template>
  <section id="projects" class="section">
    <div class="wrapper">
      <h3>Due to my company's policy I was not granted the permission to display some of the projects completed at my workplace</h3>
      <h3>If you wish to know more about them please get in touch</h3>
      <h2 class="h h--main underline underline--main-color">Individual Projects</h2>
      <div class="grid-33 gap-6">
        <project-card
          v-for="(project,index) in projectArr"
          v-bind:projectData="project"
          v-bind:index="index"
          v-bind:key="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard";
import colorRevealer from "../../assets/images/projects/color-revealer/flower-banner.jpg";
import project2 from "../../assets/images/projects/project2.jpg";


import gsap from "gsap";
export default {
  name: "ProjectGrid",
  components: {
    ProjectCard
  },
  mounted() {
    const cards = document.querySelector("#projects");
    const cardsHeight = cards.getBoundingClientRect().height;
    const cardsTop = cards.getBoundingClientRect().top;

    function revealCards() {
      if (window.scrollY + cardsHeight > cardsTop + cards.clientHeight / 2) {
        gsap.fromTo(
          "#projects .grid-33 .card",
          {
            x: 900,
            opacity: 0,
            rotateY: -90
          },
          { x: 0, stagger: 0.1, opacity: 1, duration: 1.2, rotateY: 0 }
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
  data() {
    return {
      projectArr: [
        {
          title: "Color Revealer App - Full Stack",
          list: {
            frontEnd: ["HTML5", "CSS3", "Vue", "Gsap", "Webpack"],
            backEnd: ["Node/Express", "MongoDB", "Heroku"]
          },
          img: colorRevealer,
          links: {
            github: "",
            view: "https://color-revealer.herokuapp.com"
          }
        },
        {
          title: "Neurohypnosis",
          list: {
            frontEnd: ["HTML5", "CSS3", "React", "Gatsby" ],
            backEnd: ["Contentful", "GraphQL", "Heroku"]
          },
          img: project2,
          links: {
            github: "",
            view: "https://hypnosis-2773785638.gtsb.io/"
          }
        }
      ]
    };
  }
};
</script>

