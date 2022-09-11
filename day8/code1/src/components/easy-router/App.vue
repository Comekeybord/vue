<template>
  <h1>APP 根组件</h1>
  <!-- 通过a标签改变hash地址 -->
  <a href="#/home">home</a>&nbsp<a href="#/about">about</a>&nbsp
  <a href="#/movie">movie</a>
  <hr />
  <!-- 通过component动态渲染组件 -->
  <component :is="comName"></component>
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
  // 通过声明周期函数创建监听hash地址变化的事件
  created() {
    window.onhashchange = () => {
      // 判断hash地址 从而改变组件
      switch (location.hash) {
        case "#/home":
          this.comName = "MyHome";
          break;
        case "#/about":
          this.comName = "MyAbout";
          break;
        case "#/movie":
          this.comName = "MyMovie";
          break;
      }
    };
  },
};
</script>

<style lang="less" scoped>
</style>