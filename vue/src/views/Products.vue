<script setup lang="ts">
import { ref } from 'vue';
import { GetProducts } from '../utils/GetProducts.js';
import type { ProductType } from '@/utils/types/ProductType.js';

const products_data = ref<ProductType[]>([]);

let promise_products = GetProducts();
promise_products.then((products: ProductType[]) => {
  products_data.value = products;
});

</script>

<template>
    <div>
      
    </div>
</template>
<style scoped>

</style>