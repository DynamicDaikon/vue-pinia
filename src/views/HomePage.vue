<template>
  <!-- class属性の指定にはオブジェクト形式で指定可能。配列でも指定可能。 -->
  <div>home page</div>
  <button @click="toTodo">Todoリストに遷移</button>
</template>

<script setup>
import router from '../router/index';
const toTodo = () => {
  router.push('/Todo');
};
</script>

<style scoped></style>
