<script setup>

import BGsrc from '@/assets/webp/background-imageWEBP.webp';
import BGGragient from '@/assets/webp/josh-beech-tXJhAFVOHVk-unsplash.svg';
import {computed, onMounted, ref, watch, watchEffect} from "vue";
import HeaderWide from "@/components/header/HeaderWide.vue";
import HeaderMobile from "@/components/header/HeaderMobile.vue"

const currentWidth = ref(window.innerWidth)
const ifMobileScreen = ref(currentWidth.value < 767);


// resize params

window.addEventListener('resize', () => currentWidth.value = window.innerWidth)

watch(() => currentWidth.value < 767, () => {
  ifMobileScreen.value = currentWidth.value < 767;
  console.log(ifMobileScreen.value);
});

// scroll params

const scroll = ref(window.scrollY);

const ifScrolled = ref(false);

window.addEventListener('scroll',() =>  scroll.value = window.scrollY)

watch(() => scroll.value, () => {
  scroll.value > 100 ? ifScrolled.value = true : ifScrolled.value = false;
  console.log(scroll.value);
  console.log(ifScrolled.value);
})

const menu = ref([
  {
    name: "Оборудование",
    scrollId: "product",
  },
  {
    name: "Запасные части",
    scrollId: "items",
  },
  {
    name: "О нас",
    scrollId: "about",
  },
])

</script>

<template>
  <div class="h-[65px]"></div>
  <div class="hero font-Onest h-[calc(100svh-65px)]">
    <div class="bg-center bg-no-repeat w-full -mb-[calc(100svh-65px)] h-[calc(100svh-65px)] relative -z-10 bg-cover"
         v-bind:style="{ backgroundImage: `url(${BGsrc})`}">
      <div
          class="bg-center bg-no-repeat w-full -mb-[calc(100svh-65px)] h-[calc(100svh-65px)] relative -z-10 bg-cover opacity-60"
          v-bind:style="{ backgroundImage: `url(${BGGragient})`}">
      </div>
    </div>
    <HeaderWide
        class="hidden md:block"
        v-bind:menu="menu"
    >
    </HeaderWide>
    <HeaderMobile
        class="md:hidden"
        v-bind:menu="menu"
    ></HeaderMobile>
    <div class="hero__main h-full pt-[35px] sm:w-[660px] md:pt-[105px] container flex flex-col pb-[45px]">
      <h1 class="text-white pt-32 md:pt-[48px] text-hero-main text-center font-bold">5 ЛЕТ</h1>
      <p class="text-white text-hero-legend -mt-[25px] pt-legend text-center tracking-[.85px]">ПРОИЗВОДИМ
        ОБОРУДОВАНИЕ</p>
      <p class="text-white text-hero-legend text-center tracking-[.81px]">СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ</p>
      <div class="flex flex-col items-center md:flex-row justify-center gap-5 mt-auto md:mt-[37px]">
        <button class="md:h-[40px] w-full h-[60px] md:w-[189px] font-regular rounded-[10px] text-base _btn-orange">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
        <button class="md:h-[40px] w-full h-[60px] md:w-[189px] font-regular rounded-[10px] text-base _btn-transparent">
          УЗНАТЬ БОЛЬШЕ
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>