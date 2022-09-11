<template>
  <h1>son组件------{{ num }}</h1>
  <button @click="add">+1</button>
</template>

<script>
export default {
  name: "Son",
  //通过emits自定义事件实现子向父传递数据
  // emits: ["countChange"],
  //通过emits自定义事件实现双向绑定
  emits: ["update:num"],
  methods: {
    add() {
      //触发自定义事件
      // this.$emit("countChange", this.num + 1);

      //双向绑定 更新对应变量
      this.$emit("update:num", this.num + 1);
    },
  },
  props: {
    num: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style>
</style>