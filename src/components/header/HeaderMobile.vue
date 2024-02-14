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
  <div
      class="z-[100] fixed top-0 bg-white w-full"
  >
    <header
        class="px-[20px] h-[65px] shadow-lg"
    >
      <div class="flex justify-between items-center h-full">
        <a class="block" href="#">
          <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
        </a>
        <div
            class="w-[40px]"
            v-on:click="ifOpen = !ifOpen">
          <img
              v-if="!ifOpen"
              src="/svg/burger.svg"
              alt="burg">

          <img
              v-if="ifOpen"
              src="/svg/cancel.svg"
              alt="burg">

        </div>
      </div>
      <nav
          class="absolute w-2/5 top-[65px] right-0 text-20px h-svh bg-white transition-all duration-500"
          v-bind:class="[ifOpen ? 'right-0' : 'right-[-100%]']"
      >
        <ul>
          <li class="p-[10px] border-solid border-y-[1px]"> Главная </li>
          <li
              v-for="item in menu"
              class="p-[10px] border-solid border-b-[1px]"
          > {{ item.name }}
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>

</style>