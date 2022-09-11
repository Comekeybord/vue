<template>
  <div class="home">
    <!-- 自定义事件通过等号传递值 -->
    <h3 v-color="'red'">Home Genzujian---{{count}}</h3>
    <button type="button" class="btn btn-primary" @click="count++">+1</button>
    <hr>
    <div class="form-group">
      <input type="text" class="form-control" aria-describedby="helpId" placeholder="请输入内容" v-focus v-color="'skyblue'">
    </div>
</template>

<script>
export default {
  name: "Home",
  // 定义私有自定义指令
  //   directives: {
  //     focus: {
  //       // 形参就是被绑定的那个原生DOM对象
  //       // 被绑定的元素渲染到DOM上之后 自动触发mounted函数
  //       //  如果同时指定私有和全局自定义事件 会优先使用私有
  //       mounted(el) {
  //         el.focus();
  //       },
  //     },
  //   },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>