import { defineStore } from 'pinia';

export const useSampleStore = defineStore('sampleStore', {
  state: () => ({
    todoList: [],
    id: 0,
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.todoList.length * 2,
  },
  actions: {
    addRow(item) {
      this.todoList.push({
        item,
        id: this.id++,
        completed: false,
      });
    },
    delRow(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toggleComplete(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    increment() {
      this.count++;
    },
  },
});
