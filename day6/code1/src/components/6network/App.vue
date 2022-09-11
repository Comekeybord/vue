<template>
  <div class="father">
    App根组件
    <hr />
    <div class="info">
      <get-info></get-info>
      <post-info></post-info>
    </div>
  </div>
</template>

<script>
import GetInfo from "./GetInfo.vue";
import PostInfo from "./PostInfo.vue";
export default {
  name: "App",
  components: {
    GetInfo,
    PostInfo,
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 1200px;
  height: 400px;
  margin: 0 auto;
}

.info {
  display: flex;
  justify-content: space-between;
}

:deep(.box) {
  width: 50%;
  height: 400px;
  border: 1px solid gray;
}
</style>