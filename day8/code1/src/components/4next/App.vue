<template>
  <div class="app">
    <h1>APp 根组件</h1>
    <hr />
    <router-link to="/home">首页</router-link>&nbsp
    <router-link to="/main">后台主页</router-link>&nbsp

    <!-- 路由窗口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyApp",
};
</script>

<style>
</style>