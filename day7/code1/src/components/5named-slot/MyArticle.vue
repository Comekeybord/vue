<template>
  <div class="my-article">
    <!-- 带名字的插槽叫具名插槽 不写名字默认为default -->
    <header>
      <!-- 头部区域插槽 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 主题内容插槽 -->
      <slot></slot>
    </main>
    <footer>
      <!-- 尾部内容插槽 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MyArticle",
};
</script>

<style lang="less" scoped>
header,
main,
footer {
  border: 2px dashed gray;
  text-align: center;
}
</style>