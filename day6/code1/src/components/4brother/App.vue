<template>
  <h1>App组件</h1>
  <hr />
  <div class="container">
    <left></left>
    <right></right>
  </div>
</template>

<script>
import Left from "./Left.vue";
import Right from "./Right.vue";
export default {
  name: "App",
  components: {
    Left,
    Right,
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

:deep(.box) {
  width: 50%;
  height: 200px;
  border: 1px solid gray;
}
</style>
