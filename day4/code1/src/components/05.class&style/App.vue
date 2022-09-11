<template>
  <div>
    <h1>这是 App.vue 组件</h1>
    <hr />
  </div>
  <my-style></my-style>
</template>

<script>
import MyStyle from "./Style.vue";
export default {
  name: "MyApp",
  components: {
    MyStyle,
  },
};
</script>
