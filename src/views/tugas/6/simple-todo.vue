<template>
    <v-col cols="12" md="9">
      <v-card class="content-card">
        <h3 class="text-h4 font-weight-bold text-white text-center">Simple TODO</h3>
  
        <!-- Form Input -->
        <div class="input-wrapper">
          <input
            v-model="newTodo"
            @keyup.enter="addTodo"
            placeholder="Judul Todo"
            class="todo-input text-white"
          />
          <input
            v-model="newDescription"
            @keyup.enter="addTodo"
            placeholder="Deskripsi"
            class="todo-input text-white"
          />
          <button @click="addTodo" class="add-button text-white">Tambah</button>
        </div>
  
        <div v-if="isLoading">
            <v-progress-circular indeterminate color="white"></v-progress-circular>
        </div>

        <p v-else-if="todos.length === 0" class="text-white mt-4">todo tidak ada.</p>
  
        <!-- Todo List -->
        <ul class="todo-list">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            :class="{ done: todo.completed }"
          >
            <div class="todo-item">
              <input
                type="checkbox"
                v-model="todo.completed"
                class="custom-checkbox"
                @change="updateTodoStatus(todo)"
              />
              <div class="todo-texts">
                <span class="todo-title">{{ todo.title }}</span>
                <span class="todo-description">{{ todo.description }}</span>
              </div>
            </div>
            <span class="delete text-white" @click="deleteTodo(todo.id)">❌</span>
          </li>
        </ul>
      </v-card>
    </v-col>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  const newTodo = ref("");
  const newDescription = ref("");
  const todos = ref([]);
  const isLoading = ref(true);
  
  const API_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
  
  const fetchTodos = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${API_URL}/todos`);
      todos.value = response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally{
        isLoading.value = false;
    }
  };
  
  const addTodo = async () => {
    if (newTodo.value.trim() && newDescription.value.trim()) {
      const newTodoData = {
        title: newTodo.value,
        description: newDescription.value,
        completed: false,
      };
  
      try {
        const response = await axios.post(`${API_URL}/todos`, newTodoData);
        todos.value.push(response.data);
        newTodo.value = "";
        newDescription.value = "";
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };
  
  const updateTodoStatus = async (todo) => {
    try {
      await axios.put(`${API_URL}/todos/${todo.id}`, {
        ...todo,
        completed: todo.completed,
      });
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };
  
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      todos.value = todos.value.filter(todo => todo.id !== id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  
  onMounted(fetchTodos);
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
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin: 16px 0;
  }
  
  .todo-input {
    width: 100%;
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
    align-self: flex-start;
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
    padding: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    margin-bottom: 8px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s ease;
  }
  
  .todo-list li.done .todo-title {
    text-decoration: line-through;
    color: #aaa;
  }
  
  .todo-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  
  .todo-texts {
    display: flex;
    flex-direction: column;
  }
  
  .todo-title {
    font-weight: bold;
    color: white;
  }
  
  .todo-description {
    font-size: 0.875rem;
    color: #ccc;
  }
  
  .delete {
    font-size: 16px;
    cursor: pointer;
  }
  
  .custom-checkbox {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid white;
    border-radius: 3px;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    margin-top: 4px;
  }
  
  .custom-checkbox:checked {
    background-color: white;
  }
  
  .custom-checkbox:checked::after {
    content: '✔';
    position: absolute;
    top: -2px;
    left: 2px;
    font-size: 12px;
    color: black;
  }
  </style>
  