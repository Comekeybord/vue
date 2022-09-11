<template>
  <h1>app根组件---{{ count }}</h1>
  <button type="button" class="btn btn-primary" @click="count++">+1</button>
  <hr />
  <level-two></level-two>
  <hr />
</template>

<script>
import LevelTwo from "./LevelTwo.vue";
import { computed } from "vue"; //导入计算模块
export default {
  name: "App",
  data() {
    return {
      color: "red",
      count: 0,
    };
  },
  components: {
    LevelTwo,
  },
  //通过provide 给子代共享数据
  provide() {
    //返回的对象为向外共享的数据
    //通过provide共享的数据不是响应式的 在共享的组件中数据改变 其他组件接收不到变化
    return {
      //通过conputed传递响应式数据
      color: this.color,
      count: computed(() => this.count),
    };
  },
};
</script>

<style>
</style>