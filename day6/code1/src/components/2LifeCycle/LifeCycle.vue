<template>
  <button @click="count++">+1</button>
  <h1>LifeCycle组件----{{ count }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  //beforCreate函数是在数据还没有创建到内存中时就执行 所以无法获取count的值 也无法挂载data的值
  beforeCreate() {
    // console.log(this.count);
  },
  created() {
    //组件被创建到内存完毕 被调用
    console.log("组件被创建到内存完毕");
    console.log(this.count);
  },
  //同理 也不能在beforMount中操作DOM元素
  beforeMount() {},
  mounted() {
    //组件第一次被渲染完毕 被调用
    console.log("组件第一次被渲染完毕");
  },
  updated() {
    //组件被重新渲染完毕 被调用
    console.log("组件被重新渲染完毕");
  },
  unmounted() {
    //组件被销毁完毕 被调用
    console.log("组件被销毁完毕");
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