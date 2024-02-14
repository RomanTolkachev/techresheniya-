<script setup>

import {ref, watch} from "vue";

const props = defineProps({
  menu: {
    required: true,
  }
})

const ifOpen = ref(false)

</script>

<template>
  <div class="fixed z-10 top-0 bg-white w-full">
    <header class="px-[20px] h-[65px] shadow-lg">
      <div class="flex justify-between items-center h-full z-20">
        <a class="block" href="#">
          <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
        </a>
        <div
          class="w-[40px]"
          v-on:click="ifOpen = !ifOpen">
          <img v-if="!ifOpen" src="/svg/burger.svg" alt="burg">
          <img v-if="ifOpen" src="/svg/cancel.svg" alt="burg">
        </div>
      </div>
      <nav class="absolute w-2/5 top-[55px] text-20px h-svh bg-white transition-all duration-500 shadow-[-200px_-7px_80px_200px_rgba(0,0,0,0.44)]"
          v-bind:class="[ifOpen ? 'right-0' : 'right-[-200%]']">
        <ul>
          <li class="p-[10px] border-solid border-y-[1px]"> Главная </li>
          <li
              v-for="item in menu"
              class="p-[10px] border-solid border-b-[1px]"> {{ item.name }}
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>

</style>