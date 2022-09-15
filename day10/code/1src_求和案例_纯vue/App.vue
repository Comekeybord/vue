<template>
  <div id="app">
    <h1>App 根组件</h1>
    <hr />
    <count></count>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: {
    Count,
  },
};
</script>

<style lang="less">
</style>
