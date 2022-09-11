<template>
  <div class="table">
    <!-- <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>state</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.state }}</td>
        </tr>
      </tbody>
    </table> -->

    <table class="table table-striped table-inverse">
      <thead class="thead-inverse">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>state</th>
        </tr>
      </thead>
      <!-- 表格主体 -->
      <tbody>
        <!-- 渲染每一行的数据 -->
        <!-- 这里用作用域插槽把数据传给app组件 让app组件来渲染 -->
        <tr v-for="item in list">
          <slot :item="item"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "zs",
          state: true,
        },
        {
          id: 2,
          name: "ls",
          state: true,
        },
        {
          id: 3,
          name: "wmz",
          state: false,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
table {
  text-align: center;
}
</style>