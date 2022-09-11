<template>
  <p>watch组件</p>
  <input type="text" v-model.trim="info.username" />
</template>

<script>
import axios from "axios";
export default {
  name: "MyWatch",
  data() {
    return {
      username: "admin",
      info: {
        username: "zs",
        age: 20,
      },
    };
  },
  //通过watch节点监听数据变化
  watch: {
    // //通过侦听器检测姓名是否可用
    // //watch监听器最简单的定义方式就是定义方法
    // //第一个形参是新的值 第二个形参是原来的值
    // //监听谁方法名就是什么
    // async username(newData, oldData) {
    //   //  console.log(newData, oldData);
    //   //通过await 和 async 得到返回的结果
    //   const { data: res } = await axios.get(
    //     "https://www.escook.cn/api/finduser/" + newData
    //   );
    //   console.log(res);
    // },
    //高级写法 支持首次渲染就侦听
    // username: {
    //   async handler(newData, oldData) {
    //     const { data: res } = await axios.get(
    //       "https://www.escook.cn/api/finduser/" + newData
    //     );
    //     console.log(res);
    //   },
    //   immediate: true, //immediate为真表示渲染时就侦听数据变化
    // },

    //用watch监听对象 监听那个对象 对象名就是什么
    // info: {
    //   //老数据用不到可以不写
    //   async handler(newData) {
    //     const { data: res } = await axios.get(
    //       "https://www.escook.cn/api/finduser/" + newData.username
    //     );
    //     console.log(res);
    //     //如果监听的是一个对象 那么对象的属性发生变化无法监听到只能 用deep节点监听
    //   },
    //   //deep节点 可以监听对象内部属性变化
    //   //只要有一个属性变化都会触发这个侦听器
    //   deep: true,
    //   //immediate节点 渲染就监听
    //   immediate: true,
    // },

    //监听对象的单个属性 只有该属性被改变才会触发监听器 不需要加deep
    "info.username": {
      //老数据用不到可以不写
      async handler(newData) {
        const { data: res } = await axios.get(
          "https://www.escook.cn/api/finduser/" + newData.username
        );
        console.log(res);
        //如果监听的是一个对象 那么对象的属性发生变化无法监听到只能 用deep节点监听
      },
      //这种情况下无需加deep节点
      //   deep: true,
      //immediate节点 渲染就监听
      immediate: true,
    },
  },
};
</script>

<style>
</style>