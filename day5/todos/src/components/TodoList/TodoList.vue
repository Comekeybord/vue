<template>
  <ul class="list-group">
    <!-- 列表组 -->
    <!-- v-for循环渲染 -->
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="(item, index) in list"
      :key="item.id"
    >
      <!-- 复选框 -->
      <div class="custom-control custom-checkbox">
        <!-- 通过v-model实现复选框与done状态之间的绑定 因为是复杂数据类型 所以会修改父组件原来的对象 -->
        <input
          type="checkbox"
          class="custom-control-input"
          :id="item.id"
          v-model="item.done"
        />
        <label
          class="custom-control-label"
          :for="item.id"
          :class="item.done ? 'delete' : ''"
          >{{ item.task }}</label
        >
      </div>
      <!-- 徽标 -->
      <!-- v-if控制显示隐藏 -->
      <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
      <span class="badge badge-warning badge-pill" v-else>未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  //声明要传递的列表数据
  props: {
    //列表数据
    list: {
      tyep: Array, //只能传递数组
      default: [], //默认为空数组
      required: true, //必须传递
    },
  },
};
</script>

<style lang="less" scoped>
.list-group {
  width: 400px;
}

//删除效果
.delete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>