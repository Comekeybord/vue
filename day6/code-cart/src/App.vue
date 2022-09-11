<template>
  <div class="app">
    <es-header title="购物车案例" bgcolor="#0172EB" color="white"></es-header>
    <es-goods
      v-for="items in goodslist"
      :key="items.id"
      :id="items.id"
      :price="items.goods_price"
      v-model:count="items.goods_count"
      :thumb="items.goods_img"
      :title="items.goods_name"
      :checked="items.goods_state"
      v-model:checked="items.goods_state"
    ></es-goods>
    <es-footer
      @fullChange="fullStateChange"
      :amount="amount"
      :total="total"
      :isfull="isfull"
    ></es-footer>
  </div>
</template>

<script>
import EsHeader from "./components/es-header/EsHeader.vue";
import EsFooter from "./components/es-footer/EsFooter.vue";
import EsGoods from "./components/es-goods/EsGoods.vue";
export default {
  name: "MyApp",
  components: {
    EsHeader,
    EsFooter,
    EsGoods,
  },
  data() {
    return {
      goodslist: [],
      isfull: false,
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      //向服务器发请求获取商品列表
      const { data: res } = await this.$http.get("/api/cart");
      if (res.status !== 200) return alert("请求失败");
      console.log(res.list);
      this.goodslist = res.list;
    },
    // 当全选状态改变
    // 全选商品
    fullStateChange(state) {
      this.goodslist.forEach((x) => {
        x.goods_state = state;
      });
      this.isfull = state;
    },

    // 修改数据源的选中状态
    // listCheckedChange(checkedState) {
    //   this.goodslist.find((x) => x.id === checkedState.id).goods_state =
    //     checkedState.value;
    // },
  },
  // 用computed计算总价格
  computed: {
    amount() {
      let sum = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          sum += x.goods_price * x.goods_count;
        });
      return sum;
    },
    // 已勾选商品的总数量
    total() {
      let sum = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          sum += x.goods_count;
        });
      return sum;
    },
  },
};
</script>

<style lang="less" scoped>
.app {
  margin-top: 45px;
  padding-bottom: 50px;
}
</style>