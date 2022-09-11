<template>
  <h1>App根组件</h1>
  <hr />
  <computed :count="6"></computed>
</template>

<script>
import Computed from "./Computed.vue";
export default {
  name: "MyApp",
  //导入局部组件
  components: {
    Computed,
  },
};
</script>

<style>
</style>