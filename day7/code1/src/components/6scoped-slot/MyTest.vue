<template>
  <div class="Test">
    <h3>Test组件</h3>
    <!-- 通过插槽:info="infomation" 传递数据 info传递过去的对象名 -->
    <slot :info="infomation" :msg="message"></slot>
  </div>
</template>

<script>
export default {
  name: "MyTest",
  data() {
    return {
      infomation: {
        user: "zs",
        pwd: "kkk",
      },
      message: {
        state: 0,
        msg: {
          user: "zs",
          pwd: "666",
        },
      },
    };
  },
};
</script>

<style>
</style>