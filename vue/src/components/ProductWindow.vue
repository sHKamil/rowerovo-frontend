<script setup lang="ts">
import type { ProductType } from '@/utils/types/ProductType.js';
import type { PropType } from 'vue';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
const props = defineProps({
        product: {
            type: Object as PropType<ProductType>,
            required: true
        },
        imageUrl: String
    });

</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger><slot></slot></AlertDialogTrigger>
    <AlertDialogContent class="p-0 gap-0">
      <AlertDialogHeader>
        <AlertDialogTitle>
          <img :src="imageUrl" class="w-full max-h-72 object-cover overflow-hidden rounded-t-md" draggable="false">
        </AlertDialogTitle>
        <AlertDialogDescription class="p-3">
          <p class="text-lg">Model: {{ product.name }}</p>
          <p>Color: {{ product.color }}</p>
          <p>Type: {{ product.type }}</p>
          <p>Frame size: {{ product.size }}</p>
          <p>Wheel size: {{ product.wheel_size }}</p>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter class="p-3">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Reserve</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>