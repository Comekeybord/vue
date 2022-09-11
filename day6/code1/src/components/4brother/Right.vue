<template>
  <div class="box">
    <h1>Right组件---num:{{ num }}</h1>
  </div>
</template>

<script>
import bus from "./eventBus.js";
export default {
  name: "Right",
  data() {
    return {
      num: 0,
    };
  },
  //调用bus函数自定义事件与回调函数 接收数据bus.on
  created() {
    bus.on("countChanged", (count) => {
      this.num = count;
    });
  },
};
</script>

<style lang="less" scoped>
</style>