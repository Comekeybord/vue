<template>
  <div>
    <h1>这是 App.vue 根组件</h1>
    <hr />
    <!-- 无法使用未声明的props属性传递数据 -->
    <!-- 动态绑定props的值 -->
    <my-article
      :title="info.title"
      :author="info.author"
      pub-time="1989"
    ></my-article>
  </div>
</template>

<script>
// 导入组件
import MyArticle from "./Article.vue";

export default {
  name: "MyApp",
  //注册子组件
  components: {
    MyArticle: MyArticle,
  },
  data() {
    return {
      info: {
        title: "面朝大海，春暖花开",
        author: "海子",
      },
    };
  },
};
</script>
