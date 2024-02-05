<script setup lang="ts">
import type { ProductType } from '@/utils/types/ProductType.js';
import { ref } from 'vue';
import { GetProducts } from '../utils/GetProducts.js';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel'

const products_data = ref<ProductType[]>([]);
let promise_products = GetProducts();
promise_products.then((products: ProductType[]) => {
  products_data.value = products;
});

</script>

<template>
    <main class="mt-10 mx-auto max-w-4xl">
        <Carousel class="relative w-full max-w-4xl">
            <CarouselContent>
            <CarouselItem v-for="product in products_data">
                <img class="h-full w-full object-cover" :src="product.image">
            </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </main>
</template>
