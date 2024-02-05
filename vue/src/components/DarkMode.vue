<script lang="ts" setup>
    import { useDark, useToggle } from '@vueuse/core';
    import { Button } from '@/components/ui/button'

    const isDark = useDark();
    const toggleDark = useToggle(isDark);
</script>
<template>
    <Button @click="toggleDark()">Toggle Mode</button>
</template>
<style scoped>
</style>
