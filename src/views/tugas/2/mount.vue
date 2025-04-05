<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 ref="heading" class="text-h4 font-weight-bold text-white text-center">{{ message }}</h3>
    </v-card>
  </v-col>
</template>

<script setup>

</script>

<script>
export default {
  data() {
    return {
      message: "Mount"
    }
  },
  beforeMount() {
    console.log("beforeMount: ", this.$refs.heading?.textContent) 
  },
  mounted() {
    console.log("mounted: ", this.$refs.heading?.textContent)
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
