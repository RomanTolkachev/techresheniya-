<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {computed, ref} from "vue";
import {products} from '@/assets/products/spare_parts.js'
import {useRoute, useRouter} from "vue-router";

const pinia = piniaStorage();
const prodInfo = ref(null);

const route = useRoute();
const router = useRouter();
const item = products.find((item) => item.id === route.params.id)

// carousel

const currenSlideIndex = ref(0)

const prevSlide = () => {
  currenSlideIndex.value--;
  currenSlideIndex.value < 0 ? currenSlideIndex.value = item.img.length - 1 : currenSlideIndex.value;
}
const nextSlide = () => {
  currenSlideIndex.value++;
  currenSlideIndex.value > item.img.length - 1 ? currenSlideIndex.value = 0 : currenSlideIndex.value;
}

// bg-item

const BGPicture = ref([])

</script>

<template>
  <div class="w-full h-svh flex flex-col">
    <button v-on:click="router.go(-1)" class="">
      <span class="text-20px w-full select-none text-black">назад</span>
    </button>
    <div class="slider w-full max-w-lg aspect-video min-h-80 bg-amber-200 mx-auto flex shrink-0 overflow-hidden">
        <div v-for="item in item.img"
             class="picture__wrapper aspect-[1.3]  w-full h-full mx-auto overflow-hidden flex shrink-0 duration-300"
             v-bind:class="`translate-x-[-${currenSlideIndex * 100}%]`">
          <img
              class="h-full mx-auto object-cover"
              :src="item" alt="">
        </div>

    </div>
    <div class="flex justify-center gap-5">
      <button @click="prevSlide">prev</button>
      <button @click="nextSlide">next</button>
    </div>
  </div>
</template>

<style scoped>

</style>