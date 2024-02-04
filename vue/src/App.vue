<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
import DarkMode from './components/DarkMode.vue';
</script>

<template>
  <header>
    <Logo :width="300"/>
      <div>
      </div>
      <nav>
        <DarkMode />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/api">API</RouterLink>
      </nav>
  </header>
  <main class="bg-primary min-h-dvh"> sefse
    <RouterView />
  </main>
</template>

<style scoped>
</style>
