<script setup>
import { ref } from 'vue';

let id = 0;

const todoText = ref('');
// tidoリスト
const todoList = ref([]);

const addTodo = (text) => {
  if (text !== '') {
    todoList.value.push({
      id: id++,
      todoText: text,
      isComplete: false,
    });
    todoText.value = '';
  } else {
    alert('入力フォームに値を入力してください');
  }
};
</script>

<template>
  <h1>My ToDo App</h1>
  <input type="text" v-model="todoText" placeholder="add todo" /><button
    @click="addTodo(todoText)"
  >
    追加
  </button>
  <button>完了済みを削除する</button>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      <input type="checkbox" />
      <span>{{ todo.todoText }}</span>
    </li>
  </ul>
  <span v-if="todoList.length == 0">ToDo がまだありません！</span>
</template>

<style scoped>
.todo-done {
  text-decoration: line-through;
}
</style>
