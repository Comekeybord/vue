<template>
  <h1>Home组件---{{ count }}</h1>
  <button type="button" class="btn btn-primary" @click="count++">+1</button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      count: 1,
    };
  },
};
</script>

<style>
</style>