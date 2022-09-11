<template>
  <div>
    <h3>标题：{{ title }}</h3>
    <h5>作者：{{ author }}</h5>
    <h6>发布时间：{{ pubTime }}</h6>
  </div>
</template>

<script>
export default {
  name: "MyArticle",
  // 外界可以传递指定的数据，到当前的组件中
  // 无法使用未声明的 props属性
  // 当props声明里的命名用驼峰命名法时 传参的父组件就可以用 短横线命名 (父)pub-time -> (子)pubTime
  // 但是在组件内部用法名称必须完全一致
  props: ["title", "author", "pubTime"],
};
</script>
