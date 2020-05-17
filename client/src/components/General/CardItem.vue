<template>
  <div class="card" v-if="cardData.background == true">
    <div class="card__wrapper">
      <span class="card__icon">
        <font-awesome-icon :icon="cardData.icon" size="2x" />
      </span>
      <div class="card__content">
        <h3 class="card__title">{{cardData.title}}</h3>
        <p class="card__p">{{cardData.text}}</p>
      </div>
    </div>
    <div class="card__background">
      <img src="../../assets/images/leaf-bottom.png" alt />
    </div>
  </div>
  <div class="card" v-else>
    <div class="card__wrapper">
      <span class="card__icon">
        <font-awesome-icon :icon="cardData.icon" size="2x" />
      </span>
      <div class="card__content">
        <h3 class="card__title">{{cardData.title}}</h3>
        <p class="card__p">{{cardData.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Box",
  props: {
    cardData: Object
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/card";
</style>