<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="id"
          :checked="checked"
          @change="onCheckedChange"
        />
        <label class="custom-control-label" :for="id">
          <!-- 商品的缩略图 -->
          <img :src="thumb" alt="商品图片" class="thumb" />
        </label>
      </div>
    </div>

    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥{{ price.toFixed(2) }}</div>
        <!-- 商品数量 -->
        <div class="count">
          <es-counter
            :num="count"
            :min="1"
            @numberChange="getNumber"
          ></es-counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EsCounter from "../es-counter/EsCounter.vue";
export default {
  name: "EsGoods",
  props: {
    //声明id属性 每件商品一个id
    id: {
      type: [String, Number],
      required: true,
    },
    // 商品缩略图
    thumb: {
      type: String,
      required: true,
    },
    // 名称
    title: {
      type: String,
      required: true,
    },
    // 单价
    price: {
      type: Number,
      required: true,
    },
    // 数量
    count: {
      type: Number,
      required: true,
    },
    // 勾选的状态
    checked: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    EsCounter,
  },
  methods: {
    // 触发自定义事件传递 checked值
    onCheckedChange(e) {
      // this.$emit("checkedChange", {
      //   id: this.id,
      //   value: e.target.checked,
      // });

      //用双向绑定实现
      this.$emit("update:checked", e.target.checked);
    },
    // 得到新的count值
    // 再把新值传递到App根组件
    getNumber(number) {
      this.$emit("update:count", number);
    },
  },
  // 定义自定义事件 传递选中值
  emits: ["update:checked", "update:count"],
};
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  display: flex;
  padding: 10px;
  // 左侧图片的样式
  .left {
    margin-right: 10px;
    // 商品图片
    .thumb {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  // 右侧商品名称、单价、数量的样式
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .top {
      font-weight: bold;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.4rem;
}
</style>