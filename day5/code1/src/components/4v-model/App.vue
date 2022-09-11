<template>
  <h1>App根组件 --- {{ count }}</h1>
  <button @click="count++">+1</button>
  <!-- 通过给number属性绑定count 实现父传子 -->
  <!-- 通过v-model实现数据双向绑定 -->
  <my-counter v-model:number="count"></my-counter>
</template>

<script>
import MyCounter from "./Counter.vue";
export default {
  name: "MyApp",
  components: {
    MyCounter,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>