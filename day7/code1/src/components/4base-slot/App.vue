<template>
  <div class="app">
    <h1>App 根组件</h1>
    <hr />
    <my-com>
      <!-- 此处的内容会被放到插槽slot中 -->
    </my-com>
  </div>
</template>

<script>
import MyCom from "./MyCom.vue";
export default {
  name: "MyApp",
  components: {
    MyCom,
  },
};
</script>

<style>
</style>