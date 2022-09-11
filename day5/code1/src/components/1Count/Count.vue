<template>
  <div>
    <p>数量：{{ count }}</p>
    <p>状态：{{ state }}</p>
  </div>
</template>

<script>
export default {
  name: "Count",
  //定义可验证的传递参数props 对象
  props: {
    // 键值对的形式
    // 参数名:参数类型
    count: {
      type: Number, //指定类型
      required: true, //指定必填
      default: 100, //指定默认值 如果没有传递 那么久为默认值
    },
    state: Boolean,

    //为同一个值指定多种可能的类型
    info: [String, Number],
    //通过validator函数指定验证规则
    //返回一个布尔值 true 表示通过验证 false表示不通过
    type: {
      validator(value) {
        //必须跟数组中有一项完全一样才能通过
        return ["success", "cmd", "come"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style>
</style>