<template>
    <v-col cols="12" md="9">
      <v-card class="content-card d-flex flex-column align-center justify-center">
        <h3 class="text-h4 font-weight-bold text-white text-center">{{ message }}</h3>
        
        <div class="pa-4 text-center">
          <div v-if="isLoading" class="mb-4">
            <v-progress-circular indeterminate color="white"></v-progress-circular>
            <p class="mt-2 text-white">Loading...</p>
          </div>
          
          <div v-else>
            <p class="text-body-1 text-white mb-4">Counter: {{ counter }}</p>
            
            <div class="d-flex flex-wrap justify-center gap-2">
              <v-btn color="primary" @click="incrementCounter">Increment Counter</v-btn>
              <v-btn color="error" @click="triggerUnmount">Destroy Component</v-btn>
            </div>
            
            <div class="mt-6 text-left">
              <h4 class="text-h6 text-white mb-2">Lifecycle Events:</h4>
              <v-card class="pa-2 bg-grey-darken-3">
                <ul class="lifecycle-list">
                  <li v-for="(event, index) in lifecycleEvents" :key="index" class="text-white">
                    {{ event }}
                  </li>
                </ul>
              </v-card>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </template>
  
  <script setup>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue';
  
  const message = ref('Latihan Lifecycle');
  const counter = ref(0);
  const isLoading = ref(true);
  const lifecycleEvents = ref([]);
  const isComponentMounted = ref(false);
  
  const logLifecycleEvent = (event) => {
    const timestamp = new Date().toLocaleTimeString();
    lifecycleEvents.value.push(`${timestamp}: ${event}`);
    console.log(`${timestamp}: ${event}`);
  };
  
  logLifecycleEvent('Setup function started (similar to beforeCreate/created)');
  
  const incrementCounter = () => {
    counter.value++;
  };
  
  const triggerUnmount = () => {
    isComponentMounted.value = false;
    message.value = 'Component will be destroyed!';
  };
  
  onBeforeMount(() => {
    logLifecycleEvent('onBeforeMount: Component is about to be mounted');
  });
  
  onMounted(() => {
    logLifecycleEvent('onMounted: Component is mounted to the DOM');
    
    setTimeout(() => {
      isLoading.value = false;
      logLifecycleEvent('Initial data loaded');
    }, 2000);
    
    isComponentMounted.value = true;
  });
  
  onBeforeUpdate(() => {
    if (isComponentMounted.value) {
      logLifecycleEvent('onBeforeUpdate: Component is about to update');
    }
  });
  
  onUpdated(() => {
    if (isComponentMounted.value) {
      logLifecycleEvent('onUpdated: Component was updated');
    }
  });
  
  onBeforeUnmount(() => {
    logLifecycleEvent('onBeforeUnmount: Component is about to be unmounted');
  });
  
  onUnmounted(() => {
    logLifecycleEvent('onUnmounted: Component is unmounted from the DOM');
  });
  
  onActivated(() => {
    logLifecycleEvent('onActivated: Kept-alive component is activated');
  });
  
  onDeactivated(() => {
    logLifecycleEvent('onDeactivated: Kept-alive component is deactivated');
  });
  </script>
  
  <style scoped>
  .content-card {
    background-color: rgba(26, 26, 26, 0.5) !important;
    border: 1px solid #2b2a2b;
    min-height: 400px;
    width: 100%;
    padding: 2rem;
  }
  
  .lifecycle-list {
    max-height: 200px;
    overflow-y: auto;
    padding-left: 20px;
  }
  
  .lifecycle-list li {
    margin-bottom: 4px;
  }
  </style>