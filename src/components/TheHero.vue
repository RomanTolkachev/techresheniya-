<script setup>

import Bg from '/webp/background-image.webp';
import BGGradient from '/webp/josh-beech-unsplash.svg';
import {onMounted, ref} from "vue";
import HeaderWide from "@/components/header/HeaderWide.vue";
import {piniaStorage} from "@/stores/pinia.js";
import {storeToRefs} from "pinia";
import OrderHero from "@/components/header/OrderHero.vue";
const heroRef = ref(null);

// Pinia

const pinia = piniaStorage();
const { piniaIfOpen: isOpen,  } = storeToRefs(pinia);
const { isOrderOpen } = storeToRefs(pinia);
const toggleOrderWindow = pinia.toggleOrderWindow;

onMounted(() => {
  pinia.views.heroRef  = heroRef.value
})

</script>

<template>
  <section ref="heroRef">
    <div class="overlay w-full h-[calc(100svh+200px)] fixed bg-black opacity-60 " v-bind:class="isOpen || isOrderOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'"></div>
    <div class="h-[65px]"></div>
    <div class="hero font-Onest h-[calc(100svh-65px)]">
      <div class="bg-center bg-no-repeat bg-black bg-hero w-full -mb-[calc(100svh-65px)] h-[calc(100svh-65px)] relative -z-10 bg-cover">
        <div
            class="bg-center bg-no-repeat w-full bg-hero-mask -mb-[calc(100svh-65px)] h-[calc(100svh-65px)] bg-cover opacity-60">
        </div>
      </div>
      <HeaderWide></HeaderWide>
      <transition>
        <OrderHero v-if="isOrderOpen"></OrderHero>
      </transition>
      <div class="h-full pt-[35px] sm:w-[660px] md:pt-[105px] container flex flex-col pb-[45px]">
        <h1 class="text-white pt-32 md:pt-[48px] text-hero-main text-center font-bold">5 ЛЕТ</h1>
        <p class="text-white text-hero-legend -mt-[25px] pt-legend text-center tracking-[.85px]">ПРОИЗВОДИМ
          ОБОРУДОВАНИЕ</p>
        <p class="text-white text-hero-legend text-center tracking-[.81px]">СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ</p>
        <div class="flex flex-col items-center md:flex-row justify-center gap-5 mt-auto md:mt-[37px]">
          <button v-on:click="toggleOrderWindow" class="md:h-[40px] w-full h-[60px] md:w-[189px] font-regular rounded-[10px] text-base _btn-orange">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
          <button v-bind:class="{'z-[-1]': isOpen || isOrderOpen}" class="md:h-[40px] w-full h-[60px] md:w-[189px] font-regular rounded-[10px] text-base _btn-transparent">
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>