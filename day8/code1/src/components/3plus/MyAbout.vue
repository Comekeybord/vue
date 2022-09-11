<template>
  <div class="about">
    <h1>MyAbout 根组件</h1>
    <!-- 声明子路由链接 -->
    <router-link to="/about/tab1">Tab1</router-link>&nbsp
    <router-link to="/about/tab2">Tab2</router-link>
    <!-- 声明路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyAbout",
};
</script>

<style lang="less" scoped>
.about {
  background-color: #efefef;
}
</style>