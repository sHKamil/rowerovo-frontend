<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from './components/ui/button';
import Logo from './components/Logo.vue'
import DarkMode from './components/DarkMode.vue';
</script>

<template>
  <header class="flex justify-between items-center p-2 border-b" >
    <RouterLink to="/"><Logo :width="300"/></RouterLink>
      <div>
      </div>
      <nav class="flex gap-2 items-center">
        <Button><RouterLink to="/">Home</RouterLink></Button>
        <Button><RouterLink to="/products">Products</RouterLink></Button>
        <DarkMode />
      </nav>
  </header>
  <main class="bg-background ">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
