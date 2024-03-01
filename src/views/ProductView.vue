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
  <div class="w-full h-svh flex flex-col font-Onest bg-gray-light">
    <button v-on:click="router.go(-1)" class="">
      <span class="text-20px w-full select-none text-black">назад</span>
    </button>
    <div class="slider w-full max-w-lg aspect-video min-h-80 mx-auto flex overflow-hidden">
        <div v-for="picture in prodInfo.img"
             class="dynamic-transition aspect-[1.3] w-full h-full mx-auto flex shrink-0 duration-300 relative">
          <div
              v-bind:style="{backgroundImage: `url(${picture})`}"
              class="custom-background h-full w-full blur-[60px] brightness-125"></div>
          <img
              class="h-full mx-auto object-cover absolute right-1/2 translate-x-1/2"
              :src="picture" alt="">
        </div>

    </div>
    <div class="flex justify-center gap-5">
      <button @click="prevSlide">prev</button>
      <button @click="nextSlide">next</button>
    </div>
    <div class="px-5 w-full max-w-lg mx-auto [&>h4]:text-32px [&>h4]:font-bold [&>h4]:py-3
               [&>span]:font-bold">
      <h4>
        {{ prodInfo.price }} ₽
      </h4>
      <span>{{ prodInfo.name }}</span>
      <h4>Описание</h4>
      <span>{{ prodInfo.description }}</span>
      <h4>Характеристики</h4>
      <ul class="list-disc [&>li]:ml-5">
        <li v-for="item in prodInfo.advantages">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dynamic-transition {
  transform:v-bind(transitionStyle)
}
.custom-background {
  background-size: 100% 100%;
  //filter: blur(100px);

}
</style>