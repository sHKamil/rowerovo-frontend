<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
</script>

<template>
  <header>
    <Logo />
      <div>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/api">API</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  min-height: 16dvh;
  min-height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  line-height: 1.5;
  padding: .5rem;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem;
}

nav a:first-of-type {
  border: 0;
}

main {
  min-height: 85dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #363636;
}

</style>
