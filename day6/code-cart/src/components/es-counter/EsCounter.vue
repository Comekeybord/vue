<template>
  <div class="escounter">
    <!-- 减少按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onSub">-</button>
    <!-- 输入框 -->
    <input
      type="number"
      class="form-control form-control-sm ipt-num"
      v-model="number"
    />
    <!-- 增加按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onAdd">+</button>
  </div>
</template>

<script>
export default {
  name: "EsCounter",
  props: {
    // 传递每一个商品的数量
    // props中的数据是只读的 不能通过v-model直接绑定给input
    num: {
      type: Number,
      required: true,
      default: 0,
    },
    min: {
      type: Number,
      default: NaN,
    },
  },
  // 侦听number的变化 防止非法输入
  watch: {
    number(newVal) {
      // 如果不是数字 或者 负数 都赋值为1
      if (isNaN(newVal) || newVal <= 0) this.number = 1;
      // 如果是小数则取整
      if (String(newVal).indexOf(".") !== -1) this.number = parseInt(newVal);
      // 触发自定义事件 传递新的number值
      this.$emit("numberChange", this.number);
    },
  },
  data() {
    return {
      number: this.num,
    };
  },
  // 自定义事件 更新数量
  emits: ["numberChange"],
  methods: {
    onSub() {
      if (!isNaN(this.number) && this.number - 1 < this.min) return;
      this.number--;
    },
    onAdd() {
      this.number++;
    },
  },
};
</script>

<style lang="less" scoped>
.escounter {
  width: 8rem;
  display: flex;
  button {
    width: 6rem;
  }
  input {
    text-align: center;
  }
}
</style>