src/views/AboutPage.vue src/views/HomePage.vue
<template>
  <div>home page</div>
  <button @click="toAbout">Aboutに遷移</button>
</template>

<script setup>
import router from '../router/index';
const toAbout = () => {
  router.push('/About');
};
</script>

<style scoped></style>
