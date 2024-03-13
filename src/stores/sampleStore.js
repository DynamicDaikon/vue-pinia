import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSampleStore = defineStore('sampleStore', () => {
  /**
   * state
   */
  const count = ref(0);
  const name = ref('');
  const isShow = ref(false);
  /**
   * getters
   */
  const doubleCounter = computed(() => count.value * 2);
  /**
   * actions
   */
  function increment() {
    count.value++;
  }
  function reverse() {
    this.isShow = !this.isShow;
  }

  return { count, name, isShow, doubleCounter, increment, reverse };
});
