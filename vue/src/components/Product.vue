<script setup lang="ts">
import type { ProductType } from '@/utils/types/ProductType.js';
import type { PropType } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    product: {
        type: Object as PropType<ProductType>,
        required: true
    }
});

const product = ref<ProductType>(props.product);


</script>

<template>
    <div>
        <div>
            <img :src="product.image" width="250">
        </div>
    </div>
</template>

<style scoped>
</style>
