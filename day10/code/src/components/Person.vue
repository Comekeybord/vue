<template>
  <div class="person">
    <input type="text" v-model="name" />
    <button @click="add">添加</button><br />
    <button @click="addWang">添加姓王的人</button>
    <button @click="addPersonServer">通过服务器随机添加诗句</button>
    <h1 style="color: red">Count组件的sum值为:{{ sum }}</h1>
    <h3>第一个人的名字为：{{ firstPerson }}</h3>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      // 用原生方法获取state中的数据
      return this.$store.state.personOptions.personList;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },
    firstPerson() {
      return this.$store.getters["personOptions/firstPersonName"];
    },
  },
  methods: {
    // 添加人
    add() {
      this.$store.commit("personOptions/ADD_PERSON", {
        id: nanoid(),
        name: this.name,
      });
      this.name = "";
    },
    // 添加姓王人
    addWang() {
      this.$store.dispatch("personOptions/personNameWang", {
        id: nanoid(),
        name: this.name,
      });
      this.name = "";
    },
    addPersonServer() {
      this.$store.dispatch("personOptions/addPersonServer");
    },
  },
  created() {
    console.log(this.$store);
  },
};
</script>
