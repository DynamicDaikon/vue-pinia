import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSampleStore = defineStore('sampleStore', () => {
  /**
   * state
   */
  const count = ref(0);
  const name = ref('');
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

  return { count, name, doubleCounter, increment };
});
