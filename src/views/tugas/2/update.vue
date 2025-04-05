<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 ref="heading" class="text-h4 font-weight-bold text-white text-center">{{ message }}</h3>
      <v-btn color="black" class="mt-4" @click="changeMessage">Ubah Pesan</v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world'
    }
  },
  beforeUpdate() {
    console.log('beforeUpdate: ', this.$refs.heading?.textContent)
  },
  updated() {
    console.log('updated: ', this.$refs.heading?.textContent)
  },
  methods: {
    changeMessage() {
      this.message = 'selamat pagi'
      
      this.$nextTick(() => {
        console.log('nextTick: ', this.$refs.heading?.textContent)
      })
    }
  }
}
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-white {
  color: #ffffff !important;
}
</style>