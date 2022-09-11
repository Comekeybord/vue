<template>
  <!-- 实现点击按钮显示输入框并且获得焦点（通过ref引用对象） -->
  <input type="text" v-if="inputVisible" ref="ipt" />
  <button v-else type="button" class="btn btn-primary" @click="showInput">
    展示input输入框
  </button>
</template>

<script>
export default {
  name: "MyApp",
  data() {
    return {
      inputVisible: false,
    };
  },
  methods: {
    showInput() {
      this.inputVisible = true;

      //因为DOM 是异步渲染的 所以这里执行获取focus之前还没渲染完 获得到的引用对象为undefined
      // this.$nextTick会等dom渲染完成后再执行
      this.$nextTick(() => {
        console.log(this.$refs.ipt);
        //   通过引用对象refs 获取焦点
        this.$refs.ipt.focus();
      });
    },
  },
};
</script>

<style lang="less" scoped>
input {
  width: 200px;
}
</style>