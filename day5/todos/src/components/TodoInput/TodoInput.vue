<template>
  <!-- 提交事件写在表单上 -->
  <form @submit.prevent="add">
    <div class="form-row align-items-center">
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInputGroup">Username</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">任务</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="请输入新任务"
            style="width: 356px"
            v-model.trim="nextEvent"
          />
        </div>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  //通过props与emits自定义事件实现子传父
  //接收列表
  props: {},
  data() {
    return {
      nextId: 4,
      nextEvent: "",
    };
  },
  //定义自定义事件
  emits: ["addEvent"],
  methods: {
    add() {
      //向list里面添加数据
      //   this.list.unshift({
      //     id: this.nextId,
      //     task: this.nextEvent,
      //     done: false,
      //   });
      //   this.nextId++;

      //老师写法
      //判断是否为空
      if (!this.nextEvent) return alert("任务不能为空");
      //调用自定义事件 把任务名发送给父组件
      this.$emit("addEvent", this.nextEvent);
      //清空文本框
      this.nextEvent = "";
    },
  },
};
</script>

<style lang="less" scoped>
</style>