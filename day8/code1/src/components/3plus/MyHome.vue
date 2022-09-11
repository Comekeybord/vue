<template>
  <h1>MyHome 根组件</h1>
  <button type="button" class="btn btn-primary" @click="gotomovie(3)">
    push+hash地址编程式导航</button
  ><br />
  <!-- 通过命名路由跳转到movie 实现声明式导航 -->
  <router-link :to="{ name: 'mov', params: { id: 3 } }">
    命名路由跳转到movie 实现声明式导航 </router-link
  ><br />
  <button type="button" class="btn btn-primary" @click="goToMovie(1)">
    命名路由实现编程式导航
  </button>
</template>

<script>
export default {
  name: "MyHome",
  methods: {
    gotomovie(id) {
      // 通过编程式导航跳转到电影3
      this.$router.push("/movie/" + id);
    },
    // 命名路由实现编程式导航
    goToMovie(mid) {
      this.$router.push({
        name: "mov",
        params: {
          id: mid,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>