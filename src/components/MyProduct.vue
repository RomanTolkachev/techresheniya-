<script setup>

import {product} from '@/assets/products/spare_parts.js'
import ProdCard from './ProdCard.vue'

</script>

<template>
  <section class="bg-gray-light pt-[100px]">
    <div class="mx-auto w-fit ">
      <div class="button-rim">
        <div class="button-rim__bg">
          <h1 class="button-rim__text">
            Наше оборудование
          </h1>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[20px] container w-fit mt-16">
      <prod-card
          v-for="item in product"
          v-bind:details="item"
      />
    </div>
  </section>
</template>



<style scoped>

</style>