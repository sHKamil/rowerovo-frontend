<script setup lang="ts">
    import type { ProductType } from '@/utils/types/ProductType.js';
    import type { PropType } from 'vue';
    import { GetBackendUrl } from '../utils/GetBackendUrl.js';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import ProductWindow from './ProductWindow.vue';

    const props = defineProps({
        product: {
            type: Object as PropType<ProductType>,
            required: true
        }
    });

    const product: ProductType = props.product;


</script>

<template>
    <ProductWindow :product="product">
        <Card>
            <CardHeader>
                <CardTitle>Model: {{ product.name }}</CardTitle>
                <CardDescription>Type: {{ product.type }}</CardDescription>
            </CardHeader>
            <CardContent>
                <img :src="product.image" class="w-full max-h-72 object-cover overflow-hidden" draggable="false">
            </CardContent>
            <CardFooter class="mt-3">
                Price: ${{ product.price }}
            </CardFooter>
        </Card>
    </ProductWindow>
</template>

<style scoped>
</style>
