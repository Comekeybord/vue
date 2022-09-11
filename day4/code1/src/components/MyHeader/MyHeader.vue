<template>
  <div
    class="header-container"
    :style="{
      backgroundColor: bgcolor,
      color: color,
    }"
  >
    {{ title || header组件 }}
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props: ["title", "bgcolor", "color"],
};
</script>

<style lang="less" scoped>
.header-container {
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 45px;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 45px;
  background-color: pink;
}
</style>