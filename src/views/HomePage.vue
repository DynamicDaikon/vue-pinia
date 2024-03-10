src/views/AboutPage.vue src/views/HomePage.vue
<template>
  <div>home page</div>
  <ul style="background-color: aqua">
    <li>
      <button @click="toAbout">Aboutに遷移</button>
    </li>
  </ul>
  <ul style="background-color: cadetblue">
    <li>
      <div>store.count is {{ store.count }}</div>
    </li>
    <li>
      <button @click="increment">for increment count</button>
    </li>
    <li>
      <div>store.count doubleCount is {{ store.doubleCounter }}</div>
    </li>
  </ul>
  <ul>
    <li>親から子にコンポーネント</li>
    <li>
      <button @click="toChild">親から子に値渡す</button>
    </li>
    <li>
      <childPg />
    </li>
  </ul>
</template>

<script setup>
import router from '../router/index';
import { useSampleStore } from '@/stores/sampleStore';
import childPg from './ChildPage.vue';
const store = useSampleStore();
const toAbout = () => {
  router.push('/About');
};
const increment = () => {
  return store.increment();
};
const toChild = () => {
  // router.push('/Child');
};
</script>

<style scoped></style>
