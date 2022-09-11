<template>
  <!-- 如果数据是响应式的 那么必须用数据.value来调用数据 -->
  <!-- 在下一个小版本中不再需要.value -->
  <h1>孙子组件 {{ color }}---{{ count.value }}</h1>
</template>

<script>
export default {
  name: "LevelThree",
  //通过inject接收上级组件传递的数据
  inject: ["color", "count"],
};
</script>

<style>
</style>