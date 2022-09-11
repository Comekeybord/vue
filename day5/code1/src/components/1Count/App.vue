<template>
  <h1>App根组件</h1>
  <hr />
  <!-- 传递参数 -->
  <Count :count="123" :state="state" :info="123" :type="'success'"></Count>
</template>

<script>
import Count from "./Count.vue";
export default {
  name: "MyApp",
  //导入局部组件Count
  components: {
    Count,
  },
  data() {
    return {
      state: true,
      count: 123,
    };
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>