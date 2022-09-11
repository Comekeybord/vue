<template>
  App根组件
  <button @click="flag = !flag" class="btn">turn</button>
  <hr />
  <life-cycle v-if="flag"></life-cycle>
</template>

<script>
import LifeCycle from "./LifeCycle.vue";
export default {
  name: "MyApp",
  data() {
    return {
      flag: true,
    };
  },
  components: {
    LifeCycle,
  },
};
</script>

<style lang="less" scoped>
</style>