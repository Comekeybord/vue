<template>
  <div>
    <p>{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "MyCounter",
  //定义自定义事件
  emits: ["countChange"],
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    add() {
      this.count++;
      //调用 this.$emit() 触发自定义事件
      //通过第二个参数向其他组件传参
      this.$emit("countChange", this.count);
    },
  },
};
</script>

<style>
</style>