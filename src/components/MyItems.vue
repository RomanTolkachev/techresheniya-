<script setup>

import {items} from '@/assets/products/spare_parts.js'
import ItemCard from "@/components/ItemCard.vue";
import {ref} from "vue";

const itemsRef = ref(null);

defineExpose({
  itemsRef
})

</script>

<template>
  <section ref="itemsRef" class="bg-gray-light pt-[100px]">
    <div class="mx-auto w-fit ">
      <div class="button-rim">
        <div class="button-rim__bg">
          <h1 class="button-rim__text">
            Запасные части
          </h1>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] container w-fit mt-16">
      <item-card
          v-for="item in items"
          v-bind:details="item"
      />
    </div>
  </section>
</template>



<style scoped>

</style>