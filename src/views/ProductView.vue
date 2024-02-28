<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {ref} from "vue";
import {products} from '@/assets/products/spare_parts.js'
import {useRoute, useRouter} from "vue-router";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';


const pinia = piniaStorage();
const prodInfo = ref(null);

const route = useRoute();
const router = useRouter();
const item = products.find((item) => item.id === route.params.id)



</script>

<template>
  <div class="w-full">
    <button v-on:click="router.go(-1)" class="block w-fit self-end rounded-xl  p-3.5 z-30 ">
      <span class="text-20px w-full select-none text-black">назад</span>
    </button>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="/public/items/1.jpeg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="/public/items/2.jpg" alt="Sample 1">
      </SplideSlide>
    </Splide>
<!--          <div class="">-->
<!--              <img class="min-h-full object-cover"-->
<!--                   v-bind:src="item.img" alt="">-->
<!--          </div>-->
  </div>
</template>

<style scoped>

</style>