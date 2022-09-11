<template>
  <div class="box">
    <button type="button" class="btn btn-primary" @click="getInfo">
      GetInfo
    </button>
    <hr />
    <div class="res">{{ res }}</div>
  </div>
</template>

<script>
export default {
  name: "GetInfo",
  data() {
    return {
      res: {},
    };
  },
  methods: {
    //调用自定义的axios方法发送get请求
    async getInfo() {
      const { data: res } = await this.$http.get("/api/get", {
        params: {
          name: "zs",
          age: 20,
        },
      });
      this.res = res;
    },
  },
  watch: {
    // res: {
    //   handler(newVal) {
    //     console.log(newVal);
    //   },
    //   deep: true,
    // },
  },
};
</script>

<style lang="less" scoped>
</style>