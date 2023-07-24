<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const App1 = defineAsyncComponent(() => import('app1/App1'));
const App2 = defineAsyncComponent(() => import('app2/App2'));
</script>

<template>
  <div>
    <h1>App 1</h1>
    <App1 />
    <h1>App 2</h1>
    <App2 />
  </div>
</template>

<style scoped>

</style>
