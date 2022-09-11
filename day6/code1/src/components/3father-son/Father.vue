<template>
  <h1>Father组件---{{ count }}</h1>
  <button type="button" class="btn btn-primary" @click="count++">+1</button>
  <hr />
  <!-- 子组件向父组件传递数据 -->
  <!-- <Son @countChange="countChange" :num="count"></Son> -->
  <!-- 双向绑定组件 -->
  <!-- 好处 不需要监听自定义事件 也不需要定义处理方法 -->
  <Son v-model:num="count"></Son>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Father",
  components: {
    Son,
  },
  methods: {
    // countChange(value) {
    //   this.count = value;
    // },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>