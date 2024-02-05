<script setup lang="ts">
import type { ProductType } from '@/utils/types/ProductType.js';
import type { PropType } from 'vue';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import { DialogClose } from 'radix-vue';
import Button from './ui/button/Button.vue';
const props = defineProps({
        product: {
            type: Object as PropType<ProductType>,
            required: true
        },
        imageUrl: String
    });

</script>

<template>
  <Dialog>
    <DialogTrigger>
      <slot></slot>
    </DialogTrigger>
    <DialogContent class="p-0">
      <DialogHeader>
        <DialogTitle>
          <img :src="imageUrl" class="w-full max-h-72 object-cover overflow-hidden rounded-t-md" draggable="false">
        </DialogTitle>
        <DialogDescription class="px-3">
          <p class="text-2xl">Model: {{ product.name }}</p>
          <p>Color: {{ product.color }}</p>
          <p>Type: {{ product.type }}</p>
          <p>Frame size: {{ product.size }}"</p>
          <p>Wheel size: {{ product.wheel_size }}"</p>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter class="p-3 justify-between sm:justify-between items-center border-t">
        <p class="text-xl text-left">Price: ${{ product.price }}</p>
        <DialogClose class="flex justify-between gap-2">
          <Button :variant="'secondary'">Cancel</Button>
          <Button>Reserve</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>