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
    <li>モーダル</li>
    <button @click="showChild">モーダル表示</button>
    <childPg v-if="store.isShow" />
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
const showChild = () => {
  // router.push('/Child');
  store.reverse();
};
</script>

<style scoped></style>
