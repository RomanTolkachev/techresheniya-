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
    <div class="relative hero font-Onest min-h-96 h-[calc(100svh-65px)]">
      <div class="absolute bg-center bg-no-repeat bg-black bg-hero w-full top-0 h-full -z-10 bg-cover">
        <div
            class="bg-center bg-no-repeat w-full bg-hero-mask h-full bg-cover opacity-60">
        </div>
      </div>
      <HeaderWide></HeaderWide>
      <transition>
        <OrderHero v-if="isOrderOpen"></OrderHero>
      </transition>
      <div class="uppercase h-full sm:w-[660px] container flex flex-col justify-center gap-hero pt-5 pb-7">
        <div class="text-center text-white h-fit flex flex-col mt-auto sm:mt-0">
          <h1 class=" text-hero-main font-bold text-nowrap">5 лет</h1>
          <p class="text-hero-legend">производим
            оборудование</p>
          <p class="text-hero-legend">специального назначения</p>
        </div>
        <div class="flex items-center flex-col font-regular text-base sm:flex-row justify-center gap-5 mt-auto sm:mt-0
        [&>button]:uppercase [&>button]:sm:h-10 [&>button]:w-full [&>button]:h-14 [&>button]:max-w-80 [&>button]:sm:max-w-48
        [&>button]:rounded-xl">
          <button
              v-bind:class="{'z-[-1]': isOpen || isOrderOpen}"
              v-on:click="toggleOrderWindow" class="_btn-orange">
            оставить заявку
          </button>
          <button v-bind:class="{'z-[-1]': isOpen || isOrderOpen}" class="_btn-transparent">
            узнать больше
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