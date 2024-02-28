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
  <div class="w-full h-svh flex flex-col">
    <button v-on:click="router.go(-1)" class="">
      <span class="text-20px w-full select-none text-black">назад</span>
    </button>
    <div class="">
      <Splide
          v-bind:options="{ rewind: true }"
          aria-label="My Favorite Images"
          class="">
        <SplideSlide class="">
          <img src="/public/items/1.jpeg" alt="Sample 1" class="h-full object-contain w-auto">
        </SplideSlide >
        <SplideSlide class="">
          <img src="/public/items/2.jpg" alt="Sample 1" class="h-full object-contain w-auto">
        </SplideSlide>
        <SplideSlide class="">
          <img src="/public/items/3.jpeg" alt="Sample 1" class="h-full object-contain w-auto">
        </SplideSlide>
      </Splide>
    </div>
<!--          <div class="">-->
<!--              <img class="min-h-full object-cover"-->
<!--                   v-bind:src="item.img" alt="">-->
<!--          </div>-->
  </div>
</template>

<style scoped>

</style>