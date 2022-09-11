<template>
  <div class="app">
    <!-- 使用ref属性为DOM元素添加引用名称 -->
    <h1 ref="myh1">App 根组件</h1>
    <hr />
    <button type="button" class="btn btn-primary" @click="getRefs">
      get$refs
    </button>
    <hr />
    <!-- 通过引用拿到counter对象 -->
    <Counter ref="counterRef"></Counter>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "MyApp",
  methods: {
    getRefs() {
      // 通过refs引用DOM元素
      // console.log(this.$refs);
      // 把h1改为红色
      // this.$refs.myh1.style.color = "red";

      // 拿到组件对象就可以调用组件的方法
      // console.log(this.$refs.counterRef);
      this.$refs.counterRef.reset();
    },
  },
  components: {
    Counter,
  },
};
</script>

<style lang="less" scoped>
</style>