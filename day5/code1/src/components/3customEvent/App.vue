<template>
  <div>
    <h1>App根组件</h1>
    <!-- 监听自定义事件countChange -->
    <my-counter @countChange="getCount"></my-counter>
  </div>
</template>

<script>
import MyCounter from "./Counter.vue";
export default {
  name: "MyApp",
  components: {
    MyCounter: MyCounter,
  },
  methods: {
    //当自定义事件触发该方法时 形参为子组件传过来的参数
    getCount(value) {
      console.log("触发了countChange自定义事件", value);
    },
  },
};
</script>

<style>
</style>