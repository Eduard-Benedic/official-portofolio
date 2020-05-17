<template>
  <li class="card__item">{{itemData}}</li>
</template>
<script>
export default {
  name: "ProjectItem",
  props: {
    itemData: String
  }
};
</script>


