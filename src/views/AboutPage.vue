<template>
  <div>about page</div>
  <button @click="toHome">Homeへ遷移</button>
</template>

<script setup>
import router from '../router/index';
const toHome = () => {
  router.push('/');
};
</script>

<style scoped></style>
