<script setup lang="ts">

    const imagePath = "src/assets/logo.svg";
    
</script>

<template>
   <div class="logo">
        <img ref="image" :src= "imagePath" alt="Logo"  width="150">
   </div>
</template>

<style scoped>
    .logo {
    display: block;
    }
</style>
