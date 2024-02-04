<script setup lang="ts">
    import { useDark } from '@vueuse/core';
    import { ref, watch} from 'vue';

    const props = defineProps({
        width: Number
    });
    const isDark = useDark();
    const imagePath = ref();
    const toggleImage = () => {
        imagePath.value = isDark.value ? "src/assets/logo-light.svg" : "src/assets/logo.svg";
    }
    toggleImage();
    watch(isDark,toggleImage);

    const imageWidth = props.width ? props.width : 250;   
    
</script>

<template>
   <div class="logo">
        <img class="block" ref="image" :src = "imagePath" alt="Logo"  :width="imageWidth">
   </div>
</template>

<style scoped>
</style>
