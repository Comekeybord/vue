<template>
  <div>
    <h1>App根组件</h1>
    <hr />
    <todo-input @addEvent="addNewEvent"></todo-input>
    <!-- mt-x是bootstrap中的上边距 -->
    <todo-list :list="tasklist" class="mt-2"></todo-list>
    <!-- 通过v-model更新activeIndex -->
    <todo-button v-model:active="activeIndex"></todo-button>
  </div>
</template>

<script>
import TodoList from "./components/TodoList/TodoList.vue";
import TodoInput from "./components/TodoInput/TodoInput.vue";
import TodoButton from "./components/TodoButton/TodoButton.vue";
export default {
  name: "MyApp",
  data() {
    return {
      //任务列表数据
      todolist: [
        { id: 1, task: "周一早晨9点开会", done: false },
        { id: 2, task: "周一晚上8点聚餐", done: false },
        { id: 3, task: "准备周三上午的演讲稿", done: true },
      ],
      nextId: 4,
      //控制按钮激活的值
      activeIndex: 0,
    };
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton: TodoButton,
  },
  methods: {
    //接收子组件传递的事件名
    addNewEvent(value) {
      // 添加到list数组
      this.todolist.push({
        id: this.nextId,
        task: value,
        done: false,
      });
      this.nextId++;
    },
  },
  computed: {
    //通过activeIndex的值动态传递数组
    tasklist() {
      switch (this.activeIndex) {
        case 0:
          return this.todolist;
        case 1:
          return this.todolist.filter((x) => x.done);
        case 2:
          return this.todolist.filter((x) => !x.done);
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>