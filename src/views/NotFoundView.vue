<template>
  <v-container fill-height>
    <v-row align="center" justify="center" style="height: 70vh;">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h1 font-weight-bold">404</h1>
        <h4 class="text-h4 font-weight-bold">
          <span v-for="(char, index) in text" :key="index" v-text="char" class="typing"></span>
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fullText: "Not Found",
      text: "",
      index: 0
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      if (this.index < this.fullText.length) {
        this.text += this.fullText[this.index];
        this.index++;
        setTimeout(this.typeText, 100);
      }
    }
  }
};
</script>

<style>
.typing {
  display: inline-block;
  white-space: pre;
}
</style>