<template>
  <v-col cols="12" md="9">
    <v-card class="content-card">
      <h3 class="text-h4 font-weight-bold text-white text-center">Simple TODO</h3>

      <div class="input-wrapper">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          placeholder="Tambahkan todo baru"
          class="todo-input text-white"
        />
        <button @click="addTodo" class="add-button text-white">Tambah</button>
      </div>

      <p v-if="todos.length === 0" class="text-white mt-4">todo tidak ada.</p>

      <ul class="todo-list">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          :class="{ done: todo.done }"
          class="text-white"
          @click="toggleTodo(index)"
        >
          {{ index + 1 }}. {{ todo.text }}
          <span class="delete text-white" @click.stop="deleteTodo(index)">❌</span>
        </li>
      </ul>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false })
    newTodo.value = ''
  }
}

const deleteTodo = (index) => {
  todos.value.splice(index, 1)
}

const toggleTodo = (index) => {
  todos.value[index].done = !todos.value[index].done
}
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.text-white {
  color: #ffffff !important;
}

.input-wrapper {
  display: flex;
  margin: 16px 0;
  gap: 8px;
  width: 100%;
}

.todo-input {
  flex-grow: 1;
  padding: 8px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #2b2a2b;
  color: white;
}

.add-button {
  background-color: transparent;
  border: 1px solid #2b2a2b;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.todo-list {
  list-style: none;
  padding-left: 0;
  margin-top: 16px;
  width: 100%;
}

.todo-list li {
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  margin-bottom: 8px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.todo-list li.done {
  text-decoration: line-through;
  color: #aaa;
  background-color: rgba(255, 255, 255, 0.03);
}

.delete {
  font-size: 16px;
  cursor: pointer;
}
</style>
