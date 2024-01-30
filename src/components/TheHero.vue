<script setup>

import BGsrc from '@/assets/webp/background-imageWEBP.webp';
import BGGragient from '@/assets/webp/josh-beech-tXJhAFVOHVk-unsplash.svg';
import {ref} from "vue";

const menu = ref(['Оборудование', 'Запасные части', 'О нас']);


const ifOpen = ref(true);

</script>

<template>
<div class="hero font-Onest h-svh md:h-[716px]">
  <div class="bg-center bg-no-repeat w-full -mb-[100svh] h-svh md:h-[716px] md:-mb-[716px] relative -z-10 bg-cover"
       v-bind:style="{ backgroundImage: `url(${BGsrc})`}">
    <div class="bg-center bg-no-repeat w-full -mb-[100svh] h-svh md:h-[716px] md:-mb-[716px] relative -z-10 bg-cover opacity-60"
       v-bind:style="{ backgroundImage: `url(${BGGragient})`}">
    </div>
  </div>
  <header class="hero__header header text-base flex justify-between items-center h-[75px] px-[15px] pt-10 md:pt-0 container text-white">
    <div class="header__logo">
      <a class="block" href="#">
        <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
      </a>
    </div>
    <nav class="header__navbar self-start md:self-center hidden md:contents">
      <ul class="navbar flex flex-col gap-5 mt-[8px]">Наше производство
        <li class="navbar__product hidden hover:underline underline-offset-2"><a href="">Оборудование</a></li>
        <li class="navbar__tools hidden hover:underline underline-offset-2"><a href="">Запасне части</a></li>
      </ul>
    </nav>
    <div class="header__about-us hover:underline underline-offset-2 hidden md:contents">о нас</div>
    <div
        class="w-[40px] absolute top-0 right-0 m-[15px]"
        v-on:click="ifOpen = !ifOpen"
    >
      <img
        src="/svg/burger.svg"
        alt="burg">
    </div>
    <nav
        class="md:hidden absolute w-full top-0 left-0 text-20px bg-gray-burger transition-all duration-300"
        v-bind:class="[ifOpen ? 'left-0' : '-left-[100%]']"
    >
      <div class="header__logo p-[10px] border-solid border-b-[1px] flex justify-between relative">
        <a class="block " href="#">
          <img class="block " src="@/assets/svg/ЛОГО.svg" alt="logo">
        </a>
        <div
            id="escape"
            class="w-[40px] absolute top-0 right-0 m-[15px]"
            v-on:click="ifOpen = !ifOpen"
        >
          <img class="block"
              src="/svg/cancel.svg"
              alt="x">
        </div>
      </div>
      <ul>
        <li
            v-for="item in menu"
            class="p-[10px] border-solid border-b-[1px]"
        >
          <a href="">{{ item }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="hero__main h-full -mt-[75px] pt-[75px] sm:w-[660px] container flex flex-col pb-[45px]">
    <h1 class="text-white pt-32 md:pt-[48px] text-hero-main text-center font-bold">5 ЛЕТ</h1>
    <p class="text-white text-hero-legend -mt-[25px] pt-legend text-center tracking-[.85px]">ПРОИЗВОДИМ ОБОРУДОВАНИЕ</p>
    <p class="text-white text-hero-legend text-center tracking-[.81px]">СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ</p>
    <div class="flex flex-col items-center md:flex-row justify-center gap-5 mt-auto md:mt-[37px]">
      <button class="md:h-[40px] w-full h-[60px] md:w-[189px] font-regular rounded-[10px] text-base _btn-orange">ОСТАВИТЬ ЗАЯВКУ</button>
      <button class="md:h-[40px] w-full h-[60px] md:w-[189px] font-regular rounded-[10px] text-base _btn-transparent">УЗНАТЬ БОЛЬШЕ</button>
    </div>
  </div>
</div>

</template>

<style scoped>

.active {

}
</style>