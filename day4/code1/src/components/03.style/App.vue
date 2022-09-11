<template>
  <div>
    <h1>这是 App.vue 组件</h1>

    <p>App 中的 p 标签</p>
    <p>App 中的 p 标签</p>

    <hr />

    <my-list></my-list>
  </div>
</template>

<script>
import MyList from "./List.vue";

export default {
  name: "MyApp",
  //导入mylist子组件
  components: {
    MyList,
  },
};
</script>

// 通过scoped属性解决样式冲突
<style lang='less' scoped>
// 子组件和父组件都变成了红色 样式冲突
p {
  color: red;
}

// 通过自定义属性解决样式冲突
// 通过属性选择器可以控制有特定属性的dom元素
// scoped 的原理
// p[date-v-001] {
//   color: red;
// }

// 通过 :deep(.title) 来修改子组件的样式
// deep原理 前面加一个属性选择器[data-v-7bc0fb25] .title
:deep(.title) {
  color: blue;
}
</style>
