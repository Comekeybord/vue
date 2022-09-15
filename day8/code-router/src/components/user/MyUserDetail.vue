<template>
  <button type="button" class="btn btn-light btn-sm" @click="comBack">
    后退
  </button>
  <h4 class="text-center">用户详情</h4>
  <table class="table table-bordered table-striped table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>头衔</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ id }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyUserDetail',
  // props接收路由传过来的id值
  props: ['id'],
  methods: {
    comBack() {
      // 返回到上一个组件
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less" scoped>
</style>