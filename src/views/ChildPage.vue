<template>
  <div>I'm child</div>
  <button @click="goBack">back</button>
</template>

<script setup>
import router from '../router/index';
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
