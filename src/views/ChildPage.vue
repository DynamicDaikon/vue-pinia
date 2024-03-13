<template>
  <div class="modal">
    I'm child
    <button @click="closeModal">back</button>
    <!-- <button @click="goHome">home</button> -->
  </div>
  <div id="modal-overlay"></div>
  <!-- <div>親から受け取った値は{{ props.fromParent }}です</div> -->
</template>

<script setup>
// import router from '../router/index';
import { useSampleStore } from '@/stores/sampleStore';
const store = useSampleStore();

const closeModal = () => {
  store.reverse();
};
</script>

<style scoped>
.modal {
  padding: 10px 20px;
  border: 2px solid #a5272a;
  background: #faebd7;
  z-index: 2;
  display: block;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
#modal-overlay {
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
