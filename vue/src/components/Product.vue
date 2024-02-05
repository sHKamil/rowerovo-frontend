<script setup lang="ts">
    import type { ProductType } from '@/utils/types/ProductType.js';
    import type { PropType } from 'vue';
    import { GetBackendUrl } from '../utils/GetBackendUrl.js';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

    const props = defineProps({
        product: {
            type: Object as PropType<ProductType>,
            required: true
        }
    });

    const product: ProductType = props.product;
    const imageUrl = GetBackendUrl() + "/img/" + props.product.image;

</script>

<template>
    <!-- <div>
        <div>
            <img :src="product.image" width="250">
        </div>
        <div>
            <p>Model: {{ product.name }}</p>
            <p>Type: {{ product.type }}</p>
            <p>Frame size: {{ product.size }} inches</p>
            <p>Color: {{ product.color }}</p>
            <p>Wheel size: {{ product.wheel_size }} inches</p>
            <p>Price: ${{ product.price }}</p>
        </div>
    </div> -->
    <Card>
        <CardHeader>
            <CardTitle>Model: {{ product.name }}</CardTitle>
            <CardDescription>Type: {{ product.type }}</CardDescription>
        </CardHeader>
        <CardContent>
            <img :src="imageUrl" class="w-full max-h-72 object-cover overflow-hidden">
        </CardContent>
        <CardFooter>
            Price: ${{ product.price }}
        </CardFooter>
    </Card>
</template>

<style scoped>
</style>
