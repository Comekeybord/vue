<template>
  <div class="app">
    <h1>APP 根组件---vue-router的基本使用</h1>
    <!-- 声明路由链接 用router-link时不需要加# -->
    <router-link to="/home">首页</router-link>&nbsp
    <router-link to="/about">关于</router-link>&nbsp
    <router-link to="/movie">电影</router-link>
    <hr />
    <!-- 声明路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyMovie from "./MyMovie.vue";
import MyHome from "./MyHome.vue";
import MyAbout from "./MyAbout.vue";
export default {
  name: "MyApp",
  data() {
    return {
      comName: "MyHome",
    };
  },
  components: {
    MyMovie,
    MyHome,
    MyAbout,
  },
};
</script>

<style lang="less" scoped>
</style>