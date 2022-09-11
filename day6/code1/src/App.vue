<template>
  <h1>App根组件</h1>
  <hr />
  <my-watch></my-watch>
</template>

<script>
import MyWatch from "./components/1watch/MyWatch.vue";

export default {
  name: "App",
  components: {
    MyWatch,
  },
};
</script>
