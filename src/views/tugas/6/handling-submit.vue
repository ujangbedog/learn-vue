<template>
  <v-col cols="12" md="9">
    <v-card class="content-card">
      <v-card-title class="text-h4 font-weight-bold text-white text-center">
        Handling Submit
      </v-card-title>
      <v-card-text>
        <form @submit.prevent="submitForm">
          <div class="title">Form Buku</div>

          <div v-if="errors.length">
            <b>Silakan perbaiki:</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </div>

          <label for="title">Title:</label>
          <input type="text" class="input-box" v-model="title" id="title" placeholder="Judul buku" />

          <label for="description">Description:</label>
          <textarea v-model="description" placeholder="Deskripsi buku"></textarea>

          <label for="authors">Authors:</label>
          <input type="text" class="input-box" v-model="authors" id="authors" placeholder="Penulis" />

          <label for="price">Price:</label>
          <input type="number" class="input-box" v-model.number="price" id="price" placeholder="Harga" />

          <label for="categories">Categories:</label>
          <select v-model="categories" multiple id="categories">
            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>

          <label for="cover">Cover:</label>
          <input name="cover" ref="cover" type="file" class="input-box" id="cover">

          <input type="submit" class="btn" value="Submit">
        </form>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const authors = ref('');
const price = ref(0);
const categories = ref([]);
const options = [
  { text: 'Belajar Matematika', value: '01' },
  { text: 'Belajar Kimia', value: '02' },
  { text: 'Belajar Fisika', value: '03' }
];
const errors = ref([]);
const cover = ref(null);

const submitForm = () => {
  errors.value = [];

  if (title.value.length < 3) errors.value.push('Title minimal 3 karakter!');
  if (description.value.length > 500) errors.value.push('Description maksimal 500 karakter!');
  if (authors.value.length < 3) errors.value.push('Authors minimal 3 karakter!');
  if (price.value < 0) errors.value.push('Price tidak boleh minus!');
  if (categories.value.length === 0) errors.value.push('Pilih minimal 1 category!');

  if (errors.value.length === 0) {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('authors', authors.value);
    formData.append('price', price.value);
    formData.append('categories', categories.value);
    formData.append('cover', cover.value?.files[0]);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost/vue/proses.php", true);
    xhttp.send(formData);
  }
};
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 400px;
  color: #fff;
}

.input-box, textarea, select {
  width: 100%;
  padding: 10px 14px;
  background: transparent;
  color: white;
  border: 1px solid #2b2a2b;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.btn {
  background: transparent;
  color: white;
  border: 1px solid #2b2a2b;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
  margin-top: 10px;
}

.btn:hover {
  background-color: #2b2a2b;
}

ul {
  color: #ff6b6b;
  padding-left: 20px;
  margin-top: 0;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
}
</style>