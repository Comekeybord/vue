<template>
  <h1>儿子组件</h1>
  <hr />
  <level-three></level-three>
</template>

<script>
import LevelThree from "./LevelThree.vue";
export default {
  name: "LevelTwo",
  components: {
    LevelThree,
  },
};
</script>

<style>
</style>