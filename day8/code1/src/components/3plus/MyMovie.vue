<template>
  <div class="movie">
    <!-- 通过$route.params.id拿到动态参数 -->
    <h1>MyMovie 根组件---{{ $route.params.id }}---{{ id }}</h1>
    <button type="button" class="btn btn-warning" @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  props: ["id"],
  methods: {
    goBack() {
      // 可以实现前进和后退
      // 通过this.$router.go(-1)后退到上一个组件页面
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
</style>