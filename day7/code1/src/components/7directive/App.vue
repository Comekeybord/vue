<template>
  <div class="app">
    <h1>App Genzujian</h1>
    <input
      type="text"
      class="form-control"
      aria-describedby="helpId"
      placeholder="请输入内容"
      v-focus
    />
    <hr />
    <Home></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: "MyApp",
  components: {
    Home,
  },
};
</script>

<style>
</style>