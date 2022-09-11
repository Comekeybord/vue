<template>
  <!-- 通过<component></component>标签站位 实现动态显示移除组件 -->
  <h1>App根组件</h1>
  <button type="button" class="btn btn-primary" @click="comName = 'Home'">
    首页
  </button>
  <button type="button" class="btn btn-primary" @click="comName = 'Movie'">
    电影
  </button>
  <hr />
  <!-- <home></home>
  <movie></movie> -->
  <!-- is属性指定组件名称 -->
  <!-- 当切换时组件会被销毁(unmounted) 要通过keep-alive保持状态 -->
  <!-- 此时不会销毁组件 -->
  <!-- keep-alive 里不能写注释 否则报错KeepAlive should contain exactly one component child -->
  <keep-alive>
    <component :is="comName"></component>
  </keep-alive>
</template>

<script>
import Home from "./Home.vue";
import Movie from "./Movie.vue";
export default {
  name: "MyApp",
  components: {
    Home,
    Movie,
  },
  data() {
    return {
      comName: "Home",
    };
  },
};
</script>

<style>
</style>