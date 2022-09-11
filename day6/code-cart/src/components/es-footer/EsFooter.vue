<template>
  <div class="footer">
    <!-- 复选框 全选区域 -->
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input
          type="checkbox"
          class="custom-control-input"
          id="fullCheck"
          :checked="isfull"
          @change="onCheckBoxChange"
        />
        <label class="custom-control-label" for="fullCheck">全选</label>
      </div>
    </div>
    <!-- 合计区域 -->
    <div>
      <span>合计：</span>
      <span class="amount">￥{{ amount.toFixed(2) }}</span>
    </div>
    <!-- 结算按钮 -->
    <div>
      <button
        type="button"
        class="btn btn-primary btn-settle"
        :disabled="total === 0"
      >
        结算({{ total }})
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EsFooter",
  props: {
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
      required: true,
    },
    //全选按钮的选中状态
    isfull: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  //自定义状态改变事件
  emits: ["fullChange"],
  methods: {
    //当全选状态改变时
    onCheckBoxChange(e) {
      //   console.log(e.target.checked);
      // 把状态传给父组件
      this.$emit("fullChange", e.target.checked);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #efefef;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
}

.amount {
  font-weight: 700;
  color: red;
}

.btn-settle {
  min-width: 90px;
  height: 38px;
  border-radius: 19px;
}
</style>