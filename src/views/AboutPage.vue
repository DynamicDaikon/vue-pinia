<template>
  <div>about page</div>
  <button @click="toHome">Homeへ遷移</button>
  <div>before template disp count is {{ store.count }}</div>
</template>

<script setup>
import router from '../router/index';
import { useSampleStore } from '@/stores/sampleStore';
const store = useSampleStore();
const toHome = () => {
  router.push('/');
};
</script>

<style scoped></style>
