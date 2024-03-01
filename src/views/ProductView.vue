<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {computed, ref, watch} from "vue";
import {products} from '@/assets/products/spare_parts.js'
import {useRoute, useRouter} from "vue-router";

const pinia = piniaStorage();

const route = useRoute();
const router = useRouter();
const prodInfo = products.find((item) => item.id === route.params.id);

// carousel

const currenSlideIndex = ref(0)

const prevSlide = () => {
  currenSlideIndex.value--;
  currenSlideIndex.value < 0 ? currenSlideIndex.value = prodInfo.img.length - 1 : currenSlideIndex.value;
}
const nextSlide = () => {
  currenSlideIndex.value++;
  currenSlideIndex.value > prodInfo.img.length - 1 ? currenSlideIndex.value = 0 : currenSlideIndex.value;
}

const transitionStyle = computed(() => {
  return `translateX(${currenSlideIndex.value * -100}%)`
})

watch(() => transitionStyle.value, () => console.log(transitionStyle.value))



// bg-item

</script>

<template>
  <div class="w-full h-svh flex flex-col">
    <button v-on:click="router.go(-1)" class="">
      <span class="text-20px w-full select-none text-black">назад</span>
    </button>
    <div class="slider w-full max-w-lg aspect-video min-h-80 mx-auto flex overflow-hidden">
        <div v-for="picture in prodInfo.img"
             class="dynamic-transition aspect-[1.3] w-full h-full mx-auto flex shrink-0 duration-300">
          <img
              class="h-full mx-auto object-cover"
              :src="picture" alt="">
        </div>

    </div>
    <div class="flex justify-center gap-5">
      <button @click="prevSlide">prev</button>
      <button @click="nextSlide">next</button>
    </div>
  </div>
</template>

<style scoped>
.dynamic-transition {
  transform:v-bind(transitionStyle)
}
</style>