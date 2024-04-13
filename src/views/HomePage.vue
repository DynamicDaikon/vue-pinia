src/views/AboutPage.vue src/views/HomePage.vue
<template>
  <!-- class属性の指定にはオブジェクト形式で指定可能。配列でも指定可能。 -->
  <div>home page</div>
  <ul >
    <li>
      <button @click="toAbout">Aboutに遷移</button>
    </li>
  </ul>
  <p>count is {{ count }}</p>
  <button @click="increment">methodHandoler</button>
  <br />
  <input type="text" v-model="userInput" />
  <p>input value is {{ userInput }}</p>
  <br />
  {{ evaluation }}
</template>

<script setup>
/*
import router from '../router/index';
import { useSampleStore } from '@/stores/sampleStore';
const store = useSampleStore();
*/
import { ref, computed, watch, watchEffect } from 'vue';

/**
 * state
 */
const count = ref(0);
const userInput = ref('');

/**
 * watch関数
 * 引数を２つ取り、明示的に監視する項目を指定する
 * 監視：値を参照することを指す。
 * param1: 項目。オブジェクトを指定する。ので関数も入れ込むことが可能。
 * param2: 検知時の処理。処理には引数でoldValue,newValueを指定でき、差分がある時のみ動作する。
 */
watch(count, () => {
  console.log('watch');
});

/**
 * watchEffect
 * 画面上リアクティブな項目が変更されたら。
 * 特に項目は指定しない。
 */
watchEffect(() => {});

/**
 * getters
 */
const evaluation = computed(() => {
  return count.value > 3 ? 'Good' : 'Bad';
});

/**
 * actions
 */
const increment = () => {
  count.value++;
};
</script>

<style scoped>
.red {
  color: red;
}

.bg-blue {
  background-color: blue;
}
</style>
