<script setup>
import { ref } from 'vue';
import router from '../router/index';

let id = 0;

// todo入力テキスト
const todoText = ref('');
// tidoリスト
const todoList = ref([]);

const goHome = () => {
  router.push('/');
};

/**
 * todo追加ファンクション
 * @param {*} text
 */
const addTodo = (text) => {
  if (text !== '') {
    todoList.value.push({
      id: id++,
      todoText: text,
      done: '',
    });
    todoText.value = '';
  } else {
    alert('入力フォームに値を入力してください');
  }
};

/**
 * todo完了ファンクション
 * @param {*} todo
 */
const toggleTask = (todo) => {
  if (todo.done == '') {
    todo.done = 'todo-done';
  } else {
    todo.done = '';
  }
};

/**
 * 完了済みtodo削除ファンクション
 */
const delComplete = () => {
  const afterArray = todoList.value.filter((todo) => todo.done === '');

  todoList.value = afterArray;
  console.log('cleaned completed todo');
};
</script>

<template>
  <h1>My ToDo App</h1>
  <button @click="goHome">Homeに戻る</button>
  <br />
  <input type="text" v-model="todoText" placeholder="add todo" />
  <button @click="addTodo(todoText)">追加</button>
  <button @click="delComplete">完了済みを削除する</button>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      <input type="checkbox" @click="toggleTask(todo)" />
      <span :class="todo.done">{{ todo.todoText }}</span>
    </li>
  </ul>
  <span v-if="todoList.length == 0">ToDo がまだありません！</span>
</template>

<style scoped>
.todo-done {
  text-decoration: line-through;
}
</style>
