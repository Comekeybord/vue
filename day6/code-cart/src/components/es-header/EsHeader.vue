<template>
  <div
    class="header"
    :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "EsHeader",
  props: {
    title: {
      type: String,
      default: "kkkkkk",
    },
    color: {
      color: String,
      default: "red",
    },
    bgcolor: {
      color: String,
      default: "skyblue",
    },
    fsize: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  color: red;
  top: 0;
  left: 0;
}
</style>