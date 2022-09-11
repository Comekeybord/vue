<template>
  <div class="app">
    <h1>App 根组件</h1>
    <hr />
    <my-table :data="goodslist">
      <template v-slot:head>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <!-- 插入body的部分 -->
      <template v-slot:body="{ row, index }">
        <td>{{ row.id }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <!-- 使用每个数据中的inputVisible来控制input框的显示与隐藏 -->
          <input
            type="text"
            class="form-control form-control-sm form-ipt"
            placeholder="请输入标签"
            v-if="row.inputVisible"
            v-focus
            v-model="row.inputValue"
            @blur="hidden(row)"
            @keyup.enter="addTags(row)"
            @keyup.esc="row.inputValue = ''"
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-else
            @click="row.inputVisible = true"
          >
            +Tag
          </button>
          <!-- 循环渲染标签信息 -->
          <span
            class="badge badge-warning ml-2"
            v-for="item in row.tags"
            :key="item"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <!-- 删除 -->
          <button
            type="button"
            class="btn btn-danger sm"
            @click="remove(row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from "./components/my-table/MyTable.vue";
export default {
  name: "MyApp",
  data() {
    return {
      // 商品列表
      goodslist: [],
    };
  },
  created() {
    // 发起请求
    this.getGoodsList();
  },
  methods: {
    // 获取商品列表
    async getGoodsList() {
      const { data: res } = await this.$http.get("/api/goods");
      console.log(res);
      this.goodslist = res.data;
    },
    // 通过id删除商品
    remove(id) {
      this.goodslist = this.goodslist.filter((x) => x.id !== id);
    },
    // 隐藏文本框
    hidden(row) {
      // 清空row.inputValue
      row.inputValue = "";
      // 隐藏文本框
      row.inputVisible = false;
      // console.log(val);
    },
    // 添加tags标签
    addTags(row) {
      console.log("触发enter");
      let val = row.inputValue;
      if (!val || row.tags.indexOf(val) !== -1) return this.hidden(row);
      // 否则添加进tags数组
      row.tags.unshift(val);
      // 隐藏文本框 清空值
      this.hidden(row);
    },
  },
  components: {
    MyTable,
  },
  directives: {
    // 自定义事件获得焦点 在created 和 updated 阶段都调用
    focus(el) {
      el.focus();
    },
  },
};
</script>

<style lang="less" scoped>
.form-ipt {
  width: 80px;
  display: inline;
}
</style>