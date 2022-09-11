<template>
  <div class="my-table">
    <h3>mytable 组件</h3>
    <table class="table table-striped table-bordered">
      <!-- 标题区域 -->
      <thead>
        <tr>
          <slot name="head"></slot>
        </tr>
      </thead>
      <!-- 主体区域 -->
      <tbody>
        <tr v-for="(item, index) in data" :key="item.id">
          <slot :row="item" :index="index" name="body"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    // 传递列表数据
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style>
</style>