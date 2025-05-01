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
          <v-select
            v-model="categories"
            :items="options"
            item-title="text"
            item-value="value"
            label="Select Categories"
            multiple
          ></v-select>

          <label for="cover">Cover:</label>
          <input name="cover" ref="cover" type="file" class="input-box" id="cover" @change="handleFileChange" />

          <button type="submit" class="btn" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              <v-progress-circular indeterminate color="white" size="24"></v-progress-circular> 
              Submitting...
            </span>
            <span v-else>Submit</span>
          </button>
        </form>
        <br>
        <div v-if="submittedData">
          <hr />
          <div class="result-box">
            <b>Output:</b>
            <pre>{{ submittedData }}</pre>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const title = ref('');
const description = ref('');
const authors = ref('');
const price = ref(null);
const categories = ref([]);
const coverFile = ref(null);
const options = [
  { text: 'Belajar Matematika', value: '01' },
  { text: 'Belajar Kimia', value: '02' },
  { text: 'Belajar Fisika', value: '03' }
];
const errors = ref([]);
const isSubmitting = ref(false);
const submittedData = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    coverFile.value = file;
  }
};

const submitForm = async () => {
  errors.value = [];
  submittedData.value = null;
  isSubmitting.value = true;

  if (title.value.length < 3) errors.value.push('Title minimal 3 karakter!');
  if (description.value.length > 500) errors.value.push('Description maksimal 500 karakter!');
  if (authors.value.length < 3) errors.value.push('Authors minimal 3 karakter!');
  if (price.value < 0) errors.value.push('Price tidak boleh minus!');
  if (categories.value.length === 0) errors.value.push('Pilih minimal 1 category!');
  if (!coverFile.value) errors.value.push('Cover file harus dipilih!');

  if (errors.value.length === 0) {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('authors', authors.value);
    formData.append('price', price.value);
    formData.append('categories', JSON.stringify(categories.value));
    formData.append('cover', coverFile.value);

    try {
      const API_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
      const res = await axios.post(`${API_URL}/books`, formData);
      const data = await res.data;

      if (data.cover instanceof File || data.cover instanceof Blob) {
        data.cover = {
          name: data.cover.name,
          type: data.cover.type,
          size: (data.cover.size / 1024).toFixed(2) + ' KB'
        };
      }

      submittedData.value = {
        ...data,
        cover: {
          name: coverFile.value.name,
          type: coverFile.value.type,
          size: (coverFile.value.size / 1024).toFixed(2) + ' KB'
        }
      };

      clearForm();

    } catch (err) {
      console.error(err);
    }
  }

  isSubmitting.value = false;
};

const clearForm = () => {
  title.value = '';
  description.value = '';
  authors.value = '';
  price.value = null;
  categories.value = [];
  coverFile.value = null;
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
  transition: border-color 0.3s ease;
}

.input-box:focus,
textarea:focus,
select:focus {
  border-color: white;
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

.result-box {
  margin-top: 20px;
  background: #1e1e1e;
  padding: 16px;
  border: 1px solid #2b2a2b;
  border-radius: 8px;
  color: #cfcfcf;
  font-family: monospace;
  white-space: pre-wrap;
}
</style>
