<template>
  <div class="my-com">
    <h1>MyCom组件---slot插槽的基础用法</h1>
    <hr />
    <p>内容不确定使用插槽 slot</p>
    <slot>当没传递内容时显示后备内容</slot>
  </div>
</template>

<script>
export default {
  name: "MyCom",
};
</script>

<style>
</style>