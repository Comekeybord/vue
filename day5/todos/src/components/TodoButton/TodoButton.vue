<template>
  <div class="button-container mt-3">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn"
        :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
        @click="updateActive(1)"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
        @click="updateActive(2)"
      >
        未完成
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
        @click="updateActive(0)"
      >
        全部
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoButton",
  //通过props指定默认激活的按钮
  props: {
    active: {
      //0表示全部 1表示已完成 2表示未完成
      type: Number,
      required: true,
      default: 0,
    },
  },
  //通过update自定义函数更新索引
  emits: ["update:active"],
  methods: {
    updateActive(index) {
      //如果相等就不更新
      if (index === this.active) return;
      this.$emit("update:active", index);
    },
  },
};
</script>

<style lang="less" scoped>
.button-container {
  width: 400px;
  text-align: center;
}
</style>