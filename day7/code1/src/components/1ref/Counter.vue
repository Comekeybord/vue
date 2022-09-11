<template>
  <div class="counter">
    <h1>Counter 组件---{{ count }}</h1>
    <hr />
    <button type="button" class="btn btn-info" @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // 清空数字
    reset() {
      this.count = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.counter {
  width: 370px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
}
</style>