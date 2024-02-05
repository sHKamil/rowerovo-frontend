<script lang="ts" setup>
    import { useDark, useToggle } from '@vueuse/core';
    import { Switch } from '@/components/ui/switch'

    const isDark = useDark();
    const toggleDark = useToggle(isDark);
</script>
<template>
    <Switch :checked="isDark" @click="toggleDark()" />
</template>
<style scoped>
</style>
