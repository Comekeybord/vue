<template>
  <div class="count">
    <h1>当前求和为---{{ sum }}</h1>
    <h3>当前求和放大十倍为---{{ bigSum }}</h3>
    <h3>我在{{ school }}学{{ object }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
// 引入state映射方法mapState
// 引入getters映射方法mapGetters
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1, //用户选择的数字
    };
  },
  methods: {
    // 亲自写
    // increment() {
    //   // 调用this.$store.dispatch把需求提交到actions
    //   // this.$store.dispatch("add", this.num);

    //   // 当不需要业务逻辑时 直接提交到mutations中处理数据
    //   this.$store.commit("ADD", this.num);
    // },
    // decrement() {
    //   // this.$store.dispatch("decrement", this.num);
    //   this.$store.commit("DECREMENT", this.num);
    // },

    // 这种方式调用mutations必须在元素标签中传参
    // 借助mapmutations创建方法 调用mapmutations中的方法(对象写法)
    ...mapMutations({ increment: "ADD", decrement: "DECREMENT" }),

    // 借助mapmutations创建方法 调用mapmutations中的方法(数组写法)
    // ...mapMutations(["ADD", "DECREMENT"]),

    /* **************************************************** */
    // 手写方法
    // incrementOdd() {
    //   this.$store.dispatch("addOdd", this.num);
    // },
    // incrementWait() {
    //   this.$store.dispatch("addWait", this.num);
    // },

    // 借助mapActions创建方法 调用mapActions中的方法(对象写法)
    ...mapActions({ incrementOdd: "addOdd", incrementWait: "addWait" }),

    // 借助mapActions创建方法 调用mapActions中的方法(数组写法)
    // ...mapActions(["addOdd", "addWait"]),
  },
  // 用computed属性简化获取vuex的方式
  computed: {
    // 借助mapState生成计算属性从state中获取数据 (对象方法)
    // ...mapState({
    //   sum: "sum",
    //   school: "school",
    //   object: "object",
    // }),

    // 借助mapState生成计算属性从state中获取数据 (数组方法)
    ...mapState(["sum", "school", "object"]),

    // 借助mapGetters生成计算属性从Getters中获取数据 (数组方法)
    ...mapGetters(["bigSum"]),
  },
  mounted() {
    const x = mapState({
      sum: "sum",
    });
    console.log(x);
  },
};
</script>

<style lang="less" scoped>
button {
  margin-left: 5px;
}
</style>