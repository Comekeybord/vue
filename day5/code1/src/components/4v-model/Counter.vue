<template>
  <p>count的值是:{{ number }}</p>
  <button @click="add">+1</button>
</template>

<script>
export default {
  name: "MyCounter",
  //props声明属性
  props: ["number"],
  //添加自定义事件更新传过来的number
  emits: ["update:number"],
  methods: {
    add() {
      //通过add方法传递新值给父组件
      //触发自定义更新number事件
      this.$emit("update:number", this.number + 1);
    },
  },
};
</script>

<style>
</style>