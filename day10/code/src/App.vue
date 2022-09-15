<template>
  <div id="app">
    <h1>App 根组件</h1>
    <hr />
    <count></count>
    <hr />
    <person></person>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
};
</script>

<style lang="less">
</style>
