<template>
  <div class="card">
    <img class="card__img" :src="projectData.img" alt="a" />
    <div class="card__wrapper">
      <h3 class="card__title">{{projectData.title}}</h3>
      <ul class="card__list grid grid-50 grid-50--no-break">
        <div>
          <h4 class="card__secondary-title">Front End</h4>
          <project-item
            v-for="(item,index) in projectData.list.frontEnd"
            :key="index"
            :itemData="item"
          ></project-item>
        </div>

        <div class="text-right">
          <h4 class="card__secondary-title">Backend</h4>
          <project-item
            v-for="(item,index) in projectData.list.backEnd"
            :key="index"
            :itemData="item"
          ></project-item>
        </div>
      </ul>
    </div>
    <div class="card__action">
      <a href="/" class="card__btn card__btn--view">
        <font-awesome-icon :icon="['fab', 'github']" class="card__fontawesome" />View source code
      </a>
      <a :href="projectData.links.view" target="_blank" class="card__btn card__btn--github">
        <font-awesome-icon :icon="['fa', 'eye']" class="card__fontawesome" />View project
      </a>
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem";
export default {
  name: "ProjectCard",
  components: {
    ProjectItem
  },
  props: {
    projectData: Object
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/components/card";
</style>