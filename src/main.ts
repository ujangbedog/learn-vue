import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import {
  VApp,
  VAppBar,
  VTabs,
  VTab,
  VContainer,
  VRow,
  VCol,
  VBtn,
  VCard,
  VCardTitle,
} from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VTabs,
    VTab,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VCard,
    VCardTitle,
  },
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
