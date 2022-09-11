<template>
  <div class="box">
    <h1>数据发送放---count值为{{ count }}</h1>
    <button type="button" class="btn btn-primary" @click="add">+1</button>
  </div>
</template>

<script>
import bus from "./eventBus.js";
export default {
  name: "Left",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
      //调用bus函数自定义事件与回调函数 发送数据
      bus.emit("countChanged", this.count);
    },
  },
};
</script>

<style lang="less" scoped>
</style>