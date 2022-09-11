<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <hr />
    <my-header title="kkkkkk" bgcolor="black" color="white"></my-header>
  </div>
</template>

<script>
//导入header组件
import MyHeader from "./MyHeader/MyHeader.vue";
export default {
  name: "MyApp",
  // 注册组件
  components: {
    MyHeader,
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
.app-container {
  margin-top: 45px;
}
:deep(*) {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
}
</style>