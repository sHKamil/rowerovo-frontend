<script setup lang="ts">
import type { ProductType } from '@/utils/types/ProductType.js';
import { ref } from 'vue';
import { GetProducts } from '../utils/GetProducts.js';
import Product from '../components/Product.vue'

const products_data = ref<ProductType[]>([]);

let promise_products = GetProducts();
promise_products.then((products: ProductType[]) => {
  products_data.value = products;
});

</script>

<template>
    <div class="max-w-fit m-auto mt-20 grid 2xl:grid-cols-3 2xl:grid-flow-row xl:grid-cols-2 xl:grid-flow-row gap-10 justify-between">
      <Product v-for="product in products_data" :product="product" />
    </div>
</template>
<style scoped>

</style>