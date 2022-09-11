<!-- 模板用template标签包裹 -->
<template>
  <h1>这里是<i>Vue</i> 根组件 {{ username }}</h1>
  <hr />
  <p>count的值是：{{ count }}</p>
  <button @click="addCount">+1</button>
  <hr />
  <p>全局注册的组件直接用标签使用</p>
  <my-swiper></my-swiper>
  <!-- 用帕斯卡命名法命名 在使用时既可以用帕斯卡名 也可以用短横线名 -->
  <MyTest></MyTest>
  <my-test></my-test>
  <hr />
  <p>局部注册组件</p>
  <my-search></my-search>
</template>

<!-- 组件中的script节点 -->
<script>
// 导入组件
import Search from "./components/02.privateReg/Search.vue";
export default {
  //script 中的name节点 用来定义组件的名称
  name: "myApp",
  // script的data节点必须以函数的形式返回数据对象
  data() {
    return {
      username: "zs",
      count: 0,
    };
  },
  // script中的methods节点用来定义事件处理函数
  methods: {
    addCount() {
      this.count++;
    },
  },
  //components局部注册组件
  components: {
    "my-search": Search,
  },
};
</script>

// 组件的style节点
<style lang="less">
// lang不写默认是css
h1 {
  color: red;
  i {
    color: blue;
  }
}
</style>