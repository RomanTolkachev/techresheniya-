<script setup>

import { ref } from "vue";
import {piniaStorage} from "@/stores/pinia.js";
import {onClickOutside} from "@vueuse/core";
import {storeToRefs} from "pinia";
import PhoneIcon from "@/components/svg/PhoneIcon.vue";


// Pinia

const pinia = piniaStorage();
const { isBurgerOpen } = storeToRefs(pinia);
const { toggle } = pinia;
const { scrollTo } = pinia;


// onClickOutside

const sideMenu = ref(null);


onClickOutside(sideMenu,() => {
  if (pinia.isBurgerOpen === true){
    pinia.isBurgerOpen = false;
  }
})

const menu = ref([
  {
    name: "Оборудование",
    scrollId: "productRef",
  },
  {
    name: "Запасные части",
    scrollId: "itemsRef",
  },
  {
    name: "О нас",
    scrollId: "aboutRef",
  },
])

</script>

<template>
  <div ref="sideMenu">
    <div class="fixed z-[2] top-0 bg-white w-full"  >
      <header class="flex text-base justify-between items-center h-[65px] px-[15px] text-black shadow-lg">
        <div
            class="header__logo"
            v-on:click="scrollTo('heroRef')">
          <img class="block transition-all hover:scale-[1.05]" src="/svg/ЛОГО.svg" alt="logo">
        </div>
        <nav>
          <ul class="hidden md:flex text-center w-fit gap-5 select-none items-center">
            <li class="transition-all"><PhoneIcon class="inline h-8 rotate-45"></PhoneIcon>8-123-456-78-90</li>
            <li
                v-for="item in menu"
                v-on:click="scrollTo(item.scrollId)"
                class="hover:-translate-y-0.5 hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,1)] align-middle text-center transition-all">
              {{ item.name }}
            </li>
          </ul>
        </nav>
        <a href="tel:81234567890" class=" mr-20 md:hidden leading-3 font-bold text-gray-dark self-center">позвонить нам<PhoneIcon class=" h-8 hidden xs:inline"></PhoneIcon></a>
      </header>
    </div>
    <nav class="bg-gray-burger text-white h-full w-2/5 fixed right-0 z-[2] select-none duration-300 md:hidden" v-bind:class="isBurgerOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'">
      <ul>
        <li v-on:click="scrollTo('heroRef')" class="p-[10px] border-solid border-y-[1px] active:bg-white active:text-gray-dark"> Главная </li>
        <li class="p-[10px] border-solid border-b-[1px] active:bg-white active:text-gray-dark"
            v-for="item in menu" v-on:click="scrollTo(item.scrollId)">{{ item.name }}</li>
      </ul>
    </nav>
    <button v-on:click="toggle" class="overflow-hidden h-[65px] md:hidden fixed top-0 right-0 z-[3] p-[15px] w-[65px] text-center">
      <span :class="{'translate-x-[90px]': isBurgerOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute"></span>
      <span :class="{'rotate-45': isBurgerOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[7px]"></span>
      <span :class="{'-rotate-45': isBurgerOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[7px]"></span>
      <span :class="{'translate-x-[-90px]': isBurgerOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[14px]"></span>
    </button>
  </div>
</template>

<style scoped>

</style>

