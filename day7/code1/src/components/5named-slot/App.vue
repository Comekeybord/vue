<template>
  <div class="app">
    <h1>App 根组件</h1>
    <hr />
    <my-article>
      <!-- 此处的内容会被放到插槽slot中 -->
      <!-- 默认情况渲染到default的插槽中 -->
      <!-- 通过<template v-slot:name> 指定渲染到哪个插槽 -->
      <!-- v-slot: 可以用#简写 -->
      <template #header>
        <h1>滕王阁序</h1>
      </template>
      <p>豫章故郡，洪都新府</p>
      <p>星分翼轸，地接衡庐</p>
      <p>襟三江而带五湖，控蛮劲而引殴越</p>
      <template #footer>
        <p>作者：王勃</p>
      </template>
    </my-article>
  </div>
</template>

<script>
import MyArticle from "./MyArticle.vue";
export default {
  name: "MyApp",
  components: {
    MyArticle,
  },
};
</script>

<style>
</style>