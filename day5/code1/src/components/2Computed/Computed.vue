<template>
  <div>
    <input type="text" v-model.number.lazy="count1" />
    <!-- 直接把计算属性的方法名放入插值表达式 -->
    <p>传递的count的计算值为：{{ plus }}</p>
    <p>传递的count的计算值为：{{ plus }}</p>
    <p>传递的count的计算值为：{{ plus }}</p>
    <p>传递的count的计算值为：{{ cal() }}</p>
    <p>传递的count的计算值为：{{ cal() }}</p>
    <p>传递的count的计算值为：{{ cal() }}</p>
    <p>data中的count计算值为：{{ plus1 }}</p>
  </div>
</template>

<script>
export default {
  name: "Computed",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  //计算属性必须放在computed节点中
  computed: {
    // 定义计算属性函数
    // 本质就是一个函数 可以实时监听要计算的属性的变化
    // 必须是一个function函数
    // 必须有返回值
    // 必须当做普通属性使用
    plus() {
      //计算属性会缓存计算的结果 性能比方法更好
      console.log("计算属性被执行"); //只会打印一次
      return this.count * 2;
    },
    plus1() {
      return this.count1 * 2;
    },
  },
  data() {
    return {
      count1: 1,
    };
  },
  methods: {
    cal() {
      console.log("计算方法被执行"); //会执行三次
      return this.count * 2;
    },
  },
};
</script>

<style>
</style>