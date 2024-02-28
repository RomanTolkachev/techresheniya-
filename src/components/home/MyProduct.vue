<script setup>

import {products} from '@/assets/products/spare_parts.js'
import ProdCard from './ProdCard.vue'
import {onMounted, ref} from "vue";
import {piniaStorage} from "@/stores/pinia.js";
import ProdInfo from "@/views/ProductView.vue";
import {storeToRefs} from "pinia";
const productRef = ref(null)

onMounted(() => {
  pinia.views.productRef = productRef.value
})

const pinia = piniaStorage();
const { isProductInfoOpen } = storeToRefs(pinia);

</script>

<template>
  <section ref="productRef" class="bg-gray-light pt-[100px] h-full w-full">
  <ProdInfo
      v-if="isProductInfoOpen"
  ></ProdInfo>
    <div class="mx-auto w-fit container">
      <div class="button-rim">
        <div class="button-rim__bg">
          <h1 class="button-rim__text">
            оборудование
          </h1>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[20px] container w-fit mt-16">
      <prod-card
          v-for="item in products"
          v-bind:details="item"
      />
    </div>
  </section>
</template>



<style scoped>

</style>